'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function AdminAgregarVideoPage() {
  const params = useParams()
  const router = useRouter()
  const [url, setUrl] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [posicion, setPosicion] = useState('1')
  const [checks, setChecks] = useState({ preciso: false, audio: false, noPublicidad: false })
  const [saving, setSaving] = useState(false)

  function handleLoad() {
    // Mock: extract video info from URL
    setTitulo('Cómo inscribirte en monotributo')
    setLoaded(true)
  }

  async function handleSubmit() {
    setSaving(true)
    try {
      await fetch(`/api/colecciones/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ addVideo: { url, titulo, descripcion, posicion: Number(posicion) } }),
      })
      router.push(`/admin/colecciones/${params.id}`)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      <Link href={`/admin/colecciones/${params.id}`} className="inline-flex items-center gap-1 text-sm text-brand-blue hover:underline mb-4">
        <ArrowLeft className="w-4 h-4" /> Volver a colección
      </Link>

      <h1 className="font-overpass font-bold text-2xl text-brand-blue mb-6">Agregar Video</h1>

      <Card className="mb-6">
        <h2 className="font-overpass font-bold text-brand-blue mb-3">Paso 1: Pegar URL de YouTube</h2>
        <div className="flex gap-2">
          <Input placeholder="https://www.youtube.com/watch?v=..." value={url} onChange={e => setUrl(e.target.value)} className="flex-1" />
          <Button onClick={handleLoad} variant="secondary">Cargar</Button>
        </div>
      </Card>

      {loaded && (
        <>
          <Card className="mb-6">
            <h2 className="font-overpass font-bold text-brand-blue mb-3">Paso 2: Verificar Información</h2>
            <div className="flex gap-4">
              <div className="w-40 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 shrink-0">
                <ExternalLink className="w-6 h-6" />
              </div>
              <div className="text-sm space-y-1">
                <p className="font-semibold">{titulo}</p>
                <p className="text-gray-500">Canal: ContadorOnline</p>
                <p className="text-gray-500">Duración: 12:15 | Vistas: 125,432</p>
              </div>
            </div>
          </Card>

          <Card className="mb-6">
            <h2 className="font-overpass font-bold text-brand-blue mb-3">Paso 3: Personalizar</h2>
            <div className="space-y-4">
              <Input label="Título en la plataforma *" value={titulo} onChange={e => setTitulo(e.target.value)} />
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Descripción corta *</label>
                <textarea
                  value={descripcion}
                  onChange={e => setDescripcion(e.target.value)}
                  rows={2}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>
              <Input label="Posición en la colección" type="number" value={posicion} onChange={e => setPosicion(e.target.value)} />
            </div>
          </Card>

          <Card className="mb-6">
            <h2 className="font-overpass font-bold text-brand-blue mb-3">Verificación de Contenido</h2>
            <div className="space-y-2">
              {[
                { key: 'preciso' as const, label: 'Verifiqué que el contenido es preciso y actualizado' },
                { key: 'audio' as const, label: 'El audio es claro y comprensible' },
                { key: 'noPublicidad' as const, label: 'No contiene publicidad invasiva' },
              ].map(item => (
                <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checks[item.key]}
                    onChange={e => setChecks({ ...checks, [item.key]: e.target.checked })}
                    className="rounded"
                  />
                  <span className="text-sm">{item.label}</span>
                </label>
              ))}
            </div>
          </Card>

          <Button
            onClick={handleSubmit}
            disabled={saving || !checks.preciso || !checks.audio || !checks.noPublicidad}
            className="w-full"
          >
            {saving ? 'Agregando...' : 'Agregar a la Colección'}
          </Button>
        </>
      )}
    </div>
  )
}
