# 02 - Las 10 Funciones de la Plataforma

## Resumen

La plataforma tiene **10 funciones** organizadas en 3 grupos:

| Grupo | Funciones | Propósito |
|-------|-----------|-----------|
| **Core** | REGISTRACIÓN, ENCONTRAR, ACORDAR, EJECUTAR, VERIFICAR, LOGÍSTICA, PAGAR | Flujo operativo día a día |
| **Habilitación** | APRENDER, ACOMPAÑAR | Capacitar y formalizar |
| **Gobernanza** | FISCALIZAR, GOBERNAR | Controlar y mejorar |

---

## Funciones Core (7)

### 0. REGISTRACIÓN (Nueva para MVP)
**Onboarding simplificado sin molestar al usuario.**

- Registro en <5 minutos con datos mínimos
- Verificación automática de CUIT en AFIP
- Auto-completar datos desde AFIP
- Perfil progresivo (pedir más datos después, no al inicio)
- Notificaciones por WhatsApp + Email

**Resuelve:** B3 (Formalización Compleja) - Baja la barrera de entrada

### 1. ENCONTRAR
**Motor de matching inteligente que conecta marcas con talleres.**

- Elimina intermediarios
- Filtra por: formalidad, capacidad, ubicación, reputación
- Notifica oportunidades compatibles a talleres

**Resuelve:** B1 (Trazabilidad), B2 (Desconfianza)

### 2. ACORDAR
**Contratos digitales formales y vinculantes.**

- Registro en blockchain (Polygon)
- Precio de referencia automático (Vestir Conciencia)
- Historial inmutable de cambios

**Resuelve:** B2 (Desconfianza), B7 (Dumping Social)

### 3. EJECUTAR
**Tablero de seguimiento en tiempo real.**

- Kanban visual por etapa (Corte → Confección → Acabado)
- Evidencias fotográficas con CUIT de trabajador
- Alertas automáticas de retrasos
- Activa pagos por hitos

**Resuelve:** B1 (Trazabilidad), B2 (Desconfianza)

### 4. VERIFICAR
**Trazabilidad punta a punta.**

- QR único por prenda
- Registro en blockchain
- Verificable por consumidor, inspector, periodista
- Muestra: taller, trabajadores, fechas, certificaciones

**Resuelve:** B1 (Trazabilidad), B5 (Estado Ausente)

### 5. LOGÍSTICA
**Coordinación de entregas.**

- Hub centralizado (opcional)
- Optimización de rutas por cercanía
- Tracking de envíos
- Integración con transportistas

**Resuelve:** B4 (Articulación)

### 6. PAGAR
**Pagos trazados con garantías.**

- Escrow: marca deposita, taller cobra al completar
- Liberación automática por hitos
- Arbitraje en disputas
- Historial de pagos para crédito bancario

**Resuelve:** B2 (Desconfianza)

---

## Funciones de Habilitación (2)

### 7. APRENDER (FUNCIÓN CENTRAL en MVP)
**Capacitación contextual y continua mediante videos curados y RAG acompañante.**

> APRENDER es la función central que mantiene a la comunidad activa y genera valor desde el primer día.

#### Estrategia MVP: YouTube Curado + RAG Acompañante

En lugar de crear contenido desde cero, el MVP utiliza:
- **Videos curados de YouTube** organizados en colecciones temáticas
- **RAG como acompañante** que resume, responde dudas y sugiere recursos
- **Certificados verificables** con QR al completar colecciones

#### 6 Colecciones MVP

| Colección | Videos | Fuente |
|-----------|--------|--------|
| Formalización básica | 5-8 | Contadores, ARCA oficial |
| Monotributo paso a paso | 3-5 | Tutoriales contables |
| Cálculo de costos | 4-6 | Emprendedores textiles |
| Negociación con marcas | 3-4 | Videos de negocios |
| Control de calidad | 5-7 | INTI, escuelas técnicas |
| **Uso de la plataforma** | 2-3 | **Creamos nosotros** (Loom) |

#### RAG como "Acompañante"

El asistente IA acompaña cada video:
- Resume el contenido del video
- Responde preguntas relacionadas
- Sugiere el siguiente video
- Conecta con recursos oficiales (ARCA, INTI)

#### Certificados

- PDF descargable con QR verificable
- Página de verificación pública (`/verificar/[codigo]`)
- Aparece en perfil público del taller
- **Impacto en matching:** +5% a +20% según cantidad

**Resuelve:** B6 (Bajas Capacidades)

### 8. ACOMPAÑAR (antes COMPLIANCE)
**Acompañamiento en formalización.**

- Checklist visual de 8 validaciones
- Diagnóstico automático desde AFIP
- Plan de regularización progresivo
- Niveles: BRONCE → PLATA → ORO
- Enlaces a profesionales matriculados

**Resuelve:** B3 (Formalización Compleja), B7 (Dumping Social)

---

## Funciones de Gobernanza (2)

### 9. FISCALIZAR
**Priorización inteligente de inspecciones.**

- Dashboard para inspectores
- Algoritmo: denuncias + tiempo sin auditar + volumen
- Enfoque PREVENTIVO, no punitivo
- Alertas de precios anómalos
- Integración denuncia → auditoría

**Resuelve:** B5 (Estado Ausente)

### 10. GOBERNAR
**Mesa tripartita de mejora continua.**

- Dashboard con métricas de todo el ecosistema
- Parametrización colectiva del algoritmo
- Simulador de impacto de cambios
- Reuniones mensuales: Estado + Sindicatos + Cámaras
- Reportes OIT/investigadores

**Resuelve:** B4 (Articulación), B7 (Dumping Social)

---

## Perfiles Comerciales: El Espacio de Cada Actor

Para que ENCONTRAR funcione, cada actor necesita un **espacio propio** donde presentar su información comercial.

### Perfil del Taller

| Sección | Campos | Obligatorio |
|---------|--------|-------------|
| **Datos básicos** | Nombre, CUIT (verificado), Ubicación, WhatsApp, Foto | Sí |
| **Capacidades** | Procesos que realiza, Tipos de prenda, Capacidad mensual | Sí |
| **Equipamiento** | Maquinaria, Trabajadores registrados | Parcial |
| **Extras** | Descripción, Fotos de trabajos (portfolio) | No |

**Catálogo de Procesos (el taller marca los que hace):**
1. Corte
2. Confección
3. Lavandería
4. Desgaste/Lijado
5. Acabado/Terminación
6. Tintorería
7. Estampado
8. Bordado
9. Planchado
10. Sublimado
11. Control de calidad

**Catálogo de Prendas (el taller marca su especialización):**
1. Remera/Camiseta
2. Buzo/Hoodie
3. Campera
4. Jean
5. Pantalón
6. Camisa
7. Ropa de trabajo
8. Ropa deportiva
9. Ropa infantil
10. Lencería/Interior
11. Otros

### Perfil de la Marca

| Sección | Campos | Obligatorio |
|---------|--------|-------------|
| **Datos básicos** | Razón social, CUIT, Ubicación, WhatsApp, Logo | Sí |
| **Actividad** | Descripción, Tipos de prenda, Sector/Nicho | Parcial |
| **Volumen** | Pedidos mensuales típicos, Cantidad promedio | No |

### Matching Simplificado en MVP

```
MARCA crea pedido → SISTEMA filtra talleres → SISTEMA rankea → MARCA ve lista
```

**Criterios de filtro:**
- Taller tiene la capacidad de prenda requerida
- Taller tiene los procesos requeridos
- Taller tiene capacidad >= cantidad del pedido
- Taller tiene CUIT verificado

**Fórmula de ranking:**
- Formalización (nivel): 40%
- Proximidad geográfica: 30%
- Reputación (rating): 20%
- Capacidad disponible: 10%

**Lo que NO hacemos en MVP:**
- Rutas de procesos predefinidas por prenda
- División automática entre talleres
- Matching con IA/ML
- Precio automático por proceso

---

## Funciones en MVP (5 de 11)

| Función | En MVP | Notas |
|---------|--------|-------|
| **REGISTRACIÓN** | ✅ | Onboarding simple, <5 min, WhatsApp |
| ENCONTRAR | ✅ | Directorio + búsqueda simple |
| ACORDAR | ❌ | Fase 1 (contrato digital) |
| EJECUTAR | ❌ | Fase 1 (seguimiento en tiempo real) |
| VERIFICAR | ❌ | Fase 1 (blockchain, QR) |
| LOGÍSTICA | ❌ | Fase 1 (hubs) |
| PAGAR | ❌ | Fuera de MVP - Pagos se gestionan fuera de la plataforma |
| APRENDER | ✅ | **CENTRAL** - Videos YouTube curados + RAG acompañante + certificados |
| ACOMPAÑAR | ✅ | Verificación CUIT en AFIP, checklist de formalización |
| FISCALIZAR | ✅ | Dashboard básico para Estado |
| GOBERNAR | ❌ | Fase 1 (parametrización avanzada) |

### Barreras que resuelve el MVP

| Función MVP | Barreras |
|-------------|----------|
| REGISTRACIÓN | B3 (Formalización) - Baja barrera de entrada |
| ENCONTRAR | B4 (Falta de clientes) |
| APRENDER | B6 (Bajas capacidades) |
| ACOMPAÑAR | B3 (Formalización) |
| FISCALIZAR | B5 (Estado ausente) |

### Nota sobre PAGAR

PAGAR queda **fuera del alcance del MVP**. Los pagos entre marcas y talleres se gestionan por fuera de la plataforma (transferencia bancaria, Mercado Pago directo, efectivo, etc.). La plataforma no interviene en el circuito de pagos durante esta etapa.

En Fase 1 se evaluará integrar escrow automático con Mercado Pago y liberación por hitos.

---

## Documento Completo

Ver: `../Plataforma/00_INFORME_FINAL/PARTE_3_10_FUNCIONES_SIMPLE.md`
