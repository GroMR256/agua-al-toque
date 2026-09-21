// Módulo de Atribución y Tracking UTM (Agua Al Toque)

const STORAGE_KEY = 'aat_utm_data';

/**
 * Guarda los parámetros UTM de la URL actual y el referrer en sessionStorage / localStorage.
 */
export function initUtmTracking() {
  if (typeof window === 'undefined') return;

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    const utmContent = urlParams.get('utm_content');
    const utmTerm = urlParams.get('utm_term');

    const existing = getStoredUtmData();

    // Guardar si hay nuevos UTMs en la URL o si no existe ningún dato guardado
    if (utmSource || utmMedium || utmCampaign || !existing.utm_source) {
      const utmData = {
        utm_source: utmSource || existing.utm_source || null,
        utm_medium: utmMedium || existing.utm_medium || null,
        utm_campaign: utmCampaign || existing.utm_campaign || null,
        utm_content: utmContent || existing.utm_content || null,
        utm_term: utmTerm || existing.utm_term || null,
        referrer: document.referrer || existing.referrer || null,
        timestamp: new Date().toISOString()
      };

      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utmData));
    }
  } catch (err) {
    console.warn('Error saving UTM data:', err);
  }
}

/**
 * Recupera los datos de atribución guardados.
 * @returns {Object}
 */
export function getStoredUtmData() {
  if (typeof window === 'undefined') return {};

  try {
    const dataStr = sessionStorage.getItem(STORAGE_KEY);
    return dataStr ? JSON.parse(dataStr) : {};
  } catch {
    return {};
  }
}
