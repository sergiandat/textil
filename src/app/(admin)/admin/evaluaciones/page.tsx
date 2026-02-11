'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Modal } from '@/components/ui/modal'
import { Plus, Edit, Trash2 } from 'lucide-react'

interface Pregunta {
  id: number
  texto: string
  opciones: { texto: string; correcta: boolean }[]
  explicacion: string
}

const mockPreguntas: Pregunta[] = [
  {
    id: 1, texto: '¿Qué significa CUIT?',
    opciones: [
      { texto: 'Código Universal de Identificación Tributaria', correcta: false },
      { texto: 'Clave Única de Identificación Tributaria', correcta: true },
      { texto: 'Código Único de Impuestos y Tributos', correcta: false },
    ],
    explicacion: 'CUIT significa "Clave Única de Identificación Tributaria".',
  },
  {
    id: 2, texto: '¿Cuál es el primer paso para formalizarse?',
    opciones: [
      { texto: 'Inscribirse en ARCA (ex-AFIP)', correcta: true },
      { texto: 'Conseguir habilitación municipal', correcta: false },
      { texto: 'Contratar ART', correcta: false },
    ],
    explicacion: 'El primer paso es inscribirse en ARCA.',
  },
]

export default function AdminEvaluacionesPage() {
  const [coleccion, setColeccion] = useState('formalizacion')
  const [preguntas, setPreguntas] = useState<Pregunta[]>(mockPreguntas)
  const [puntajeMinimo, setPuntajeMinimo] = useState('70')
  const [intentos, setIntentos] = useState('3')
  const [modalOpen, setModalOpen] = useState(false)
  const [editando, setEditando] = useState<Pregunta | null>(null)

  function handleEdit(p: Pregunta) {
    setEditando(p)
    setModalOpen(true)
  }

  function handleNew() {
    setEditando({ id: Date.now(), texto: '', opciones: [{ texto: '', correcta: true }, { texto: '', correcta: false }], explicacion: '' })
    setModalOpen(true)
  }

  function handleDelete(id: number) {
    setPreguntas(preguntas.filter(p => p.id !== id))
  }

  function handleSavePregunta() {
    if (!editando) return
    const exists = preguntas.find(p => p.id === editando.id)
    if (exists) {
      setPreguntas(preguntas.map(p => p.id === editando.id ? editando : p))
    } else {
      setPreguntas([...preguntas, editando])
    }
    setModalOpen(false)
    setEditando(null)
  }

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <h1 className="font-overpass font-bold text-2xl text-brand-blue mb-1">Evaluaciones</h1>
      <p className="text-gray-500 text-sm mb-6">Gestioná los quiz de cada colección</p>

      <Select
        label="Colección"
        value={coleccion}
        onChange={e => setColeccion(e.target.value)}
        options={[
          { value: 'formalizacion', label: 'Formalización básica' },
          { value: 'costos', label: 'Costos y presupuestación' },
          { value: 'calidad', label: 'Control de calidad' },
        ]}
        className="mb-6"
      />

      <Card className="mb-6">
        <h2 className="font-overpass font-bold text-brand-blue mb-3">Configuración</h2>
        <div className="grid grid-cols-2 gap-4">
          <Input label="Puntaje mínimo para aprobar (%)" type="number" value={puntajeMinimo} onChange={e => setPuntajeMinimo(e.target.value)} />
          <Input label="Intentos permitidos" type="number" value={intentos} onChange={e => setIntentos(e.target.value)} />
        </div>
      </Card>

      <div className="flex items-center justify-between mb-3">
        <h2 className="font-overpass font-bold text-lg text-brand-blue">Preguntas ({preguntas.length})</h2>
        <Button size="sm" icon={<Plus className="w-4 h-4" />} onClick={handleNew}>Agregar Pregunta</Button>
      </div>

      <Card>
        <div className="divide-y divide-gray-100">
          {preguntas.map((p, i) => (
            <div key={p.id} className="py-3 first:pt-0 last:pb-0">
              <div className="flex items-start justify-between">
                <p className="font-semibold text-sm">{i + 1}. {p.texto}</p>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => handleEdit(p)} className="p-1 hover:bg-gray-100 rounded"><Edit className="w-4 h-4 text-gray-500" /></button>
                  <button onClick={() => handleDelete(p.id)} className="p-1 hover:bg-gray-100 rounded"><Trash2 className="w-4 h-4 text-gray-400" /></button>
                </div>
              </div>
              <div className="mt-2 space-y-1 ml-4">
                {p.opciones.map((o, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm">
                    <span className={o.correcta ? 'text-green-600 font-semibold' : 'text-gray-500'}>
                      {o.correcta ? '●' : '○'} {o.texto} {o.correcta && '✓'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Button className="w-full mt-6">Guardar Evaluación</Button>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editando?.texto ? 'Editar Pregunta' : 'Nueva Pregunta'} size="lg">
        {editando && (
          <div className="space-y-4">
            <Input
              label="Pregunta *"
              value={editando.texto}
              onChange={e => setEditando({ ...editando, texto: e.target.value })}
            />
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Opciones de respuesta</label>
              {editando.opciones.map((o, i) => (
                <div key={i} className="flex items-center gap-2 mb-2">
                  <input
                    type="radio"
                    name="correcta"
                    checked={o.correcta}
                    onChange={() => setEditando({
                      ...editando,
                      opciones: editando.opciones.map((op, j) => ({ ...op, correcta: j === i })),
                    })}
                  />
                  <input
                    type="text"
                    value={o.texto}
                    onChange={e => setEditando({
                      ...editando,
                      opciones: editando.opciones.map((op, j) => j === i ? { ...op, texto: e.target.value } : op),
                    })}
                    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder={`Opción ${i + 1}`}
                  />
                </div>
              ))}
              {editando.opciones.length < 4 && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setEditando({
                    ...editando,
                    opciones: [...editando.opciones, { texto: '', correcta: false }],
                  })}
                >
                  + Agregar opción
                </Button>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Explicación</label>
              <textarea
                value={editando.explicacion}
                onChange={e => setEditando({ ...editando, explicacion: e.target.value })}
                rows={2}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancelar</Button>
              <Button onClick={handleSavePregunta}>Guardar</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
