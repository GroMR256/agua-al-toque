'use client';
import { useState } from 'react';
import { getWhatsAppLink } from '@/lib/contactConfig';
import { getStoredUtmData } from '@/lib/utmTracker';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';
import { WhatsAppIcon } from './Icons';

export default function OrderModal({ isOpen, onClose, selectedProduct = null }) {
  const [product, setProduct] = useState(selectedProduct?.title || 'Bidón 20L Retornable');
  const [quantity, setQuantity] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [hpField, setHpField] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  if (!isOpen) return null;

  const prices = {
    'Bidón 20L Retornable': 15,
    'Pack Personal (12x625ml)': 20,
    'Pack Familiar 7L (3 Unidades)': 24,
    'Dispensador Smart Frío/Caliente': 180
  };

  const currentUnitPrice = prices[product] || 15;
  const totalPrice = currentUnitPrice * quantity;

  const handleReset = () => {
    setDistrict('');
    setAddress('');
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
      name: name || 'Cliente Pedido Web',
      phone: phone || 'Sin teléfono provisto',
      service: `Pedido: ${product}`,
      quantity: `${quantity} unidad(es) - Est. S/ ${totalPrice.toFixed(2)}`,
      location: `${district ? `Distrito: ${district}, ` : ''}${address}`,
      message: notes,
      source: 'order_modal',
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
        setWhatsappUrl(resData.whatsappUrl || getWhatsAppLink(`Hola, realicé un pedido de ${quantity}x ${product}`));
        trackEvent(ANALYTICS_EVENTS.ORDER_SUBMITTED, { product, quantity });
      } else {
        setErrorMsg(resData.message || 'No pudimos registrar tu pedido por el sistema. Inténtalo por WhatsApp.');
      }
    } catch (err) {
      console.error('Order submit error:', err);
      setErrorMsg('Ocurrió un error al enviar tu pedido. Puedes enviarlo por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fallbackWaUrl = getWhatsAppLink(
    `¡Hola Agua Al Toque! 💧 Pedido directo:\n• Producto: ${product}\n• Cantidad: ${quantity}\n• Ubicación: ${district} ${address}\n• Total: S/ ${totalPrice.toFixed(2)}`
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
        maxWidth: '540px',
        width: '100%',
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

        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }} className="text-gradient">
          Pide tu Agua al Toque 💧
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
          Completa los datos para coordinar el envío directo a tu hogar u oficina en minutos.
        </p>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ fontSize: '3rem', color: 'var(--accent-emerald)', marginBottom: '12px' }}>✓</div>
            <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'white', marginBottom: '8px' }}>
              ¡Pedido Registrado Correctamente!
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
              Tu orden de {quantity}x {product} (S/ {totalPrice.toFixed(2)}) ha sido ingresada a nuestro sistema de despacho.
            </p>
            <a
              href={whatsappUrl || fallbackWaUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-large"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'order_modal_success' })}
            >
              <WhatsAppIcon size={20} /> Coordinar Entrega por WhatsApp
            </a>
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
                padding: '10px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid #EF4444',
                color: '#FCA5A5',
                fontSize: '0.88rem'
              }}>
                ⚠️ {errorMsg}
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Producto Seleccionado
              </label>
              <select 
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="glass-input"
                style={{ width: '100%', borderRadius: '12px' }}
              >
                <option value="Bidón 20L Retornable" style={{ background: '#0B132B' }}>Bidón 20L Retornable (S/ 15.00)</option>
                <option value="Pack Personal (12x625ml)" style={{ background: '#0B132B' }}>Pack Personal (12x625ml) (S/ 20.00)</option>
                <option value="Pack Familiar 7L (3 Unidades)" style={{ background: '#0B132B' }}>Pack Familiar 7L (3 Unidades) (S/ 24.00)</option>
                <option value="Dispensador Smart Frío/Caliente" style={{ background: '#0B132B' }}>Dispensador Smart (S/ 180.00)</option>
              </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Cantidad:</span>
              <div className="qty-control" style={{ marginBottom: 0 }}>
                <button type="button" className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span className="qty-val">{quantity}</span>
                <button type="button" className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <input 
                type="text" 
                placeholder="Tu Nombre completo *" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="glass-input"
                style={{ width: '100%', borderRadius: '12px' }}
              />
              <input 
                type="tel" 
                placeholder="Teléfono / WhatsApp *" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="glass-input"
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </div>

            <div>
              <input 
                type="text" 
                placeholder="Distrito (ej. Miraflores, San Isidro, Surco)" 
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
                className="glass-input"
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </div>

            <div>
              <input 
                type="text" 
                placeholder="Dirección exacta de entrega" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="glass-input"
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '16px',
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <span style={{ color: 'var(--text-muted)' }}>Total a pagar:</span>
              <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-cyan)' }}>
                S/ {totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-large"
              style={{ width: '100%', marginTop: '8px', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
            >
              📲 {isSubmitting ? 'Procesando Pedido...' : 'Confirmar Pedido'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
