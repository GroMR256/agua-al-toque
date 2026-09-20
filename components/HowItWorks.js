'use client';
import { FileTextIcon, CalendarIcon, TruckIcon, CheckCircleIcon } from './Icons';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: '1. Solicita',
      desc: 'Indica dónde necesitas agua, la cantidad estimada (m³ o Litros) y la fecha requerida.',
      icon: <FileTextIcon size={24} />
    },
    {
      num: '02',
      title: '2. Cotizamos',
      desc: 'Evaluamos tu requerimiento técnico-logístico y enviamos una propuesta comercial a medida.',
      icon: <CheckCircleIcon size={24} />
    },
    {
      num: '03',
      title: '3. Programamos',
      desc: 'Coordinamos la fecha exactas, turnos y protocolo de seguridad para la recepción en punto.',
      icon: <CalendarIcon size={24} />
    },
    {
      num: '04',
      title: '4. Entregamos',
      desc: 'Nuestra cisterna equipada llega al punto indicado con despacho rápido e impulsión directa.',
      icon: <TruckIcon size={24} />
    }
  ];

  return (
    <section className="section" style={{ padding: '90px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            ¿Cómo Funciona Nuestro Servicio?
          </h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0 auto' }}>
            Un procedimiento ágil de 4 pasos para garantizar la entrega puntual de agua sin complicaciones.
          </p>
        </div>

        <div className="grid-4">
          {steps.map((s, idx) => (
            <div key={idx} className="card-pro" style={{ position: 'relative', backgroundColor: '#FFFFFF' }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '2rem',
                fontWeight: 800,
                color: 'rgba(2, 132, 199, 0.15)'
              }}>
                {s.num}
              </div>
              <div className="icon-wrapper">
                {s.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
