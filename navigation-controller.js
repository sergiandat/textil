/**
 * NAVIGATION CONTROLLER - MVP v1.3 Barreras
 * Sistema de navegación guiada para talleres de validación
 * Permite demostrar resolución de barreras específicas sin perder el foco
 */

// Definición de flujos por barrera
const FLUJOS_BARRERAS = {
  'libre': {
    nombre: 'Navegación Libre',
    descripcion: 'Explora todas las pantallas sin restricciones',
    pantallas: 'all', // Todas permitidas
    inicio: 'dashboard-v1.3.html'
  },

  'B1': {
    nombre: 'B1: Falta de Trazabilidad y Transparencia',
    descripcion: 'Demuestra cómo el sistema permite rastrear toda la cadena de producción',
    perfil: 'marca',
    flujo: [
      { pantalla: 'dashboard-v1.3.html', titulo: 'Dashboard Marca' },
      { pantalla: 'crear-pedido-v1.3.html', titulo: 'Crear Pedido con Trazabilidad' },
      { pantalla: 'seleccionar-proveedor.html', titulo: 'Matching Transparente' },
      { pantalla: 'acordar.html', titulo: 'Acuerdo Registrado' },
      { pantalla: 'ejecucion.html', titulo: 'Ejecución Visible' },
      { pantalla: 'logistica.html', titulo: 'Logística Rastreada' },
      { pantalla: 'pago.html', titulo: 'Pago Trazado' }
    ],
    inicio: 'dashboard-v1.3.html'
  },

  'B2': {
    nombre: 'B2: Desconfianza entre Actores',
    descripcion: 'Muestra cómo el sistema construye confianza mediante reputaciones verificables',
    perfil: 'marca',
    flujo: [
      { pantalla: 'dashboard-v1.3.html', titulo: 'Dashboard' },
      { pantalla: 'seleccionar-proveedor.html', titulo: 'Reputación Verificable' },
      { pantalla: 'acordar.html', titulo: 'Acuerdo con Garantía' },
      { pantalla: 'denuncias.html', titulo: 'Sistema de Denuncias' },
      { pantalla: 'auditorias.html', titulo: 'Auditorías y Seguimiento' },
      { pantalla: 'pago.html', titulo: 'Pago Garantizado' }
    ],
    inicio: 'dashboard-v1.3.html'
  },

  'B3': {
    nombre: 'B3: Proceso de Formalización Complejo y Costoso',
    descripcion: 'Simplifica la formalización dividiéndola en pasos incrementales',
    perfil: 'taller',
    flujo: [
      { pantalla: 'dashboard-v1.3.html', titulo: 'Dashboard Taller' },
      { pantalla: 'validaciones.html', titulo: 'Checklist de Formalización' },
      { pantalla: 'progreso-formalizacion.html', titulo: 'Cronograma con Asistencia' },
      { pantalla: 'capacitaciones.html', titulo: 'Capacitación sobre Formalización' },
      { pantalla: 'seleccionar-proveedor.html', titulo: 'Beneficios de Formalización' }
    ],
    inicio: 'validaciones.html'
  },

  'B4': {
    nombre: 'B4: Falta de Articulación entre Actores',
    descripcion: 'La plataforma como punto de encuentro y coordinación entre actores',
    perfil: 'tripartita',
    flujo: [
      { pantalla: 'dashboard-tripartito.html', titulo: 'Dashboard Integrado' },
      { pantalla: 'parametrizacion-algoritmo.html', titulo: 'Parametrización Colectiva' },
      { pantalla: 'auditorias.html', titulo: 'Coordinación de Inspecciones' },
      { pantalla: 'capacitaciones.html', titulo: 'Capacitación Coordinada' }
    ],
    inicio: 'dashboard-tripartito.html'
  },

  'B5': {
    nombre: 'B5: Estado Ausente o Ineficaz',
    descripcion: 'Amplifica la capacidad estatal mediante fiscalización dirigida',
    perfil: 'inspector',
    flujo: [
      { pantalla: 'auditorias.html', titulo: 'Fiscalización Inteligente' },
      { pantalla: 'denuncias.html', titulo: 'Coordinación con Denuncias' },
      { pantalla: 'dashboard-tripartito.html', titulo: 'Dashboard Estatal' },
      { pantalla: 'validaciones.html', titulo: 'Prevención vs Sanción' }
    ],
    inicio: 'auditorias.html'
  },

  'B6': {
    nombre: 'B6: Bajas Capacidades Técnicas y Gerenciales',
    descripcion: 'Universidad permanente del sector con certificaciones verificables',
    perfil: 'taller',
    flujo: [
      { pantalla: 'capacitaciones.html', titulo: 'Catálogo de Capacitaciones' },
      { pantalla: 'dashboard-v1.3.html', titulo: 'Dashboard con Certificados' },
      { pantalla: 'progreso-formalizacion.html', titulo: 'Aprendizaje Contextual' }
    ],
    inicio: 'capacitaciones.html'
  },

  'B7': {
    nombre: 'B7: Dumping Social y Competencia Desleal',
    descripcion: 'Nivela la cancha mediante visibilidad de formalización',
    perfil: 'marca',
    flujo: [
      { pantalla: 'dashboard-v1.3.html', titulo: 'Dashboard' },
      { pantalla: 'seleccionar-proveedor.html', titulo: 'Formalización Visible' },
      { pantalla: 'acordar.html', titulo: 'Comisiones Diferenciadas' },
      { pantalla: 'parametrizacion-algoritmo.html', titulo: 'Parametrización de Incentivos' },
      { pantalla: 'dashboard-tripartito.html', titulo: 'Monitoreo de Competencia' }
    ],
    inicio: 'seleccionar-proveedor.html'
  }
};

// Clase para gestionar la navegación
class NavigationController {
  constructor() {
    this.barreraActual = sessionStorage.getItem('barreraActual') || 'libre';
    this.init();
  }

  init() {
    const currentPage = window.location.pathname.split('/').pop();

    // Si estamos en index.html, no inicializar nada
    if (currentPage === 'index.html') {
      return;
    }

    // Agregar botón flotante de volver al menú
    this.agregarBotonMenu();

    // Interceptar clics en links
    this.interceptarNavegacion();

    // Mostrar badge de barrera actual
    this.mostrarBadgeBarrera();

    // Agregar indicador de progreso y botones de navegación (solo si NO es modo libre)
    if (this.barreraActual !== 'libre') {
      this.agregarIndicadorProgreso();
      this.agregarBotonesNavegacion();
    }
  }

  seleccionarBarrera(barrera) {
    sessionStorage.setItem('barreraActual', barrera);
    this.barreraActual = barrera;

    // Guardar perfil de usuario según la barrera
    const config = FLUJOS_BARRERAS[barrera];
    if (config && config.perfil) {
      const usuario = {
        tipo: config.perfil,
        id: config.perfil === 'marca' ? 'marca_001' : config.perfil === 'taller' ? 'tal_001' : config.perfil + '_001',
        nombre: config.perfil === 'marca' ? 'Urbano Kids' : config.perfil === 'taller' ? 'Confecciones Norte' : 'Usuario Demo',
        cuit: '30-91234567-5'
      };
      localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
    }

    // Ir a la pantalla de inicio del flujo
    if (config && config.inicio) {
      window.location.href = config.inicio;
    }
  }

  agregarBotonMenu() {
    // Botón flotante para volver al menú (esquina inferior izquierda)
    const boton = document.createElement('button');
    boton.id = 'botonVolverMenu';
    boton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      <span>Menú de Barreras</span>
    `;
    boton.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      background: white;
      border: 2px solid #e2e8f0;
      color: #475569;
      padding: 10px 16px;
      border-radius: 50px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      gap: 6px;
      z-index: 9999;
      transition: all 0.3s ease;
    `;
    boton.onmouseover = () => {
      boton.style.background = '#f8fafc';
      boton.style.borderColor = '#cbd5e1';
      boton.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    };
    boton.onmouseout = () => {
      boton.style.background = 'white';
      boton.style.borderColor = '#e2e8f0';
      boton.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    };
    boton.onclick = () => this.volverAlMenu();
    document.body.appendChild(boton);
  }

  mostrarBadgeBarrera() {
    if (this.barreraActual === 'libre') return;

    const config = FLUJOS_BARRERAS[this.barreraActual];
    if (!config) return;

    const badge = document.createElement('div');
    badge.id = 'badgeBarrera';
    badge.innerHTML = `
      <strong>${this.barreraActual}</strong>: ${config.nombre}
    `;
    badge.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: white;
      padding: 10px 20px;
      border-radius: 50px;
      font-size: 13px;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
      z-index: 9998;
      max-width: 600px;
      text-align: center;
    `;
    document.body.appendChild(badge);
  }

  interceptarNavegacion() {
    // Solo interceptar si no estamos en modo libre
    if (this.barreraActual === 'libre') return;

    const config = FLUJOS_BARRERAS[this.barreraActual];
    if (!config || !config.flujo) return;

    // Obtener lista de pantallas permitidas
    const pantallasPermitidas = config.flujo.map(paso => paso.pantalla);
    pantallasPermitidas.push('index.html'); // Siempre permitir volver al índice

    // Interceptar todos los clics en links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#' || href.startsWith('javascript:')) return;

      // Verificar si la pantalla está en el flujo permitido
      if (!pantallasPermitidas.includes(href)) {
        e.preventDefault();
        this.mostrarAdvertenciaFueraFlujo(href);
      }
    });
  }

  mostrarAdvertenciaFueraFlujo(pantalla) {
    const config = FLUJOS_BARRERAS[this.barreraActual];

    // Crear modal de advertencia
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
    `;

    modal.innerHTML = `
      <div style="
        background: white;
        padding: 30px;
        border-radius: 16px;
        max-width: 500px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
      ">
        <h3 style="
          font-size: 20px;
          font-weight: 700;
          color: #dc2626;
          margin: 0 0 15px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Fuera del flujo de demostración
        </h3>
        <p style="
          font-size: 15px;
          color: #475569;
          margin: 0 0 20px 0;
          line-height: 1.6;
        ">
          La pantalla <strong>"${pantalla}"</strong> no forma parte del flujo de demostración de <strong>${config.nombre}</strong>.
        </p>
        <p style="
          font-size: 14px;
          color: #64748b;
          margin: 0 0 25px 0;
          padding: 15px;
          background: #f1f5f9;
          border-radius: 8px;
          border-left: 4px solid #f59e0b;
        ">
          💡 <strong>Recordatorio:</strong> Estás en un flujo guiado para validar cómo esta barrera se resuelve. Si querés explorar libremente, volvé al menú y elegí "Navegación Libre".
        </p>
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
          <button id="btnCancelar" style="
            padding: 10px 20px;
            border: 2px solid #cbd5e1;
            background: white;
            color: #475569;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 14px;
          ">Seguir en el flujo</button>
          <button id="btnIrIgual" style="
            padding: 10px 20px;
            border: none;
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 14px;
            box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
          ">Ir igual (salir del flujo)</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Event listeners
    modal.querySelector('#btnCancelar').onclick = () => {
      document.body.removeChild(modal);
    };

    modal.querySelector('#btnIrIgual').onclick = () => {
      // Cambiar a modo libre y navegar
      sessionStorage.setItem('barreraActual', 'libre');
      window.location.href = pantalla;
    };

    // Cerrar al hacer clic fuera
    modal.onclick = (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    };
  }

  volverAlMenu() {
    sessionStorage.removeItem('barreraActual');
    window.location.href = 'index.html';
  }

  obtenerProgresoFlujo() {
    if (this.barreraActual === 'libre') return null;

    const config = FLUJOS_BARRERAS[this.barreraActual];
    if (!config || !config.flujo) return null;

    const currentPage = window.location.pathname.split('/').pop();
    const indexActual = config.flujo.findIndex(paso => paso.pantalla === currentPage);

    return {
      actual: indexActual + 1,
      total: config.flujo.length,
      pantallas: config.flujo,
      indexActual: indexActual
    };
  }

  agregarIndicadorProgreso() {
    const progreso = this.obtenerProgresoFlujo();
    if (!progreso || progreso.indexActual === -1) return;

    const config = FLUJOS_BARRERAS[this.barreraActual];
    const porcentaje = ((progreso.actual) / progreso.total) * 100;

    const indicador = document.createElement('div');
    indicador.id = 'indicadorProgreso';
    indicador.style.cssText = `
      position: fixed;
      top: 70px;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      padding: 12px 24px;
      border-radius: 50px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 9997;
      min-width: 400px;
    `;

    indicador.innerHTML = `
      <div style="text-align: center; margin-bottom: 8px;">
        <span style="font-size: 12px; color: #64748b; font-weight: 600;">
          Paso ${progreso.actual} de ${progreso.total}
        </span>
        <span style="font-size: 11px; color: #94a3b8; margin-left: 8px;">
          ${config.flujo[progreso.indexActual].titulo}
        </span>
      </div>
      <div style="
        width: 100%;
        height: 6px;
        background: #e2e8f0;
        border-radius: 3px;
        overflow: hidden;
      ">
        <div style="
          width: ${porcentaje}%;
          height: 100%;
          background: linear-gradient(90deg, #0ea5e9 0%, #0284c7 100%);
          transition: width 0.3s ease;
        "></div>
      </div>
    `;

    document.body.appendChild(indicador);
  }

  agregarBotonesNavegacion() {
    const progreso = this.obtenerProgresoFlujo();
    if (!progreso || progreso.indexActual === -1) return;

    const config = FLUJOS_BARRERAS[this.barreraActual];

    // Contenedor de botones
    const contenedor = document.createElement('div');
    contenedor.id = 'botonesNavegacion';
    contenedor.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 12px;
      z-index: 9999;
    `;

    // Botón Anterior (solo si no estamos en la primera pantalla)
    if (progreso.indexActual > 0) {
      const btnAnterior = document.createElement('button');
      btnAnterior.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        <span>Anterior</span>
      `;
      btnAnterior.style.cssText = `
        padding: 10px 18px;
        background: white;
        border: 2px solid #cbd5e1;
        color: #475569;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease;
      `;
      btnAnterior.onmouseover = () => {
        btnAnterior.style.background = '#f8fafc';
        btnAnterior.style.borderColor = '#94a3b8';
      };
      btnAnterior.onmouseout = () => {
        btnAnterior.style.background = 'white';
        btnAnterior.style.borderColor = '#cbd5e1';
      };
      btnAnterior.onclick = () => {
        const pantallaAnterior = config.flujo[progreso.indexActual - 1].pantalla;
        window.location.href = pantallaAnterior;
      };
      contenedor.appendChild(btnAnterior);
    }

    // Botón Siguiente (solo si no estamos en la última pantalla)
    if (progreso.indexActual < config.flujo.length - 1) {
      const btnSiguiente = document.createElement('button');
      btnSiguiente.innerHTML = `
        <span>Siguiente</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      `;
      btnSiguiente.style.cssText = `
        padding: 10px 18px;
        background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
        border: none;
        color: white;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);
        transition: all 0.2s ease;
      `;
      btnSiguiente.onmouseover = () => {
        btnSiguiente.style.transform = 'translateY(-2px)';
        btnSiguiente.style.boxShadow = '0 6px 16px rgba(14, 165, 233, 0.5)';
      };
      btnSiguiente.onmouseout = () => {
        btnSiguiente.style.transform = 'translateY(0)';
        btnSiguiente.style.boxShadow = '0 4px 12px rgba(14, 165, 233, 0.4)';
      };
      btnSiguiente.onclick = () => {
        const pantallaSiguiente = config.flujo[progreso.indexActual + 1].pantalla;
        window.location.href = pantallaSiguiente;
      };
      contenedor.appendChild(btnSiguiente);
    } else {
      // Si estamos en la última pantalla, mostrar botón "Finalizar"
      const btnFinalizar = document.createElement('button');
      btnFinalizar.innerHTML = `
        <span>Finalizar y Volver al Menú</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      `;
      btnFinalizar.style.cssText = `
        padding: 10px 18px;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        border: none;
        color: white;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
        transition: all 0.2s ease;
      `;
      btnFinalizar.onmouseover = () => {
        btnFinalizar.style.transform = 'translateY(-2px)';
        btnFinalizar.style.boxShadow = '0 6px 16px rgba(16, 185, 129, 0.5)';
      };
      btnFinalizar.onmouseout = () => {
        btnFinalizar.style.transform = 'translateY(0)';
        btnFinalizar.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.4)';
      };
      btnFinalizar.onclick = () => {
        this.volverAlMenu();
      };
      contenedor.appendChild(btnFinalizar);
    }

    document.body.appendChild(contenedor);
  }
}

// Inicializar controlador cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.navController = new NavigationController();
  });
} else {
  window.navController = new NavigationController();
}
