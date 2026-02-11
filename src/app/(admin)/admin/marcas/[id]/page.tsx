'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { StatCard } from '@/components/ui/stat-card'
import { ArrowLeft, MapPin, Mail, Phone } from 'lucide-react'

const mockMarca = {
  razonSocial: 'Comercial Textil SRL',
  cuit: '30-7777777-7',
  cuitVerificado: true,
  zona: 'Capital Federal',
  email: 'ana@comercial.com',
  whatsapp: '+54 9 11 9999-8888',
  activo: true,
  pedidos: 5,
  favoritos: 3,
  contactos: 12,
  actividad: [
    { fecha: '03/02/26', texto: 'Agregó a favoritos: Taller La Aguja' },
    { fecha: '01/02/26', texto: 'Visitó perfil: Corte Sur SRL' },
    { fecha: '28/01/26', texto: 'Contactó por WhatsApp: Coop. 8 de Marzo' },
    { fecha: '20/01/26', texto: 'Se registró en la plataforma' },
  ],
}

export default function AdminDetalleMarcaPage() {
  const params = useParams()
  const m = mockMarca

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <Link href="/admin/marcas" className="inline-flex items-center gap-1 text-sm text-brand-blue hover:underline mb-4">
        <ArrowLeft className="w-4 h-4" /> Volver a marcas
      </Link>

      <Card className="mb-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue font-overpass font-bold text-xl">
            {m.razonSocial.charAt(0)}
          </div>
          <div className="flex-1">
            <h1 className="font-overpass font-bold text-xl text-brand-blue">{m.razonSocial}</h1>
            <p className="text-sm text-gray-500">CUIT: {m.cuit} {m.cuitVerificado && <span className="text-green-500">✓</span>}</p>
            <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {m.zona}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {m.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {m.whatsapp}</span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Badge variant={m.activo ? 'success' : 'warning'}>{m.activo ? 'Activa' : 'Inactiva'}</Badge>
              <Badge variant={m.cuitVerificado ? 'success' : 'warning'}>{m.cuitVerificado ? 'Verificada' : 'Pendiente'}</Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-4 pt-4 border-t">
          <Button size="sm" variant="secondary">Editar datos</Button>
          <Button size="sm" variant="secondary">Suspender cuenta</Button>
          <Button size="sm" variant="secondary">Eliminar</Button>
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard value={String(m.pedidos)} label="Pedidos realizados" variant="success" />
        <StatCard value={String(m.favoritos)} label="Talleres favoritos" variant="muted" />
        <StatCard value={String(m.contactos)} label="Contactos iniciados" variant="warning" />
      </div>

      <Card className="mb-6">
        <h2 className="font-overpass font-bold text-brand-blue mb-3">Actividad Reciente</h2>
        <div className="space-y-2">
          {m.actividad.map((a, i) => (
            <p key={i} className="text-sm">
              <span className="text-gray-400">{a.fecha}</span> - {a.texto}
            </p>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="font-overpass font-bold text-brand-blue mb-3">Notas Internas</h2>
        <p className="text-sm text-gray-500">(Sin notas)</p>
      </Card>
    </div>
  )
}
