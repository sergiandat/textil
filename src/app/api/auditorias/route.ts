import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const estado = searchParams.get('estado')
    const tallerId = searchParams.get('tallerId')

    const where: Record<string, unknown> = {}
    if (estado) where.estado = estado
    if (tallerId) where.tallerId = tallerId

    const [auditorias, total] = await Promise.all([
      prisma.auditoria.findMany({
        where,
        include: { taller: { select: { nombre: true, nivel: true } }, acciones: true },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.auditoria.count({ where }),
    ])

    return NextResponse.json({ auditorias, total, page, totalPages: Math.ceil(total / limit) })
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener auditorías' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const auditoria = await prisma.auditoria.create({
      data: {
        tallerId: body.tallerId,
        inspectorId: body.inspectorId,
        fecha: body.fecha ? new Date(body.fecha) : null,
        tipo: body.tipo || 'PRIMERA_VISITA',
        prioridad: body.prioridad,
      },
    })
    return NextResponse.json(auditoria, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear auditoría' }, { status: 500 })
  }
}
