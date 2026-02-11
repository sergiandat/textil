import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')

  const [marcas, total] = await Promise.all([
    prisma.marca.findMany({
      include: { user: { select: { email: true, name: true } } },
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { rating: 'desc' },
    }),
    prisma.marca.count(),
  ])

  return NextResponse.json({ marcas, total, page, totalPages: Math.ceil(total / limit) })
}
