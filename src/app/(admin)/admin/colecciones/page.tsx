'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SearchInput } from '@/components/ui/search-input'
import { Plus } from 'lucide-react'

interface Coleccion {
  id: string
  nombre: string
  descripcion: string
  institucion: string
  publicada: boolean
  _count: { videos: number }
}

export default function AdminColeccionesPage() {
  const [colecciones, setColecciones] = useState<Coleccion[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/colecciones').then(r => r.json()).then(setColecciones).catch(() => {})
  }, [])

  const filtered = colecciones.filter(c =>
    c.nombre.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-overpass font-bold text-2xl text-brand-blue mb-1">Colecciones de Cursos</h1>
          <p className="text-gray-500 text-sm">Gestioná las colecciones de videos curados</p>
        </div>
        <Link href="/admin/colecciones/nueva">
          <Button icon={<Plus className="w-4 h-4" />}>Nueva Colección</Button>
        </Link>
      </div>

      <SearchInput
        onChange={setSearch}
        placeholder="Buscar colección..."
        className="mb-4"
      />

      <div className="space-y-3">
        {filtered.map(col => (
          <Card key={col.id}>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-overpass font-bold text-brand-blue">{col.nombre}</h2>
                <p className="text-sm text-gray-500 mt-1">{col.institucion} | {col._count.videos} videos</p>
                <div className="mt-2">
                  <Badge variant={col.publicada ? 'success' : 'warning'}>
                    {col.publicada ? 'Publicada' : 'Borrador'}
                  </Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={`/admin/colecciones/${col.id}`}>
                  <Button size="sm" variant="secondary">Editar</Button>
                </Link>
                <Link href={`/admin/colecciones/${col.id}/videos`}>
                  <Button size="sm" variant="secondary">Videos</Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">No se encontraron colecciones.</div>
        )}
      </div>
    </div>
  )
}
