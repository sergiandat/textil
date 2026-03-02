# Sprint 2 — Backlog Actualizado

Fecha: 2026-03-02
Base: DECISIONES.md, HISTORIAS_USUARIO.md, GAPS_PANTALLAS.md, PLAN_SCHEMA.md, CHECKLIST.md
Sprint 1: COMPLETADO (2026-02-25)

---

## Objetivo del Sprint 2

Cerrar las funciones MVP que están PARCIALES o FALTA, empezando por los gaps
más críticos: schema, ACOMPAÑAR (función más débil), y las 5 pantallas nuevas.

**Duración estimada:** 2 semanas
**Equipo:** Sergio (código) + Gerardo (planificación/revisión) + Claude

---

## Criterio de priorización

1. **P0 — Bloqueante:** Sin esto, una función MVP no funciona
2. **P1 — Crítico:** La función existe pero con gaps importantes
3. **P2 — Importante:** Mejora significativa pero la función básica opera

---

## Backlog por prioridad

### P0 — Bloqueantes (hacer primero)

| # | Tarea | HU | Función | Estimación |
|---|-------|----|---------|:----------:|
| S2-01 | **Schema Fase 1:** Agregar `type` a VerificationToken | HU-R04 | REGISTRAR | 1h |
| S2-02 | **Schema Fase 4:** Remover EscrowHito, limpiar EstadoPedido (quitar ESPERANDO_ENTREGA), quitar `include: { hitos: true }` de queries | — | Limpieza | 2h |
| S2-03 | **ACOMPAÑAR: conectar file-upload a formalización.** Integrar componente file-upload.tsx en /taller/formalizacion, conectar a POST /api/validaciones/[id]/upload que ya existe | HU-AC01, HU-AC02 | ACOMPAÑAR | 3h |

**Por qué P0:** Sin S2-03, el taller NO puede avanzar en su formalización. Es la función más débil del MVP con botón muerto.

### P1 — Críticos

| # | Tarea | HU | Función | Estimación |
|---|-------|----|---------|:----------:|
| S2-04 | **Schema Fase 2:** 4 FK denormalizadas (tipoPrenda, proceso, tipo validación, inspectorId) + script de migración de datos | — | Integridad | 4h |
| S2-05 | **Pantalla 73:** Detalle orden de manufactura para taller. El taller puede ver detalle y actualizar progreso. | HU-E07 | ENCONTRAR | 3h |
| S2-06 | **Pantalla 71+72:** Denuncia pública + consulta estado. API ya existe, falta UI. | HU-F03 | FISCALIZAR | 3h |
| S2-07 | **Fix notificaciones:** Validar userId contra session en /api/notificaciones (un usuario puede leer notificaciones de otro) | — | Seguridad | 1h |
| S2-08 | **Dashboard taller:** Convertir en hub útil con: pedidos recientes, % formalización, progreso academia, nivel y puntaje | HU-R06 | REGISTRAR | 3h |

### P2 — Importantes

| # | Tarea | HU | Función | Estimación |
|---|-------|----|---------|:----------:|
| S2-09 | **Schema Fase 3:** Modelo IntentoEvaluacion para tracking de quizzes | HU-AP03 | APRENDER | 2h |
| S2-10 | **Pantalla 74:** Perfil público marca (ya diseñado en wireframes, nunca construido) | HU-E02 | ENCONTRAR | 2h |
| S2-11 | **Fix registro:** Validar formato CUIT (11 dígitos), checkbox términos, persistir datos entre pasos del wizard | HU-R01 | REGISTRAR | 2h |
| S2-12 | **Procesos desde catálogo:** Reemplazar array hardcodeado en asignar-taller.tsx por fetch a GET /api/procesos. Depende de S2-04. | HU-E06 | ENCONTRAR | 2h |
| S2-13 | **Toast feedback:** Agregar toast después de guardar en: /marca/perfil, /mi-cuenta, /taller/formalizacion (upload) | — | UX | 2h |
| S2-14 | **Guard rol ESTADO:** Dashboard /estado solo accesible para rol ESTADO o ADMIN | HU-F01 | FISCALIZAR | 1h |

---

## Dependencias

```
S2-01 (schema fase 1) ──→ sin dependencias, hacer primero
S2-02 (schema fase 4) ──→ sin dependencias, hacer primero
S2-04 (schema fase 2) ──→ hacer después de S2-01 y S2-02 (misma migration)
S2-12 (procesos catálogo) ──→ depende de S2-04 (FK proceso → ProcesoProductivo)
S2-03 (file-upload) ──→ sin dependencias de schema
S2-05 (detalle orden) ──→ sin dependencias
S2-06 (denuncia) ──→ sin dependencias (API ya existe)
```

---

## Orden de ejecución sugerido

### Semana 1: Schema + función más débil

| Día | Sergio | Gerardo/Claude |
|-----|--------|----------------|
| L | S2-01 + S2-02 (schema limpieza) | Revisar API contract |
| M | S2-04 (4 FKs + script migración datos) | Tests unitarios nivel.ts |
| Mi | S2-03 (file-upload en formalización) | S2-07 (fix notificaciones) |
| J | S2-05 (detalle orden taller) | S2-14 (guard rol Estado) |
| V | S2-08 (dashboard taller como hub) | S2-13 (toasts) |

### Semana 2: Pantallas nuevas + polish

| Día | Sergio | Gerardo/Claude |
|-----|--------|----------------|
| L | S2-06 (denuncia pública + consulta) | S2-09 (IntentoEvaluacion) |
| M | S2-10 (perfil público marca) | S2-12 (procesos desde catálogo) |
| Mi | S2-11 (fix registro: CUIT, términos) | Tests E2E setup |
| J | Bug fixes + testing manual | Tests E2E flujos críticos |
| V | Deploy + smoke test producción | Actualizar CHECKLIST |

---

## Definition of Done por tarea

Cada tarea del sprint se considera DONE cuando:
1. El código funciona en local
2. Se verificó manualmente el flujo completo
3. No rompe funcionalidad existente (smoke test)
4. Se pusheo al repo y deploya en Vercel sin errores
5. Se actualiza CHECKLIST.md con el nuevo estado

---

## Métricas de cierre del Sprint 2

| Métrica | Antes (Sprint 1) | Objetivo Sprint 2 |
|---------|:-----------------:|:------------------:|
| Pantallas OK | 21 | 28 (+7) |
| Pantallas PARCIAL | 9 | 5 (-4) |
| Pantallas STUB | 20 | 18 (-2) |
| Pantallas FALTA | 20 | 15 (-5) |
| APIs faltantes | 10 | 8 (-2) |
| Gaps schema | 12 | 4 (-8) |
| Tests | 0 | 10+ (unitarios + E2E setup) |

---

## Riesgos

| Riesgo | Probabilidad | Mitigación |
|--------|:------------:|------------|
| Migration de datos rompe producción | Media | Backup Supabase antes de cada migration |
| file-upload no funciona con Supabase Storage | Baja | API ya existe (Sprint 1), solo conectar UI |
| Sprint demasiado ambicioso | Media | P0 y P1 son innegociables, P2 se puede cortar |
