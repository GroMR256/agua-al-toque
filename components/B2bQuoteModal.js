'use client';
import { useState } from 'react';
import { getWhatsAppLink } from '@/lib/contactConfig';
import { getStoredUtmData } from '@/lib/utmTracker';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';
import { WhatsAppIcon } from './Icons';

export default function B2bQuoteModal({ isOpen, onClose, selectedSector = null }) {
  const [ruc, setRuc] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sector, setSector] = useState(selectedSector || 'Minería & Campamentos');
  const [volume, setVolume] = useState('10,000L - 30,000L (1 Cisterna)');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [hpField, setHpField] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  if (!isOpen) return null;

  const handleReset = () => {
    setRuc('');
    setCompanyName('');
    setContactName('');
    setEmail('');
    setPhone('');
    setLocation('');
    setNotes('');
    setIsSubmitting(false);
    setSubmitted(false);
    setErrorMsg('');
    if (onClose) onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMsg('');

    const utmData = getStoredUtmData();

    const payload = {
      name: contactName,
      phone,
      email,
      company: `${companyName} (RUC: ${ruc || 'S/N'})`,
      service: `B2B: ${sector}`,
      quantity: volume,
      location,
      message: notes,
      source: 'b2b_quote',
      hp_field: hpField,
      ...utmData
    };

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitted(true);
        setWhatsappUrl(resData.whatsappUrl || getWhatsAppLink(`Hola B2B, envié cotización para ${companyName}`));
        trackEvent(ANALYTICS_EVENTS.B2B_QUOTE_SUBMITTED, { sector, companyName });
      } else {
        setErrorMsg(resData.message || 'No pudimos registrar la solicitud B2B. Inténtalo nuevamente o por WhatsApp.');
      }
    } catch (err) {
      console.error('B2B submit error:', err);
      setErrorMsg('Ocurrió un error al enviar la solicitud corporativa.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fallbackWaUrl = getWhatsAppLink(
    `¡Hola Agua Al Toque B2B! 🏢 Cotización corporativa:\n• Empresa: ${companyName || 'N/A'} (RUC: ${ruc || 'S/N'})\n• Contacto: ${contactName || 'N/A'}\n• Teléfono: ${phone || 'N/A'}\n• Sector: ${sector}`
  );

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(3, 7, 18, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '620px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '36px',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0, 242, 254, 0.25)',
        border: '1px solid rgba(0, 242, 254, 0.3)'
      }}>
        <button 
          onClick={handleReset}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: 'white',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.1rem'
          }}
        >
          ✕
        </button>

        <span className="badge-glass" style={{ marginBottom: '12px' }}>🏢 Cotización Empresarial B2B</span>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }} className="text-gradient">
          Solicitud de Suministro Industrial
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
          Recibe una propuesta técnica y económica personalizada con crédito corporativo a 30/60 días.
        </p>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontSize: '3rem', color: 'var(--accent-emerald)', marginBottom: '12px' }}>✓</div>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white', marginBottom: '8px' }}>
              ¡Solicitud Corporativa Recibida!
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.5 }}>
              Un ingeniero comercial asignado revisará la especificación y se comunicará con {contactName}.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={whatsappUrl || fallbackWaUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-large"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'b2b_modal_success' })}
              >
                <WhatsAppIcon size={20} /> Contactar Asesor por WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="btn"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'white', width: '100%', padding: '10px' }}
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
              type="text"
              name="hp_field"
              value={hpField}
              onChange={(e) => setHpField(e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {errorMsg && (
              <div style={{
                padding: '12px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid #EF4444',
                color: '#FCA5A5',
                fontSize: '0.88rem'
              }}>
                ⚠️ {errorMsg}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '4px' }}>RUC de la Empresa *</label>
                <input 
                  type="text"
                  placeholder="20123456789"
                  value={ruc}
                  onChange={(e) => setRuc(e.target.value)}
                  required
                  className="glass-input"
                  style={{ width: '100%', borderRadius: '10px', padding: '10px 14px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Razón Social *</label>
                <input 
                  type="text"
                  placeholder="Nombre de la empresa"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="glass-input"
                  style={{ width: '100%', borderRadius: '10px', padding: '10px 14px' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Persona de Contacto *</label>
                <input 
                  type="text"
                  placeholder="Nombre y apellido"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                  className="glass-input"
                  style={{ width: '100%', borderRadius: '10px', padding: '10px 14px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Teléfono / WhatsApp *</label>
                <input 
                  type="tel"
                  placeholder="999 999 999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="glass-input"
                  style={{ width: '100%', borderRadius: '10px', padding: '10px 14px' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Sector / Industria</label>
                <select 
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="glass-input"
                  style={{ width: '100%', borderRadius: '10px', padding: '10px 14px' }}
                >
                  <option value="Minería & Campamentos" style={{ background: '#0B132B' }}>Minería & Campamentos</option>
                  <option value="Construcción & Obras Civiles" style={{ background: '#0B132B' }}>Construcción & Obras Civiles</option>
                  <option value="Agroindustria & Granjas" style={{ background: '#0B132B' }}>Agroindustria & Granjas</option>
                  <option value="Hotelería & Hospitality" style={{ background: '#0B132B' }}>Hotelería & Hospitality</option>
                  <option value="Sector Gobierno & Licitaciones" style={{ background: '#0B132B' }}>Sector Gobierno & Licitaciones</option>
                  <option value="Concesionarias & Automotriz" style={{ background: '#0B132B' }}>Concesionarias & Automotriz</option>
                  <option value="Plantas Industriales" style={{ background: '#0B132B' }}>Plantas Industriales</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Volumen Estimado</label>
                <select 
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="glass-input"
                  style={{ width: '100%', borderRadius: '10px', padding: '10px 14px' }}
                >
                  <option value="10,000L - 30,000L (1 Cisterna)" style={{ background: '#0B132B' }}>10,000L - 30,000L (1 Cisterna)</option>
                  <option value="50,000L - 100,000L Semanal" style={{ background: '#0B132B' }}>50,000L - 100,000L Semanal</option>
                  <option value="+200,000L Mensual Continuo" style={{ background: '#0B132B' }}>+200,000L Mensual Continuo</option>
                  <option value="Planta Móvil de Tratamiento" style={{ background: '#0B132B' }}>Planta Móvil de Tratamiento</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Ubicación de la Planta o Proyecto *</label>
              <input 
                type="text" 
                placeholder="Ej. Mina Las Bambas, Carretera Central Km 45, Lote Agro en Ica..." 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="glass-input"
                style={{ width: '100%', borderRadius: '10px', padding: '10px 14px' }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-large"
              style={{ width: '100%', marginTop: '8px', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
            >
              💼 {isSubmitting ? 'Procesando Solicitud B2B...' : 'Enviar Solicitud B2B'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
