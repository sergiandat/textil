/**
 * SISTEMA DE PANELES EXPLICATIVOS
 * Agrega contexto y preguntas de reflexión a cada pantalla del MVP
 */

const PANTALLAS_INFO = {
  'index.html': {
    titulo: 'Menú de Barreras',
    contexto: {
      barrera: 'Ninguna (navegación)',
      funcion: 'Punto de entrada',
      actores: 'Todos',
      proposito: 'Permitir al usuario elegir qué demostración de barrera explorar o navegar libremente por todas las pantallas.',
      aporte: 'Estructura la exploración del MVP en torno a las 7 barreras identificadas, facilitando presentaciones enfocadas y validaciones específicas con stakeholders. El modo libre permite explorar sin restricciones.',
      proceso: 'Primera interacción - el usuario selecciona una barrera específica (B1-B7) para ver un flujo guiado que demuestra cómo la plataforma la resuelve, o elige navegación libre para explorar todo el sistema.'
    },
    preguntas: [
      '¿Las descripciones de las barreras son suficientemente claras para que un actor entienda de qué se trata sin conocimiento previo?',
      '¿Sería útil agregar un tooltip o ayuda contextual en cada barrera con ejemplos concretos?',
      '¿Falta alguna barrera crítica del sector textil que no hayamos identificado?',
      '¿El modo de "navegación libre" debería ser el predeterminado o seguir requiriendo selección explícita?',
      '¿Deberíamos mostrar ejemplos de casos de uso antes de entrar a cada barrera?'
    ]
  },

  'dashboard.html': {
    titulo: 'Dashboard Marca (Versión Básica)',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza)',
      funcion: 'ENCONTRAR, VERIFICAR',
      actores: 'Marca',
      proposito: 'Dar a las marcas visibilidad centralizada de sus pedidos activos, proveedores verificados y métricas clave de trazabilidad.',
      aporte: 'Resuelve B1 al mostrar trazabilidad completa del pedido. Resuelve B2 al exhibir verificaciones de cumplimiento que generan confianza. Centraliza información dispersa que hoy requiere múltiples llamadas, emails y planillas.',
      proceso: 'Pantalla inicial después de login para marcas. Desde aquí pueden ver el estado de pedidos en curso, crear nuevos pedidos, y acceder a verificaciones de proveedores.'
    },
    preguntas: [
      '¿Las métricas mostradas (pedidos activos, tasa de cumplimiento) son las más relevantes o falta algún KPI crítico?',
      '¿Cómo priorizarían las marcas la información en esta vista (qué debería estar más visible)?',
      '¿Es necesario mostrar alertas o notificaciones urgentes (retrasos, problemas de calidad) en esta pantalla?',
      '¿Qué nivel de detalle de trazabilidad esperan ver sin hacer click adicional?',
      '¿Deberían poder comparar métricas con periodos anteriores o con benchmarks del sector?'
    ]
  },

  'dashboard-v1.3.html': {
    titulo: 'Dashboard Marca (Versión Mejorada)',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza), B5 (Estado Ausente)',
      funcion: 'ENCONTRAR, VERIFICAR, FISCALIZAR',
      actores: 'Marca',
      proposito: 'Versión mejorada del dashboard con mayor énfasis en trazabilidad granular, verificaciones de cumplimiento en tiempo real, y visibilidad de auditorías.',
      aporte: 'Resuelve B1 con trazabilidad a nivel de trabajador y proceso. Resuelve B2 mostrando badges de verificación en tiempo real (ARCA, STESS, SOIVA). Resuelve B5 al exhibir presencia del Estado a través de auditorías y fiscalizaciones visibles.',
      proceso: 'Dashboard principal de marca con información detallada de compliance. Permite monitorear no solo el avance del pedido sino también el cumplimiento normativo del proveedor.'
    },
    preguntas: [
      '¿Los badges de verificación (ARCA, STESS, SOIVA) generan suficiente confianza o necesitan más contexto sobre qué significan?',
      '¿Las marcas querrían recibir alertas si un proveedor pierde alguna verificación durante la ejecución del pedido?',
      '¿Es necesario mostrar el historial de auditorías o solo el estado actual?',
      '¿Qué tan importante es mostrar datos de trabajadores (cantidad, registros) vs solo datos del taller?',
      '¿Deberían poder exportar estos datos de trazabilidad para reportes de sustentabilidad?'
    ]
  },

  'dashboard-taller.html': {
    titulo: 'Dashboard Taller',
    contexto: {
      barrera: 'B3 (Formalización), B4 (Articulación), B5 (Estado Ausente)',
      funcion: 'EJECUTAR, ACORDAR, COMPLIANCE',
      actores: 'Taller',
      proposito: 'Dar a los talleres visibilidad de pedidos activos, nuevas oportunidades de matching, y su nivel de formalización.',
      aporte: 'Resuelve B3 mostrando claramente el nivel de formalización (95%) e incentivando mejoras. Resuelve B4 con matching inteligente que conecta talleres con marcas compatibles. Resuelve B5 al hacer visible el estado de registros y cumplimiento normativo.',
      proceso: 'Dashboard principal del taller. Muestra pedidos en ejecución con progreso detallado, nuevas oportunidades sugeridas por el algoritmo de matching, y estado de formalización que afecta la comisión cobrada.'
    },
    preguntas: [
      '¿El indicador de formalización (95%) motiva o genera ansiedad? ¿Cómo deberíamos comunicar el camino hacia 100%?',
      '¿Los talleres entienden cómo funciona el matching y por qué se les sugieren ciertos pedidos?',
      '¿Es clara la relación entre nivel de formalización y comisión de plataforma (3% actual vs 8% informal)?',
      '¿Qué información adicional necesitarían para decidir si aceptar un pedido sugerido?',
      '¿Sería útil mostrar proyección de ingresos mensuales basado en pedidos activos + sugeridos?'
    ]
  },

  'dashboard-trabajador.html': {
    titulo: 'Dashboard Trabajador',
    contexto: {
      barrera: 'B5 (Estado Ausente), B6 (Bajas Capacidades), B7 (Dumping Social)',
      funcion: 'COMPLIANCE, APRENDER, VERIFICAR',
      actores: 'Trabajador',
      proposito: 'Empoderar a trabajadores con visibilidad de sus turnos, pagos, derechos laborales y estado de registración.',
      aporte: 'Resuelve B5 al hacer visible el registro en STESS y derechos laborales. Resuelve B6 dando acceso a capacitaciones. Resuelve B7 al transparentar salarios, descuentos y permitir denuncias anónimas de irregularidades.',
      proceso: 'Dashboard personal del trabajador. Desde aquí ven turnos asignados, historial de pagos con desglose de descuentos, su estado de registración, acceso a capacitaciones, y canal de denuncia anónima.'
    },
    preguntas: [
      '¿Los trabajadores comprenden qué significan los descuentos en su recibo (jubilación, obra social)?',
      '¿El lenguaje usado para explicar derechos laborales es accesible para trabajadores con diferente nivel educativo?',
      '¿El canal de denuncia anónima genera suficiente confianza o hay barreras culturales/sociales que impiden su uso?',
      '¿Qué tan importante es el acceso móvil para esta pantalla (trabajadores probablemente no tienen PC)?',
      '¿Falta información sobre seguridad e higiene en el taller, o es suficiente con salario y registros?'
    ]
  },

  'dashboard-tripartito.html': {
    titulo: 'Dashboard Mesa Tripartita',
    contexto: {
      barrera: 'B5 (Estado Ausente), B7 (Dumping Social)',
      funcion: 'GOBERNAR, FISCALIZAR',
      actores: 'Mesa Tripartita (Estado, Sindicatos, Cámaras)',
      proposito: 'Proveer a los actores de gobernanza con datos agregados del sector, cumplimiento normativo, y herramientas de parametrización de políticas.',
      aporte: 'Resuelve B5 al dar al Estado presencia activa mediante monitoreo en tiempo real y capacidad de intervención. Resuelve B7 al permitir identificar y actuar sobre irregularidades laborales. Genera datos para diseño de políticas basadas en evidencia.',
      proceso: 'Dashboard estratégico para tomadores de decisión. Permite ver métricas agregadas del sector, tendencias de formalización, denuncias, y ajustar parámetros del sistema (umbrales de algoritmo, políticas de comisiones).'
    },
    preguntas: [
      '¿Las métricas agregadas (1.247 talleres, 8.450 trabajadores) son suficientes o necesitan desagregación por región, tamaño, etc.?',
      '¿Qué nivel de intervención directa debería tener la mesa (solo lectura, o capacidad de bloquear operaciones)?',
      '¿Los parámetros del algoritmo deberían ser modificables en tiempo real o requieren un proceso de aprobación?',
      '¿Hace falta un módulo de simulación para prever impacto de cambios en políticas antes de implementarlos?',
      '¿Cómo se decide quién de la mesa tripartita puede acceder a qué información (privacidad de datos)?'
    ]
  },

  'crear-pedido.html': {
    titulo: 'Crear Pedido (Versión Básica)',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza)',
      funcion: 'ENCONTRAR, ACORDAR',
      actores: 'Marca',
      proposito: 'Permitir a marcas crear pedidos especificando todos los detalles técnicos y comerciales necesarios para matchear con talleres.',
      aporte: 'Resuelve B1 al documentar desde el inicio todos los parámetros del pedido (trazabilidad desde la fuente). Resuelve B2 al estructurar acuerdos formales que reducen ambigüedad y conflictos posteriores.',
      proceso: 'Primera pantalla del flujo de creación de pedido. La marca completa especificaciones técnicas (prenda, cantidad, plazos, calidad) que luego serán usadas para el matching con talleres.'
    },
    preguntas: [
      '¿Los campos solicitados son suficientes o falta información técnica crítica (tipo de tela, acabados, etc.)?',
      '¿Las marcas deberían poder subir fichas técnicas o muestras visuales del producto?',
      '¿Es claro cómo se usan estos datos para el matching (algoritmo transparente vs caja negra)?',
      '¿Deberíamos permitir "copiar" pedidos anteriores similares para agilizar el proceso?',
      '¿Hace falta validación de coherencia (ej: plazo muy corto para cantidad muy alta)?'
    ]
  },

  'crear-pedido-v1.3.html': {
    titulo: 'Crear Pedido (Versión Mejorada)',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza), B3 (Formalización)',
      funcion: 'ENCONTRAR, ACORDAR, COMPLIANCE',
      actores: 'Marca',
      proposito: 'Versión mejorada del formulario de pedido con integración de checkpoints de calidad, verificaciones de compliance, y trazabilidad de proceso.',
      aporte: 'Resuelve B1 con mayor granularidad en especificaciones. Resuelve B2 al incorporar checkpoints de QA acordados. Resuelve B3 al requerir que los proveedores seleccionados estén formalizados (afecta matching).',
      proceso: 'Flujo mejorado de creación de pedido que incluye no solo specs técnicas sino también definición de criterios de calidad, hitos de verificación, y requisitos de compliance del proveedor.'
    },
    preguntas: [
      '¿Los checkpoints de QA (30%, 70%, 100%) son suficientes o cada industria necesita definir los suyos?',
      '¿Deberíamos permitir que la marca especifique requisitos de certificaciones específicas (GOTS, Fair Trade, etc.)?',
      '¿Es necesario que la marca vea el precio estimado antes de publicar el pedido?',
      '¿Los procesos de producción (corte, confección, planchado) deberían ser configurables por prenda?',
      '¿Hace falta un sistema de templates por tipo de prenda (remera, pantalón, etc.)?'
    ]
  },

  'explorar-talleres.html': {
    titulo: 'Explorar Talleres',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza), B3 (Formalización)',
      funcion: 'ENCONTRAR, VERIFICAR',
      actores: 'Marca',
      proposito: 'Permitir a marcas descubrir y evaluar talleres basándose en capacidades, historial, verificaciones y especialización.',
      aporte: 'Resuelve B1 mostrando información completa y verificada de cada taller. Resuelve B2 con badges de verificación y ratings transparentes. Resuelve B3 al priorizar talleres formalizados en los resultados.',
      proceso: 'Pantalla de búsqueda y filtrado de talleres. Las marcas pueden explorar el catálogo, filtrar por capacidad/ubicación/especialización, y ver perfiles detallados antes de crear un pedido.'
    },
    preguntas: [
      '¿Los filtros disponibles (capacidad, ubicación, especialización) son suficientes o faltan criterios importantes?',
      '¿Cómo deberían presentarse los precios: rangos, precios fijos, o solo bajo pedido?',
      '¿El sistema de reputación (8.9/10) es transparente en cuanto a cómo se calcula?',
      '¿Deberían poder ver trabajos anteriores del taller (portfolio de productos realizados)?',
      '¿Es útil un mapa geográfico de talleres o la lista es suficiente?'
    ]
  },

  'matching.html': {
    titulo: 'Matching Pedido-Taller',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza), B4 (Articulación)',
      funcion: 'ENCONTRAR, ACORDAR',
      actores: 'Marca',
      proposito: 'Mostrar talleres que mejor matchean con el pedido según algoritmo de compatibilidad, facilitando la decisión de selección.',
      aporte: 'Resuelve B4 al articular automáticamente oferta y demanda. Resuelve B2 al transparentar por qué se sugiere cada taller (matching explicable). Resuelve B1 al mostrar trazabilidad del taller desde el momento del matching.',
      proceso: 'Después de crear un pedido, el sistema ejecuta el algoritmo de matching y presenta los talleres ordenados por score de compatibilidad. La marca puede ver por qué cada taller matchea y seleccionar uno.'
    },
    preguntas: [
      '¿El score de matching (92%, 88%, etc.) es suficientemente explicativo o necesita más desglose?',
      '¿Deberían poder ajustar los pesos del algoritmo (priorizar precio vs calidad vs plazo)?',
      '¿Es necesario mostrar cuántos talleres NO matchean y por qué fueron descartados?',
      '¿Qué pasa si ningún taller tiene score alto (>80%)? ¿Deberíamos sugerir modificar el pedido?',
      '¿Hace falta una opción de "solicitar cotización" a varios talleres antes de decidir?'
    ]
  },

  'seleccionar-proveedor.html': {
    titulo: 'Seleccionar Proveedor',
    contexto: {
      barrera: 'B2 (Desconfianza), B3 (Formalización)',
      funcion: 'ACORDAR, VERIFICAR',
      actores: 'Marca',
      proposito: 'Finalizar la selección de taller mostrando información completa de verificaciones, capacidad y condiciones antes de confirmar.',
      aporte: 'Resuelve B2 al presentar todas las verificaciones de cumplimiento antes de la decisión. Resuelve B3 al mostrar claramente el nivel de formalización del proveedor y su impacto en comisiones.',
      proceso: 'Pantalla de confirmación antes de formalizar el acuerdo. La marca revisa una última vez todas las verificaciones del taller seleccionado y confirma la elección.'
    },
    preguntas: [
      '¿La información presentada es suficiente para tomar una decisión informada?',
      '¿Deberían poder solicitar información adicional al taller antes de confirmar?',
      '¿Es necesario mostrar términos y condiciones del acuerdo que están aceptando?',
      '¿Hace falta un periodo de "cooling-off" para cancelar después de seleccionar?',
      '¿Deberíamos permitir negociación de términos o todo es estándar?'
    ]
  },

  'acordar.html': {
    titulo: 'Acordar Términos',
    contexto: {
      barrera: 'B2 (Desconfianza), B7 (Dumping Social)',
      funcion: 'ACORDAR',
      actores: 'Marca, Taller',
      proposito: 'Formalizar el acuerdo entre marca y taller estableciendo términos claros de entrega, calidad, precio y condiciones laborales.',
      aporte: 'Resuelve B2 al documentar acuerdos formales que evitan conflictos. Resuelve B7 al incorporar condiciones laborales mínimas en el contrato (salario justo, registración de trabajadores).',
      proceso: 'Pantalla de formalización del acuerdo. Ambas partes revisan y aceptan términos, que quedan registrados y trazables en la plataforma.'
    },
    preguntas: [
      '¿Los términos del acuerdo deberían ser editables o son generados automáticamente por la plataforma?',
      '¿Es necesario incluir cláusulas de penalización por incumplimiento?',
      '¿Ambas partes firman digitalmente o es un "aceptar" simple?',
      '¿Deberían poder agregar anexos o documentos complementarios al acuerdo?',
      '¿Qué pasa si una de las partes quiere modificar términos después de acordar?'
    ]
  },

  'ejecucion.html': {
    titulo: 'Ejecución del Pedido',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza)',
      funcion: 'EJECUTAR, VERIFICAR',
      actores: 'Marca, Taller',
      proposito: 'Monitorear en tiempo real el avance del pedido con visibilidad de procesos, trabajadores asignados y checkpoints de calidad.',
      aporte: 'Resuelve B1 con trazabilidad granular (qué trabajador hace qué tarea). Resuelve B2 al permitir verificación de avance real vs comprometido, reduciendo incertidumbre.',
      proceso: 'Pantalla de seguimiento activo durante la producción. Muestra progreso de cada etapa, trabajadores asignados, materiales utilizados, y próximos checkpoints de QA.'
    },
    preguntas: [
      '¿El nivel de detalle (proceso, trabajador, horas) es necesario o excesivo para la marca?',
      '¿Deberían poder comunicarse marca y taller directamente desde esta pantalla?',
      '¿Es necesario mostrar incidencias o problemas en tiempo real (retrasos, rechazos de QA)?',
      '¿Qué tan frecuente debería actualizarse el progreso (tiempo real, diario, por hito)?',
      '¿Hace falta un sistema de alertas proactivas cuando hay desvíos del plan?'
    ]
  },

  'validaciones.html': {
    titulo: 'Validaciones de Calidad',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza)',
      funcion: 'VERIFICAR',
      actores: 'Marca, Taller',
      proposito: 'Ejecutar y documentar checkpoints de calidad en hitos clave del proceso productivo.',
      aporte: 'Resuelve B1 al documentar cada validación con evidencia trazable. Resuelve B2 al permitir detección temprana de problemas antes de finalizar producción.',
      proceso: 'Pantalla de control de calidad. Se activa en los hitos definidos (30%, 70%, 100%) para que marca o tercero verifique muestras y apruebe/rechace antes de continuar.'
    },
    preguntas: [
      '¿Los checkpoints en 30%, 70%, 100% son adecuados o cada sector/producto necesita diferentes hitos?',
      '¿Quién debería hacer las validaciones: marca, taller, o auditor externo independiente?',
      '¿Es necesario subir evidencia fotográfica de las muestras validadas?',
      '¿Qué sucede si se rechaza una validación: se detiene todo o se permite re-trabajo?',
      '¿Deberíamos tener diferentes niveles de severidad para observaciones (crítico, moderado, menor)?'
    ]
  },

  'logistica.html': {
    titulo: 'Logística y Entrega',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza)',
      funcion: 'LOGÍSTICA',
      actores: 'Marca, Taller',
      proposito: 'Coordinar la entrega del pedido finalizado con trazabilidad de transporte y recepción.',
      aporte: 'Resuelve B1 al cerrar el ciclo de trazabilidad hasta la entrega final. Resuelve B2 al formalizar el proceso de entrega con confirmaciones y evidencia.',
      proceso: 'Pantalla de coordinación logística. Permite elegir método de entrega, ver seguimiento de envío, y confirmar recepción conforme.'
    },
    preguntas: [
      '¿La plataforma debería integrarse con proveedores logísticos reales o solo documentar la entrega?',
      '¿Es necesario un seguro o garantía de transporte?',
      '¿Qué evidencia se necesita para confirmar entrega (firma, foto, código QR)?',
      '¿Deberían poder reportar problemas en la entrega (faltantes, daños)?',
      '¿Hace falta coordinar retiro de materiales/insumos en el sentido inverso?'
    ]
  },

  'pago.html': {
    titulo: 'Pago y Facturación',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza), B3 (Formalización), B7 (Dumping Social)',
      funcion: 'PAGAR, COMPLIANCE',
      actores: 'Marca, Taller',
      proposito: 'Ejecutar el pago formalizado con factura digital verificada por ARCA y trazabilidad de transferencias bancarias.',
      aporte: 'Resuelve B3 y B7 al exigir factura electrónica y pago bancarizado (no efectivo). Resuelve B1 al documentar el flujo financiero completo. Resuelve B2 al automatizar el pago contra entrega conforme.',
      proceso: 'Pantalla de pago final. Genera factura digital con verificación ARCA, muestra desglose de impuestos y comisión de plataforma, y ejecuta transferencia bancaria.'
    },
    preguntas: [
      '¿La comisión de plataforma (3%) es clara en su cálculo y justificación?',
      '¿Deberían poder ver el desglose de hacia dónde va cada impuesto (IVA, Ganancias, etc.)?',
      '¿Es necesario un sistema de garantía/escrow donde el pago se retiene hasta confirmar calidad?',
      '¿Qué pasa si hay diferencias entre lo acordado y lo entregado (ajuste de pago)?',
      '¿Deberíamos permitir pagos parciales en hitos o solo pago final?'
    ]
  },

  'perfil-marca.html': {
    titulo: 'Perfil de Marca',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza)',
      funcion: 'VERIFICAR',
      actores: 'Marca (edita), Todos (ven)',
      proposito: 'Mostrar información verificada de la marca incluyendo datos fiscales, historial de pedidos, y reputación.',
      aporte: 'Resuelve B2 al permitir a talleres verificar seriedad de la marca antes de aceptar pedidos. Resuelve B1 al documentar identidad y trayectoria de la marca.',
      proceso: 'Perfil público/semi-público de la marca. Talleres pueden consultarlo antes de aceptar trabajos, verificar que está formalizada, y ver su historial de cumplimiento.'
    },
    preguntas: [
      '¿Qué información debería ser pública vs privada solo para contrapartes en negociación?',
      '¿Las marcas deberían poder agregar certificaciones de sustentabilidad a su perfil?',
      '¿Es necesario mostrar volumen de compra anual o proyectado para atraer talleres?',
      '¿El historial de pedidos debería mostrar nombres de proveedores previos?',
      '¿Deberíamos permitir que talleres califiquen a las marcas (bidireccionalidad de reputación)?'
    ]
  },

  'perfil-taller.html': {
    titulo: 'Perfil de Taller',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza), B3 (Formalización)',
      funcion: 'VERIFICAR, COMPLIANCE',
      actores: 'Taller (edita), Todos (ven)',
      proposito: 'Mostrar información verificada del taller incluyendo capacidades, certificaciones, trabajadores registrados y reputación.',
      aporte: 'Resuelve B2 al transparentar capacidades reales y verificaciones del taller. Resuelve B3 al exhibir nivel de formalización. Resuelve B1 al documentar la identidad completa del proveedor.',
      proceso: 'Perfil del taller visible para marcas. Incluye datos de registros (ARCA, STESS), capacidad productiva, maquinaria, trabajadores, certificaciones, y ratings de trabajos anteriores.'
    },
    preguntas: [
      '¿Deberían poder subir fotos del taller y maquinaria para generar confianza?',
      '¿Es necesario verificar presencialmente las capacidades declaradas o confiamos en auto-reporte?',
      '¿Qué tan detallado debe ser el listado de maquinaria (marca, modelo, año vs solo "10 máquinas rectas")?',
      '¿Los trabajadores registrados deberían aparecer nominalmente o solo como cantidad agregada?',
      '¿Hace falta mostrar distribución de especialización del equipo (cuántos cortadores, costureros, etc.)?'
    ]
  },

  'progreso-formalizacion.html': {
    titulo: 'Progreso de Formalización',
    contexto: {
      barrera: 'B3 (Formalización), B5 (Estado Ausente), B7 (Dumping Social)',
      funcion: 'COMPLIANCE',
      actores: 'Taller',
      proposito: 'Mostrar al taller su estado de formalización con checklist de requisitos y beneficios de alcanzar 100%.',
      aporte: 'Resuelve B3 al gamificar la formalización y mostrar camino claro hacia cumplimiento total. Resuelve B5 al hacer visible los requisitos del Estado. Resuelve B7 al incentivar condiciones laborales dignas.',
      proceso: 'Pantalla de auto-evaluación y progreso. El taller ve qué requisitos cumple (ARCA, STESS, etc.), cuáles le faltan, y qué beneficios obtiene al formalizarse (menor comisión, acceso a mejores pedidos).'
    },
    preguntas: [
      '¿Los beneficios de formalizarse (reducción de comisión 8%→3%) son suficientemente atractivos?',
      '¿Deberíamos mostrar costo estimado de completar cada requisito faltante?',
      '¿Hace falta conectar con gestores o asistencia para ayudar en trámites de formalización?',
      '¿El checklist es completo o faltan requisitos importantes del sector (habilitaciones municipales, bomberos, etc.)?',
      '¿Deberíamos mostrar comparación con otros talleres (benchmarking de formalización)?'
    ]
  },

  'capacitaciones.html': {
    titulo: 'Capacitaciones',
    contexto: {
      barrera: 'B6 (Bajas Capacidades)',
      funcion: 'APRENDER',
      actores: 'Taller, Trabajador',
      proposito: 'Proveer acceso a formación técnica y de gestión para mejorar capacidades de talleres y trabajadores.',
      aporte: 'Resuelve B6 al democratizar acceso a capacitación profesional. Mejora calidad del sector y empleabilidad de trabajadores. Permite certificación de competencias.',
      proceso: 'Catálogo de cursos y capacitaciones. Usuarios pueden inscribirse, ver progreso, y obtener certificados. Incluye tanto formación técnica (costura, patronaje) como gestión (costos, calidad).'
    },
    preguntas: [
      '¿Las capacitaciones deberían ser obligatorias para alcanzar ciertos niveles de formalización?',
      '¿Quién provee el contenido: Estado, sindicatos, cámaras empresariales, plataforma misma?',
      '¿Es necesario que sean presenciales, virtuales, o formato híbrido?',
      '¿Los certificados emitidos tienen validez oficial o son solo de la plataforma?',
      '¿Deberíamos vincular capacitaciones completadas con mejoras en el score de matching?'
    ]
  },

  'auditorias.html': {
    titulo: 'Auditorías',
    contexto: {
      barrera: 'B5 (Estado Ausente), B7 (Dumping Social)',
      funcion: 'FISCALIZAR',
      actores: 'Inspector, Mesa Tripartita',
      proposito: 'Registrar y hacer visible auditorías e inspecciones de talleres, generando presencia del Estado y trazabilidad de cumplimiento.',
      aporte: 'Resuelve B5 al materializar presencia del Estado mediante inspecciones registradas. Resuelve B7 al detectar y documentar irregularidades laborales. Genera datos para políticas públicas.',
      proceso: 'Registro de auditorías realizadas. Inspectores cargan hallazgos, se generan planes de acción correctiva, y se hace seguimiento de cumplimiento. Visible para actores de gobernanza.'
    },
    preguntas: [
      '¿Las auditorías deberían ser aleatorias, periódicas, o basadas en denuncias/alertas?',
      '¿Qué nivel de detalle de hallazgos debería ser público vs confidencial?',
      '¿Deberían existir diferentes tipos de auditorías (laboral, fiscal, seguridad e higiene)?',
      '¿Qué consecuencias tiene una auditoría negativa (suspensión, baja de score, multa)?',
      '¿Hace falta un proceso de apelación si el taller no está de acuerdo con los hallazgos?'
    ]
  },

  'denuncias.html': {
    titulo: 'Denuncias',
    contexto: {
      barrera: 'B5 (Estado Ausente), B7 (Dumping Social)',
      funcion: 'FISCALIZAR',
      actores: 'Trabajador, Inspector',
      proposito: 'Habilitar canal de denuncia anónima de irregularidades laborales (trabajo infantil, salarios bajos, condiciones inseguras).',
      aporte: 'Resuelve B7 al permitir que trabajadores reporten abusos sin represalias. Resuelve B5 al crear mecanismo de enforcement participativo. Genera alertas para inspecciones focalizadas.',
      proceso: 'Formulario de denuncia anónima. Trabajadores o terceros reportan irregularidades, se genera un caso con número de seguimiento, y se deriva a inspección para verificación.'
    },
    preguntas: [
      '¿El anonimato está suficientemente garantizado para que trabajadores se animen a denunciar?',
      '¿Deberían poder adjuntar evidencia (fotos, documentos) a las denuncias?',
      '¿Qué tan rápido se debe actuar sobre una denuncia (SLA de respuesta)?',
      '¿Hace falta un sistema de seguimiento para que el denunciante vea qué pasó con su reporte?',
      '¿Cómo se previene uso malicioso (denuncias falsas para perjudicar competidores)?'
    ]
  },

  'parametrizacion-algoritmo.html': {
    titulo: 'Parametrización del Algoritmo',
    contexto: {
      barrera: 'B4 (Articulación), B5 (Estado Ausente)',
      funcion: 'GOBERNAR',
      actores: 'Mesa Tripartita',
      proposito: 'Permitir a actores de gobernanza ajustar parámetros del algoritmo de matching para alinear con políticas sectoriales.',
      aporte: 'Resuelve B5 al dar al Estado capacidad de intervención sobre el funcionamiento del mercado. Resuelve B4 al permitir optimizar la articulación según prioridades de política pública.',
      proceso: 'Panel de administración del sistema. La mesa tripartita puede ajustar pesos del algoritmo (priorizar formalización, cercanía geográfica, etc.) y umbrales de verificación.'
    },
    preguntas: [
      '¿Los parámetros deberían poder cambiarse en tiempo real o requieren proceso de aprobación/consulta?',
      '¿Es necesario un simulador para ver impacto de cambios antes de aplicarlos?',
      '¿Qué tan transparentes deberían ser estos parámetros para usuarios (marcas/talleres)?',
      '¿Deberían existir parámetros diferentes por región o tipo de producto?',
      '¿Hace falta un log de auditoría de quién cambió qué parámetro y cuándo?'
    ]
  },

  'cierre.html': {
    titulo: 'Cierre de Pedido',
    contexto: {
      barrera: 'B1 (Trazabilidad), B2 (Desconfianza)',
      funcion: 'VERIFICAR, PAGAR',
      actores: 'Marca, Taller',
      proposito: 'Formalizar el cierre exitoso del pedido con confirmación de conformidad y habilitación de pago.',
      aporte: 'Resuelve B1 al documentar el cierre completo del ciclo de trazabilidad. Resuelve B2 al formalizar la conformidad antes del pago, reduciendo conflictos posteriores.',
      proceso: 'Pantalla de cierre de ciclo. Ambas partes confirman conformidad, se registra el pedido como completado exitosamente, y se habilita el flujo de pago.'
    },
    preguntas: [
      '¿Deberían poder calificar la experiencia mutuamente en esta etapa?',
      '¿Es necesario un periodo de garantía post-entrega antes del cierre definitivo?',
      '¿Qué pasa si hay disconformidades menores: se cierra igual o se mantiene abierto?',
      '¿Deberíamos generar un reporte automático de trazabilidad completa del pedido?',
      '¿Hace falta un espacio para feedback cualitativo (qué funcionó bien, qué mejorar)?'
    ]
  }
};


class PantallaInfoManager {
  constructor() {
    this.currentPage = window.location.pathname.split('/').pop();
    this.info = PANTALLAS_INFO[this.currentPage];
  }

  init() {
    // No agregar paneles en la página de índice
    if (this.currentPage === 'index.html') {
      return;
    }

    if (!this.info) {
      console.warn(`No hay información definida para ${this.currentPage}`);
      return;
    }

    this.agregarEstilos();
    this.agregarPaneles();
  }

  agregarEstilos() {
    const style = document.createElement('style');
    style.textContent = `
      .info-panels-container {
        position: fixed;
        top: 70px;
        right: 20px;
        width: 400px;
        z-index: 9995;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .info-panel {
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: all 0.3s ease;
      }

      .info-panel-header {
        padding: 16px 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        user-select: none;
        transition: background 0.2s;
      }

      .info-panel-header:hover {
        background: #f8fafc;
      }

      .info-panel.contexto .info-panel-header {
        background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
        color: white;
      }

      .info-panel.preguntas .info-panel-header {
        background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
        color: white;
      }

      .info-panel-header-content {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .info-panel-icon {
        font-size: 20px;
      }

      .info-panel-title {
        font-weight: 600;
        font-size: 14px;
        margin: 0;
      }

      .info-panel-toggle {
        font-size: 18px;
        transition: transform 0.3s;
      }

      .info-panel.expanded .info-panel-toggle {
        transform: rotate(180deg);
      }

      .info-panel-body {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
      }

      .info-panel.expanded .info-panel-body {
        max-height: 600px;
        overflow-y: auto;
      }

      .info-panel-content {
        padding: 20px;
        font-size: 13px;
        line-height: 1.6;
        color: #334155;
      }

      .info-section {
        margin-bottom: 16px;
      }

      .info-section:last-child {
        margin-bottom: 0;
      }

      .info-label {
        font-weight: 600;
        color: #0f172a;
        margin-bottom: 4px;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .info-value {
        color: #475569;
      }

      .info-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 4px;
      }

      .info-badge {
        background: #e0f2fe;
        color: #0369a1;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
      }

      .preguntas-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .preguntas-list li {
        padding: 12px;
        margin-bottom: 8px;
        background: #f8fafc;
        border-left: 3px solid #8b5cf6;
        border-radius: 6px;
        font-size: 13px;
        color: #475569;
      }

      .preguntas-list li:last-child {
        margin-bottom: 0;
      }

      .preguntas-list li:before {
        content: "→";
        color: #8b5cf6;
        font-weight: bold;
        margin-right: 8px;
      }

      /* Scrollbar personalizado para panel de preguntas */
      .info-panel-body::-webkit-scrollbar {
        width: 6px;
      }

      .info-panel-body::-webkit-scrollbar-track {
        background: #f1f5f9;
      }

      .info-panel-body::-webkit-scrollbar-thumb {
        background: #cbd5e1;
        border-radius: 3px;
      }

      .info-panel-body::-webkit-scrollbar-thumb:hover {
        background: #94a3b8;
      }

      /* Responsive: colapsar en pantallas pequeñas */
      @media (max-width: 1400px) {
        .info-panels-container {
          width: 350px;
        }
      }

      @media (max-width: 1200px) {
        .info-panels-container {
          position: relative;
          top: 0;
          right: 0;
          width: 100%;
          max-width: 600px;
          margin: 20px auto;
        }
      }
    `;
    document.head.appendChild(style);
  }

  agregarPaneles() {
    const container = document.createElement('div');
    container.className = 'info-panels-container';

    // Panel 1: Contexto y Propósito
    const panelContexto = this.crearPanelContexto();
    container.appendChild(panelContexto);

    // Panel 2: Preguntas para Reflexionar
    const panelPreguntas = this.crearPanelPreguntas();
    container.appendChild(panelPreguntas);

    document.body.appendChild(container);

    // Agregar event listeners
    this.agregarEventListeners();
  }

  crearPanelContexto() {
    const panel = document.createElement('div');
    panel.className = 'info-panel contexto';
    panel.id = 'panelContexto';

    const ctx = this.info.contexto;

    panel.innerHTML = `
      <div class="info-panel-header">
        <div class="info-panel-header-content">
          <span class="info-panel-icon">💡</span>
          <h3 class="info-panel-title">Contexto y Propósito</h3>
        </div>
        <span class="info-panel-toggle">▼</span>
      </div>
      <div class="info-panel-body">
        <div class="info-panel-content">
          <div class="info-section">
            <div class="info-label">Barrera(s) que resuelve</div>
            <div class="info-value">${ctx.barrera}</div>
          </div>

          <div class="info-section">
            <div class="info-label">Función(es) de la plataforma</div>
            <div class="info-badges">
              ${ctx.funcion.split(', ').map(f => `<span class="info-badge">${f}</span>`).join('')}
            </div>
          </div>

          <div class="info-section">
            <div class="info-label">Actor(es)</div>
            <div class="info-value">${ctx.actores}</div>
          </div>

          <div class="info-section">
            <div class="info-label">Propósito de esta pantalla</div>
            <div class="info-value">${ctx.proposito}</div>
          </div>

          <div class="info-section">
            <div class="info-label">Aporte a la solución</div>
            <div class="info-value">${ctx.aporte}</div>
          </div>

          <div class="info-section">
            <div class="info-label">Ubicación en el proceso</div>
            <div class="info-value">${ctx.proceso}</div>
          </div>
        </div>
      </div>
    `;

    return panel;
  }

  crearPanelPreguntas() {
    const panel = document.createElement('div');
    panel.className = 'info-panel preguntas';
    panel.id = 'panelPreguntas';

    const preguntasHTML = this.info.preguntas
      .map(p => `<li>${p}</li>`)
      .join('');

    panel.innerHTML = `
      <div class="info-panel-header">
        <div class="info-panel-header-content">
          <span class="info-panel-icon">🤔</span>
          <h3 class="info-panel-title">Preguntas para Reflexionar</h3>
        </div>
        <span class="info-panel-toggle">▼</span>
      </div>
      <div class="info-panel-body">
        <div class="info-panel-content">
          <ul class="preguntas-list">
            ${preguntasHTML}
          </ul>
        </div>
      </div>
    `;

    return panel;
  }

  agregarEventListeners() {
    const panels = document.querySelectorAll('.info-panel');

    panels.forEach(panel => {
      const header = panel.querySelector('.info-panel-header');

      header.addEventListener('click', () => {
        panel.classList.toggle('expanded');
      });
    });
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const manager = new PantallaInfoManager();
    manager.init();
  });
} else {
  const manager = new PantallaInfoManager();
  manager.init();
}
