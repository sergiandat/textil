# Registro de Decisiones del Proyecto

Fecha: 2026-02-28
Participantes: Gerardo Breard, Sergio (desarrollo)

Este documento registra las decisiones confirmadas que resuelven contradicciones entre los distintos documentos del proyecto. Todas las decisiones aquí son DEFINITIVAS y deben reflejarse en todos los docs.

---

## DEC-001: Presupuesto

**Decisión:** $20,000 USD
**Contexto:** Existían 3 cifras distintas en la documentación ($741K en README, $20K en Hoja de Ruta, $17,896 en Estado Proyecto). Los $741K correspondían al presupuesto total del programa OIT, no del MVP. Los $17,896 eran un escenario reducido que no se aprobó.
**Docs corregidos:** README.md, ESTADO_PROYECTO.md

## DEC-002: Métricas de éxito del MVP

**Decisión:** 20 talleres registrados, 10 marcas registradas, 30 pedidos iniciados, 15 pedidos completados
**Contexto:** Hoja de Ruta tenía métricas de una versión anterior (212 pedidos, $2.1M USD) que eran irrealistas para un piloto de 3 meses con 20 talleres.
**Docs corregidos:** 04_HOJA_RUTA.md

## DEC-003: Función PAGAR

**Decisión:** NO entra en el MVP
**Contexto:** Algunos docs la incluían como "escrow con Mercado Pago", otros como "placeholder". Se decidió sacarla completamente del alcance MVP. Los pagos se gestionan fuera de la plataforma en esta etapa.
**Docs corregidos:** 02_FUNCIONES.md, 03_CASOS_USO.md, 04_HOJA_RUTA.md, 08_PLAN_DESARROLLO_TECNICO.md

## DEC-004: WhatsApp

**Decisión:** wa.me click-to-chat (links simples, sin API)
**Contexto:** 07_COMUNICACION.md y 05_ARQUITECTURA.md especificaban Twilio API con templates programáticos. Se decidió simplificar a links wa.me que abren WhatsApp del usuario. Sin costo, sin integración.
**Docs corregidos:** 05_ARQUITECTURA.md, 07_COMUNICACION.md

## DEC-005: Alcance de pantallas MVP

**Decisión:** 70 pantallas + 6 modales (según PANTALLAS_MVP.md)
**Contexto:** 04_HOJA_RUTA.md decía "10 pantallas MVP", cifra de una versión inicial que fue ampliamente superada por el diseño detallado.
**Docs corregidos:** 04_HOJA_RUTA.md

## DEC-006: Timeline

**Decisión:** 2 meses de desarrollo + 3 meses de piloto = 5 meses total
**Contexto:** Propuesta OIT y Hoja de Ruta decían 6 meses (2+4). Se ajustó el piloto a 3 meses.
**Docs corregidos:** 04_HOJA_RUTA.md, PROPUESTA_OIT_WORD.md (nota)

## DEC-007: Documentos de auditoría

**Decisión:** Mantener separados (AS_IS_MAP, TO_BE_MAP, GAP_MATRIX, ROADMAP_REMEDIACION)
**Contexto:** Aunque el CHECKLIST absorbe gran parte de su contenido, cada documento tiene un propósito distinto (diagnóstico, objetivo, brechas, plan de acción).

## DEC-008: Nombre de función COMPLIANCE

**Decisión:** Renombrar a ACOMPAÑAR
**Contexto:** Propuesta OIT usaba "ACOMPAÑAR" que es más amigable para usuarios no técnicos. Refleja mejor el espíritu de la función: acompañar al taller en su proceso de formalización.
**Docs corregidos:** 02_FUNCIONES.md, 03_CASOS_USO.md, 08_PLAN_DESARROLLO_TECNICO.md

## DEC-009: Funciones del MVP

**Decisión:** 5 funciones: REGISTRAR, ENCONTRAR, APRENDER, ACOMPAÑAR, FISCALIZAR
**Contexto:** Se sacaron PAGAR (DEC-003) y ACORDAR del MVP. El flujo MVP es: registrarse → encontrar talleres → aprender/capacitarse → acompañar formalización → fiscalizar desde el Estado.
**Docs corregidos:** 02_FUNCIONES.md, 04_HOJA_RUTA.md

## DEC-010: Modelo de datos

**Decisión:** Rediseñar el schema Prisma actual
**Contexto:** El CHECKLIST identifica 12 gaps en el schema actual (VerificationToken sin campo type, Auditoria.inspectorId sin FK, campos denormalizados como Pedido.tipoPrenda, etc.). Antes de seguir implementando hay que cerrar estos gaps.
**Docs corregidos:** 05_ARQUITECTURA.md (actualizar modelo), CHECKLIST.md (tracking de gaps)
