'use client';
import { useState } from 'react';
import { WaterIcon, PhoneIcon, WhatsAppIcon, FileTextIcon, CalendarIcon, TruckIcon } from './Icons';

export default function QuoteModal({ isOpen, onClose, defaultService = 'Suministro de Agua' }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [ruc, setRuc] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [clientType, setClientType] = useState('Empresa / B2B');
  const [service, setService] = useState(defaultService);
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('10 m³ (1 Cisterna)');
  const [date, setDate] = useState('');
  const [frequency, setFrequency] = useState('Entrega Puntual');
  const [comments, setComments] = useState('');

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const text = `¡Hola! Deseo solicitar una cotización comercial:\n\n` +
      `• Nombre: ${name || '[Nombre no especificado]'}\n` +
      `• Empresa: ${company || '[Empresa/Particular]'} ${ruc ? `(RUC: ${ruc})` : ''}\n` +
      `• Tipo de Cliente: ${clientType}\n` +
      `• Servicio Requerido: ${service}\n` +
      `• Cantidad: ${quantity}\n` +
      `• Frecuencia: ${frequency}\n` +
      `• Ubicación: ${location || '[No especificada]'}\n` +
      `• Fecha Requerida: ${date || 'Inmediata'}\n` +
      `• Teléfono: ${phone}\n` +
      `• Email: ${email}\n` +
      `${comments ? `• Comentarios: ${comments}` : ''}`;

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
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        maxWidth: '680px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '36px',
        position: 'relative',
        boxShadow: 'var(--shadow-xl)',
        border: '1px solid var(--border-light)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#F1F5F9',
            border: 'none',
            color: '#475569',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.2rem',
            fontWeight: 700
          }}
        >
          ✕
        </button>

        <div style={{ marginBottom: '24px' }}>
          <span className="badge-pro" style={{ marginBottom: '12px' }}>
            <FileTextIcon size={14} /> Cotización Comercial
          </span>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
            Solicitud de Cotización de Agua & Logística
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '4px' }}>
            Cuéntanos qué necesitas y evaluaremos tu requerimiento para enviar una propuesta técnica y económica formal.
          </p>
        </div>

        <form onSubmit={handleSubmitWhatsApp} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Nombre completo *
              </label>
              <input
                type="text"
                placeholder="Ej. Juan Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Empresa / Razón Social
              </label>
              <input
                type="text"
                placeholder="Nombre de la empresa o particular"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                RUC (opcional)
              </label>
              <input
                type="text"
                placeholder="20123456789"
                value={ruc}
                onChange={(e) => setRuc(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Teléfono / Celular *
              </label>
              <input
                type="tel"
                placeholder="[NÚMERO DE TELÉFONO]"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="contacto@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Tipo de Cliente
              </label>
              <select
                value={clientType}
                onChange={(e) => setClientType(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', backgroundColor: '#FFFFFF' }}
              >
                <option value="Empresa / B2B">Empresa / B2B</option>
                <option value="Agrícola / Fundo">Agrícola / Fundo</option>
                <option value="Construcción / Obra">Construcción / Obra</option>
                <option value="Minería / Proyecto">Minería / Proyecto</option>
                <option value="Hotel / Restaurante">Hotel / Restaurante</option>
                <option value="Institución / Gobierno">Institución / Gobierno</option>
                <option value="Particular / Hogar">Particular / Hogar</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Servicio Requerido
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', backgroundColor: '#FFFFFF' }}
              >
                <option value="Suministro de agua">1. Suministro de agua</option>
                <option value="Abastecimiento empresarial">2. Abastecimiento empresarial</option>
                <option value="Agua para agricultura">3. Agua para agricultura</option>
                <option value="Agua para construcción">4. Agua para construcción</option>
                <option value="Agua para minería y proyectos">5. Agua para minería y proyectos</option>
                <option value="Alquiler de cisternas">6. Alquiler de cisternas</option>
                <option value="Transporte de agua">7. Transporte de agua</option>
                <option value="Abastecimiento de emergencia">8. Abastecimiento de emergencia</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Ubicación de Entrega *
              </label>
              <input
                type="text"
                placeholder="[ZONA DE COBERTURA / Distrito / Provincia]"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Cantidad Aprox. (m³ o Litros)
              </label>
              <input
                type="text"
                placeholder="Ej. 10 m³, 30 m³, 100 m³..."
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Frecuencia del Servicio
              </label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', backgroundColor: '#FFFFFF' }}
              >
                <option value="Entrega Puntual">Entrega Puntual</option>
                <option value="Frecuencia Diaria">Frecuencia Diaria</option>
                <option value="Frecuencia Semanal">Frecuencia Semanal</option>
                <option value="Contrato Continuo">Contrato Continuo</option>
                <option value="Emergencia Inmediata">Emergencia Inmediata</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Fecha Requerida
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Comentarios adicionales
            </label>
            <textarea
              rows={3}
              placeholder="Detalles de accesibilidad, horarios de recepción o requerimientos especiales..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <button type="submit" className="btn btn-primary btn-large" style={{ flex: 1 }}>
              <FileTextIcon size={18} /> Solicitar Cotización
            </button>
            <a
              href="https://wa.me/51999999999?text=Hola,%20deseo%20contactarme%20para%20un%20servicio%20de%20agua%20en%20cisterna"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-large"
              style={{ flex: 1 }}
            >
              <WhatsAppIcon size={18} /> Contactar por WhatsApp
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
