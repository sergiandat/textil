# Plan de Desarrollo Técnico - MVP Plataforma Textil

> Cómo pasar del prototipo estático al sistema funcional
> Stack: Next.js 14+ | Supabase | Vercel

---

## Visión General

```
PROTOTIPO          FASE 1           FASE 2           FASE 3           FASE 4
ESTÁTICO           FUNDACIÓN        CORE             FEATURES         PRODUCCIÓN
───────────────────────────────────────────────────────────────────────────────
Componentes UI  →  DB + Auth     →  Perfiles      →  Academia      →  Deploy
Navegación      →  API base      →  Directorio    →  Certificados  →  Testing E2E
Datos mock      →  CRUD básico   →  Búsqueda      →  Dashboard     →  Piloto
                                                      Estado
───────────────────────────────────────────────────────────────────────────────
Semana 0           Semana 1-2       Semana 3-4       Semana 5-6       Semana 7-8
```

---

## FASE 0: PROTOTIPO ESTÁTICO

**Duración:** 2-3 semanas (paralelo a validación)
**Objetivo:** UI completa navegable, sin backend

### Estructura del Proyecto

```
/app
  /(auth)
    /login/page.tsx
    /registro/page.tsx
    /registro/cuit/page.tsx
    /registro/perfil/page.tsx
  /(taller)
    /taller/page.tsx              # Dashboard
    /taller/perfil/page.tsx
    /taller/formalizacion/page.tsx
    /taller/aprender/page.tsx
    /taller/aprender/[id]/page.tsx
  /(marca)
    /marca/page.tsx               # Dashboard
    /marca/directorio/page.tsx
    /marca/[id]/page.tsx          # Perfil público taller
  /(estado)
    /estado/page.tsx              # Dashboard
    /estado/exportar/page.tsx
  /(admin)
    /admin/...                    # 20+ pantallas admin
  /(public)
    /verificar/[codigo]/page.tsx
    /ayuda/page.tsx
/components
  /ui                             # Componentes base (Button, Input, Card)
  /layout                         # Header, Footer, Sidebar
  /domain                         # ChecklistItem, CourseCard, TallerCard
/lib
  /mock-data                      # JSON con datos de prueba
  /utils.ts
/types
  /index.ts                       # Tipos TypeScript
```

### Mock Data (JSON)

```typescript
// lib/mock-data/talleres.json
[
  {
    "id": "1",
    "razonSocial": "Taller María",
    "cuit": "20-12345678-9",
    "nivel": "plata",
    "procesos": ["confección", "corte"],
    "prendas": ["jeans", "pantalones"],
    "capacidadSemanal": 200,
    "ubicacion": "Florencio Varela",
    "certificados": ["calculo-costos", "monotributo"]
  }
]

// lib/mock-data/cursos.json
[
  {
    "id": "1",
    "titulo": "Cálculo de Costos",
    "descripcion": "Aprende a calcular el costo real de tus prendas",
    "duracionHoras": 4,
    "videos": 8,
    "categoria": "gestion"
  }
]
```

### Testing Fase 0

| Qué testear | Cómo | Criterio de éxito |
|-------------|------|-------------------|
| Navegación | Manual | Todas las rutas funcionan |
| Responsive | Chrome DevTools | Mobile + Desktop OK |
| Componentes | Visual | Match con wireframes |
| Flujos | Sesiones con usuarios | Entienden sin explicación |

### Entregable Fase 0

- [ ] 70 pantallas navegables en Vercel
- [ ] Componentes reutilizables documentados
- [ ] Mock data representativa
- [ ] Feedback de usuarios documentado

---

## FASE 1: FUNDACIÓN

**Duración:** 8 días (Semana 1-2)
**Objetivo:** Base de datos + Autenticación + Verificación CUIT

### Día 1-2: Setup Infraestructura

```bash
# Día 1: Proyecto base
npx create-next-app@latest textil-mvp --typescript --tailwind --app
cd textil-mvp
npm install @supabase/supabase-js @supabase/ssr
npm install next-auth @auth/supabase-adapter

# Día 2: Configuración
# - Crear proyecto en Supabase
# - Configurar variables de entorno
# - Deploy inicial a Vercel
# - CI/CD con GitHub Actions
```

**Archivos a crear:**

```
/.env.local
  NEXT_PUBLIC_SUPABASE_URL=
  NEXT_PUBLIC_SUPABASE_ANON_KEY=
  SUPABASE_SERVICE_ROLE_KEY=
  NEXTAUTH_SECRET=
  NEXTAUTH_URL=

/lib/supabase/client.ts      # Cliente browser
/lib/supabase/server.ts      # Cliente server
/lib/supabase/admin.ts       # Cliente admin (service role)
```

### Día 3-4: Base de Datos

**Orden de creación de tablas:**

```sql
-- 1. Tablas base (sin dependencias)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('taller', 'marca', 'estado', 'admin')),
  cuit VARCHAR(11),
  cuit_verified BOOLEAN DEFAULT FALSE,
  cuit_data JSONB,                    -- Respuesta completa de AFIP
  nivel VARCHAR(10) DEFAULT 'bronce' CHECK (nivel IN ('bronce', 'plata', 'oro')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Perfiles (dependen de users)
CREATE TABLE taller_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  razon_social VARCHAR(255),
  nombre_fantasia VARCHAR(255),
  telefono VARCHAR(20),
  whatsapp VARCHAR(20),
  direccion TEXT,
  localidad VARCHAR(100),
  provincia VARCHAR(100),
  procesos TEXT[],                    -- ['corte', 'confección', 'terminación']
  prendas TEXT[],                     -- ['jeans', 'remeras', 'camisas']
  maquinas JSONB,                     -- {rectas: 3, overlock: 2, collareta: 1}
  capacidad_semanal INTEGER,
  capacidad_datos JSONB,              -- Datos del wizard de perfil productivo
  foto_taller_url VARCHAR(500),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

CREATE TABLE marca_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  razon_social VARCHAR(255),
  nombre_fantasia VARCHAR(255),
  telefono VARCHAR(20),
  whatsapp VARCHAR(20),
  direccion TEXT,
  rubro VARCHAR(100),                 -- 'indumentaria', 'uniformes', etc.
  volumen_mensual VARCHAR(50),        -- '100-500', '500-1000', etc.
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- 3. Índices para búsqueda
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_nivel ON users(nivel);
CREATE INDEX idx_taller_procesos ON taller_profiles USING GIN(procesos);
CREATE INDEX idx_taller_prendas ON taller_profiles USING GIN(prendas);
CREATE INDEX idx_taller_localidad ON taller_profiles(localidad);

-- 4. RLS (Row Level Security)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE taller_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE marca_profiles ENABLE ROW LEVEL SECURITY;

-- Políticas básicas
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);
```

### Día 5-6: Autenticación

**Flujo de registro:**

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Email +   │────▶│  Verificar  │────▶│   Elegir    │────▶│  Completar  │
│  Password   │     │    CUIT     │     │    Rol      │     │   Perfil    │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
     Paso 1              Paso 2              Paso 3              Paso 4
```

**Implementación NextAuth:**

```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { supabaseAdmin } from '@/lib/supabase/admin'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Validar contra Supabase Auth
        const { data, error } = await supabaseAdmin.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password
        })
        if (error) return null
        return { id: data.user.id, email: data.user.email }
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      // Agregar datos del usuario a la sesión
      const { data: user } = await supabaseAdmin
        .from('users')
        .select('role, nivel, cuit_verified')
        .eq('id', token.sub)
        .single()

      session.user.id = token.sub
      session.user.role = user?.role
      session.user.nivel = user?.nivel
      session.user.cuitVerified = user?.cuit_verified
      return session
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
```

### Día 7-8: Verificación CUIT

**Integración AFIP SDK:**

```typescript
// lib/afip/verificar-cuit.ts
import Afip from '@afipsdk/afip.js'

const afip = new Afip({ CUIT: process.env.AFIP_CUIT })

export async function verificarCuit(cuit: string) {
  try {
    const persona = await afip.RegisterScopeFive.getTaxpayerDetails(cuit)

    return {
      success: true,
      data: {
        cuit: persona.idPersona,
        razonSocial: persona.nombre || persona.razonSocial,
        tipoPersona: persona.tipoPersona, // 'FISICA' | 'JURIDICA'
        estadoCuit: persona.estadoClave,  // 'ACTIVO' | 'INACTIVO'
        domicilioFiscal: persona.domicilioFiscal,
        actividades: persona.actividades,
        empleador: persona.empleador,     // true/false
        monotributo: persona.monotributo, // categoría o null
      }
    }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// Calcular nivel basado en datos AFIP
export function calcularNivel(datosAfip: any): 'bronce' | 'plata' | 'oro' {
  const checks = {
    cuitActivo: datosAfip.estadoCuit === 'ACTIVO',
    tieneActividad: datosAfip.actividades?.length > 0,
    esEmpleador: datosAfip.empleador === true,
    tieneMonotributo: datosAfip.monotributo !== null,
  }

  if (checks.cuitActivo && checks.esEmpleador) return 'oro'
  if (checks.cuitActivo && (checks.tieneMonotributo || checks.tieneActividad)) return 'plata'
  return 'bronce'
}
```

### Testing Fase 1

| Qué testear | Herramienta | Criterio |
|-------------|-------------|----------|
| Registro usuario | Jest + Supertest | Usuario creado en DB |
| Login/Logout | Playwright | Sesión persiste/limpia |
| Verificación CUIT | Jest (mock AFIP) | Nivel calculado correctamente |
| RLS Supabase | Supabase CLI | No acceso a datos ajenos |

```typescript
// __tests__/auth/registro.test.ts
describe('Registro de usuario', () => {
  it('crea usuario con email y password', async () => {
    const res = await fetch('/api/auth/registro', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@test.com',
        password: 'Test123!',
        role: 'taller'
      })
    })
    expect(res.status).toBe(201)

    // Verificar en DB
    const user = await supabase
      .from('users')
      .select()
      .eq('email', 'test@test.com')
      .single()
    expect(user.data).toBeTruthy()
  })

  it('rechaza CUIT inválido', async () => {
    const res = await fetch('/api/auth/verificar-cuit', {
      method: 'POST',
      body: JSON.stringify({ cuit: '12345678901' })
    })
    expect(res.status).toBe(400)
  })
})
```

### Entregable Fase 1

- [ ] Base de datos con esquema completo
- [ ] Registro y login funcional
- [ ] Verificación CUIT con AFIP
- [ ] Cálculo automático de nivel
- [ ] Tests unitarios pasando
- [ ] Deploy en Vercel (staging)

---

## FASE 2: CORE

**Duración:** 8 días (Semana 3-4)
**Objetivo:** Perfiles completos + Directorio + Búsqueda

### Día 9-12: Perfiles

**API Routes:**

```typescript
// app/api/taller/perfil/route.ts
export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'No auth' }, { status: 401 })

  const { data, error } = await supabase
    .from('taller_profiles')
    .select('*')
    .eq('user_id', session.user.id)
    .single()

  return NextResponse.json(data)
}

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({ error: 'No auth' }, { status: 401 })

  const body = await req.json()

  // Validación con Zod
  const validated = tallerProfileSchema.parse(body)

  const { data, error } = await supabase
    .from('taller_profiles')
    .upsert({
      user_id: session.user.id,
      ...validated,
      updated_at: new Date().toISOString()
    })
    .select()
    .single()

  return NextResponse.json(data)
}
```

**Validación con Zod:**

```typescript
// lib/validations/taller.ts
import { z } from 'zod'

export const tallerProfileSchema = z.object({
  razon_social: z.string().min(2).max(255),
  nombre_fantasia: z.string().max(255).optional(),
  telefono: z.string().regex(/^\d{10,}$/),
  whatsapp: z.string().regex(/^\d{10,}$/),
  direccion: z.string().min(5),
  localidad: z.string().min(2),
  provincia: z.string().min(2),
  procesos: z.array(z.enum(['corte', 'confeccion', 'terminacion', 'estampado', 'bordado'])),
  prendas: z.array(z.string()).min(1),
  maquinas: z.object({
    rectas: z.number().min(0),
    overlock: z.number().min(0),
    collareta: z.number().min(0),
    otras: z.number().min(0)
  }),
  capacidad_semanal: z.number().min(1)
})
```

### Día 13-16: Directorio y Búsqueda

**Base de datos - Búsqueda:**

```sql
-- Función de búsqueda full-text
CREATE OR REPLACE FUNCTION buscar_talleres(
  p_query TEXT DEFAULT NULL,
  p_procesos TEXT[] DEFAULT NULL,
  p_prendas TEXT[] DEFAULT NULL,
  p_localidad TEXT DEFAULT NULL,
  p_nivel TEXT DEFAULT NULL,
  p_limit INT DEFAULT 20,
  p_offset INT DEFAULT 0
)
RETURNS TABLE (
  id UUID,
  razon_social VARCHAR,
  nombre_fantasia VARCHAR,
  localidad VARCHAR,
  provincia VARCHAR,
  procesos TEXT[],
  prendas TEXT[],
  capacidad_semanal INT,
  nivel VARCHAR,
  foto_url VARCHAR,
  relevancia FLOAT
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    tp.id,
    tp.razon_social,
    tp.nombre_fantasia,
    tp.localidad,
    tp.provincia,
    tp.procesos,
    tp.prendas,
    tp.capacidad_semanal,
    u.nivel,
    tp.foto_taller_url,
    CASE
      WHEN p_query IS NOT NULL THEN
        ts_rank(
          to_tsvector('spanish', COALESCE(tp.razon_social, '') || ' ' || COALESCE(tp.nombre_fantasia, '')),
          plainto_tsquery('spanish', p_query)
        )
      ELSE 1.0
    END as relevancia
  FROM taller_profiles tp
  JOIN users u ON tp.user_id = u.id
  WHERE u.role = 'taller'
    AND u.cuit_verified = TRUE
    AND (p_query IS NULL OR
         to_tsvector('spanish', COALESCE(tp.razon_social, '') || ' ' || COALESCE(tp.nombre_fantasia, ''))
         @@ plainto_tsquery('spanish', p_query))
    AND (p_procesos IS NULL OR tp.procesos && p_procesos)
    AND (p_prendas IS NULL OR tp.prendas && p_prendas)
    AND (p_localidad IS NULL OR tp.localidad ILIKE '%' || p_localidad || '%')
    AND (p_nivel IS NULL OR u.nivel = p_nivel)
  ORDER BY
    CASE u.nivel WHEN 'oro' THEN 1 WHEN 'plata' THEN 2 ELSE 3 END,
    relevancia DESC
  LIMIT p_limit
  OFFSET p_offset;
END;
$$ LANGUAGE plpgsql;
```

**API de búsqueda:**

```typescript
// app/api/directorio/route.ts
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const params = {
    query: searchParams.get('q'),
    procesos: searchParams.get('procesos')?.split(','),
    prendas: searchParams.get('prendas')?.split(','),
    localidad: searchParams.get('localidad'),
    nivel: searchParams.get('nivel'),
    limit: parseInt(searchParams.get('limit') || '20'),
    offset: parseInt(searchParams.get('offset') || '0')
  }

  const { data, error } = await supabase
    .rpc('buscar_talleres', {
      p_query: params.query,
      p_procesos: params.procesos,
      p_prendas: params.prendas,
      p_localidad: params.localidad,
      p_nivel: params.nivel,
      p_limit: params.limit,
      p_offset: params.offset
    })

  return NextResponse.json(data)
}
```

**Componente de búsqueda:**

```typescript
// components/domain/DirectorioSearch.tsx
'use client'

import { useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function DirectorioSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const [filters, setFilters] = useState({
    q: searchParams.get('q') || '',
    procesos: searchParams.get('procesos')?.split(',') || [],
    localidad: searchParams.get('localidad') || '',
    nivel: searchParams.get('nivel') || ''
  })

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (filters.q) params.set('q', filters.q)
    if (filters.procesos.length) params.set('procesos', filters.procesos.join(','))
    if (filters.localidad) params.set('localidad', filters.localidad)
    if (filters.nivel) params.set('nivel', filters.nivel)

    startTransition(() => {
      router.push(`/marca/directorio?${params.toString()}`)
    })
  }

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Buscar talleres..."
        value={filters.q}
        onChange={(e) => setFilters(f => ({ ...f, q: e.target.value }))}
        className="w-full px-4 py-2 border rounded-lg"
      />

      {/* Filtros de proceso, localidad, nivel */}

      <button
        onClick={handleSearch}
        disabled={isPending}
        className="px-6 py-2 bg-brand-blue text-white rounded-lg"
      >
        {isPending ? 'Buscando...' : 'Buscar'}
      </button>
    </div>
  )
}
```

### Testing Fase 2

| Qué testear | Herramienta | Criterio |
|-------------|-------------|----------|
| CRUD Perfil | Jest | Create, Read, Update funcionan |
| Validaciones | Jest | Rechaza datos inválidos |
| Búsqueda | Playwright | Filtros devuelven resultados correctos |
| Perfil público | Playwright | Muestra datos sin auth |
| Performance | Lighthouse | >80 performance score |

```typescript
// __tests__/directorio/busqueda.test.ts
describe('Búsqueda de talleres', () => {
  beforeAll(async () => {
    // Seed de talleres de prueba
    await seedTalleres([
      { razon_social: 'Taller Norte', localidad: 'Tigre', procesos: ['corte'] },
      { razon_social: 'Taller Sur', localidad: 'Quilmes', procesos: ['confeccion'] },
    ])
  })

  it('filtra por localidad', async () => {
    const res = await fetch('/api/directorio?localidad=Tigre')
    const data = await res.json()
    expect(data.length).toBe(1)
    expect(data[0].razon_social).toBe('Taller Norte')
  })

  it('filtra por proceso', async () => {
    const res = await fetch('/api/directorio?procesos=confeccion')
    const data = await res.json()
    expect(data.length).toBe(1)
    expect(data[0].procesos).toContain('confeccion')
  })
})
```

### Entregable Fase 2

- [ ] Perfiles de taller y marca editables
- [ ] Perfil público de taller
- [ ] Directorio con búsqueda y filtros
- [ ] Paginación funcionando
- [ ] Tests de integración pasando

---

## FASE 3: FEATURES

**Duración:** 8 días (Semana 5-6)
**Objetivo:** Academia + Certificados + Dashboard Estado + Formalización

### Día 17-20: Academia (APRENDER)

**Modelo de datos:**

```sql
-- Colecciones de cursos
CREATE TABLE colecciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT,
  categoria VARCHAR(50),           -- 'gestion', 'formalizacion', 'tecnico'
  imagen_url VARCHAR(500),
  institucion VARCHAR(255),        -- 'OIT', 'INTI', etc.
  orden INT DEFAULT 0,
  activo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Videos dentro de colecciones
CREATE TABLE videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  coleccion_id UUID REFERENCES colecciones(id) ON DELETE CASCADE,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT,
  youtube_id VARCHAR(20),          -- ID del video de YouTube
  duracion_minutos INT,
  orden INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Progreso del usuario
CREATE TABLE progreso_colecciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  coleccion_id UUID REFERENCES colecciones(id) ON DELETE CASCADE,
  videos_vistos UUID[],            -- IDs de videos completados
  porcentaje INT DEFAULT 0,
  completado BOOLEAN DEFAULT FALSE,
  fecha_inicio TIMESTAMPTZ DEFAULT NOW(),
  fecha_completado TIMESTAMPTZ,
  UNIQUE(user_id, coleccion_id)
);

-- Evaluaciones (quiz)
CREATE TABLE evaluaciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  coleccion_id UUID REFERENCES colecciones(id) ON DELETE CASCADE,
  preguntas JSONB NOT NULL,        -- Array de {pregunta, opciones, correcta}
  puntaje_minimo INT DEFAULT 70,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Intentos de evaluación
CREATE TABLE intentos_evaluacion (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  evaluacion_id UUID REFERENCES evaluaciones(id) ON DELETE CASCADE,
  respuestas JSONB,
  puntaje INT,
  aprobado BOOLEAN,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Certificados
CREATE TABLE certificados (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  coleccion_id UUID REFERENCES colecciones(id) ON DELETE CASCADE,
  codigo_verificacion VARCHAR(20) UNIQUE,
  pdf_url VARCHAR(500),
  fecha_emision TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, coleccion_id)
);
```

**Generación de certificados:**

```typescript
// lib/certificados/generar-pdf.ts
import PDFDocument from 'pdfkit'

export async function generarCertificadoPDF(params: {
  nombreUsuario: string
  tituloColeccion: string
  institucion: string
  fechaEmision: Date
  codigoVerificacion: string
}): Promise<Buffer> {
  return new Promise((resolve) => {
    const doc = new PDFDocument({
      size: 'A4',
      layout: 'landscape'
    })

    const chunks: Buffer[] = []
    doc.on('data', (chunk) => chunks.push(chunk))
    doc.on('end', () => resolve(Buffer.concat(chunks)))

    // Diseño del certificado
    doc.rect(20, 20, doc.page.width - 40, doc.page.height - 40)
       .stroke('#1a27a8')

    doc.fontSize(32)
       .font('Helvetica-Bold')
       .fillColor('#1a27a8')
       .text('CERTIFICADO', { align: 'center' })

    doc.moveDown()
       .fontSize(16)
       .font('Helvetica')
       .fillColor('#333')
       .text('Se certifica que', { align: 'center' })

    doc.moveDown()
       .fontSize(24)
       .font('Helvetica-Bold')
       .text(params.nombreUsuario, { align: 'center' })

    doc.moveDown()
       .fontSize(16)
       .font('Helvetica')
       .text('ha completado satisfactoriamente el curso', { align: 'center' })

    doc.moveDown()
       .fontSize(20)
       .font('Helvetica-Bold')
       .fillColor('#1a27a8')
       .text(`"${params.tituloColeccion}"`, { align: 'center' })

    doc.moveDown(2)
       .fontSize(12)
       .font('Helvetica')
       .fillColor('#666')
       .text(`Avalado por: ${params.institucion}`, { align: 'center' })
       .text(`Fecha: ${params.fechaEmision.toLocaleDateString('es-AR')}`, { align: 'center' })

    // QR Code (usando qrcode library)
    doc.moveDown(2)
       .fontSize(10)
       .text(`Verificar en: textil.gob.ar/verificar/${params.codigoVerificacion}`, { align: 'center' })

    doc.end()
  })
}
```

### Día 21-22: Checklist Formalización

**Lógica de verificación:**

```typescript
// lib/formalizacion/calcular-checklist.ts

interface ChecklistItem {
  id: string
  titulo: string
  descripcion: string
  status: 'completed' | 'pending' | 'warning' | 'optional'
  accion?: string
}

export function calcularChecklist(user: User, tallerProfile: TallerProfile): ChecklistItem[] {
  const items: ChecklistItem[] = []

  // 1. CUIT válido
  items.push({
    id: 'cuit',
    titulo: 'CUIT válido',
    descripcion: user.cuit_verified
      ? `VERIFICADO CON ARCA - ${formatCuit(user.cuit)}`
      : 'Pendiente verificación',
    status: user.cuit_verified ? 'completed' : 'pending',
    accion: user.cuit_verified ? undefined : 'VERIFICAR'
  })

  // 2. Monotributo activo
  const tieneMonotributo = user.cuit_data?.monotributo !== null
  items.push({
    id: 'monotributo',
    titulo: 'Monotributo activo',
    descripcion: tieneMonotributo
      ? `Categoría ${user.cuit_data.monotributo}`
      : 'No registrado en ARCA',
    status: tieneMonotributo ? 'completed' : 'pending',
    accion: tieneMonotributo ? undefined : 'VER CÓMO'
  })

  // 3. Empleados registrados
  const esEmpleador = user.cuit_data?.empleador === true
  items.push({
    id: 'empleados',
    titulo: 'Empleados registrados',
    descripcion: esEmpleador
      ? 'Registrado como empleador en ARCA'
      : 'Sin empleados registrados',
    status: esEmpleador ? 'completed' : 'optional',
    accion: esEmpleador ? undefined : 'VER CÓMO'
  })

  // 4. Habilitación municipal (requiere upload manual)
  const tieneHabilitacion = tallerProfile.documentos?.habilitacion_municipal
  items.push({
    id: 'habilitacion',
    titulo: 'Habilitación municipal',
    descripcion: tieneHabilitacion
      ? `CERTIFICADO SUBIDO - VENCE: ${tieneHabilitacion.vencimiento}`
      : 'Pendiente de carga',
    status: tieneHabilitacion ? 'completed' : 'pending',
    accion: 'SUBIR'
  })

  // 5. Perfil completo
  const perfilCompleto = verificarPerfilCompleto(tallerProfile)
  items.push({
    id: 'perfil',
    titulo: 'Perfil productivo completo',
    descripcion: perfilCompleto
      ? 'Todos los datos cargados'
      : `Faltan: ${camposFaltantes(tallerProfile).join(', ')}`,
    status: perfilCompleto ? 'completed' : 'pending',
    accion: perfilCompleto ? undefined : 'COMPLETAR'
  })

  // 6. Curso de formalización
  const cursoCostos = user.certificados?.includes('calculo-costos')
  items.push({
    id: 'curso-costos',
    titulo: 'Curso: Cálculo de costos',
    descripcion: cursoCostos
      ? 'COMPLETADO - Certificado disponible'
      : 'Recomendado para nivel PLATA',
    status: cursoCostos ? 'completed' : 'optional',
    accion: cursoCostos ? 'VER CERTIFICADO' : 'INICIAR'
  })

  return items
}

export function calcularPorcentajeFomalizacion(checklist: ChecklistItem[]): number {
  const obligatorios = checklist.filter(i => i.status !== 'optional')
  const completados = obligatorios.filter(i => i.status === 'completed')
  return Math.round((completados.length / obligatorios.length) * 100)
}
```

### Día 23-24: Dashboard Estado

```typescript
// app/api/estado/metricas/route.ts

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (session?.user.role !== 'estado') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // Métricas agregadas
  const [
    totalTalleres,
    talleresPorNivel,
    talleresUltimaSemana,
    certificadosEmitidos,
    cursosPopulares
  ] = await Promise.all([
    supabase.from('users').select('id', { count: 'exact' }).eq('role', 'taller'),
    supabase.rpc('talleres_por_nivel'),
    supabase.from('users')
      .select('id', { count: 'exact' })
      .eq('role', 'taller')
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
    supabase.from('certificados').select('id', { count: 'exact' }),
    supabase.rpc('cursos_mas_completados', { limit: 5 })
  ])

  return NextResponse.json({
    talleres: {
      total: totalTalleres.count,
      porNivel: talleresPorNivel.data,
      nuevosUltimaSemana: talleresUltimaSemana.count
    },
    capacitacion: {
      certificadosEmitidos: certificadosEmitidos.count,
      cursosPopulares: cursosPopulares.data
    }
  })
}
```

### Testing Fase 3

| Qué testear | Herramienta | Criterio |
|-------------|-------------|----------|
| Progreso cursos | Jest | Se guarda correctamente |
| Evaluación | Jest | Calcula puntaje OK |
| Certificado PDF | Jest | Genera PDF válido |
| Verificación QR | Playwright | Código válido = datos correctos |
| Dashboard Estado | Playwright | Solo accesible por rol estado |

### Entregable Fase 3

- [ ] Catálogo de colecciones/cursos
- [ ] Sistema de progreso por video
- [ ] Evaluaciones con quiz
- [ ] Generación de certificados PDF
- [ ] Verificación pública de certificados
- [ ] Checklist de formalización dinámico
- [ ] Dashboard del Estado con métricas
- [ ] Tests E2E de flujos completos

---

## FASE 4: PRODUCCIÓN

**Duración:** 8 días (Semana 7-8)
**Objetivo:** Testing completo + Optimización + Deploy producción

### Día 25-28: Testing E2E

**Configuración Playwright:**

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'mobile', use: { ...devices['iPhone 12'] } }
  ]
})
```

**Tests E2E críticos:**

```typescript
// e2e/flujos/registro-taller.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Registro de taller', () => {
  test('flujo completo de registro', async ({ page }) => {
    // Paso 1: Email y password
    await page.goto('/registro')
    await page.fill('[name="email"]', 'nuevo@taller.com')
    await page.fill('[name="password"]', 'Test123!')
    await page.click('button[type="submit"]')

    // Paso 2: CUIT
    await expect(page).toHaveURL('/registro/cuit')
    await page.fill('[name="cuit"]', '20123456789')
    await page.click('button:has-text("Verificar")')

    // Esperar verificación AFIP
    await expect(page.locator('.nivel-badge')).toBeVisible({ timeout: 10000 })
    await page.click('button:has-text("Continuar")')

    // Paso 3: Elegir rol
    await expect(page).toHaveURL('/registro/perfil')
    await page.click('[data-role="taller"]')
    await page.fill('[name="whatsapp"]', '1155667788')
    await page.click('button:has-text("Finalizar")')

    // Verificar redirección a dashboard
    await expect(page).toHaveURL('/taller')
    await expect(page.locator('h1')).toContainText('Dashboard')
  })

  test('maneja CUIT inválido', async ({ page }) => {
    await page.goto('/registro/cuit')
    await page.fill('[name="cuit"]', '00000000000')
    await page.click('button:has-text("Verificar")')

    await expect(page.locator('.error-message')).toContainText('CUIT no encontrado')
  })
})

// e2e/flujos/buscar-taller.spec.ts
test.describe('Búsqueda de talleres', () => {
  test('marca encuentra taller por filtros', async ({ page }) => {
    // Login como marca
    await loginAs(page, 'marca@test.com')

    await page.goto('/marca/directorio')

    // Aplicar filtros
    await page.click('[data-filter="procesos"]')
    await page.click('[data-value="confeccion"]')
    await page.fill('[name="localidad"]', 'Quilmes')
    await page.click('button:has-text("Buscar")')

    // Verificar resultados
    await expect(page.locator('.taller-card')).toHaveCount({ min: 1 })

    // Abrir perfil
    await page.click('.taller-card >> nth=0')
    await expect(page).toHaveURL(/\/marca\/\w+/)
    await expect(page.locator('.perfil-taller')).toBeVisible()
  })
})

// e2e/flujos/completar-curso.spec.ts
test.describe('Completar curso', () => {
  test('taller completa curso y obtiene certificado', async ({ page }) => {
    await loginAs(page, 'taller@test.com')

    await page.goto('/taller/aprender')
    await page.click('.coleccion-card >> nth=0')

    // Marcar videos como vistos
    const videos = page.locator('.video-item')
    const count = await videos.count()
    for (let i = 0; i < count; i++) {
      await videos.nth(i).click()
      await page.waitForTimeout(1000) // Simular ver video
      await page.click('button:has-text("Marcar como visto")')
    }

    // Completar evaluación
    await page.click('button:has-text("Iniciar evaluación")')
    // ... responder preguntas
    await page.click('button:has-text("Enviar")')

    // Verificar certificado
    await expect(page.locator('.resultado-aprobado')).toBeVisible()
    await page.click('button:has-text("Descargar certificado")')

    // Verificar que el certificado aparece en el perfil
    await page.goto('/taller')
    await expect(page.locator('.certificados-lista')).toContainText('Cálculo de costos')
  })
})
```

### Día 29-30: Optimización

**Performance checklist:**

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
      { protocol: 'https', hostname: 'img.youtube.com' }
    ]
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
}

module.exports = nextConfig
```

**Lazy loading:**

```typescript
// Componentes pesados con lazy loading
const DirectorioMapa = dynamic(() => import('@/components/DirectorioMapa'), {
  loading: () => <MapaSkeleton />,
  ssr: false
})

const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
  loading: () => <Spinner />,
  ssr: false
})
```

**Caché de API:**

```typescript
// app/api/directorio/route.ts
export async function GET(req: Request) {
  // Caché de 5 minutos para búsquedas
  const cacheKey = `directorio:${req.url}`
  const cached = await redis.get(cacheKey)
  if (cached) return NextResponse.json(JSON.parse(cached))

  const data = await buscarTalleres(params)
  await redis.set(cacheKey, JSON.stringify(data), 'EX', 300)

  return NextResponse.json(data)
}
```

### Día 31-32: Seguridad

**Checklist de seguridad:**

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: Request) {
  const token = await getToken({ req })
  const path = req.nextUrl.pathname

  // Rutas protegidas por rol
  const roleRoutes = {
    '/taller': ['taller'],
    '/marca': ['marca'],
    '/estado': ['estado'],
    '/admin': ['admin']
  }

  for (const [route, roles] of Object.entries(roleRoutes)) {
    if (path.startsWith(route)) {
      if (!token) {
        return NextResponse.redirect(new URL('/login', req.url))
      }
      if (!roles.includes(token.role as string)) {
        return NextResponse.redirect(new URL('/403', req.url))
      }
    }
  }

  // Headers de seguridad
  const response = NextResponse.next()
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
```

**Rate limiting:**

```typescript
// lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'), // 10 requests per 10 seconds
  analytics: true
})

export async function checkRateLimit(identifier: string) {
  const { success, limit, remaining } = await ratelimit.limit(identifier)
  return { success, limit, remaining }
}
```

### Día 33-34: Deploy Producción

**Variables de entorno producción:**

```bash
# .env.production
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
NEXTAUTH_URL=https://textil.gob.ar
NEXTAUTH_SECRET=<generate with openssl rand -base64 32>
AFIP_CUIT=20123456789
AFIP_CERT=<base64 encoded cert>
AFIP_KEY=<base64 encoded key>
```

**GitHub Actions CI/CD:**

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npx playwright install --with-deps
      - run: npm run test:e2e

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### Día 35-36: Documentación y Handoff

**Documentación a entregar:**

```
/docs
  /api
    README.md           # Documentación de API
    openapi.yaml        # Especificación OpenAPI
  /deploy
    README.md           # Cómo hacer deploy
    env-vars.md         # Variables de entorno necesarias
  /testing
    README.md           # Cómo correr tests
    e2e-scenarios.md    # Escenarios de testing
  /user
    guia-taller.md      # Guía para talleres
    guia-marca.md       # Guía para marcas
    guia-admin.md       # Guía para administradores
```

### Entregable Fase 4

- [ ] Tests E2E pasando (>80% coverage de flujos críticos)
- [ ] Lighthouse score >80 en todas las páginas
- [ ] Seguridad validada (headers, rate limiting, RLS)
- [ ] Deploy producción funcionando
- [ ] CI/CD configurado
- [ ] Documentación completa
- [ ] Seed data para demo

---

## Resumen de Testing por Fase

| Fase | Unit Tests | Integration | E2E | Performance |
|------|------------|-------------|-----|-------------|
| 0: Prototipo | - | - | Manual | Lighthouse |
| 1: Fundación | Auth, CUIT | API routes | Login flow | - |
| 2: Core | Validaciones | Búsqueda | Directorio | Queries |
| 3: Features | PDF, Quiz | Progreso | Cursos completos | - |
| 4: Producción | - | - | Todos los flujos | Full audit |

---

## Checklist Final Pre-Piloto

```
□ Auth
  □ Registro funciona
  □ Login/logout funciona
  □ Recuperar contraseña funciona
  □ Verificación CUIT funciona

□ Perfiles
  □ Taller puede editar perfil
  □ Marca puede editar perfil
  □ Perfil público muestra datos correctos

□ Directorio
  □ Búsqueda por texto funciona
  □ Filtros funcionan
  □ Paginación funciona
  □ Orden por nivel funciona

□ Academia
  □ Catálogo muestra colecciones
  □ Videos se reproducen
  □ Progreso se guarda
  □ Evaluación funciona
  □ Certificado se genera
  □ Verificación QR funciona

□ Formalización
  □ Checklist muestra estado correcto
  □ Nivel se calcula correctamente
  □ Acciones llevan al lugar correcto

□ Estado
  □ Dashboard muestra métricas
  □ Solo accesible por rol estado

□ General
  □ Mobile responsive
  □ Performance >80
  □ Sin errores en consola
  □ Emails se envían
```

---

## Dependencias Críticas

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "@supabase/supabase-js": "^2.38.0",
    "@supabase/ssr": "^0.1.0",
    "next-auth": "^4.24.0",
    "@afipsdk/afip.js": "^1.0.0",
    "zod": "^3.22.0",
    "pdfkit": "^0.14.0",
    "qrcode": "^1.5.0",
    "lucide-react": "^0.294.0",
    "tailwindcss": "^3.3.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.40.0",
    "jest": "^29.7.0",
    "@testing-library/react": "^14.0.0",
    "typescript": "^5.2.0"
  }
}
```
