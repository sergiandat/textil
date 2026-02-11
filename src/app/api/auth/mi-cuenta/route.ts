import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import bcrypt from 'bcryptjs'

export async function PUT(req: NextRequest) {
  try {
    const session = await auth()
    if (!session?.user?.id) return NextResponse.json({ error: 'No autenticado' }, { status: 401 })

    const body = await req.json()
    const updateData: Record<string, unknown> = {}

    if (body.name) updateData.name = body.name
    if (body.phone) updateData.phone = body.phone

    if (body.newPassword) {
      if (!body.currentPassword) {
        return NextResponse.json({ error: 'Contraseña actual requerida' }, { status: 400 })
      }
      const user = await prisma.user.findUnique({ where: { id: session.user.id } })
      if (!user?.password) return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 })

      const valid = await bcrypt.compare(body.currentPassword, user.password)
      if (!valid) return NextResponse.json({ error: 'Contraseña actual incorrecta' }, { status: 400 })

      updateData.password = await bcrypt.hash(body.newPassword, 10)
    }

    const updated = await prisma.user.update({
      where: { id: session.user.id },
      data: updateData,
      select: { id: true, email: true, name: true, phone: true, role: true },
    })

    return NextResponse.json(updated)
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar cuenta' }, { status: 500 })
  }
}
