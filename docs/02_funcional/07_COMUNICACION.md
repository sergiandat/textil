# 07 - Flujo de Comunicación

## Resumen

La plataforma utiliza **4 canales de comunicación** para conectar marcas, talleres e inspectores:

| Canal | Tecnología | Uso principal |
|-------|------------|---------------|
| **Portal Web** | Next.js (responsive) | Interface principal |
| **WhatsApp** | wa.me click-to-chat | Contacto directo (links) |
| **Email** | Resend/SendGrid | Confirmaciones y documentos |
| **In-App** | Notificaciones UI | Alertas en tiempo real |

**Decisión MVP:** NO app nativa. Web responsive + WhatsApp es suficiente.

---

## Experiencia por Dispositivo

### Móvil (Principal para talleres)

- Web responsive (NO app nativa en MVP)
- 3 breakpoints: 1200px, 768px, 480px
- Touch-friendly: botones mínimo 44px
- WhatsApp como entrada principal:
  ```
  Taller recibe WhatsApp → Click en link → Abre portal móvil
  ```

### Desktop (Principal para marcas e inspectores)

- Dashboard completo
- Gestión de múltiples pedidos
- Reportes y exportación

---

## Matriz de Eventos × Canales

| Evento | De → Para | WA | Email | In-App |
|--------|-----------|:--:|:-----:|:------:|
| Nuevo pedido publicado | Sistema → Talleres | ✅ | ✅ | ✅ |
| Nueva cotización | Sistema → Marca | ✅ | ✅ | ✅ |
| Cotización aceptada | Sistema → Taller | ✅ | ✅ | ✅ |
| Contrato firmado | Sistema → Ambos | ✅ | ✅ | ✅ |
| Entrega confirmada | Sistema → Marca | ❌ | ✅ | ✅ |
| Pago registrado | Sistema → Taller | ✅ | ✅ | ✅ |
| Alerta precio bajo | Sistema → Inspector | ❌ | ✅ | ✅ |
| Nuevo mensaje chat | Usuario → Usuario | ✅* | ❌ | ✅ |
| Certificado emitido | Sistema → Usuario | ❌ | ✅ | ✅ |
| Recordatorio pedido | Sistema → Taller | ✅ | ❌ | ✅ |

*WhatsApp para chat: Solo aviso de mensaje nuevo, no el contenido.

---

## Templates de Mensajes WhatsApp

### 1. Nuevo pedido (Taller recibe)

```
🔔 *Nueva oportunidad de trabajo*

📦 Pedido: 500 remeras
📍 Ubicación: CABA
💰 Presupuesto: hasta $800.000
⏰ Plazo: 30 días

¿Te interesa? Cotizá ahora:
👉 [LINK AL PEDIDO]

Plataforma Textil OIT-UNTREF
```

### 2. Cotización recibida (Marca recibe)

```
📩 *Nueva cotización para tu pedido*

🏭 Taller: Textil San Martín
⭐ Rating: 4.8 | Nivel: PLATA
💵 Precio: $650.000
📅 Entrega: 25 días

Ver cotización completa:
👉 [LINK A COTIZACIÓN]
```

### 3. Contrato firmado (Ambos reciben)

```
✅ *Contrato firmado exitosamente*

📋 Contrato #2026-0123
🏭 Taller: Textil San Martín
🏢 Marca: Moda Urbana SA
📦 500 remeras por $650.000

Ver contrato:
👉 [LINK AL CONTRATO]

¡Éxitos con la producción!
```

### 4. Pago confirmado (Taller recibe)

```
💰 *Pago confirmado*

La marca Moda Urbana SA confirmó el pago
del pedido #2026-0123.

Monto: $650.000
Fecha: 15/03/2026

Ver historial:
👉 [LINK A HISTORIAL]
```

---

## Chat Marca-Taller

### Arquitectura

El chat es **in-app**, en contexto de un pedido específico:

```
┌─────────────────────────────────────────────────┐
│  PEDIDO #2026-0123                              │
│  500 remeras - Moda Urbana SA ↔ Textil SM      │
├─────────────────────────────────────────────────┤
│                                                 │
│  [14:30] Moda Urbana:                          │
│  "¿Podrían entregar 100 unidades antes?"       │
│                                                 │
│  [14:45] Textil San Martín:                    │
│  "Sí, podemos. ¿Para qué fecha?"               │
│                                                 │
│  [Escribir mensaje...]              [Enviar]   │
└─────────────────────────────────────────────────┘
```

### Reglas

- Chat solo existe en contexto de un pedido
- Solo pueden chatear marca y taller asignados
- Inspector puede ver historial (solo lectura)
- Historial se guarda para resolución de disputas

### Notificaciones de chat

- **Usuario logueado:** Notificación in-app en tiempo real
- **Usuario offline:** WhatsApp con "Tenés un nuevo mensaje"

### Modelo de datos

```sql
mensajes (
  id UUID PRIMARY KEY,
  pedido_id UUID REFERENCES pedidos,
  remitente_id UUID REFERENCES users,
  contenido TEXT,
  leido BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP
)
```

---

## Flujo de Notificaciones

```
EVENTO OCURRE (ej: nueva cotización)
        │
        ▼
┌──────────────┐
│ Sistema      │
│ detecta      │
│ evento       │
└──────┬───────┘
        │
        ▼
┌──────────────┐     ┌─────────────────────────┐
│ ¿Usuario     │ SÍ  │ Notificación IN-APP     │
│ está         │────►│ (toast/badge en tiempo  │
│ logueado?    │     │  real con Supabase)     │
└──────┬───────┘     └─────────────────────────┘
        │ NO
        ▼
┌──────────────┐     ┌─────────────────────────┐
│ Enviar       │────►│ WhatsApp (Twilio)       │
│ notificación │     │ + Email (Resend)        │
│ externa      │     └─────────────────────────┘
└──────┬───────┘
        │
        ▼
┌──────────────┐
│ Guardar en   │
│ historial    │
└──────────────┘
```

---

## Preferencias de Notificación

El usuario puede configurar cómo recibir notificaciones:

| Tipo de notificación | WhatsApp | Email | In-App |
|---------------------|----------|-------|--------|
| Nuevos pedidos/oportunidades | ☑ | ☑ | ☑ |
| Mensajes de chat | ☑ | ☐ | ☑ |
| Confirmaciones de pago | ☑ | ☑ | ☑ |
| Recordatorios | ☐ | ☑ | ☑ |

**MVP simplificado:** Todo activado por defecto. Usuario puede desactivar WhatsApp.

**Opcional:** Horario de "no molestar" (22:00 a 08:00)

---

## Implementación Técnica

### Stack de notificaciones

| Componente | Tecnología | Costo |
|------------|------------|-------|
| WhatsApp | wa.me click-to-chat | Sin costo (links directos) |
| Email | SendGrid | Free tier (100/día) |
| In-App | Supabase Realtime | Incluido en Pro |
| Cola de mensajes | Supabase Edge Functions | Incluido |

> **Nota (DEC-004):** WhatsApp se implementa como links wa.me, no como API
> programática. No hay envío automático de mensajes, solo se abre WhatsApp
> del usuario con un mensaje pre-armado. Los templates de abajo son
> referencia para Fase 1 si se decide integrar API.

### Rate limiting

| Tipo | Límite | Razón |
|------|--------|-------|
| WhatsApp/usuario/día | 10 mensajes | Evitar spam, costo |
| Email/usuario/día | 20 emails | Evitar spam |
| Notificaciones por evento | 1 | No duplicar |

---

## Pantallas de Comunicación

| Pantalla | Actor | Descripción |
|----------|-------|-------------|
| Bandeja de entrada | Todos | Lista de notificaciones |
| Chat del pedido | Marca/Taller | Conversación en contexto |
| Configuración notif. | Todos | Preferencias de canales |
| Historial mensajes | Inspector | Ver conversaciones (disputas) |

---

## Lo que NO entra en MVP

| Feature | Por qué no | Cuándo |
|---------|------------|--------|
| App nativa iOS/Android | Complejidad, costo | Fase 2 |
| PWA offline | Complejidad | Fase 1 |
| Videollamadas | Overkill | Nunca |
| Llamadas VoIP | Overkill | Nunca |
| SMS fallback | WhatsApp es suficiente | Si hay demanda |
| Notificaciones push | Requiere service worker | Fase 1 |

---

## Evolución Futura

```
MVP (Mes 1-6)           Fase 1 (Mes 7-12)       Fase 2 (Año 2)
─────────────────────────────────────────────────────────────
Web responsive          PWA con offline         App nativa
WhatsApp + Email        + Push notifications    + SMS fallback
Chat básico             Chat con archivos       Videollamadas?
```
