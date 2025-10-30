/**
 * TUTORIAL CONTROLLER - MVP v1.3 Barreras
 * Sistema de tutoriales interactivos contextuales por barrera
 * Integración con navigation-controller y pantalla-info
 */

class TutorialController {
  constructor() {
    this.barreraActual = sessionStorage.getItem('barreraActual') || 'libre';
    this.currentPage = window.location.pathname.split('/').pop();
    this.pasoActual = 0;
    this.tutorialActivo = false;
    this.tutorialCompletado = this.cargarProgreso();
    this.elementos = {
      boton: null,
      overlay: null,
      spotlight: null,
      tooltip: null,
      banner: null,
      progressBar: null
    };
  }

  init() {
    // No mostrar tutorial en index.html
    if (this.currentPage === 'index.html') return;

    // Agregar botón flotante
    this.agregarBotonTutorial();

    // Auto-iniciar si es primera visita a esta pantalla en este contexto de barrera
    if (this.debeAutoIniciar()) {
      setTimeout(() => this.iniciarTutorial(), 1500);
    }
  }

  // ============================================
  // BOTÓN FLOTANTE
  // ============================================

  agregarBotonTutorial() {
    const button = document.createElement('button');
    button.id = 'tutorialButton';
    button.className = 'tutorial-button';
    button.innerHTML = '🎓';
    button.title = 'Activar tutorial de esta pantalla';
    button.setAttribute('aria-label', 'Tutorial interactivo');

    button.onclick = () => this.toggleTutorial();

    this.elementos.boton = button;
    document.body.appendChild(button);
  }

  toggleTutorial() {
    if (this.tutorialActivo) {
      this.cerrarTutorial();
    } else {
      this.iniciarTutorial();
    }
  }

  // ============================================
  // CONTROL DEL TUTORIAL
  // ============================================

  iniciarTutorial() {
    const tutorialData = this.obtenerTutorialActual();

    if (!tutorialData) {
      this.mostrarToast('No hay tutorial disponible para esta pantalla en el contexto actual', 'info');
      return;
    }

    if (tutorialData.pasos.length === 0) {
      this.mostrarToast('Tutorial en desarrollo para esta pantalla', 'warning');
      return;
    }

    this.tutorialActivo = true;
    this.pasoActual = 0;

    // Actualizar botón
    if (this.elementos.boton) {
      this.elementos.boton.classList.add('active');
    }

    // Crear overlay
    this.crearOverlay();

    // Mostrar banner de contexto si existe
    if (tutorialData.contextoBarrera) {
      this.mostrarBanner(tutorialData);
    }

    // Crear barra de progreso
    this.crearBarraProgreso(tutorialData.pasos.length);

    // Mostrar primer paso
    setTimeout(() => {
      this.mostrarPaso(0);
    }, 400);
  }

  obtenerTutorialActual() {
    // Verificar que TUTORIALES_BARRERAS esté definido
    if (typeof TUTORIALES_BARRERAS === 'undefined') {
      console.warn('TUTORIALES_BARRERAS no está definido. ¿Olvidaste cargar tutorial-data.js?');
      return null;
    }

    // En modo libre, usar tutoriales genéricos si existen
    if (this.barreraActual === 'libre') {
      return TUTORIALES_GENERICOS?.[this.currentPage] || null;
    }

    // En modo barrera, usar tutoriales específicos
    return TUTORIALES_BARRERAS[this.barreraActual]?.[this.currentPage] || null;
  }

  cerrarTutorial() {
    this.tutorialActivo = false;

    // Actualizar botón
    if (this.elementos.boton) {
      this.elementos.boton.classList.remove('active');
    }

    // Remover elementos
    this.limpiarElementos();

    // Mostrar toast de cierre
    if (this.pasoActual > 0) {
      this.mostrarToast('Tutorial pausado. Podés continuar más tarde.', 'info');
    }
  }

  // ============================================
  // MOSTRAR PASOS
  // ============================================

  mostrarPaso(index) {
    const tutorialData = this.obtenerTutorialActual();

    if (!tutorialData || index < 0 || index >= tutorialData.pasos.length) {
      return;
    }

    const paso = tutorialData.pasos[index];
    this.pasoActual = index;

    console.log(`📚 Tutorial paso ${index + 1}/${tutorialData.pasos.length}: ${paso.titulo}`);
    console.log(`🔍 Buscando selector: ${paso.selector}`);

    // Limpiar highlights anteriores
    this.limpiarHighlights();

    // Buscar elemento objetivo
    const elemento = this.buscarElemento(paso.selector);

    if (!elemento) {
      console.warn(`⚠️ Elemento no encontrado: ${paso.selector}`);
      console.log('ℹ️ Mostrando tooltip centrado sin highlight');
      // Mostrar tooltip sin highlight (centrado)
      this.crearTooltip(paso, null, index, tutorialData.pasos.length);
      this.actualizarBarraProgreso(index + 1, tutorialData.pasos.length);
      return;
    }

    console.log(`✓ Elemento encontrado, aplicando highlight`);

    // Scroll al elemento
    this.scrollToElement(elemento);

    // Aplicar highlight después del scroll
    setTimeout(() => {
      if (paso.destacar) {
        this.aplicarHighlight(elemento);
        console.log(`✨ Spotlight aplicado`);
      }

      // Crear tooltip
      this.crearTooltip(paso, elemento, index, tutorialData.pasos.length);

      // Actualizar barra de progreso
      this.actualizarBarraProgreso(index + 1, tutorialData.pasos.length);
    }, 300);
  }

  buscarElemento(selector) {
    try {
      // Intentar selector directo
      let elemento = document.querySelector(selector);
      if (elemento) {
        console.log(`✓ Elemento encontrado con selector: "${selector}"`);
        return elemento;
      }

      // Si el selector tiene :contains(), intentar buscar por texto
      if (selector.includes(':contains')) {
        const match = selector.match(/^(.+):contains\("(.+)"\)$/);
        if (match) {
          const [, baseSelector, texto] = match;
          const elementos = document.querySelectorAll(baseSelector || '*');
          for (const el of elementos) {
            if (el.textContent.includes(texto)) {
              console.log(`✓ Elemento encontrado con :contains("${texto}")`);
              return el;
            }
          }
        }
      }

      // Intentar selectores más simples si el selector es complejo
      if (selector.includes('.')) {
        const clases = selector.match(/\.[a-zA-Z0-9_-]+/g);
        if (clases && clases.length > 1) {
          // Intentar solo con la primera clase
          const selectorSimple = clases[0];
          elemento = document.querySelector(selectorSimple);
          if (elemento) {
            console.log(`✓ Elemento encontrado con selector simplificado: "${selectorSimple}"`);
            return elemento;
          }
        }
      }

      // Intentar con selectores alternativos comunes
      if (!selector.startsWith('#') && !selector.startsWith('.')) {
        elemento = document.getElementById(selector);
        if (elemento) {
          console.log(`✓ Elemento encontrado por ID: "${selector}"`);
          return elemento;
        }
      }

      console.warn(`✗ Elemento NO encontrado con selector: "${selector}"`);
      return null;
    } catch (error) {
      console.error(`Error al buscar elemento con selector "${selector}":`, error);
      return null;
    }
  }

  scrollToElement(elemento) {
    elemento.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }

  // ============================================
  // SPOTLIGHT (HIGHLIGHT)
  // ============================================

  aplicarHighlight(elemento) {
    const rect = elemento.getBoundingClientRect();

    const spotlight = document.createElement('div');
    spotlight.className = 'tutorial-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      top: ${rect.top - 8}px;
      left: ${rect.left - 8}px;
      width: ${rect.width + 16}px;
      height: ${rect.height + 16}px;
    `;

    this.elementos.spotlight = spotlight;
    document.body.appendChild(spotlight);
  }

  limpiarHighlights() {
    if (this.elementos.spotlight) {
      this.elementos.spotlight.remove();
      this.elementos.spotlight = null;
    }
  }

  // ============================================
  // TOOLTIP
  // ============================================

  crearTooltip(paso, elemento, index, total) {
    // Limpiar tooltip anterior
    if (this.elementos.tooltip) {
      this.elementos.tooltip.remove();
    }

    const tooltip = document.createElement('div');
    tooltip.id = 'tutorialTooltip';
    tooltip.className = 'tutorial-tooltip';

    // Calcular posición
    let top, left, transform;

    if (elemento) {
      const rect = elemento.getBoundingClientRect();
      const posicion = this.calcularPosicionTooltip(paso.posicion, rect);
      top = posicion.top;
      left = posicion.left;
      transform = posicion.transform;
    } else {
      // Si no hay elemento, centrar tooltip
      top = '50%';
      left = '50%';
      transform = 'translate(-50%, -50%)';
    }

    tooltip.style.cssText = `
      position: fixed;
      top: ${top};
      left: ${left};
      transform: ${transform};
    `;

    // Construir HTML del tooltip
    tooltip.innerHTML = `
      <div class="tutorial-tooltip-header">
        <div class="tutorial-tooltip-title">${paso.titulo}</div>
        <div class="tutorial-tooltip-progress">Paso ${index + 1} de ${total}</div>
      </div>
      <div class="tutorial-tooltip-body">
        ${paso.descripcion}
      </div>
      <div class="tutorial-tooltip-footer">
        <button class="tutorial-btn tutorial-btn-skip" onclick="window.tutorialController.saltarTutorial()">
          Saltar tutorial
        </button>
        ${index > 0 ? '<button class="tutorial-btn tutorial-btn-prev" onclick="window.tutorialController.pasoAnterior()">← Anterior</button>' : ''}
        ${index < total - 1
          ? '<button class="tutorial-btn tutorial-btn-next" onclick="window.tutorialController.pasoSiguiente()">Siguiente →</button>'
          : '<button class="tutorial-btn tutorial-btn-finish" onclick="window.tutorialController.finalizarTutorial()">✓ Finalizar</button>'}
      </div>
    `;

    this.elementos.tooltip = tooltip;
    document.body.appendChild(tooltip);

    // Ajustar posición si sale del viewport
    this.ajustarPosicionTooltip(tooltip);
  }

  calcularPosicionTooltip(posicion, rect) {
    let top, left, transform;

    switch (posicion) {
      case 'top':
        top = `${rect.top - 20}px`;
        left = `${rect.left + rect.width / 2}px`;
        transform = 'translate(-50%, -100%)';
        break;

      case 'bottom':
        top = `${rect.bottom + 20}px`;
        left = `${rect.left + rect.width / 2}px`;
        transform = 'translateX(-50%)';
        break;

      case 'left':
        top = `${rect.top + rect.height / 2}px`;
        left = `${rect.left - 20}px`;
        transform = 'translate(-100%, -50%)';
        break;

      case 'right':
        top = `${rect.top + rect.height / 2}px`;
        left = `${rect.right + 20}px`;
        transform = 'translateY(-50%)';
        break;

      default:
        // Default: bottom
        top = `${rect.bottom + 20}px`;
        left = `${rect.left + rect.width / 2}px`;
        transform = 'translateX(-50%)';
    }

    return { top, left, transform };
  }

  ajustarPosicionTooltip(tooltip) {
    // Verificar si el tooltip sale del viewport y ajustar
    setTimeout(() => {
      const rect = tooltip.getBoundingClientRect();

      if (rect.right > window.innerWidth - 20) {
        tooltip.style.left = `${window.innerWidth - rect.width - 20}px`;
        tooltip.style.transform = 'none';
      }

      if (rect.left < 20) {
        tooltip.style.left = '20px';
        tooltip.style.transform = 'none';
      }

      if (rect.bottom > window.innerHeight - 20) {
        tooltip.style.top = `${window.innerHeight - rect.height - 20}px`;
      }

      if (rect.top < 20) {
        tooltip.style.top = '20px';
      }
    }, 10);
  }

  // ============================================
  // NAVEGACIÓN ENTRE PASOS
  // ============================================

  pasoAnterior() {
    if (this.pasoActual > 0) {
      this.mostrarPaso(this.pasoActual - 1);
    }
  }

  pasoSiguiente() {
    const tutorialData = this.obtenerTutorialActual();
    if (this.pasoActual < tutorialData.pasos.length - 1) {
      this.mostrarPaso(this.pasoActual + 1);
    }
  }

  saltarTutorial() {
    const confirmar = confirm('¿Seguro que querés saltar este tutorial?\n\nPodés volver a activarlo haciendo click en el botón 🎓');

    if (confirmar) {
      this.cerrarTutorial();
    }
  }

  finalizarTutorial() {
    this.marcarComoCompletado();
    this.cerrarTutorial();
    this.mostrarToast('✓ Tutorial completado! Excelente trabajo.', 'success');
  }

  // ============================================
  // OVERLAY Y ELEMENTOS ADICIONALES
  // ============================================

  crearOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'tutorialOverlay';
    overlay.className = 'tutorial-overlay';

    // Cerrar al hacer click en el overlay (opcional)
    // overlay.onclick = () => this.saltarTutorial();

    this.elementos.overlay = overlay;
    document.body.appendChild(overlay);
  }

  mostrarBanner(tutorialData) {
    const banner = document.createElement('div');
    banner.className = 'tutorial-banner';

    banner.innerHTML = `
      <div class="tutorial-banner-icon">💡</div>
      <div class="tutorial-banner-title">${tutorialData.titulo}</div>
      <div class="tutorial-banner-desc">${tutorialData.contextoBarrera}</div>
    `;

    this.elementos.banner = banner;
    document.body.appendChild(banner);

    // Auto-ocultar después de 6 segundos
    setTimeout(() => {
      if (this.elementos.banner) {
        this.elementos.banner.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
          if (this.elementos.banner) {
            this.elementos.banner.remove();
            this.elementos.banner = null;
          }
        }, 300);
      }
    }, 6000);
  }

  crearBarraProgreso(total) {
    const container = document.createElement('div');
    container.className = 'tutorial-progress-bar';

    const fill = document.createElement('div');
    fill.className = 'tutorial-progress-fill';
    fill.style.width = '0%';

    container.appendChild(fill);
    this.elementos.progressBar = container;
    document.body.appendChild(container);
  }

  actualizarBarraProgreso(actual, total) {
    if (this.elementos.progressBar) {
      const fill = this.elementos.progressBar.querySelector('.tutorial-progress-fill');
      if (fill) {
        const porcentaje = (actual / total) * 100;
        fill.style.width = `${porcentaje}%`;
      }
    }
  }

  limpiarElementos() {
    // Remover overlay
    if (this.elementos.overlay) {
      this.elementos.overlay.remove();
      this.elementos.overlay = null;
    }

    // Remover spotlight
    this.limpiarHighlights();

    // Remover tooltip
    if (this.elementos.tooltip) {
      this.elementos.tooltip.remove();
      this.elementos.tooltip = null;
    }

    // Remover banner
    if (this.elementos.banner) {
      this.elementos.banner.remove();
      this.elementos.banner = null;
    }

    // Remover barra de progreso
    if (this.elementos.progressBar) {
      this.elementos.progressBar.remove();
      this.elementos.progressBar = null;
    }
  }

  // ============================================
  // GESTIÓN DE PROGRESO
  // ============================================

  cargarProgreso() {
    try {
      const saved = localStorage.getItem('tutorialesCompletados');
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error('Error al cargar progreso de tutoriales:', error);
      return {};
    }
  }

  marcarComoCompletado() {
    const key = `${this.barreraActual}_${this.currentPage}`;
    this.tutorialCompletado[key] = true;

    try {
      localStorage.setItem('tutorialesCompletados', JSON.stringify(this.tutorialCompletado));
    } catch (error) {
      console.error('Error al guardar progreso de tutoriales:', error);
    }
  }

  debeAutoIniciar() {
    // No auto-iniciar en modo libre
    if (this.barreraActual === 'libre') {
      return false;
    }

    // Verificar si ya fue completado
    const key = `${this.barreraActual}_${this.currentPage}`;
    if (this.tutorialCompletado[key]) {
      return false;
    }

    // Verificar si existe tutorial para esta pantalla
    const tutorialData = this.obtenerTutorialActual();
    if (!tutorialData || tutorialData.pasos.length === 0) {
      return false;
    }

    return true;
  }

  // ============================================
  // TOAST DE NOTIFICACIONES
  // ============================================

  mostrarToast(mensaje, tipo = 'info') {
    const toast = document.createElement('div');
    toast.className = `tutorial-toast ${tipo}`;
    toast.textContent = mensaje;

    document.body.appendChild(toast);

    // Auto-remover después de 3 segundos
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // ============================================
  // UTILIDADES
  // ============================================

  resetearTutoriales() {
    if (confirm('¿Seguro que querés resetear todos los tutoriales completados?\n\nEsto permitirá que vuelvan a mostrarse automáticamente.')) {
      localStorage.removeItem('tutorialesCompletados');
      this.tutorialCompletado = {};
      this.mostrarToast('Tutoriales reseteados exitosamente', 'success');
    }
  }
}

// ============================================
// INICIALIZACIÓN GLOBAL
// ============================================

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.tutorialController = new TutorialController();
    window.tutorialController.init();
  });
} else {
  window.tutorialController = new TutorialController();
  window.tutorialController.init();
}

// Exponer método de reset en consola para debugging
console.log('🎓 Tutorial Controller cargado. Para resetear tutoriales, usa: tutorialController.resetearTutoriales()');
