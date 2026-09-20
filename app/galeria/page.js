'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';
import FloatingContactButtons from '../../components/FloatingContactButtons';
import FinalCta from '../../components/FinalCta';

export default function GaleriaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', 'Nuestra flota', 'Entregas', 'Agricultura', 'Construcción', 'Empresas', 'Operaciones'];

  const items = [
    { title: 'Cisterna de 30 m³ en Ruta', category: 'Nuestra flota', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80' },
    { title: 'Cisterna de 10 m³ para Zonas Urbanas', category: 'Nuestra flota', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' },
    { title: 'Abastecimiento a Reservorio en Fundo', category: 'Agricultura', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80' },
    { title: 'Suministro en Obra Vial', category: 'Construcción', image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80' },
    { title: 'Entrega a Complejo Hotelero', category: 'Entregas', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80' },
    { title: 'Transporte a Planta Industrial', category: 'Empresas', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' },
    { title: 'Operación de Bombeo de Alto Flujo', category: 'Operaciones', image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80' },
    { title: 'Campamento en Proyecto de Infraestructura', category: 'Construcción', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80' },
    { title: 'Despacho Programado Corporativo', category: 'Empresas', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
  ];

  const filteredItems = filter === 'Todos' ? items : items.filter(i => i.category === filter);

  return (
    <main>
      <Header onOpenQuoteModal={() => setIsModalOpen(true)} />

      <section style={{ backgroundColor: 'var(--primary-navy)', color: '#FFFFFF', padding: '60px 0' }}>
        <div className="container">
          <span className="badge-pro" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--accent-cyan)' }}>
            Registro Visual en Campo
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginTop: '12px' }}>
            Galería Operativa & Flota
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '700px', marginTop: '12px' }}>
            Fotografías reales de nuestras unidades cisterna, entregas y presencia en diversos sectores de la industria.
          </p>
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn ${filter === cat ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '8px 18px', fontSize: '0.9rem' }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filteredItems.map((item, idx) => (
              <div key={idx} style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '16px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-sky)', textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-navy)', marginTop: '4px' }}>
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta onOpenQuoteModal={() => setIsModalOpen(true)} />
      <Footer />

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <FloatingContactButtons onOpenQuoteModal={() => setIsModalOpen(true)} />
    </main>
  );
}
