/* ===========================================
   SISTEMA DE FEEDBACK INTEGRADO - MVP v1.1
   Gestión de feedback contextual por pantalla
   =========================================== */

// Configuración de preguntas por pantalla
const feedbackQuestions = {
  'dashboard.html': {
    title: 'Dashboard Principal',
    questions: [
      {
        id: 'dash_info_relevante',
        type: 'checkbox',
        text: '¿La información mostrada (KPIs, timeline, alertas) es relevante para vos?',
        options: ['Muy relevante', 'Parcialmente relevante', 'Poco relevante', 'Falta información importante']
      },
      {
        id: 'dash_prioridad_kpi',
        type: 'text',
        text: '¿Qué otro KPI te gustaría ver en el dashboard?'
      },
      {
        id: 'dash_timeline',
        type: 'checkbox',
        text: '¿El timeline de pedidos activos te permite entender rápidamente el estado?',
        options: ['Sí, muy claro', 'Necesita más detalle', 'Preferiría otro formato']
      },
      {
        id: 'dash_alertas',
        type: 'text',
        text: '¿Qué tipo de alertas te gustaría recibir que no están mostradas?'
      },
      {
        id: 'dash_acciones',
        type: 'checkbox',
        text: '¿Las acciones rápidas (Crear pedido, Explorar talleres) son útiles?',
        options: ['Muy útiles', 'Agregaría otras acciones', 'Poco útiles']
      },
      {
        id: 'dash_navegacion',
        type: 'radio',
        text: '¿Te resulta fácil navegar desde el dashboard hacia otras secciones?',
        options: ['Muy fácil', 'Algo confuso', 'Difícil']
      },
      {
        id: 'dash_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre el Dashboard:'
      }
    ]
  },

  'crear-pedido.html': {
    title: 'Crear Pedido',
    questions: [
      {
        id: 'pedido_catalogo',
        type: 'checkbox',
        text: '¿El catálogo de prendas es suficiente?',
        options: ['Sí, cubre mis necesidades', 'Faltan tipos de prendas', 'Necesita más variantes']
      },
      {
        id: 'pedido_faltantes',
        type: 'text',
        text: '¿Qué tipos de prendas faltan en el catálogo?'
      },
      {
        id: 'pedido_procesos_auto',
        type: 'radio',
        text: '¿Te resulta útil que los procesos se generen automáticamente según la prenda?',
        options: ['Muy útil', 'Preferiría seleccionarlos manualmente', 'Indiferente']
      },
      {
        id: 'pedido_requerimientos',
        type: 'checkbox',
        text: '¿Los campos de requerimientos (tela, molde, QA, trazabilidad) son claros?',
        options: ['Muy claros', 'Necesitan más explicación', 'Agregaría otros campos']
      },
      {
        id: 'pedido_logistica_opciones',
        type: 'text',
        text: '¿Las opciones de logística (EXW, FCA, DDP) son comprensibles? ¿Necesitás explicaciones adicionales?'
      },
      {
        id: 'pedido_hitos_pago',
        type: 'radio',
        text: '¿Te parece adecuado poder definir hitos de pago por proceso?',
        options: ['Sí, muy flexible', 'Preferiría pagos predefinidos', 'No lo entiendo bien']
      },
      {
        id: 'pedido_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre la creación de pedidos:'
      }
    ]
  },

  'matching.html': {
    title: 'Matching de Talleres',
    questions: [
      {
        id: 'match_algoritmo',
        type: 'checkbox',
        text: '¿El algoritmo de matching (Formalización 40%, Capacidad 30%, Ubicación 20%, Precio 10%) te parece correcto?',
        options: ['Sí, bien balanceado', 'Cambiaría las ponderaciones', 'Agregaría otros criterios']
      },
      {
        id: 'match_ponderaciones',
        type: 'text',
        text: 'Si cambiarías las ponderaciones, ¿cómo lo harías? (ej: Formalización 50%, Capacidad 25%...)'
      },
      {
        id: 'match_filtros',
        type: 'checkbox',
        text: '¿Los filtros disponibles (nivel, ubicación, rating) son suficientes?',
        options: ['Sí, suficientes', 'Agregaría más filtros', 'Algunos son innecesarios']
      },
      {
        id: 'match_nuevos_filtros',
        type: 'text',
        text: '¿Qué otros filtros te gustaría tener?'
      },
      {
        id: 'match_visualizacion',
        type: 'radio',
        text: '¿La tabla de resultados muestra la información necesaria?',
        options: ['Sí, muy completa', 'Falta información', 'Demasiada información']
      },
      {
        id: 'match_invitacion',
        type: 'checkbox',
        text: '¿Te parece claro el proceso de "Invitar a cotizar" a múltiples talleres?',
        options: ['Muy claro', 'Necesita explicación', 'Preferiría otro flujo']
      },
      {
        id: 'match_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre el matching:'
      }
    ]
  },

  'acordar.html': {
    title: 'Acordar Términos',
    questions: [
      {
        id: 'acordar_terminos',
        type: 'checkbox',
        text: '¿Los términos del contrato (alcance, plazo, precio) son claros y editables?',
        options: ['Muy claros', 'Necesitan más detalle', 'Faltan campos importantes']
      },
      {
        id: 'acordar_negociacion',
        type: 'radio',
        text: '¿El historial de negociación te ayuda a seguir las conversaciones?',
        options: ['Muy útil', 'Poco útil', 'Preferiría chat en tiempo real']
      },
      {
        id: 'acordar_blockchain',
        type: 'checkbox',
        text: '¿Entendés el concepto de "hash blockchain" para trazabilidad del contrato?',
        options: ['Sí, muy claro', 'Necesito más explicación', 'No me parece necesario']
      },
      {
        id: 'acordar_escrow',
        type: 'text',
        text: '¿Te resulta claro el concepto de "escrow" (garantía de pago)? ¿Necesitás más información?'
      },
      {
        id: 'acordar_firma',
        type: 'radio',
        text: '¿La firma digital te parece suficiente o preferirías otro método de validación?',
        options: ['Suficiente', 'Preferiría firma electrónica certificada', 'Otro método']
      },
      {
        id: 'acordar_campos_faltantes',
        type: 'text',
        text: '¿Qué otros campos deberían estar en el contrato?'
      },
      {
        id: 'acordar_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre la negociación:'
      }
    ]
  },

  'ejecucion.html': {
    title: 'Ejecución y Monitoreo',
    questions: [
      {
        id: 'ejec_timeline',
        type: 'checkbox',
        text: '¿El timeline de MOs (órdenes de manufactura) te permite seguir el progreso?',
        options: ['Muy claro', 'Necesita más detalle', 'Preferiría otra visualización']
      },
      {
        id: 'ejec_evidencias',
        type: 'radio',
        text: '¿Las evidencias por tanda (QR, fotos, mediciones) son suficientes para validar calidad?',
        options: ['Sí, suficientes', 'Necesito más evidencias', 'Demasiado detalle']
      },
      {
        id: 'ejec_trabajo_decente',
        type: 'checkbox',
        text: '¿Los indicadores de trabajo decente (ventilación, iluminación, SST, AFIP) son relevantes?',
        options: ['Muy relevantes', 'Algunos son poco claros', 'Agregaría otros indicadores']
      },
      {
        id: 'ejec_nuevos_indicadores',
        type: 'text',
        text: '¿Qué otros indicadores de trabajo decente te gustaría monitorear?'
      },
      {
        id: 'ejec_alertas_riesgo',
        type: 'radio',
        text: '¿Las alertas de riesgo (tiempo +8%, pausas repetidas) son útiles?',
        options: ['Muy útiles', 'Demasiado sensibles', 'Poco útiles']
      },
      {
        id: 'ejec_escrow_hitos',
        type: 'checkbox',
        text: '¿Te resulta claro el sistema de liberación de escrow por hitos completados?',
        options: ['Muy claro', 'Necesita explicación', 'Preferiría otro sistema']
      },
      {
        id: 'ejec_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre la ejecución:'
      }
    ]
  },

  'logistica.html': {
    title: 'Logística',
    questions: [
      {
        id: 'log_opciones',
        type: 'checkbox',
        text: '¿Las tres opciones logísticas (EXW, FCA, Contratar desde plataforma) cubren tus necesidades?',
        options: ['Sí, cubren todo', 'Faltan opciones', 'Algunas son confusas']
      },
      {
        id: 'log_integracion',
        type: 'radio',
        text: '¿Te interesaría que la plataforma se integre con proveedores logísticos externos?',
        options: ['Sí, muy útil', 'No necesario', 'Solo con algunos proveedores']
      },
      {
        id: 'log_calculo_costos',
        type: 'checkbox',
        text: '¿El cálculo de costos (distancia, peso, tarifa) es transparente?',
        options: ['Muy transparente', 'Necesita más detalle', 'Agregaría otros factores']
      },
      {
        id: 'log_seguimiento',
        type: 'text',
        text: '¿Qué funcionalidad de seguimiento en tiempo real te gustaría tener?'
      },
      {
        id: 'log_traslados_multiples',
        type: 'radio',
        text: '¿Te resulta útil ver todos los traslados planificados del pedido?',
        options: ['Muy útil', 'Poco útil', 'Preferiría ver solo el próximo']
      },
      {
        id: 'log_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre logística:'
      }
    ]
  },

  'cierre.html': {
    title: 'Cierre de Pedido',
    questions: [
      {
        id: 'cierre_resumen_financiero',
        type: 'checkbox',
        text: '¿El resumen financiero por MO es claro y completo?',
        options: ['Muy claro', 'Falta información', 'Demasiado detallado']
      },
      {
        id: 'cierre_calificacion',
        type: 'radio',
        text: '¿El sistema de calificación (estrellas + comentarios) te parece suficiente?',
        options: ['Sí, suficiente', 'Agregaría categorías específicas', 'Demasiado simple']
      },
      {
        id: 'cierre_categorias',
        type: 'text',
        text: 'Si agregarías categorías, ¿cuáles serían? (ej: Calidad, Comunicación, Puntualidad...)'
      },
      {
        id: 'cierre_trazabilidad',
        type: 'checkbox',
        text: '¿El QR único por prenda y el hash blockchain te resultan claros?',
        options: ['Muy claros', 'Necesito más explicación', 'No los entiendo']
      },
      {
        id: 'cierre_landing_publica',
        type: 'radio',
        text: '¿Te parece útil tener una landing page pública con toda la trazabilidad?',
        options: ['Muy útil', 'Poco útil', 'Preferiría que sea privada']
      },
      {
        id: 'cierre_timeline',
        type: 'checkbox',
        text: '¿El timeline completado te da una buena visión retrospectiva del pedido?',
        options: ['Sí, muy buena', 'Falta información', 'Agregaría otros elementos']
      },
      {
        id: 'cierre_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre el cierre:'
      }
    ]
  },

  'explorar-talleres.html': {
    title: 'Explorar Talleres',
    questions: [
      {
        id: 'explorar_filtros',
        type: 'checkbox',
        text: '¿Los filtros (nivel, procesos, ubicación, rating) son suficientes?',
        options: ['Sí, suficientes', 'Agregaría más filtros', 'Algunos son innecesarios']
      },
      {
        id: 'explorar_nuevos_filtros',
        type: 'text',
        text: '¿Qué otros filtros te gustaría tener en el directorio?'
      },
      {
        id: 'explorar_busqueda',
        type: 'radio',
        text: '¿La búsqueda por nombre/CUIT/ubicación funciona bien?',
        options: ['Muy bien', 'Necesita mejorar', 'Agregaría búsqueda semántica']
      },
      {
        id: 'explorar_tarjetas',
        type: 'checkbox',
        text: '¿Las tarjetas de talleres muestran información relevante?',
        options: ['Muy relevante', 'Falta información', 'Demasiada información']
      },
      {
        id: 'explorar_ordenamiento',
        type: 'radio',
        text: '¿Las opciones de ordenamiento (nivel, rating, cercanía, nombre) son útiles?',
        options: ['Muy útiles', 'Agregaría otras', 'Poco útiles']
      },
      {
        id: 'explorar_favoritos',
        type: 'checkbox',
        text: '¿Te gustaría poder guardar talleres favoritos para acceso rápido?',
        options: ['Sí, muy útil', 'No necesario', 'Solo con filtros guardados']
      },
      {
        id: 'explorar_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre explorar talleres:'
      }
    ]
  },

  'perfil-taller.html': {
    title: 'Perfil de Taller',
    questions: [
      {
        id: 'perfil_info_general',
        type: 'checkbox',
        text: '¿La información general (CUIT, nivel, rating, fundado, equipo) es suficiente?',
        options: ['Sí, suficiente', 'Falta información', 'Demasiada información']
      },
      {
        id: 'perfil_capacidades',
        type: 'radio',
        text: '¿La sección de capacidades (procesos, especialización, maquinaria) es clara?',
        options: ['Muy clara', 'Necesita más detalle', 'Poco relevante']
      },
      {
        id: 'perfil_historial',
        type: 'checkbox',
        text: '¿Las estadísticas de historial (pedidos, on-time, retrabajo) son relevantes?',
        options: ['Muy relevantes', 'Agregaría otras métricas', 'Poco relevantes']
      },
      {
        id: 'perfil_nuevas_metricas',
        type: 'text',
        text: '¿Qué otras métricas te gustaría ver en el perfil del taller?'
      },
      {
        id: 'perfil_resenas',
        type: 'radio',
        text: '¿Las reseñas de otras marcas te ayudan a decidir?',
        options: ['Mucho', 'Poco', 'Preferiría verificaciones objetivas']
      },
      {
        id: 'perfil_contacto',
        type: 'checkbox',
        text: '¿Te resulta claro cómo contactar al taller?',
        options: ['Muy claro', 'Necesita más opciones', 'Poco claro']
      },
      {
        id: 'perfil_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre el perfil de taller:'
      }
    ]
  },

  'index.html': {
    title: 'Login / Registro',
    questions: [
      {
        id: 'login_cuit_password',
        type: 'checkbox',
        text: '¿El login con CUIT + contraseña te parece seguro y práctico?',
        options: ['Sí, muy práctico', 'Preferiría otros métodos', 'Agregar autenticación de 2 factores']
      },
      {
        id: 'login_tipos_usuario',
        type: 'radio',
        text: '¿Te resulta claro el selector de tipo de usuario (Marca/Taller/Trabajador/Inspector/Tripartita)?',
        options: ['Muy claro', 'Algo confuso', 'Necesita explicación']
      },
      {
        id: 'login_registro',
        type: 'checkbox',
        text: '¿El proceso de registro te parece intuitivo?',
        options: ['Muy intuitivo', 'Necesita más pasos', 'Demasiado simple']
      },
      {
        id: 'login_afip',
        type: 'text',
        text: '¿Cómo te imaginarías la verificación con AFIP en el registro real?'
      },
      {
        id: 'login_onboarding',
        type: 'radio',
        text: '¿Te gustaría tener un tutorial/onboarding al primer ingreso?',
        options: ['Sí, muy útil', 'No necesario', 'Solo para ciertas funciones']
      },
      {
        id: 'login_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre login/registro:'
      }
    ]
  }
};

// Gestor de Feedback
class FeedbackManager {
  constructor() {
    this.currentPage = this.getCurrentPage();
    this.responses = this.loadResponses();
    this.init();
  }

  // Obtener página actual
  getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    return filename || 'index.html';
  }

  // Inicializar sistema de feedback
  init() {
    this.createFeedbackButton();
    this.createFeedbackPanel();
    this.loadExistingResponses();
    this.attachEventListeners();
  }

  // Crear botón flotante
  createFeedbackButton() {
    const button = document.createElement('button');
    button.className = 'feedback-button';
    button.id = 'feedbackButton';
    button.innerHTML = '💬';
    button.title = 'Dar feedback sobre esta pantalla';

    // Badge de respuestas
    const responseCount = this.getResponseCount();
    if (responseCount > 0) {
      button.classList.add('has-responses');
      const badge = document.createElement('span');
      badge.className = 'feedback-badge';
      badge.textContent = responseCount;
      button.appendChild(badge);
    }

    document.body.appendChild(button);
  }

  // Crear panel lateral
  createFeedbackPanel() {
    const config = feedbackQuestions[this.currentPage];
    if (!config) return;

    const panel = document.createElement('div');
    panel.className = 'feedback-panel';
    panel.id = 'feedbackPanel';

    panel.innerHTML = `
      <div class="feedback-panel-header">
        <div class="feedback-panel-title">
          💬 Feedback: ${config.title}
        </div>
        <button class="feedback-panel-close" id="closeFeedbackPanel">×</button>
      </div>

      <div class="feedback-panel-content">
        <div class="feedback-section">
          <div class="feedback-section-title">Ayudanos a mejorar esta pantalla</div>
          <form id="feedbackForm">
            ${this.renderQuestions(config.questions)}
          </form>
        </div>
      </div>

      <div class="feedback-panel-footer">
        <button type="button" class="feedback-save-btn" id="saveFeedback">
          Guardar respuestas
        </button>
      </div>
    `;

    document.body.appendChild(panel);
  }

  // Renderizar preguntas
  renderQuestions(questions) {
    return questions.map(q => {
      const savedValue = this.responses[this.currentPage]?.[q.id] || '';

      switch (q.type) {
        case 'text':
          return `
            <div class="feedback-question">
              <div class="feedback-question-text">${q.text}</div>
              <input
                type="text"
                class="feedback-question-input"
                name="${q.id}"
                value="${savedValue}"
                placeholder="Tu respuesta..."
              />
            </div>
          `;

        case 'textarea':
          return `
            <div class="feedback-question">
              <div class="feedback-question-text">${q.text}</div>
              <textarea
                class="feedback-question-input feedback-question-textarea"
                name="${q.id}"
                placeholder="Tu respuesta..."
              >${savedValue}</textarea>
            </div>
          `;

        case 'checkbox':
          return `
            <div class="feedback-question">
              <div class="feedback-question-text">${q.text}</div>
              <div class="feedback-options">
                ${q.options.map(opt => {
                  const checked = Array.isArray(savedValue) && savedValue.includes(opt) ? 'checked' : '';
                  return `
                    <label class="feedback-option">
                      <input
                        type="checkbox"
                        name="${q.id}"
                        value="${opt}"
                        ${checked}
                      />
                      <span class="feedback-option-label">${opt}</span>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>
          `;

        case 'radio':
          return `
            <div class="feedback-question">
              <div class="feedback-question-text">${q.text}</div>
              <div class="feedback-options">
                ${q.options.map(opt => {
                  const checked = savedValue === opt ? 'checked' : '';
                  return `
                    <label class="feedback-option">
                      <input
                        type="radio"
                        name="${q.id}"
                        value="${opt}"
                        ${checked}
                      />
                      <span class="feedback-option-label">${opt}</span>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>
          `;

        default:
          return '';
      }
    }).join('');
  }

  // Event listeners
  attachEventListeners() {
    const button = document.getElementById('feedbackButton');
    const panel = document.getElementById('feedbackPanel');
    const closeBtn = document.getElementById('closeFeedbackPanel');
    const saveBtn = document.getElementById('saveFeedback');

    if (button) {
      button.addEventListener('click', () => this.togglePanel());
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closePanel());
    }

    if (saveBtn) {
      saveBtn.addEventListener('click', () => this.saveResponses());
    }

    // Auto-save en cambios
    const form = document.getElementById('feedbackForm');
    if (form) {
      form.addEventListener('change', () => this.autoSave());
    }
  }

  // Abrir/cerrar panel
  togglePanel() {
    const panel = document.getElementById('feedbackPanel');
    if (panel) {
      panel.classList.toggle('open');
    }
  }

  closePanel() {
    const panel = document.getElementById('feedbackPanel');
    if (panel) {
      panel.classList.remove('open');
    }
  }

  // Auto-guardar
  autoSave() {
    const formData = this.getFormData();
    this.responses[this.currentPage] = formData;
    localStorage.setItem('feedbackResponses', JSON.stringify(this.responses));
    this.showToast('Respuesta guardada automáticamente', 'success');
  }

  // Guardar respuestas
  saveResponses() {
    const formData = this.getFormData();
    this.responses[this.currentPage] = formData;
    localStorage.setItem('feedbackResponses', JSON.stringify(this.responses));
    this.showToast('✓ Feedback guardado correctamente', 'success');
    this.updateButtonBadge();

    setTimeout(() => {
      this.closePanel();
    }, 1000);
  }

  // Obtener datos del formulario
  getFormData() {
    const form = document.getElementById('feedbackForm');
    if (!form) return {};

    const formData = {};
    const config = feedbackQuestions[this.currentPage];

    config.questions.forEach(q => {
      if (q.type === 'checkbox') {
        const checkboxes = form.querySelectorAll(`input[name="${q.id}"]:checked`);
        formData[q.id] = Array.from(checkboxes).map(cb => cb.value);
      } else if (q.type === 'radio') {
        const radio = form.querySelector(`input[name="${q.id}"]:checked`);
        formData[q.id] = radio ? radio.value : '';
      } else {
        const input = form.querySelector(`[name="${q.id}"]`);
        formData[q.id] = input ? input.value : '';
      }
    });

    return formData;
  }

  // Cargar respuestas guardadas
  loadResponses() {
    const saved = localStorage.getItem('feedbackResponses');
    return saved ? JSON.parse(saved) : {};
  }

  loadExistingResponses() {
    // Ya se cargan en renderQuestions
  }

  // Contar respuestas de la página actual
  getResponseCount() {
    const pageResponses = this.responses[this.currentPage];
    if (!pageResponses) return 0;

    return Object.values(pageResponses).filter(value => {
      if (Array.isArray(value)) return value.length > 0;
      return value !== '';
    }).length;
  }

  // Actualizar badge del botón
  updateButtonBadge() {
    const button = document.getElementById('feedbackButton');
    const existingBadge = button.querySelector('.feedback-badge');
    const count = this.getResponseCount();

    if (count > 0) {
      button.classList.add('has-responses');
      if (existingBadge) {
        existingBadge.textContent = count;
      } else {
        const badge = document.createElement('span');
        badge.className = 'feedback-badge';
        badge.textContent = count;
        button.appendChild(badge);
      }
    } else {
      button.classList.remove('has-responses');
      if (existingBadge) {
        existingBadge.remove();
      }
    }
  }

  // Toast de notificación
  showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `feedback-toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // Exportar todo el feedback
  static exportAllFeedback() {
    const responses = JSON.parse(localStorage.getItem('feedbackResponses') || '{}');
    let output = '===========================================\n';
    output += 'FEEDBACK MVP v1.1 - PLATAFORMA TEXTIL OIT\n';
    output += '===========================================\n';
    output += `Fecha de exportación: ${new Date().toLocaleString('es-AR')}\n\n`;

    Object.keys(responses).forEach(page => {
      const config = feedbackQuestions[page];
      if (!config) return;

      output += `\n${'='.repeat(50)}\n`;
      output += `PANTALLA: ${config.title} (${page})\n`;
      output += `${'='.repeat(50)}\n\n`;

      const pageResponses = responses[page];

      config.questions.forEach(q => {
        const answer = pageResponses[q.id];
        output += `P: ${q.text}\n`;

        if (Array.isArray(answer)) {
          output += `R: ${answer.length > 0 ? answer.join(', ') : '(Sin respuesta)'}\n\n`;
        } else {
          output += `R: ${answer || '(Sin respuesta)'}\n\n`;
        }
      });
    });

    // Estadísticas finales
    output += `\n${'='.repeat(50)}\n`;
    output += 'ESTADÍSTICAS\n';
    output += `${'='.repeat(50)}\n`;
    output += `Pantallas con feedback: ${Object.keys(responses).length}\n`;

    let totalQuestions = 0;
    let totalAnswered = 0;

    Object.keys(responses).forEach(page => {
      const config = feedbackQuestions[page];
      if (!config) return;

      const pageResponses = responses[page];
      totalQuestions += config.questions.length;

      config.questions.forEach(q => {
        const answer = pageResponses[q.id];
        if (Array.isArray(answer) && answer.length > 0) totalAnswered++;
        else if (answer && answer !== '') totalAnswered++;
      });
    });

    output += `Total de preguntas: ${totalQuestions}\n`;
    output += `Preguntas respondidas: ${totalAnswered}\n`;
    output += `Porcentaje completado: ${Math.round((totalAnswered / totalQuestions) * 100)}%\n`;

    return output;
  }

  // Modal contextual para funciones no implementadas
  static showContextualModal(feature, callback) {
    const overlay = document.createElement('div');
    overlay.className = 'feedback-modal-overlay';
    overlay.id = 'contextualModal';

    overlay.innerHTML = `
      <div class="feedback-modal">
        <div class="feedback-modal-title">Función no implementada</div>
        <div class="feedback-modal-subtitle">Esta función estará disponible en futuras versiones</div>

        <div class="feedback-modal-content">
          <p style="margin-bottom: 1rem; color: var(--slate-700);">
            <strong>${feature}</strong>
          </p>
          <label style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500;">
            ¿Cómo esperarías que funcione?
          </label>
          <textarea
            id="contextualFeedback"
            class="form-input"
            rows="4"
            placeholder="Describe cómo te imaginás esta funcionalidad..."
            style="width: 100%;"
          ></textarea>
        </div>

        <div class="feedback-modal-actions">
          <button class="feedback-modal-btn feedback-modal-btn-cancel" id="cancelContextual">
            Cancelar
          </button>
          <button class="feedback-modal-btn feedback-modal-btn-save" id="saveContextual">
            Guardar sugerencia
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Event listeners
    document.getElementById('cancelContextual').addEventListener('click', () => {
      overlay.remove();
    });

    document.getElementById('saveContextual').addEventListener('click', () => {
      const feedback = document.getElementById('contextualFeedback').value;

      if (feedback.trim()) {
        // Guardar en localStorage
        const contextualFeedback = JSON.parse(localStorage.getItem('contextualFeedback') || '{}');
        if (!contextualFeedback[feature]) {
          contextualFeedback[feature] = [];
        }
        contextualFeedback[feature].push({
          date: new Date().toISOString(),
          feedback: feedback
        });
        localStorage.setItem('contextualFeedback', JSON.stringify(contextualFeedback));

        // Mostrar confirmación
        const manager = new FeedbackManager();
        manager.showToast('✓ Sugerencia guardada. ¡Gracias!', 'success');
      }

      overlay.remove();
      if (callback) callback();
    });

    // Cerrar al hacer click fuera
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.remove();
      }
    });
  }
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  if (feedbackQuestions[window.location.pathname.split('/').pop()]) {
    window.feedbackManager = new FeedbackManager();
  }
});

// Exportar funciones globales
window.FeedbackManager = FeedbackManager;
