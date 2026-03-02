# API Contract - Plataforma Digital Textil

Fecha: 2026-03-02
Base: Código en GIDs/Textil_mvp (org-app/master)
Total: 35 endpoints en 19 archivos de ruta

---

## Convenciones

- **Auth:** `session = await auth()` via NextAuth v5
- **Ownership:** verificación de que el recurso pertenece al usuario logueado
- **Paginación:** `?page=1&limit=10` → respuesta `{ data, total, page, totalPages }`
- **Errores:** JSON `{ error: "mensaje" }` con status HTTP apropiado

---

## 1. AUTH

### POST /api/auth/registro
**Auth:** Público
**Body:** `{ email, password, role: "TALLER"|"MARCA", name?, phone?, tallerData?: { nombre, cuit, ubicacion?, capacidadMensual? }, marcaData?: { nombre, cuit, ubicacion?, tipo? } }`
**Validación:** Zod — email válido, password min 8, tallerData requerido si TALLER, marcaData si MARCA
**Response 201:** User creado (sin password)
**Errores:** 400 datos inválidos, 409 email duplicado / CUIT duplicado
**Notas:** Crea User + Taller/Marca en transacción. Normaliza email a lowercase. Hashea password con bcrypt(10).

### GET /api/auth/mi-cuenta
**Auth:** Requerido (cualquier rol)
**Response 200:** `{ id, name, email, phone, role }`
**Errores:** 401, 404

### PUT /api/auth/mi-cuenta
**Auth:** Requerido (cualquier rol)
**Body:** `{ name?, phone?, currentPassword?, newPassword? }`
**Response 200:** User actualizado
**Errores:** 400 (password corta, sin currentPassword, password incorrecta), 401
**Notas:** Si newPassword, requiere currentPassword válida. Hashea con bcrypt(10).

### POST /api/auth/password-reset
**Auth:** Público
**Body:** `{ email }`
**Response 200:** `{ ok: true }` (siempre, para evitar enumeración de emails)
**Notas:** Genera token random hex 32 bytes, expira en 1 hora. Envía email via SendGrid. Borra tokens previos del mismo email.

### POST /api/auth/password-reset/[token]
**Auth:** Público
**Body:** `{ password }`
**Response 200:** `{ ok: true }`
**Errores:** 400 (token inválido/expirado, password < 6 chars)
**Notas:** Valida token, actualiza password, elimina token usado. BUG: valida min 6 en API pero registro exige min 8.

---

## 2. TALLERES

### GET /api/talleres
**Auth:** Público (directorio)
**Query:** `?nivel=PLATA&proceso=Corte&prenda=Remera&zona=CABA&q=nombre&page=1&limit=10`
**Response 200:** `{ talleres: [...], total, page, totalPages }`
**Includes:** procesos, prendas, user (email, phone, active)
**Notas:** Ordena por puntaje desc. Filtros server-side con Prisma where dinámico.

### GET /api/talleres/[id]
**Auth:** Público
**Response 200:** Taller completo con user, procesos, prendas, maquinaria, certificaciones, validaciones
**Errores:** 404

### PUT /api/talleres/[id]
**Auth:** Requerido | **Ownership:** userId match o ADMIN
**Body:** Campos opcionales del taller + `{ maquinaria?: [], procesosIds?: [], prendasIds?: [], puntaje? }`
**Response 200:** Taller actualizado
**Errores:** 401, 403, 404
**Notas:** Reemplaza maquinaria, procesos y prendas completos (deleteMany + createMany). Usado por el wizard de perfil.

### GET /api/talleres/me
**Auth:** Requerido (TALLER)
**Response 200:** Taller del usuario logueado con maquinaria
**Errores:** 401, 404
**Notas:** Busca por userId de session. Usado para pre-cargar datos en wizard.

---

## 3. MARCAS

### GET /api/marcas
**Auth:** Requerido | **Role:** ADMIN
**Query:** `?page=1&limit=10`
**Response 200:** `{ marcas: [...], total, page, totalPages }`
**Includes:** user (email, name, phone, active)

### GET /api/marcas/[id]
**Auth:** Público
**Response 200:** Marca con user y pedidos
**Errores:** 404

### PUT /api/marcas/[id]
**Auth:** Requerido | **Ownership:** userId match o ADMIN
**Body:** `{ nombre, ubicacion, tipo, website, volumenMensual, frecuenciaCompra }`
**Response 200:** Marca actualizada
**Errores:** 401, 403, 404

---

## 4. PEDIDOS

### GET /api/pedidos
**Auth:** Requerido | **Role:** ADMIN ve todos, MARCA ve solo los suyos, TALLER bloqueado (403)
**Query:** `?estado=BORRADOR&marcaId=xxx&page=1&limit=10`
**Response 200:** `{ pedidos: [...], total, page, totalPages }`
**Includes:** marca (id, nombre), _count ordenes

### POST /api/pedidos
**Auth:** Requerido | **Role:** MARCA o ADMIN
**Body:** `{ tipoPrenda, cantidad, fechaObjetivo?, montoTotal? }`
**Response 201:** Pedido creado en BORRADOR con omId generado (OM-YYYY-XXXXXXXX)
**Errores:** 400 (datos inválidos), 401, 404 (marca no encontrada)

### GET /api/pedidos/[id]
**Auth:** Público (sin ownership check en GET)
**Response 200:** Pedido con marca, ordenes (con taller y hitos)
**Errores:** 404
**Nota:** Las ordenes incluyen `hitos: true` (EscrowHito) — pendiente de limpiar (PLAN_SCHEMA Fase 4).

### PUT /api/pedidos/[id]
**Auth:** Requerido | **Ownership:** marca.userId match o ADMIN
**Body:** `{ estado?: "CANCELADO", progresoTotal?, fechaObjetivo?, montoTotal? }`
**Response 200:** Pedido actualizado
**Errores:** 400 (solo CANCELADO manual, no puede cancelar COMPLETADO/CANCELADO), 401, 403, 404
**Notas:** Si estado=CANCELADO, cascadea a ordenes pendientes en transacción. Otros campos se actualizan sin restricción.

### GET /api/pedidos/[id]/ordenes
**Auth:** Requerido | **Ownership:** marca.userId o ADMIN (via checkPedidoAccess)
**Response 200:** Array de ordenes con taller y hitos
**Errores:** 401, 403

### POST /api/pedidos/[id]/ordenes
**Auth:** Requerido | **Ownership:** marca.userId o ADMIN
**Body:** `{ moId, tallerId, proceso, estado, precio, plazoDias? }`
**Response 201:** Orden creada
**Errores:** 401, 403
**Notas:** Auto-transiciona pedido BORRADOR → EN_EJECUCION al crear primera orden.

### PUT /api/ordenes/[id]
**Auth:** Requerido | **Ownership:** taller.userId o ADMIN
**Body:** `{ estado?, progreso? }`
**Response 200:** Orden actualizada
**Errores:** 400 (transición inválida), 401, 403, 404
**Transiciones válidas:** PENDIENTE→EN_EJECUCION|CANCELADO, EN_EJECUCION→COMPLETADO|CANCELADO
**Notas:** Si progreso llega a 100%, auto-completa la orden. Recalcula estado y progreso del pedido padre. Si todas las ordenes activas están COMPLETADAS, pedido pasa a COMPLETADO.

---

## 5. FORMALIZACIÓN

### GET /api/validaciones
**Auth:** Requerido | **Role:** ADMIN o ESTADO
**Query:** `?tallerId=xxx&page=1&limit=10`
**Response 200:** `{ validaciones: [...], total, page, totalPages }`

### POST /api/validaciones
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ tallerId, tipo, estado?, detalle?, documentoUrl?, fechaVencimiento? }`
**Response 201:** Validación creada

### PUT /api/validaciones/[id]
**Auth:** Requerido | **Ownership:** taller.userId (puede editar detalle/doc) o ADMIN (puede cambiar estado)
**Body:** `{ estado?, detalle?, documentoUrl?, fechaVencimiento? }`
**Response 200:** Validación actualizada
**Errores:** 401, 403, 404
**Notas:** Talleres NO pueden cambiar estado (previene self-approve). Solo ADMIN puede aprobar/rechazar. Loguea acción.

### POST /api/validaciones/[id]/upload
**Auth:** Requerido | **Ownership:** taller.userId
**Body:** FormData con campo `file`
**Response 200:** Validación actualizada con documentoUrl y estado PENDIENTE
**Errores:** 400 (tipo no permitido, >5MB, estado no permite upload), 401, 403, 404
**Notas:** MIME permitidos: PDF, JPG, PNG, WEBP. Max 5MB. Solo permite upload si estado es NO_INICIADO o RECHAZADO. Sube a Supabase Storage. Si storage no configurado, continúa sin URL.

### GET /api/tipos-documento
**Auth:** Requerido
**Response 200:** Array de tipos de documento ordenados por nombre

### POST /api/tipos-documento
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ nombre, descripcion?, requerido?, activo? }`
**Response 201:** Tipo creado
**Errores:** 409 nombre duplicado

### PUT /api/tipos-documento
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ id, nombre, descripcion?, requerido?, activo? }`
**Response 200:** Tipo actualizado

---

## 6. ACADEMIA

### GET /api/colecciones
**Auth:** Público
**Query:** `?categoria=xxx&page=1&limit=10`
**Response 200:** `{ colecciones: [...], total, page, totalPages }`
**Includes:** _count videos

### GET /api/colecciones/[id]
**Auth:** Público
**Response 200:** Colección con videos (ordenados) y evaluación
**Errores:** 404

### PUT /api/colecciones/[id]
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ titulo, descripcion, categoria, duracion, institucion, orden, activa }`
**Response 200:** Colección actualizada

### DELETE /api/colecciones/[id]
**Auth:** Requerido | **Role:** ADMIN
**Response 200:** `{ ok: true }`

### POST /api/colecciones
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ titulo, descripcion?, categoria?, institucion?, duracion?, activa? }`
**Response 201:** Colección creada

### POST /api/colecciones/[id]/videos
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ titulo, youtubeUrl, duracion?, orden? }`
**Response 201:** Video agregado (calcula orden automático si no se provee)

### DELETE /api/colecciones/[id]/videos?videoId=xxx
**Auth:** Requerido | **Role:** ADMIN
**Response 200:** `{ ok: true }`

### POST /api/colecciones/[id]/progreso
**Auth:** Requerido (TALLER)
**Body:** `{ videosVistos, totalVideos }`
**Response 200:** Progreso actualizado/creado (upsert)
**Notas:** Calcula porcentajeCompletado automáticamente.

### GET /api/colecciones/[id]/evaluacion
**Auth:** Requerido | **Role:** ADMIN
**Response 200:** Evaluación con preguntas (JSON) o null

### PUT /api/colecciones/[id]/evaluacion
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ preguntas: [...], puntajeMinimo? }`
**Response 200:** Evaluación creada/actualizada (upsert)

### POST /api/colecciones/[id]/evaluacion
**Auth:** Requerido (TALLER)
**Body:** `{ respuestas: number[] }` (índice de opción elegida por pregunta)
**Response 200:** `{ calificacion, aprobado, certificado? }`
**Notas:** Corrige respuestas contra evaluación, genera certificado con código único si aprueba. Aplica nivel.

### GET /api/certificados
**Auth:** Público
**Query:** `?tallerId=xxx&page=1&limit=10`
**Response 200:** `{ certificados: [...], total, page, totalPages }`

### PATCH /api/certificados
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ id, motivo? }`
**Response 200:** Certificado revocado
**Notas:** Marca revocado=true, recalcula nivel del taller via aplicarNivel(), loguea acción.

### GET /api/certificados/[codigo]
**Auth:** Público (intencionalmente, para verificación QR)
**Response 200:** Certificado con taller y colección
**Errores:** 404

---

## 7. FISCALIZACIÓN

### GET /api/auditorias
**Auth:** Requerido | **Role:** ADMIN o ESTADO
**Query:** `?estado=PROGRAMADA&tallerId=xxx&page=1&limit=10`
**Response 200:** `{ auditorias: [...], total, page, totalPages }`
**Includes:** taller (nombre, nivel), acciones correctivas

### POST /api/auditorias
**Auth:** Requerido | **Role:** ADMIN o ESTADO
**Body:** `{ tallerId, inspectorId?, fecha?, tipo?, prioridad? }`
**Response 201:** Auditoría creada

### GET /api/auditorias/[id]
**Auth:** Requerido | **Role:** ADMIN o ESTADO
**Response 200:** Auditoría con taller y acciones
**Errores:** 404

### PUT /api/auditorias/[id]
**Auth:** Requerido | **Role:** ADMIN o ESTADO
**Body:** `{ estado?, resultado?, hallazgos?, fecha? }`
**Response 200:** Auditoría actualizada

### GET /api/denuncias
**Auth:** Requerido | **Role:** ADMIN o ESTADO
**Query:** `?estado=RECIBIDA&page=1&limit=10`
**Response 200:** `{ denuncias: [...], total, page, totalPages }`

### POST /api/denuncias
**Auth:** Público (intencionalmente, denuncias anónimas)
**Body:** `{ tipo, descripcion, tallerId?, anonima?, evidenciaUrl? }`
**Response 201:** Denuncia con código generado (DEN-YYYY-NNNNN)

### GET /api/denuncias/[codigo]
**Auth:** Público
**Response 200:** `{ codigo, tipo, estado, createdAt, anonima }` (campos seguros, sin descripción)
**Errores:** 404

---

## 8. ADMIN

### GET /api/admin/stats
**Auth:** Requerido | **Role:** ADMIN
**Response 200:** `{ talleres, marcas, pedidos, auditorias, usuarios, denuncias, certificados, pedidosPorEstado, talleresPorNivel }`

### GET /api/admin/logs
**Auth:** Requerido | **Role:** ADMIN
**Query:** `?userId=xxx&accion=AUTH&page=1&limit=50`
**Response 200:** `{ logs: [...], total, page, totalPages }`
**Includes:** user (email, name)

### GET /api/admin/config
**Auth:** Requerido | **Role:** ADMIN
**Response 200:** Array de configuraciones del sistema

### PUT /api/admin/config
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ clave, valor, grupo? }`
**Response 200:** Configuración upserted

### GET /api/admin/usuarios
**Auth:** Requerido | **Role:** ADMIN
**Query:** `?role=TALLER&q=nombre&page=1&limit=10`
**Response 200:** `{ usuarios: [...], total, page, totalPages }`

### POST /api/admin/usuarios
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ email, password, name?, role?, phone? }`
**Response 201:** User creado
**Errores:** 409 email duplicado
**Nota:** NO crea Taller/Marca asociado (a diferencia de /registro). Sin Zod.

### GET /api/admin/usuarios/[id]
**Auth:** Requerido | **Role:** ADMIN
**Response 200:** User (sin password)

### PUT /api/admin/usuarios/[id]
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ name?, role?, active?, phone? }`
**Response 200:** User actualizado

### DELETE /api/admin/usuarios/[id]
**Auth:** Requerido | **Role:** ADMIN
**Response 200:** `{ ok: true }`
**Notas:** Soft-delete (active=false), no borra.

---

## 9. PÚBLICO

### GET /api/stats/public
**Auth:** Público
**Response 200:** `{ talleres, marcas, certificados }` (counts sin datos sensibles)
**Notas:** force-dynamic. Fallback a zeros si DB no responde.

### GET /api/catalogos
**Auth:** Público
**Response 200:** `{ procesos: [...], prendas: [...] }`
**Notas:** Devuelve todos los procesos productivos y tipos de prenda.

### GET /api/procesos
**Auth:** Requerido
**Response 200:** Array de procesos con _count talleres

### POST /api/procesos
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ nombre, descripcion?, activo? }`
**Response 201:** Proceso creado
**Errores:** 409 nombre duplicado

### PUT /api/procesos
**Auth:** Requerido | **Role:** ADMIN
**Body:** `{ id, nombre, descripcion?, activo? }`
**Response 200:** Proceso actualizado

### GET /api/exportar
**Auth:** Requerido | **Role:** ADMIN o ESTADO
**Query:** `?tipo=talleres|resumen`
**Response 200:** CSV como texto
**Content-Type:** text/csv con headers de descarga
**Notas:** Genera CSV real con datos de Prisma. Soporta tipo "talleres" y "resumen".

---

## APIs faltantes (pendientes de implementar)

| Endpoint | Prioridad | Sprint |
|----------|:---------:|:------:|
| POST /api/arca/verificar-cuit | P1 | 2 |
| POST /api/auth/verify-email | P2 | 3 |
| GET /api/certificados/[codigo]/pdf | P2 | 3 |
| POST /api/auditorias/[id]/informe | P2 | 3 |
| GET /api/auth/mi-cuenta | ~~P2~~ | ~~Ya implementado~~ |

---

## Problemas de seguridad pendientes

| Problema | Endpoint | Estado |
|----------|----------|--------|
| ~~Notificaciones userId no validado~~ | /api/notificaciones | **RESUELTO** — GET usa session.user.id, PUT valida ownership |
| GET pedidos/[id] sin auth | /api/pedidos/[id] | Pendiente — cualquiera puede ver un pedido si conoce el ID |
| Password reset valida min 6, registro min 8 | /api/auth/password-reset/[token] | Pendiente — debería ser min 8 en ambos |
