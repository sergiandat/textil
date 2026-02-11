import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export default async function TallerDashboardPage() {
  const session = await auth()
  if (!session?.user) redirect('/login')

  const taller = await prisma.taller.findFirst({
    where: { userId: session.user.id },
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-overpass font-bold text-3xl text-brand-blue">
          Dashboard de Taller
        </h1>
        <p className="text-gray-600 mt-2">
          Bienvenido, {taller?.nombre || session.user.name}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-overpass font-semibold text-gray-700 text-sm uppercase mb-2">
            Nivel Actual
          </h3>
          <p className="text-3xl font-overpass font-bold text-brand-blue">
            {taller?.nivel || 'BRONCE'}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-overpass font-semibold text-gray-700 text-sm uppercase mb-2">
            Puntaje
          </h3>
          <p className="text-3xl font-overpass font-bold text-brand-red">
            {taller?.puntaje || 0}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-overpass font-semibold text-gray-700 text-sm uppercase mb-2">
            Capacidad Mensual
          </h3>
          <p className="text-3xl font-overpass font-bold text-green-600">
            {taller?.capacidadMensual || 0}
          </p>
          <p className="text-sm text-gray-500 mt-1">prendas</p>
        </div>
      </div>

      <div className="bg-brand-bg-light rounded-xl p-6 border-l-4 border-brand-blue">
        <h3 className="font-overpass font-bold text-brand-blue text-lg mb-2">
          🎉 ¡Bienvenido a la Plataforma Digital Textil!
        </h3>
        <p className="text-gray-700">
          Esta es tu página de inicio. Desde aquí podrás gestionar tu taller, 
          ver tu progreso de formalización, acceder a capacitaciones y más.
        </p>
      </div>
    </div>
  )
}
