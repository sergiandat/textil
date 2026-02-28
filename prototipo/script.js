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

// Ejecutar en carga de página
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCommonFeatures);
} else {
  initCommonFeatures();
}
