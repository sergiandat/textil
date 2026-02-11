'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Play, Check, Lock, MessageCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const videos = [
  { titulo: '¿Qué es la formalización?', duracion: '8:32', descripcion: 'Conceptos básicos y beneficios', visto: true },
  { titulo: 'CUIT y monotributo paso a paso', duracion: '12:15', descripcion: 'Cómo inscribirte en ARCA', visto: true },
  { titulo: 'Habilitación municipal', duracion: '9:45', descripcion: 'Requisitos y trámites', visto: true },
  { titulo: 'ART y seguro de trabajo', duracion: '7:20', descripcion: 'Protegé a tu equipo', visto: true },
  { titulo: 'Certificaciones opcionales (INTI)', duracion: '10:08', descripcion: 'Cómo destacarte con certificaciones', visto: false },
]

const preguntasFrecuentes = [
  '¿Cuánto cuesta formalizarse?',
  '¿Qué es ARCA?',
  '¿Cómo obtengo habilitación municipal?',
]

export default function AcademiaDetallePage() {
  const [videoActual, setVideoActual] = useState(4)
  const vistos = videos.filter(v => v.visto).length
  const progreso = Math.round((vistos / videos.length) * 100)
  const todosVistos = vistos === videos.length

  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <Link href="/taller/aprender" className="inline-flex items-center gap-1 text-sm text-brand-blue hover:underline mb-4">
        <ArrowLeft className="w-4 h-4" /> Volver a Academia
      </Link>

      <h1 className="font-overpass font-bold text-2xl text-brand-blue mb-1">Formalización básica</h1>
      <p className="text-sm text-gray-500 mb-6">Contenido curado por OIT + INTI</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="md:col-span-2">
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <Play className="w-12 h-12 mx-auto mb-2 opacity-80" />
              <p className="text-sm opacity-60">{videos[videoActual].titulo}</p>
            </div>
          </div>
        </div>
        <Card title="Tu Progreso">
          <p className="text-2xl font-overpass font-bold text-brand-blue">{vistos}/{videos.length} videos vistos</p>
          <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-brand-blue rounded-full" style={{ width: `${progreso}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-2">Tiempo restante: ~10 minutos</p>
        </Card>
      </div>

      <h2 className="font-overpass font-bold text-lg text-brand-blue mb-3">Contenido de la Colección</h2>
      <Card className="mb-6">
        <div className="divide-y divide-gray-100">
          {videos.map((v, i) => (
            <button key={i} type="button" onClick={() => setVideoActual(i)}
              className={`w-full flex items-center gap-3 py-3 px-2 text-left hover:bg-gray-50 transition-colors first:pt-0 last:pb-0 ${i === videoActual ? 'bg-blue-50/50' : ''}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${v.visto ? 'bg-green-100 text-green-600' : i === videoActual ? 'bg-brand-blue text-white' : 'bg-gray-100 text-gray-400'}`}>
                {v.visto ? <Check className="w-3.5 h-3.5" /> : <Play className="w-3 h-3" />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{i + 1}. {v.titulo}</p>
                <p className="text-xs text-gray-500">{v.descripcion}</p>
              </div>
              <span className="text-xs text-gray-400">{v.duracion}</span>
            </button>
          ))}
        </div>
      </Card>

      <Card title="Evaluación Final" className="mb-6">
        <p className="text-sm text-gray-600 mb-3">Completá el quiz para obtener tu certificado</p>
        {!todosVistos && (
          <div className="flex items-center gap-2 text-sm text-yellow-600 mb-3">
            <Lock className="w-4 h-4" /> Debés ver todos los videos antes de rendir
          </div>
        )}
        <Button disabled={!todosVistos}>Rendir Evaluación</Button>
      </Card>

      <Card title="Asistente">
        <p className="text-sm text-gray-600 mb-3">¿Tenés dudas sobre el contenido?</p>
        <div className="flex gap-2 mb-3">
          <input type="text" placeholder="Escribí tu pregunta..." className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue" />
          <Button size="sm" icon={<MessageCircle className="w-4 h-4" />}>Enviar</Button>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-gray-500 font-semibold">Preguntas frecuentes:</p>
          {preguntasFrecuentes.map(p => (
            <button key={p} type="button" className="block text-xs text-brand-blue hover:underline">• {p}</button>
          ))}
        </div>
      </Card>
    </div>
  )
}
