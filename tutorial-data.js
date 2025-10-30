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
          id: 'score-matching',
          selector: '.text-emerald-600:contains("%")',
          titulo: 'Score de Compatibilidad Explicable',
          descripcion: 'El score de matching (92%) no es una "caja negra". Te muestra EXACTAMENTE por qué este taller matchea con tu pedido: capacidad (90%), especialización en el producto (95%), ubicación (80%), historial (95%). Esta transparencia genera confianza en el algoritmo.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'rating-desglosado',
          selector: '.text-2xl.font-bold:contains("/")',
          titulo: 'Rating Basado en Cumplimiento Real',
          descripcion: 'El rating (8.9/10) no es arbitrario ni auto-reportado. Se calcula basándose en: cumplimiento de plazos (9/10), calidad verificada en checkpoints (8.5/10), ausencia de denuncias laborales (10/10), y feedback de otros clientes (8.5/10). Es VERIFICABLE porque está respaldado por datos registrados.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'verificaciones-detalladas',
          selector: '.grid:has(.bg-emerald-50)',
          titulo: 'Verificaciones Gubernamentales en Tiempo Real',
          descripcion: 'Las verificaciones (ARCA, STESS, SOIVA) no son "papeles que el taller muestra". La plataforma consulta DIRECTAMENTE las bases de datos oficiales en tiempo real. Si un registro venció ayer, lo ves AHORA. No hay forma de "trucar" el sistema mostrando documentos viejos.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'historial-trabajos',
          selector: '.section-card:has(h4:contains("Trabajos"))',
          titulo: 'Historial de Trabajos Anteriores',
          descripcion: 'Ves los trabajos anteriores del taller con marcas reales que usaron la plataforma. No son referencias "arregladas", son datos de pedidos realmente ejecutados. Podés ver: productos similares hechos, plazos cumplidos, calificaciones recibidas. Esto es reputación TRANSPARENTE.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'señales-alerta',
          selector: '.text-amber-600',
          titulo: 'Señales de Alerta Visibles',
          descripcion: 'Si un taller tiene señales de riesgo (denuncias recientes, caída de rating, pérdida de verificaciones), aparecen claramente marcadas. La plataforma NO oculta información negativa. Esta honestidad genera confianza: sabés que si ves todo "verde", es porque realmente está bien.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'capacidad-real',
          selector: '.text-sm:contains("Capacidad")',
          titulo: 'Capacidad Productiva Verificada',
          descripcion: 'La capacidad productiva (900 uds/mes) no es lo que el taller "dice que puede hacer". Se calcula basándose en: trabajadores registrados en STESS, maquinaria declarada, y VELOCIDAD REAL observada en pedidos anteriores. Datos, no promesas.',
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
          id: 'terminos-explicitos',
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Términos Explícitos y Registrados',
          descripcion: 'Cada término del acuerdo (especificaciones, plazos, precio, calidad) queda REGISTRADO en la plataforma. No es un "acuerdo de palabra" que cada uno interpreta diferente. Hay una ÚNICA versión verificable de qué se acordó, reduciendo conflictos futuros.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'checkpoints-qa',
          selector: '.text-sm:contains("checkpoints")',
          titulo: 'Checkpoints de QA Acordados',
          descripcion: 'Los checkpoints de calidad (30%, 70%, 100%) están ACORDADOS por ambas partes desde el inicio. El taller sabe en qué puntos será evaluado, y la marca sabe cuándo podrá verificar. Expectativas claras = menos conflictos.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'condiciones-laborales',
          selector: '.section-card:has(.text-emerald-600)',
          titulo: 'Condiciones Laborales Mínimas',
          descripcion: 'El acuerdo incluye condiciones laborales que el taller DEBE cumplir: salario mínimo convenio, trabajadores registrados, jornada máxima. Esto protege a la marca de riesgos legales y al trabajador de explotación. Genera confianza en toda la cadena.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'plazos-pago',
          selector: '.text-sm:contains("pago")',
          titulo: 'Plazos de Pago Claros',
          descripcion: 'El taller sabe EXACTAMENTE cuándo cobrará: "pago a X días de entrega conforme". No queda a criterio de la marca decidir "cuándo le conviene pagar". Esta previsibilidad genera confianza del taller hacia la plataforma.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'resolucion-disputas',
          selector: '.section-card:has(.text-amber-600)',
          titulo: 'Mecanismo de Resolución de Disputas',
          descripcion: 'Si hay conflictos (ej: la marca dice que la calidad es mala, el taller dice que está bien), hay un PROCESO definido de resolución: revisión de checkpoints previos, auditoría independiente, arbitraje. No queda librado al "poder de negociación" de cada uno.',
          posicion: 'top',
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
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Formulario de Denuncia Completamente Anónimo',
          descripcion: 'No se piden datos del denunciante, no hay login requerido, no se guarda IP. El denunciante recibe un código de seguimiento aleatorio para consultar el estado de su denuncia sin revelar identidad. ANONIMATO real, no solo prometido.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'tipos-denuncias',
          selector: '.grid:has(label:contains("Tipo"))',
          titulo: 'Tipos de Irregularidades Denunciables',
          descripcion: 'Podés denunciar: trabajo infantil, salarios por debajo del convenio, condiciones inseguras, jornadas excesivas, falta de registración de trabajadores. Esta claridad sobre QUÉ es denunciable genera confianza: sabés que el sistema toma en serio estas cuestiones.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'evidencia-opcional',
          selector: '.form-group:has(input[type="file"])',
          titulo: 'Evidencia Opcional pero Útil',
          descripcion: 'Podés adjuntar fotos, recibos de pago, registros, sin que eso rompa el anonimato (metadatos se limpian automáticamente). La evidencia hace más creíble la denuncia y acelera la investigación, pero NO es obligatoria para denunciar.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'seguimiento-denuncia',
          selector: '.section-card:has(.text-sky-600)',
          titulo: 'Seguimiento de Tu Denuncia',
          descripcion: 'Con tu código de seguimiento, podés ver el estado: "Recibida", "En investigación", "Auditoria programada", "Resuelta". Esta transparencia genera confianza: sabés que tu denuncia NO fue ignorada, se está actuando.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'proteccion-represalias',
          selector: '.section-card:has(.text-amber-600)',
          titulo: 'Protección contra Represalias',
          descripcion: 'Si el denunciante es un trabajador y el taller intenta identificarlo/despedirlo por la denuncia, eso MISMO es denunciable y genera una auditoría inmediata. El sistema protege activamente a quien denuncia, no solo pasivamente "no revela datos".',
          posicion: 'top',
          destacar: true
        }
      ]
    },

    'auditorias.html': {
      titulo: 'Tutorial: Auditorías Transparentes y Registradas',
      contextoBarrera: 'Las auditorías públicas generan confianza al mostrar que hay control real y seguimiento de cumplimiento.',
      pasos: [
        {
          id: 'historial-auditorias',
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Historial Completo de Auditorías',
          descripcion: 'Todas las auditorías (fecha, inspector, hallazgos, acciones correctivas) quedan PÚBLICAMENTE registradas en el perfil del taller. No se pueden "esconder" auditorías negativas. Esta transparencia genera confianza: si un taller no tiene auditorías negativas recientes, es porque realmente cumple.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'origen-auditoria',
          selector: '.badge:contains("Origen")',
          titulo: 'Origen de la Auditoría Visible',
          descripcion: 'Se ve si la auditoría fue: rutinaria (programada), por denuncia (alguien reportó algo), o por alerta del sistema (datos detectaron anomalía). Esta transparencia genera confianza en el PROCESO: no son auditorías arbitrarias.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'hallazgos-detallados',
          selector: '.section-card:has(h4:contains("Hallazgos"))',
          titulo: 'Hallazgos Detallados y Clasificados',
          descripcion: 'Los hallazgos se clasifican por severidad: Crítico (trabajo infantil, falta de registración), Moderado (salario levemente bajo), Menor (documentación incompleta). Esta granularidad permite entender el NIVEL real de los problemas, no solo "auditoria negativa = taller malo".',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'acciones-correctivas',
          selector: '.text-sm:contains("Acción correctiva")',
          titulo: 'Acciones Correctivas y Seguimiento',
          descripcion: 'Para cada hallazgo, se define acción correctiva y plazo. El seguimiento muestra: "Completada", "En progreso", "Vencida". Esto genera confianza de que las auditorías NO son solo "marcar errores", sino AYUDAR a corregir.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'impacto-rating',
          selector: '.section-card:has(.text-amber-600)',
          titulo: 'Impacto en Rating del Taller',
          descripcion: 'Las auditorías negativas bajan el rating del taller (hallazgos críticos = -2 puntos, moderados = -0.5). Las auditorías positivas lo mejoran (+0.2). Esto genera INCENTIVO real para cumplir: el cumplimiento mejora tu reputación y acceso a pedidos.',
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
          id: 'factura-verificada',
          selector: '.section-card:has(h3:contains("Factura"))',
          titulo: 'Factura Digital Verificada por ARCA',
          descripcion: 'La factura electrónica NO es un PDF que el taller te manda. La plataforma consulta ARCA en tiempo real y obtiene la factura directamente desde allí. Imposible de falsificar. Esta verificación automática genera confianza: sabés que la factura es legítima.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'desglose-transparente',
          selector: '.table:has(th:contains("Concepto"))',
          titulo: 'Desglose Completo y Transparente',
          descripcion: 'Ves cada línea: subtotal del trabajo, comisión de plataforma (-3%), IVA (+21%), retenciones (-2%). No hay "costos ocultos" que aparecen de sorpresa. Esta transparencia genera confianza en que el precio final es justo y calculado correctamente.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'pago-automatico',
          selector: '.section-card:has(.text-emerald-600)',
          titulo: 'Pago Automático al Confirmar Recepción',
          descripcion: 'Cuando la marca confirma "recibido conforme", el pago se DISPARA AUTOMÁTICAMENTE al taller. No depende de que la marca "se acuerde" o "tenga ganas" de pagar. Esto genera CONFIANZA del taller: sabe que si cumple, cobra SÍ O SÍ.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'cbu-verificado',
          selector: '.font-mono:contains("CBU")',
          titulo: 'CBU del Taller Verificado',
          descripcion: 'El CBU donde se deposita está verificado: coincide con el CUIT del taller registrado en ARCA. Imposible que un tercero intercepte el pago. Esta seguridad genera confianza de que el dinero llega al destino correcto.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'periodo-garantia',
          selector: '.text-amber-600:contains("garantía")',
          titulo: 'Periodo de Garantía Post-Entrega',
          descripcion: 'Aunque el pago es automático al confirmar recepción, hay un periodo de garantía (7 días). Si aparecen problemas (defectos ocultos), podés abrir reclamo. El sistema BALANCEA: pago rápido para el taller + seguridad para la marca.',
          posicion: 'top',
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
          selector: '.section-card:has(.text-emerald-600:contains("%"))',
          titulo: 'Indicador de Formalización Siempre Visible',
          descripcion: 'El nivel de formalización (95%) está siempre visible en el dashboard. No es algo que "tenés que ir a buscar", está en tu cara todos los días. Esta visibilidad constante te RECUERDA que falta un pequeño paso para llegar al 100%.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'comision-actual',
          selector: '.stat-card:has(.text-sm:contains("Comisión"))',
          titulo: 'Comisión Actual vs Potencial',
          descripcion: 'Ves tu comisión ACTUAL (ej: 3.5%) y la potencial si completás formalización (3%). Esto traduce la formalización a DINERO concreto: cada punto de formalización que subís, bajás la comisión. Incentivo tangible.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'acceso-link-formalizacion',
          selector: '.btn:contains("Completar")',
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
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Checklist Visual con Estados Claros',
          descripcion: 'En lugar de abrumarte con "tenés que estar 100% formal", este checklist muestra: qué YA cumplís (✓ en verde), qué te FALTA (× en rojo), y qué está EN PROCESO (⏳ en amarillo). Ver el progreso motiva a completar lo faltante: "ya hice 7 de 10, solo faltan 3".',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'prioridad-items',
          selector: '.badge:contains("Crítico")',
          titulo: 'Priorización de Requisitos',
          descripcion: 'Los requisitos están priorizados: CRÍTICO (sin esto no podés operar: registro ARCA), IMPORTANTE (reduce mucho tu comisión: STESS), RECOMENDADO (mejora reputación: certificaciones). Esto te ayuda a decidir QUÉ hacer primero si no podés hacerlo todo a la vez.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'links-tramites',
          selector: '.btn:contains("Iniciar")',
          titulo: 'Links Directos a Trámites',
          descripcion: 'Cada requisito tiene botón "Iniciar trámite" que te lleva DIRECTAMENTE al sitio oficial (ARCA, STESS, etc.). No tenés que googlear "dónde se hace esto". Reducir complejidad: darte el camino directo.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'tiempo-estimado',
          selector: '.text-sm:contains("Tiempo estimado")',
          titulo: 'Tiempo y Costo Estimado por Requisito',
          descripcion: 'Cada requisito muestra: tiempo estimado (1 semana, 3 días) y costo aproximado (gratis, $5.000). Esto te permite PLANIFICAR: "empiezo por los gratis y rápidos mientras junto plata para los que cuestan".',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'ayuda-contextual',
          selector: '.text-xs:contains("¿Necesitás ayuda?")',
          titulo: 'Ayuda Contextual para Cada Requisito',
          descripcion: 'Si un requisito dice "Registro en STESS" y no sabés qué es eso, hay un link "¿Qué es STESS?" que te explica. Reducir barreras de conocimiento: no asumimos que sabés todo, te ayudamos a aprender.',
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
          selector: '.w-24.h-24',
          titulo: 'Indicador Circular de Progreso',
          descripcion: 'El indicador circular (95%) gamifica la formalización: ves qué tan cerca estás del 100%. Esta visualización genera motivación ("casi llego, solo 5% más") en lugar de frustración ("falta mucho"). El diseño importa: hacer VISIBLE el progreso.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'beneficios-economicos',
          selector: '.section-card:has(.text-emerald-600)',
          titulo: 'Beneficios Económicos Concretos',
          descripcion: 'Formalizarse NO es solo "cumplir con la ley" ni "hacer lo correcto". Tiene beneficios ECONÓMICOS tangibles: comisión baja de 8% (informal) a 3% (formal). Si facturás $100.000/mes, son $5.000 de ahorro mensual ($60.000/año). ROI claro.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'beneficios-reputacion',
          selector: '.text-sm:contains("Prioridad en matching")',
          titulo: 'Acceso a Mejores Pedidos',
          descripcion: 'Los talleres formales tienen PRIORIDAD en el matching. Dos talleres con misma capacidad: el formal aparece primero. Esto significa acceso a MEJORES pedidos (marcas grandes que exigen formalización, pedidos más grandes, precios mejores). Beneficio competitivo.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'roadmap-formalizacion',
          selector: '.section-card:has(h4:contains("Próximos pasos"))',
          titulo: 'Roadmap: Qué Hacer Ahora',
          descripcion: 'Te muestra el PRÓXIMO paso concreto: "Para llegar a 100%, te falta: Certificación de seguridad e higiene". No es una lista abrumadora de TODO lo que falta, sino el SIGUIENTE paso. Chunking: dividir en partes manejables.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'tiempo-para-100',
          selector: '.text-amber-600:contains("Tiempo estimado")',
          titulo: 'Tiempo Estimado para Completar',
          descripcion: 'Ves cuánto falta para llegar a 100%: "Tiempo estimado: 2 semanas si empezás los trámites ahora". Esta proyección te ayuda a decidir SI vale la pena (2 semanas sí, 6 meses tal vez no). Información para decidir.',
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
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Cursos Específicos sobre Trámites',
          descripcion: 'Hay cursos específicos sobre: "Cómo inscribirte en ARCA paso a paso", "Qué es el registro STESS y cómo hacerlo", "Cómo hacer facturas electrónicas", "Cómo abrir cuenta bancaria para tu taller". Esta capacitación reduce la COMPLEJIDAD PERCIBIDA: cuando alguien te explica paso a paso, ves que no es tan difícil como parecía.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'videos-tutoriales',
          selector: '.grid:has(.badge:contains("Video"))',
          titulo: 'Tutoriales en Video Paso a Paso',
          descripcion: 'Los cursos incluyen videos donde ves EXACTAMENTE cómo hacer cada trámite: dónde hacer click, qué datos poner, qué documentos subir. Esto elimina la incertidumbre: no tenés que "adivinar" cómo se hace, lo ves en acción.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'acceso-gratuito',
          selector: '.badge.badge-success:contains("Gratis")',
          titulo: 'Capacitación Gratuita',
          descripcion: 'Todos los cursos sobre formalización son GRATUITOS. No hay excusa de "no tengo plata para capacitarme". Reducir barreras económicas: acceso universal al conocimiento necesario para formalizarse.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'certificado-completacion',
          selector: '.text-sm:contains("Certificado")',
          titulo: 'Certificado de Completación',
          descripcion: 'Al completar el curso, recibís un certificado que aparece en tu perfil: "Curso: Formalización Fiscal completado". Esto no solo te ayuda a formalizarte, sino que las marcas VEN que te estás capacitando, mejorando tu reputación.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'foro-dudas',
          selector: '.section-card:has(.text-sky-600)',
          titulo: 'Foro para Consultar Dudas',
          descripcion: 'Si después del curso tenés dudas, hay un foro donde podés preguntar a otros talleres que ya pasaron por el proceso o a facilitadores. Aprendizaje comunitario: reducir la sensación de "estar solo ante la burocracia".',
          posicion: 'top',
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
          selector: '.text-emerald-600:contains("%")',
          titulo: 'La Formalización Te Da Ventaja Competitiva',
          descripcion: 'El algoritmo de matching PRIORIZA talleres con mayor nivel de formalización (95% aparece antes que 60%). Dos talleres con misma capacidad técnica: el que está más formalizado aparece primero. Esto traduce formalización en OPORTUNIDADES concretas: más pedidos, mejores clientes.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'marcas-exigen-formalizacion',
          selector: '.badge.badge-success:contains("✓")',
          titulo: 'Marcas Grandes Exigen Formalización',
          descripcion: 'Las marcas grandes (Nike, Adidas, Zara, etc.) tienen políticas de compliance que exigen trabajar SOLO con talleres formalizados. Si no estás formalizado, automáticamente quedás EXCLUIDO de esos pedidos (que suelen ser más grandes y mejor pagos). Formalización = acceso a mejores clientes.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'filtro-formalizacion',
          selector: '.form-group:has(input[type="range"])',
          titulo: 'Las Marcas Pueden Filtrar por Formalización',
          descripcion: 'Cuando una marca busca talleres, puede poner filtro: "Mostrarme solo talleres con 90%+ de formalización". Si no cumplís ese umbral, ni siquiera aparecés en su búsqueda. Esto hace que la informalidad te EXCLUYA de oportunidades.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'comision-diferencial',
          selector: '.text-sm:contains("Comisión")',
          titulo: 'Comisión Más Baja para Formales',
          descripcion: 'Los talleres formales pagan comisión más baja (3% vs 8% informales). En un pedido de $100.000, eso son $5.000 de diferencia. Este incentivo económico hace que la formalización SE PAGUE SOLA: ahorrás en comisiones lo que gastás en impuestos/registros.',
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
          selector: '.grid.grid-cols-4.gap-4',
          titulo: 'Datos del Sector en Tiempo Real',
          descripcion: 'La mesa tripartita ve métricas agregadas del sector: cantidad de talleres activos (1.247), trabajadores registrados (8.932), transacciones totales ($47M), nivel de formalización promedio (78%). Esta información COMPARTIDA permite que los 3 actores (Estado, sindicatos, cámaras) diseñen políticas basadas en DATOS REALES, no en estimaciones o en la perspectiva aislada de cada uno.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'vista-unica-compartida',
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Una Única Vista Compartida',
          descripcion: 'Antes: Estado tenía SUS datos, sindicato tenía LOS SUYOS, cámaras tenían OTROS. Nunca coincidían. Ahora: los 3 miran LA MISMA pantalla con LOS MISMOS datos. Esto evita discusiones sobre "cuál número es el correcto" y permite enfocarse en QUÉ HACER con esos datos.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'tendencias-temporales',
          selector: '.chart-container',
          titulo: 'Tendencias y Evolución Temporal',
          descripcion: 'Los gráficos muestran evolución en el tiempo: ¿la formalización está subiendo o bajando? ¿Hay más o menos denuncias que el mes pasado? Esta información temporal permite evaluar IMPACTO de políticas: "después de cambiar X parámetro, ¿mejoró Y indicador?".',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'alertas-sectoriales',
          selector: '.section-card:has(.text-amber-600)',
          titulo: 'Alertas de Problemas Sectoriales',
          descripcion: 'El sistema detecta patrones problemáticos a nivel sectorial: "aumento 30% denuncias laborales en zona X", "baja 15% formalización en rubro Y". Estas alertas permiten ARTICULAR respuestas conjuntas: el Estado inspecciona, el sindicato asiste trabajadores, las cámaras capacitan talleres.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'reuniones-basadas-datos',
          selector: '.btn:contains("Generar reporte")',
          titulo: 'Generar Reportes para Reuniones',
          descripcion: 'Podés exportar reportes para reuniones tripartitas. Esto estructura la discusión: en lugar de "charlas generales", hay AGENDA basada en datos: "Punto 1: Formalización bajó 5%, ¿qué hacemos?". Articulación efectiva requiere información compartida.',
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
          id: 'parametros-editables-conjuntos',
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Ajustar Prioridades del Sistema Conjuntamente',
          descripcion: 'La mesa tripartita puede modificar pesos del algoritmo de matching. Por ejemplo: aumentar peso de "formalización" de 20% a 30% para incentivar cumplimiento, o priorizar "cercanía geográfica" al 25% para promover economía regional. Esto es ARTICULACIÓN real: los 3 actores (Estado, sindicatos, cámaras) gestionan JUNTOS las reglas del mercado.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'politicas-reflejadas-algoritmo',
          selector: '.form-group:has(input[type="range"])',
          titulo: 'Traducir Políticas a Parámetros',
          descripcion: 'Supongamos que en reunión tripartita acuerdan: "hay que promover trabajo local". Eso se traduce en: aumentar peso de "ubicación" en matching. Las decisiones políticas NO quedan en "declaraciones", se implementan técnicamente en el algoritmo. Articulación = alineación entre política y tecnología.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'simulacion-cambios',
          selector: '.btn:contains("Simular")',
          titulo: 'Simular Impacto Antes de Aplicar',
          descripcion: 'Antes de cambiar parámetros en producción, podés simular: "si bajo comisión de formales a 2%, ¿cuántos talleres se formalizarían?". Esto permite diseño de políticas BASADO EN EVIDENCIA: no es intuición, es proyección con datos reales.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'aprobacion-tripartita',
          selector: '.text-amber-600:contains("aprobación")',
          titulo: 'Cambios Requieren Aprobación Tripartita',
          descripcion: 'Ningún actor puede cambiar parámetros unilateralmente. Se requiere aprobación de 2 de 3 actores (mayoría). Esto balancea poder: ni el Estado ni sindicato ni cámaras pueden imponer reglas sin consenso. ARTICULACIÓN = co-gobernanza.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'registro-cambios-parametros',
          selector: '.section-card:has(.text-sm:contains("Historial"))',
          titulo: 'Historial de Cambios Transparente',
          descripcion: 'Todos los cambios de parámetros quedan registrados: quién propuso, cuándo, con qué justificación, quién aprobó. Esta transparencia genera accountability: si un cambio tiene consecuencias negativas, se puede rastrear la decisión y ajustar.',
          posicion: 'top',
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
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Calendario Compartido de Inspecciones',
          descripcion: 'Antes: Estado inspeccionaba un taller el lunes, sindicato el miércoles, cámara el viernes. Tres visitas al mismo taller. Ahora: calendario compartido permite COORDINAR: "vamos los 3 juntos el lunes". Esto reduce molestia al taller y permite visión integral del cumplimiento.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'inspecciones-conjuntas',
          selector: '.badge:contains("Conjunta")',
          titulo: 'Inspecciones Tripartitas Conjuntas',
          descripcion: 'Una inspección conjunta: inspector estatal verifica registros legales, delegado sindical habla con trabajadores, representante de cámara evalúa condiciones productivas. En UNA visita se obtiene información fiscal, laboral Y técnica. Eficiencia por articulación.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'compartir-hallazgos',
          selector: '.section-card:has(.text-sky-600)',
          titulo: 'Compartir Hallazgos Entre Actores',
          descripcion: 'Si el sindicato inspecciona un taller y encuentra problemas, esos hallazgos son VISIBLES para Estado y cámaras. No hay "información privada" que cada uno guarda. Transparencia interna genera ARTICULACIÓN: todos saben qué encontró cada uno.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'acciones-coordinadas',
          selector: '.text-sm:contains("Acción correctiva")',
          titulo: 'Acciones Correctivas Coordinadas',
          descripcion: 'Si una inspección encuentra problemas múltiples: Estado aplica sanción, sindicato asiste al trabajador afectado, cámara ofrece capacitación al taller para corregir. Respuesta ARTICULADA: cada actor aporta desde su rol, en lugar de respuestas fragmentadas.',
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
          id: 'catalogo-unificado',
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Catálogo Unificado de Capacitaciones',
          descripcion: 'El sindicato ofrece cursos técnicos (costura, patronaje), el Estado ofrece sobre formalización (ARCA, STESS), las cámaras sobre gestión (costeo, planificación). Todo en UNA plataforma. Esto es ARTICULACIÓN: en lugar de que cada actor tenga su propio sistema aislado (con diferentes logins, diferentes formatos), comparten infraestructura.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'trayectorias-formativas',
          selector: '.badge:contains("Trayectoria")',
          titulo: 'Trayectorias Formativas Integradas',
          descripcion: 'Podés armar trayectorias que combinan cursos de diferentes actores: "Trayectoria Taller Formal" = Curso técnico (sindicato) + Formalización fiscal (Estado) + Gestión de costos (cámara). Articulación = integración de saberes complementarios.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'certificaciones-reconocidas',
          selector: '.text-emerald-600:contains("Certificado")',
          titulo: 'Certificaciones Reconocidas por Todos',
          descripcion: 'Un certificado emitido por el sindicato es RECONOCIDO por Estado y cámaras (y viceversa). No hay "certificados de primera y de segunda". Esta equivalencia genera ARTICULACIÓN: cada actor respeta el trabajo formativo de los otros.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'capacitacion-conjunta',
          selector: '.badge.badge-primary:contains("Co-dictado")',
          titulo: 'Cursos Co-Dictados por Múltiples Actores',
          descripcion: 'Algunos cursos son co-dictados: "Formalización + Gestión de costos laborales" (Estado + cámara). Esto permite abordar temas complejos desde múltiples ángulos, demostrando que los actores pueden COLABORAR, no solo coexistir.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'recursos-compartidos',
          selector: '.text-sm:contains("Material")',
          titulo: 'Recursos Didácticos Compartidos',
          descripcion: 'Los materiales de capacitación (videos, manuales, ejercicios) se comparten entre actores. Si el sindicato hizo un buen video de patronaje, el Estado puede usarlo en su programa. Evitar duplicar esfuerzos: articulación = eficiencia.',
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
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Inspecciones Dirigidas por Datos',
          descripcion: 'Antes: el Estado inspeccionaba al azar (baja efectividad) o solo por denuncia (reactivo). Ahora: la plataforma genera ALERTAS basadas en datos: taller con muchos trabajadores pero baja formalización, denuncias anónimas recurrentes, caída repentina de rating, precios anormalmente bajos. Esto permite fiscalización INTELIGENTE: ir donde realmente hay alta probabilidad de problemas.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'priorizacion-inspecciones',
          selector: '.badge:contains("Prioridad")',
          titulo: 'Priorización Automática por Riesgo',
          descripcion: 'El sistema calcula un "score de riesgo" para cada taller basado en múltiples variables: denuncias, caída de formalización, inconsistencias en datos. Los talleres se ordenan por riesgo: alta prioridad, media, baja. Esto permite asignar recursos limitados (inspectores) a donde más se necesitan.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'ampliacion-cobertura',
          selector: '.grid.grid-cols-4',
          titulo: 'Ampliar Cobertura Sin Más Inspectores',
          descripcion: 'Supongamos que hay 10 inspectores para 1.000 talleres. Sin inteligencia de datos: inspeccionan 10 random, 99% del sector sin fiscalizar. Con inteligencia: inspeccionan los 10 con mayor riesgo, desincentivando incumplimiento en TODOS (porque saben que SI incumplen, tienen alta probabilidad de inspección). Presencia efectiva sin más recursos.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'retroalimentacion-algoritmo',
          selector: '.text-sm:contains("Modelo")',
          titulo: 'Mejora Continua del Modelo Predictivo',
          descripcion: 'Cada inspección retroalimenta el algoritmo: si un taller marcado "alto riesgo" efectivamente tenía problemas, el modelo aprende. Si uno marcado "bajo riesgo" tenía problemas (falso negativo), el modelo se ajusta. Machine learning aplicado a fiscalización.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'efecto-disuasivo',
          selector: '.section-card:has(.text-emerald-600)',
          titulo: 'Efecto Disuasivo: "El Estado Está Viendo"',
          descripcion: 'Aunque el Estado no inspeccione físicamente a todos, el SABER que hay un sistema inteligente monitoreando genera efecto disuasivo: "si hago algo irregular, probablemente me detecten". Presencia digital = amplificación de capacidad estatal sin expandir burocracia.',
          posicion: 'top',
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
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Presencia Digital 24/7 en Todos los Talleres',
          descripcion: 'El Estado físicamente no puede estar en todos los talleres todo el tiempo (hay miles de talleres, pocos inspectores). Pero el sistema de denuncias anónimas funciona como presencia digital 24/7: trabajadores, clientes, vecinos pueden alertar problemas EN EL MOMENTO. Esto AMPLIFICA la capacidad estatal: en lugar de 100 inspectores, hay potencialmente 10.000 "sensores" distribuidos.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'empoderamiento-trabajadores',
          selector: '.badge.badge-success:contains("Anónimo")',
          titulo: 'Empoderamiento de Trabajadores como Fiscalizadores',
          descripcion: 'Tradicionalmente, trabajadores no denuncian por miedo a represalias. El anonimato REAL del sistema los convierte en fiscalizadores efectivos: ellos saben mejor que nadie si hay irregularidades (están ahí 8hs/día). Al darles voz sin riesgo, el Estado gana información de primera mano, inaccesible por otros medios.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'triaje-automatico',
          selector: '.section-card:has(.text-amber-600)',
          titulo: 'Triaje Automático de Denuncias',
          descripcion: 'No todas las denuncias son igual de urgentes. El sistema hace triaje automático: denuncia de trabajo infantil = inspección INMEDIATA (en 48hs), denuncia de salario levemente bajo = auditoría programada (en 30 días). Esto permite gestionar volumen alto de denuncias con recursos limitados.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'deteccion-patrones',
          selector: '.text-sky-600:contains("Patrón")',
          titulo: 'Detección de Patrones Sectoriales',
          descripcion: 'Si múltiples denuncias de diferentes talleres mencionan el MISMO problema ("nos pagan por debajo del convenio"), el sistema detecta el patrón y alerta: "posible problema sectorial". Esto permite al Estado intervenir a nivel MACRO, no solo caso a caso.',
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
          id: 'vision-integral-sector',
          selector: '.grid.grid-cols-4.gap-4',
          titulo: 'Ver Todo el Sector en Tiempo Real',
          descripcion: 'El Estado ve métricas actualizadas del sector: cuántos talleres operan (1.247), cuántos trabajadores registrados (8.932), tendencias de formalización (78% promedio), zonas con más problemas. Esta VISIBILIDAD en tiempo real permite actuar PROACTIVAMENTE: ver problemas emergentes antes de que escalen, no reaccionar cuando ya explotaron.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'antes-estado-ciego',
          selector: '.section-card:nth-of-type(1)',
          titulo: 'De "Estado Ciego" a "Estado con Visibilidad"',
          descripcion: 'Antes: el Estado tenía datos fragmentados (ARCA con su base, STESS con otra, sindicatos con otra), actualizados con meses de retraso. Era como manejar mirando el espejo retrovisor. Ahora: datos integrados en tiempo real. De "no sabemos qué pasa" a "sabemos exactamente qué pasa, cuándo y dónde".',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'mapas-calor',
          selector: '.chart-container',
          titulo: 'Mapas de Calor de Problemas',
          descripcion: 'Los gráficos y mapas muestran concentración geográfica de problemas: "en zona X hay 40% de talleres con denuncias, en zona Y solo 5%". Esto permite FOCALIZACIÓN de recursos: enviar más inspectores donde hay más problemas, campañas de formalización donde más se necesitan.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'evaluacion-politicas',
          selector: '.text-emerald-600:contains("Impacto")',
          titulo: 'Evaluación de Impacto de Políticas',
          descripcion: 'El dashboard permite evaluar: "después de campaña de formalización en zona X, ¿mejoró el nivel de formalización?". Antes era imposible saber si las políticas funcionaban. Ahora: evaluación basada en evidencia = diseño de políticas más efectivas.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'transparencia-gestion',
          selector: '.btn:contains("Publicar")',
          titulo: 'Transparencia de la Gestión Estatal',
          descripcion: 'El dashboard puede publicarse parcialmente (datos agregados, sin identificar talleres). Esto genera ACCOUNTABILITY: la sociedad puede ver si el Estado está actuando efectivamente. Presión para EFICACIA: si los datos muestran que el Estado no inspecciona zonas problemáticas, eso es visible.',
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
          id: 'enfoque-preventivo',
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Ayudar a Cumplir, No Solo Sancionar',
          descripcion: 'El checklist de formalización permite al Estado trabajar en PREVENCIÓN: alertar al taller "te falta esto para cumplir" ANTES de sancionar. Esto es más eficaz que fiscalización puramente punitiva: se logra más cumplimiento con menos conflicto. El Estado como facilitador, no solo como sancionador.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'asistencia-tecnica',
          selector: '.btn:contains("Iniciar trámite")',
          titulo: 'Asistencia Técnica para Formalización',
          descripcion: 'Los links directos a trámites (ARCA, STESS) son asistencia técnica: el Estado no solo dice "tenés que formalizarte", sino que te AYUDA a hacerlo. Esto reduce la carga administrativa percibida: "no sé cómo hacer el trámite" deja de ser excusa.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'plazos-gracia',
          selector: '.text-amber-600:contains("plazo")',
          titulo: 'Plazos de Gracia para Regularización',
          descripcion: 'Si un taller está irregular, el sistema le da un PLAZO para regularizarse (ej: 60 días para sacar registro faltante) antes de sancionar. Esta "segunda chance" incentiva formalización voluntaria: es más barato regularizarse que pagar multas.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'reduccion-multas',
          selector: '.text-emerald-600:contains("Reducción")',
          titulo: 'Reducción de Multas por Autocorrección',
          descripcion: 'Si un taller detecta y corrige una irregularidad ANTES de que el Estado inspeccione, la multa se reduce 70%. Esto incentiva autocorrección: genera cultura de cumplimiento proactivo, no reactivo ("cumplo solo si me agarran").',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'cambio-cultural',
          selector: '.section-card:has(.text-sky-600)',
          titulo: 'De "Evasión" a "Cumplimiento"',
          descripcion: 'El enfoque preventivo + asistencia técnica + incentivos cambia la relación Estado-sector: de "el Estado es el enemigo que hay que evadir" a "el Estado ayuda a cumplir y es mejor cumplir". Este cambio cultural es más efectivo que aumentar sanciones.',
          posicion: 'top',
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
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Capacitación Técnica Y Gerencial',
          descripcion: 'Hay cursos de TÉCNICAS (costura de punto, patronaje industrial, control de calidad, operación de maquinaria) y GERENCIALES (costeo y fijación de precios, gestión de equipos, planificación de producción, administración de taller). Esta combinación dual eleva capacidades de forma INTEGRAL: no solo saber HACER bien, sino también saber GESTIONAR eficientemente.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'niveles-progresivos',
          selector: '.badge:contains("Nivel")',
          titulo: 'Niveles Progresivos de Aprendizaje',
          descripcion: 'Los cursos están organizados por niveles: Básico, Intermedio, Avanzado. No es "todo o nada": podés empezar desde tu nivel actual y progresar. Por ejemplo: "Costura Básica" → "Costura de Prendas Complejas" → "Supervisión de Equipo de Costura". Trayectoria clara de desarrollo profesional.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'certificaciones-verificables',
          selector: '.badge.badge-success:contains("Certificado")',
          titulo: 'Certificaciones Verificables en tu Perfil',
          descripcion: 'Al completar una capacitación, recibís un certificado digital verificable que aparece en tu perfil público. Las marcas pueden ver qué certificaciones tenés, lo cual mejora tu matching (certificados = competencias demostrables). Esto incentiva la capacitación continua: no solo aprendés, sino que podés DEMOSTRAR que aprendiste.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'formato-flexible',
          selector: '.text-sm:contains("Online")',
          titulo: 'Formato Flexible: Online y Presencial',
          descripcion: 'Los cursos están disponibles online (videos, materiales) y presenciales (talleres prácticos). Esto reduce barreras de acceso: si no podés ir presencial (distancia, horarios), hacés online. Combinar formatos: teoría online + práctica presencial. Flexibilidad = acceso universal.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'comunidad-aprendizaje',
          selector: '.section-card:has(.text-sky-600)',
          titulo: 'Foros y Comunidad de Práctica',
          descripcion: 'Cada curso tiene foro donde podés consultar dudas a instructores y compartir experiencias con otros talleres. Esto genera COMUNIDAD DE PRÁCTICA: aprender no es solo consumir contenido, sino interactuar con pares que enfrentan problemas similares. Aprendizaje social.',
          posicion: 'top',
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
          selector: '.section-card:has(.badge:contains("Certificado"))',
          titulo: 'Tus Certificaciones Son Visibles para Clientes',
          descripcion: 'Las certificaciones que obtenés en capacitaciones aparecen en una sección destacada de tu dashboard y perfil público. Las marcas las ven al evaluar talleres para un pedido. Por ejemplo: "Certificado en Patronaje Industrial" mejora tu matching para pedidos de ropa con cortes complejos. Esto crea un INCENTIVO tangible: capacitarte mejora tus chances de conseguir mejores pedidos.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'badges-especializacion',
          selector: '.badge.badge-primary',
          titulo: 'Badges de Especialización',
          descripcion: 'Algunas combinaciones de certificados generan "badges de especialización": ej: si tenés certificados en "Costura de Punto", "Control de Calidad Textil" y "Gestión de Equipos", obtenés badge "Taller Especializado en Tejido de Punto". Estos badges son shortcuts para que marcas te encuentren fácilmente.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'progreso-capacitacion',
          selector: '.text-sm:contains("Cursos completados")',
          titulo: 'Tracking de Tu Desarrollo Profesional',
          descripcion: 'El dashboard muestra: cursos completados (12), en progreso (2), horas totales de capacitación (87hs). Esta gamificación motiva continuar: "ya hice 12, voy por más". Ver tu propio progreso genera motivación intrínseca para seguir capacitándote.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'recomendaciones-cursos',
          selector: '.section-card:has(.text-amber-600)',
          titulo: 'Recomendaciones de Cursos',
          descripcion: 'Basándose en tus certificaciones actuales y los pedidos que más recibís, el sistema recomienda: "Considerá hacer el curso X para mejorar tu matching". Por ejemplo: si tenés muchos pedidos de camisas pero no certificación en "Confección de Cuellos", te sugiere ese curso. Desarrollo dirigido por demanda.',
          posicion: 'top',
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
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Capacitación en el Momento que la Necesitás',
          descripcion: 'Si el checklist muestra que te falta "Facturación Electrónica" para completar formalización, hay un link directo al curso sobre ese tema. Esto es aprendizaje CONTEXTUAL o "just-in-time": aprendés justo cuando necesitás aplicarlo, no en abstracto ("algún día me va a servir"). Aumenta retención y aplicación práctica.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'microlearning',
          selector: '.badge:contains("15 min")',
          titulo: 'Micro-Módulos de Aprendizaje Rápido',
          descripcion: 'Algunos contenidos están en formato micro (15 min): "Cómo sacar CUIT en 5 pasos", "Cómo calcular precio de una prenda". No tenés que hacer un curso de 10hs cuando solo necesitás aprender UNA cosa específica. Reducir fricción: aprendizaje en dosis pequeñas.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'aplicacion-inmediata',
          selector: '.btn:contains("Aplicar")',
          titulo: 'Botón "Aplicar lo Aprendido"',
          descripcion: 'Después de ver un micro-módulo (ej: "Cómo hacer factura electrónica"), hay botón "Aplicar ahora" que te lleva directamente a hacerlo en la plataforma. De aprender a HACER en segundos. Esto cierra el loop de aprendizaje: conocimiento → acción → resultado.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'historial-capacitacion',
          selector: '.text-sm:contains("Última capacitación")',
          titulo: 'Recordatorios de Capacitación',
          descripcion: 'Si hace más de 6 meses que no hacés ningún curso, aparece sugerencia: "¿Querés ver qué cursos nuevos hay?". Esto mantiene el momentum: capacitación como hábito continuo, no evento único. Desarrollo profesional permanente, no esporádico.',
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
          selector: '.section-card:has(.text-emerald-600:contains("%"))',
          titulo: 'Tu Nivel de Formalización es Público',
          descripcion: 'El nivel de formalización (95%) aparece VISIBLEMENTE en tu perfil. No podés ocultarlo. Esto nivela la cancha: los talleres formales no compiten "en desventaja" contra informales que ocultan su situación. Las marcas VEN claramente quién cumple y quién no, y deciden conscientemente con quién trabajar.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'badges-cumplimiento-laboral',
          selector: '.badge.badge-success:contains("✓")',
          titulo: 'Badges de Cumplimiento Laboral',
          descripcion: 'Los badges (✓ ARCA, ✓ STESS, ✓ SOIVA) son verificaciones de cumplimiento en tiempo real. Si un taller NO tiene estos badges, las marcas saben que hay riesgo. Esto protege a talleres formales: su esfuerzo por cumplir se hace VISIBLE y VALORADO.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'costo-real-transparente',
          selector: '.text-sm:contains("Comisión")',
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
          selector: '.text-emerald-600:contains("%")',
          titulo: 'Formalización como Criterio de Matching',
          descripcion: 'El nivel de formalización (95%, 60%, etc.) es VISIBLE para todas las marcas y afecta el matching. Un taller informal no puede "hacerse pasar" por formal ni competir ocultando su situación. El algoritmo PRIORIZA talleres formales: si dos tienen misma capacidad, el formal aparece primero. Competencia basada en CUMPLIMIENTO, no en evasión.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'desglose-formalizacion',
          selector: '.grid:has(.bg-emerald-50)',
          titulo: 'Desglose Detallado de Cumplimiento',
          descripcion: 'No es solo un "95% formal". Ves el DESGLOSE: ✓ Registro ARCA, ✓ Trabajadores en STESS, ✓ Convenio SOIVA, × Certificación de seguridad (falta). Las marcas pueden evaluar QUÉ aspectos cumplen y cuáles no. Transparencia granular = decisión informada.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'precio-vs-riesgo',
          selector: '.text-2xl.font-bold:contains("$")',
          titulo: 'Las Marcas Ven Precio Y Riesgo',
          descripcion: 'Las marcas ven el precio del taller JUNTO con su nivel de formalización. Pueden decidir: "acepto pagar 10% más por un taller 100% formal" o "el ahorro de 10% no justifica el riesgo legal de trabajar con 60% informal". Competencia NO es solo precio, es precio + riesgo + cumplimiento.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'filtro-formalizacion-marcas',
          selector: '.form-group:has(input[type="range"])',
          titulo: 'Las Marcas Pueden Filtrar por Cumplimiento',
          descripcion: 'Las marcas pueden filtrar: "mostrarme solo talleres 90%+ formalizados". Si estás informal, quedás EXCLUIDO de esos pedidos (que suelen ser de marcas grandes con mejores condiciones). Esta exclusión es INCENTIVO poderoso: formalizarse = acceder a mejores clientes.',
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
          selector: '.section-card:has(.text-emerald-600)',
          titulo: 'Cláusulas Laborales Mínimas Automáticas',
          descripcion: 'TODOS los acuerdos incluyen automáticamente condiciones laborales mínimas: salario no menor a $X/hora (convenio colectivo), registración de trabajadores en STESS, jornada máxima 48hs/semana, condiciones de seguridad. NO son opcionales ni negociables. Esto evita que talleres hagan dumping social (bajar precios explotando trabajadores) para ganar pedidos.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'salario-minimo-convenio',
          selector: '.text-sm:contains("Salario")',
          titulo: 'Salario Mínimo del Convenio Colectivo',
          descripcion: 'El sistema CALCULA automáticamente el salario mínimo según convenio colectivo vigente para el tipo de tarea. No es "lo que el taller quiera pagar", es el MÍNIMO LEGAL actualizado. Si un taller ofrece menos, el sistema ALERTA a la marca: "este precio no cubre salarios mínimos".',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'registracion-obligatoria',
          selector: '.badge:contains("STESS")',
          titulo: 'Registración en STESS Obligatoria',
          descripcion: 'El acuerdo exige que los trabajadores asignados al pedido estén registrados en STESS. Durante la ejecución, el sistema VERIFICA esto en tiempo real. Si detecta trabajadores no registrados, SUSPENDE el pedido y alerta. No hay forma de "hacer trampa": el cumplimiento se monitorea activamente.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'penalidades-incumplimiento',
          selector: '.text-amber-600:contains("Penalidad")',
          titulo: 'Penalidades por Incumplimiento Laboral',
          descripcion: 'Si un taller incumple cláusulas laborales (se detecta salario bajo convenio, trabajadores no registrados), hay penalidades: retención de pago, baja de rating, suspensión temporal. Esto hace COSTOSO el dumping social: el "ahorro" de explotar se pierde en penalidades.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'marca-coresponsable',
          selector: '.section-card:has(.text-sky-600)',
          titulo: 'La Marca es Co-Responsable',
          descripcion: 'Al firmar el acuerdo, la marca acepta co-responsabilidad por cumplimiento laboral. Si el taller explota trabajadores, la marca TAMBIÉN puede ser sancionada. Esto incentiva a las marcas a trabajar SOLO con talleres formales: el "ahorro" de contratar informal no vale el riesgo legal.',
          posicion: 'top',
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
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Comisión Diferenciada Según Formalización',
          descripcion: 'La mesa tripartita puede ajustar la comisión de plataforma según nivel de formalización: 3% para talleres 100% formales, 4% para 80-99%, 6% para 60-79%, 8% para <60%. Esto hace que la informalidad sea ECONÓMICAMENTE INVIABLE: el "ahorro" que obtienen no pagando impuestos/registros se lo lleva la comisión de plataforma. Incentivo poderoso para formalizarse.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'peso-formalizacion-matching',
          selector: '.form-group:has(input[type="range"])',
          titulo: 'Aumentar Peso de Formalización en Matching',
          descripcion: 'El parámetro "Peso de Formalización" controla cuánto afecta el cumplimiento al matching. Si la mesa tripartita aumenta este peso de 20% a 40%, un taller 100% formal tendrá MUY ALTA prioridad sobre uno 60% informal (aunque el informal sea más barato). Política sectorial = reglas del algoritmo.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'precio-minimo-seguridad',
          selector: '.text-sm:contains("Precio mínimo")',
          titulo: 'Precio Mínimo de Seguridad',
          descripcion: 'El sistema puede establecer un "precio mínimo" por tipo de prenda basado en costos laborales del convenio. Si un taller ofrece muy por debajo (señal de dumping social), aparece alerta: "Este precio es sospechosamente bajo, puede indicar explotación". Las marcas son ADVERTIDAS antes de contratar.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'simulacion-impacto',
          selector: '.btn:contains("Simular")',
          titulo: 'Simular Impacto de Cambios en Competencia',
          descripcion: 'Antes de cambiar parámetros, se puede simular: "si aumento comisión de informales a 10%, ¿cuántos se formalizarían? ¿cómo cambia la distribución de pedidos?". Esto permite diseño BASADO EN EVIDENCIA de políticas contra dumping social.',
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
          selector: '.section-card:nth-of-type(1)',
          titulo: 'Detectar Talleres con Dumping Social',
          descripcion: 'El dashboard puede mostrar talleres con SEÑALES DE DUMPING: precios anormalmente bajos (30% por debajo del promedio) + baja formalización (<60%) + denuncias laborales recientes. Esta combinación indica alta probabilidad de explotación laboral para competir con precios bajos. Permite fiscalización DIRIGIDA: ir a inspeccionar exactamente donde hay mayor riesgo.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'mapa-calor-precios',
          selector: '.chart-container',
          titulo: 'Mapa de Calor de Precios vs Formalización',
          descripcion: 'Un gráfico muestra precios vs formalización: ves clusters de "precios bajos + formalización baja" (dumping) vs "precios justos + formalización alta" (competencia leal). Esto hace VISIBLE el problema a nivel sectorial: cuántos talleres están haciendo dumping, dónde están, cuánto del mercado capturan.',
          posicion: 'top',
          destacar: true
        },
        {
          id: 'impacto-dumping-sector',
          selector: '.stat-card:has(.text-amber-600)',
          titulo: 'Cuantificar Impacto del Dumping en el Sector',
          descripcion: 'El dashboard calcula: "X% de pedidos van a talleres con señales de dumping", "trabajadores en talleres con dumping ganan Y% menos que el promedio". Esta cuantificación del IMPACTO genera sentido de urgencia para actuar: no es un problema teórico, es X% del sector compitiendo deslealmente.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'tendencias-dumping',
          selector: '.text-emerald-600:contains("Tendencia")',
          titulo: 'Tendencias: ¿El Dumping Está Bajando?',
          descripcion: 'Al ver la evolución temporal: "hace 6 meses, 30% de talleres tenían señales de dumping; hoy, 18%", se puede evaluar EFECTIVIDAD de políticas implementadas. Si el dumping baja después de aumentar comisión a informales, eso confirma que la política funciona.',
          posicion: 'bottom',
          destacar: true
        },
        {
          id: 'acciones-coordinadas-anti-dumping',
          selector: '.btn:contains("Programar campaña")',
          titulo: 'Planificar Acciones Anti-Dumping Coordinadas',
          descripcion: 'Desde el dashboard, la mesa tripartita puede lanzar campañas coordinadas: Estado aumenta inspecciones en zona X, sindicato ofrece asesoría sobre derechos laborales, cámaras dan incentivos para formalización. Respuesta ARTICULADA basada en datos compartidos.',
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
