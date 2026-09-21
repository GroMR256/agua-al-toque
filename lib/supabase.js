import { createClient } from '@supabase/supabase-js';
import { SERVER_CONFIG } from './contactConfig';
import { logger } from './logger';

let supabaseClient = null;

if (SERVER_CONFIG.supabaseUrl && SERVER_CONFIG.supabaseServiceKey) {
  supabaseClient = createClient(
    SERVER_CONFIG.supabaseUrl,
    SERVER_CONFIG.supabaseServiceKey,
    {
      auth: {
        persistSession: false
      }
    }
  );
} else {
  logger.warn('SUPABASE_NOT_CONFIGURED', {
    message: 'SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY no configurados. Las inserciones serán simuladas.'
  });
}

/**
 * Inserta un lead en la tabla 'leads' de Supabase
 * @param {Object} leadData 
 * @returns {Promise<{ data: Object|null, error: Object|null }>}
 */
export async function saveLeadToDatabase(leadData) {
  if (!supabaseClient) {
    logger.info('SIMULATED_LEAD_INSERTION', { leadData });
    return {
      data: {
        id: 'simulated-' + Date.now(),
        ...leadData,
        created_at: new Date().toISOString()
      },
      error: null
    };
  }

  try {
    const { data, error } = await supabaseClient
      .from('leads')
      .insert([leadData])
      .select()
      .single();

    if (error) {
      logger.error('SUPABASE_INSERT_ERROR', error, { leadData });
      return { data: null, error };
    }

    logger.info('LEAD_SAVED_SUCCESS', { leadId: data.id });
    return { data, error: null };
  } catch (err) {
    logger.error('SUPABASE_EXCEPTION', err);
    return { data: null, error: err };
  }
}
