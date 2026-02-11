import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    const ordenes = await prisma.ordenManufactura.findMany({
      where: { pedidoId: id },
      include: {
        taller: { select: { id: true, nombre: true, nivel: true } },
        hitos: true,
      },
      orderBy: { createdAt: 'asc' },
    })

    return NextResponse.json(ordenes)
  } catch (error) {
    console.error('Error en GET /api/pedidos/[id]/ordenes:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await req.json()

    const orden = await prisma.ordenManufactura.create({
      data: {
        moId: body.moId,
        pedidoId: id,
        tallerId: body.tallerId,
        proceso: body.proceso,
        estado: body.estado,
        precio: body.precio,
        plazoDias: body.plazoDias,
      },
    })

    return NextResponse.json(orden, { status: 201 })
  } catch (error) {
    console.error('Error en POST /api/pedidos/[id]/ordenes:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
