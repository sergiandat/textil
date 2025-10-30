/**
 * TUTORIAL DATA - MVP v1.3 Barreras
 * Definición de tutoriales por barrera y modo libre
 */

const TUTORIALES_BARRERAS = {
  // ============================================
  // B1: FALTA DE TRAZABILIDAD Y TRANSPARENCIA
  // ============================================
  'B1': {
    'crear-pedido-v1.3.html': {
      titulo: 'Tutorial: Crear Pedido con Trazabilidad Completa',
      contextoBarrera: 'En este tutorial aprenderás a crear un pedido totalmente trazable, que permitirá seguir cada etapa de producción en tiempo real.',
      pasos: [
        {
          id: 'paso-1-informacion-basica',
          selector: '.col-span-8 .section-card:nth-of-type(1)',
          titulo: 'Paso 1: Información Básica del Pedido',
          descripcion: 'Define QUÉ vas a producir. Seleccioná el tipo de prenda, variante, cantidad y fecha objetivo. Esta información será la base para que el sistema haga matching con talleres que tengan capacidad y experiencia en ese producto específico.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'paso-2-cadena-produccion',
          selector: '.col-span-8 .section-card:nth-of-type(2)',
          titulo: 'Paso 2: Cadena de Producción Editable',
          descripcion: 'Aquí ves los procesos sugeridos automáticamente según el tipo de prenda. La GRAN NOVEDAD es que esta cadena es EDITABLE: podés REORDENAR procesos (↑↓), AGREGAR nuevos (+), o QUITAR los que no necesites (×). Esta flexibilidad es clave para adaptarte a diferentes productos y proveedores.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'paso-2-botones-edicion',
          selector: '#proceso-1',
          titulo: 'Controles de Cada Proceso',
          descripcion: 'Cada proceso tiene controles para gestionarlo: botones de ↑↓ para cambiar el orden, × para quitarlo, y ⚙ para expandir su configuración detallada. Probá hacer click en ⚙ Config para ver las opciones avanzadas.',
          posicion: 'right',
          destacar: true
        },
        {
          id: 'paso-3-config-proceso',
          selector: '.col-span-8 .section-card:nth-of-type(3)',
          titulo: 'Paso 3: Configurar Procesos Individualmente',
          descripcion: 'Al expandir la configuración de un proceso, podés: 1) Subir ARCHIVOS TÉCNICOS (moldes .dwg, fichas .pdf, fotos de referencia), 2) Definir CHECKPOINTS DE QA específicos para ese proceso, y 3) Seleccionar el PROVEEDOR que ejecutará esa etapa. Esto permite trazabilidad granular: sabés qué taller hace qué.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'paso-3-archivos-tecnicos',
          selector: '.archivo-adjunto',
          titulo: 'Archivos Técnicos por Proceso',
          descripcion: 'Los archivos que subas acá se compartirán SOLO con el taller asignado a este proceso específico. Por ejemplo, el molde del corte solo lo ve el cortador, la ficha de confección solo la ve el confeccionista. Esto protege tu propiedad intelectual y reduce confusión.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'paso-3-qa-transversal',
          selector: '.checkpoint-qa',
          titulo: 'Control de Calidad Transversal',
          descripcion: 'IMPORTANTE: QA (Quality Assurance) no es un eslabón más de la cadena. Son CHECKPOINTS que aplicás a diferentes procesos según necesites. Por ejemplo, podés verificar calidad al 30% de Confección, 70% de Confección, y 100% antes de Embalaje. Definí acá cuándo y qué vas a verificar.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'paso-4-logistica',
          selector: '.col-span-8 .section-card:nth-of-type(4)',
          titulo: 'Paso 4: Logística entre Procesos',
          descripcion: 'Si diferentes procesos los hacen diferentes talleres, necesitás coordinar el traslado de productos entre ellos. Acá definís quién se hace cargo de cada traslado: el proveedor del proceso anterior (EXW), vos como marca (FCA), o contratar transporte desde la plataforma.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'paso-5-resumen',
          selector: '.col-span-8 .section-card:nth-of-type(5)',
          titulo: 'Paso 5: Resumen y Confirmar',
          descripcion: 'Antes de crear el pedido, REVISÁ que toda la información esté completa. Verificá especialmente que hayas seleccionado proveedores para TODOS los procesos (o dejado que la plataforma sugiera). Una vez creado, el pedido quedará registrado con trazabilidad completa desde el momento cero.',
          posicion: 'top',
          destacar: true
        }
      ]
    },

    'dashboard-v1.3.html': {
      titulo: 'Tutorial: Dashboard con Trazabilidad en Tiempo Real',
      contextoBarrera: 'Desde este dashboard monitoreás en tiempo real el avance de tus pedidos con trazabilidad completa: desde el pedido hasta el pago.',
      pasos: [
        {
          id: 'kpis-principales',
          selector: '.grid.grid-cols-4.gap-4',
          titulo: 'KPIs de Tu Actividad',
          descripcion: 'Estas métricas te dan una vista rápida: pedidos activos, completados, monto total transaccionado y tu rating promedio. Toda esta información es trazable y verificable.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'pedidos-en-ejecucion',
          selector: '.section-card:has(h3:contains("Pedidos en Ejecución"))',
          titulo: 'Monitoreo en Tiempo Real',
          descripcion: 'Acá ves el progreso detallado de cada pedido activo. El porcentaje global muestra el avance total, y abajo ves el desglose por cada proceso de la cadena. Hacé click en un pedido para ver trazabilidad completa: qué trabajador está en qué tarea ahora mismo.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'badges-verificacion',
          selector: '.badge.badge-success:contains("✓")',
          titulo: 'Badges de Verificación',
          descripcion: 'Estos badges muestran verificaciones en tiempo real: ARCA (fiscal), STESS (laboral), SOIVA (sindicato). Si un proveedor pierde alguna verificación durante la ejecución, recibirás una alerta inmediata.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'seleccionar-proveedor.html': {
      titulo: 'Tutorial: Matching Transparente de Proveedores',
      contextoBarrera: 'Aprende a seleccionar proveedores con información verificada y transparente sobre su desempeño.',
      pasos: [
        {
          id: 'algoritmo-matching',
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Score de Compatibilidad',
          descripcion: 'El sistema calcula automáticamente qué tan compatible es cada taller con tu pedido (92%, 88%, etc.). Este score considera: capacidad productiva, especialización en el producto, ubicación, historial de cumplimiento, y nivel de formalización.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'verificaciones-proveedor',
          selector: '.grid:has(.bg-emerald-50)',
          titulo: 'Verificaciones en Tiempo Real',
          descripcion: 'Antes de seleccionar, ves todas las verificaciones del taller: ARCA (situación fiscal), STESS (trabajadores registrados), SOIVA (convenio colectivo). Esto genera CONFIANZA basada en datos verificables, no en promesas.',
          posicion: 'top',
          destacar: true
        }
      ]
    },

    'acordar.html': {
      titulo: 'Tutorial: Acuerdo Formalizado y Registrado',
      contextoBarrera: 'Los acuerdos formalizados en la plataforma quedan registrados y son trazables, evitando conflictos futuros.',
      pasos: [
        {
          id: 'terminos-acuerdo',
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Términos del Acuerdo',
          descripcion: 'Todos los términos quedan documentados: especificaciones técnicas, plazos, precio, condiciones de calidad, y condiciones laborales mínimas. Este registro es la base de la trazabilidad contractual.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'ejecucion.html': {
      titulo: 'Tutorial: Ejecución con Trazabilidad Granular',
      contextoBarrera: 'Durante la ejecución, podés ver en tiempo real qué está pasando en cada proceso de producción.',
      pasos: [
        {
          id: 'progreso-procesos',
          selector: '.section-card:has(h3:contains("Progreso"))',
          titulo: 'Trazabilidad Proceso a Proceso',
          descripcion: 'Ves el avance de cada proceso de la cadena: % completado, trabajadores asignados, materiales utilizados. Esta granularidad permite detectar problemas temprano.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'trabajadores-asignados',
          selector: '.grid:has(.text-xs:contains("Trabajador"))',
          titulo: 'Trazabilidad hasta el Trabajador',
          descripcion: 'Sabés exactamente QUÉ TRABAJADOR está haciendo QUÉ TAREA. Esto no solo da trazabilidad completa, sino que también permite reconocer el trabajo individual y detectar irregularidades laborales.',
          posicion: 'top',
          destacar: true
        }
      ]
    },

    'logistica.html': {
      titulo: 'Tutorial: Logística y Entrega Rastreada',
      contextoBarrera: 'El seguimiento de logística cierra el ciclo de trazabilidad hasta la entrega final.',
      pasos: [
        {
          id: 'seguimiento-envio',
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Trazabilidad del Transporte',
          descripcion: 'El traslado de productos también está trazado: fecha de envío, transportista, tracking en tiempo real. Sabés exactamente dónde están tus productos en cada momento.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'pago.html': {
      titulo: 'Tutorial: Pago con Trazabilidad Financiera',
      contextoBarrera: 'El pago formalizado con factura digital cierra el ciclo de trazabilidad completa del pedido.',
      pasos: [
        {
          id: 'factura-digital',
          selector: '.section-card:has(h3:contains("Factura"))',
          titulo: 'Factura Digital Verificada',
          descripcion: 'La factura electrónica está verificada por ARCA en tiempo real. Ves el desglose completo: subtotal, IVA, retenciones, comisión de plataforma. Todo documentado y trazable.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'pago-bancarizado',
          selector: '.section-card:has(.font-mono:contains("CBU"))',
          titulo: 'Pago Bancarizado Obligatorio',
          descripcion: 'El pago DEBE ser por transferencia bancaria (no efectivo). Esto deja registro del flujo financiero completo, cerrando la trazabilidad de punta a punta: desde la especificación del pedido hasta el pago final.',
          posicion: 'top',
          destacar: true
        }
      ]
    }
  },

  // ============================================
  // B2: DESCONFIANZA ENTRE ACTORES
  // ============================================
  'B2': {
    'dashboard-v1.3.html': {
      titulo: 'Tutorial: Dashboard con Verificaciones que Generan Confianza',
      contextoBarrera: 'Las verificaciones en tiempo real de cumplimiento generan confianza entre las partes.',
      pasos: [
        {
          id: 'badges-confianza',
          selector: '.badge.badge-success',
          titulo: 'Badges de Verificación = Confianza',
          descripcion: 'Los badges de verificación (ARCA, STESS, SOIVA) no son decorativos. Son verificaciones EN TIEMPO REAL de que el proveedor cumple con registros fiscales, laborales y sindicales. Esto reemplaza "confiar en la palabra" por "confiar en datos verificables".',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'seleccionar-proveedor.html': {
      titulo: 'Tutorial: Reputación Verificable',
      contextoBarrera: 'La reputación de los talleres se basa en datos verificables, no en promesas.',
      pasos: [
        {
          id: 'rating-verificable',
          selector: '.text-2xl.font-bold:contains("/")',
          titulo: 'Rating Basado en Cumplimiento Real',
          descripcion: 'El rating (8.9/10) no es arbitrario. Se calcula basándose en: cumplimiento de plazos, calidad verificada en checkpoints, ausencia de denuncias laborales, y feedback de otros clientes. Es VERIFICABLE porque está respaldado por datos de la plataforma.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'acordar.html': {
      titulo: 'Tutorial: Acuerdo con Garantía de Cumplimiento',
      contextoBarrera: 'Los acuerdos incluyen mecanismos de garantía que reducen el riesgo para ambas partes.',
      pasos: [
        {
          id: 'condiciones-proteccion',
          selector: '.section-card',
          titulo: 'Condiciones que Protegen a Ambas Partes',
          descripcion: 'El acuerdo incluye: checkpoints de QA (protege a la marca), plazos de pago claros (protege al taller), mecanismo de resolución de disputas (protege a ambos). Ya no dependés de "confianza ciega", sino de un framework que reduce el riesgo.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'denuncias.html': {
      titulo: 'Tutorial: Sistema de Denuncias Anónimas',
      contextoBarrera: 'El canal de denuncias anónimas permite construir confianza al detectar irregularidades.',
      pasos: [
        {
          id: 'anonimato-garantizado',
          selector: '.section-card',
          titulo: 'Denuncias Anónimas y Protegidas',
          descripcion: 'Trabajadores o terceros pueden denunciar irregularidades (salarios bajos, condiciones inseguras, trabajo infantil) de forma ANÓNIMA. La plataforma garantiza que no se puede rastrear quién hizo la denuncia, protegiendo de represalias. Esto construye confianza en el sistema de fiscalización.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'auditorias.html': {
      titulo: 'Tutorial: Auditorías Registradas',
      contextoBarrera: 'Las auditorías públicas generan confianza al mostrar que hay control y seguimiento real.',
      pasos: [
        {
          id: 'auditorias-publicas',
          selector: '.section-card',
          titulo: 'Historial de Auditorías Visible',
          descripcion: 'Todas las auditorías quedan registradas con fecha, inspector, hallazgos, y acciones correctivas tomadas. Esta transparencia genera confianza: las marcas saben que los talleres son auditados, y los talleres saben que el cumplimiento se reconoce.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'pago.html': {
      titulo: 'Tutorial: Pago Garantizado contra Entrega',
      contextoBarrera: 'El mecanismo de pago contra entrega conforme protege a ambas partes y genera confianza.',
      pasos: [
        {
          id: 'pago-contra-entrega',
          selector: '.section-card',
          titulo: 'Pago Automático al Confirmar Recepción',
          descripcion: 'El sistema solo libera el pago cuando la marca confirma recepción conforme. Esto protege a la marca (solo paga si recibe bien) y al taller (el pago es automático una vez verificado, no depende de "buena voluntad" de la marca). Mecanismo que construye confianza.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    }
  },

  // ============================================
  // B3: PROCESO DE FORMALIZACIÓN COMPLEJO Y COSTOSO
  // ============================================
  'B3': {
    'validaciones.html': {
      titulo: 'Tutorial: Checklist de Formalización Paso a Paso',
      contextoBarrera: 'La formalización dividida en pasos pequeños y con asistencia la hace alcanzable.',
      pasos: [
        {
          id: 'checklist-formalizacion',
          selector: '.section-card',
          titulo: 'Qué Cumplís y Qué Te Falta',
          descripcion: 'En lugar de abrumarte con "tenés que estar 100% formal", este checklist muestra: qué YA cumplís (✓ en verde), qué te FALTA (× en rojo), y qué está EN PROCESO (⏳). Ver el progreso motiva a completar lo faltante.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'progreso-formalizacion.html': {
      titulo: 'Tutorial: Progreso de Formalización con Incentivos',
      contextoBarrera: 'Mostrar el progreso (95%) y los beneficios concretos (menor comisión) incentiva la formalización completa.',
      pasos: [
        {
          id: 'nivel-formalizacion',
          selector: '.w-24.h-24',
          titulo: 'Tu Nivel de Formalización',
          descripcion: 'El indicador circular (95%) gamifica la formalización: ves qué tan cerca estás del 100%. Esta visualización genera motivación ("casi llego") en lugar de frustración ("falta mucho").',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'beneficios-formalizacion',
          selector: '.section-card:has(.text-emerald-600)',
          titulo: 'Beneficios Concretos de Formalizarse',
          descripcion: 'Formalizarse NO es solo "cumplir con la ley". Tiene beneficios económicos tangibles: la comisión de plataforma baja de 8% (informal) a 3% (100% formal). Si facturás $100.000/mes, son $5.000 de ahorro mensual. Esto hace que valga la pena el esfuerzo.',
          posicion: 'top',
          destacar: true
        }
      ]
    },

    'capacitaciones.html': {
      titulo: 'Tutorial: Capacitación sobre Formalización',
      contextoBarrera: 'Capacitaciones sobre cómo formalizarse reducen la complejidad percibida del proceso.',
      pasos: [
        {
          id: 'cursos-formalizacion',
          selector: '.section-card',
          titulo: 'Aprender a Formalizarse',
          descripcion: 'Hay cursos específicos sobre: "Cómo inscribirte en ARCA", "Qué es el registro STESS", "Cómo hacer facturas electrónicas". Esta capacitación reduce la COMPLEJIDAD PERCIBIDA: no es tan difícil cuando alguien te explica paso a paso.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'seleccionar-proveedor.html': {
      titulo: 'Tutorial: Acceso a Mejores Pedidos por Estar Formal',
      contextoBarrera: 'Los talleres formales tienen prioridad en el matching, accediendo a mejores oportunidades.',
      pasos: [
        {
          id: 'matching-favorece-formales',
          selector: '.section-card',
          titulo: 'La Formalización Te Da Ventaja Competitiva',
          descripcion: 'El algoritmo de matching PRIORIZA talleres con mayor nivel de formalización. Dos talleres con misma capacidad técnica: el que está más formalizado aparece primero. Esto significa acceso a MEJORES PEDIDOS (marcas grandes que exigen formalización). Otro incentivo tangible para formalizarse.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    }
  },

  // ============================================
  // B4: FALTA DE ARTICULACIÓN ENTRE ACTORES
  // ============================================
  'B4': {
    'dashboard-tripartito.html': {
      titulo: 'Tutorial: Dashboard Integrado de la Mesa Tripartita',
      contextoBarrera: 'La plataforma es el punto de encuentro donde Estado, Sindicatos y Cámaras comparten información.',
      pasos: [
        {
          id: 'datos-agregados',
          selector: '.grid.grid-cols-4',
          titulo: 'Datos del Sector en Tiempo Real',
          descripcion: 'La mesa tripartita ve métricas agregadas del sector: cantidad de talleres activos, trabajadores registrados, transacciones totales, nivel de formalización promedio. Esta información compartida permite diseñar políticas basadas en DATOS REALES, no en estimaciones.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'parametrizacion-algoritmo.html': {
      titulo: 'Tutorial: Gobernanza del Algoritmo de Matching',
      contextoBarrera: 'La mesa tripartita puede ajustar parámetros del matching para alinear con políticas sectoriales.',
      pasos: [
        {
          id: 'parametros-algoritmo',
          selector: '.section-card',
          titulo: 'Ajustar Prioridades del Sistema',
          descripcion: 'La mesa tripartita puede modificar pesos del algoritmo. Por ejemplo: aumentar peso de "formalización" para incentivar el cumplimiento, o priorizar "cercanía geográfica" para promover economía regional. Esto es ARTICULACIÓN: el Estado, sindicatos y cámaras gestionan JUNTOS cómo funciona el mercado.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'auditorias.html': {
      titulo: 'Tutorial: Coordinación de Inspecciones',
      contextoBarrera: 'Las inspecciones se coordinan entre diferentes actores usando la plataforma como punto de encuentro.',
      pasos: [
        {
          id: 'coordinacion-inspecciones',
          selector: '.section-card',
          titulo: 'Inspecciones Coordinadas',
          descripcion: 'Antes: cada actor inspeccionaba por separado (Estado, sindicato, cámaras). Ahora: la plataforma permite COORDINAR inspecciones conjuntas o compartir hallazgos. Esto evita duplicar esfuerzos y genera una visión integral del cumplimiento.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'capacitaciones.html': {
      titulo: 'Tutorial: Capacitación Coordinada',
      contextoBarrera: 'Diferentes actores ofrecen capacitaciones en una misma plataforma, evitando fragmentación.',
      pasos: [
        {
          id: 'capacitaciones-conjuntas',
          selector: '.section-card',
          titulo: 'Capacitación Unificada',
          descripcion: 'El sindicato ofrece cursos técnicos, el Estado ofrece sobre formalización, las cámaras sobre gestión. Todo en UNA plataforma. Esto es ARTICULACIÓN: en lugar de que cada actor tenga su propio sistema aislado, comparten infraestructura y se potencian mutuamente.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    }
  },

  // ============================================
  // B5: ESTADO AUSENTE O INEFICAZ
  // ============================================
  'B5': {
    'auditorias.html': {
      titulo: 'Tutorial: Fiscalización Inteligente del Estado',
      contextoBarrera: 'La plataforma amplifica la capacidad estatal mediante inteligencia de datos y presencia digital.',
      pasos: [
        {
          id: 'fiscalizacion-dirigida',
          selector: '.section-card',
          titulo: 'Inspecciones Dirigidas por Datos',
          descripcion: 'Antes: el Estado inspeccionaba al azar o por denuncia. Ahora: la plataforma genera ALERTAS basadas en datos (ej: taller con muchos trabajadores pero baja formalización, denuncias anónimas, caída repentina de rating). Esto permite fiscalización INTELIGENTE: ir donde realmente hay problemas.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'denuncias.html': {
      titulo: 'Tutorial: Canal de Denuncias que Amplifica Presencia Estatal',
      contextoBarrera: 'Las denuncias anónimas funcionan como "ojos y oídos" del Estado en todas partes.',
      pasos: [
        {
          id: 'denuncias-amplifican-estado',
          selector: '.section-card',
          titulo: 'Presencia Digital Permanente',
          descripcion: 'El Estado físicamente no puede estar en todos los talleres todo el tiempo. Pero el sistema de denuncias anónimas funciona como presencia digital 24/7: trabajadores o terceros alertan problemas. Esto AMPLIFICA la capacidad estatal: en lugar de inspectores limitados, hay "sensores" distribuidos en todo el sector.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'dashboard-tripartito.html': {
      titulo: 'Tutorial: Dashboard Estatal con Inteligencia de Datos',
      contextoBarrera: 'El Estado tiene visibilidad en tiempo real del sector, permitiendo decisiones basadas en evidencia.',
      pasos: [
        {
          id: 'visibilidad-tiempo-real',
          selector: '.section-card',
          titulo: 'Ver Todo el Sector en Tiempo Real',
          descripcion: 'El Estado ve métricas actualizadas del sector: cuántos talleres están operando, cuántos trabajadores registrados, tendencias de formalización, zonas con más problemas. Esta VISIBILIDAD en tiempo real permite actuar proactivamente, no reactivamente.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'validaciones.html': {
      titulo: 'Tutorial: Prevención vs Sanción',
      contextoBarrera: 'El sistema permite al Estado trabajar en prevención, no solo sancionar irregularidades después.',
      pasos: [
        {
          id: 'prevencion-proactiva',
          selector: '.section-card',
          titulo: 'Ayudar a Cumplir, No Solo Sancionar',
          descripcion: 'El checklist de formalización permite al Estado trabajar en PREVENCIÓN: alertar al taller "te falta esto para cumplir" antes de sancionar. Esto es más eficaz que fiscalización puramente punitiva: se logra más cumplimiento con menos conflicto.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    }
  },

  // ============================================
  // B6: BAJAS CAPACIDADES TÉCNICAS Y GERENCIALES
  // ============================================
  'B6': {
    'capacitaciones.html': {
      titulo: 'Tutorial: Universidad Permanente del Sector',
      contextoBarrera: 'Capacitación accesible y contextual eleva las capacidades de talleres y trabajadores.',
      pasos: [
        {
          id: 'catalogo-capacitaciones',
          selector: '.section-card',
          titulo: 'Capacitación Técnica y Gerencial',
          descripcion: 'Hay cursos de TÉCNICAS (costura, patronaje, control de calidad) y GERENCIALES (costeo, gestión de equipos, planificación de producción). Esta combinación eleva capacidades de forma integral: no solo saber HACER, sino también saber GESTIONAR.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'certificaciones',
          selector: '.badge.badge-primary',
          titulo: 'Certificaciones Verificables',
          descripcion: 'Al completar una capacitación, recibís un certificado digital verificable en tu perfil. Las marcas pueden ver qué certificaciones tenés, lo cual mejora tu matching. Esto incentiva la capacitación continua: no solo aprendés, sino que podés DEMOSTRAR que aprendiste.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'dashboard-v1.3.html': {
      titulo: 'Tutorial: Dashboard que Muestra Certificaciones',
      contextoBarrera: 'Las certificaciones aparecen en tu perfil, mejorando tu reputación y matching.',
      pasos: [
        {
          id: 'certificaciones-visibles',
          selector: '.section-card',
          titulo: 'Tus Certificaciones Son Visibles',
          descripcion: 'Las certificaciones que obtenés en capacitaciones aparecen en tu dashboard y perfil público. Las marcas las ven al evaluar talleres. Esto crea un INCENTIVO tangible: capacitarte mejora tus chances de conseguir mejores pedidos.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'progreso-formalizacion.html': {
      titulo: 'Tutorial: Aprendizaje Contextual',
      contextoBarrera: 'Las capacitaciones están integradas en el flujo de trabajo, facilitando el aprendizaje "just-in-time".',
      pasos: [
        {
          id: 'aprendizaje-contextual',
          selector: '.section-card',
          titulo: 'Capacitación en el Momento que la Necesitás',
          descripcion: 'Si el checklist muestra que te falta "Facturación Electrónica", hay un link directo al curso sobre ese tema. Esto es aprendizaje CONTEXTUAL: aprendés justo cuando necesitás aplicarlo, no en abstracto. Aumenta retención y aplicación práctica.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    }
  },

  // ============================================
  // B7: DUMPING SOCIAL Y COMPETENCIA DESLEAL
  // ============================================
  'B7': {
    'seleccionar-proveedor.html': {
      titulo: 'Tutorial: Visibilidad del Nivel de Formalización',
      contextoBarrera: 'Hacer visible el nivel de formalización nivela la cancha entre talleres formales e informales.',
      pasos: [
        {
          id: 'formalizacion-visible',
          selector: '.section-card',
          titulo: 'No Podés Esconder la Informalidad',
          descripcion: 'El nivel de formalización (95%, 60%, etc.) es VISIBLE para todas las marcas. Un taller informal no puede "hacerse pasar" por formal. Esto nivela la cancha: las marcas pueden elegir conscientemente si trabajar con talleres menos formales (y asumir riesgos) o priorizar formales (mayor costo pero menor riesgo legal).',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'acordar.html': {
      titulo: 'Tutorial: Condiciones Laborales Mínimas en el Acuerdo',
      contextoBarrera: 'Los acuerdos incluyen cláusulas laborales mínimas, evitando dumping social.',
      pasos: [
        {
          id: 'condiciones-laborales',
          selector: '.section-card',
          titulo: 'Salario Mínimo y Registración Obligatorios',
          descripcion: 'El acuerdo incluye condiciones laborales mínimas: salario no menor a $X/hora (convenio colectivo), registración de trabajadores en STESS, jornada máxima 48hs/semana. Estas cláusulas evitan que talleres hagan dumping social (bajar precios explotando trabajadores) para ganar pedidos.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'parametrizacion-algoritmo.html': {
      titulo: 'Tutorial: Penalizar Informalidad en el Matching',
      contextoBarrera: 'El algoritmo puede penalizar talleres informales, incentivando formalización.',
      pasos: [
        {
          id: 'penalizar-informalidad',
          selector: '.section-card',
          titulo: 'Ajustar Comisiones Según Formalización',
          descripcion: 'La mesa tripartita puede ajustar la comisión de plataforma: 3% para talleres 100% formales, 8% para informales. Esto hace que la informalidad sea ECONÓMICAMENTE INVIABLE: el ahorro que obtienen no pagando impuestos se lo lleva la comisión de plataforma. Incentivo poderoso para formalizarse.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'dashboard-tripartito.html': {
      titulo: 'Tutorial: Monitoreo de Irregularidades Laborales',
      contextoBarrera: 'El dashboard tripartito permite detectar patrones de dumping social a nivel sectorial.',
      pasos: [
        {
          id: 'detectar-dumping',
          selector: '.section-card',
          titulo: 'Identificar Talleres con Dumping Social',
          descripcion: 'El dashboard puede mostrar talleres con señales de dumping: precios anormalmente bajos + baja formalización + denuncias laborales. Esto permite fiscalización DIRIGIDA: ir a inspeccionar exactamente donde hay mayor riesgo de explotación.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    }
  }
};

// ============================================
// TUTORIALES PARA NAVEGACIÓN LIBRE
// (Versiones simplificadas sin contexto de barrera)
// ============================================

const TUTORIALES_GENERICOS = {
  'crear-pedido-v1.3.html': {
    titulo: 'Cómo Crear un Pedido',
    contextoBarrera: 'Aprende a crear un pedido paso a paso.',
    pasos: [
      {
        id: 'info-basica',
        selector: '.col-span-8 .section-card:nth-of-type(1)',
        titulo: 'Información Básica',
        descripcion: 'Definí el tipo de prenda, cantidad y fecha objetivo.',
        posicion: 'bottom',
        destacar: true
      },
      {
        id: 'cadena-produccion',
        selector: '.col-span-8 .section-card:nth-of-type(2)',
        titulo: 'Cadena de Producción',
        descripcion: 'La cadena de producción es editable: podés reordenar, agregar o quitar procesos.',
        posicion: 'bottom',
        destacar: true
      }
    ]
  },

  'dashboard-v1.3.html': {
    titulo: 'Cómo Usar el Dashboard',
    contextoBarrera: 'Tu centro de control para ver pedidos, métricas y actividad.',
    pasos: [
      {
        id: 'kpis',
        selector: '.grid.grid-cols-4',
        titulo: 'KPIs Principales',
        descripcion: 'Estas métricas te dan una vista rápida de tu actividad.',
        posicion: 'bottom',
        destacar: true
      }
    ]
  }

  // ... Agregar más pantallas según necesidad
};
