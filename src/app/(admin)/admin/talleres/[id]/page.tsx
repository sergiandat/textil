'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChecklistItem } from '@/components/ui/checklist-item'
import { ArrowLeft, MapPin, Mail, Phone } from 'lucide-react'

const mockTaller = {
  nombre: 'Corte Sur SRL',
  cuit: '30-12345678-9',
  zona: 'La Matanza, Buenos Aires',
  email: 'juan@cortesur.com.ar',
  whatsapp: '+54 9 11 1234-5678',
  nivel: 'ORO',
  activo: true,
  validaciones: [
    { title: 'CUIT válido', status: 'completed' as const, description: 'Verificado: 15/01/26' },
    { title: 'Monotributo activo', status: 'completed' as const, description: 'Verificado: 15/01/26' },
    { title: 'Habilitación municipal', status: 'completed' as const, description: 'Aprobado: 20/01/26' },
    { title: 'ART', status: 'pending' as const, description: 'Pendiente de revisión' },
    { title: 'Empleados registrados', status: 'completed' as const, description: '3 empleados verificados' },
  ],
  notas: [
    { fecha: '01/02/26', autor: 'Admin', texto: 'Llamé por teléfono, van a corregir ART' },
    { fecha: '20/01/26', autor: 'Sistema', texto: 'Documento habilitación aprobado' },
  ],
}

export default function AdminDetalleTallerPage() {
  const params = useParams()
  const [tab, setTab] = useState<'formalizacion' | 'documentos' | 'actividad'>('formalizacion')
  const [nota, setNota] = useState('')

  const t = mockTaller

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <Link href="/admin/talleres" className="inline-flex items-center gap-1 text-sm text-brand-blue hover:underline mb-4">
        <ArrowLeft className="w-4 h-4" /> Volver a talleres
      </Link>

      <Card className="mb-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue font-overpass font-bold text-xl">
            {t.nombre.charAt(0)}
          </div>
          <div className="flex-1">
            <h1 className="font-overpass font-bold text-xl text-brand-blue">{t.nombre}</h1>
            <p className="text-sm text-gray-500">CUIT: {t.cuit} <span className="text-green-500">✓</span></p>
            <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {t.zona}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {t.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {t.whatsapp}</span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <Badge variant="success">{t.nivel}</Badge>
              <Badge variant={t.activo ? 'success' : 'warning'}>{t.activo ? 'Activo' : 'Inactivo'}</Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-4 pt-4 border-t">
          <Button size="sm" variant="secondary">Editar datos</Button>
          <Button size="sm" variant="secondary">Suspender cuenta</Button>
          <Button size="sm" variant="secondary">Eliminar</Button>
        </div>
      </Card>

      <div className="flex gap-2 mb-4">
        {(['formalizacion', 'documentos', 'actividad'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              tab === t ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t === 'formalizacion' ? 'Formalización' : t === 'documentos' ? 'Documentos' : 'Actividad'}
          </button>
        ))}
      </div>

      {tab === 'formalizacion' && (
        <Card>
          <h2 className="font-overpass font-bold text-brand-blue mb-3">Checklist de Formalización</h2>
          {mockTaller.validaciones.map(v => (
            <ChecklistItem
              key={v.title}
              title={v.title}
              status={v.status}
              description={v.description}
              actionLabel={v.status === 'pending' ? 'Revisar' : undefined}
            />
          ))}
        </Card>
      )}

      {tab === 'documentos' && (
        <Card>
          <h2 className="font-overpass font-bold text-brand-blue mb-3">Documentos Subidos</h2>
          <p className="text-sm text-gray-500">Sin documentos por revisar</p>
        </Card>
      )}

      {tab === 'actividad' && (
        <Card>
          <h2 className="font-overpass font-bold text-brand-blue mb-3">Actividad Reciente</h2>
          <p className="text-sm text-gray-500">Sin actividad reciente</p>
        </Card>
      )}

      <Card className="mt-6">
        <h2 className="font-overpass font-bold text-brand-blue mb-3">Notas Internas</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={nota}
            onChange={e => setNota(e.target.value)}
            placeholder="Agregar nota..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
          />
          <Button size="sm" onClick={() => setNota('')}>Agregar</Button>
        </div>
        <div className="space-y-2">
          {mockTaller.notas.map((n, i) => (
            <p key={i} className="text-sm">
              <span className="text-gray-400">{n.fecha}</span> - <strong>{n.autor}:</strong> &ldquo;{n.texto}&rdquo;
            </p>
          ))}
        </div>
      </Card>
    </div>
  )
}
