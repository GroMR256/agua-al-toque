'use client';
import { useState } from 'react';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon, FileTextIcon } from './Icons';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [ruc, setRuc] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [clientType, setClientType] = useState('Empresa / B2B');
  const [service, setService] = useState('Suministro de agua');
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('10 m³');
  const [date, setDate] = useState('');
  const [frequency, setFrequency] = useState('Entrega Puntual');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `¡Hola! Deseo solicitar una cotización comercial formal:\n\n` +
      `• Nombre: ${name}\n` +
      `• Empresa: ${company || '[Particular]'} ${ruc ? `(RUC: ${ruc})` : ''}\n` +
      `• Tipo de Cliente: ${clientType}\n` +
      `• Servicio Requerido: ${service}\n` +
      `• Cantidad: ${quantity}\n` +
      `• Frecuencia: ${frequency}\n` +
      `• Ubicación: ${location}\n` +
      `• Fecha Requerida: ${date || 'Inmediata'}\n` +
      `• Teléfono: ${phone}\n` +
      `• Email: ${email}\n` +
      `${comments ? `• Comentarios: ${comments}` : ''}`;

    window.open(`https://wa.me/51999999999?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="section" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <span className="badge-pro">Formulario Comercial</span>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Solicitar Cotización & Contacto
          </h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0 auto' }}>
            Ingresa los datos de tu requerimiento y nos pondremos en contacto a la brevedad.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '48px' }}>
          <div>
            {submitted && (
              <div style={{ padding: '16px 20px', borderRadius: '8px', backgroundColor: 'rgba(5, 150, 105, 0.1)', border: '1px solid var(--accent-emerald)', color: 'var(--accent-emerald)', marginBottom: '24px', fontWeight: 600 }}>
                ✓ ¡Gracias por comunicarte! Redirigiendo a atención por WhatsApp...
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Juan Pérez"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Empresa / Razón Social
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre de la empresa"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    RUC (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="20123456789"
                    value={ruc}
                    onChange={(e) => setRuc(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Teléfono / Celular *
                  </label>
                  <input
                    type="tel"
                    placeholder="[NÚMERO DE TELÉFONO]"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="contacto@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Tipo de Cliente
                  </label>
                  <select
                    value={clientType}
                    onChange={(e) => setClientType(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', backgroundColor: '#FFFFFF' }}
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
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Servicio Requerido
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', backgroundColor: '#FFFFFF' }}
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
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Ubicación de entrega *
                  </label>
                  <input
                    type="text"
                    placeholder="[ZONA DE COBERTURA / Distrito]"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Cantidad aprox. (m³ o Litros)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 10 m³, 30 m³..."
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    Frecuencia del servicio
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', backgroundColor: '#FFFFFF' }}
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
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  Fecha requerida
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  Comentarios
                </label>
                <textarea
                  rows={3}
                  placeholder="Detalles sobre accesibilidad para cisternas o requerimientos técnicos..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button type="submit" className="btn btn-primary btn-large" style={{ flex: 1 }}>
                  <FileTextIcon size={20} /> Solicitar Cotización
                </button>
                <a
                  href="https://wa.me/51999999999?text=Hola,%20deseo%20cotizar%20servicio%20de%20agua%20en%20cisterna"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp btn-large"
                  style={{ flex: 1 }}
                >
                  <WhatsAppIcon size={20} /> Contactar por WhatsApp
                </a>
              </div>
            </form>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="card-pro">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '16px' }}>
                Información de Contacto
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0 }}>
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-navy)', fontSize: '0.95rem' }}>Teléfono Central:</strong>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>[NÚMERO DE TELÉFONO]</div>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-navy)', fontSize: '0.95rem' }}>WhatsApp Directo:</strong>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>[NÚMERO DE TELÉFONO]</div>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0 }}>
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-navy)', fontSize: '0.95rem' }}>Base / Dirección:</strong>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>[ZONA DE COBERTURA / CIUDAD]</div>
                  </div>
                </li>

                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="icon-wrapper" style={{ marginBottom: 0 }}>
                    <ClockIcon size={20} />
                  </div>
                  <div>
                    <strong style={{ color: 'var(--primary-navy)', fontSize: '0.95rem' }}>Horario de Atención:</strong>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Lunes a Domingo - Atención 24/7 y Emergencias</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
