# 06 - Integraciones con Bases de Datos del Estado

## Principio Rector

> **"No replicar bases de datos, sino consumir las existentes. El usuario solo carga lo que NO existe en ninguna base de datos del Estado."**

---

## Inventario de Bases de Datos

### 1. ARCA (ex-AFIP) - CRÍTICA

**Relevancia:** Fuente primaria de verificación
**URL:** https://www.afip.gob.ar/

#### Datos Disponibles

| Campo | Descripción | Uso en Plataforma |
|-------|-------------|-------------------|
| CUIT | Código único | Identificador de usuario |
| Razón Social | Nombre legal | Auto-completar registro |
| Condición IVA | Categoría tributaria | Determinar tipo de actor |
| Monotributo | Categoría y actividad | Identificar pequeños talleres |
| Empleador (S/N) | Si tiene trabajadores | Criterio para nivel ORO/PLATA |
| Actividad CIIU | Código de actividad | Filtrar sector textil |
| Domicilio fiscal | Ubicación | Geolocalización |

#### Web Services

| Web Service | Descripción | Acceso |
|-------------|-------------|--------|
| `ws_sr_constancia_inscripcion` | Padrón constancia | Público con certificado |
| `ws_sr_padron_a4` | Padrón impuestos | Público con certificado |
| `ws_sr_padron_a10` | Padrón mínimo | Público con certificado |
| **Consulta F931** | DDJJ Seguridad Social | **Exclusivo MTEySS** |

#### Proceso de Integración

1. Generar par de claves RSA (2048 bits)
2. Crear CSR (Certificate Signing Request)
3. Solicitar certificado en WSASS (homologación)
4. Asociar certificado al Web Service
5. Implementar cliente SOAP para WSAA + WS

**Alternativa:** [Afip SDK](https://afipsdk.com/) - API REST, SDKs múltiples lenguajes

---

### 2. ANSES - ALTA

**Relevancia:** Verificación de trabajadores
**URL:** https://www.anses.gob.ar/

#### Datos Disponibles

| Campo | Uso |
|-------|-----|
| CUIL trabajador | Identificación |
| Estado laboral | Verificar si está registrado |
| Empleador actual | Verificar relación laboral |
| Aportes previsionales | Historial de formalización |

#### Acceso
- Requiere convenio con MTEySS
- API no pública directamente

---

### 3. MTEySS - ALTA

**Relevancia:** Fiscalización y compliance
**URL:** https://www.trabajo.gob.ar/

#### Sistemas

| Sistema | Descripción |
|---------|-------------|
| SIMPLIFICA | Registro de empresas |
| REPSAL | Registro de sanciones |
| STESS | Sistema de trazabilidad textil |

#### Datos de Interés

- Registro de empleadores
- Inspecciones realizadas
- Sanciones vigentes
- Certificaciones de capacitación

---

### 4. INAES - MEDIA

**Relevancia:** Cooperativas
**URL:** https://www.argentina.gob.ar/inaes

#### Datos

| Campo | Uso |
|-------|-----|
| Matrícula cooperativa | Verificar existencia legal |
| Estado | Activa/Inactiva |
| Asociados | Cantidad de miembros |
| Actividad | Tipo de cooperativa |

---

### 5. RENAPER - BAJA (MVP)

**Relevancia:** Verificación de identidad
**URL:** https://www.argentina.gob.ar/interior/renaper

#### Uso Potencial
- Validar DNI de trabajadores
- Verificar datos biográficos

---

## Flujo de Verificación en Registro

```
1. Usuario ingresa CUIT
   │
2. Sistema consulta ARCA
   ├── ¿CUIT válido? → Continúa
   └── ¿CUIT inválido? → Error
   │
3. Sistema auto-completa:
   ├── Razón social
   ├── Condición IVA
   ├── Domicilio fiscal
   ├── Actividad económica
   └── Empleador S/N
   │
4. Usuario confirma datos
   │
5. Sistema determina nivel:
   ├── Empleador + F931 ok → ORO
   ├── Empleador sin F931 → PLATA
   └── No empleador → BRONCE
```

---

## Fases de Integración

### MVP (Meses 0-6)
- [ ] Consulta básica CUIT en ARCA (constancia inscripción)
- [ ] Validación manual de documentación
- [ ] Sin integración automática con ANSES/MTEySS

### Fase 1 (Meses 7-12)
- [ ] Integración completa con ARCA
- [ ] Convenio con MTEySS para acceso a F931
- [ ] Dashboard para inspectores con datos cruzados

### Fase 2 (Meses 13-24)
- [ ] Integración ANSES para verificar trabajadores
- [ ] Integración INAES para cooperativas
- [ ] Alertas automáticas por inconsistencias

---

## Consideraciones Legales

### Habeas Data
- Solo consultar datos con consentimiento del usuario
- No almacenar más de lo necesario
- Permitir rectificación y eliminación

### Convenios Necesarios
- MTEySS: Para acceso a F931 y REPSAL
- ANSES: Para verificación de trabajadores
- INAES: Para datos de cooperativas

### Seguridad
- Comunicaciones cifradas (TLS 1.3)
- Certificados digitales para autenticación
- Logs de auditoría de todas las consultas
- Datos sensibles encriptados at-rest

---

## Documento Completo

Ver: `../Plataforma/01_ANALISIS_TALLERES/Tercera co-creación con bilaterales/Entrevistas bilaterales/ESTRATEGIA_INTEGRACION_BASES_DATOS_ESTADO.md`
