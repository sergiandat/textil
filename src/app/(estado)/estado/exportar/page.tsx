'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { Download, FileText, CheckCircle } from 'lucide-react'

const reportes = [
  { value: 'resumen', label: 'Resumen ejecutivo', desc: 'Métricas principales, distribución por nivel' },
  { value: 'talleres', label: 'Listado completo de talleres', desc: 'Todos los talleres con datos de contacto y nivel' },
  { value: 'acompanamiento', label: 'Talleres que necesitan acompañamiento', desc: 'Registros incompletos, sin actividad, docs por vencer' },
  { value: 'capacitaciones', label: 'Reporte de capacitaciones', desc: 'Cursos completados, certificados emitidos' },
]

export default function ExportarReportePage() {
  const [tipo, setTipo] = useState('talleres')
  const [formato, setFormato] = useState('pdf')
  const [periodo, setPeriodo] = useState('ultimo-mes')
  const [generando, setGenerando] = useState(false)
  const [generado, setGenerado] = useState(false)

  function handleGenerar() {
    setGenerando(true)
    setGenerado(false)
    setTimeout(() => {
      setGenerando(false)
      setGenerado(true)
    }, 2000)
  }

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      <h1 className="font-overpass font-bold text-2xl text-brand-blue mb-1">Exportar Reporte</h1>
      <p className="text-gray-500 text-sm mb-6">Generá informes del estado del sector</p>

      <Card title="Tipo de Reporte" className="mb-6">
        <div className="space-y-3">
          {reportes.map(r => (
            <label key={r.value} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${tipo === r.value ? 'border-brand-blue bg-blue-50/50' : 'border-gray-200 hover:border-gray-300'}`}>
              <input type="radio" name="tipo" value={r.value} checked={tipo === r.value} onChange={() => setTipo(r.value)}
                className="mt-1 accent-[var(--color-brand-blue)]" />
              <div>
                <p className="font-semibold text-sm">{r.label}</p>
                <p className="text-xs text-gray-500">{r.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </Card>

      <Card title="Opciones" className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select label="Formato" value={formato} onChange={e => setFormato(e.target.value)}
            options={[{ value: 'pdf', label: 'PDF' }, { value: 'excel', label: 'Excel (.xlsx)' }, { value: 'csv', label: 'CSV' }]} />
          <Select label="Período" value={periodo} onChange={e => setPeriodo(e.target.value)}
            options={[{ value: 'ultimo-mes', label: 'Último mes' }, { value: 'ultimo-trimestre', label: 'Último trimestre' }, { value: 'ultimo-anio', label: 'Último año' }, { value: 'todo', label: 'Todo el historial' }]} />
        </div>
      </Card>

      {generado && (
        <Card className="mb-6 bg-green-50 border-green-200">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
            <div>
              <p className="font-semibold text-green-700">Reporte generado exitosamente</p>
              <p className="text-sm text-green-600">Hacé click en &quot;Descargar&quot; para obtener el archivo.</p>
            </div>
          </div>
        </Card>
      )}

      <div className="flex gap-3">
        <Button onClick={handleGenerar} loading={generando} icon={<FileText className="w-4 h-4" />} size="lg">
          Generar Reporte
        </Button>
        {generado && (
          <Button variant="success" icon={<Download className="w-4 h-4" />} size="lg">
            Descargar
          </Button>
        )}
      </div>
    </div>
  )
}
