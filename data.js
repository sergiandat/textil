/**
 * PLATAFORMA TEXTIL OIT - MVP v1
 * Datos mock para el prototipo
 */

// ============================================
// CATÁLOGO DE PRENDAS CON PROCESOS
// ============================================

const catalogoPrendas = [
  {
    id: "jean",
    nombre: "Jean/Vaquero",
    procesos: ["Corte", "Confección", "Lavandería", "Desgaste", "Acabado"],
    variantes: ["Clásico", "Roturas", "Stone wash", "Slim fit", "Regular fit"],
    precio_referencia: 1700
  },
  {
    id: "remera",
    nombre: "Remera",
    procesos: ["Corte", "Tintorería", "Confección", "Estampado", "Acabado"],
    variantes: ["Lisa", "Estampada", "Bordada", "Cuello redondo", "Cuello V"],
    precio_referencia: 900
  },
  {
    id: "camisa",
    nombre: "Camisa",
    procesos: ["Corte", "Confección", "Planchado", "Acabado"],
    variantes: ["Manga corta", "Manga larga", "Formal", "Sport"],
    precio_referencia: 1500
  },
  {
    id: "pantalon",
    nombre: "Pantalón",
    procesos: ["Corte", "Confección", "Planchado", "Acabado"],
    variantes: ["Vestir", "Casual", "Deportivo"],
    precio_referencia: 1600
  },
  {
    id: "vestido",
    nombre: "Vestido",
    procesos: ["Diseño de molde", "Corte", "Confección", "Acabado"],
    variantes: ["Casual", "Formal", "Fiesta"],
    precio_referencia: 2200
  },
  {
    id: "buzo",
    nombre: "Buzo/Sweater",
    procesos: ["Corte", "Confección", "Bordado", "Planchado", "Acabado"],
    variantes: ["Con capucha", "Sin capucha", "Cuello alto"],
    precio_referencia: 1800
  },
  {
    id: "ropa_deportiva",
    nombre: "Ropa Deportiva",
    procesos: ["Corte", "Sublimado", "Confección", "Acabado"],
    variantes: ["Remera técnica", "Calza", "Short", "Conjunto"],
    precio_referencia: 1200
  },
  {
    id: "campera",
    nombre: "Abrigo/Campera",
    procesos: ["Diseño de molde", "Corte", "Confección", "Colocación de cierres", "Acabado"],
    variantes: ["Liviana", "Pesada", "Impermeable"],
    precio_referencia: 3500
  },
  {
    id: "epp",
    nombre: "EPP (Equipamiento Protección Personal)",
    procesos: ["Corte", "Confección", "Control de calidad", "Acabado"],
    variantes: ["Chaleco", "Ambo", "Delantal", "Guantes"],
    precio_referencia: 2000
  }
];

// ============================================
// DICCIONARIO DE PROCESOS
// ============================================

const diccionarioProcesos = {
  "Corte": {
    descripcion: "Corte industrial de tela con cortadora vertical o CNC",
    maquinaria: ["Cortadora vertical", "Mesa de corte", "CNC (opcional)"],
    tiempo_estimado_500u: "2-3 días"
  },
  "Confección": {
    descripcion: "Costura y armado de la prenda",
    maquinaria: ["Máquina recta", "Overlock", "Botonera", "Ojaladora"],
    tiempo_estimado_500u: "5-7 días"
  },
  "Lavandería": {
    descripcion: "Lavado industrial (principalmente para jeans)",
    maquinaria: ["Lavadora industrial", "Secadero", "Centrífuga"],
    tiempo_estimado_500u: "2-3 días"
  },
  "Desgaste": {
    descripcion: "Efectos de desgaste/roturas en jeans",
    maquinaria: ["Lijadora", "Cepillo industrial", "Herramientas manuales"],
    tiempo_estimado_500u: "2-3 días"
  },
  "Acabado": {
    descripcion: "Control final, etiquetado, embolsado",
    maquinaria: ["Mesa de revisión", "Etiquetadora", "Máquina de embolsar"],
    tiempo_estimado_500u: "1-2 días"
  },
  "Tintorería": {
    descripcion: "Teñido de telas",
    maquinaria: ["Tina industrial", "Centrífuga", "Secadero"],
    tiempo_estimado_500u: "2-3 días"
  },
  "Estampado": {
    descripcion: "Estampado serigráfico o digital",
    maquinaria: ["Mesa de serigrafía", "Impresora textil", "Secadero"],
    tiempo_estimado_500u: "2-3 días"
  },
  "Bordado": {
    descripcion: "Bordado manual o industrial",
    maquinaria: ["Bordadora programable", "Bastidor", "Agujas"],
    tiempo_estimado_500u: "3-4 días"
  },
  "Planchado": {
    descripcion: "Planchado y vaporizado profesional",
    maquinaria: ["Plancha industrial", "Mesa de planchado", "Vaporizador"],
    tiempo_estimado_500u: "1-2 días"
  },
  "Diseño de molde": {
    descripcion: "Creación de molde/patrón para prenda compleja",
    maquinaria: ["Software CAD", "Impresora de moldes"],
    tiempo_estimado_500u: "2-3 días"
  },
  "Sublimado": {
    descripcion: "Estampado por calor para ropa deportiva",
    maquinaria: ["Plancha de sublimación", "Impresora"],
    tiempo_estimado_500u: "2-3 días"
  },
  "Colocación de cierres": {
    descripcion: "Instalación de cierres, botones, herrajes",
    maquinaria: ["Máquina de cierres", "Remachadora"],
    tiempo_estimado_500u: "1-2 días"
  },
  "Control de calidad": {
    descripcion: "Inspección rigurosa según normas",
    maquinaria: ["Mesa de inspección", "Instrumentos de medición"],
    tiempo_estimado_500u: "1 día"
  }
};

// ============================================
// TALLERES MOCK
// ============================================

const talleres = [
  {
    id: "tal_001",
    nombre: "Corte Sur SRL",
    nivel: "ORO",
    puntaje: 95,
    rating: 4.9,
    ubicacion: "Avellaneda, AMBA",
    zona: "Avellaneda (AMBA)",
    cuit: "30-71234567-8",
    verificado_afip: true,
    capacidades: ["Corte", "Confección"],
    especializacion: ["Jean", "Pantalón"],
    badges: [
      {label: "Formalidad", color: "emerald"},
      {label: "SST", color: "amber"},
      {label: "INTI", color: "slate"}
    ],
    pedidos_completados: 47,
    ontime_rate: 96,
    retrabajo_rate: 2,
    capacidad_mensual: 10000,
    trabajadores_registrados: 12,
    fundado: 2015,
    maquinaria: ["Cortadora Eastman vertical", "5x Juki recta", "3x Overlock", "Botonera", "Ojaladora", "Mesa de corte 3m"],
    certificaciones: ["INTI Confección Avanzada", "SST vigente hasta 15/08/2025"],
    precio_corte: 1700,
    precio_confeccion: 1700,
    compat_jean: 92,
    distancia_marca: 8.3
  },
  {
    id: "tal_002",
    nombre: "Coop. Costura 8 de Marzo",
    nivel: "PLATA",
    puntaje: 78,
    rating: 4.6,
    ubicacion: "La Matanza, AMBA",
    zona: "La Matanza (AMBA)",
    cuit: "30-78912345-6",
    verificado_afip: true,
    capacidades: ["Confección"],
    especializacion: ["Remera", "Camisa"],
    badges: [
      {label: "Formalidad", color: "emerald"},
      {label: "SST", color: "amber"},
      {label: "Cooperativa", color: "teal"}
    ],
    pedidos_completados: 23,
    ontime_rate: 92,
    retrabajo_rate: 3,
    capacidad_mensual: 5000,
    trabajadores_registrados: 8,
    fundado: 2018,
    maquinaria: ["4x Recta", "2x Overlock", "Botonera"],
    certificaciones: ["SST vigente hasta 20/10/2025"],
    precio_confeccion: 2050,
    compat_jean: 87,
    distancia_marca: 15.2
  },
  {
    id: "tal_003",
    nombre: "Lavandería BlueDenim",
    nivel: "ORO",
    puntaje: 91,
    rating: 4.8,
    ubicacion: "San Martín, AMBA",
    zona: "San Martín (AMBA)",
    cuit: "30-81234567-4",
    verificado_afip: true,
    capacidades: ["Lavandería", "Desgaste"],
    especializacion: ["Jean"],
    badges: [
      {label: "Formalidad", color: "emerald"},
      {label: "Ambiental", color: "teal"},
      {label: "INTI", color: "slate"}
    ],
    pedidos_completados: 38,
    ontime_rate: 95,
    retrabajo_rate: 1,
    capacidad_mensual: 8000,
    trabajadores_registrados: 10,
    fundado: 2012,
    maquinaria: ["Lavadora industrial 50kg", "2x Secadero industrial", "Centrífuga", "Lijadora", "Cepillo industrial"],
    certificaciones: ["INTI Lavado Stone Wash", "Certificación Ambiental vigente", "SST vigente hasta 30/12/2025"],
    precio_lavado: 1300,
    precio_desgaste: 800,
    compat_jean: 94,
    distancia_marca: 12.7
  },
  {
    id: "tal_004",
    nombre: "Acabados Premium",
    nivel: "ORO",
    puntaje: 88,
    rating: 4.7,
    ubicacion: "Quilmes, AMBA",
    zona: "Quilmes (AMBA)",
    cuit: "30-92345678-1",
    verificado_afip: true,
    capacidades: ["Acabado", "Control de calidad"],
    especializacion: ["Jean", "Camisa", "Pantalón"],
    badges: [
      {label: "Formalidad", color: "emerald"},
      {label: "Calidad Oro", color: "slate"}
    ],
    pedidos_completados: 52,
    ontime_rate: 98,
    retrabajo_rate: 1,
    capacidad_mensual: 12000,
    trabajadores_registrados: 6,
    fundado: 2010,
    maquinaria: ["Mesa de revisión iluminada", "Etiquetadora automática", "Máquina embolsar", "Plancha industrial"],
    certificaciones: ["Certificación Calidad Oro"],
    precio_acabado: 400,
    compat_jean: 89,
    distancia_marca: 18.5
  },
  {
    id: "tal_005",
    nombre: "Taller La Aguja",
    nivel: "BRONCE",
    puntaje: 52,
    rating: 4.2,
    ubicacion: "Florencio Varela, AMBA",
    zona: "Florencio Varela (AMBA)",
    cuit: "27-34567891-2",
    verificado_afip: true,
    capacidades: ["Corte", "Confección"],
    especializacion: ["Remera", "Buzo"],
    badges: [
      {label: "Formalidad", color: "emerald"}
    ],
    pedidos_completados: 8,
    ontime_rate: 85,
    retrabajo_rate: 5,
    capacidad_mensual: 2000,
    trabajadores_registrados: 3,
    fundado: 2022,
    maquinaria: ["2x Recta doméstica", "1x Overlock", "Tijeras industriales", "Mesa de corte"],
    certificaciones: ["En proceso de certificación SST"],
    precio_corte: 1400,
    precio_confeccion: 1800,
    compat_jean: 72,
    distancia_marca: 28.3
  },
  {
    id: "tal_006",
    nombre: "Textil Innova",
    nivel: "ORO",
    puntaje: 93,
    rating: 4.9,
    ubicacion: "Villa Martelli, AMBA",
    zona: "Villa Martelli (AMBA)",
    cuit: "30-65432109-8",
    verificado_afip: true,
    capacidades: ["Estampado", "Bordado", "Sublimado"],
    especializacion: ["Remera", "Ropa Deportiva"],
    badges: [
      {label: "Formalidad", color: "emerald"},
      {label: "Tecnología", color: "sky"},
      {label: "SST", color: "amber"}
    ],
    pedidos_completados: 64,
    ontime_rate: 97,
    retrabajo_rate: 1,
    capacidad_mensual: 6000,
    trabajadores_registrados: 9,
    fundado: 2008,
    maquinaria: ["Impresora textil digital Epson", "Mesa serigrafía 4 colores", "Bordadora programable 15 agujas", "Plancha sublimación", "Secadero infrarrojo"],
    certificaciones: ["INTI Estampado Digital", "SST vigente hasta 28/02/2026"],
    precio_estampado: 600,
    precio_bordado: 1200,
    precio_sublimado: 800,
    compat_remera: 96,
    distancia_marca: 10.2
  }
];

// ============================================
// MARCAS MOCK
// ============================================

const marcas = [
  {
    id: "marca_001",
    nombre: "Urbano Kids",
    cuit: "30-91234567-5",
    ubicacion: "Palermo, CABA",
    tipo: "Pequeña",
    pedidos_realizados: 12,
    rating: 4.8,
    volumen_mensual: 1500,
    frecuencia_compra: "Mensual",
    paga_bien: true
  },
  {
    id: "marca_002",
    nombre: "Marca Consciente",
    cuit: "30-82345678-9",
    ubicacion: "Villa Crespo, CABA",
    tipo: "Micro",
    pedidos_realizados: 8,
    rating: 4.9,
    volumen_mensual: 500,
    frecuencia_compra: "Bimensual",
    paga_bien: true
  }
];

// ============================================
// PEDIDOS ACTIVOS MOCK
// ============================================

const pedidosActivos = [
  {
    om_id: "OM-2025-00045",
    marca: "Urbano Kids",
    marca_id: "marca_001",
    tipo_prenda: "Jean",
    cantidad: 500,
    fecha_creacion: "2025-06-15",
    fecha_objetivo: "2025-07-30",
    estado: "en_ejecucion",
    progreso_total: 60,
    monto_total: 2006400,
    eslabones: [
      {
        mo_id: "MO-1",
        proceso: "Corte + Confección",
        taller: "Corte Sur SRL",
        taller_id: "tal_001",
        estado: "en_ejecucion",
        progreso: 75,
        precio: 850000,
        plazo_dias: 12,
        dias_transcurridos: 9,
        escrow_hitos: [
          {nombre: "Corte", porcentaje: 50, monto: 425000, estado: "pendiente"},
          {nombre: "Confección", porcentaje: 50, monto: 425000, estado: "pendiente"}
        ],
        evidencias: [
          {tanda: 1, estado: "aprobada", foto: true},
          {tanda: 2, estado: "observada", foto: true, comentario: "Verificar medida cintura"},
          {tanda: 3, estado: "aprobada", foto: true},
          {tanda: 4, estado: "en_proceso", foto: false}
        ],
        verificacion_sst: true,
        alerta_tiempo: "+8%"
      },
      {
        mo_id: "MO-2",
        proceso: "Lavado",
        taller: "Lavandería BlueDenim",
        taller_id: "tal_003",
        estado: "pendiente",
        progreso: 0,
        precio: 650000,
        plazo_dias: 3,
        escrow_hitos: [
          {nombre: "Lavado", porcentaje: 100, monto: 650000, estado: "bloqueado"}
        ]
      },
      {
        mo_id: "MO-3",
        proceso: "Desgaste",
        taller: "Lavandería BlueDenim",
        taller_id: "tal_003",
        estado: "pendiente",
        progreso: 0,
        precio: 400000,
        plazo_dias: 2,
        escrow_hitos: [
          {nombre: "Desgaste", porcentaje: 100, monto: 400000, estado: "bloqueado"}
        ]
      },
      {
        mo_id: "MO-4",
        proceso: "Acabado",
        taller: "Acabados Premium",
        taller_id: "tal_004",
        estado: "pendiente",
        progreso: 0,
        precio: 200000,
        plazo_dias: 2,
        escrow_hitos: [
          {nombre: "Acabado", porcentaje: 100, monto: 200000, estado: "bloqueado"}
        ]
      }
    ],
    logistica: [
      {origen: "Corte Sur SRL", destino: "Lavandería BlueDenim", distancia: 6.3, estado: "pendiente"},
      {origen: "Lavandería BlueDenim", destino: "Acabados Premium", distancia: 9.1, estado: "pendiente"}
    ]
  },
  {
    om_id: "OM-2025-00042",
    marca: "Marca Consciente",
    marca_id: "marca_002",
    tipo_prenda: "Remera",
    cantidad: 200,
    fecha_creacion: "2025-06-10",
    fecha_objetivo: "2025-07-20",
    estado: "esperando_entrega",
    progreso_total: 100,
    monto_total: 420000,
    eslabones: [
      {
        mo_id: "MO-6",
        proceso: "Confección + Estampado",
        taller: "Textil Innova",
        taller_id: "tal_006",
        estado: "completado",
        progreso: 100,
        precio: 420000,
        plazo_dias: 10,
        dias_transcurridos: 9,
        escrow_hitos: [
          {nombre: "Confección", porcentaje: 60, monto: 252000, estado: "liberado"},
          {nombre: "Estampado", porcentaje: 40, monto: 168000, estado: "liberado"}
        ]
      }
    ]
  }
];

// ============================================
// HISTORIAL PEDIDOS COMPLETADOS MOCK
// ============================================

const pedidosCompletados = [
  {
    om_id: "OM-2025-00038",
    marca: "Urbano Kids",
    tipo_prenda: "Camisa",
    cantidad: 300,
    fecha_completado: "2025-06-05",
    monto_total: 540000,
    rating_marca: 5
  },
  {
    om_id: "OM-2025-00031",
    marca: "Marca Consciente",
    tipo_prenda: "Buzo",
    cantidad: 150,
    fecha_completado: "2025-05-28",
    monto_total: 405000,
    rating_marca: 5
  }
];

// ============================================
// USUARIO ACTIVO (sesión)
// ============================================

let usuarioActivo = {
  tipo: "marca",
  id: "marca_001",
  nombre: "Urbano Kids",
  cuit: "30-91234567-5",
  rating: 4.8
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    catalogoPrendas,
    diccionarioProcesos,
    talleres,
    marcas,
    pedidosActivos,
    pedidosCompletados,
    usuarioActivo
  };
}
