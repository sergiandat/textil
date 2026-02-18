import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { aplicarNivel } from '@/lib/nivel'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const tallerId = searchParams.get('tallerId')

    const where: Record<string, unknown> = {}
    if (tallerId) where.tallerId = tallerId

    const [certificados, total] = await Promise.all([
      prisma.certificado.findMany({
        where,
        include: {
          taller: { select: { id: true, nombre: true } },
          coleccion: { select: { id: true, titulo: true } },
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { fecha: 'desc' },
      }),
      prisma.certificado.count({ where }),
    ])

    return NextResponse.json({ certificados, total, page, totalPages: Math.ceil(total / limit) })
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener certificados' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    const role = (session.user as { role?: string }).role
    if (role !== 'ADMIN') {
      return NextResponse.json({ error: 'Solo ADMIN puede emitir certificados' }, { status: 403 })
    }

    const body = await req.json()
    const certificado = await prisma.certificado.create({
      data: {
        tallerId: body.tallerId,
        coleccionId: body.coleccionId,
        codigo: body.codigo,
        calificacion: body.calificacion,
      },
    })

    // Recalculate taller level after new certificate
    await aplicarNivel(body.tallerId)

    return NextResponse.json(certificado, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear el certificado' }, { status: 500 })
  }
}
