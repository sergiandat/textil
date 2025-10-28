# PREGUNTAS PARA MEJORAR MVP CLICKEABLE v1

**Fecha:** Noviembre 2025
**Proyecto:** Plataforma Textil OIT-UNTREF
**Objetivo:** Iterar sobre el MVP v1 antes de pasar a v2

---

## INSTRUCCIONES

Por favor respondé las preguntas pantalla por pantalla. Podés:
- Agregar comentarios adicionales donde consideres necesario
- Marcar con **[CRÍTICO]** lo que sea urgente cambiar
- Marcar con **[OPCIONAL]** lo que puede esperar a v2
- Adjuntar bocetos/capturas si ayudan a explicar tu idea

---

## PANTALLA 1: LOGIN/REGISTRO (index.html)

### UX y Flujo:
**1.** ¿El login está bien así simplificado (solo CUIT + password) o necesitás agregar más validaciones?
- [ ] Está bien así
- [ ] Agregar: _______________________________

**2.** ¿Te gustaría ver pantallas separadas de REGISTRO completas (una para Marca, otra para Taller) en lugar del link simulado?
- [ ] Sí, crear pantallas completas de registro
- [ ] No, puede esperar a v2
- [ ] Comentario: _______________________________

**3.** ¿La verificación AFIP simulada está OK o querés mostrar más detalles (ej: "Consultando AFIP...", spinner, datos que se verifican)?
- [ ] Está OK así
- [ ] Agregar más detalles: _______________________________

### Contenido:
**4.** ¿El selector "Ingresar como" (Marca/Taller/Trabajador/Inspector) tiene sentido o debería detectarse automáticamente del CUIT?
- [ ] Mantener selector manual
- [ ] Detectar automáticamente
- [ ] Comentario: _______________________________

**5.** ¿Falta algún tipo de usuario en ese selector?
- [ ] No, está completo
- [ ] Sí, agregar: _______________________________

---

## PANTALLA 2: DASHBOARD MARCA (dashboard.html)

### KPIs y Métricas:
**6.** Los 4 KPIs mostrados (Pedidos activos, Completados, Monto, Rating) **¿son los correctos?** ¿Falta alguno importante?
- [ ] Están bien
- [ ] Agregar: _______________________________
- [ ] Quitar: _______________________________

**7.** ¿Los números mock ($2.3M transaccionado, etc.) son realistas o necesitás otros valores de ejemplo?
- [ ] Son realistas
- [ ] Cambiar a: _______________________________

### Pedidos Activos:
**8.** El timeline de pedidos activos muestra: OM ID, tipo prenda, cantidad, progreso %. **¿Falta mostrar algo crítico?** (ej: taller asignado, fecha límite, alertas)
- [ ] Está completo
- [ ] Agregar: _______________________________

**9.** ¿Te gustaría poder filtrar/ordenar los pedidos activos (por fecha, por estado, por urgencia)?
- [ ] Sí, agregar filtros/orden
- [ ] No es necesario
- [ ] Comentario: _______________________________

### Alertas:
**10.** Las alertas actuales son genéricas ("Taller solicita replanificación"). **¿Qué tipos de alertas específicas necesitás ver?**
_______________________________
_______________________________
_______________________________

**11.** ¿Las alertas deberían tener prioridad visual? (rojo=crítico, amarillo=advertencia, verde=info)
- [ ] Sí, con colores diferenciados
- [ ] No es necesario
- [ ] Comentario: _______________________________

### Acciones Rápidas:
**12.** Los 3 botones (Crear pedido, Explorar talleres, Ver contratos) **¿son suficientes?** ¿Falta alguna acción frecuente?
- [ ] Son suficientes
- [ ] Agregar: _______________________________

---

## PANTALLA 3: CREAR PEDIDO (crear-pedido.html)

### Catálogo de Prendas:
**13.** El catálogo tiene 9 tipos de prendas (Jean, Remera, Camisa, EPP, etc.). **¿Falta algún tipo de prenda que se fabrique en Argentina?**
- [ ] Está completo
- [ ] Agregar: _______________________________

**14.** ¿Las variantes de cada prenda son suficientes? (ej: Jean tiene "Clásico, Roturas, Stone wash, Slim fit")
- [ ] Son suficientes
- [ ] Agregar variantes a: _______________________________

### Ruta de Procesos:
**15.** La ruta sugerida se genera automáticamente según el tipo de prenda. **¿Está bien o la marca debería poder editarla manualmente?**
- [ ] Automática está bien
- [ ] Debe ser editable
- [ ] Comentario: _______________________________

**16.** ¿Los procesos opcionales deberían estar marcados visualmente? (ej: "Estampado (opcional)" en remeras)
- [ ] Sí, marcarlos como opcionales
- [ ] No es necesario
- [ ] Comentario: _______________________________

### Requisitos & QA:
**17.** Los checkboxes de requisitos (Evidencia foto, Medidas, QA externo) **¿son suficientes?** ¿Qué otros requisitos suelen pedir las marcas?
- [ ] Son suficientes
- [ ] Agregar: _______________________________

**18.** ¿Falta definir criterios de calidad específicos? (ej: tolerancia en medidas, color exacto, etc.)
- [ ] Sí, agregar: _______________________________
- [ ] No es necesario por ahora

### Logística & Pago:
**19.** Los 3 Incoterms (EXW, FCA, DDP) **¿son los correctos para el sector textil argentino?** ¿Usarían esa terminología o necesitan nombres más simples?
- [ ] Usar Incoterms
- [ ] Usar nombres más simples: _______________________________

**20.** Los hitos de pago predefinidos (20/40/20/20) **¿son editables o fijos?** ¿La marca debería poder personalizar esos porcentajes?
- [ ] Dejar fijos
- [ ] Hacerlos editables
- [ ] Comentario: _______________________________

### Archivos Técnicos:
**21.** Los botones "Subir ficha.pdf" y "Subir moldería.dxf" están simulados. **¿Qué otros archivos técnicos suelen adjuntar las marcas?**
- Ficha técnica: [ ] Sí [ ] No
- Moldería: [ ] Sí [ ] No
- Otros: _______________________________

---

## PANTALLA 4: MATCHING (matching.html)

### Filtros:
**22.** Los filtros actuales son: Nivel (Oro/Plata/Bronce), Ubicación (AMBA/Interior), Rating mínimo. **¿Falta algún filtro crítico?**
- [ ] Están completos
- [ ] Agregar: _______________________________

**23.** ¿El filtro de ubicación debería ser más granular? (ej: por municipio, por provincia)
- [ ] Sí, más granular: _______________________________
- [ ] Está bien AMBA/Interior

### Tabla de Talleres:
**24.** Las columnas son: Proveedor, Zona, Compatibilidad, Precio, On-time, Badges, Acción. **¿Falta alguna columna importante?**
- [ ] Están completas
- [ ] Agregar: _______________________________

**25.** ¿La compatibilidad (ej: 92%) debería explicarse con tooltip al pasar el mouse?
- [ ] Sí, agregar tooltip explicativo
- [ ] No es necesario

### Ranking:
**26.** El orden predeterminado es por compatibilidad. **¿Está bien o debería ser por otro criterio?**
- [ ] Compatibilidad está bien
- [ ] Cambiar a: _______________________________

**27.** La explicación del algoritmo dice "Formalización 40%, Capacidad 30%, Ubicación 20%, Precio 10%". **¿Estos pesos son correctos o los modificarías?**
- [ ] Son correctos
- [ ] Modificar a: _______________________________

### Acción "Invitar":
**28.** Al hacer click en "Invitar" se va directo a acordar contrato. **¿Está bien o debería haber un paso intermedio?**
- [ ] Está bien directo
- [ ] Agregar paso: _______________________________

**29.** ¿Se puede invitar a múltiples talleres a la vez o es 1 por 1?
- [ ] Solo 1 por 1
- [ ] Permitir invitar múltiples
- [ ] Comentario: _______________________________

---

## PANTALLA 5: ACORDAR (acordar.html)

### Términos del Contrato:
**30.** Los campos editables son: Alcance, Plazo, Evidencias, Logística, Precio. **¿Son suficientes?** ¿Falta definir algo más?
- [ ] Son suficientes
- [ ] Agregar: _______________________________

**31.** El precio muestra "$1.700/u – Total: $850.000". **¿Debería desglosarse más?** (ej: materiales, mano de obra, logística)
- [ ] Está bien así
- [ ] Desglosar en: _______________________________

### Historial de Negociación:
**32.** El historial muestra 3 mensajes simulados (Taller propone 14 días, Marca contraoferta, Taller acepta). **¿Esto refleja cómo sería la negociación real?**
- [ ] Sí, es realista
- [ ] No, debería ser: _______________________________

**33.** ¿La negociación debería ser más interactiva? (ej: chat en tiempo real, notificaciones push)
- [ ] Sí, más interactiva
- [ ] Está bien así (puede esperar a v2)

### Firma Digital:
**34.** El checkbox "Acepto términos y condiciones. Firmar digitalmente" **¿es suficiente?** ¿Necesitás mostrar los términos completos?
- [ ] Es suficiente
- [ ] Mostrar términos completos
- [ ] Comentario: _______________________________

**35.** El hash blockchain se genera al firmar (ej: 0x7a3f2b...9c8e). **¿Está bien mostrar solo un fragmento o el hash completo?**
- [ ] Fragmento está bien
- [ ] Mostrar hash completo
- [ ] No mostrar hash

### Información del Taller:
**36.** El sidebar muestra: Nombre, Ubicación, Badges, On-time %, Retrabajo %, Rating. **¿Falta algún dato crítico?**
- [ ] Está completo
- [ ] Agregar: _______________________________

---

## PANTALLA 6: EJECUCIÓN (ejecucion.html)

### Timeline General:
**37.** El timeline muestra los 5 procesos con barra de progreso. **¿Está claro o debería mostrar más info?**
- [ ] Está claro
- [ ] Agregar: _______________________________

**38.** ¿Debería haber un mapa visual de la cadena? (ej: íconos de talleres conectados con flechas)
- [ ] Sí, agregar mapa visual
- [ ] No es necesario

### Evidencias:
**39.** Cada tanda muestra: QR placeholder, tiempo real, estado. **¿Qué otras evidencias deberían subir los talleres?**
_______________________________
_______________________________

**40.** ¿La marca debería poder aprobar/rechazar evidencias directamente desde esta pantalla?
- [ ] Sí, con botones Aprobar/Rechazar
- [ ] No, solo visualizar

### Verificación Trabajo Decente:
**41.** Se muestra: Ventilación ✓, Iluminación ✓, SST vence en 9 días ⚠️, 12 trabajadores registrados ✓. **¿Falta algún indicador crítico?**
- [ ] Está completo
- [ ] Agregar: _______________________________

**42.** ¿Esta sección debería ser más detallada? (ej: fotos clickeables, checklist completo, denuncias anónimas)
- [ ] Sí, más detallada: _______________________________
- [ ] Está bien así

### Alertas:
**43.** Las alertas actuales son: "Pausa repetida > 3", "Tiempo real +8%", "SST vence en 9 días". **¿Qué otras alertas necesitás?**
_______________________________
_______________________________

**44.** ¿Las alertas deberían tener acciones sugeridas? (ej: "Tiempo +8% → [Solicitar replanificación]")
- [ ] Sí, con botones de acción
- [ ] No, solo informativas

### Escrow:
**45.** Se muestra cuánto se liberará al completar cada hito. **¿Está claro o debería mostrar más?**
- [ ] Está claro
- [ ] Agregar: _______________________________

**46.** ¿El escrow debería liberar automáticamente o la marca debe aprobar manualmente?
- [ ] Automático
- [ ] Manual con aprobación de marca
- [ ] Comentario: _______________________________

---

## PANTALLA 7: LOGÍSTICA (logistica.html)

### Opciones de Traslado:
**47.** Las 3 opciones (EXW, FCA, Contratar desde plataforma) **¿reflejan la realidad?** ¿Falta alguna?
- [ ] Reflejan la realidad
- [ ] Agregar opción: _______________________________

**48.** Los costos mostrados ($0, $4.500, $3.200) **¿son realistas?** ¿Cómo se calculan?
- [ ] Son realistas
- [ ] Comentario sobre cálculo: _______________________________

### Información del Traslado:
**49.** Se muestra: Origen, Destino, Distancia, Peso. **¿Falta algo?**
- [ ] Está completo
- [ ] Agregar: _______________________________

**50.** ¿Debería haber tracking en tiempo real del traslado?
- [ ] Sí, con GPS/QR de seguimiento
- [ ] No es necesario por ahora

### Próximos Traslados:
**51.** Los traslados futuros están en estado "Pendiente". **¿Deberían poder programarse con anticipación?** (fecha/hora específica)
- [ ] Sí, permitir programar
- [ ] No, solo coordinar cuando llegue el momento

---

## PANTALLA 8: CIERRE (cierre.html)

### Resumen Financiero:
**52.** Se desglosa por MO + Logística. **¿Está completo o falta desglosar más?** (comisión plataforma, impuestos, descuentos)
- [ ] Está completo
- [ ] Agregar: _______________________________

**53.** ¿Debería generarse un PDF descargable de este resumen?
- [ ] Sí, con botón "Descargar PDF"
- [ ] No es necesario

### Calificaciones:
**54.** Se puede calificar con estrellas (1-5) + comentario opcional. **¿Está bien o deberían ser criterios específicos?**
- [ ] Está bien así
- [ ] Calificar por criterios: _______________________________

**55.** ¿Las calificaciones son públicas o privadas?
- [ ] Públicas (visibles en perfil taller)
- [ ] Privadas (solo para la plataforma)
- [ ] Comentario: _______________________________

### Trazabilidad:
**56.** Se muestra QR único + hash blockchain + link a landing pública. **¿Qué información específica debería tener esa landing page?**
_______________________________
_______________________________
_______________________________

**57.** ¿El QR debería poder imprimirse/descargarse para coser en la prenda?
- [ ] Sí, con botón "Descargar QR para imprimir"
- [ ] No es necesario

---

## PANTALLA 9: EXPLORAR TALLERES (explorar-talleres.html)

### Buscador:
**58.** El buscador filtra por nombre, CUIT, ubicación. **¿Debería buscar también por procesos, especialización, certificaciones?**
- [ ] Sí, agregar a búsqueda: _______________________________
- [ ] Está bien así

**59.** ¿Falta autocompletado o sugerencias mientras se escribe?
- [ ] Sí, agregar autocompletado
- [ ] No es necesario

### Filtros Avanzados:
**60.** Los filtros actuales son: Nivel, Procesos, Ubicación, Rating. **¿Falta alguno?**
- [ ] Están completos
- [ ] Agregar: _______________________________

**61.** ¿Los filtros deberían guardarse para futuras búsquedas?
- [ ] Sí, recordar filtros aplicados
- [ ] No es necesario

### Cards de Talleres:
**62.** Cada card muestra: Nombre, Ubicación, Nivel, Rating, Especialización, Procesos, Badges, 3 stats. **¿Es suficiente o falta algo?**
- [ ] Es suficiente
- [ ] Agregar: _______________________________

**63.** ¿Debería haber opción de "Comparar" (seleccionar 2-3 talleres y verlos lado a lado)?
- [ ] Sí, agregar comparación
- [ ] No es necesario

---

## PANTALLA 10: PERFIL TALLER (perfil-taller.html)

### Información General:
**64.** Se muestra: CUIT verificado, Fundado, Equipo, Certificaciones, Maquinaria. **¿Falta algo importante?**
- [ ] Está completo
- [ ] Agregar: _______________________________

**65.** ¿Debería haber un "tour virtual" del taller? (fotos 360°, videos)
- [ ] Sí, agregar tour virtual
- [ ] No es necesario por ahora

### Capacidades:
**66.** Se listan: Procesos, Especialización, Capacidad mensual, Maquinaria. **¿Está completo?**
- [ ] Está completo
- [ ] Agregar: _______________________________

**67.** ¿La disponibilidad actual debería mostrarse? (ej: "50% capacidad ocupada este mes")
- [ ] Sí, mostrar disponibilidad en tiempo real
- [ ] No es necesario

### Reseñas:
**68.** Se muestran las últimas 5 reseñas. **¿Está bien o deberían filtrarse?** (por tipo de prenda, por fecha)
- [ ] Está bien así
- [ ] Agregar filtros: _______________________________

**69.** ¿Las reseñas deberían poder reportarse si son sospechosas?
- [ ] Sí, con botón "Reportar reseña"
- [ ] No es necesario

### Acciones:
**70.** Los botones son: "Contactar taller" y "Guardar en favoritos". **¿Falta alguna acción?**
- [ ] Son suficientes
- [ ] Agregar: _______________________________

---

## PREGUNTAS TRANSVERSALES (TODO EL MVP)

### Navegación:
**71.** El menú tiene 4 tabs (Dashboard, Crear Pedido, Mis Pedidos, Explorar Talleres). **¿Está completo o falta algo?**
- [ ] Está completo
- [ ] Agregar: _______________________________

**72.** ¿El flujo entre pantallas es intuitivo o te perdiste en algún momento?
- [ ] Es intuitivo
- [ ] Me confundí en: _______________________________

### Diseño Visual:
**73.** Los colores (Sky azul, Slate gris, Emerald verde, Amber amarillo) **¿representan bien la plataforma?**
- [ ] Sí, los colores están bien
- [ ] Cambiar: _______________________________

**74.** ¿Los badges (ORO/PLATA/BRONCE) se entienden claramente?
- [ ] Sí, se entienden
- [ ] Cambiar nomenclatura a: _______________________________

### Datos Mock:
**75.** Los nombres de talleres (Corte Sur SRL, Lavandería BlueDenim, etc.) **¿son realistas o cambiarías algunos?**
- [ ] Son realistas
- [ ] Cambiar: _______________________________

**76.** ¿Los números (precios, cantidades, plazos) son creíbles para el sector?
- [ ] Son creíbles
- [ ] Ajustar: _______________________________

### Funcionalidades Faltantes:
**77.** **¿Qué funcionalidad CRÍTICA falta que notaste al navegar?** (lista todo lo que se te ocurra)

_______________________________
_______________________________
_______________________________
_______________________________
_______________________________

**78.** **¿Hay algo que sobre o confunda?**

_______________________________
_______________________________
_______________________________

---

## COMENTARIOS ADICIONALES

**Agrega cualquier otro comentario, sugerencia o idea que se te haya ocurrido:**

_______________________________
_______________________________
_______________________________
_______________________________
_______________________________
_______________________________
_______________________________
_______________________________

---

**¡Gracias por tu feedback! Una vez completes este formulario, iteraremos el MVP v1 con tus respuestas.**
