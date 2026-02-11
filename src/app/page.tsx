import Link from 'next/link'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Shield, Search, BookOpen, BarChart3 } from 'lucide-react'

export default async function Home() {
  const session = await auth()

  // Si está logueado, redirigir según rol
  if (session?.user) {
    const role = (session.user as { role?: string }).role
    switch (role) {
      case 'TALLER': redirect('/taller')
      case 'MARCA': redirect('/marca/directorio')
      case 'ESTADO': redirect('/estado')
      case 'ADMIN': redirect('/admin')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-brand-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <span className="font-overpass font-bold text-brand-blue text-sm">PDT</span>
            </div>
            <span className="font-overpass font-bold text-lg">Plataforma Digital Textil</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/directorio" className="text-sm hover:text-blue-200 transition-colors font-overpass hidden sm:inline">
              Directorio
            </Link>
            <Link href="/login" className="text-sm bg-white text-brand-blue px-4 py-2 rounded-lg font-overpass font-semibold hover:bg-blue-50 transition-colors">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-brand-bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="font-overpass font-bold text-3xl sm:text-5xl text-brand-blue mb-4 leading-tight">
            Conectamos talleres y marcas<br className="hidden sm:block" /> de forma transparente
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            La plataforma que formaliza, capacita y conecta a los talleres textiles con las marcas que buscan producción responsable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registro" className="bg-brand-blue text-white px-8 py-3 rounded-lg font-overpass font-semibold text-lg hover:bg-blue-800 transition-colors">
              Registrate gratis
            </Link>
            <Link href="/directorio" className="border-2 border-brand-blue text-brand-blue px-8 py-3 rounded-lg font-overpass font-semibold text-lg hover:bg-brand-blue hover:text-white transition-colors">
              Ver directorio
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-overpass font-bold text-2xl text-center text-gray-900 mb-12">
          Una plataforma, cuatro roles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'Talleres', desc: 'Formalizate, capacitate y accedé a pedidos de marcas verificadas.' },
            { icon: Search, title: 'Marcas', desc: 'Encontrá talleres certificados y gestioná tus pedidos de producción.' },
            { icon: BarChart3, title: 'Estado', desc: 'Monitoreá indicadores y exportá reportes del sector textil.' },
            { icon: BookOpen, title: 'Academia', desc: 'Cursos gratuitos para mejorar procesos y obtener certificaciones.' },
          ].map((f) => (
            <div key={f.title} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 rounded-full bg-brand-bg-light flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-overpass font-bold text-lg text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="font-overpass font-bold text-2xl mb-4">Sumate a la Plataforma Digital Textil</h2>
          <p className="text-blue-200 mb-6">Registro gratuito para talleres y marcas.</p>
          <Link href="/registro" className="inline-block bg-white text-brand-blue px-8 py-3 rounded-lg font-overpass font-semibold hover:bg-blue-50 transition-colors">
            Crear cuenta
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span className="font-overpass font-semibold text-gray-700">PDT - Plataforma Digital Textil</span>
          <div className="flex gap-6">
            <Link href="/terminos" className="hover:text-brand-blue transition-colors">Términos</Link>
            <Link href="/privacidad" className="hover:text-brand-blue transition-colors">Privacidad</Link>
            <Link href="/ayuda" className="hover:text-brand-blue transition-colors">Ayuda</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
