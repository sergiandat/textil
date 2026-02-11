import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    const pedido = await prisma.pedido.findUnique({
      where: { id },
      include: {
        marca: { select: { id: true, nombre: true } },
        ordenes: {
          include: {
            taller: { select: { id: true, nombre: true } },
            hitos: true,
          },
          orderBy: { createdAt: 'asc' },
        },
      },
    })

    if (!pedido) {
      return NextResponse.json({ error: 'Pedido no encontrado' }, { status: 404 })
    }

    return NextResponse.json(pedido)
  } catch (error) {
    console.error('Error en GET /api/pedidos/[id]:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await auth()
    if (!session?.user) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { id } = await params
    const body = await req.json()

    const pedido = await prisma.pedido.update({
      where: { id },
      data: {
        estado: body.estado,
        progresoTotal: body.progresoTotal,
        fechaObjetivo: body.fechaObjetivo ? new Date(body.fechaObjetivo) : undefined,
        montoTotal: body.montoTotal,
      },
    })

    return NextResponse.json(pedido)
  } catch (error) {
    console.error('Error en PUT /api/pedidos/[id]:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
