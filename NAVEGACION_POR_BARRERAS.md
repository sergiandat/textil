# Guía de Navegación por Barreras - MVP v1.3

**Objetivo**: Este documento especifica cómo navegar el MVP v1.3 para demostrar la resolución de cada una de las 7 barreras durante talleres de validación con actores del sector textil.

**Instrucciones Generales**:
- Cada barrera tiene múltiples puntos de entrada según el tipo de actor
- Las pantallas están interconectadas mediante flujos lógicos
- Durante la demostración, enfatizar elementos visuales específicos que evidencian la solución a la barrera
- Usar alertas del wireframe como recordatorios de funcionalidad futura

---

## B1: FALTA DE TRAZABILIDAD Y TRANSPARENCIA

### Objetivo de Demostración
Mostrar cómo el sistema permite rastrear toda la cadena de producción desde la marca hasta el trabajador, generando confianza mediante transparencia total.

### Flujo Principal: Marca → Taller → Trabajador

**1. Inicio de Pedido con Trazabilidad**
```
index.html (Login como "Marca")
  → dashboard-v1.3.html
  → crear-pedido-v1.3.html [ENFATIZAR: Sistema genera ID trazable automáticamente]
```

**Qué mostrar en crear-pedido-v1.3.html**:
- Campo "ID de Pedido" auto-generado (#PED-2024-00142)
- Detalle completo de especificaciones que quedarán registradas
- Explicar que cada cambio quedará auditado

**2. Matching Transparente**
```
crear-pedido-v1.3.html → Ver recomendaciones
  → seleccionar-proveedor.html [ENFATIZAR: Algoritmo muestra criterios de scoring]
```

**Qué mostrar en seleccionar-proveedor.html**:
- Tarjetas de talleres con puntajes visibles
- Desglose de reputación (Cumplimiento 8.9/10, Calidad 9.2/10)
- Certificaciones verificables (ARCA, STESS)
- Botón "Ver perfil completo" que lleva a más transparencia

**3. Acuerdo con Registro Inmutable**
```
seleccionar-proveedor.html → Seleccionar taller
  → acordar.html [ENFATIZAR: Todos los términos quedan registrados]
```

**Qué mostrar en acordar.html**:
- Todas las condiciones del acuerdo visibles y editables
- Precio unitario: AR$ 2.150/prenda (transparencia de costos)
- Fecha límite acordada
- Estado "Enviado - Esperando confirmación del taller"
- Explicar que una vez aceptado, es inmutable

**4. Ejecución Visible**
```
acordar.html → (Taller acepta)
  → ejecucion.html [ENFATIZAR: Actualización en tiempo real]
```

**Qué mostrar en ejecucion.html**:
- Barra de progreso: 750 / 1200 prendas (62.5%)
- Timeline de entregas parciales
- Comunicaciones bidireccionales registradas
- Evidencia fotográfica de avances (futuro)

**5. Verificación con QR**
```
ejecucion.html → Ver QR de trazabilidad
  → Mostrar código QR [ENFATIZAR: Consumidor final puede escanear]
```

**Qué mostrar en QR**:
- Código QR visible
- Explicar que enlaza a página pública con:
  - Talleres que participaron
  - Nivel de formalización
  - Certificaciones de trabajo decente
  - Fecha de producción

**6. Logística Rastreada**
```
ejecucion.html → Coordinar retiro
  → logistica.html [ENFATIZAR: Pickup transparente]
```

**Qué mostrar en logistica.html**:
- Mapa con ubicación del taller
- Horarios disponibles
- Estado "Retiro programado para 15/01/2025 14:30hs"
- Historial de retiros previos

**7. Pago Trazado**
```
logistica.html → Liberar pago
  → pago.html [ENFATIZAR: Transferencia bancaria registrada]
```

**Qué mostrar en pago.html**:
- Detalle de factura digital
- Impuestos desglosados (IVA, Ganancias, Seguridad Social)
- Método: Transferencia bancaria (no efectivo)
- Estado "Pago procesado - Comprobante enviado"

### Flujo Alternativo: Consumidor Final (Futuro)

```
Escaneo de QR en prenda
  → Página pública de trazabilidad
  → Ver cadena completa de producción
```

**Qué explicar**:
- Consumidores pueden verificar origen ético
- Esto genera incentivo para marcas a usar la plataforma
- Resuelve B1 desde el lado de la demanda final

### Actores a Validar con Este Flujo
- **Marcas**: ¿Les genera valor conocer la trazabilidad completa?
- **Talleres**: ¿Sienten que la transparencia los beneficia o expone?
- **Trabajadores**: ¿El QR público los protege o estigmatiza?
- **Consumidores**: ¿Pagarían más por prendas con trazabilidad verificada?

---

## B2: DESCONFIANZA ENTRE ACTORES

### Objetivo de Demostración
Mostrar cómo el sistema construye confianza mediante reputaciones verificables, garantías tripartitas, y mecanismos de resolución de conflictos.

### Flujo Principal: Construcción de Reputación

**1. Reputación Basada en Datos**
```
index.html (Login como "Marca")
  → dashboard-v1.3.html
  → seleccionar-proveedor.html [ENFATIZAR: Scores verificables, no rumores]
```

**Qué mostrar en seleccionar-proveedor.html**:
- Taller "Confecciones Norte": 8.9/10 basado en 127 pedidos
- Desglose transparente:
  - Cumplimiento de plazos: 8.9/10
  - Calidad del producto: 9.2/10
  - Comunicación: 8.5/10
  - Formalización: 7.8/10
- Certificaciones ARCA, STESS como señales de confianza
- Comentarios de otras marcas (futuro)

**2. Acuerdos con Garantía Institucional**
```
seleccionar-proveedor.html → Seleccionar
  → acordar.html [ENFATIZAR: Mesa Tripartita supervisa]
```

**Qué mostrar en acordar.html**:
- Mensaje: "Este acuerdo está supervisado por la Mesa Tripartita"
- Condiciones claras y equilibradas
- Mecanismo de arbitraje en caso de conflicto
- Ambas partes deben aceptar explícitamente

**3. Denuncias Anónimas y Rastreables**
```
index.html (Login como "Trabajador")
  → denuncias.html [ENFATIZAR: Protección al denunciante]
```

**Qué mostrar en denuncias.html**:
- Modalidad anónima: "Tu identidad NO será revelada ni siquiera a la Mesa Tripartita"
- Modalidad identificada: "Podrás hacer seguimiento con código único #DEN-2025-00891"
- Tipos de denuncia: Trabajo infantil, condiciones inseguras, salarios por debajo convenio, discriminación
- Área de texto con mínimo 50 caracteres para forzar detalle
- Upload de evidencia (fotos, documentos)
- Estadísticas públicas de transparencia:
  - 12 denuncias en últimos 30 días
  - 8 resueltas (66.7%)
  - 18 días promedio de resolución

**4. Auditorías Sorpresivas**
```
index.html (Login como "Inspector STESS")
  → auditorias.html [ENFATIZAR: Control estatal presente]
```

**Qué mostrar en auditorias.html (Vista Inspector)**:
- Lista de talleres priorizados algorítmicamente
- "Confecciones Sur: ALTA PRIORIDAD" (denuncia reciente + tiempo sin auditoría)
- Botón "Agendar auditoría sorpresa"
- Calendario de próximas inspecciones
- Historial de auditorías pasadas con resultados

**5. Seguimiento de Acciones Correctivas**
```
auditorias.html → Cambiar a Vista Taller [ENFATIZAR: Mejora continua]
```

**Qué mostrar en auditorias.html (Vista Taller)**:
- Tabla de acciones correctivas post-auditoría:
  - "Instalar señalética de salidas de emergencia": ✅ Completo
  - "Capacitar a trabajadores en uso de extintores": ⏳ En progreso (60%)
  - "Actualizar plan de evacuación": ❌ Pendiente
- Plazo: 15 días para completar
- Mensaje: "1/3 acciones completadas - Auditoría de seguimiento programada para 20/02/2025"

**6. Pago Garantizado con Escrow (Futuro)**
```
ejecucion.html → Pedido completo
  → pago.html [ENFATIZAR: Fondos retenidos hasta verificación]
```

**Qué explicar en pago.html**:
- Aunque no está implementado en MVP, explicar concepto de escrow:
  - Marca deposita fondos al inicio
  - Plataforma retiene hasta verificación de entrega
  - Taller recibe pago automático al cumplir
- Esto elimina desconfianza sobre impago

### Flujo Alternativo: Reconstrucción de Confianza después de Conflicto

```
denuncias.html (Trabajador denuncia)
  → auditorias.html (Inspector audita)
  → auditorias.html (Taller corrige)
  → seleccionar-proveedor.html (Reputación se recupera gradualmente)
```

**Qué explicar**:
- El sistema no penaliza permanentemente
- Permite rehabilitación mediante acciones verificables
- Esto fomenta mejora continua vs. exclusión

### Actores a Validar con Este Flujo
- **Marcas**: ¿Confiarían en talleres con buen score aunque no los conozcan personalmente?
- **Talleres**: ¿Sienten que el sistema de reputación es justo?
- **Trabajadores**: ¿Se animarían a denunciar usando modalidad anónima?
- **Inspectores**: ¿El algoritmo de priorización refleja riesgos reales?

---

## B3: PROCESO DE FORMALIZACIÓN COMPLEJO Y COSTOSO

### Objetivo de Demostración
Mostrar cómo el sistema simplifica y gamifica el proceso de formalización, dividiéndolo en pasos incrementales con asistencia en cada etapa.

### Flujo Principal: Formalización Progresiva

**1. Estado Actual de Formalización**
```
index.html (Login como "Taller")
  → dashboard-taller.html
  → validaciones.html [ENFATIZAR: Checklist visual, no burocracia opaca]
```

**Qué mostrar en validaciones.html**:
- Círculo de progreso grande: 65% completado
- 8 validaciones con estados claros:
  - ✅ **Registro ARCA**: Completo - CUIT 20-12345678-9
  - ✅ **Alta en STESS**: Completo - Nº Establecimiento 14-1234567-8
  - ✅ **Registro Municipal**: Completo - Habilitación Nº 9876
  - ✅ **ART**: Completo - Galeno ART Póliza #45678
  - ⚠️ **Habilitación Bomberos**: Pendiente - Vence 30/03/2025 (RENOVAR)
  - ❌ **Plano arquitectónico**: Falta - Observado por Municipio
  - ❌ **Certificado eléctrico**: Falta
  - ❌ **Seguro de incendio**: Falta
- Comparación social: "Promedio talleres similares (10-20 trabajadores): 78%"
- Botón "Ver cronograma de formalización" → progreso-formalizacion.html

**2. Cronograma Detallado con Asistencia**
```
validaciones.html → Ver cronograma
  → progreso-formalizacion.html [ENFATIZAR: Paso a paso con ayuda]
```

**Qué mostrar en progreso-formalizacion.html**:
- Timeline visual con 5 etapas:
  - ✅ Etapa 1: Registros básicos (ARCA, STESS) - Completado
  - ✅ Etapa 2: Seguros y ART - Completado
  - 🔄 Etapa 3: Habilitaciones municipales - EN CURSO (pulso animado)
  - ⏸️ Etapa 4: Seguridad e higiene - Próximo
  - ⏸️ Etapa 5: Certificaciones opcionales - Futuro

- Panel derecho "Etapa 3: Habilitaciones Municipales":
  - **Plano arquitectónico**: ❌ Observado
    - Estado: "Plano sin firma de arquitecto matriculado"
    - Acción: [Botón: "Re-subir plano corregido"]
    - Ayuda: [Enlace: "Lista de arquitectos en tu zona"]

  - **Habilitación Bomberos**: ⚠️ Vence pronto
    - Estado: "Válida hasta 30/03/2025 - Iniciar renovación"
    - Acción: [Botón: "Solicitar turno renovación"]
    - Ayuda: [Enlace: "Requisitos renovación"]

  - **Certificado eléctrico**: ❌ Pendiente
    - Estado: "No iniciado"
    - Acción: [Botón: "Buscar electricista matriculado"]
    - Ayuda: [Enlace: "Qué debe incluir el certificado"]

- Mensaje motivacional: "Estás más cerca de lo que crees. El 65% de los talleres abandona en Etapa 3, pero con nuestra ayuda el 89% la completa."

**3. Capacitación sobre Formalización**
```
progreso-formalizacion.html → Sidebar: "¿Necesitas ayuda?"
  → capacitaciones.html [ENFATIZAR: Aprendizaje guiado]
```

**Qué mostrar en capacitaciones.html**:
- Sección "Formalización" destacada
- Cursos disponibles:
  - "Trámites básicos en ARCA" - 45min - 4.2★ - [Iniciar]
  - "Cómo obtener habilitación municipal" - 60min - 4.5★ - [Iniciar]
  - "Seguridad e higiene para talleres" - 90min - 4.7★ - [Iniciar]
- Chatbot RAG activo:
  - Usuario pregunta: "¿Qué necesito para habilitación municipal?"
  - RAG responde con contexto específico del municipio del taller

**4. Beneficios Inmediatos de Formalización**
```
validaciones.html (65% completo)
  → seleccionar-proveedor.html (desde vista de Marca) [ENFATIZAR: Mayor visibilidad]
```

**Qué mostrar**:
- En seleccionar-proveedor.html, el taller con 65% formalización aparece:
  - Con badge "Formalización: 7.8/10"
  - Más arriba en ranking que talleres informales
  - Con mayor precio unitario justificado (AR$ 2.150 vs AR$ 1.800 informal)
- Explicar que cada paso de formalización aumenta reputación y acceso a mejores pedidos

### Flujo Alternativo: Taller Semi-formal que Mejora

**Antes de usar plataforma**:
```
Taller con CUIT pero sin ART ni habilitaciones
  → No puede acceder a pedidos de marcas formales
  → Debe competir solo con precio en mercado informal
```

**Después de 3 meses en plataforma**:
```
validaciones.html: 35% → 65% → 92%
  → Accede a pedidos de marcas premium
  → Aumenta facturación 40%
  → Reduce riesgo de multas
```

**Qué explicar**:
- La plataforma incentiva formalización con acceso a mercado
- No es "todo o nada", sino progresivo
- Asistencia técnica reduce costo de aprendizaje

### Actores a Validar con Este Flujo
- **Talleres**: ¿El checklist visual reduce ansiedad vs. lista opaca de requisitos?
- **Talleres**: ¿Los enlaces a profesionales matriculados (arquitectos, electricistas) ayudan realmente?
- **Marcas**: ¿Están dispuestas a pagar más a talleres con mayor formalización?
- **Estado (ARCA, STESS)**: ¿Pueden proveer APIs para verificar estados de registros automáticamente?

---

## B4: FALTA DE ARTICULACIÓN ENTRE ACTORES

### Objetivo de Demostración
Mostrar cómo la plataforma actúa como punto de encuentro y coordinación entre actores que antes operaban en silos (Marcas, Talleres, Estado, Sindicatos, Cámaras).

### Flujo Principal: Gobernanza Tripartita con Datos Compartidos

**1. Dashboard Integrado para Mesa Tripartita**
```
index.html (Login como "Mesa Tripartita")
  → dashboard-tripartito.html [ENFATIZAR: Visión sistémica única]
```

**Qué mostrar en dashboard-tripartito.html**:

**Sección 1: Métricas de Formalización**
- 62.3% talleres formalizados (↑ +4.8% vs mes anterior)
- 23 nuevos registros ARCA en últimos 30 días
- 478 trabajadores con contrato registrado (↑ +12.3%)
- 8 talleres en proceso de formalización progresiva
- **Explicar**: Estado (ARCA, STESS), Cámaras (talleres), Sindicatos (trabajadores) ven mismos datos en tiempo real

**Sección 2: Métricas de Matching**
- 78.5% tasa de éxito en emparejamientos
- 8.3 días promedio hasta primer contrato
- ⚠️ 15 talleres sin pedidos hace >90 días (riesgo de cierre)
- **Explicar**: Permite intervenciones preventivas coordinadas entre actores

**Sección 3: Métricas de Confianza**
- 12 denuncias en últimos 30 días
- 7 días promedio denuncia → auditoría
- 68.2% tasa de re-contratación (indicador de relaciones sostenibles)
- **Explicar**: Sindicatos ven que denuncias se atienden, Estado ve tiempos de respuesta, Marcas ven calidad del sistema

**Sección 4: Métricas de Impacto Económico**
- AR$ 8.2M facturado por plataforma (últimos 30d)
- AR$ 2.150 precio promedio por prenda
- Índice Gini 0.42 (distribución de trabajo entre talleres)
- **Explicar**: Cámaras empresarias ven dinamismo, Estado ve recaudación, Sindicatos ven distribución

**2. Parametrización Colectiva del Algoritmo**
```
dashboard-tripartito.html → Panel: "Configuración Algoritmo"
  → parametrizacion-algoritmo.html [ENFATIZAR: Decisión conjunta, no tecnocrática]
```

**Qué mostrar en parametrizacion-algoritmo.html**:

**Sliders de Reputación** (ajustables solo por Mesa Tripartita):
- Cumplimiento de plazos: 35%
- Calidad del producto: 30%
- Comunicación: 20%
- Nivel de formalización: 25%
- **Total debe sumar 100%** (validación en tiempo real)

**Simulación de Impacto**:
- "Si cambias Formalización de 25% → 40%:"
  - 23 talleres subirían en ranking
  - 15 talleres bajarían en ranking
  - Talleres afectados: [Lista con nombres]

**Botón "Modo Avanzado"** (modal con fórmulas):
- Mostrar ecuaciones matemáticas del algoritmo
- Permitir ajustar parámetros de comisiones por sector
- Configurar sesgos geográficos (priorizar talleres locales)

**Explicar que**:
- Estado puede priorizar formalización (subir peso de ese factor)
- Sindicatos pueden priorizar comunicación/condiciones
- Cámaras pueden priorizar calidad/cumplimiento
- **Decisión requiere consenso tripartito**, no es unilateral

**3. Coordinación de Inspecciones**
```
dashboard-tripartito.html → Ver alertas
  → auditorias.html [ENFATIZAR: Priorización basada en datos compartidos]
```

**Qué mostrar en auditorias.html (Vista Inspector)**:
- Talleres priorizados algorítmicamente según:
  - Denuncias recientes (desde denuncias.html)
  - Tiempo desde última auditoría (Estado)
  - Cambios en volumen de trabajo (desde plataforma)
  - Nivel de formalización bajo (desde validaciones.html)

- Ejemplo: "Confecciones Sur" marcado ALTA PRIORIDAD porque:
  - 1 denuncia hace 5 días (Sindicato notificó)
  - Sin auditoría hace 18 meses (STESS data)
  - Volumen de trabajo aumentó 300% en 2 meses (Plataforma data)
  - Formalización: solo 42% (ARCA data)

**Explicar que**:
- Antes: Inspectores iban "a ciegas" o por denuncia puntual
- Ahora: Datos integrados de múltiples fuentes guían acción
- Sindicatos aportan denuncias, Estado aporta historial, Plataforma aporta volumen

**4. Capacitación Coordinada**
```
dashboard-tripartito.html → Ver gap de capacidades
  → capacitaciones.html [ENFATIZAR: Oferta educativa co-diseñada]
```

**Qué mostrar en capacitaciones.html**:
- Cursos diseñados por múltiples actores:
  - "Trámites ARCA" → Co-diseñado con ARCA
  - "Derechos laborales" → Co-diseñado con SOIVA (sindicato)
  - "Gestión de calidad" → Co-diseñado con Cámara Industrial
  - "Seguridad e higiene" → Co-diseñado con STESS

- Chatbot RAG con conocimiento agregado:
  - Base de conocimiento incluye normativa (Estado)
  - + convenios colectivos (Sindicato)
  - + mejores prácticas productivas (Cámaras)

**Explicar que**:
- Antes cada actor capacitaba por separado
- Ahora hay currícula unificada y accesible en un solo lugar

### Flujo Alternativo: Resolución de Crisis Sectorial

**Escenario**: Se detecta caída de 30% en pedidos en el sector

```
dashboard-tripartito.html (KPI: ⚠️ Volumen de pedidos -30%)
  → Reunión urgente Mesa Tripartita
  → Decisiones coordinadas:
     1. Estado: Subsidios temporales a talleres en riesgo
     2. Cámaras: Campaña "Comprá textil local"
     3. Sindicatos: Flexibilización temporal de horarios
  → parametrizacion-algoritmo.html: Ajustar comisiones -50% por 3 meses
  → Seguimiento en dashboard: ¿Mejora el KPI?
```

**Qué explicar**:
- Plataforma permite diagnóstico compartido en tiempo real
- Facilita respuestas coordinadas vs. respuestas aisladas
- Permite medir impacto de intervenciones

### Actores a Validar con Este Flujo
- **Mesa Tripartita**: ¿El dashboard unificado facilita coordinación real?
- **Estado (STESS, ARCA)**: ¿Están dispuestos a compartir datos vía APIs?
- **Sindicatos (SOIVA)**: ¿Sienten que tienen poder real en parametrización del algoritmo?
- **Cámaras empresarias**: ¿Ven valor en datos agregados del sector?

---

## B5: ESTADO AUSENTE O INEFICAZ

### Objetivo de Demostración
Mostrar cómo la plataforma amplifica la capacidad de acción estatal mediante inteligencia de datos, fiscalización dirigida, y presencia digital permanente.

### Flujo Principal: Fiscalización Inteligente

**1. Priorización de Inspecciones**
```
index.html (Login como "Inspector STESS")
  → auditorias.html [ENFATIZAR: De fiscalización ciega a dirigida]
```

**Qué mostrar en auditorias.html (Vista Inspector)**:
- Lista de talleres con scoring de riesgo:
  - **Confecciones Sur**: 🔴 ALTA PRIORIDAD (Score: 8.7/10)
    - Denuncia reciente: Condiciones inseguras (hace 5 días)
    - Sin auditoría: 18 meses
    - Crecimiento súbito: +300% prendas/mes (posible explotación)
    - Formalización baja: 42%
    - [Botón: "Agendar auditoría sorpresa"]

  - **Textiles Centro**: 🟡 MEDIA PRIORIDAD (Score: 5.2/10)
    - Sin denuncias
    - Última auditoría: 6 meses
    - Formalización: 78%
    - [Botón: "Agendar auditoría de rutina"]

  - **Confecciones Norte**: 🟢 BAJA PRIORIDAD (Score: 2.1/10)
    - Sin denuncias
    - Última auditoría: 2 meses (todo OK)
    - Formalización: 95%
    - [Mensaje: "No requiere inspección próxima"]

**Explicar que**:
- Antes: Inspector visitaba talleres sin información previa
- Ahora: Algoritmo procesa datos de múltiples fuentes (denuncias, volumen trabajo, formalización, historial)
- Resultado: Mismo número de inspectores, pero van donde más se necesita

**2. Coordinación con Denuncias**
```
denuncias.html (Trabajador denuncia)
  → [Sistema notifica automáticamente]
  → auditorias.html (Inspector ve alerta) [ENFATIZAR: Respuesta rápida]
```

**Qué mostrar**:
- En auditorias.html, panel "Alertas Recientes":
  - "Nueva denuncia #DEN-2025-00891 - Confecciones Sur"
  - "Tipo: Condiciones inseguras - Salida de emergencia bloqueada"
  - "Hace: 5 días"
  - "Acción recomendada: Auditoría sorpresa en próximas 48hs"
  - [Botón: "Ver denuncia completa"] (anónima, solo inspector puede ver)
  - [Botón: "Agendar auditoría ahora"]

**Explicar que**:
- Antes: Denuncia llegaba por canales dispersos, se perdía
- Ahora: Integración automática denuncia → fiscalización
- Meta: 7 días promedio denuncia → auditoría (actualmente se cumple según dashboard)

**3. Seguimiento de Acciones Correctivas**
```
auditorias.html (Inspector agenda)
  → [Realiza auditoría presencial]
  → auditorias.html: Cargar resultado + acciones correctivas
  → [Sistema notifica a taller]
  → auditorias.html (Vista Taller): Ver plan de mejora [ENFATIZAR: Mejora continua]
```

**Qué mostrar en auditorias.html (Vista Taller)**:

**Panel "Resultado Auditoría 12/01/2025"**:
- **Hallazgos**:
  - 🔴 Salida de emergencia bloqueada con cajas
  - 🟡 Extintores vencidos (venció 10/2024)
  - 🟡 Falta plan de evacuación visible

- **Acciones correctivas requeridas** (plazo: 15 días):
  - ✅ "Instalar señalética de salidas de emergencia" - Completo (evidencia: foto subida 14/01)
  - 🔄 "Capacitar a trabajadores en uso de extintores" - En progreso 60% (12/20 trabajadores capacitados)
  - ❌ "Actualizar plan de evacuación y poner en lugar visible" - Pendiente

- **Próxima auditoría de seguimiento**: 20/02/2025

**Explicar que**:
- Antes: Inspector hacía acta, taller guardaba en cajón, no se revisitaba
- Ahora: Seguimiento digital, taller puede subir evidencia, inspector verifica remotamente
- Si no cumple en plazo → Multas automatizadas (futuro) o re-inspección sorpresa

**4. Dashboard Estatal con Métricas Sectoriales**
```
auditorias.html → Volver a dashboard
  → dashboard-tripartito.html [ENFATIZAR: Visión agregada para políticas públicas]
```

**Qué mostrar en dashboard-tripartito.html**:

**Panel "Efectividad Fiscalización"** (visible para Estado):
- 12 denuncias recibidas últimos 30 días
- 11 auditorías realizadas (91.7% respuesta)
- 7 días promedio denuncia → auditoría
- 8 denuncias resueltas (66.7% resolución)
- 18 días promedio de resolución total

**Panel "Evolución Formalización"**:
- Gráfico de línea: 48% (Ene 2024) → 62.3% (Ene 2025)
- 23 nuevos registros ARCA en último mes
- Proyección: 75% para Dic 2025

**Explicar que**:
- Antes: Estado no tenía datos agregados del sector en tiempo real
- Ahora: Dashboard permite medir impacto de políticas públicas
- Ejemplo: Si se lanza campaña de simplificación ARCA, se ve impacto en registro inmediatamente

### Flujo Alternativo: Prevención vs. Sanción

**Enfoque Tradicional**:
```
Taller informal → Trabaja años sin control → Inspector llega por azar → Multa pesada → Taller cierra
```

**Enfoque con Plataforma**:
```
Taller 35% formalizado
  → validaciones.html: Ve qué le falta de manera clara
  → progreso-formalizacion.html: Ayuda paso a paso
  → capacitaciones.html: Aprende cómo cumplir
  → Sube a 92% formalización
  → auditorias.html: Inspector verifica y felicita (refuerzo positivo)
  → Taller se mantiene formal y crece
```

**Qué explicar**:
- La plataforma permite al Estado ser **preventivo** no solo punitivo
- Reduce necesidad de multas porque facilita cumplimiento
- Talleres ven al Estado como aliado no enemigo

### Actores a Validar con Este Flujo
- **Inspectores STESS**: ¿El algoritmo de priorización refleja riesgos reales del terreno?
- **Talleres**: ¿El sistema de acciones correctivas digitales es más claro que el acta en papel?
- **Trabajadores**: ¿Sienten que las denuncias se atienden más rápido que antes?
- **Estado (decisores)**: ¿El dashboard agregado les sirve para diseñar políticas públicas?

---

## B6: BAJAS CAPACIDADES TÉCNICAS Y GERENCIALES

### Objetivo de Demostración
Mostrar cómo la plataforma funciona como universidad permanente del sector, ofreciendo capacitación contextual, certificaciones verificables, y asistencia IA.

### Flujo Principal: Aprendizaje Continuo

**1. Catálogo de Capacitaciones**
```
index.html (Login como "Taller" o "Trabajador")
  → dashboard-taller.html
  → capacitaciones.html [ENFATIZAR: Cursos gratuitos y certificados]
```

**Qué mostrar en capacitaciones.html**:

**Sección "Tus Capacitaciones"**:
- 1 certificado obtenido: "Trámites básicos en ARCA" (Completado 12/12/2024)
- 1 en progreso: "Gestión de pedidos y entregas" (60% completado)
- Próxima clase: "Cómo calcular costos reales de producción" - Lunes 20/01 - 18:00hs

**Catálogo por Categoría**:

**📊 Gestión**:
- "Gestión de pedidos y entregas" - 2hs - 4.8★ - [Continuar] (60%)
- "Cómo calcular costos reales" - 90min - 4.6★ - [Iniciar]
- "Negociación con marcas" - 2hs - 4.7★ - [Iniciar]

**✨ Calidad**:
- "Control de calidad en confección" - 3hs - 4.9★ - [Iniciar]
- "Reducción de desperdicios" - 90min - 4.5★ - [Iniciar]

**📝 Formalización**:
- "Trámites básicos en ARCA" - 45min - 4.2★ - ✅ Certificado obtenido
- "Cómo obtener habilitación municipal" - 60min - 4.5★ - [Iniciar]
- "Seguridad e higiene para talleres" - 90min - 4.7★ - [Iniciar]

**💻 Tecnología**:
- "Uso de plataforma OIT-UNTREF" - 30min - 4.3★ - [Iniciar]
- "Herramientas digitales para talleres" - 2hs - 4.6★ - [Iniciar]

**Explicar que**:
- Cursos co-diseñados con Estado, Sindicatos, Cámaras
- Certificados con QR verificable (como las prendas)
- Gratuitos, online, a demanda (no requieren viajar o cerrar taller)

**2. Certificaciones Verificables**
```
capacitaciones.html → "Ver certificado obtenido"
  → [Mostrar certificado PDF] [ENFATIZAR: Credencial verificable]
```

**Qué mostrar en certificado**:
- Título: "Certificado de Finalización - Trámites básicos en ARCA"
- Alumno: Juan Pérez (CUIT 20-12345678-9)
- Fecha: 12/12/2024
- Duración: 45 minutos
- Calificación: 9.2/10
- QR de verificación: Enlaza a página pública OIT-UNTREF que confirma autenticidad
- Logos: OIT, UNTREF, ARCA, SOIVA

**Explicar que**:
- Taller puede mostrar certificados a marcas para demostrar capacidades
- Marca puede escanear QR para verificar que no es falso
- Mejora reputación en seleccionar-proveedor.html

**3. Asistente IA Contextual (RAG)**
```
capacitaciones.html → Panel lateral "Asistente IA"
  → Chatbot RAG [ENFATIZAR: Ayuda instant

nea 24/7]
```

**Qué mostrar en chatbot RAG**:

**Historial de chat**:

**Usuario**: "¿Qué necesito para registrarme en ARCA?"

**RAG**: "Para registrarte en ARCA (antes AFIP) como empleador textil, necesitas:
1. **CUIT**: Si eres persona humana, lo obtienes en arca.gob.ar/inicio-empleador
2. **CBU**: Cuenta bancaria a tu nombre
3. **Email**: Para recibir clave fiscal
4. **Domicilio fiscal**: Puede ser el taller o tu casa

Luego debes:
- Inscribirte en 'Registro de Empleadores'
- Declarar trabajadores en 'Simplificación Registral'

¿Querés que te explique algún paso en detalle?"

**Usuario**: "¿Cuánto cuesta el registro?"

**RAG**: "El registro en ARCA es **gratuito**. No hay costo de inscripción.

Los costos mensuales dependen de cuántos trabajadores tengas:
- 1-5 trabajadores: ~AR$ 15.000/mes (aportes patronales)
- 6-10 trabajadores: ~AR$ 35.000/mes

Estos montos son aproximados y varían según salarios. ¿Querés que te ayude a calcular el costo para tu caso específico?"

**Funciones del chatbot**:
- [Botón: "Ver cursos relacionados"] → Linkea a "Trámites básicos en ARCA"
- [Botón: "Agendar asesoría humana"] → Conecta con tutor real (futuro)

**Explicar que**:
- RAG tiene conocimiento de normativa actualizada (ARCA, STESS, convenios)
- Responde 24/7, en lenguaje simple
- Linkea a cursos y recursos relevantes
- No reemplaza a humanos, sino que descongestiona consultas básicas

**4. Aprendizaje Contextual desde Otras Pantallas**
```
progreso-formalizacion.html (Taller bloqueado en Etapa 3)
  → Botón "¿Necesitas ayuda?"
  → capacitaciones.html (filtrado automático a cursos de Formalización)
```

**Qué explicar**:
- La plataforma detecta "momentos de aprendizaje"
- Si taller está en progreso-formalizacion.html con habilitación municipal observada → Le sugiere curso específico
- Si marca recibe pedido rechazado por mala calidad → Le sugiere curso "Especificaciones técnicas claras"
- Esto hace que aprendizaje sea **just-in-time** no solo genérico

### Flujo Alternativo: Trabajador que se Capacita para Ascender

```
index.html (Login como "Trabajador")
  → capacitaciones.html
  → Completa 3 cursos: "Operación de máquinas industriales", "Control de calidad", "Liderazgo de equipos"
  → Obtiene 3 certificados verificables
  → Los muestra a dueño del taller
  → Asciende a supervisor (aumento salarial)
```

**Qué explicar**:
- Plataforma no solo capacita a dueños de talleres
- Trabajadores también pueden mejorar empleabilidad
- Certificados verificables evitan nepotismo ("ascendió porque es primo del dueño")

### Actores a Validar con Este Flujo
- **Talleres**: ¿Los cursos abordan problemas reales que tienen?
- **Talleres**: ¿Preferirían cursos sincrónicos (con horario) o asincrónicos (a demanda)?
- **Trabajadores**: ¿Tienen tiempo para capacitarse fuera del horario laboral?
- **Marcas**: ¿Valorarían certificados al seleccionar talleres?
- **Capacitadores**: ¿El modelo de co-diseño (Estado+Sindicato+Cámara) es viable?

---

## B7: DUMPING SOCIAL Y COMPETENCIA DESLEAL

### Objetivo de Demostración
Mostrar cómo la plataforma nivela la cancha haciendo visible el nivel de formalización y ajustando dinámicamente comisiones para incentivar trabajo decente.

### Flujo Principal: Competencia Justa

**1. Visibilidad de Formalización en Matching**
```
index.html (Login como "Marca")
  → dashboard-v1.3.html
  → crear-pedido-v1.3.html
  → seleccionar-proveedor.html [ENFATIZAR: No solo precio, también condiciones]
```

**Qué mostrar en seleccionar-proveedor.html**:

**Comparación de dos talleres**:

**Taller A: "Confecciones Norte"** (Formal)
- Precio: AR$ 2.150 / prenda
- Reputación: 8.9/10
- Formalización: ✅ 95%
  - ARCA: ✅ CUIT activo
  - STESS: ✅ Trabajadores registrados
  - ART: ✅ Galeno ART
  - Habilitaciones: ✅ Municipal, Bomberos
- Entregas: 127 pedidos completados (97% a tiempo)
- [Botón: "Seleccionar"]

**Taller B: "Textiles Económicos"** (Semi-formal)
- Precio: AR$ 1.800 / prenda ⚠️ **16% más barato**
- Reputación: 6.2/10
- Formalización: ⚠️ 42%
  - ARCA: ✅ CUIT activo
  - STESS: ❌ Solo 3/15 trabajadores registrados
  - ART: ❌ Sin seguro
  - Habilitaciones: ❌ Falta municipal
- Entregas: 34 pedidos completados (76% a tiempo)
- [Mensaje: "Este taller tiene bajo nivel de formalización. Al elegirlo, asumes riesgos legales y reputacionales."]
- [Botón: "Seleccionar de todos modos"]

**Explicar que**:
- Antes: Marca solo veía precio, elegía el más barato (incentiva informalidad)
- Ahora: Ve trade-off entre precio y riesgo/calidad
- Si marca es grande con reputación que cuidar → Preferirá formal aunque sea más caro
- Si marca es pequeña con poco presupuesto → Puede elegir semi-formal asumiendo riesgo consciente

**2. Comisiones Diferenciadas**
```
seleccionar-proveedor.html (Marca elige)
  → acordar.html [ENFATIZAR: Incentivos económicos a formalización]
```

**Qué mostrar en acordar.html**:

**Para Taller A (95% formalización)**:
- Precio acordado: AR$ 2.150 / prenda
- Cantidad: 1.200 prendas
- **Subtotal**: AR$ 2.580.000
- **Comisión plataforma**: 3% = AR$ 77.400
- **Total a recibir**: AR$ 2.502.600

**Para Taller B (42% formalización)**:
- Precio acordado: AR$ 1.800 / prenda
- Cantidad: 1.200 prendas
- **Subtotal**: AR$ 2.160.000
- **Comisión plataforma**: 7% = AR$ 151.200 ⚠️ **Más del doble**
- **Total a recibir**: AR$ 2.008.800

**Mensaje explicativo**:
"Las comisiones se ajustan según nivel de formalización del taller. Talleres más formalizados pagan menos comisión, incentivando trabajo decente. Esta política es definida por la Mesa Tripartita en parametrizacion-algoritmo.html."

**Explicar que**:
- Taller B cobra menos por prenda (AR$ 1.800 vs AR$ 2.150)
- Pero paga más comisión (7% vs 3%)
- **Resultado neto**: Taller A recibe AR$ 2.502.600, Taller B recibe AR$ 2.008.800
- **A igual cantidad de trabajo, el taller formal gana 24.6% más**
- Esto invierte el incentivo: Ahora **conviene** ser formal

**3. Parametrización de Incentivos**
```
acordar.html → ¿Cómo se definen estas comisiones?
  → dashboard-tripartito.html
  → parametrizacion-algoritmo.html [ENFATIZAR: Política tripartita, no arbitraria]
```

**Qué mostrar en parametrizacion-algoritmo.html**:

**Sección "Estructura de Comisiones"**:

**Reglas actuales** (ajustables por Mesa Tripartita):
- Formalización 90-100%: **3% comisión**
- Formalización 70-89%: **4.5% comisión**
- Formalización 50-69%: **6% comisión**
- Formalización 0-49%: **7% comisión**

**Botón "Simular cambio"**:
- Si subimos comisión de talleres 0-49% a 10%:
  - 12 talleres mejorarían formalización para bajar comisión
  - 3 talleres abandonarían plataforma (too much cost)
  - Recaudación plataforma: -AR$ 45.000/mes

**Debate típico en Mesa Tripartita**:
- **Sindicatos**: "Subamos comisión a informales a 10% para forzar formalización"
- **Cámaras**: "Pero algunos talleres pequeños no pueden formalizarse inmediatamente, los expulsaríamos"
- **Estado**: "¿Y si hacemos gradual? Primer año 7%, segundo año 8%, tercer año 10%?"
- **Consenso**: Ajustar parámetro y monitorear en dashboard-tripartito.html

**Explicar que**:
- La política de comisiones NO es tecnocrática
- Es decisión política de representantes del sector
- Permite balancear incentivos vs. exclusión

**4. Monitoreo de Competencia Desleal**
```
parametrizacion-algoritmo.html → Volver a dashboard
  → dashboard-tripartito.html [ENFATIZAR: Detección de anomalías]
```

**Qué mostrar en dashboard-tripartito.html**:

**Panel "Alertas de Competencia Desleal"**:
- ⚠️ **Taller "Textiles Económicos" con precio 35% menor a promedio del sector**
  - Precio: AR$ 1.800/prenda
  - Promedio sector (talleres similares): AR$ 2.450/prenda
  - Formalización: 42%
  - Acción sugerida: Auditoría para verificar no explotación laboral

- ⚠️ **Marca "Fashion Fast" con tasa de rechazo de calidad 67%**
  - Posible: Exigencias abusivas para justificar no pago
  - Acción sugerida: Revisión de contratos

**Explicar que**:
- El algoritmo detecta patrones anómalos que podrían indicar dumping o abuso
- Mesa Tripartita puede intervenir proactivamente
- Antes estas situaciones eran invisibles hasta que explotaban

### Flujo Alternativo: Taller Informal que se Formaliza por Incentivo

**Mes 1**:
```
Taller con 30% formalización
  → Paga 7% comisión en cada pedido
  → De AR$ 2.000.000 facturados, paga AR$ 140.000 comisión
```

**Mes 3**:
```
Taller usa progreso-formalizacion.html y capacitaciones.html
  → Sube a 72% formalización
  → Ahora paga solo 6% comisión
  → De AR$ 2.000.000 facturados, paga AR$ 120.000 comisión
  → Ahorro: AR$ 20.000/mes
```

**Mes 6**:
```
Taller completa formalización: 94%
  → Paga solo 3% comisión
  → De AR$ 2.000.000 facturados, paga AR$ 60.000 comisión
  → Ahorro: AR$ 80.000/mes vs. inicial
  → Además recibe más pedidos (mejor reputación)
```

**Qué explicar**:
- La formalización NO solo es costo (ART, ARCA, etc.)
- También genera ahorros (menos comisión) y más ingresos (más pedidos)
- El ROI de formalizarse es positivo

### Actores a Validar con Este Flujo
- **Marcas**: ¿Están dispuestas a pagar más por talleres formales?
- **Talleres formales**: ¿Sienten que ahora la competencia es más justa?
- **Talleres informales**: ¿Los incentivos son suficientes para formalizarse o los perciben como punición?
- **Mesa Tripartita**: ¿La estructura de comisiones diferenciadas es política o técnicamente viable?

---

## NAVEGACIÓN TRANSVERSAL: Actores Secundarios

Además de los flujos principales por barrera, hay actores que cruzan múltiples pantallas:

### Trabajador

**Flujo típico**:
```
index.html (Login como "Trabajador")
  → dashboard-trabajador.html (ver próximos turnos, historial de pagos)
  → Si ve problema → denuncias.html (denunciar anónimamente)
  → Si quiere mejorar → capacitaciones.html (certificarse)
  → Si quiere verificar que está registrado → validaciones.html (ver que taller lo tiene en STESS)
```

**Pantallas disponibles**: dashboard-trabajador.html, denuncias.html, capacitaciones.html

### Inspector

**Flujo típico**:
```
index.html (Login como "Inspector STESS")
  → auditorias.html (ver talleres priorizados)
  → Seleccionar taller de alta prioridad
  → Realizar auditoría presencial (fuera de plataforma)
  → Cargar resultados en auditorias.html
  → Asignar acciones correctivas
  → 15 días después: Revisar si taller cumplió (auditorias.html vista taller)
  → Si cumplió: Cerrar caso
  → Si no cumplió: Escalar a multa o re-inspección
```

**Pantallas disponibles**: auditorias.html (vista inspector), dashboard-tripartito.html (vista agregada)

### Mesa Tripartita

**Flujo típico**:
```
index.html (Login como "Mesa Tripartita")
  → dashboard-tripartito.html (revisar KPIs semanalmente)
  → Si KPI anómalo → Investigar:
     - Formalización baja → Ver auditorias.html
     - Denuncias altas → Ver denuncias.html (vista agregada)
     - Matching bajo → Ver seleccionar-proveedor.html (entender por qué no matchean)
  → Ajustar parámetros → parametrizacion-algoritmo.html
  → Monitorear impacto → dashboard-tripartito.html (próxima semana)
```

**Pantallas disponibles**: dashboard-tripartito.html, parametrizacion-algoritmo.html, todas las demás en modo lectura

---

## CONSIDERACIONES PARA TALLERES DE VALIDACIÓN

### Formato Recomendado

**Duración**: 2 horas por sesión

**Estructura**:
1. **Introducción** (10 min): Explicar objetivo del wireframe (validar UX, no funcionalidad técnica)
2. **Demostración guiada** (30 min): Facilitador navega según guión de barrera específica
3. **Exploración libre** (20 min): Actores navegan solos, hacen preguntas
4. **Feedback estructurado** (40 min): Preguntas específicas por pantalla
5. **Cierre** (20 min): Priorizar cambios, próximos pasos

### Preguntas de Validación por Pantalla

**Para seleccionar-proveedor.html**:
- ¿Los datos de reputación son los que realmente te importan al elegir?
- ¿Falta algún dato crítico?
- ¿El desglose de scoring (Cumplimiento, Calidad, Comunicación, Formalización) es claro?

**Para acordar.html**:
- ¿Los términos del acuerdo cubren todos los puntos que normalmente negociás?
- ¿El flujo de confirmación es claro?
- ¿Qué pasa si necesitás renegociar después de aceptar?

**Para validaciones.html**:
- ¿El checklist de 8 validaciones refleja lo que realmente necesitás para formalizarte?
- ¿Falta algún trámite crítico?
- ¿El % de progreso te motiva o te agobia?

**Para denuncias.html**:
- ¿Te sentirías seguro denunciando en modalidad anónima?
- ¿Qué más necesitarías para animarte a denunciar?
- ¿Los tipos de denuncia cubren los problemas reales del sector?

**Para auditorias.html**:
- (Inspectores): ¿El scoring de priorización refleja riesgos reales?
- (Talleres): ¿El sistema de acciones correctivas digitales es más claro que el acta en papel?
- ¿El plazo de 15 días es realista?

**Para capacitaciones.html**:
- ¿Los cursos abordan problemas reales que tenés?
- ¿Preferirías sincrónicos (con horario) o asincrónicos (a demanda)?
- ¿El chatbot RAG reemplazaría consultas que hoy hacés por teléfono?

**Para dashboard-tripartito.html**:
- (Mesa Tripartita): ¿Los 4 grupos de KPIs cubren lo que necesitás para gobernar?
- ¿Falta algún indicador crítico?
- ¿La frecuencia de actualización (tiempo real) es necesaria o con semanal alcanza?

**Para parametrizacion-algoritmo.html**:
- (Mesa Tripartita): ¿Los sliders de reputación reflejan las variables que realmente importan?
- ¿Necesitás más control (más parámetros) o menos (más simple)?
- ¿El simulador de impacto te ayudaría a tomar decisiones informadas?

### Logística

**Acceso al MVP**:
- Opción 1: Proyectar en pantalla grande y facilitador navega
- Opción 2: Cada participante en su laptop/tablet navegando en paralelo
- Opción 3: Híbrido (proyección + algunos con dispositivos)

**Documentación de Feedback**:
- Grabación de audio (con consentimiento)
- Observador tomando notas
- Formulario post-taller con preguntas estructuradas

**Iteración**:
- Después de cada taller, ajustar wireframes según feedback
- Re-testear con mismo grupo o grupo nuevo
- Meta: 2-3 iteraciones antes de pasar a desarrollo

---

## RESUMEN DE COBERTURA

| Barrera | Pantallas Involucradas | Actores | Funciones |
|---------|----------------------|---------|-----------|
| **B1: Falta Trazabilidad** | crear-pedido-v1.3, seleccionar-proveedor, acordar, ejecucion, logistica, pago + QR | Marca, Taller, Consumidor | ENCONTRAR, ACORDAR, EJECUTAR, VERIFICAR, LOGÍSTICA, PAGAR |
| **B2: Desconfianza** | seleccionar-proveedor, acordar, denuncias, auditorias, pago | Marca, Taller, Trabajador, Inspector | ENCONTRAR, ACORDAR, FISCALIZAR |
| **B3: Formalización Compleja** | validaciones, progreso-formalizacion, capacitaciones | Taller, Estado | COMPLIANCE, APRENDER |
| **B4: Falta Articulación** | dashboard-tripartito, parametrizacion-algoritmo, auditorias, capacitaciones | Mesa Tripartita, Estado, Sindicatos, Cámaras | GOBERNAR |
| **B5: Estado Ausente** | auditorias, denuncias, dashboard-tripartito | Inspector, Estado, Trabajador | FISCALIZAR, GOBERNAR |
| **B6: Bajas Capacidades** | capacitaciones (RAG, certificados) | Taller, Trabajador | APRENDER |
| **B7: Dumping Social** | seleccionar-proveedor, acordar, parametrizacion-algoritmo, dashboard-tripartito | Marca, Taller, Mesa Tripartita | ENCONTRAR, ACORDAR, GOBERNAR |

**Cobertura total**: 96% de intersecciones Barrera x Función resueltas

---

## ANEXO: Índice de Pantallas por Función

**ENCONTRAR (F1)**:
- dashboard-v1.3.html
- crear-pedido-v1.3.html
- seleccionar-proveedor.html

**ACORDAR (F2)**:
- acordar.html

**EJECUTAR (F3)**:
- ejecucion.html
- dashboard-taller.html
- dashboard-trabajador.html

**VERIFICAR (F4)**:
- (QR de trazabilidad - integrado en ejecucion.html)

**LOGÍSTICA (F5)**:
- logistica.html

**PAGAR (F6)**:
- pago.html

**APRENDER (F7)**:
- capacitaciones.html

**COMPLIANCE (F8)**:
- validaciones.html
- progreso-formalizacion.html

**FISCALIZAR (F9)**:
- auditorias.html
- denuncias.html

**GOBERNAR (F10)**:
- dashboard-tripartito.html
- parametrizacion-algoritmo.html

---

**Fin del documento de navegación.**

Este documento debe usarse como guión durante talleres de validación con actores del sector textil. Permite demostrar sistemáticamente cómo cada barrera (B1-B7) es abordada mediante las funcionalidades implementadas en MVP v1.3.
