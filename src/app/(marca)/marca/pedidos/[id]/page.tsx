export const dynamic = 'force-dynamic'

import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect, notFound } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowLeft, Package, Clock, DollarSign, TrendingUp } from 'lucide-react'
import { AsignarTaller } from './asignar-taller'

const statusVariant: Record<string, 'default' | 'success' | 'warning'> = {
  BORRADOR: 'default',
  EN_EJECUCION: 'warning',
  ESPERANDO_ENTREGA: 'warning',
  COMPLETADO: 'success',
  CANCELADO: 'warning',
}

const statusLabel: Record<string, string> = {
  BORRADOR: 'Borrador',
  EN_EJECUCION: 'En ejecucion',
  ESPERANDO_ENTREGA: 'Esperando entrega',
  COMPLETADO: 'Completado',
  CANCELADO: 'Cancelado',
}

const ordenStatusLabel: Record<string, string> = {
  PENDIENTE: 'Pendiente',
  EN_EJECUCION: 'En ejecucion',
  COMPLETADO: 'Completado',
  CANCELADO: 'Cancelado',
}

const ordenStatusVariant: Record<string, 'default' | 'success' | 'warning'> = {
  PENDIENTE: 'default',
  EN_EJECUCION: 'warning',
  COMPLETADO: 'success',
  CANCELADO: 'warning',
}

export default async function MarcaPedidoDetallePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const session = await auth()
  if (!session?.user) redirect('/login')

  const marca = await prisma.marca.findFirst({
    where: { userId: session.user.id },
    select: { id: true },
  })

  if (!marca) redirect('/login')

  const pedido = await prisma.pedido.findUnique({
    where: { id },
    include: {
      ordenes: {
        include: {
          taller: { select: { nombre: true, nivel: true } },
        },
        orderBy: { createdAt: 'desc' },
      },
    },
  })

  if (!pedido || pedido.marcaId !== marca.id) notFound()

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link href="/marca/pedidos" className="inline-flex items-center gap-1 text-sm text-brand-blue hover:underline">
        <ArrowLeft className="w-4 h-4" /> Volver a pedidos
      </Link>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-overpass font-bold text-3xl text-brand-blue">{pedido.omId}</h1>
          <p className="text-gray-600 mt-1">{pedido.tipoPrenda} - {pedido.cantidad.toLocaleString()} unidades</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant={statusVariant[pedido.estado] || 'default'}>
            {statusLabel[pedido.estado] || pedido.estado}
          </Badge>
          {(pedido.estado === 'BORRADOR' || pedido.estado === 'EN_EJECUCION') && (
            <AsignarTaller pedidoId={pedido.id} />
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center p-4">
          <Package className="w-5 h-5 text-brand-blue mx-auto mb-1" />
          <p className="font-overpass font-bold text-lg">{pedido.cantidad.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Unidades</p>
        </Card>
        <Card className="text-center p-4">
          <TrendingUp className="w-5 h-5 text-green-600 mx-auto mb-1" />
          <p className="font-overpass font-bold text-lg">{pedido.progresoTotal}%</p>
          <p className="text-xs text-gray-500">Progreso</p>
        </Card>
        <Card className="text-center p-4">
          <DollarSign className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
          <p className="font-overpass font-bold text-lg">${pedido.montoTotal.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Monto total</p>
        </Card>
        <Card className="text-center p-4">
          <Clock className="w-5 h-5 text-blue-500 mx-auto mb-1" />
          <p className="font-overpass font-bold text-lg">
            {pedido.fechaObjetivo
              ? new Date(pedido.fechaObjetivo).toLocaleDateString('es-AR')
              : 'Sin fecha'}
          </p>
          <p className="text-xs text-gray-500">Fecha objetivo</p>
        </Card>
      </div>

      <div>
        <p className="text-sm text-gray-500 mb-1">
          Creado: {new Date(pedido.createdAt).toLocaleDateString('es-AR')}
        </p>
      </div>

      <Card title={`Ordenes de manufactura (${pedido.ordenes.length})`}>
        {pedido.ordenes.length === 0 ? (
          <p className="text-gray-600 text-sm py-4 text-center">
            Este pedido no tiene ordenes de manufactura asignadas.
          </p>
        ) : (
          <div className="space-y-3">
            {pedido.ordenes.map((orden) => (
              <div
                key={orden.id}
                className="border border-gray-100 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
              >
                <div className="space-y-1">
                  <p className="font-overpass font-semibold text-brand-blue">{orden.moId}</p>
                  <p className="text-sm text-gray-600">
                    Taller: {orden.taller.nombre} ({orden.taller.nivel})
                  </p>
                  <p className="text-sm text-gray-600">
                    Proceso: {orden.proceso} - ${orden.precio.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-medium">{orden.progreso}%</p>
                    <div className="w-20 h-2 bg-gray-200 rounded-full mt-1">
                      <div
                        className="h-2 bg-brand-blue rounded-full"
                        style={{ width: `${Math.min(orden.progreso, 100)}%` }}
                      />
                    </div>
                  </div>
                  <Badge variant={ordenStatusVariant[orden.estado] || 'default'}>
                    {ordenStatusLabel[orden.estado] || orden.estado}
                  </Badge>
                  {orden.estado === 'PENDIENTE' && (
                    <span className="text-xs text-yellow-600 font-medium">⏳ Esperando al taller</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
