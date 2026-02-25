'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { XCircle, PackageCheck } from 'lucide-react'

interface PedidoActionsProps {
  pedidoId: string
  estado: string
}

export function PedidoActions({ pedidoId, estado }: PedidoActionsProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function cambiarEstado(nuevoEstado: string) {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/pedidos/${pedidoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: nuevoEstado }),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error ?? 'Error al actualizar el pedido')
        return
      }
      router.refresh()
    } catch {
      setError('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {error && <p className="text-xs text-red-600 w-full">{error}</p>}

      {estado === 'EN_EJECUCION' && (
        <button
          onClick={() => cambiarEstado('ESPERANDO_ENTREGA')}
          disabled={loading}
          className="inline-flex items-center gap-1.5 rounded-lg font-overpass font-semibold bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-sm transition-colors disabled:opacity-50"
        >
          <PackageCheck className="w-4 h-4" />
          {loading ? 'Actualizando...' : 'Marcar listo para entrega'}
        </button>
      )}

      {estado === 'ESPERANDO_ENTREGA' && (
        <button
          onClick={() => cambiarEstado('COMPLETADO')}
          disabled={loading}
          className="inline-flex items-center gap-1.5 rounded-lg font-overpass font-semibold bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-sm transition-colors disabled:opacity-50"
        >
          <PackageCheck className="w-4 h-4" />
          {loading ? 'Actualizando...' : 'Confirmar entrega'}
        </button>
      )}

      {(estado === 'BORRADOR' || estado === 'EN_EJECUCION') && (
        <button
          onClick={() => {
            if (confirm('¿Estás seguro de cancelar este pedido?')) {
              cambiarEstado('CANCELADO')
            }
          }}
          disabled={loading}
          className="inline-flex items-center gap-1.5 rounded-lg font-overpass font-semibold bg-white border border-red-300 text-red-600 hover:bg-red-50 px-3 py-2 text-sm transition-colors disabled:opacity-50"
        >
          <XCircle className="w-4 h-4" />
          Cancelar pedido
        </button>
      )}
    </div>
  )
}
