import { getWhatsAppLink } from './contactConfig';
import { getStoredUtmData } from './utmTracker';
import { trackEvent, ANALYTICS_EVENTS } from './analytics';

/**
 * Registra el clic de WhatsApp en la base de datos vía API y abre la pestaña de WhatsApp.
 * @param {Event|null} e Evento del clic (para llamar preventDefault si es necesario)
 * @param {string} location Identificador de dónde ocurrió el clic (ej. 'header', 'floating_button', 'hero')
 * @param {string} defaultText Mensaje predeterminado para WhatsApp
 */
export function handleDirectWhatsAppClick(e, location = 'direct_click', defaultText = '') {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  // 1. Analytics Event
  trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location });

  // 2. Traer UTMs
  const utmData = getStoredUtmData();

  const payload = {
    location,
    message: defaultText,
    ...utmData
  };

  const targetUrl = getWhatsAppLink(defaultText);

  // 3. Enviar ping a /api/whatsapp-click en segundo plano (non-blocking)
  if (typeof fetch === 'function') {
    fetch('/api/whatsapp-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch((err) => {
      console.warn('WhatsApp click tracking failed:', err);
    });
  }

  // 4. Abrir enlace de WhatsApp
  if (typeof window !== 'undefined') {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  }
}
