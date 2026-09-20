'use client';
import { useState } from 'react';
import FadeIn from './FadeIn';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Cuál es la capacidad mínima y máxima de despacho en cisterna?',
      a: 'Nuestra flota pesada cuenta con cisternas de 10 m³ (10,000L), 15 m³ (15,000L) y 30 m³ (30,000L). Podemos movilizar convoyes simultáneos de hasta 500 m³ diarios para megaproyectos o eventos extraordinarios.'
    },
    {
      q: '¿Emiten certificados de calidad microbiológica y fisicoquímica?',
      a: 'Sí. Cada despacho cuenta con hoja de trazabilidad e informe de laboratorio acreditado conforme a la Norma Sanitaria DS 031-MINSA para agua apta para consumo humano o uso industrial especializado.'
    },
    {
      q: '¿Ofrecen crédito corporativo y facturación electrónica a 30/60 días?',
      a: 'Sí. Previa evaluación crediticia y firma de contrato de suministro, otorgamos líneas de crédito a 30, 45 o 60 días para compras corporativas mediante Orden de Compra (O/C).'
    },
    {
      q: '¿Cómo funciona la instalación de plantas móviles de tratamiento in situ?',
      a: 'Desplegamos módulos contenedorizados de filtración y ósmosis inversa directamente en tu campamento, mina o granja. Nos encargamos del montaje, puesta en marcha y mantenimiento técnico continuo.'
    },
    {
      q: '¿Cuál es el procedimiento para participar en licitaciones del Estado o contrataciones públicas?',
      a: 'Contamos con RNP (Registro Nacional de Proveedores) activo en el capítulo de Bienes y Servicios. Atendemos requerimientos del SEACE y compras corporativas gubernamentales.'
    }
  ];

  return (
    <section id="faq" className="section" style={{ background: 'rgba(11, 19, 43, 0.4)' }}>
      <div className="container">
        <FadeIn className="section-header">
          <span className="badge-glass">Consultas Corporativas</span>
          <h2 className="section-title">Preguntas Frecuentes <span className="text-gradient">B2B</span></h2>
          <p className="section-subtitle">
            Información clave sobre logística de transporte, créditos institucionales y normativas sanitarias.
          </p>
        </FadeIn>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn key={idx} delay={idx * 80} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span style={{ color: isOpen ? 'var(--color-cyan)' : 'white' }}>{faq.q}</span>
                  <span style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-cyan)',
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    ▼
                  </span>
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    {faq.a}
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
