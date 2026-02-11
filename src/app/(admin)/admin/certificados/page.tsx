'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SearchInput } from '@/components/ui/search-input'
import { DataTable } from '@/components/ui/data-table'
import { Modal } from '@/components/ui/modal'
import { Select } from '@/components/ui/select'
import { Eye, Trash2 } from 'lucide-react'

interface Cert {
  id: string
  codigo: string
  taller: { nombre: string }
  coleccion: { nombre: string }
  estado: string
  fechaEmision: string
  puntaje: number
}

const motivosRevocacion = ['Datos falsos', 'Solicitud del taller', 'Error administrativo', 'Otro']

export default function AdminCertificadosPage() {
  const [certs, setCerts] = useState<Cert[]>([])
  const [search, setSearch] = useState('')
  const [revocarModal, setRevocarModal] = useState<Cert | null>(null)
  const [verModal, setVerModal] = useState<Cert | null>(null)
  const [motivo, setMotivo] = useState('')

  useEffect(() => {
    fetch('/api/certificados').then(r => r.json()).then(setCerts).catch(() => {})
  }, [])

  const filtered = certs.filter(c =>
    c.codigo.toLowerCase().includes(search.toLowerCase()) ||
    c.taller.nombre.toLowerCase().includes(search.toLowerCase())
  )

  const columns = [
    { header: 'Código', accessor: 'codigo' as const, sortable: true },
    { header: 'Taller', accessor: (row: Cert) => row.taller.nombre },
    { header: 'Colección', accessor: (row: Cert) => row.coleccion.nombre },
    { header: 'Fecha', accessor: (row: Cert) => new Date(row.fechaEmision).toLocaleDateString('es-AR') },
    { header: 'Estado', accessor: (row: Cert) => (
      <Badge variant={row.estado === 'VALIDO' ? 'success' : 'warning'}>
        {row.estado === 'VALIDO' ? 'Válido' : 'Revocado'}
      </Badge>
    )},
    { header: 'Acciones', accessor: (row: Cert) => (
      <div className="flex gap-1">
        <button onClick={() => setVerModal(row)} className="p-1 hover:bg-gray-100 rounded"><Eye className="w-4 h-4 text-gray-500" /></button>
        {row.estado === 'VALIDO' && (
          <button onClick={() => setRevocarModal(row)} className="p-1 hover:bg-gray-100 rounded"><Trash2 className="w-4 h-4 text-gray-400" /></button>
        )}
      </div>
    )},
  ]

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      <h1 className="font-overpass font-bold text-2xl text-brand-blue mb-1">Certificados Emitidos</h1>
      <p className="text-gray-500 text-sm mb-6">Control de certificados de la plataforma</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="text-center"><p className="font-overpass font-bold text-2xl text-brand-blue">{certs.length}</p><p className="text-xs text-gray-500">Total</p></Card>
        <Card className="text-center"><p className="font-overpass font-bold text-2xl text-brand-blue">{certs.filter(c => { const d = new Date(c.fechaEmision); const now = new Date(); return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear() }).length}</p><p className="text-xs text-gray-500">Este mes</p></Card>
      </div>

      <SearchInput onChange={setSearch} placeholder="Buscar por taller o código..." className="mb-4" />

      <Card>
        <DataTable columns={columns} data={filtered} />
      </Card>

      <Modal open={!!revocarModal} onClose={() => setRevocarModal(null)} title="Revocar Certificado">
        {revocarModal && (
          <div className="space-y-4">
            <p className="text-sm">Taller: <strong>{revocarModal.taller.nombre}</strong></p>
            <p className="text-sm">Código: <strong>{revocarModal.codigo}</strong></p>
            <Select
              label="Motivo de revocación *"
              value={motivo}
              onChange={e => setMotivo(e.target.value)}
              options={motivosRevocacion.map(m => ({ value: m, label: m }))}
            />
            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setRevocarModal(null)}>Cancelar</Button>
              <Button onClick={() => { setRevocarModal(null); setMotivo('') }}>Revocar</Button>
            </div>
          </div>
        )}
      </Modal>

      <Modal open={!!verModal} onClose={() => setVerModal(null)} title="Vista Previa de Certificado" size="lg">
        {verModal && (
          <div className="text-center border rounded-lg p-8 bg-gray-50">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Plataforma Digital Textil</p>
            <p className="text-xs text-gray-400 mb-6">OIT Argentina - UNTREF</p>
            <h3 className="font-overpass font-bold text-xl text-brand-blue mb-4">CERTIFICADO</h3>
            <p className="text-sm text-gray-600 mb-1">Se certifica que</p>
            <p className="font-overpass font-bold text-lg">{verModal.taller.nombre}</p>
            <p className="text-sm text-gray-500 mb-4">ha completado satisfactoriamente el curso</p>
            <p className="font-overpass font-bold text-brand-blue mb-2">&ldquo;{verModal.coleccion.nombre}&rdquo;</p>
            <p className="text-sm text-gray-500 mb-4">con una calificación de {verModal.puntaje}%</p>
            <p className="text-xs text-gray-400">Código: {verModal.codigo}</p>
            <div className="flex justify-center gap-2 mt-6">
              <Button size="sm" variant="secondary">Descargar PDF</Button>
              <Button size="sm" variant="secondary" onClick={() => setVerModal(null)}>Cerrar</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
