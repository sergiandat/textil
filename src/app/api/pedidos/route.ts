import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const estado = searchParams.get('estado')
    const marcaId = searchParams.get('marcaId')

    const where: Record<string, unknown> = {}
    if (estado) where.estado = estado
    if (marcaId) where.marcaId = marcaId

    const [pedidos, total] = await Promise.all([
      prisma.pedido.findMany({
        where,
        include: {
          marca: { select: { id: true, nombre: true } },
          _count: { select: { ordenes: true } },
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.pedido.count({ where }),
    ])

    return NextResponse.json({ pedidos, total, page, totalPages: Math.ceil(total / limit) })
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener pedidos' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body = await req.json()

    const pedido = await prisma.pedido.create({
      data: {
        omId: body.omId,
        marcaId: body.marcaId,
        tipoPrenda: body.tipoPrenda,
        cantidad: body.cantidad,
        fechaObjetivo: body.fechaObjetivo ? new Date(body.fechaObjetivo) : undefined,
        estado: body.estado,
        montoTotal: body.montoTotal,
      },
    })

    return NextResponse.json(pedido, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear el pedido' }, { status: 500 })
  }
}
