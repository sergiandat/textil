import { prisma } from '@/lib/prisma'

type NivelTaller = 'BRONCE' | 'PLATA' | 'ORO'

interface ResultadoNivel {
  nivel: NivelTaller
  puntaje: number
}

// Validaciones requeridas para cada nivel
const VALIDACIONES_PLATA = ['CUIT', 'HABILITACION_MUNICIPAL', 'ART']
const VALIDACIONES_ORO = [
  ...VALIDACIONES_PLATA,
  'EMPLEADOS_REGISTRADOS',
  'SEGURO_INCENDIO',
  'CONDICIONES_HIGIENE',
  'LIBRO_SUELDOS',
]

// Puntaje
const PTS_VERIFICADO_AFIP = 10
const PTS_POR_VALIDACION = 10
const PTS_POR_CERTIFICADO = 15
const PUNTAJE_MAX = 100

export async function calcularNivel(tallerId: string): Promise<ResultadoNivel> {
  const taller = await prisma.taller.findUnique({
    where: { id: tallerId },
    select: {
      verificadoAfip: true,
      validaciones: {
        where: { estado: 'COMPLETADO' },
        select: { tipo: true },
      },
      certificados: {
        where: { revocado: false },
        select: { id: true },
      },
    },
  })

  if (!taller) throw new Error(`Taller ${tallerId} no encontrado`)

  const tiposCompletados = new Set(taller.validaciones.map((v) => v.tipo))
  const numCertificados = taller.certificados.length

  // Calcular puntaje
  let puntaje = 0
  if (taller.verificadoAfip) puntaje += PTS_VERIFICADO_AFIP
  puntaje += taller.validaciones.length * PTS_POR_VALIDACION
  puntaje += numCertificados * PTS_POR_CERTIFICADO
  puntaje = Math.min(puntaje, PUNTAJE_MAX)

  // Determinar nivel
  let nivel: NivelTaller = 'BRONCE'

  const tienePlata =
    taller.verificadoAfip &&
    VALIDACIONES_PLATA.every((v) => tiposCompletados.has(v)) &&
    numCertificados >= 1

  if (tienePlata) {
    nivel = 'PLATA'

    const tieneOro = VALIDACIONES_ORO.every((v) => tiposCompletados.has(v))
    if (tieneOro) {
      nivel = 'ORO'
    }
  }

  return { nivel, puntaje }
}

export async function aplicarNivel(tallerId: string): Promise<ResultadoNivel> {
  const resultado = await calcularNivel(tallerId)

  await prisma.taller.update({
    where: { id: tallerId },
    data: {
      nivel: resultado.nivel,
      puntaje: resultado.puntaje,
    },
  })

  return resultado
}
