'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { ArrowLeft, Trash2, GripVertical } from 'lucide-react'

const categorias = ['Formalización', 'Costos', 'Calidad', 'Plataforma', 'Otro']
const instituciones = ['OIT', 'INTI', 'FACTA', 'OIT + INTI', 'PDT']

export default function AdminEditarColeccionPage() {
  const params = useParams()
  const router = useRouter()
  const isNew = params.id === 'nueva'

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [institucion, setInstitucion] = useState('')
  const [categoria, setCategoria] = useState('')
  const [publicada, setPublicada] = useState(false)
  const [saving, setSaving] = useState(false)

  async function handleSave() {
    setSaving(true)
    try {
      const method = isNew ? 'POST' : 'PUT'
      const url = isNew ? '/api/colecciones' : `/api/colecciones/${params.id}`
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, descripcion, institucion, categoria, publicada }),
      })
      router.push('/admin/colecciones')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      <Link href="/admin/colecciones" className="inline-flex items-center gap-1 text-sm text-brand-blue hover:underline mb-4">
        <ArrowLeft className="w-4 h-4" /> Volver a colecciones
      </Link>

      <h1 className="font-overpass font-bold text-2xl text-brand-blue mb-6">
        {isNew ? 'Nueva Colección' : 'Editar Colección'}
      </h1>

      <Card className="mb-6">
        <h2 className="font-overpass font-bold text-brand-blue mb-4">Información Básica</h2>
        <div className="space-y-4">
          <Input label="Nombre de la colección *" value={nombre} onChange={e => setNombre(e.target.value)} />
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Descripción *</label>
            <textarea
              value={descripcion}
              onChange={e => setDescripcion(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
            />
          </div>
          <Select label="Institución que avala *" value={institucion} onChange={e => setInstitucion(e.target.value)}
            options={instituciones.map(i => ({ value: i, label: i }))} />
          <Select label="Categoría *" value={categoria} onChange={e => setCategoria(e.target.value)}
            options={categorias.map(c => ({ value: c, label: c }))} />
        </div>
      </Card>

      {!isNew && (
        <Card className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-overpass font-bold text-brand-blue">Videos de la Colección</h2>
            <Link href={`/admin/colecciones/${params.id}/videos`}>
              <Button size="sm" variant="secondary">Agregar Video</Button>
            </Link>
          </div>
          <div className="space-y-2">
            {[
              { titulo: '¿Qué es la formalización?', duracion: '8:32' },
              { titulo: 'CUIT y monotributo paso a paso', duracion: '12:15' },
              { titulo: 'Habilitación municipal', duracion: '9:45' },
            ].map((v, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-100">
                <GripVertical className="w-4 h-4 text-gray-300 cursor-grab" />
                <span className="text-sm flex-1">{i + 1}. {v.titulo}</span>
                <span className="text-xs text-gray-400">{v.duracion}</span>
                <button className="p-1 hover:bg-gray-100 rounded"><Trash2 className="w-4 h-4 text-gray-400" /></button>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Card className="mb-6">
        <h2 className="font-overpass font-bold text-brand-blue mb-3">Estado</h2>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" checked={!publicada} onChange={() => setPublicada(false)} className="text-brand-blue" />
            <span className="text-sm">Borrador</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" checked={publicada} onChange={() => setPublicada(true)} className="text-brand-blue" />
            <span className="text-sm">Publicada</span>
          </label>
        </div>
      </Card>

      <Button onClick={handleSave} disabled={saving} className="w-full">
        {saving ? 'Guardando...' : 'Guardar Cambios'}
      </Button>
    </div>
  )
}
