'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchInput } from '@/components/ui/search-input'
import { DataTable } from '@/components/ui/data-table'
import { Modal } from '@/components/ui/modal'
import { Plus, Edit } from 'lucide-react'

interface Proceso {
  id: string
  nombre: string
  descripcion: string
  emoji: string
  activo: boolean
  _count: number
}

const mockProcesos: Proceso[] = [
  { id: '1', nombre: 'Corte', descripcion: 'Corte de tela y moldes', emoji: '✂️', activo: true, _count: 18 },
  { id: '2', nombre: 'Confección', descripcion: 'Costura y armado', emoji: '🧵', activo: true, _count: 22 },
  { id: '3', nombre: 'Terminación', descripcion: 'Planchado, etiquetado', emoji: '👔', activo: true, _count: 15 },
  { id: '4', nombre: 'Estampado', descripcion: 'Serigrafía, sublimación', emoji: '🎨', activo: true, _count: 8 },
  { id: '5', nombre: 'Tejido', descripcion: 'Tejido de punto', emoji: '🧶', activo: true, _count: 5 },
  { id: '6', nombre: 'Bordado', descripcion: 'Bordado industrial', emoji: '👖', activo: true, _count: 6 },
]

export default function AdminProcesosPage() {
  const [procesos, setProcesos] = useState<Proceso[]>(mockProcesos)
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [editando, setEditando] = useState<Proceso | null>(null)

  const filtered = procesos.filter(p =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  )

  function handleEdit(p: Proceso) {
    setEditando(p)
    setModalOpen(true)
  }

  function handleNew() {
    setEditando({ id: '', nombre: '', descripcion: '', emoji: '', activo: true, _count: 0 })
    setModalOpen(true)
  }

  function handleSave() {
    if (!editando) return
    if (editando.id) {
      setProcesos(procesos.map(p => p.id === editando.id ? editando : p))
    } else {
      setProcesos([...procesos, { ...editando, id: String(Date.now()) }])
    }
    setModalOpen(false)
  }

  const columns = [
    { header: 'Proceso', accessor: (row: Proceso) => (
      <span>{row.emoji} {row.nombre}</span>
    )},
    { header: 'Descripción', accessor: 'descripcion' as const },
    { header: 'Talleres', accessor: (row: Proceso) => String(row._count), sortable: false },
    { header: 'Acciones', accessor: (row: Proceso) => (
      <button onClick={() => handleEdit(row)} className="p-1 hover:bg-gray-100 rounded"><Edit className="w-4 h-4 text-gray-500" /></button>
    )},
  ]

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-overpass font-bold text-2xl text-brand-blue mb-1">Procesos Productivos</h1>
          <p className="text-gray-500 text-sm">Tags que los talleres usan para indicar sus capacidades</p>
        </div>
        <Button icon={<Plus className="w-4 h-4" />} onClick={handleNew}>Nuevo Proceso</Button>
      </div>

      <SearchInput onChange={setSearch} placeholder="Buscar proceso..." className="mb-4" />

      <Card>
        <DataTable columns={columns} data={filtered} />
      </Card>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editando?.id ? 'Editar Proceso' : 'Nuevo Proceso'}>
        {editando && (
          <div className="space-y-4">
            <Input label="Nombre del proceso *" value={editando.nombre} onChange={e => setEditando({ ...editando, nombre: e.target.value })} />
            <Input label="Descripción *" value={editando.descripcion} onChange={e => setEditando({ ...editando, descripcion: e.target.value })} />
            <Input label="Emoji/Ícono" value={editando.emoji} onChange={e => setEditando({ ...editando, emoji: e.target.value })} />
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={editando.activo} onChange={e => setEditando({ ...editando, activo: e.target.checked })} className="rounded" />
              <span className="text-sm">Proceso activo (visible en el directorio)</span>
            </label>
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancelar</Button>
              <Button onClick={handleSave}>Guardar</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
