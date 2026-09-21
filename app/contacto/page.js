'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingContactButtons from '../../components/FloatingContactButtons';
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon, FileTextIcon } from '../../components/Icons';
import { getWhatsAppLink, PUBLIC_CONFIG } from '@/lib/contactConfig';
import { getStoredUtmData } from '@/lib/utmTracker';
import { trackEvent, ANALYTICS_EVENTS } from '@/lib/analytics';

export default function ContactoPage() {
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
  const [hpField, setHpField] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMsg('');

    const utmData = getStoredUtmData();

    const payload = {
      name,
      phone,
      email,
      company: company ? `${company} ${ruc ? `(RUC: ${ruc})` : ''}` : null,
      service: `[${clientType}] ${service}`,
      quantity,
      frequency,
      start_date: date,
      location,
      message: comments,
      source: 'contacto_page',
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
        setWhatsappUrl(resData.whatsappUrl || getWhatsAppLink(`Hola, envié una cotización formal`));
        trackEvent(ANALYTICS_EVENTS.CONTACT_SUBMITTED);
      } else {
        setErrorMsg(resData.message || 'No pudimos registrar la solicitud. Inténtalo de nuevo o por WhatsApp.');
      }
    } catch (err) {
      console.error('Contacto page submit error:', err);
      setErrorMsg('Error de comunicación. Por favor contáctanos directamente por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fallbackWaUrl = getWhatsAppLink('Hola, deseo cotizar servicio de agua en cisterna');

  return (
    <main>
      <Header onOpenQuoteModal={() => {}} />

      <section style={{ backgroundColor: 'var(--primary-navy)', color: '#FFFFFF', padding: '60px 0' }}>
        <div className="container">
          <span className="badge-pro" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--accent-cyan)' }}>
            Contacto Comercial & Cotizaciones
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginTop: '12px' }}>
            Solicitar Cotización de Servicio
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '700px', marginTop: '12px' }}>
            Completa el formulario para evaluar tus requerimientos de abastecimiento de agua o alquiler de cisternas.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '48px' }}>
            <div>
              <span className="badge-pro">Formulario Comercial</span>
              <h2 className="section-title" style={{ marginTop: '12px', marginBottom: '20px' }}>
                ¿Qué servicio necesitas?
              </h2>

              {submitted ? (
                <div style={{ padding: '24px', borderRadius: '12px', backgroundColor: 'rgba(5, 150, 105, 0.08)', border: '1px solid var(--accent-emerald)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--accent-emerald)', marginBottom: '8px' }}>✓</div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                    ¡Cotización Formal Registrada!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>
                    Hemos recibido los detalles de tu solicitud. Un ingeniero comercial se comunicará a la brevedad.
                  </p>
                  <a
                    href={whatsappUrl || fallbackWaUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'contacto_page_success' })}
                    className="btn btn-whatsapp btn-large"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <WhatsAppIcon size={20} /> Coordinación Inmediata por WhatsApp
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
                      padding: '12px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid #EF4444',
                      color: '#B91C1C',
                      fontSize: '0.88rem'
                    }}>
                      ⚠️ {errorMsg}
                    </div>
                  )}

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
                        placeholder="Ej. 987 654 321"
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
                        placeholder="Distrito o Ciudad"
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
                      rows={4}
                      placeholder="Detalles sobre accesibilidad para cisternas, requerimientos técnicos o turnos de entrega..."
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-large"
                      style={{ flex: 1, opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                    >
                      <FileTextIcon size={20} /> {isSubmitting ? 'Procesando...' : 'Solicitar Cotización'}
                    </button>
                    <a
                      href={fallbackWaUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'contacto_page_direct' })}
                      className="btn btn-whatsapp btn-large"
                      style={{ flex: 1 }}
                    >
                      <WhatsAppIcon size={20} /> Contactar por WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <span className="badge-pro">Atención Directa</span>
              <h2 className="section-title" style={{ marginTop: '0' }}>
                Información de Contacto
              </h2>

              <div className="card-pro">
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div className="icon-wrapper" style={{ marginBottom: 0 }}>
                      <PhoneIcon size={20} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--primary-navy)', fontSize: '1rem' }}>Teléfono Central:</strong>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>+{PUBLIC_CONFIG.whatsappNumber}</div>
                    </div>
                  </li>

                  <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div className="icon-wrapper" style={{ marginBottom: 0, backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
                      <WhatsAppIcon size={20} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--primary-navy)', fontSize: '1rem' }}>WhatsApp Directo:</strong>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>+{PUBLIC_CONFIG.whatsappNumber}</div>
                    </div>
                  </li>

                  <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div className="icon-wrapper" style={{ marginBottom: 0 }}>
                      <MapPinIcon size={20} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--primary-navy)', fontSize: '1rem' }}>Base / Dirección:</strong>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Operación Logística Regional</div>
                    </div>
                  </li>

                  <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div className="icon-wrapper" style={{ marginBottom: 0 }}>
                      <ClockIcon size={20} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--primary-navy)', fontSize: '1rem' }}>Horario de Atención:</strong>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Lunes a Domingo - Atención 24/7 y Emergencias</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div style={{ backgroundColor: 'var(--primary-navy)', color: '#FFFFFF', padding: '32px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>
                  ¿Tienes una emergencia de agua?
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.92rem', marginBottom: '20px' }}>
                  Atendemos llamadas urgentes y despachos prioritarios para hoteles, residencias e industrias.
                </p>
                <a
                  href={getWhatsAppLink('EMERGENCIA: Necesito cisterna de agua urgente')}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP_CLICK, { location: 'contacto_page_emergency' })}
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <WhatsAppIcon size={18} /> Emergencia por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons onOpenQuoteModal={() => {}} />
    </main>
  );
}
