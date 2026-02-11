import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const categoria = searchParams.get('categoria')

    const where: Record<string, unknown> = {}
    if (categoria) where.categoria = categoria

    const [colecciones, total] = await Promise.all([
      prisma.coleccion.findMany({
        where,
        include: {
          _count: { select: { videos: true } },
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { orden: 'asc' },
      }),
      prisma.coleccion.count({ where }),
    ])

    return NextResponse.json({ colecciones, total, page, totalPages: Math.ceil(total / limit) })
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener colecciones' }, { status: 500 })
  }
}
