// Módulo de Analítica y Eventos de Conversión (Agua Al Toque)

/**
 * Registra un evento en Google Analytics (gtag) si está disponible en la ventana.
 * @param {string} eventName Nombre del evento (ej. 'lead_submitted', 'whatsapp_click')
 * @param {Object} eventParams Parámetros adicionales
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, eventParams);
    } catch (err) {
      console.warn('Error dispatching gtag event:', err);
    }
  }
}

export const ANALYTICS_EVENTS = {
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_click',
  QUOTE_MODAL_OPENED: 'quote_modal_opened',
  QUOTE_SUBMITTED: 'quote_submitted',
  B2B_QUOTE_SUBMITTED: 'b2b_quote_submitted',
  CONTACT_SUBMITTED: 'contact_submitted',
  ORDER_SUBMITTED: 'order_submitted'
};
