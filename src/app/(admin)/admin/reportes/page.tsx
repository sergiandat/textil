'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { StatCard } from '@/components/ui/stat-card'
import { FileText, BarChart3, TrendingUp } from 'lucide-react'

export default function AdminReportesPage() {
  const [periodo, setPeriodo] = useState('ultimo_mes')
  const [generando, setGenerando] = useState<string | null>(null)

  function handleGenerar(tipo: string) {
    setGenerando(tipo)
    setTimeout(() => setGenerando(null), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <h1 className="font-overpass font-bold text-2xl text-brand-blue mb-1">Reportes y Estadísticas</h1>
      <p className="text-gray-500 text-sm mb-6">Métricas de la plataforma</p>

      <Select label="Período" value={periodo} onChange={e => setPeriodo(e.target.value)}
        options={[
          { value: 'ultimo_mes', label: 'Último mes' },
          { value: 'ultimo_trimestre', label: 'Último trimestre' },
          { value: 'ultimo_ano', label: 'Último año' },
          { value: 'todo', label: 'Todo' },
        ]}
        className="mb-6"
      />

      <h2 className="font-overpass font-bold text-lg text-brand-blue mb-3">Métricas Principales</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard value="24" label="Talleres (+4 mes)" variant="success" />
        <StatCard value="8" label="Marcas (+2 mes)" variant="success" />
        <StatCard value="45" label="Certificados (+12 mes)" variant="warning" />
        <StatCard value="156" label="Videos vistos/mes" variant="muted" />
      </div>

      <h2 className="font-overpass font-bold text-lg text-brand-blue mb-3">Distribución por Nivel</h2>
      <Card className="mb-6">
        <div className="space-y-3">
          {[
            { nivel: 'Oro', pct: 33, count: 8, color: 'bg-yellow-400' },
            { nivel: 'Plata', pct: 50, count: 12, color: 'bg-gray-400' },
            { nivel: 'Bronce', pct: 17, count: 4, color: 'bg-amber-600' },
          ].map(n => (
            <div key={n.nivel} className="flex items-center gap-3">
              <span className="text-sm font-semibold w-16">{n.nivel}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-4">
                <div className={`${n.color} h-4 rounded-full transition-all`} style={{ width: `${n.pct}%` }} />
              </div>
              <span className="text-sm text-gray-500 w-20 text-right">{n.pct}% ({n.count})</span>
            </div>
          ))}
        </div>
      </Card>

      <h2 className="font-overpass font-bold text-lg text-brand-blue mb-3">Registros por Mes</h2>
      <Card className="mb-6">
        <div className="flex items-end gap-3 h-40 px-4">
          {[
            { mes: 'Oct', talleres: 4, marcas: 2 },
            { mes: 'Nov', talleres: 3, marcas: 1 },
            { mes: 'Dic', talleres: 6, marcas: 3 },
            { mes: 'Ene', talleres: 5, marcas: 2 },
            { mes: 'Feb', talleres: 8, marcas: 4 },
          ].map(m => (
            <div key={m.mes} className="flex-1 flex flex-col items-center gap-1">
              <div className="flex gap-0.5 items-end w-full justify-center">
                <div className="bg-brand-blue rounded-t w-3" style={{ height: `${m.talleres * 12}px` }} />
                <div className="bg-brand-blue/40 rounded-t w-3" style={{ height: `${m.marcas * 12}px` }} />
              </div>
              <span className="text-xs text-gray-500">{m.mes}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 justify-center mt-4 text-xs text-gray-500">
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-brand-blue rounded" /> Talleres</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-brand-blue/40 rounded" /> Marcas</span>
        </div>
      </Card>

      <h2 className="font-overpass font-bold text-lg text-brand-blue mb-3">Generar Reportes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { key: 'resumen', icon: FileText, titulo: 'Resumen ejecutivo', formato: 'Generar PDF' },
          { key: 'talleres', icon: BarChart3, titulo: 'Talleres completo', formato: 'Generar Excel' },
          { key: 'capacitacion', icon: TrendingUp, titulo: 'Capacitación', formato: 'Generar PDF' },
        ].map(r => (
          <Card key={r.key} className="text-center">
            <r.icon className="w-8 h-8 text-brand-blue mx-auto mb-2" />
            <p className="font-semibold text-sm mb-3">{r.titulo}</p>
            <Button size="sm" onClick={() => handleGenerar(r.key)} disabled={generando === r.key}>
              {generando === r.key ? 'Generando...' : r.formato}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
