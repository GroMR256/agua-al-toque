'use client';
import { useState } from 'react';

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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `¡Hola Agua Al Toque B2B! 🏢 Deseo solicitar una cotización corporativa:\n\n• Empresa: ${companyName || 'No especificada'} (RUC: ${ruc || 'S/N'})\n• Contacto: ${contactName || 'No especificado'}\n• Sector: ${sector}\n• Volumen requerido: ${volume}\n• Ubicación de planta/obra: ${location || 'Por definir'}\n• Correo: ${email || 'N/A'}\n• Teléfono: ${phone || 'N/A'}\n${notes ? `• Detalles adicionales: ${notes}` : ''}`;
    
    window.open(`https://wa.me/51999999999?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

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
          onClick={onClose}
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

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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

          <button type="submit" className="btn btn-primary btn-large" style={{ width: '100%', marginTop: '8px' }}>
            💼 Enviar Solicitud B2B por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
