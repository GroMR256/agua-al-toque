'use client';
import { useState } from 'react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Qué volumen de agua pueden entregar?',
      a: 'Disponemos de camiones cisterna con capacidades de 10 m³ (10,000 Litros), 15 m³ (15,000 Litros) y 30 m³ (30,000 Litros). Podemos despachar desde una unidad puntual hasta convoyes continuos de varios cientos de metros cúbicos para proyectos de gran escala.'
    },
    {
      q: '¿Realizan entregas programadas?',
      a: 'Sí, coordinamos entregas programadas con frecuencias fijas (diarias, semanales o mensuales) mediante contratos de abastecimiento diseñados para garantizar que tu empresa, fundo u obra nunca se quede sin agua.'
    },
    {
      q: '¿Atienden emergencias?',
      a: 'Contamos con protocolo de respuesta rápida para emergencias hídricas, fallas de bombeo o cortes de suministro público, enviando la cisterna al punto requerido a la brevedad.'
    },
    {
      q: '¿En qué zonas trabajan?',
      a: 'Operamos habitualmente en [ZONA DE COBERTURA / CIUDAD], cubriendo áreas urbanas, zonas industriales, proyectos en carretera y valles agrícolas. Para zonas alejadas fuera de la ruta estándar, evaluamos servicios especiales.'
    },
    {
      q: '¿Puedo contratar entregas recurrentes?',
      a: 'Por supuesto. Diseñamos planes de abastecimiento recurrente con facturación comercial y condiciones preferenciales para empresas, hoteles, industrias y construcciones.'
    },
    {
      q: '¿Alquilan cisternas?',
      a: 'Sí, ofrecemos el servicio de alquiler de camiones cisterna por días, semanas o meses para operaciones en obra, proyectos mineros o almacenamiento temporal.'
    },
    {
      q: '¿Cuánto cuesta una entrega?',
      a: 'El costo varía en función del volumen en m³ solicitado, la distancia del punto de entrega, la accesibilidad de la ruta y la frecuencia del servicio. Ponte en contacto con nosotros para enviarte una cotización precisa.'
    },
    {
      q: '¿Con cuánto tiempo debo solicitar el servicio?',
      a: 'Para entregas programadas recomendamos solicitar con 24 a 48 horas de anticipación. Para servicios de emergencia, atendemos según disponibilidad inmediata de unidades en retén.'
    }
  ];

  return (
    <section className="section" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <span className="badge-pro">Preguntas Frecuentes</span>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Resolvemos tus Dudas sobre el Servicio
          </h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0 auto' }}>
            Respuestas claras a las consultas habituales sobre volúmenes, zonas, contratación y alquiler de cisternas.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} style={{
                backgroundColor: 'var(--bg-light)',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: isOpen ? 'var(--accent-sky)' : 'var(--primary-navy)'
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.2rem', marginLeft: '16px', color: 'var(--accent-sky)' }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 24px 20px 24px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
