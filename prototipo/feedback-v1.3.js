/* ===========================================
   SISTEMA DE FEEDBACK - MVP v1.2 WIREFRAME
   Preguntas específicas para validar nuevos diseños
   =========================================== */

// Configuración de preguntas por pantalla
const feedbackQuestions = {
  'dashboard-v1.2.html': {
    title: 'Dashboard v1.2 - Actualizado',
    questions: [
      {
        id: 'dash_v12_perfil_link',
        type: 'radio',
        text: '¿Te resulta fácil encontrar el link "Mi Perfil" en la topbar?',
        options: ['Muy fácil', 'Podría ser más visible', 'No lo encuentro']
      },
      {
        id: 'dash_v12_ubicacion_perfil',
        type: 'checkbox',
        text: '¿Dónde esperarías encontrar el acceso a tu perfil?',
        options: ['En topbar (como está ahora)', 'En menú desplegable', 'En sidebar', 'En footer']
      },
      {
        id: 'dash_v12_cambios',
        type: 'radio',
        text: 'Comparado con v1.1, ¿el dashboard v1.2 mejoró?',
        options: ['Sí, mejoró', 'Sin cambios significativos', 'Empeoró']
      },
      {
        id: 'dash_v12_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre dashboard v1.2:'
      }
    ]
  },

  'crear-pedido-v1.2.html': {
    title: 'Crear Pedido v1.2 - REDISEÑADO',
    questions: [
      {
        id: 'pedido_v12_procesos_editables',
        type: 'radio',
        text: '¿Los procesos editables (drag & drop para reordenar) te resultan intuitivos?',
        options: ['Muy intuitivos', 'Algo confusos', 'Difíciles de usar']
      },
      {
        id: 'pedido_v12_agregar_quitar',
        type: 'checkbox',
        text: '¿Entendés cómo agregar o quitar procesos de la cadena?',
        options: ['Sí, muy claro', 'Necesita explicación', 'No lo entiendo']
      },
      {
        id: 'pedido_v12_archivos_tecnicos',
        type: 'radio',
        text: '¿El sistema de carga de archivos técnicos por proceso es claro?',
        options: ['Muy claro', 'Algo confuso', 'No está claro']
      },
      {
        id: 'pedido_v12_formatos',
        type: 'checkbox',
        text: '¿Qué formatos de archivo técnico necesitás subir?',
        options: ['.pdf (fichas técnicas)', '.jpg/.png (fotos)', '.dwg/.dxf (moldes CAD)', '.xlsx (specs)', 'Otros']
      },
      {
        id: 'pedido_v12_formatos_otros',
        type: 'text',
        text: 'Si marcaste "Otros", ¿qué formatos necesitás?'
      },
      {
        id: 'pedido_v12_qa_transversal',
        type: 'radio',
        text: '¿Entendés la diferencia entre "proceso" y "QA transversal" (checkpoints por proceso)?',
        options: ['Sí, muy claro', 'Algo confuso', 'No lo entiendo']
      },
      {
        id: 'pedido_v12_seleccionar_proveedor_boton',
        type: 'checkbox',
        text: '¿El botón "Seleccionar proveedor" por cada proceso tiene sentido en el flujo?',
        options: ['Sí, muy lógico', 'Preferiría seleccionar todos juntos al final', 'Necesita explicación']
      },
      {
        id: 'pedido_v12_flujo_preferido',
        type: 'radio',
        text: '¿Preferirías seleccionar TODOS los proveedores primero o ir proceso por proceso?',
        options: ['Proceso por proceso (como v1.2)', 'Todos juntos al final', 'Ambas opciones disponibles']
      },
      {
        id: 'pedido_v12_vs_v11',
        type: 'radio',
        text: 'Comparado con v1.1 (procesos automáticos no editables), v1.2 es:',
        options: ['Mucho mejor', 'Mejor', 'Sin diferencia', 'Peor']
      },
      {
        id: 'pedido_v12_mejora',
        type: 'textarea',
        text: '¿Qué mejorarías del nuevo flujo de crear pedido v1.2?'
      },
      {
        id: 'pedido_v12_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre crear-pedido v1.2:'
      }
    ]
  },

  'seleccionar-proveedor.html': {
    title: 'Seleccionar Proveedor - NUEVA PANTALLA',
    questions: [
      {
        id: 'matching_v12_contexto',
        type: 'radio',
        text: '¿El contexto del proceso (ej: "Corte para Jean 500u") está claro en la pantalla?',
        options: ['Muy claro', 'Algo confuso', 'No está claro']
      },
      {
        id: 'matching_v12_context_aware',
        type: 'radio',
        text: 'Comparado con v1.1 (matching para todo el pedido), ¿matching por proceso es más claro?',
        options: ['Mucho más claro', 'Más claro', 'Sin diferencia', 'Menos claro']
      },
      {
        id: 'matching_v12_filtros',
        type: 'checkbox',
        text: '¿Los filtros son suficientes para encontrar el proveedor adecuado?',
        options: ['Sí, suficientes', 'Faltan filtros', 'Demasiados filtros']
      },
      {
        id: 'matching_v12_filtros_faltantes',
        type: 'text',
        text: 'Si faltan filtros, ¿cuáles agregarías?'
      },
      {
        id: 'matching_v12_cotizaciones',
        type: 'radio',
        text: '¿La sección de comparación de cotizaciones te ayuda a decidir?',
        options: ['Sí, mucho', 'Parcialmente', 'No me ayuda']
      },
      {
        id: 'matching_v12_seleccion',
        type: 'radio',
        text: '¿Preferirías seleccionar un proveedor definitivo o tener una "lista corta" de candidatos?',
        options: ['Proveedor definitivo (como está ahora)', 'Lista corta de 2-3 candidatos', 'Ambas opciones']
      },
      {
        id: 'matching_v12_info_faltante',
        type: 'text',
        text: '¿Qué información del taller te falta para decidir?'
      },
      {
        id: 'matching_v12_navegacion',
        type: 'checkbox',
        text: '¿El flujo de volver a crear-pedido después de seleccionar proveedor es claro?',
        options: ['Muy claro', 'Algo confuso', 'No está claro']
      },
      {
        id: 'matching_v12_invitar',
        type: 'radio',
        text: '¿Te resulta útil poder invitar a múltiples talleres a cotizar?',
        options: ['Muy útil', 'Poco útil', 'Preferiría seleccionar directamente']
      },
      {
        id: 'matching_v12_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre matching por proceso:'
      }
    ]
  },

  'perfil-marca.html': {
    title: 'Mi Perfil - NUEVA PANTALLA',
    questions: [
      {
        id: 'perfil_v12_campos',
        type: 'checkbox',
        text: '¿Los campos editables (razón social, CUIT, contactos, etc.) cubren tus necesidades?',
        options: ['Sí, completamente', 'Faltan campos importantes', 'Demasiados campos']
      },
      {
        id: 'perfil_v12_campos_faltantes',
        type: 'text',
        text: 'Si faltan campos, ¿cuáles agregarías?'
      },
      {
        id: 'perfil_v12_certificaciones',
        type: 'radio',
        text: '¿La sección de certificaciones (subir archivos, fechas de vencimiento) es útil?',
        options: ['Muy útil', 'Poco útil', 'No la necesito']
      },
      {
        id: 'perfil_v12_notificaciones',
        type: 'checkbox',
        text: '¿Las opciones de notificaciones (email, en plataforma) son suficientes?',
        options: ['Sí, suficientes', 'Agregaría SMS/WhatsApp', 'Agregaría más control granular']
      },
      {
        id: 'perfil_v12_contactos_multiples',
        type: 'radio',
        text: '¿Necesitarías poder agregar múltiples contactos (no solo uno)?',
        options: ['Sí, muy importante', 'Útil pero no crítico', 'No necesario']
      },
      {
        id: 'perfil_v12_contactos_roles',
        type: 'checkbox',
        text: 'Si pudieras agregar múltiples contactos, ¿qué roles necesitarías?',
        options: ['Responsable general', 'Responsable comercial', 'Responsable producción', 'Responsable logística', 'Otros']
      },
      {
        id: 'perfil_v12_logo',
        type: 'radio',
        text: '¿Te gustaría poder agregar logo/fotos de la empresa?',
        options: ['Sí, muy importante', 'Útil pero no crítico', 'No necesario']
      },
      {
        id: 'perfil_v12_privacidad',
        type: 'checkbox',
        text: '¿Qué información te gustaría poder marcar como "privada" (visible solo para vos)?',
        options: ['Datos fiscales (CUIT)', 'Contactos', 'Dirección', 'Certificaciones', 'Todo público']
      },
      {
        id: 'perfil_v12_resuelve',
        type: 'radio',
        text: '¿Esta pantalla de perfil resuelve el problema que mencionaste en v1.1?',
        options: ['Sí, completamente', 'Parcialmente', 'No lo resuelve']
      },
      {
        id: 'perfil_v12_otros',
        type: 'textarea',
        text: 'Otros comentarios sobre el perfil:'
      }
    ]
  }
};

// Gestor de Feedback (reutiliza la lógica de v1)
class FeedbackManager {
  constructor() {
    this.currentPage = this.getCurrentPage();
    this.responses = this.loadResponses();
    this.init();
  }

  getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    return filename || 'index.html';
  }

  init() {
    this.createFeedbackButton();
    this.createFeedbackPanel();
    this.loadExistingResponses();
    this.attachEventListeners();
  }

  createFeedbackButton() {
    const button = document.createElement('button');
    button.className = 'feedback-button';
    button.id = 'feedbackButton';
    button.innerHTML = '💬';
    button.title = 'Dar feedback sobre este wireframe';

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
        <div class="alert alert-info" style="margin-bottom: 1rem; font-size: 0.875rem;">
          <strong>📋 Wireframe v1.2:</strong> Estas preguntas validan los nuevos diseños propuestos para corregir los hallazgos de v1.1.
        </div>

        <div class="feedback-section">
          <div class="feedback-section-title">Validar nuevo diseño</div>
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

    const form = document.getElementById('feedbackForm');
    if (form) {
      form.addEventListener('change', () => this.autoSave());
    }
  }

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

  autoSave() {
    const formData = this.getFormData();
    this.responses[this.currentPage] = formData;
    localStorage.setItem('feedbackResponses_v12', JSON.stringify(this.responses));
    this.showToast('Respuesta guardada automáticamente', 'success');
  }

  saveResponses() {
    const formData = this.getFormData();
    this.responses[this.currentPage] = formData;
    localStorage.setItem('feedbackResponses_v12', JSON.stringify(this.responses));
    this.showToast('✓ Feedback guardado correctamente', 'success');
    this.updateButtonBadge();

    setTimeout(() => {
      this.closePanel();
    }, 1000);
  }

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

  loadResponses() {
    const saved = localStorage.getItem('feedbackResponses_v12');
    return saved ? JSON.parse(saved) : {};
  }

  loadExistingResponses() {
    // Ya se cargan en renderQuestions
  }

  getResponseCount() {
    const pageResponses = this.responses[this.currentPage];
    if (!pageResponses) return 0;

    return Object.values(pageResponses).filter(value => {
      if (Array.isArray(value)) return value.length > 0;
      return value !== '';
    }).length;
  }

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

  showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `feedback-toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  static exportAllFeedback() {
    const responses = JSON.parse(localStorage.getItem('feedbackResponses_v12') || '{}');
    let output = '===========================================\n';
    output += 'FEEDBACK MVP v1.2 WIREFRAME - PLATAFORMA TEXTIL OIT\n';
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
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  if (feedbackQuestions[window.location.pathname.split('/').pop()]) {
    window.feedbackManager = new FeedbackManager();
  }
});

// Exportar funciones globales
window.FeedbackManager = FeedbackManager;
