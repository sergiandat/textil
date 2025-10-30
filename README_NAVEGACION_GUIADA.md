# Sistema de Navegación Guiada - MVP v1.3 Barreras

## 📋 Descripción General

El MVP v1.3 implementa un **sistema de navegación guiada por barreras** diseñado específicamente para **talleres de validación** con actores del sector textil. Este sistema resuelve un problema crítico: **mantener el foco durante las demostraciones**.

### Problema que Resuelve

Durante los talleres de validación, los participantes tienden a:
- ❌ Hacer clic en cualquier botón o enlace
- ❌ Perderse del flujo que demuestra cómo se resuelve una barrera específica
- ❌ Dispersarse explorando funcionalidades no relacionadas
- ❌ Perder de vista el **problema central** que la plataforma intenta resolver

### Solución Implementada

✅ **Menú de Barreras**: Pantalla inicial que permite seleccionar qué barrera demostrar
✅ **Flujos Guiados**: Navegación restringida a las pantallas relevantes para cada barrera
✅ **Advertencias Contextuales**: Popup cuando se intenta salir del flujo
✅ **Navegación Libre**: Opción para explorar sin restricciones
✅ **Botón "Volver al Menú"**: Siempre visible para regresar al selector de barreras

---

## 🚀 Cómo Usar el Sistema

### 1. Inicio

Abrir: `index.html`

Verás el **Menú de Navegación por Barreras** con 8 opciones:

```
┌─────────────────────────────────────┐
│  MVP v1.3: Navegación por Barreras  │
├─────────────────────────────────────┤
│ [B1] Falta de Trazabilidad          │
│ [B2] Desconfianza entre Actores     │
│ [B3] Formalización Compleja         │
│ [B4] Falta de Articulación          │
│ [B5] Estado Ausente o Ineficaz      │
│ [B6] Bajas Capacidades              │
│ [B7] Dumping Social                 │
│                                     │
│ [✨] Navegación Libre               │
└─────────────────────────────────────┘
```

### 2. Seleccionar una Barrera

**Ejemplo**: Haces clic en **"B1: Falta de Trazabilidad"**

El sistema:
1. Guarda en `sessionStorage` que estás en modo "B1"
2. Configura el perfil de usuario apropiado (Marca)
3. Te redirige a la primera pantalla del flujo: `dashboard-v1.3.html`

### 3. Navegación Guiada

Mientras estés en el flujo de B1, verás:

**Badge Superior** (naranja):
```
┌───────────────────────────────────────────┐
│ B1: Falta de Trazabilidad y Transparencia │
└───────────────────────────────────────────┘
```

**Botón Flotante Inferior Derecho** (azul):
```
┌─────────────────┐
│ 🏠 Volver al Menú│
└─────────────────┘
```

**Pantallas Permitidas** (solo para B1):
- ✅ dashboard-v1.3.html
- ✅ crear-pedido-v1.3.html
- ✅ seleccionar-proveedor.html
- ✅ acordar.html
- ✅ ejecucion.html
- ✅ logistica.html
- ❌ Cualquier otra pantalla → **Advertencia**

### 4. Advertencia al Salir del Flujo

Si intentas hacer clic en un enlace que NO está en el flujo (ej: `denuncias.html`), aparece un **popup modal**:

```
┌──────────────────────────────────────────────┐
│ ⚠️  Fuera del flujo de demostración           │
├──────────────────────────────────────────────┤
│                                              │
│ La pantalla "denuncias.html" no forma parte │
│ del flujo de demostración de:                │
│                                              │
│ B1: Falta de Trazabilidad y Transparencia   │
│                                              │
│ 💡 Recordatorio:                             │
│ Estás en un flujo guiado para validar cómo  │
│ esta barrera se resuelve. Si querés         │
│ explorar libremente, volvé al menú y elegí  │
│ "Navegación Libre".                          │
│                                              │
│  [Seguir en el flujo]  [Ir igual ➜]         │
└──────────────────────────────────────────────┘
```

**Opciones**:
- **"Seguir en el flujo"**: Cierra el popup, te quedas en la pantalla actual
- **"Ir igual"**: Cambia a modo "Navegación Libre" y te lleva a la pantalla clickeada

### 5. Volver al Menú

En cualquier momento, haces clic en **"Volver al Menú"** (botón flotante) y regresas a `index.html` para seleccionar otra barrera o navegación libre.

---

## 📊 Flujos Definidos por Barrera

### B1: Falta de Trazabilidad y Transparencia
**Perfil**: Marca
**Pantallas**: 7
**Flujo**:
1. dashboard-v1.3.html → Dashboard Marca
2. crear-pedido-v1.3.html → Crear Pedido con Trazabilidad
3. seleccionar-proveedor.html → Matching Transparente
4. acordar.html → Acuerdo Registrado
5. ejecucion.html → Ejecución Visible
6. logistica.html → Logística Rastreada
7. (Sin pago.html en MVP actual, flujo termina aquí)

### B2: Desconfianza entre Actores
**Perfil**: Marca
**Pantallas**: 6
**Flujo**:
1. dashboard-v1.3.html
2. seleccionar-proveedor.html → Reputación Verificable
3. acordar.html → Acuerdo con Garantía
4. denuncias.html → Sistema de Denuncias
5. auditorias.html → Auditorías y Seguimiento
6. (Sin pago.html en MVP actual)

### B3: Proceso de Formalización Complejo
**Perfil**: Taller
**Pantallas**: 5
**Flujo**:
1. validaciones.html → Checklist de Formalización
2. progreso-formalizacion.html → Cronograma con Asistencia
3. capacitaciones.html → Capacitación sobre Formalización
4. seleccionar-proveedor.html → Beneficios de Formalización
5. dashboard-v1.3.html → Dashboard Taller

### B4: Falta de Articulación entre Actores
**Perfil**: Mesa Tripartita
**Pantallas**: 4
**Flujo**:
1. dashboard-tripartito.html → Dashboard Integrado
2. parametrizacion-algoritmo.html → Parametrización Colectiva
3. auditorias.html → Coordinación de Inspecciones
4. capacitaciones.html → Capacitación Coordinada

### B5: Estado Ausente o Ineficaz
**Perfil**: Inspector
**Pantallas**: 4
**Flujo**:
1. auditorias.html → Fiscalización Inteligente
2. denuncias.html → Coordinación con Denuncias
3. dashboard-tripartito.html → Dashboard Estatal
4. validaciones.html → Prevención vs Sanción

### B6: Bajas Capacidades Técnicas y Gerenciales
**Perfil**: Taller
**Pantallas**: 3
**Flujo**:
1. capacitaciones.html → Catálogo de Capacitaciones
2. dashboard-v1.3.html → Dashboard con Certificados
3. progreso-formalizacion.html → Aprendizaje Contextual

### B7: Dumping Social y Competencia Desleal
**Perfil**: Marca
**Pantallas**: 5
**Flujo**:
1. seleccionar-proveedor.html → Formalización Visible
2. acordar.html → Comisiones Diferenciadas
3. parametrizacion-algoritmo.html → Parametrización de Incentivos
4. dashboard-tripartito.html → Monitoreo de Competencia
5. dashboard-v1.3.html → Dashboard

### Navegación Libre
**Perfil**: Todos
**Pantallas**: 22 (todas)
**Restricciones**: Ninguna

---

## 🛠️ Arquitectura Técnica

### Archivos del Sistema

```
mvp_v1.3_barreras/
├── index.html                        # Menú principal de barreras
├── navigation-controller.js          # Lógica de navegación guiada
├── NAVEGACION_POR_BARRERAS.md       # Guía completa de flujos
├── README_NAVEGACION_GUIADA.md      # Este archivo
└── [20 pantallas HTML].html         # Todas incluyen navigation-controller.js
```

### Componentes del Sistema

#### 1. `index.html`
- **Función**: Pantalla de selección de barreras
- **Diseño**: Grid de 8 tarjetas (7 barreras + 1 navegación libre)
- **Estilos**: CSS inline con gradientes y efectos hover
- **JavaScript**: Función `seleccionarBarrera(barrera)` que inicializa el controlador

#### 2. `navigation-controller.js`
- **Clase**: `NavigationController`
- **Storage**: Usa `sessionStorage.barreraActual` para persistir selección
- **Funciones principales**:
  - `seleccionarBarrera(barrera)`: Guarda barrera y redirige a inicio
  - `agregarBotonMenu()`: Crea botón flotante "Volver al Menú"
  - `mostrarBadgeBarrera()`: Crea badge superior con nombre de barrera
  - `interceptarNavegacion()`: Intercepta clics en links y valida si están en flujo
  - `mostrarAdvertenciaFueraFlujo(pantalla)`: Muestra modal de advertencia
  - `volverAlMenu()`: Limpia storage y redirige a index

#### 3. Constante `FLUJOS_BARRERAS`
Objeto que define configuración de cada barrera:

```javascript
'B1': {
  nombre: 'B1: Falta de Trazabilidad y Transparencia',
  descripcion: 'Demuestra cómo el sistema permite rastrear...',
  perfil: 'marca',
  flujo: [
    { pantalla: 'dashboard-v1.3.html', titulo: 'Dashboard Marca' },
    { pantalla: 'crear-pedido-v1.3.html', titulo: 'Crear Pedido' },
    // ...
  ],
  inicio: 'dashboard-v1.3.html'
}
```

### Flujo de Ejecución

```
1. Usuario abre index.html
   ↓
2. Hace clic en tarjeta de barrera (ej: B1)
   ↓
3. seleccionarBarrera('B1') ejecuta:
   - sessionStorage.setItem('barreraActual', 'B1')
   - localStorage.setItem('usuarioActivo', {tipo: 'marca', ...})
   - window.location.href = 'dashboard-v1.3.html'
   ↓
4. dashboard-v1.3.html carga
   ↓
5. navigation-controller.js se ejecuta automáticamente:
   - Lee sessionStorage.barreraActual → 'B1'
   - Agrega botón "Volver al Menú"
   - Agrega badge "B1: Falta de Trazabilidad..."
   - Intercepta eventos click en todos los <a>
   ↓
6. Usuario navega normalmente por el flujo
   ↓
7. Si usuario hace clic en link fuera del flujo:
   - Evento es interceptado (preventDefault())
   - Se muestra modal de advertencia
   - Usuario decide: "Seguir en flujo" o "Ir igual"
   ↓
8. Si elige "Ir igual":
   - sessionStorage.setItem('barreraActual', 'libre')
   - window.location.href = pantalla clickeada
   ↓
9. En cualquier momento, usuario puede:
   - Clic en "Volver al Menú" → Regresa a index.html
   - sessionStorage.removeItem('barreraActual')
```

---

## 🎯 Casos de Uso

### Caso 1: Taller de Validación con Marcas (B1)

**Contexto**: Facilitador presenta a 15 marcas cómo la plataforma resuelve la falta de trazabilidad.

**Pasos**:
1. Proyectar pantalla grande
2. Abrir `index.html`
3. Hacer clic en **"B1: Falta de Trazabilidad"**
4. Explicar cada pantalla del flujo mientras navegas:
   - Dashboard → "Aquí ven sus pedidos activos"
   - Crear Pedido → "Cada pedido tiene ID trazable"
   - Seleccionar Proveedor → "Ven certificaciones del taller"
   - Acordar → "Todos los términos quedan registrados"
   - Ejecución → "Pueden seguir progreso en tiempo real"
   - Logística → "Coordinan retiro con transparencia"
5. Si alguien pregunta sobre denuncias → **NO salir del flujo**
   - Explicar que eso es parte de B2
   - Al finalizar B1, volver al menú y mostrar B2
6. Volver al menú
7. Pedir feedback específico sobre B1

**Ventaja**: Los participantes no se distraen con otras funcionalidades. El foco está 100% en trazabilidad.

### Caso 2: Taller con Talleres Semi-formales (B3)

**Contexto**: Facilitador muestra a dueños de talleres cómo formalizarse progresivamente.

**Pasos**:
1. Abrir `index.html`
2. Hacer clic en **"B3: Proceso de Formalización Complejo"**
3. Navegar el flujo:
   - Validaciones → "Checklist visual de qué te falta"
   - Progreso Formalización → "Paso a paso con ayuda"
   - Capacitaciones → "Cursos gratuitos para aprender"
   - Seleccionar Proveedor → "Beneficios concretos: más pedidos"
4. Preguntar: "¿El checklist de 8 validaciones cubre lo que necesitan?"
5. Anotar feedback específico sobre B3

**Ventaja**: El taller se centra en formalización, no se pierde viendo matching o denuncias.

### Caso 3: Demostración Técnica General (Navegación Libre)

**Contexto**: Desarrollador o stakeholder técnico quiere explorar toda la plataforma.

**Pasos**:
1. Abrir `index.html`
2. Hacer clic en **"✨ Navegación Libre"**
3. Explorar sin restricciones todas las 22 pantallas
4. No aparecen advertencias ni badges

**Ventaja**: Libertad total para entender la arquitectura completa.

---

## 🔧 Personalización

### Agregar una Nueva Barrera (Ejemplo: B8)

**1. Editar `navigation-controller.js`**:

```javascript
'B8': {
  nombre: 'B8: Otra Barrera',
  descripcion: 'Descripción de cómo se resuelve',
  perfil: 'marca',  // o 'taller', 'inspector', 'tripartita'
  flujo: [
    { pantalla: 'pantalla1.html', titulo: 'Título Paso 1' },
    { pantalla: 'pantalla2.html', titulo: 'Título Paso 2' },
    // ...
  ],
  inicio: 'pantalla1.html'
}
```

**2. Editar `index.html`**:

Agregar tarjeta en el grid:

```html
<div class="barrera-card" onclick="seleccionarBarrera('B8')">
  <span class="barrera-tag">B8</span>
  <h3 class="barrera-nombre">Otra Barrera</h3>
  <p class="barrera-desc">Descripción breve...</p>
  <div class="barrera-meta">
    <span>Marca</span>
    <span>3 pantallas</span>
  </div>
</div>
```

**3. Actualizar `NAVEGACION_POR_BARRERAS.md`**:

Agregar sección documentando el flujo completo de B8.

### Modificar un Flujo Existente

**Ejemplo**: Agregar `pago.html` al flujo de B1

**Editar `navigation-controller.js`**:

```javascript
'B1': {
  // ...
  flujo: [
    { pantalla: 'dashboard-v1.3.html', titulo: 'Dashboard Marca' },
    { pantalla: 'crear-pedido-v1.3.html', titulo: 'Crear Pedido' },
    { pantalla: 'seleccionar-proveedor.html', titulo: 'Matching' },
    { pantalla: 'acordar.html', titulo: 'Acuerdo' },
    { pantalla: 'ejecucion.html', titulo: 'Ejecución' },
    { pantalla: 'logistica.html', titulo: 'Logística' },
    { pantalla: 'pago.html', titulo: 'Pago Trazado' },  // ← NUEVO
  ],
  // ...
}
```

**Actualizar `NAVEGACION_POR_BARRERAS.md`** con la nueva pantalla.

---

## ⚠️ Limitaciones y Consideraciones

### 1. Solo Valida Links `<a href>`

El sistema intercepta clics en elementos `<a>`. Si hay navegación mediante:
- Botones con `onclick="window.location.href = ..."`
- JavaScript que cambia location directamente

**Solución**: Usar siempre `<a href="pantalla.html">` para navegación.

### 2. SessionStorage se Limpia al Cerrar Pestaña

Si el usuario cierra la pestaña y la reabre, pierde la selección de barrera.

**Esto es intencional**: Cada sesión de taller empieza desde el menú.

### 3. No Valida Navegación "Atrás" del Navegador

Si el usuario usa el botón "Atrás" del navegador, puede salir del flujo sin advertencia.

**Solución parcial**: Educar a facilitadores para no usar botón Atrás.

### 4. Pantallas Duplicadas Pueden Confundir

Algunas pantallas aparecen en múltiples flujos (ej: `capacitaciones.html` en B3, B4, B6).

**Esto es correcto**: La misma pantalla se usa con diferente **énfasis** según la barrera. La guía `NAVEGACION_POR_BARRERAS.md` documenta qué mostrar en cada caso.

---

## 📚 Documentación Relacionada

- **`NAVEGACION_POR_BARRERAS.md`**: Guía detallada de qué mostrar en cada pantalla de cada flujo. Incluye preguntas de validación, actores relevantes, y casos de uso.

- **`MAPEO_BARRERAS_INTERFASES.md`**: Especificación técnica de cómo cada barrera se mapea a funciones y pantallas.

- **`navigation-controller.js`**: Código fuente del sistema de navegación (comentado).

---

## 🎬 Video Tutorial (Futuro)

_Pendiente: Grabar screencast demostrando:_
1. Selección de barrera
2. Navegación guiada
3. Advertencia al salir del flujo
4. Volver al menú
5. Navegación libre

---

## 📞 Soporte

**Desarrollado por**: Claude (Anthropic) + Usuario (OIT-UNTREF)
**Versión**: 1.0
**Fecha**: Enero 2025
**Licencia**: Uso interno OIT-UNTREF

Para consultas técnicas sobre el sistema de navegación, revisar el código en `navigation-controller.js` (completamente comentado).
