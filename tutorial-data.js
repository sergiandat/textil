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
          selector: '.form-group',
          titulo: 'Paso 1: Información Básica del Pedido',
          descripcion: 'Define QUÉ vas a producir. Seleccioná el tipo de prenda, variante, cantidad y fecha objetivo. Esta información será la base para que el sistema haga matching con talleres que tengan capacidad y experiencia en ese producto específico.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'paso-2-cadena-produccion',
          selector: '#listaProcesos',
          titulo: 'Paso 2: Cadena de Producción Editable',
          descripcion: 'Aquí ves los procesos sugeridos automáticamente según el tipo de prenda. La GRAN NOVEDAD es que esta cadena es EDITABLE: podés REORDENAR procesos (↑↓), AGREGAR nuevos (+), o QUITAR los que no necesites (×). Esta flexibilidad es clave para adaptarte a diferentes productos y proveedores.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'paso-2-botones-edicion',
          selector: '.proceso-item',
          titulo: 'Controles de Cada Proceso',
          descripcion: 'Cada proceso tiene controles para gestionarlo: botones de ↑↓ para cambiar el orden, × para quitarlo, y ⚙ para expandir su configuración detallada. Probá hacer click en ⚙ Config para ver las opciones avanzadas.',
          posicion: 'right',
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
          id: 'paso-4-sidebar',
          selector: '.badge',
          titulo: 'Sidebar con Estado del Pedido',
          descripcion: 'El sidebar muestra el estado de cada sección: completado (✓ verde), pendiente (0/5 ámbar). Esto te guía sobre qué falta completar antes de crear el pedido.',
          posicion: 'left',
          destacar: true
        },
        {
          id: 'paso-5-resumen',
          selector: '.btn-primary',
          titulo: 'Botón Crear Pedido',
          descripcion: 'Antes de crear el pedido, REVISÁ que toda la información esté completa. Una vez creado, el pedido quedará registrado con trazabilidad completa desde el momento cero.',
          posicion: 'bottom',
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
          selector: '.stat-card',
          titulo: 'KPIs de Tu Actividad',
          descripcion: 'Estas métricas te dan una vista rápida: pedidos activos, completados, monto total transaccionado y tu rating promedio. Toda esta información es trazable y verificable.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'pedidos-en-ejecucion',
          selector: '.section-card',
          titulo: 'Monitoreo en Tiempo Real',
          descripcion: 'Acá ves el progreso detallado de cada pedido activo. El porcentaje global muestra el avance total, y abajo ves el desglose por cada proceso de la cadena. Hacé click en un pedido para ver trazabilidad completa: qué trabajador está en qué tarea ahora mismo.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'badges-verificacion',
          selector: '.badge',
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
          id: 'contexto-proceso',
          selector: '.alert-info',
          titulo: 'Contexto del Proceso',
          descripcion: 'Aquí ves para qué proceso estás seleccionando proveedor: el tipo de prenda, cantidad y plazo. Esta información es clave porque el algoritmo de matching busca talleres que tengan capacidad y especialización en ESTE producto específico.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'tabla-talleres',
          selector: 'table',
          titulo: 'Listado de Talleres con Score de Compatibilidad',
          descripcion: 'El sistema calcula automáticamente qué tan compatible es cada taller con tu pedido. Este score considera: capacidad productiva, especialización en el producto, ubicación, historial de cumplimiento, y nivel de formalización.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'badges-nivel',
          selector: '.badge',
          titulo: 'Nivel de Formalización Visible',
          descripcion: 'Antes de seleccionar, ves el nivel de formalización del taller (ORO, PLATA, BRONCE). Los talleres con mayor nivel tienen prioridad en el matching y pagan menor comisión. Esto genera CONFIANZA basada en datos verificables.',
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
          selector: '.form-group',
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
          selector: '.progress-bar',
          titulo: 'Trazabilidad Proceso a Proceso',
          descripcion: 'Ves el avance de cada proceso de la cadena: % completado, trabajadores asignados, materiales utilizados. Esta granularidad permite detectar problemas temprano.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'trabajadores-asignados',
          selector: '.section-card',
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
          selector: '.section-card',
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
          selector: 'table',
          titulo: 'Factura Digital Verificada',
          descripcion: 'La factura electrónica está verificada por ARCA en tiempo real. Ves el desglose completo: subtotal, IVA, retenciones, comisión de plataforma. Todo documentado y trazable.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'pago-bancarizado',
          selector: '.form-group',
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
      contextoBarrera: 'Las verificaciones en tiempo real de cumplimiento generan confianza entre las partes, reemplazando la "confianza ciega" por datos verificables.',
      pasos: [
        {
          id: 'kpis-confianza',
          selector: '.stat-card',
          titulo: 'KPIs con Fuentes Verificables',
          descripcion: 'Las métricas que ves (pedidos activos, completados, monto, rating) no son auto-reportadas. Provienen de datos registrados en la plataforma y verificados por terceros. Esto genera CONFIANZA: no dependés de que el taller te diga "soy bueno", ves evidencia objetiva de su desempeño.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'badges-verificacion-real',
          selector: '.badge',
          titulo: 'Badges de Verificación en Tiempo Real',
          descripcion: 'Los badges de verificación (✓ ARCA, ✓ STESS, ✓ SOIVA) no son decorativos. Son verificaciones EN TIEMPO REAL de que el proveedor cumple con registros fiscales, laborales y sindicales. Si un taller pierde alguna verificación (ej: vence su registro ARCA), el badge cambia instantáneamente y recibís una alerta.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'pedidos-con-trazabilidad',
          selector: '.section-card',
          titulo: 'Pedidos con Trazabilidad Verificable',
          descripcion: 'El progreso de cada pedido no es estimado por el taller: está basado en registros verificables (piezas completadas, checkpoints QA aprobados). Esta trazabilidad genera confianza porque reduce la incertidumbre: sabés realmente en qué estado está tu pedido.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'historial-cumplimiento',
          selector: '.stat-value',
          titulo: 'Historial de Cumplimiento',
          descripcion: 'El número de pedidos completados (12) y la tasa de cumplimiento de plazos son datos históricos verificables, no promesas a futuro. Podés ver el TRACK RECORD real del taller, no solo lo que dicen que pueden hacer. Esta transparencia genera confianza basada en evidencia.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'alertas-cambios',
          selector: '.alert',
          titulo: 'Alertas de Cambios en Estado del Proveedor',
          descripcion: 'Si un proveedor tiene cambios negativos (pierde verificación, baja rating, recibe denuncias), aparecen alertas automáticas en el dashboard. Esto permite actuar proactivamente ante señales de problemas, generando confianza en el SISTEMA de monitoreo.',
          posicion: 'top',
          destacar: true
        }
      ]
    },

    'seleccionar-proveedor.html': {
      titulo: 'Tutorial: Reputación Verificable y Transparente',
      contextoBarrera: 'La reputación de los talleres se basa en datos verificables, no en promesas ni publicidad.',
      pasos: [
        {
          id: 'filtros-sidebar',
          selector: '.section-card',
          titulo: 'Filtros para Búsqueda Específica',
          descripcion: 'Podés filtrar talleres por nivel de formalización, ubicación, capacidad, y especialización. Esto permite encontrar EXACTAMENTE el tipo de taller que necesitás, no solo "cualquier taller".',
          posicion: 'right',
          destacar: true
        },
        {
          id: 'tabla-talleres',
          selector: 'table',
          titulo: 'Listado con Datos Verificables',
          descripcion: 'Cada taller muestra información verificable: nivel de formalización (ORO/PLATA/BRONCE), ubicación, capacidad, y rating. Esta información NO es auto-reportada, proviene de verificaciones oficiales y desempeño histórico.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'badges-nivel',
          selector: '.badge',
          titulo: 'Nivel de Formalización Verificado',
          descripcion: 'Los badges (ORO, PLATA, BRONCE) no son decorativos. Representan verificaciones REALES con ARCA, STESS y SOIVA. Un taller no puede mentir sobre su nivel: el sistema verifica directamente con las bases de datos oficiales.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'ordenamiento',
          selector: '#ordenSelector',
          titulo: 'Ordenar por Diferentes Criterios',
          descripcion: 'Podés ordenar por: compatibilidad (recomendado por el algoritmo), rating (calidad histórica), precio (más económico), o cercanía (menos costo logístico). Esto te permite priorizar según lo que más te importa.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'acordar.html': {
      titulo: 'Tutorial: Acuerdo Formalizado con Garantías para Ambas Partes',
      contextoBarrera: 'Los acuerdos incluyen mecanismos de garantía que reducen el riesgo para ambas partes, generando confianza mutua.',
      pasos: [
        {
          id: 'formulario-acuerdo',
          selector: '.form-group',
          titulo: 'Términos Explícitos y Registrados',
          descripcion: 'Cada término del acuerdo (especificaciones, plazos, precio, calidad) queda REGISTRADO en la plataforma. No es un "acuerdo de palabra" que cada uno interpreta diferente. Hay una ÚNICA versión verificable de qué se acordó, reduciendo conflictos futuros.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'historial-cambios',
          selector: '.section-card',
          titulo: 'Historial de Negociación Transparente',
          descripcion: 'Todos los cambios en el acuerdo quedan registrados con fecha y hora: quién propuso qué, cuándo se aceptó. Esta trazabilidad evita conflictos sobre "qué se acordó realmente". Ambas partes pueden revisar el historial completo.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'boton-firmar',
          selector: '#btnFirmarContrato',
          titulo: 'Firma Digital del Acuerdo',
          descripcion: 'La firma digital queda registrada con timestamp. Una vez firmado por ambas partes, el acuerdo no puede modificarse unilateralmente. Esto genera seguridad jurídica: lo acordado es vinculante.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'denuncias.html': {
      titulo: 'Tutorial: Sistema de Denuncias Anónimas',
      contextoBarrera: 'El canal de denuncias anónimas genera confianza en el sistema de control, permitiendo detectar irregularidades.',
      pasos: [
        {
          id: 'formulario-anonimo',
          selector: '.form-group',
          titulo: 'Formulario de Denuncia Completamente Anónimo',
          descripcion: 'No se piden datos del denunciante, no hay login requerido, no se guarda IP. El denunciante recibe un código de seguimiento aleatorio para consultar el estado de su denuncia sin revelar identidad. ANONIMATO real, no solo prometido.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'tipos-denuncias',
          selector: '.form-select',
          titulo: 'Tipos de Irregularidades Denunciables',
          descripcion: 'Podés denunciar: trabajo infantil, salarios por debajo del convenio, condiciones inseguras, jornadas excesivas, falta de registración de trabajadores. Esta claridad sobre QUÉ es denunciable genera confianza: sabés que el sistema toma en serio estas cuestiones.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'boton-enviar',
          selector: '.btn-primary',
          titulo: 'Enviar Denuncia de Forma Segura',
          descripcion: 'Al enviar la denuncia, recibís un código de seguimiento. Guardá este código para consultar el estado más adelante sin revelar tu identidad. El sistema protege activamente a quien denuncia.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'auditorias.html': {
      titulo: 'Tutorial: Auditorías Transparentes y Registradas',
      contextoBarrera: 'Las auditorías públicas generan confianza al mostrar que hay control real y seguimiento de cumplimiento.',
      pasos: [
        {
          id: 'listado-auditorias',
          selector: '.section-card',
          titulo: 'Historial Completo de Auditorías',
          descripcion: 'Todas las auditorías (fecha, inspector, hallazgos, acciones correctivas) quedan PÚBLICAMENTE registradas en el perfil del taller. No se pueden "esconder" auditorías negativas. Esta transparencia genera confianza: si un taller no tiene auditorías negativas recientes, es porque realmente cumple.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'badges-origen',
          selector: '.badge',
          titulo: 'Origen y Tipo de Auditoría',
          descripcion: 'Se ve si la auditoría fue: rutinaria (programada), por denuncia (alguien reportó algo), o por alerta del sistema (datos detectaron anomalía). Esta transparencia genera confianza en el PROCESO: no son auditorías arbitrarias.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'tabla-hallazgos',
          selector: 'table',
          titulo: 'Hallazgos Detallados y Clasificados',
          descripcion: 'Los hallazgos se clasifican por severidad: Crítico (trabajo infantil, falta de registración), Moderado (salario levemente bajo), Menor (documentación incompleta). Esta granularidad permite entender el NIVEL real de los problemas.',
          posicion: 'top',
          destacar: true
        }
      ]
    },

    'pago.html': {
      titulo: 'Tutorial: Pago Garantizado y Automatizado',
      contextoBarrera: 'El mecanismo de pago contra entrega conforme protege a ambas partes y genera confianza mutua.',
      pasos: [
        {
          id: 'tabla-factura',
          selector: 'table',
          titulo: 'Factura Digital Verificada por ARCA',
          descripcion: 'La factura electrónica NO es un PDF que el taller te manda. La plataforma consulta ARCA en tiempo real y obtiene la factura directamente desde allí. Imposible de falsificar. Ves cada línea: subtotal, comisión, IVA, retenciones.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'metodos-pago',
          selector: '.form-group',
          titulo: 'Métodos de Pago Bancarizados',
          descripcion: 'El pago DEBE ser por transferencia bancaria (no efectivo). Esto deja registro del flujo financiero completo. El CBU del taller está verificado: coincide con su CUIT registrado en ARCA.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'boton-pagar',
          selector: '.btn-primary',
          titulo: 'Confirmar Pago Seguro',
          descripcion: 'Cuando confirmás el pago, se DISPARA AUTOMÁTICAMENTE la transferencia. No depende de que "te acuerdes" o "tengas ganas". Esto genera CONFIANZA del taller: si cumple, cobra SÍ O SÍ.',
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
    'dashboard-v1.3.html': {
      titulo: 'Tutorial: Dashboard del Taller con Indicadores de Formalización',
      contextoBarrera: 'El dashboard muestra claramente el estado de formalización y cómo mejorarlo.',
      pasos: [
        {
          id: 'indicador-formalizacion-dashboard',
          selector: '.section-card',
          titulo: 'Indicador de Formalización Siempre Visible',
          descripcion: 'El nivel de formalización (95%) está siempre visible en el dashboard. No es algo que "tenés que ir a buscar", está en tu cara todos los días. Esta visibilidad constante te RECUERDA que falta un pequeño paso para llegar al 100%.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'comision-actual',
          selector: '.stat-card',
          titulo: 'Comisión Actual vs Potencial',
          descripcion: 'Ves tu comisión ACTUAL (ej: 3.5%) y la potencial si completás formalización (3%). Esto traduce la formalización a DINERO concreto: cada punto de formalización que subís, bajás la comisión. Incentivo tangible.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'acceso-link-formalizacion',
          selector: '.btn-primary',
          titulo: 'Link Directo a Completar Formalización',
          descripcion: 'Desde el dashboard hay un botón "Completar Formalización" que te lleva directo al checklist. No tenés que buscar "dónde se hace esto". Reducir fricción: hacer FÁCIL el camino hacia formalizar.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'validaciones.html': {
      titulo: 'Tutorial: Checklist de Formalización Paso a Paso',
      contextoBarrera: 'La formalización dividida en pasos pequeños y con asistencia la hace alcanzable y no abrumadora.',
      pasos: [
        {
          id: 'checklist-visual',
          selector: '.section-card',
          titulo: 'Checklist Visual con Estados Claros',
          descripcion: 'En lugar de abrumarte con "tenés que estar 100% formal", este checklist muestra: qué YA cumplís (✓ en verde), qué te FALTA (× en rojo), y qué está EN PROCESO (⏳ en amarillo). Ver el progreso motiva a completar lo faltante: "ya hice 7 de 10, solo faltan 3".',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'prioridad-items',
          selector: '.badge',
          titulo: 'Priorización de Requisitos',
          descripcion: 'Los requisitos están priorizados: CRÍTICO (sin esto no podés operar: registro ARCA), IMPORTANTE (reduce mucho tu comisión: STESS), RECOMENDADO (mejora reputación: certificaciones). Esto te ayuda a decidir QUÉ hacer primero si no podés hacerlo todo a la vez.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'links-tramites',
          selector: '.btn',
          titulo: 'Links Directos a Trámites',
          descripcion: 'Cada requisito tiene botón "Iniciar trámite" que te lleva DIRECTAMENTE al sitio oficial (ARCA, STESS, etc.). No tenés que googlear "dónde se hace esto". Reducir complejidad: darte el camino directo.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'progreso-formalizacion.html': {
      titulo: 'Tutorial: Progreso con Beneficios Claros',
      contextoBarrera: 'Mostrar el progreso (95%) y los beneficios concretos (menor comisión, mejores pedidos) incentiva completar la formalización.',
      pasos: [
        {
          id: 'indicador-circular',
          selector: '.section-card',
          titulo: 'Indicador Circular de Progreso',
          descripcion: 'El indicador circular (95%) gamifica la formalización: ves qué tan cerca estás del 100%. Esta visualización genera motivación ("casi llego, solo 5% más") en lugar de frustración ("falta mucho"). El diseño importa: hacer VISIBLE el progreso.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'beneficios-economicos',
          selector: '.section-card',
          titulo: 'Beneficios Económicos Concretos',
          descripcion: 'Formalizarse NO es solo "cumplir con la ley" ni "hacer lo correcto". Tiene beneficios ECONÓMICOS tangibles: comisión baja de 8% (informal) a 3% (formal). Si facturás $100.000/mes, son $5.000 de ahorro mensual ($60.000/año). ROI claro.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'beneficios-reputacion',
          selector: '.badge',
          titulo: 'Acceso a Mejores Pedidos',
          descripcion: 'Los talleres formales tienen PRIORIDAD en el matching. Dos talleres con misma capacidad: el formal aparece primero. Esto significa acceso a MEJORES pedidos (marcas grandes que exigen formalización, pedidos más grandes, precios mejores). Beneficio competitivo.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'capacitaciones.html': {
      titulo: 'Tutorial: Capacitación sobre Formalización',
      contextoBarrera: 'Capacitaciones sobre cómo formalizarse reducen la complejidad percibida del proceso.',
      pasos: [
        {
          id: 'cursos-formalizacion-especificos',
          selector: '.section-card',
          titulo: 'Cursos Específicos sobre Trámites',
          descripcion: 'Hay cursos específicos sobre: "Cómo inscribirte en ARCA paso a paso", "Qué es el registro STESS y cómo hacerlo", "Cómo hacer facturas electrónicas", "Cómo abrir cuenta bancaria para tu taller". Esta capacitación reduce la COMPLEJIDAD PERCIBIDA: cuando alguien te explica paso a paso, ves que no es tan difícil como parecía.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'videos-tutoriales',
          selector: '.badge',
          titulo: 'Tutoriales en Video Paso a Paso',
          descripcion: 'Los cursos incluyen videos donde ves EXACTAMENTE cómo hacer cada trámite: dónde hacer click, qué datos poner, qué documentos subir. Esto elimina la incertidumbre: no tenés que "adivinar" cómo se hace, lo ves en acción.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'acceso-gratuito',
          selector: '.badge',
          titulo: 'Capacitación Gratuita',
          descripcion: 'Todos los cursos sobre formalización son GRATUITOS. No hay excusa de "no tengo plata para capacitarme". Reducir barreras económicas: acceso universal al conocimiento necesario para formalizarse.',
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
          selector: '.badge',
          titulo: 'La Formalización Te Da Ventaja Competitiva',
          descripcion: 'El algoritmo de matching PRIORIZA talleres con mayor nivel de formalización (95% aparece antes que 60%). Dos talleres con misma capacidad técnica: el que está más formalizado aparece primero. Esto traduce formalización en OPORTUNIDADES concretas: más pedidos, mejores clientes.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'marcas-exigen-formalizacion',
          selector: '.badge',
          titulo: 'Marcas Grandes Exigen Formalización',
          descripcion: 'Las marcas grandes (Nike, Adidas, Zara, etc.) tienen políticas de compliance que exigen trabajar SOLO con talleres formalizados. Si no estás formalizado, automáticamente quedás EXCLUIDO de esos pedidos (que suelen ser más grandes y mejor pagos). Formalización = acceso a mejores clientes.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'filtro-formalizacion',
          selector: '.form-group',
          titulo: 'Las Marcas Pueden Filtrar por Formalización',
          descripcion: 'Cuando una marca busca talleres, puede poner filtro: "Mostrarme solo talleres con 90%+ de formalización". Si no cumplís ese umbral, ni siquiera aparecés en su búsqueda. Esto hace que la informalidad te EXCLUYA de oportunidades.',
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
          id: 'datos-agregados-sector',
          selector: '.stat-card',
          titulo: 'Datos del Sector en Tiempo Real',
          descripcion: 'La mesa tripartita ve métricas agregadas del sector: cantidad de talleres activos (1.247), trabajadores registrados (8.932), transacciones totales ($47M), nivel de formalización promedio (78%). Esta información COMPARTIDA permite que los 3 actores (Estado, sindicatos, cámaras) diseñen políticas basadas en DATOS REALES, no en estimaciones o en la perspectiva aislada de cada uno.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'vista-unica-compartida',
          selector: '.section-card',
          titulo: 'Una Única Vista Compartida',
          descripcion: 'Antes: Estado tenía SUS datos, sindicato tenía LOS SUYOS, cámaras tenían OTROS. Nunca coincidían. Ahora: los 3 miran LA MISMA pantalla con LOS MISMOS datos. Esto evita discusiones sobre "cuál número es el correcto" y permite enfocarse en QUÉ HACER con esos datos.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'tendencias-temporales',
          selector: '.section-card',
          titulo: 'Tendencias y Evolución Temporal',
          descripcion: 'Los gráficos muestran evolución en el tiempo: ¿la formalización está subiendo o bajando? ¿Hay más o menos denuncias que el mes pasado? Esta información temporal permite evaluar IMPACTO de políticas: "después de cambiar X parámetro, ¿mejoró Y indicador?".',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'alertas-sectoriales',
          selector: '.alert',
          titulo: 'Alertas de Problemas Sectoriales',
          descripcion: 'El sistema detecta patrones problemáticos a nivel sectorial: "aumento 30% denuncias laborales en zona X", "baja 15% formalización en rubro Y". Estas alertas permiten ARTICULAR respuestas conjuntas: el Estado inspecciona, el sindicato asiste trabajadores, las cámaras capacitan talleres.',
          posicion: 'top',
          destacar: true
        }
      ]
    },

    'parametrizacion-algoritmo.html': {
      titulo: 'Tutorial: Gobernanza del Algoritmo de Matching',
      contextoBarrera: 'La mesa tripartita puede ajustar parámetros del matching para alinear con políticas sectoriales.',
      pasos: [
        {
          id: 'parametros-editables-conjuntos',
          selector: '.section-card',
          titulo: 'Ajustar Prioridades del Sistema Conjuntamente',
          descripcion: 'La mesa tripartita puede modificar pesos del algoritmo de matching. Por ejemplo: aumentar peso de "formalización" de 20% a 30% para incentivar cumplimiento, o priorizar "cercanía geográfica" al 25% para promover economía regional. Esto es ARTICULACIÓN real: los 3 actores (Estado, sindicatos, cámaras) gestionan JUNTOS las reglas del mercado.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'politicas-reflejadas-algoritmo',
          selector: '.form-group',
          titulo: 'Traducir Políticas a Parámetros',
          descripcion: 'Supongamos que en reunión tripartita acuerdan: "hay que promover trabajo local". Eso se traduce en: aumentar peso de "ubicación" en matching. Las decisiones políticas NO quedan en "declaraciones", se implementan técnicamente en el algoritmo. Articulación = alineación entre política y tecnología.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'simulacion-cambios',
          selector: '.btn',
          titulo: 'Simular Impacto Antes de Aplicar',
          descripcion: 'Antes de cambiar parámetros en producción, podés simular: "si bajo comisión de formales a 2%, ¿cuántos talleres se formalizarían?". Esto permite diseño de políticas BASADO EN EVIDENCIA: no es intuición, es proyección con datos reales.',
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
          id: 'calendario-inspecciones-compartido',
          selector: '.section-card',
          titulo: 'Calendario Compartido de Inspecciones',
          descripcion: 'Antes: Estado inspeccionaba un taller el lunes, sindicato el miércoles, cámara el viernes. Tres visitas al mismo taller. Ahora: calendario compartido permite COORDINAR: "vamos los 3 juntos el lunes". Esto reduce molestia al taller y permite visión integral del cumplimiento.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'inspecciones-conjuntas',
          selector: '.badge',
          titulo: 'Inspecciones Tripartitas Conjuntas',
          descripcion: 'Una inspección conjunta: inspector estatal verifica registros legales, delegado sindical habla con trabajadores, representante de cámara evalúa condiciones productivas. En UNA visita se obtiene información fiscal, laboral Y técnica. Eficiencia por articulación.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'compartir-hallazgos',
          selector: '.section-card',
          titulo: 'Compartir Hallazgos Entre Actores',
          descripcion: 'Si el sindicato inspecciona un taller y encuentra problemas, esos hallazgos son VISIBLES para Estado y cámaras. No hay "información privada" que cada uno guarda. Transparencia interna genera ARTICULACIÓN: todos saben qué encontró cada uno.',
          posicion: 'top',
          destacar: true
        }
      ]
    },

    'capacitaciones.html': {
      titulo: 'Tutorial: Capacitación Coordinada',
      contextoBarrera: 'Diferentes actores ofrecen capacitaciones en una misma plataforma, evitando fragmentación.',
      pasos: [
        {
          id: 'catalogo-unificado',
          selector: '.section-card',
          titulo: 'Catálogo Unificado de Capacitaciones',
          descripcion: 'El sindicato ofrece cursos técnicos (costura, patronaje), el Estado ofrece sobre formalización (ARCA, STESS), las cámaras sobre gestión (costeo, planificación). Todo en UNA plataforma. Esto es ARTICULACIÓN: en lugar de que cada actor tenga su propio sistema aislado (con diferentes logins, diferentes formatos), comparten infraestructura.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'trayectorias-formativas',
          selector: '.badge',
          titulo: 'Trayectorias Formativas Integradas',
          descripcion: 'Podés armar trayectorias que combinan cursos de diferentes actores: "Trayectoria Taller Formal" = Curso técnico (sindicato) + Formalización fiscal (Estado) + Gestión de costos (cámara). Articulación = integración de saberes complementarios.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'certificaciones-reconocidas',
          selector: '.badge',
          titulo: 'Certificaciones Reconocidas por Todos',
          descripcion: 'Un certificado emitido por el sindicato es RECONOCIDO por Estado y cámaras (y viceversa). No hay "certificados de primera y de segunda". Esta equivalencia genera ARTICULACIÓN: cada actor respeta el trabajo formativo de los otros.',
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
          id: 'fiscalizacion-dirigida-datos',
          selector: '.section-card',
          titulo: 'Inspecciones Dirigidas por Datos',
          descripcion: 'Antes: el Estado inspeccionaba al azar (baja efectividad) o solo por denuncia (reactivo). Ahora: la plataforma genera ALERTAS basadas en datos: taller con muchos trabajadores pero baja formalización, denuncias anónimas recurrentes, caída repentina de rating, precios anormalmente bajos. Esto permite fiscalización INTELIGENTE: ir donde realmente hay alta probabilidad de problemas.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'priorizacion-inspecciones',
          selector: '.badge',
          titulo: 'Priorización Automática por Riesgo',
          descripcion: 'El sistema calcula un "score de riesgo" para cada taller basado en múltiples variables: denuncias, caída de formalización, inconsistencias en datos. Los talleres se ordenan por riesgo: alta prioridad, media, baja. Esto permite asignar recursos limitados (inspectores) a donde más se necesitan.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'ampliacion-cobertura',
          selector: '.stat-card',
          titulo: 'Ampliar Cobertura Sin Más Inspectores',
          descripcion: 'Supongamos que hay 10 inspectores para 1.000 talleres. Sin inteligencia de datos: inspeccionan 10 random, 99% del sector sin fiscalizar. Con inteligencia: inspeccionan los 10 con mayor riesgo, desincentivando incumplimiento en TODOS (porque saben que SI incumplen, tienen alta probabilidad de inspección). Presencia efectiva sin más recursos.',
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
          id: 'presencia-distribuida',
          selector: '.section-card',
          titulo: 'Presencia Digital 24/7 en Todos los Talleres',
          descripcion: 'El Estado físicamente no puede estar en todos los talleres todo el tiempo (hay miles de talleres, pocos inspectores). Pero el sistema de denuncias anónimas funciona como presencia digital 24/7: trabajadores, clientes, vecinos pueden alertar problemas EN EL MOMENTO. Esto AMPLIFICA la capacidad estatal: en lugar de 100 inspectores, hay potencialmente 10.000 "sensores" distribuidos.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'empoderamiento-trabajadores',
          selector: '.badge',
          titulo: 'Empoderamiento de Trabajadores como Fiscalizadores',
          descripcion: 'Tradicionalmente, trabajadores no denuncian por miedo a represalias. El anonimato REAL del sistema los convierte en fiscalizadores efectivos: ellos saben mejor que nadie si hay irregularidades (están ahí 8hs/día). Al darles voz sin riesgo, el Estado gana información de primera mano, inaccesible por otros medios.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'triaje-automatico',
          selector: '.alert',
          titulo: 'Triaje Automático de Denuncias',
          descripcion: 'No todas las denuncias son igual de urgentes. El sistema hace triaje automático: denuncia de trabajo infantil = inspección INMEDIATA (en 48hs), denuncia de salario levemente bajo = auditoría programada (en 30 días). Esto permite gestionar volumen alto de denuncias con recursos limitados.',
          posicion: 'top',
          destacar: true
        }
      ]
    },

    'dashboard-tripartito.html': {
      titulo: 'Tutorial: Dashboard Estatal con Inteligencia de Datos',
      contextoBarrera: 'El Estado tiene visibilidad en tiempo real del sector, permitiendo decisiones basadas en evidencia.',
      pasos: [
        {
          id: 'vision-integral-sector',
          selector: '.stat-card',
          titulo: 'Ver Todo el Sector en Tiempo Real',
          descripcion: 'El Estado ve métricas actualizadas del sector: cuántos talleres operan (1.247), cuántos trabajadores registrados (8.932), tendencias de formalización (78% promedio), zonas con más problemas. Esta VISIBILIDAD en tiempo real permite actuar PROACTIVAMENTE: ver problemas emergentes antes de que escalen, no reaccionar cuando ya explotaron.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'antes-estado-ciego',
          selector: '.section-card',
          titulo: 'De "Estado Ciego" a "Estado con Visibilidad"',
          descripcion: 'Antes: el Estado tenía datos fragmentados (ARCA con su base, STESS con otra, sindicatos con otra), actualizados con meses de retraso. Era como manejar mirando el espejo retrovisor. Ahora: datos integrados en tiempo real. De "no sabemos qué pasa" a "sabemos exactamente qué pasa, cuándo y dónde".',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'mapas-calor',
          selector: '.section-card',
          titulo: 'Mapas de Calor de Problemas',
          descripcion: 'Los gráficos y mapas muestran concentración geográfica de problemas: "en zona X hay 40% de talleres con denuncias, en zona Y solo 5%". Esto permite FOCALIZACIÓN de recursos: enviar más inspectores donde hay más problemas, campañas de formalización donde más se necesitan.',
          posicion: 'top',
          destacar: true
        }
      ]
    },

    'validaciones.html': {
      titulo: 'Tutorial: Prevención vs Sanción',
      contextoBarrera: 'El sistema permite al Estado trabajar en prevención, no solo sancionar irregularidades después.',
      pasos: [
        {
          id: 'enfoque-preventivo',
          selector: '.section-card',
          titulo: 'Ayudar a Cumplir, No Solo Sancionar',
          descripcion: 'El checklist de formalización permite al Estado trabajar en PREVENCIÓN: alertar al taller "te falta esto para cumplir" ANTES de sancionar. Esto es más eficaz que fiscalización puramente punitiva: se logra más cumplimiento con menos conflicto. El Estado como facilitador, no solo como sancionador.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'asistencia-tecnica',
          selector: '.btn',
          titulo: 'Asistencia Técnica para Formalización',
          descripcion: 'Los links directos a trámites (ARCA, STESS) son asistencia técnica: el Estado no solo dice "tenés que formalizarte", sino que te AYUDA a hacerlo. Esto reduce la carga administrativa percibida: "no sé cómo hacer el trámite" deja de ser excusa.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'plazos-gracia',
          selector: '.alert',
          titulo: 'Plazos de Gracia para Regularización',
          descripcion: 'Si un taller está irregular, el sistema le da un PLAZO para regularizarse (ej: 60 días para sacar registro faltante) antes de sancionar. Esta "segunda chance" incentiva formalización voluntaria: es más barato regularizarse que pagar multas.',
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
          id: 'catalogo-dual-tecnico-gerencial',
          selector: '.section-card',
          titulo: 'Capacitación Técnica Y Gerencial',
          descripcion: 'Hay cursos de TÉCNICAS (costura de punto, patronaje industrial, control de calidad, operación de maquinaria) y GERENCIALES (costeo y fijación de precios, gestión de equipos, planificación de producción, administración de taller). Esta combinación dual eleva capacidades de forma INTEGRAL: no solo saber HACER bien, sino también saber GESTIONAR eficientemente.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'niveles-progresivos',
          selector: '.badge',
          titulo: 'Niveles Progresivos de Aprendizaje',
          descripcion: 'Los cursos están organizados por niveles: Básico, Intermedio, Avanzado. No es "todo o nada": podés empezar desde tu nivel actual y progresar. Por ejemplo: "Costura Básica" → "Costura de Prendas Complejas" → "Supervisión de Equipo de Costura". Trayectoria clara de desarrollo profesional.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'certificaciones-verificables',
          selector: '.badge',
          titulo: 'Certificaciones Verificables en tu Perfil',
          descripcion: 'Al completar una capacitación, recibís un certificado digital verificable que aparece en tu perfil público. Las marcas pueden ver qué certificaciones tenés, lo cual mejora tu matching (certificados = competencias demostrables). Esto incentiva la capacitación continua: no solo aprendés, sino que podés DEMOSTRAR que aprendiste.',
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
          id: 'seccion-certificaciones',
          selector: '.section-card',
          titulo: 'Tus Certificaciones Son Visibles para Clientes',
          descripcion: 'Las certificaciones que obtenés en capacitaciones aparecen en una sección destacada de tu dashboard y perfil público. Las marcas las ven al evaluar talleres para un pedido. Por ejemplo: "Certificado en Patronaje Industrial" mejora tu matching para pedidos de ropa con cortes complejos. Esto crea un INCENTIVO tangible: capacitarte mejora tus chances de conseguir mejores pedidos.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'badges-especializacion',
          selector: '.badge',
          titulo: 'Badges de Especialización',
          descripcion: 'Algunas combinaciones de certificados generan "badges de especialización": ej: si tenés certificados en "Costura de Punto", "Control de Calidad Textil" y "Gestión de Equipos", obtenés badge "Taller Especializado en Tejido de Punto". Estos badges son shortcuts para que marcas te encuentren fácilmente.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'progreso-capacitacion',
          selector: '.stat-card',
          titulo: 'Tracking de Tu Desarrollo Profesional',
          descripcion: 'El dashboard muestra: cursos completados (12), en progreso (2), horas totales de capacitación (87hs). Esta gamificación motiva continuar: "ya hice 12, voy por más". Ver tu propio progreso genera motivación intrínseca para seguir capacitándote.',
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
          id: 'links-contextuales-cursos',
          selector: '.section-card',
          titulo: 'Capacitación en el Momento que la Necesitás',
          descripcion: 'Si el checklist muestra que te falta "Facturación Electrónica" para completar formalización, hay un link directo al curso sobre ese tema. Esto es aprendizaje CONTEXTUAL o "just-in-time": aprendés justo cuando necesitás aplicarlo, no en abstracto ("algún día me va a servir"). Aumenta retención y aplicación práctica.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'microlearning',
          selector: '.badge',
          titulo: 'Micro-Módulos de Aprendizaje Rápido',
          descripcion: 'Algunos contenidos están en formato micro (15 min): "Cómo sacar CUIT en 5 pasos", "Cómo calcular precio de una prenda". No tenés que hacer un curso de 10hs cuando solo necesitás aprender UNA cosa específica. Reducir fricción: aprendizaje en dosis pequeñas.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'aplicacion-inmediata',
          selector: '.btn',
          titulo: 'Botón "Aplicar lo Aprendido"',
          descripcion: 'Después de ver un micro-módulo (ej: "Cómo hacer factura electrónica"), hay botón "Aplicar ahora" que te lleva directamente a hacerlo en la plataforma. De aprender a HACER en segundos. Esto cierra el loop de aprendizaje: conocimiento → acción → resultado.',
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
    'dashboard-v1.3.html': {
      titulo: 'Tutorial: Transparencia que Nivela la Cancha',
      contextoBarrera: 'El dashboard hace visible el cumplimiento laboral, evitando que talleres compitan bajando costos mediante explotación.',
      pasos: [
        {
          id: 'nivel-formalizacion-visible',
          selector: '.section-card',
          titulo: 'Tu Nivel de Formalización es Público',
          descripcion: 'El nivel de formalización (95%) aparece VISIBLEMENTE en tu perfil. No podés ocultarlo. Esto nivela la cancha: los talleres formales no compiten "en desventaja" contra informales que ocultan su situación. Las marcas VEN claramente quién cumple y quién no, y deciden conscientemente con quién trabajar.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'badges-cumplimiento-laboral',
          selector: '.badge',
          titulo: 'Badges de Cumplimiento Laboral',
          descripcion: 'Los badges (✓ ARCA, ✓ STESS, ✓ SOIVA) son verificaciones de cumplimiento en tiempo real. Si un taller NO tiene estos badges, las marcas saben que hay riesgo. Esto protege a talleres formales: su esfuerzo por cumplir se hace VISIBLE y VALORADO.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'costo-real-transparente',
          selector: '.stat-card',
          titulo: 'Comisión Diferenciada Hace Visible el Costo Real',
          descripcion: 'Los talleres formales pagan 3% comisión, los informales 8%. Esto COMPENSA la "ventaja" de no pagar impuestos/registros: el taller informal no puede ofrecer precio mucho más bajo porque la comisión se lleva ese ahorro. Nivelación económica: formalización no te deja en desventaja competitiva.',
          posicion: 'bottom',
          destacar: true
        }
      ]
    },

    'seleccionar-proveedor.html': {
      titulo: 'Tutorial: Visibilidad del Nivel de Formalización',
      contextoBarrera: 'Hacer visible el nivel de formalización nivela la cancha entre talleres formales e informales.',
      pasos: [
        {
          id: 'formalizacion-criterio-matching',
          selector: '.badge',
          titulo: 'Formalización como Criterio de Matching',
          descripcion: 'El nivel de formalización (95%, 60%, etc.) es VISIBLE para todas las marcas y afecta el matching. Un taller informal no puede "hacerse pasar" por formal ni competir ocultando su situación. El algoritmo PRIORIZA talleres formales: si dos tienen misma capacidad, el formal aparece primero. Competencia basada en CUMPLIMIENTO, no en evasión.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'desglose-formalizacion',
          selector: '.badge',
          titulo: 'Desglose Detallado de Cumplimiento',
          descripcion: 'No es solo un "95% formal". Ves el DESGLOSE: ✓ Registro ARCA, ✓ Trabajadores en STESS, ✓ Convenio SOIVA, × Certificación de seguridad (falta). Las marcas pueden evaluar QUÉ aspectos cumplen y cuáles no. Transparencia granular = decisión informada.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'precio-vs-riesgo',
          selector: 'table',
          titulo: 'Las Marcas Ven Precio Y Riesgo',
          descripcion: 'Las marcas ven el precio del taller JUNTO con su nivel de formalización. Pueden decidir: "acepto pagar 10% más por un taller 100% formal" o "el ahorro de 10% no justifica el riesgo legal de trabajar con 60% informal". Competencia NO es solo precio, es precio + riesgo + cumplimiento.',
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
          id: 'clausulas-laborales-automaticas',
          selector: '.section-card',
          titulo: 'Cláusulas Laborales Mínimas Automáticas',
          descripcion: 'TODOS los acuerdos incluyen automáticamente condiciones laborales mínimas: salario no menor a $X/hora (convenio colectivo), registración de trabajadores en STESS, jornada máxima 48hs/semana, condiciones de seguridad. NO son opcionales ni negociables. Esto evita que talleres hagan dumping social (bajar precios explotando trabajadores) para ganar pedidos.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'salario-minimo-convenio',
          selector: '.section-card',
          titulo: 'Salario Mínimo del Convenio Colectivo',
          descripcion: 'El sistema CALCULA automáticamente el salario mínimo según convenio colectivo vigente para el tipo de tarea. No es "lo que el taller quiera pagar", es el MÍNIMO LEGAL actualizado. Si un taller ofrece menos, el sistema ALERTA a la marca: "este precio no cubre salarios mínimos".',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'registracion-obligatoria',
          selector: '.badge',
          titulo: 'Registración en STESS Obligatoria',
          descripcion: 'El acuerdo exige que los trabajadores asignados al pedido estén registrados en STESS. Durante la ejecución, el sistema VERIFICA esto en tiempo real. Si detecta trabajadores no registrados, SUSPENDE el pedido y alerta. No hay forma de "hacer trampa": el cumplimiento se monitorea activamente.',
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
          id: 'comision-diferenciada-formalizacion',
          selector: '.section-card',
          titulo: 'Comisión Diferenciada Según Formalización',
          descripcion: 'La mesa tripartita puede ajustar la comisión de plataforma según nivel de formalización: 3% para talleres 100% formales, 4% para 80-99%, 6% para 60-79%, 8% para <60%. Esto hace que la informalidad sea ECONÓMICAMENTE INVIABLE: el "ahorro" que obtienen no pagando impuestos/registros se lo lleva la comisión de plataforma. Incentivo poderoso para formalizarse.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'peso-formalizacion-matching',
          selector: '.form-group',
          titulo: 'Aumentar Peso de Formalización en Matching',
          descripcion: 'El parámetro "Peso de Formalización" controla cuánto afecta el cumplimiento al matching. Si la mesa tripartita aumenta este peso de 20% a 40%, un taller 100% formal tendrá MUY ALTA prioridad sobre uno 60% informal (aunque el informal sea más barato). Política sectorial = reglas del algoritmo.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'precio-minimo-seguridad',
          selector: '.section-card',
          titulo: 'Precio Mínimo de Seguridad',
          descripcion: 'El sistema puede establecer un "precio mínimo" por tipo de prenda basado en costos laborales del convenio. Si un taller ofrece muy por debajo (señal de dumping social), aparece alerta: "Este precio es sospechosamente bajo, puede indicar explotación". Las marcas son ADVERTIDAS antes de contratar.',
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
          id: 'deteccion-dumping-social',
          selector: '.section-card',
          titulo: 'Detectar Talleres con Dumping Social',
          descripcion: 'El dashboard puede mostrar talleres con SEÑALES DE DUMPING: precios anormalmente bajos (30% por debajo del promedio) + baja formalización (<60%) + denuncias laborales recientes. Esta combinación indica alta probabilidad de explotación laboral para competir con precios bajos. Permite fiscalización DIRIGIDA: ir a inspeccionar exactamente donde hay mayor riesgo.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'mapa-calor-precios',
          selector: '.section-card',
          titulo: 'Mapa de Calor de Precios vs Formalización',
          descripcion: 'Un gráfico muestra precios vs formalización: ves clusters de "precios bajos + formalización baja" (dumping) vs "precios justos + formalización alta" (competencia leal). Esto hace VISIBLE el problema a nivel sectorial: cuántos talleres están haciendo dumping, dónde están, cuánto del mercado capturan.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'impacto-dumping-sector',
          selector: '.stat-card',
          titulo: 'Cuantificar Impacto del Dumping en el Sector',
          descripcion: 'El dashboard calcula: "X% de pedidos van a talleres con señales de dumping", "trabajadores en talleres con dumping ganan Y% menos que el promedio". Esta cuantificación del IMPACTO genera sentido de urgencia para actuar: no es un problema teórico, es X% del sector compitiendo deslealmente.',
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
