'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { User, Phone, Lock, Save, CheckCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const profileSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  phone: z.string().optional(),
})

const passwordSchema = z.object({
  currentPassword: z.string().min(1, 'Ingresá tu contraseña actual'),
  newPassword: z.string().min(6, 'La nueva contraseña debe tener al menos 6 caracteres'),
  confirmPassword: z.string().min(1, 'Confirmá tu nueva contraseña'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
})

type ProfileData = z.infer<typeof profileSchema>
type PasswordData = z.infer<typeof passwordSchema>

export default function MiCuentaPage() {
  const { data: session } = useSession()
  const [msg, setMsg] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const profileForm = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
    values: { name: session?.user?.name || '', phone: '' },
  })

  const passwordForm = useForm<PasswordData>({
    resolver: zodResolver(passwordSchema),
  })

  async function onProfileSubmit(data: ProfileData) {
    setError(null)
    setMsg(null)
    setLoading(true)
    try {
      const res = await fetch('/api/auth/mi-cuenta', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json()
        setError(body.error || 'Error al actualizar')
      } else {
        setMsg('Perfil actualizado correctamente')
      }
    } catch {
      setError('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  async function onPasswordSubmit(data: PasswordData) {
    setError(null)
    setMsg(null)
    setLoading(true)
    try {
      const res = await fetch('/api/auth/mi-cuenta', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json()
        setError(body.error || 'Error al cambiar contraseña')
      } else {
        setMsg('Contraseña actualizada correctamente')
        passwordForm.reset()
      }
    } catch {
      setError('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="font-overpass font-bold text-2xl text-brand-blue mb-6">Mi Cuenta</h1>

      {msg && (
        <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700 flex items-center gap-2">
          <CheckCircle className="w-4 h-4" /> {msg}
        </div>
      )}
      {error && (
        <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <Card title="Información de la cuenta" className="mb-6">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
          <span className="text-sm text-gray-500">Email:</span>
          <span className="font-semibold">{session?.user?.email}</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-gray-500">Rol:</span>
          <Badge>{session?.user?.role || 'N/A'}</Badge>
        </div>
      </Card>

      <Card title="Editar perfil" className="mb-6">
        <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-4">
          <div className="relative">
            <Input
              label="Nombre"
              error={profileForm.formState.errors.name?.message}
              {...profileForm.register('name')}
            />
            <User className="absolute right-3 top-[38px] w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <Input
              label="Teléfono"
              error={profileForm.formState.errors.phone?.message}
              {...profileForm.register('phone')}
            />
            <Phone className="absolute right-3 top-[38px] w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <Button type="submit" loading={loading} icon={<Save className="w-4 h-4" />}>
            Guardar cambios
          </Button>
        </form>
      </Card>

      <Card title="Cambiar contraseña">
        <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
          <div className="relative">
            <Input
              label="Contraseña actual"
              type="password"
              error={passwordForm.formState.errors.currentPassword?.message}
              {...passwordForm.register('currentPassword')}
            />
            <Lock className="absolute right-3 top-[38px] w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <Input
              label="Nueva contraseña"
              type="password"
              error={passwordForm.formState.errors.newPassword?.message}
              {...passwordForm.register('newPassword')}
            />
            <Lock className="absolute right-3 top-[38px] w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <Input
              label="Confirmar nueva contraseña"
              type="password"
              error={passwordForm.formState.errors.confirmPassword?.message}
              {...passwordForm.register('confirmPassword')}
            />
            <Lock className="absolute right-3 top-[38px] w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <Button type="submit" loading={loading} icon={<Lock className="w-4 h-4" />}>
            Cambiar contraseña
          </Button>
        </form>
      </Card>
    </div>
  )
}
