'use client';
import { useState } from 'react';
import FadeIn from './FadeIn';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Cómo funciona el proceso de purificación por Ósmosis Inversa?',
      a: 'Nuestra agua pasa por 7 etapas de refinamiento: microfiltración de sedimentos, carbón activado en bloque, ósmosis inversa molecular de 0.0001 micras, remineralización balanceada, filtro pulidor y doble esterilización con radiación UV y ozono.'
    },
    {
      q: '¿Cómo funciona el intercambio de bidones retornables?',
      a: 'En tu primera compra entregas un envase retornable en buen estado o adquieres uno nuevo con nosotros. En las siguientes entregas, nuestro repartidor retira el envase vacío y te entrega el bidón purificado y sellado al instante.'
    },
    {
      q: '¿Cuál es el tiempo de entrega y costo de envío?',
      a: 'El envío es 100% GRATIS en zonas con cobertura exprés (Miraflores, San Isidro, Surco, San Borja, etc.) y el tiempo de entrega promedio es de 30 a 45 minutos. Para otros distritos programamos la entrega en el mismo día.'
    },
    {
      q: '¿Qué medios de pago aceptan?',
      a: 'Aceptamos Yape, Plin, transferencias bancarias directas, tarjetas de crédito/débito y pago contra entrega en efectivo o POS móvil.'
    },
    {
      q: '¿Cuentan con promociones para empresas u oficinas?',
      a: '¡Sí! Ofrecemos planes corporativos mensuales con hasta 20% de descuento y entrega semanal programada con factura electrónica.'
    }
  ];

  return (
    <section id="faq" className="section" style={{ background: 'rgba(11, 19, 43, 0.4)' }}>
      <div className="container">
        <FadeIn className="section-header">
          <span className="badge-glass">Resolvemos tus Dudas</span>
          <h2 className="section-title">Preguntas <span className="text-gradient">Frecuentes</span></h2>
          <p className="section-subtitle">
            Todo lo que necesitas saber sobre nuestros procesos de pureza, entregas y suscripciones.
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
