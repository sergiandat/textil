# Estrategia de Testing

Fecha: 2026-03-02
Estado actual: 0 tests. Vitest configurado. Playwright no configurado.
Referencia: CHECKLIST.md sección 7

---

## Situación actual

- **Vitest** está en devDependencies y configurado (`vitest.config.ts`)
- **2 archivos de test** existen pero no se verificó si pasan: `src/__tests__/nivel.test.ts`, `src/__tests__/utils.test.ts`
- **Playwright** no está instalado ni configurado
- **0 tests E2E**
- **0 tests de API**
- **CI/CD** no tiene step de tests

---

## Principio: testear lo que DUELE si se rompe

No necesitamos 100% de cobertura. Necesitamos tests en los puntos donde un bug
causa daño real: seguridad, dinero, datos incorrectos, flujos que el usuario no
puede completar.

---

## Capa 1: Tests Unitarios (Vitest)

### Qué testear

| Módulo | Archivo | Por qué | Prioridad |
|--------|---------|---------|:---------:|
| Motor de nivel | `lib/nivel.ts` | Cálculo BRONCE/PLATA/ORO afecta todo el sistema. Si se rompe, talleres quedan con nivel incorrecto. | P1 |
| Utilidades | `lib/utils.ts` | Funciones compartidas (cn, formatPercent, formatFraction) | P2 |
| Validaciones Zod | Schemas de registro, pedidos, validaciones | Si un schema cambia sin querer, datos inválidos entran a la BD | P2 |
| Capacidad (wizard) | Fórmula `((horas*60)/SAM)*eficiencia*máquinas*22` | Error en el cálculo muestra capacidad incorrecta a las marcas | P2 |

### Estructura de archivos

```
src/__tests__/
├── unit/
│   ├── nivel.test.ts         ← Ya existe
│   ├── utils.test.ts         ← Ya existe
│   ├── capacidad.test.ts     ← CREAR
│   └── validaciones.test.ts  ← CREAR
```

### Ejemplo: tests de nivel (verificar que existen y cubren)

```typescript
// src/__tests__/unit/nivel.test.ts
describe('calcularNivel', () => {
  it('retorna BRONCE si no hay validaciones ni certificados', () => {})
  it('retorna PLATA con N validaciones completadas', () => {})
  it('retorna ORO con validaciones + certificados', () => {})
  it('baja de nivel si se revoca un certificado', () => {})
  it('no cambia si se rechaza una validación ya rechazada', () => {})
})

describe('aplicarNivel', () => {
  it('persiste nivel y puntaje en el taller', () => {})
  it('se ejecuta al aprobar validación', () => {})
  it('se ejecuta al crear certificado', () => {})
  it('se ejecuta al revocar certificado', () => {})
})
```

### Comando

```bash
npm run test          # vitest run (CI)
npm run test:watch    # vitest (desarrollo)
```

---

## Capa 2: Tests de API (Vitest + fetch)

### Qué testear

Flujos donde la seguridad o integridad de datos está en juego.

| Endpoint | Escenario | Por qué | Prioridad |
|----------|-----------|---------|:---------:|
| POST /api/auth/registro | Registro completo + duplicado CUIT | Si falla, nadie puede entrar | P1 |
| POST /api/auth/password-reset | Genera token + valida token | Seguridad de cuentas | P1 |
| PUT /api/pedidos/[id] | Solo CANCELADO manual, ownership | Si falla, cualquiera cancela pedidos ajenos | P1 |
| PUT /api/validaciones/[id] | Ownership + no self-approve | Si falla, talleres se auto-aprueban documentos | P1 |
| POST /api/colecciones/[id]/evaluacion | Corrige quiz + genera certificado | Si falla, certificados fraudulentos | P2 |
| GET /api/notificaciones | Fix: validar userId contra session | Si no se testea, se puede leer notificaciones ajenas | P1 |
| PUT /api/talleres/[id] | Ownership check | Si falla, cualquiera edita talleres ajenos | P2 |

### Estructura

```
src/__tests__/
├── unit/
│   └── ...
├── api/
│   ├── auth.test.ts          ← registro, login, password reset
│   ├── pedidos.test.ts       ← CRUD + ownership + transiciones estado
│   ├── validaciones.test.ts  ← ownership + self-approve prevention
│   ├── certificados.test.ts  ← crear + revocar + verificar
│   └── notificaciones.test.ts ← fix userId
```

### Setup

Los tests de API necesitan:
- Base de datos de test (Supabase local o SQLite para tests)
- Seed de datos mínimo (1 user por rol, 1 taller, 1 marca, 1 pedido)
- Helper para crear sessions fake (mock NextAuth)

```typescript
// src/__tests__/helpers/setup.ts
import { prisma } from '@/lib/prisma'

export async function seedTestData() {
  // Crear usuarios de test por rol
  const admin = await prisma.user.create({ data: { email: 'admin@test.com', role: 'ADMIN', ... }})
  const taller = await prisma.user.create({ data: { email: 'taller@test.com', role: 'TALLER', ... }})
  const marca = await prisma.user.create({ data: { email: 'marca@test.com', role: 'MARCA', ... }})
  // ... crear taller, marca, pedido, colección, etc.
  return { admin, taller, marca }
}

export async function cleanTestData() {
  // Limpiar en orden inverso por FKs
  await prisma.$transaction([...])
}
```

---

## Capa 3: Tests E2E (Playwright)

### Qué testear

Los flujos completos que un usuario real hace. Si uno de estos se rompe,
el MVP no funciona.

| Flujo | Pasos | Función MVP | Prioridad |
|-------|-------|-------------|:---------:|
| Registro completo | Landing → Registro 3 pasos → Login → Dashboard | REGISTRAR | P1 |
| Crear pedido y asignar taller | Login marca → Crear pedido → Asignar taller → Ver en ejecución | ENCONTRAR | P1 |
| Tomar curso y obtener certificado | Login taller → Academia → Ver videos → Quiz → Certificado → Verificar | APRENDER | P1 |
| Subir documento formalización | Login taller → Formalización → Upload → Admin aprueba → Nivel sube | ACOMPAÑAR | P1 |
| Denuncia anónima | Denuncia → Código → Consultar estado | FISCALIZAR | P2 |
| Admin gestiona taller | Login admin → Talleres → Detalle → Aprobar doc → Ver nivel | ADMIN | P2 |

### Estructura

```
e2e/
├── auth.spec.ts              ← registro + login + password reset
├── pedidos.spec.ts           ← crear + asignar + cancelar
├── academia.spec.ts          ← cursos + quiz + certificado
├── formalizacion.spec.ts     ← upload + aprobar + nivel
├── denuncia.spec.ts          ← form público + consulta
└── helpers/
    ├── auth.ts               ← login helper
    └── seed.ts               ← datos de test
```

### Setup Playwright

```bash
npm install -D @playwright/test
npx playwright install
```

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:3000',
  },
})
```

### Ejemplo: flujo de registro

```typescript
// e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test('registro completo de taller', async ({ page }) => {
  await page.goto('/registro')

  // Paso 1: elegir rol
  await page.click('text=Taller')
  await page.click('text=Continuar')

  // Paso 2: datos personales
  await page.fill('[name=nombre]', 'Test Taller')
  await page.fill('[name=email]', `test-${Date.now()}@test.com`)
  await page.fill('[name=password]', 'password123')
  await page.fill('[name=phone]', '1112345678')
  await page.click('text=Continuar')

  // Paso 3: datos taller
  await page.fill('[name=nombreTaller]', 'Mi Taller Test')
  await page.fill('[name=cuit]', '20123456789')
  await page.fill('[name=ubicacion]', 'CABA')
  await page.click('text=Registrarme')

  // Verifica redirect a login con banner
  await expect(page).toHaveURL(/\/login/)
  await expect(page.locator('.bg-green')).toBeVisible()
})
```

---

## Cobertura mínima requerida

| Capa | Cantidad mínima | Qué cubre |
|------|:---------------:|-----------|
| Unitarios | 10 tests | nivel.ts, utils.ts, capacidad, validaciones Zod |
| API | 15 tests | Auth, ownership, transiciones de estado, seguridad |
| E2E | 6 flujos | 1 por función MVP + admin |
| **Total** | **~31 tests** | Los puntos donde un bug causa daño real |

---

## CI/CD

### GitHub Action para tests

```yaml
# .github/workflows/test.yml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx prisma generate
      - run: npm run test          # Vitest unitarios + API
      # E2E solo en PRs a main (más lento)
      - name: E2E tests
        if: github.event_name == 'pull_request'
        run: npx playwright test
```

### Regla: no mergear PR sin tests pasando

Configurar branch protection en GitHub:
- Require status checks: "Tests" workflow
- PRs a main requieren tests verdes

---

## Orden de implementación

| Paso | Qué | Cuándo |
|------|-----|--------|
| 1 | Verificar que los 2 tests existentes pasan | Sprint 2, día 1 |
| 2 | Agregar tests unitarios de nivel.ts (si no cubren edge cases) | Sprint 2, semana 1 |
| 3 | Setup helpers para tests de API (seed, mock auth) | Sprint 2, semana 1 |
| 4 | Tests de API para flujos de seguridad (ownership, auth) | Sprint 2, semana 2 |
| 5 | Setup Playwright + primer E2E (registro) | Sprint 2, semana 2 |
| 6 | Resto de E2E | Sprint 3 |
| 7 | CI/CD con GitHub Actions | Sprint 3 |

---

## Lo que NO testeamos en MVP

- Performance / load testing (no hay volumen)
- Visual regression testing (no hay diseño estable)
- Accesibilidad automatizada (manual por ahora)
- Tests de integraciones externas (ARCA, SendGrid — se mockean)
- Tests de componentes UI aislados (Storybook — overkill para MVP)
