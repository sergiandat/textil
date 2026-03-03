# 05 - Arquitectura Técnica

## Stack Confirmado para MVP

**Equipo:** 2 desarrolladores no-programadores + Claude Max (desarrollo 100% asistido por IA)

```
Frontend + Backend: Next.js 14+ (App Router)
Base de Datos:      PostgreSQL via Supabase Pro ($25/mes)
Autenticación:      NextAuth.js
Email:              SendGrid
WhatsApp:           wa.me click-to-chat (sin API, links directos)
Deploy:             Vercel Pro ($20/mes)
IA Desarrollo:      Claude Max (pagado por devs, no OIT)
```

### Por qué este Stack
- **Un solo proyecto**: Frontend y API en el mismo repositorio
- **Un solo lenguaje**: TypeScript everywhere
- **Deploy simple**: Push a GitHub = deploy automático
- **Costo predecible**: $45/mes infraestructura (6 meses = $270 USD)
- **Claude lo conoce bien**: Stack mainstream = mejor asistencia IA
- **Sin blockchain en MVP**: Se agrega en Fase 1
- **pgvector incluido**: Supabase permite RAG para APRENDER si se necesita

---

## Arquitectura MVP

```
┌─────────────────────────────────────────────────────────┐
│                      USUARIOS                            │
│  Marca  │  Taller  │  Inspector                         │
└───────────────┬─────────────────────────────────────────┘
                │
┌───────────────┴─────────────────────────────────────────┐
│              FRONTEND (Next.js)                          │
│  - Landing + Auth                                        │
│  - Dashboard por rol                                     │
│  - Crear/ver pedidos                                     │
│  - Catálogo de cursos                                    │
│  - Perfil taller/marca                                   │
└───────────────┬─────────────────────────────────────────┘
                │ API Routes
┌───────────────┴─────────────────────────────────────────┐
│              BACKEND (Next.js API)                       │
│  - Auth (NextAuth)                                       │
│  - CRUD pedidos/contratos                                │
│  - CRUD cursos/certificados                              │
│  - Verificación AFIP                                     │
│  - Generación certificados PDF                            │
└───────────────┬─────────────────────────────────────────┘
                │
┌───────────────┴─────────────────────────────────────────┐
│              BASE DE DATOS (Supabase)                    │
│  PostgreSQL + Auth + Storage                             │
└───────────────┬─────────────────────────────────────────┘
                │
┌───────────────┴─────────────────────────────────────────┐
│              SERVICIOS EXTERNOS                          │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                      │
│  │  AFIP   │ │WhatsApp │ │  Email  │                      │
│  │  SDK    │ │  wa.me  │ │SendGrid │                      │
│  └─────────┘ └─────────┘ └─────────┘                      │
└─────────────────────────────────────────────────────────┘
```

---

## Opciones Alternativas (Referencia)

### Si se prefiere Python Backend

| Componente | Opción |
|------------|--------|
| Frontend | React + Vite |
| Backend | FastAPI (Python) |
| DB | PostgreSQL (Railway) |
| Deploy | Railway o Render |

*Útil si se quiere integrar scripts Python existentes (RAG).*

---

## Modelo de Datos MVP

### Esquema SQL

```sql
-- USUARIOS Y PERFILES
users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE,
  role ENUM('marca', 'taller', 'inspector'),
  cuit VARCHAR(11),
  cuit_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP
)

marca_profiles (
  user_id UUID REFERENCES users,
  razon_social VARCHAR,
  rubro VARCHAR,
  ubicacion VARCHAR,
  historial_pagos_score DECIMAL
)

taller_profiles (
  user_id UUID REFERENCES users,
  razon_social VARCHAR,
  capacidades TEXT[],
  ubicacion VARCHAR,
  nivel ENUM('bronce', 'plata', 'oro'),
  reputacion_score DECIMAL
)

-- TRANSACCIONES
pedidos (
  id UUID PRIMARY KEY,
  marca_id UUID REFERENCES users,
  estado ENUM('publicado', 'en_negociacion', 'acordado', 'completado'),
  tipo_prenda VARCHAR,
  cantidad INT,
  precio_max DECIMAL,
  plazo DATE,
  created_at TIMESTAMP
)

cotizaciones (
  id UUID PRIMARY KEY,
  pedido_id UUID REFERENCES pedidos,
  taller_id UUID REFERENCES users,
  precio DECIMAL,
  plazo DATE,
  mensaje TEXT,
  created_at TIMESTAMP
)

contratos (
  id UUID PRIMARY KEY,
  pedido_id UUID REFERENCES pedidos,
  taller_id UUID REFERENCES users,
  terminos TEXT,
  firma_marca TIMESTAMP,
  firma_taller TIMESTAMP,
  fecha_firma TIMESTAMP
)

-- APRENDIZAJE (Comunidad)
cursos (
  id UUID PRIMARY KEY,
  titulo VARCHAR,
  descripcion TEXT,
  duracion_horas INT,
  categoria VARCHAR,
  contenido_url VARCHAR,
  activo BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP
)

inscripciones (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users,
  curso_id UUID REFERENCES cursos,
  progreso INT DEFAULT 0,
  completado BOOLEAN DEFAULT FALSE,
  fecha_inicio TIMESTAMP,
  fecha_fin TIMESTAMP
)

certificados (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users,
  curso_id UUID REFERENCES cursos,
  codigo_verificacion VARCHAR UNIQUE,
  fecha_emision TIMESTAMP,
  pdf_url VARCHAR
)
```

### Nota sobre modelo de datos

> **IMPORTANTE:** Este esquema SQL es una referencia inicial. El modelo de datos real
> está en el schema Prisma del repo de código (`GIDs/Textil_mvp`).
> Ver DEC-010 en DECISIONES.md: el schema actual tiene 12 gaps identificados
> que deben resolverse antes de seguir implementando.
> Referencia actualizada: `docs/CHECKLIST.md` sección 5.

---

## Integraciones

Ver: [06_INTEGRACIONES.md](06_INTEGRACIONES.md)

---

## Decisiones Técnicas

### Confirmado ✅
- [x] Stack: Next.js + Supabase Pro + Vercel Pro
- [x] MVP sin blockchain (se agrega en Fase 1)
- [x] Autenticación: NextAuth.js
- [x] Deploy: Vercel Pro ($20/mes)
- [x] Base de datos: Supabase Pro ($25/mes)
- [x] WhatsApp: wa.me click-to-chat (sin API)
- [x] AFIP: Afip SDK para verificación CUIT
- [x] Desarrollo: 100% asistido por Claude Max

### Cambiado desde propuesta inicial
- [x] Pagos: **Fuera del MVP** (se gestionan por fuera de la plataforma)
- [x] ACORDAR: **Fuera del MVP** (acuerdos se gestionan por fuera)
- [x] WhatsApp: wa.me click-to-chat (sin Twilio, sin API)
- [x] COMPLIANCE renombrado a ACOMPAÑAR
- [x] APRENDER: Videos YouTube curados + evaluaciones + certificados

### Por definir en desarrollo
- [ ] Estrategia de testing (Vitest + Playwright recomendado)
- [ ] CI/CD en GitHub Actions

---

## Referencias

- Prototipo actual: `../prototipo/` o https://gbreard.github.io/textil/
- Stack propuesto en documentación: `../Plataforma/04_ESPECIFICACIONES_TECNICAS/`
