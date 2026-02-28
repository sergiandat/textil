# 04 - Hoja de Ruta de Implementación

## Principios NO Negociables

### 1. Gobernanza tripartita desde día 1
Mesa tripartita (Estado + Empleadores + Trabajadores) decide QUÉ se construye, CÓMO, y CUÁNDO.

### 2. Fiscalización es HABILITADORA, no punitiva
Estado monitorea desde pedido #1 pero con enfoque PREVENTIVO.

### 3. Desarrollo iterativo cada 3 meses
Liberamos funcionalidad mínima, validamos con usuarios reales, ajustamos.

### 4. Inclusión progresiva, no expulsión
Talleres en proceso de formalización pueden entrar con plan de regularización.

### 5. Código abierto y auditable
Todo el código en GitHub, blockchain para verificación.

---

## MVP (Meses 0-6)

### Pregunta Clave
> "¿Pueden 20 talleres y 10 marcas hacer pedidos verificables con trabajo decente, pagos garantizados, y supervisión tripartita, en 6 meses?"

### Métricas de Éxito

| Métrica | Objetivo MVP |
|---------|--------------|
| Talleres registrados | 20 |
| Marcas activas | 10 |
| Pedidos completados | 212 |
| Valor transado | $2.1M USD |
| Tasa de disputa | <5% |
| Satisfacción | >80% |

### Funciones en MVP (6 de 10)

| Función | Estado | Barrera que resuelve |
|---------|--------|---------------------|
| ENCONTRAR | ✅ Directorio + búsqueda simple | Falta de clientes |
| ACORDAR | ✅ Contrato digital básico | Desconfianza |
| PAGAR | ✅ Escrow con Mercado Pago | Desconfianza |
| COMPLIANCE | ✅ Verificación CUIT | Formalización |
| FISCALIZAR | ✅ Dashboard básico | Estado ausente |
| APRENDER | ✅ Catálogo + certificados | Comunidad de aprendizaje |
| EJECUTAR | ❌ Fase 1 | - |
| VERIFICAR | ❌ Fase 1 | - |
| LOGÍSTICA | ❌ Fase 1 | - |
| GOBERNAR | ❌ Fase 1 | - |

### Cronograma MVP (Equipo: 2 devs + Claude)

```
═══════════════════════════════════════════════════════════════
FASE DESARROLLO: 2 MESES (8 semanas)
═══════════════════════════════════════════════════════════════

SEMANA 1: SETUP + AUTH
├── Dev 1: Proyecto Next.js + Supabase + Deploy Vercel
├── Dev 2: NextAuth + modelo usuarios
└── Claude: Scaffolding, tipos TypeScript, componentes base

SEMANA 2: AUTH + PERFILES
├── Dev 1: Registro marca/taller + login
├── Dev 2: Perfiles editables + verificación CUIT (mock)
└── Claude: Validaciones, formularios, tests unitarios

SEMANA 3-4: PEDIDOS + ENCONTRAR
├── Dev 1: CRUD pedidos + dashboard marca
├── Dev 2: Dashboard taller + lista pedidos
└── Claude: Componentes UI, filtros, búsqueda

SEMANA 5-6: ACORDAR + PAGAR
├── Dev 1: Cotizaciones + contratos digitales
├── Dev 2: Integración Mercado Pago + escrow
└── Claude: Lógica de estados, webhooks, notificaciones

SEMANA 7: APRENDER
├── Dev 1: Catálogo cursos + inscripciones
├── Dev 2: Certificados PDF + perfil público
└── Claude: Generación PDF, tracking progreso

SEMANA 8: FISCALIZAR + INTEGRACIÓN
├── Dev 1: Dashboard inspector + alertas
├── Dev 2: Integración AFIP real (reemplazar mock)
└── Claude: Tests E2E, documentación API

═══════════════════════════════════════════════════════════════
FASE IMPLEMENTACIÓN Y PRUEBAS: 4 MESES
═══════════════════════════════════════════════════════════════

MES 3: PILOTO INICIAL
├── Onboarding 5 talleres + 3 marcas
├── Soporte intensivo
├── Recopilación feedback
└── Fixes críticos

MES 4: EXPANSIÓN PILOTO
├── Escalar a 15 talleres + 8 marcas
├── Primeras transacciones reales
├── Ajustes UX basados en uso
└── Capacitación usuarios

MES 5: ESTABILIZACIÓN
├── 20 talleres + 10 marcas objetivo
├── Monitoreo de métricas
├── Optimización performance
└── Documentación para soporte

MES 6: EVALUACIÓN Y CIERRE MVP
├── Evaluación métricas vs objetivos
├── Documentación de aprendizajes
├── Plan para Fase 1
└── Decisión: escalar o iterar

TOTAL: 6 MESES
```

### Pantallas MVP (10 pantallas)

| # | Pantalla | Rol | Función |
|---|----------|-----|---------|
| 1 | Landing/Login | Todos | Auth |
| 2 | Perfil | Todos | Compliance |
| 3 | Dashboard Marca | Marca | - |
| 4 | Crear Pedido | Marca | Encontrar |
| 5 | Ver Talleres | Marca | Encontrar |
| 6 | Dashboard Taller | Taller | - |
| 7 | Aceptar Pedido | Taller | Acordar |
| 8 | Catálogo Cursos | Taller | Aprender |
| 9 | Mis Certificados | Taller | Aprender |
| 10 | Dashboard Inspector | Estado | Fiscalizar |

---

## Fase 1 (Meses 7-12)

### Objetivos
- Escalar de 20 a 100 talleres
- Escalar de 10 a 50 marcas
- Agregar funciones faltantes (EJECUTAR, VERIFICAR, LOGÍSTICA, GOBERNAR)
- Integrar blockchain real (Polygon)
- IA para matching avanzado
- Certificados avanzados con blockchain

### Métricas Fase 1

| Métrica | Objetivo |
|---------|----------|
| Talleres | 100 |
| Marcas | 50 |
| Pedidos | 1,060 |
| Valor transado | $10.6M USD |

---

## Fase 2 (Meses 13-24)

### Objetivos
- Escalar nacionalmente
- Integración completa con AFIP/ANSES
- Sostenibilidad financiera
- Replicación en otros países (OIT)

---

## Presupuesto MVP

**Presupuesto total OIT:** $20,000 USD = $29,700,000 ARS
**Tipo de cambio:** $1,485 ARS/USD (oficial, enero 2026)
**Equipo:** 6 personas (2 desarrollo + 4 implementación)

### Presupuesto en Pesos Argentinos

| Actividad | Días | Valor/día ARS | Total ARS |
|-----------|------|---------------|-----------|
| Elaboración plan de trabajo e informes | 13 | 409,136 | 5,318,768 |
| Coordinación reuniones técnicas | 5 | 409,136 | 2,045,680 |
| **Diseño y desarrollo del prototipo** | **36** | **409,136** | **14,728,896** |
| Seguimiento implementación piloto | 5 | 409,136 | 2,045,680 |
| Monitoreo y evaluación de resultados | 3 | 409,136 | 1,227,408 |
| Propuesta estrategia de escalamiento | 1 | 409,136 | 409,136 |
| **Subtotal** | **63** | - | **25,775,568** |
| Fee administración UNTREF (10%) | - | - | 2,577,557 |
| Infraestructura (Claude API, dominio) | - | - | 750,000 |
| **TOTAL** | - | - | **29,103,125** |

**Margen disponible:** ~$600,000 ARS (~$400 USD)

### Detalle Desarrollo (36 días)

#### Etapa 1: Setup + Auth + Perfiles (8 días)

| Día | Tarea | Dev 1 | Dev 2 | Claude |
|-----|-------|-------|-------|--------|
| 1 | Setup inicial | Proyecto Next.js, repo | Supabase, esquema DB | Tipos TypeScript |
| 2 | Configuración | Vercel deploy, env vars | NextAuth config | Componentes base UI |
| 3 | Auth básico | Login/registro marca | Login/registro taller | Validaciones, forms |
| 4 | Auth completo | Recuperar contraseña | Roles y permisos | Tests auth |
| 5 | Perfil marca | CRUD perfil marca | Verificación CUIT (mock) | Componentes perfil |
| 6 | Perfil taller | CRUD perfil taller | Capacidades, ubicación | Forms dinámicos |
| 7 | Verificación | Integración CUIT mock | Niveles bronce/plata/oro | Validaciones CUIT |
| 8 | Cierre etapa | Testing, fixes | Documentación | Tests E2E auth |

#### Etapa 2: Pedidos + Encontrar (8 días)

| Día | Tarea | Dev 1 | Dev 2 | Claude |
|-----|-------|-------|-------|--------|
| 9 | Modelo pedidos | CRUD pedidos backend | Dashboard marca UI | Tipos y esquemas |
| 10 | Crear pedido | Form crear pedido | Validaciones negocio | Componentes form |
| 11 | Lista pedidos | API listado + filtros | Dashboard taller UI | Filtros, búsqueda |
| 12 | Detalle pedido | Vista detalle pedido | Estados del pedido | Cards, badges |
| 13 | Búsqueda talleres | API búsqueda talleres | UI resultados búsqueda | Algoritmo matching |
| 14 | Perfil público | Vista pública taller | Filtros avanzados | SEO, meta tags |
| 15 | Notificaciones | Emails nuevo pedido | UI notificaciones | Templates email |
| 16 | Cierre etapa | Testing, fixes | Documentación | Tests E2E pedidos |

#### Etapa 3: Acordar + Pagar (10 días)

| Día | Tarea | Dev 1 | Dev 2 | Claude |
|-----|-------|-------|-------|--------|
| 17 | Cotizaciones | CRUD cotizaciones | UI cotizar pedido | Validaciones precio |
| 18 | Negociación | Chat/mensajes básico | UI conversación | Componentes chat |
| 19 | Contrato | Modelo contrato | Generación términos | Template contrato |
| 20 | Firma digital | Firma marca | Firma taller | Validación firmas |
| 21 | Mercado Pago setup | SDK, credenciales | Checkout Pro | Documentación MP |
| 22 | Escrow | Crear preferencia | Webhook recepción | Manejo estados |
| 23 | Liberación pago | Confirmar entrega | Liberar fondos | Notificaciones |
| 24 | Historial pagos | API historial | UI mis pagos | Reportes básicos |
| 25 | Disputas básico | Flag disputa | UI reportar problema | Estados disputa |
| 26 | Cierre etapa | Testing MP sandbox | Documentación | Tests E2E pagos |

#### Etapa 4: Aprender (6 días)

| Día | Tarea | Dev 1 | Dev 2 | Claude |
|-----|-------|-------|-------|--------|
| 27 | Catálogo cursos | CRUD cursos (admin) | UI catálogo público | Seed datos cursos |
| 28 | Inscripciones | API inscribirse | UI mis cursos | Validaciones |
| 29 | Progreso | Tracking progreso | UI progreso curso | Cálculo % |
| 30 | Certificados | Generación PDF | UI certificado | Template PDF |
| 31 | Perfil público | Certificados en perfil | Verificación QR/código | Código verificación |
| 32 | Cierre etapa | Testing, fixes | Contenido inicial | Tests E2E cursos |

#### Etapa 5: Fiscalizar + Integración (4 días)

| Día | Tarea | Dev 1 | Dev 2 | Claude |
|-----|-------|-------|-------|--------|
| 33 | Dashboard inspector | Vista inspector | Listado pedidos/talleres | Filtros prioridad |
| 34 | Alertas | Detectar anomalías | UI alertas | Reglas alertas |
| 35 | AFIP real | Reemplazar mock CUIT | Testing integración | Manejo errores |
| 36 | Cierre MVP | Deploy producción | Testing final | Documentación API |

#### Resumen por Etapa

| Etapa | Días | Función | Entregable |
|-------|------|---------|------------|
| 1. Setup + Auth | 8 | COMPLIANCE | Login, perfiles, verificación CUIT |
| 2. Pedidos | 8 | ENCONTRAR | Crear pedidos, buscar talleres |
| 3. Acordar + Pagar | 10 | ACORDAR + PAGAR | Contratos, Mercado Pago, escrow |
| 4. Aprender | 6 | APRENDER | Cursos, certificados PDF |
| 5. Fiscalizar | 4 | FISCALIZAR | Dashboard inspector, alertas |
| **TOTAL** | **36** | **6 funciones** | **MVP completo** |

### Detalle Infraestructura (6 meses)

| Servicio | Plan | $/mes USD | Total ARS |
|----------|------|-----------|-----------|
| Vercel | Pro | $20 | $178,200 |
| Supabase | Pro | $25 | $222,750 |
| Dominio .ar | - | ~$3 | $29,700 |
| **Subtotal Infra** | - | **$48** | **$430,650** |

**Nota:** Claude Max lo pagan los devs (no entra en presupuesto OIT).

---

## Equipo MVP

| Rol | Cantidad | Responsabilidad |
|-----|----------|-----------------|
| Full-stack Dev | 2 | Frontend, Backend, integraciones |
| Claude (IA) | 1 | Scaffolding, componentes, tests, documentación |

### Distribución de Trabajo

```
Dev 1 (Lead)           Dev 2                  Claude
─────────────────────────────────────────────────────────
Arquitectura           Features paralelas     Código boilerplate
Integraciones críticas UI/UX implementation   Componentes React
Code review            Testing manual         Tests automatizados
Deploy/DevOps          Documentación usuario  Documentación técnica
```

### Rol de Claude en el Desarrollo
- **Generación de código**: Componentes, tipos, validaciones
- **Aceleración**: Tareas repetitivas, scaffolding
- **Calidad**: Tests unitarios, E2E, documentación
- **Soporte**: Debugging, optimización, refactoring

---

## Riesgos y Mitigaciones

| Riesgo | Probabilidad | Mitigación |
|--------|--------------|------------|
| Baja adopción de talleres | Media | Incentivos iniciales, acompañamiento presencial |
| Resistencia del Estado | Baja | Involucrar desde día 1 |
| Fallas técnicas | Media | Testing exhaustivo, rollback rápido |
| Cambio de gobierno | Media | Código abierto, documentación completa |

---

## Documento Completo

Ver: `../Plataforma/00_INFORME_FINAL/PARTE_6_HOJA_RUTA_IMPLEMENTACION.md`
