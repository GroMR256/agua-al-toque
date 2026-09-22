import Image from 'next/image';

export default function GalleryPreview() {
  const galleryItems = [
    { title: 'Flota de Camiones Cisterna', category: 'Nuestra flota', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80' },
    { title: 'Abastecimiento en Campo Agrícola', category: 'Agricultura', image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80' },
    { title: 'Suministro para Obra Civil', category: 'Construcción', image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=600&q=80' },
    { title: 'Despacho a Complejo Hotelero', category: 'Hoteles', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
    { title: 'Transporte Pesado a Planta', category: 'Empresas', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' },
    { title: 'Operación de Despacho en Cisterna', category: 'Operaciones', image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <section className="section" style={{ padding: '90px 0', backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
          <div>
            <h2 className="section-title" style={{ marginTop: '12px' }}>
              Nuestra Flota & Operaciones en Campo
            </h2>
            <p className="section-subtitle">
              Imágenes de nuestras unidades cisterna, entregas y presencia en proyectos reales.
            </p>
          </div>
        </div>

        <div className="grid-3">
          {galleryItems.map((item, idx) => (
            <div key={idx} style={{
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              height: '260px',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-light)'
            }}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.9) 100%)',
                padding: '20px',
                color: '#FFFFFF',
                zIndex: 2
              }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  {item.category}
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '2px' }}>
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
