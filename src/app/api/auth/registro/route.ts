import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password, name, nombre, phone, role } = body
    const taller = body.taller || body.tallerData
    const marca = body.marca || body.marcaData

    if (!email || !password || !role) {
      return NextResponse.json({ error: 'Email, contraseña y rol son requeridos' }, { status: 400 })
    }
    if (password.length < 6) {
      return NextResponse.json({ error: 'La contraseña debe tener al menos 6 caracteres' }, { status: 400 })
    }
    if (!['TALLER', 'MARCA'].includes(role)) {
      return NextResponse.json({ error: 'Rol inválido' }, { status: 400 })
    }

    const exists = await prisma.user.findUnique({ where: { email } })
    if (exists) return NextResponse.json({ error: 'El email ya está registrado' }, { status: 409 })

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || nombre,
        phone,
        role,
        ...(role === 'TALLER' && taller
          ? { taller: { create: { nombre: taller.nombre, cuit: taller.cuit, ubicacion: taller.ubicacion, capacidadMensual: taller.capacidadMensual || 0 } } }
          : {}),
        ...(role === 'MARCA' && marca
          ? { marca: { create: { nombre: marca.nombre, cuit: marca.cuit, ubicacion: marca.ubicacion, tipo: marca.tipo } } }
          : {}),
      },
      select: { id: true, email: true, name: true, role: true },
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error al registrar usuario' }, { status: 500 })
  }
}
