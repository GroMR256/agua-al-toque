// Configuración Centralizada de Contactos y Canales (Agua Al Toque)

export const PUBLIC_CONFIG = {
  defaultWhatsAppNumber: '51999999999',
  get whatsappNumber() {
    return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || this.defaultWhatsAppNumber;
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://aguaaltoque.com',
  // Zona de operación que se muestra en la página. Hoy solo Huarmey, no toda la región.
  serviceArea: 'Huarmey',
  serviceRegion: 'Áncash',
  contactEmail: 'cotizaciones@aguaaltoque.com',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''
};

/**
 * Genera un enlace a WhatsApp limpio con el mensaje codificado correctamente.
 * @param {string} message Texto del mensaje pre-escrito
 * @param {string|null} phoneOverride Número opcional para reemplazar el por defecto
 * @returns {string} Enlace a wa.me
 */
export function getWhatsAppLink(message = '', phoneOverride = null) {
  const rawNumber = phoneOverride || PUBLIC_CONFIG.whatsappNumber;
  const cleanNumber = rawNumber.replace(/\D/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}${encodedMsg ? `?text=${encodedMsg}` : ''}`;
}

/**
 * Formatea el número de WhatsApp para mostrarlo: 51999999999 → +51 999 999 999
 */
export function formatPhone(rawNumber = PUBLIC_CONFIG.whatsappNumber) {
  const digits = rawNumber.replace(/\D/g, '');
  const local = digits.startsWith('51') ? digits.slice(2) : digits;
  const grouped = local.replace(/(\d{3})(?=\d)/g, '$1 ');
  return digits.startsWith('51') ? `+51 ${grouped}` : grouped;
}

// Configuración de Servidor (Solo accesible en API Routes / Server Side)
export const SERVER_CONFIG = {
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  resendApiKey: process.env.RESEND_API_KEY || '',
  contactEmail: process.env.CONTACT_EMAIL || 'cotizaciones@aguaaltoque.com'
};
