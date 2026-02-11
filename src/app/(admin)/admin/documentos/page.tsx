'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Modal } from '@/components/ui/modal'
import { Plus, Edit, GripVertical } from 'lucide-react'

interface TipoDocumento {
  id: number
  nombre: string
  descripcion: string
  nivel: string
  tipoValidacion: string
  obligatorio: boolean
  tieneVencimiento: boolean
  diasRecordatorio: number
}

const mockDocs: TipoDocumento[] = [
  { id: 1, nombre: 'CUIT válido', descripcion: 'Verificación automática vía ARCA', nivel: 'BRONCE', tipoValidacion: 'automatica', obligatorio: true, tieneVencimiento: false, diasRecordatorio: 0 },
  { id: 2, nombre: 'Monotributo activo', descripcion: 'Verificación automática vía ARCA', nivel: 'BRONCE', tipoValidacion: 'automatica', obligatorio: true, tieneVencimiento: false, diasRecordatorio: 0 },
  { id: 3, nombre: 'Habilitación municipal', descripcion: 'Certificado de habilitación municipal', nivel: 'PLATA', tipoValidacion: 'documento_pdf', obligatorio: true, tieneVencimiento: true, diasRecordatorio: 30 },
  { id: 4, nombre: 'ART vigente', descripcion: 'Documento de ART activa', nivel: 'PLATA', tipoValidacion: 'documento_pdf', obligatorio: true, tieneVencimiento: true, diasRecordatorio: 30 },
  { id: 5, nombre: 'Empleados registrados', descripcion: 'Declaración jurada + cantidad', nivel: 'PLATA', tipoValidacion: 'declaracion_jurada', obligatorio: true, tieneVencimiento: false, diasRecordatorio: 0 },
  { id: 6, nombre: 'Certificación de calidad', descripcion: 'Documento PDF opcional', nivel: 'ORO', tipoValidacion: 'documento_pdf', obligatorio: false, tieneVencimiento: false, diasRecordatorio: 0 },
  { id: 7, nombre: 'Capacitación completa', descripcion: 'Automático basado en certificados Academia', nivel: 'ORO', tipoValidacion: 'automatica_interna', obligatorio: true, tieneVencimiento: false, diasRecordatorio: 0 },
]

const nivelEmoji: Record<string, string> = { BRONCE: '🥉', PLATA: '🥈', ORO: '🥇' }

export default function AdminDocumentosPage() {
  const [docs, setDocs] = useState<TipoDocumento[]>(mockDocs)
  const [modalOpen, setModalOpen] = useState(false)
  const [editando, setEditando] = useState<TipoDocumento | null>(null)

  const byNivel = (nivel: string) => docs.filter(d => d.nivel === nivel)

  function handleEdit(d: TipoDocumento) {
    setEditando(d)
    setModalOpen(true)
  }

  function handleNew() {
    setEditando({ id: 0, nombre: '', descripcion: '', nivel: 'BRONCE', tipoValidacion: 'documento_pdf', obligatorio: true, tieneVencimiento: false, diasRecordatorio: 0 })
    setModalOpen(true)
  }

  function handleSave() {
    if (!editando) return
    if (editando.id) {
      setDocs(docs.map(d => d.id === editando.id ? editando : d))
    } else {
      setDocs([...docs, { ...editando, id: Date.now() }])
    }
    setModalOpen(false)
  }

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-overpass font-bold text-2xl text-brand-blue mb-1">Tipos de Documento</h1>
          <p className="text-gray-500 text-sm">Requisitos para el checklist de formalización</p>
        </div>
        <Button icon={<Plus className="w-4 h-4" />} onClick={handleNew}>Nuevo Requisito</Button>
      </div>

      {['BRONCE', 'PLATA', 'ORO'].map(nivel => (
        <div key={nivel} className="mb-6">
          <h2 className="font-overpass font-bold text-brand-blue mb-2">
            {nivelEmoji[nivel]} {nivel} {nivel === 'BRONCE' ? '(requisitos mínimos)' : nivel === 'PLATA' ? '(adicional a Bronce)' : '(adicional a Plata)'}
          </h2>
          <Card>
            <div className="divide-y divide-gray-100">
              {byNivel(nivel).map(doc => (
                <div key={doc.id} className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                  <GripVertical className="w-4 h-4 text-gray-300 cursor-grab shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{doc.nombre}</p>
                    <p className="text-xs text-gray-400">
                      Tipo: {doc.tipoValidacion.replace('_', ' ')} | {doc.obligatorio ? 'Obligatorio' : 'Opcional'}
                      {doc.tieneVencimiento && ` | Vencimiento (recordar ${doc.diasRecordatorio} días antes)`}
                    </p>
                  </div>
                  <button onClick={() => handleEdit(doc)} className="p-1 hover:bg-gray-100 rounded shrink-0">
                    <Edit className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      ))}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editando?.id ? 'Editar Requisito' : 'Nuevo Requisito'} size="lg">
        {editando && (
          <div className="space-y-4">
            <Input label="Nombre del requisito *" value={editando.nombre} onChange={e => setEditando({ ...editando, nombre: e.target.value })} />
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Descripción</label>
              <textarea value={editando.descripcion} onChange={e => setEditando({ ...editando, descripcion: e.target.value })} rows={2}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" />
            </div>
            <Select label="Nivel requerido *" value={editando.nivel} onChange={e => setEditando({ ...editando, nivel: e.target.value })}
              options={[{ value: 'BRONCE', label: 'Bronce' }, { value: 'PLATA', label: 'Plata' }, { value: 'ORO', label: 'Oro' }]} />
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de validación *</label>
              {[
                { value: 'automatica', label: 'Verificación automática (API externa)' },
                { value: 'documento_pdf', label: 'Documento PDF (aprobación manual)' },
                { value: 'declaracion_jurada', label: 'Declaración jurada' },
                { value: 'automatica_interna', label: 'Automático (basado en otros datos)' },
              ].map(opt => (
                <label key={opt.value} className="flex items-center gap-2 mb-1 cursor-pointer">
                  <input type="radio" name="tipoValidacion" checked={editando.tipoValidacion === opt.value}
                    onChange={() => setEditando({ ...editando, tipoValidacion: opt.value })} />
                  <span className="text-sm">{opt.label}</span>
                </label>
              ))}
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={editando.obligatorio} onChange={e => setEditando({ ...editando, obligatorio: e.target.checked })} className="rounded" />
              <span className="text-sm">Obligatorio para el nivel</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={editando.tieneVencimiento} onChange={e => setEditando({ ...editando, tieneVencimiento: e.target.checked })} className="rounded" />
              <span className="text-sm">El documento tiene fecha de vencimiento</span>
            </label>
            {editando.tieneVencimiento && (
              <Select label="Recordar antes de vencer" value={String(editando.diasRecordatorio)}
                onChange={e => setEditando({ ...editando, diasRecordatorio: Number(e.target.value) })}
                options={[{ value: '15', label: '15 días' }, { value: '30', label: '30 días' }, { value: '60', label: '60 días' }]} />
            )}
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
