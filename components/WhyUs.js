import { TruckIcon, CalendarIcon, WaterIcon, BuildingIcon, EmergencyIcon, MapPinIcon } from './Icons';

export default function WhyUs() {
  const advantages = [
    {
      icon: <TruckIcon size={24} />,
      title: 'Flota propia',
      desc: 'Unidades de transporte propias mantenidas bajo inspecciones sanitarias y mecánicas periódicas sin intermediarios.'
    },
    {
      icon: <CalendarIcon size={24} />,
      title: 'Entregas programadas',
      desc: 'Coordinación precisa de fechas y franjas horarias fijas para garantizar la continuidad operativa de tu empresa o fundo.'
    },
    {
      icon: <WaterIcon size={24} />,
      title: 'Diferentes capacidades',
      desc: 'Cisternas adaptadas desde 10 m³ hasta 30 m³ para optimizar el flete según el volumen exacto requerido.'
    },
    {
      icon: <BuildingIcon size={24} />,
      title: 'Atención empresarial',
      desc: 'Gestión comercial dedicada a contratos corporativos, órdenes de compra y facturación formal.'
    },
    {
      icon: <EmergencyIcon size={24} />,
      title: 'Respuesta ante emergencias',
      desc: 'Capacidad logística de despliegue prioritario frente a cortes del suministro público o contingencias imprevistas.'
    },
    {
      icon: <MapPinIcon size={24} />,
      title: 'Experiencia local',
      desc: 'Conocimiento detallado de las rutas, accesos complejos y regulaciones locales en las zonas de operación.'
    }
  ];

  return (
    <section className="section" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            ¿Por Qué Elegirnos como Aliado Logístico?
          </h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0 auto' }}>
            Nos basamos en infraestructura técnica, puntualidad y cumplimiento respaldado por flota propia.
          </p>
        </div>

        <div className="grid-3">
          {advantages.map((adv, idx) => (
            <div key={idx} className="card-pro">
              <div className="icon-wrapper">
                {adv.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                {adv.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
