import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export default async function DirectorioPage() {
  const session = await auth()
  if (!session?.user) redirect('/login')

  const talleres = await prisma.taller.findMany({
    take: 10,
    orderBy: { puntaje: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-overpass font-bold text-3xl text-brand-blue">
          Directorio de Talleres
        </h1>
        <p className="text-gray-600 mt-2">
          Encuentra talleres certificados para tu producción
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {talleres.map((taller) => (
          <div key={taller.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-overpass font-bold text-xl text-brand-blue mb-2">
                  {taller.nombre}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>📍 {taller.ubicacion}</span>
                  <span>⭐ Nivel: {taller.nivel}</span>
                  <span>📦 Capacidad: {taller.capacidadMensual} prendas/mes</span>
                </div>
                {taller.cuit && (
                  <p className="text-sm text-gray-500 mt-2">CUIT: {taller.cuit}</p>
                )}
              </div>
              <div className="text-right">
                <div className="text-2xl font-overpass font-bold text-brand-red">
                  {taller.puntaje}
                </div>
                <div className="text-xs text-gray-500 uppercase">Puntaje</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {talleres.length === 0 && (
        <div className="bg-gray-50 rounded-xl p-12 text-center">
          <p className="text-gray-500">No hay talleres registrados aún</p>
        </div>
      )}
    </div>
  )
}
