export const dynamic = 'force-dynamic'

import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export default async function EstadoDashboardPage() {
  const session = await auth()
  if (!session?.user) redirect('/login')

  const stats = await prisma.$transaction([
    prisma.taller.count(),
    prisma.marca.count(),
    prisma.taller.count({ where: { nivel: 'BRONCE' } }),
    prisma.taller.count({ where: { nivel: 'PLATA' } }),
    prisma.taller.count({ where: { nivel: 'ORO' } }),
  ])

  const [totalTalleres, totalMarcas, bronce, plata, oro] = stats

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-overpass font-bold text-3xl text-brand-blue">
          Dashboard Estado
        </h1>
        <p className="text-gray-600 mt-2">
          Monitoreo y estadísticas de la Plataforma Digital Textil
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-overpass font-semibold text-gray-700 text-sm uppercase mb-2">
            Total Talleres
          </h3>
          <p className="text-4xl font-overpass font-bold text-brand-blue">
            {totalTalleres}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-overpass font-semibold text-gray-700 text-sm uppercase mb-2">
            Total Marcas
          </h3>
          <p className="text-4xl font-overpass font-bold text-brand-blue">
            {totalMarcas}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-overpass font-semibold text-gray-700 text-sm uppercase mb-2">
            Nivel Bronce
          </h3>
          <p className="text-4xl font-overpass font-bold text-orange-600">
            {bronce}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-overpass font-semibold text-gray-700 text-sm uppercase mb-2">
            Nivel Plata
          </h3>
          <p className="text-4xl font-overpass font-bold text-gray-400">
            {plata}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="font-overpass font-bold text-xl text-brand-blue mb-4">
          Distribución por Nivel
        </h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Bronce</span>
              <span className="font-semibold">{bronce}</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500" style={{ width: `${totalTalleres ? (bronce / totalTalleres) * 100 : 0}%` }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Plata</span>
              <span className="font-semibold">{plata}</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gray-400" style={{ width: `${totalTalleres ? (plata / totalTalleres) * 100 : 0}%` }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Oro</span>
              <span className="font-semibold">{oro}</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500" style={{ width: `${totalTalleres ? (oro / totalTalleres) * 100 : 0}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
