'use client';
import { useState } from 'react';

export default function OrderModal({ isOpen, onClose, selectedProduct = null }) {
  const [product, setProduct] = useState(selectedProduct?.title || 'Bidón 20L Retornable');
  const [quantity, setQuantity] = useState(2);
  const [district, setDistrict] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const prices = {
    'Bidón 20L Retornable': 15,
    'Pack Personal (12x625ml)': 20,
    'Pack Familiar 7L (3 Unidades)': 24,
    'Dispensador Smart Frío/Caliente': 180
  };

  const currentUnitPrice = prices[product] || 15;
  const totalPrice = currentUnitPrice * quantity;

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    const text = `¡Hola Agua Al Toque! 💧 Deseo realizar un pedido:\n\n• Producto: ${product}\n• Cantidad: ${quantity}\n• Distrito: ${district || 'No especificado'}\n• Dirección: ${address || 'Por confirmar'}\n• Total estimado: S/ ${totalPrice.toFixed(2)}\n${notes ? `• Notas: ${notes}` : ''}`;
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
        maxWidth: '540px',
        width: '100%',
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

        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '8px' }} className="text-gradient">
          Pide tu Agua al Toque 💧
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.95rem' }}>
          Completa los datos para coordinar el envío directo a tu hogar u oficina en minutos.
        </p>

        <form onSubmit={handleWhatsAppOrder} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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

          <button type="submit" className="btn btn-primary btn-large" style={{ width: '100%', marginTop: '8px' }}>
            📲 Confirmar Pedido por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
