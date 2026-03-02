# Distribución de Trabajo - Sprint 2

Fecha: 2026-03-02
Equipo: Gerardo + Claude | Sergio + Claude
Duración: 2 semanas
Repo código: GIDs/Textil_mvp
Repo docs: GIDs/textil-mvp

---

## Principio: no pisarse

Cada persona trabaja en archivos DISTINTOS. Nunca dos personas tocando el mismo
archivo al mismo tiempo. Si hay dependencia, uno termina primero y el otro arranca.

---

## Perfil de cada uno

### Sergio
- Conoce el código porque lo escribió
- Domina el stack (Next.js, Prisma, NextAuth)
- Tiene contexto de todas las pantallas y APIs
- **Mejor para:** cambios en código existente, refactoring, pantallas que ya tienen base

### Gerardo
- Conoce la planificación y las decisiones
- Tiene toda la documentación organizada
- **Mejor para:** código nuevo desde cero, tests, pantallas nuevas que no existen todavía

---

## Semana 1: Schema + Función más débil

### Sergio (código existente + refactoring)

| # | Tarea | Archivos | Días |
|---|-------|----------|:----:|
| S2-01 | Schema Fase 1: agregar `type` a VerificationToken | `prisma/schema.prisma`, `src/app/api/auth/password-reset/*` | L |
| S2-02 | Schema Fase 4: remover EscrowHito, quitar ESPERANDO_ENTREGA, limpiar `include: { hitos: true }` | `prisma/schema.prisma`, `src/app/api/pedidos/[id]/route.ts`, `src/app/api/pedidos/[id]/ordenes/route.ts` | L |
| S2-04 | Schema Fase 2: 4 FK denormalizadas + script migración datos | `prisma/schema.prisma`, `prisma/seed.ts`, script de migración | M |
| S2-03 | Conectar file-upload a formalización (ACOMPAÑAR) | `src/app/(taller)/taller/formalizacion/page.tsx`, `src/components/ui/file-upload.tsx` | Mi |
| S2-12 | Reemplazar procesos hardcodeados en asignar-taller por catálogo (depende de S2-04) | `src/app/(marca)/marca/pedidos/[id]/asignar-taller.tsx` | J |
| S2-08 | Dashboard taller: convertir en hub útil | `src/app/(taller)/taller/page.tsx` | V |

**Por qué Sergio:** Conoce estos archivos porque los escribió. Los cambios de schema
requieren migrar datos existentes en Supabase — él tiene acceso.

### Gerardo (código nuevo + tests)

| # | Tarea | Archivos | Días |
|---|-------|----------|:----:|
| S2-07 | Fix seguridad: password-reset validar min 8 (no 6), GET pedidos/[id] agregar auth | `src/app/api/auth/password-reset/[token]/route.ts`, `src/app/api/pedidos/[id]/route.ts` | L |
| S2-14 | Guard rol ESTADO en dashboard | `src/app/(estado)/layout.tsx` o `src/app/(estado)/estado/page.tsx` | L |
| S2-13 | Toast feedback: crear componente SaveToast y agregar en marca/perfil, mi-cuenta, formalizacion | `src/components/ui/save-toast.tsx` (ya existe), páginas que lo usan | M |
| TESTS | Verificar tests existentes + agregar tests de nivel.ts | `src/__tests__/unit/nivel.test.ts`, `vitest.config.ts` | Mi-J |
| TESTS | Setup helpers para tests de API (seed, mock auth) | `src/__tests__/helpers/setup.ts`, `src/__tests__/api/*.test.ts` | J-V |

**Por qué Gerardo:** Son cambios quirúrgicos en archivos que Sergio NO va a tocar
esta semana. Los tests son código nuevo que no conflictúa con nada.

---

## Semana 2: Pantallas nuevas + E2E

### Sergio (pantallas que extienden lo existente)

| # | Tarea | Archivos | Días |
|---|-------|----------|:----:|
| S2-05 | Pantalla 73: Detalle orden taller (actualizar progreso) | `src/app/(taller)/taller/pedidos/[id]/page.tsx` (NUEVO) | L |
| S2-10 | Pantalla 74: Perfil público marca | `src/app/(public)/perfil-marca/[id]/page.tsx` o `src/app/(marca)/[id]/page.tsx` (NUEVO) | M |
| S2-11 | Fix registro: validar CUIT formato, checkbox términos, persistir datos entre pasos | `src/app/(auth)/registro/page.tsx` | Mi |
| S2-09 | Schema Fase 3: IntentoEvaluacion + integrar en POST evaluacion | `prisma/schema.prisma`, `src/app/api/colecciones/[id]/evaluacion/route.ts` | J |
| — | Bug fixes + testing manual + deploy | Varios | V |

### Gerardo (pantallas 100% nuevas + E2E)

| # | Tarea | Archivos | Días |
|---|-------|----------|:----:|
| S2-06 | Pantallas 71+72: Denuncia pública + consulta estado | `src/app/(public)/denuncia/page.tsx` (NUEVO), `src/app/(public)/denuncia/consulta/page.tsx` (NUEVO) | L-M |
| E2E | Setup Playwright + primer test (registro) | `e2e/auth.spec.ts`, `playwright.config.ts`, `package.json` | Mi |
| E2E | Tests E2E: crear pedido, tomar curso | `e2e/pedidos.spec.ts`, `e2e/academia.spec.ts` | J |
| — | Actualizar CHECKLIST con estado post-sprint | `docs/04_operacional/CHECKLIST.md` | V |

---

## Reglas de coordinación

### 1. No tocar archivos del otro sin avisar

Antes de editar un archivo que NO está en tu columna, preguntar en el chat/issue.
Si es urgente, crear branch propia y PR.

### 2. Branching

```
main (producción en Vercel)
├── sergio/sprint2-schema     ← Sergio semana 1
├── sergio/sprint2-pantallas  ← Sergio semana 2
├── gerardo/sprint2-fixes     ← Gerardo semana 1
├── gerardo/sprint2-testing   ← Gerardo semana 1-2
└── gerardo/sprint2-denuncia  ← Gerardo semana 2
```

Merge a main vía PR con review del otro. Schema va primero (Sergio L-M semana 1),
el resto depende de que el schema esté mergeado.

### 3. Orden de merge

```
Día 1-2: Sergio mergea schema (S2-01 + S2-02 + S2-04) → main
         Gerardo mergea fixes de seguridad (S2-07 + S2-14) → main
Día 3:   Sergio mergea file-upload (S2-03) → main
         Gerardo mergea toasts (S2-13) → main
Día 4-5: Sergio mergea procesos catálogo + dashboard (S2-12 + S2-08)
         Gerardo mergea tests → main
Semana 2: Cada uno mergea sus pantallas nuevas cuando estén listas
```

### 4. Schema es bloqueante

Sergio tiene que mergear los cambios de schema PRIMERO (L-M semana 1).
Si el schema no está listo, Gerardo no puede mergear tests de API que
dependan de los nuevos modelos. Los fixes de seguridad (S2-07) y guard
de rol (S2-14) NO dependen del schema y pueden ir en paralelo.

### 5. Comunicación diaria

Al final de cada día, cada uno escribe en el issue #2 del repo:
- Qué terminé hoy
- Qué voy a hacer mañana
- Si estoy bloqueado por algo

### 6. Definition of Done

Antes de mergear cualquier PR:
- [ ] Funciona en local
- [ ] No rompe `npm run build`
- [ ] Tests existentes pasan (`npm run test`)
- [ ] El otro le dio un vistazo al PR (no full review, solo sanity check)

---

## Resumen visual

```
SEMANA 1
─────────────────────────────────────────────────────────
        L         M         Mi        J         V
Sergio  [Schema ──────────] [Upload]  [Catálogo] [Dash]
Gerardo [Fixes seguridad ] [Toasts]  [Tests ──────────]

SEMANA 2
─────────────────────────────────────────────────────────
        L         M         Mi        J         V
Sergio  [Detalle] [Perfil]  [Regist]  [Schema3]  [Deploy]
Gerardo [Denuncia ────────] [E2E setup ────────]  [Check]
```

---

## Archivos que NADIE toca (estables)

Estos archivos son infraestructura estable. No se modifican salvo emergencia:
- `src/middleware.ts` (routing por roles)
- `src/lib/auth.ts` / `src/lib/auth.config.ts` (NextAuth config)
- `src/lib/prisma.ts` (Prisma client)
- `src/app/layout.tsx` (root layout)
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`
