/**
 * PLATAFORMA TEXTIL OIT - MVP v1
 * Funciones compartidas JavaScript
 */

// ============================================
// NAVEGACIÓN Y URL PARAMS
// ============================================

function getUrlParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function navigateTo(page, params = {}) {
  let url = page;
  const paramString = new URLSearchParams(params).toString();
  if (paramString) {
    url += '?' + paramString;
  }
  window.location.href = url;
}

// ============================================
// GESTIÓN DE ESTADO (localStorage)
// ============================================

function saveToLocalStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error guardando en localStorage:', e);
  }
}

function getFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Error leyendo de localStorage:', e);
    return null;
  }
}

function clearLocalStorage(key) {
  localStorage.removeItem(key);
}

// ============================================
// FORMATEO DE DATOS
// ============================================

function formatMoney(amount) {
  return '$' + amount.toLocaleString('es-AR');
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatDateRelative(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Hoy';
  if (diffDays === 1) return 'Ayer';
  if (diffDays < 30) return `Hace ${diffDays} días`;
  if (diffDays < 365) return `Hace ${Math.floor(diffDays / 30)} meses`;
  return `Hace ${Math.floor(diffDays / 365)} años`;
}

function calculateDaysRemaining(targetDate) {
  const target = new Date(targetDate);
  const now = new Date();
  const diffDays = Math.ceil((target - now) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return `Atrasado ${Math.abs(diffDays)} días`;
  if (diffDays === 0) return 'Hoy';
  if (diffDays === 1) return 'Mañana';
  return `Quedan ${diffDays} días`;
}

// ============================================
// FILTRADO DE TALLERES
// ============================================

function filterTalleres(talleres, filtros) {
  return talleres.filter(taller => {
    // Filtro por nivel
    if (filtros.niveles && filtros.niveles.length > 0) {
      if (!filtros.niveles.includes(taller.nivel)) return false;
    }

    // Filtro por ubicación
    if (filtros.ubicacion && filtros.ubicacion.length > 0) {
      const enUbicacion = filtros.ubicacion.some(ub => taller.ubicacion.includes(ub));
      if (!enUbicacion) return false;
    }

    // Filtro por rating mínimo
    if (filtros.ratingMin && taller.rating < filtros.ratingMin) {
      return false;
    }

    // Filtro por capacidad (proceso específico)
    if (filtros.procesos && filtros.procesos.length > 0) {
      const tieneCapacidad = filtros.procesos.every(proceso =>
        taller.capacidades.includes(proceso)
      );
      if (!tieneCapacidad) return false;
    }

    // Filtro por prenda
    if (filtros.prenda) {
      if (!taller.especializacion.includes(filtros.prenda)) return false;
    }

    return true;
  });
}

// ============================================
// ORDENAMIENTO DE TALLERES
// ============================================

function sortTalleres(talleres, criterio = 'compatibilidad') {
  const talleresOrdenados = [...talleres];

  switch (criterio) {
    case 'compatibilidad':
      talleresOrdenados.sort((a, b) => (b.compat_jean || 0) - (a.compat_jean || 0));
      break;
    case 'rating':
      talleresOrdenados.sort((a, b) => b.rating - a.rating);
      break;
    case 'precio':
      talleresOrdenados.sort((a, b) => (a.precio_confeccion || 0) - (b.precio_confeccion || 0));
      break;
    case 'cercania':
      talleresOrdenados.sort((a, b) => (a.distancia_marca || 999) - (b.distancia_marca || 999));
      break;
    case 'nivel':
      const nivelOrder = {ORO: 3, PLATA: 2, BRONCE: 1};
      talleresOrdenados.sort((a, b) => nivelOrder[b.nivel] - nivelOrder[a.nivel]);
      break;
  }

  return talleresOrdenados;
}

// ============================================
// GENERACIÓN DINÁMICA DE RUTA DE PROCESOS
// ============================================

function getProcesosParaPrenda(prendaId) {
  const prenda = catalogoPrendas.find(p => p.id === prendaId);
  return prenda ? prenda.procesos : [];
}

function renderProcesosRuta(procesos, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = '';

  procesos.forEach((proceso, index) => {
    const pill = document.createElement('span');
    pill.className = 'pill pill-sky';
    pill.textContent = proceso;
    container.appendChild(pill);

    if (index < procesos.length - 1) {
      const arrow = document.createElement('span');
      arrow.textContent = '→';
      container.appendChild(arrow);
    }
  });
}

// ============================================
// CÁLCULOS DE PEDIDO
// ============================================

function calculatePedidoTotal(cantidad, precioPorUnidad) {
  return cantidad * precioPorUnidad;
}

function calculateProgresoTotal(eslabones) {
  if (!eslabones || eslabones.length === 0) return 0;

  const progresoTotal = eslabones.reduce((sum, eslabon) => sum + eslabon.progreso, 0);
  return Math.round(progresoTotal / eslabones.length);
}

// ============================================
// RENDERIZADO DE BADGES
// ============================================

function renderBadge(badge) {
  return `<span class="badge badge-${badge.color}">${badge.label}</span>`;
}

function renderBadges(badges, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = badges.map(renderBadge).join(' ');
}

// ============================================
// RENDERIZADO DE RATING
// ============================================

function renderRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let html = '';
  for (let i = 0; i < fullStars; i++) html += '★';
  if (halfStar) html += '⯪';
  for (let i = 0; i < emptyStars; i++) html += '☆';

  return `<span class="text-amber-700">${html}</span>`;
}

// ============================================
// PROGRESS BAR
// ============================================

function renderProgressBar(progreso, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = `
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${progreso}%"></div>
    </div>
  `;
}

// ============================================
// TABS INTERACTIVOS
// ============================================

function initTabs(tabsSelector, contentSelector) {
  const tabs = document.querySelectorAll(tabsSelector);
  const contents = document.querySelectorAll(contentSelector);

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Remover active de todos
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.add('hidden'));

      // Activar el clickeado
      tab.classList.add('active');
      if (contents[index]) {
        contents[index].classList.remove('hidden');
      }
    });
  });
}

// ============================================
// FILTROS INTERACTIVOS
// ============================================

function initCheckboxFilters(formSelector, onFilterChange) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  const checkboxes = form.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const filtros = {};

      // Recopilar niveles
      const nivelesChecked = form.querySelectorAll('[data-filter="nivel"]:checked');
      filtros.niveles = Array.from(nivelesChecked).map(cb => cb.value);

      // Recopilar ubicaciones
      const ubicacionesChecked = form.querySelectorAll('[data-filter="ubicacion"]:checked');
      filtros.ubicacion = Array.from(ubicacionesChecked).map(cb => cb.value);

      // Rating mínimo
      const ratingInput = form.querySelector('[data-filter="rating"]');
      if (ratingInput) {
        filtros.ratingMin = parseFloat(ratingInput.value);
      }

      onFilterChange(filtros);
    });
  });
}

// ============================================
// NAVBAR ACTIVO
// ============================================

function setActiveNav(currentPage) {
  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    const href = tab.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
    if (href && href.includes(currentPage)) {
      tab.classList.add('active');
    }
  });
}

// ============================================
// SEARCH BAR
// ============================================

function initSearchBar(inputSelector, dataArray, onSearch) {
  const input = document.querySelector(inputSelector);
  if (!input) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    if (query.length === 0) {
      onSearch(dataArray);
      return;
    }

    const filtered = dataArray.filter(item => {
      return item.nombre?.toLowerCase().includes(query) ||
             item.cuit?.toLowerCase().includes(query) ||
             item.ubicacion?.toLowerCase().includes(query);
    });

    onSearch(filtered);
  });
}

// ============================================
// MODAL SIMPLE
// ============================================

function showModal(title, content) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  `;

  modal.innerHTML = `
    <div class="section-card" style="max-width: 500px; width: 90%;">
      <h3 class="section-title mb-3">${title}</h3>
      <div class="text-sm text-slate-700">${content}</div>
      <button class="btn btn-primary mt-4" onclick="this.closest('.modal-overlay').remove()">
        Cerrar
      </button>
    </div>
  `;

  document.body.appendChild(modal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `alert alert-${type}`;
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    max-width: 400px;
    animation: slideIn 0.3s ease-out;
  `;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================
// INICIALIZACIÓN COMÚN
// ============================================

function initCommonFeatures() {
  // Configurar eventos de navegación
  const navLinks = document.querySelectorAll('[data-nav]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-nav');
      navigateTo(page);
    });
  });

  // Tooltip simple en badges
  const badges = document.querySelectorAll('.badge');
  badges.forEach(badge => {
    badge.title = `Badge: ${badge.textContent}`;
  });
}

// ============================================
// ONBOARDING CREAR PEDIDO
// ============================================

class CrearPedidoOnboarding {
  constructor() {
    this.card = document.getElementById('crearPedidoOnboarding');
    if (!this.card) return;

    this.body = document.getElementById('onboardingBody');
    this.caption = document.getElementById('onboardingCaption');
    this.subtitle = document.getElementById('onboardingSubtitle');
    this.restartBtn = document.getElementById('onboardingRestart');
    this.prevBtn = document.getElementById('onboardingPrev');
    this.nextBtn = document.getElementById('onboardingNext');
    this.skipBtn = document.getElementById('onboardingSkip');
    this.progressBar = document.getElementById('onboardingProgressBar');
    this.stepIndicator = document.getElementById('onboardingStepIndicator');
    this.stepTitle = document.getElementById('onboardingStepTitle');
    this.stepDescription = document.getElementById('onboardingStepDescription');
    this.stepTips = document.getElementById('onboardingStepTips');

    this.defaultSubtitle = this.subtitle ? this.subtitle.textContent : '';
    this.disabledCaption = this.caption ? this.caption.textContent : '';

    this.highlighted = null;
    this.localStorageKey = 'crearPedidoOnboardingDismissed';
    this.steps = this.buildSteps();
    this.currentIndex = 0;
    this.isActive = true;

    this.attachEvents();

    if (localStorage.getItem(this.localStorageKey) === 'true') {
      this.dismiss(false, 'skip');
    } else {
      if (this.caption) this.caption.classList.add('hidden');
      this.render();
    }
  }

  buildSteps() {
    return [
      {
        id: 'producto',
        title: 'Definí el producto',
        description: 'Seleccioná la prenda, la cantidad y la fecha objetivo para activar la búsqueda de talleres.',
        target: '#productoSection',
        tips: [
          'Elegí un tipo de prenda para generar la ruta sugerida automáticamente.',
          'Ajustá la cantidad estimada según tu orden de producción.',
          'Definí una fecha objetivo realista para alinear la capacidad de los talleres.'
        ],
        validate: () => {
          const prendaSelect = document.getElementById('tipoPrenda');
          const cantidadInput = document.getElementById('cantidad');
          const fechaInput = document.getElementById('fechaObjetivo');

          if (!prendaSelect || !cantidadInput || !fechaInput) return true;

          if (!prendaSelect.value) {
            prendaSelect.focus();
            return 'Elegí un tipo de prenda para continuar.';
          }

          const cantidadVal = Number(cantidadInput.value);
          if (!cantidadInput.value || Number.isNaN(cantidadVal) || cantidadVal <= 0) {
            cantidadInput.focus();
            return 'Ingresá una cantidad mayor a cero.';
          }

          if (!fechaInput.value) {
            fechaInput.focus();
            return 'Seleccioná una fecha objetivo para continuar.';
          }

          return true;
        }
      },
      {
        id: 'ruta',
        title: 'Revisá la ruta sugerida',
        description: 'Chequeá que los procesos sugeridos coincidan con la manera en la que trabajás el producto.',
        target: '#rutaSection',
        tips: [
          'La ruta se arma automáticamente según la prenda que definiste.',
          'Podés ajustar procesos específicos más adelante desde el matching.',
          'Asegurate de que no falten etapas críticas para la calidad del pedido.'
        ],
        validate: () => {
          const resumenRuta = document.getElementById('resumenRuta');
          if (resumenRuta && resumenRuta.textContent.trim() === '-') {
            return 'Definí el producto para que generemos la ruta sugerida antes de avanzar.';
          }
          return true;
        }
      },
      {
        id: 'requisitos',
        title: 'Configura requisitos y QA',
        description: 'Detallá la evidencia que necesitás y si habrá control externo en alguna etapa.',
        target: '#requisitosSection',
        tips: [
          'Las opciones marcadas definen qué necesita subir el taller en cada hito.',
          'Podés agregar QA externo cuando se trate de procesos críticos.',
          'Mantené al menos una evidencia activa para asegurar el seguimiento.'
        ],
        validate: () => {
          const checked = document.querySelectorAll('#requisitosSection input[type="checkbox"]:checked');
          if (!checked || checked.length === 0) {
            return 'Seleccioná al menos una evidencia o requisito de QA.';
          }
          return true;
        }
      },
      {
        id: 'logistica',
        title: 'Define logística y pagos',
        description: 'Revisá incoterm interno y cómo se liberará el escrow en cada etapa.',
        target: '#logisticaSection',
        tips: [
          'Ajustá el incoterm según quién retira y entrega la producción.',
          'Documentá cómo se reparte el pago por hitos para evitar confusiones.',
          'El escrow asegura los fondos: confirmá que cubra todas las etapas acordadas.'
        ],
        validate: () => {
          const hitosInput = document.querySelector('#logisticaSection input.form-input');
          if (hitosInput && !hitosInput.value.trim()) {
            hitosInput.focus();
            return 'Revisá y completá la distribución de hitos y porcentajes.';
          }
          return true;
        }
      },
      {
        id: 'resumen',
        title: 'Validá el resumen',
        description: 'Confirmá que toda la información del pedido esté correcta antes de crearlo.',
        target: '#resumenCard',
        tips: [
          'El resumen muestra los datos que enviaremos al matching.',
          'El botón “Crear OM” se habilita cuando el producto está completo.',
          'Volvé a pasos anteriores con “Anterior” si querés ajustar algo.'
        ],
        validate: () => {
          const createButton = document.getElementById('btnCrearPedido');
          if (createButton && createButton.disabled) {
            return 'Completá los datos del producto para habilitar la creación del pedido.';
          }
          return true;
        }
      }
    ];
  }

  attachEvents() {
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.previous());
    }
    if (this.skipBtn) {
      this.skipBtn.addEventListener('click', () => this.dismiss(true, 'skip'));
    }
    if (this.restartBtn) {
      this.restartBtn.addEventListener('click', () => this.restart());
    }
  }

  render() {
    if (!this.isActive) return;

    const step = this.steps[this.currentIndex];
    if (!step) return;

    if (this.stepTitle) this.stepTitle.textContent = step.title;
    if (this.stepDescription) this.stepDescription.textContent = step.description;
    this.renderTips(step.tips);
    this.updateProgress();

    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex === 0;
    }

    if (this.nextBtn) {
      this.nextBtn.textContent = this.currentIndex === this.steps.length - 1 ? 'Finalizar guía' : 'Siguiente paso';
    }

    this.clearHighlight();
    if (step.target) {
      this.highlight(step.target);
    }
  }

  renderTips(tips = []) {
    if (!this.stepTips) return;
    this.stepTips.innerHTML = '';
    tips.forEach(tip => {
      const li = document.createElement('li');
      li.textContent = tip;
      this.stepTips.appendChild(li);
    });
  }

  updateProgress() {
    if (!this.stepIndicator || !this.progressBar) return;
    const total = this.steps.length;
    const current = this.currentIndex + 1;
    this.stepIndicator.textContent = `Paso ${current} de ${total}`;
    const percentage = Math.max(0, Math.min(100, (current / total) * 100));
    this.progressBar.style.width = `${percentage}%`;
  }

  highlight(selector) {
    if (!this.isActive) return;
    const element = document.querySelector(selector);
    if (!element) return;

    this.highlighted = element;
    element.classList.add('onboarding-highlight');
    if (typeof element.scrollIntoView === 'function') {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  clearHighlight() {
    if (this.highlighted) {
      this.highlighted.classList.remove('onboarding-highlight');
      this.highlighted = null;
    }
  }

  validate() {
    const step = this.steps[this.currentIndex];
    if (!step || typeof step.validate !== 'function') return true;

    const result = step.validate();
    if (result === true || typeof result === 'undefined') {
      return true;
    }

    if (typeof result === 'string' && typeof showToast === 'function') {
      showToast(result, 'warning');
    }

    return false;
  }

  next() {
    if (!this.isActive) return;
    if (!this.validate()) return;

    if (this.currentIndex < this.steps.length - 1) {
      this.currentIndex += 1;
      this.render();
    } else {
      this.complete();
    }
  }

  previous() {
    if (!this.isActive) return;
    if (this.currentIndex === 0) return;

    this.currentIndex -= 1;
    this.render();
  }

  complete() {
    if (typeof showToast === 'function') {
      showToast('Guía completada. Revisá el resumen antes de crear el pedido.', 'success');
    }
    this.dismiss(false, 'complete');
  }

  dismiss(persist = false, reason = 'skip') {
    this.clearHighlight();
    this.isActive = false;

    if (persist) {
      localStorage.setItem(this.localStorageKey, 'true');
    }

    if (this.body) this.body.classList.add('hidden');
    if (this.restartBtn) this.restartBtn.classList.remove('hidden');
    if (this.skipBtn) this.skipBtn.classList.add('hidden');
    if (this.caption) {
      this.caption.classList.remove('hidden');
      if (reason === 'complete') {
        this.caption.textContent = 'Podés reiniciar la guía si querés repasar los pasos.';
      } else {
        this.caption.textContent = this.disabledCaption;
      }
    }

    if (this.card) this.card.classList.add('onboarding-muted');

    if (this.subtitle) {
      this.subtitle.textContent = reason === 'complete'
        ? 'Guía completada. Si necesitás, podés repasar los pasos con el asistente.'
        : 'Guía desactivada. Reiniciala cuando quieras volver a usarla.';
    }
  }

  restart() {
    localStorage.removeItem(this.localStorageKey);
    this.isActive = true;
    this.currentIndex = 0;

    if (this.card) this.card.classList.remove('onboarding-muted');
    if (this.body) this.body.classList.remove('hidden');
    if (this.caption) this.caption.classList.add('hidden');
    if (this.restartBtn) this.restartBtn.classList.add('hidden');
    if (this.skipBtn) this.skipBtn.classList.remove('hidden');
    if (this.subtitle) this.subtitle.textContent = this.defaultSubtitle;

    this.render();

    if (typeof showToast === 'function') {
      showToast('Guía reiniciada.', 'success');
    }
  }
}

// Ejecutar en carga de página
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCommonFeatures);
} else {
  initCommonFeatures();
}
