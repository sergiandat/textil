import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    const taller = await prisma.taller.findUnique({
      where: { id },
      include: {
        user: { select: { email: true, phone: true, name: true } },
        procesos: { include: { proceso: true } },
        prendas: { include: { prenda: true } },
        maquinaria: true,
        certificaciones: true,
        validaciones: true,
      },
    })

    if (!taller) {
      return NextResponse.json({ error: 'Taller no encontrado' }, { status: 404 })
    }

    return NextResponse.json(taller)
  } catch (error) {
    console.error('Error en GET /api/talleres/[id]:', error)
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

    const taller = await prisma.taller.update({
      where: { id },
      data: {
        nombre: body.nombre,
        ubicacion: body.ubicacion,
        zona: body.zona,
        descripcion: body.descripcion,
        capacidadMensual: body.capacidadMensual,
        trabajadoresRegistrados: body.trabajadoresRegistrados,
        fundado: body.fundado,
      },
    })

    return NextResponse.json(taller)
  } catch (error) {
    console.error('Error en PUT /api/talleres/[id]:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
