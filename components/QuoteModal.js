'use client';
import { useState } from 'react';
import { FileTextIcon, WhatsAppIcon } from './Icons';

export default function QuoteModal({ isOpen, onClose, defaultService = 'Suministro de Agua' }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const text = `¡Hola! Deseo solicitar una cotización rápida:\n\n` +
      `• Nombre: ${name}\n` +
      `• Teléfono: ${phone}\n` +
      `${company ? `• Empresa: ${company}\n` : ''}` +
      `• Servicio/Interés: ${service}\n` +
      `${message ? `• Mensaje: ${message}` : ''}`;

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
        maxWidth: '520px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '32px',
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

        <div style={{ marginBottom: '20px' }}>
          <span className="badge-pro" style={{ marginBottom: '8px' }}>
            <FileTextIcon size={14} /> Solicitar Cotización
          </span>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
            Cotización Rápida de Servicio
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '4px' }}>
            Ingresa tus datos de contacto y te enviaremos una propuesta de inmediato.
          </p>
        </div>

        <form onSubmit={handleSubmitWhatsApp} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Nombre completo *
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Teléfono / WhatsApp *
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
              Empresa (opcional)
            </label>
            <input
              type="text"
              placeholder="Nombre de la empresa"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Servicio Requerido
            </label>
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
              Mensaje o Ubicación (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Indica la ubicación o cantidad requerida..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <button type="submit" className="btn btn-primary btn-large" style={{ flex: 1 }}>
              <FileTextIcon size={18} /> Enviar Cotización
            </button>
            <a
              href="https://wa.me/51999999999?text=Hola,%20deseo%20cotizar%20agua%20en%20cisterna"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-large"
              style={{ flex: 1 }}
            >
              <WhatsAppIcon size={18} /> WhatsApp
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
