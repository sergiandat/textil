/**
 * VISION-GENERAL.JS
 * Funcionalidades opcionales para la página de visión general
 * - Scroll spy (highlight de sección actual)
 * - Animaciones on scroll
 * - Analytics de qué secciones se ven más
 */

(function() {
  'use strict';

  // ============================================
  // SCROLL SPY - Highlight sección actual
  // ============================================

  function initScrollSpy() {
    const sections = document.querySelectorAll('.vg-section, .vg-hero, .vg-cta');
    const options = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Podríamos usar esto para actualizar un navbar sticky si lo agregamos
          console.log('Sección visible:', entry.target.className);
        }
      });
    }, options);

    sections.forEach(section => observer.observe(section));
  }

  // ============================================
  // ANIMACIONES ON SCROLL
  // ============================================

  function initScrollAnimations() {
    const elements = document.querySelectorAll('.vg-spoke-card, .vg-actor-card, .vg-flow-step, .vg-badge');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    elements.forEach((el, index) => {
      // Estado inicial
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

      observer.observe(el);
    });
  }

  // ============================================
  // ANALYTICS - Tracking de tiempo en secciones
  // ============================================

  function initAnalytics() {
    const startTime = Date.now();
    const sectionTimes = {};

    window.addEventListener('beforeunload', () => {
      const totalTime = Date.now() - startTime;
      const minutes = Math.floor(totalTime / 60000);
      const seconds = Math.floor((totalTime % 60000) / 1000);

      console.log(`⏱️ Tiempo total en visión general: ${minutes}m ${seconds}s`);

      // Aquí podrías enviar datos a analytics si lo necesitás
      localStorage.setItem('visionGeneralVisitTime', JSON.stringify({
        date: new Date().toISOString(),
        duration: totalTime,
        sections: sectionTimes
      }));
    });
  }

  // ============================================
  // TOOLTIPS EN DIAGRAMA HUB
  // ============================================

  function initDiagramTooltips() {
    const spokeCards = document.querySelectorAll('.vg-spoke-card');

    spokeCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        // Podríamos mostrar info adicional sobre cada barrera
        this.style.zIndex = '20';
      });

      card.addEventListener('mouseleave', function() {
        this.style.zIndex = '';
      });
    });
  }

  // ============================================
  // SMOOTH SCROLL (si agregamos anchors internos)
  // ============================================

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ============================================
  // INICIALIZATION
  // ============================================

  function init() {
    console.log('📊 Visión General - Sistema iniciado');

    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runInit);
    } else {
      runInit();
    }
  }

  function runInit() {
    initScrollSpy();
    initScrollAnimations();
    initAnalytics();
    initDiagramTooltips();
    initSmoothScroll();

    // Log para debugging
    console.log('✅ Visión General cargada correctamente');
  }

  // Ejecutar
  init();

})();
