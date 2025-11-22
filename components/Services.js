import FadeIn from './FadeIn';

export default function Services() {
    return (
        <section id="products" className="section services">
            <div className="container">
                <FadeIn>
                    <h2 className="section-title">Nuestros Productos</h2>
                </FadeIn>
                <div className="grid services-grid">
                    <FadeIn delay={100} className="card service-card">
                        <div className="card-icon">💧</div>
                        <h3 className="card-title">Bidón 20L</h3>
                        <p className="card-text">Ideal para el hogar y oficina. Retornable y económico.</p>
                        <span className="card-price">S/ 15.00</span>
                    </FadeIn>
                    <FadeIn delay={200} className="card service-card">
                        <div className="card-icon">🥤</div>
                        <h3 className="card-title">Pack Personal</h3>
                        <p className="card-text">12 botellas de 625ml. Llévalas a donde quieras.</p>
                        <span className="card-price">S/ 20.00</span>
                    </FadeIn>
                    <FadeIn delay={300} className="card service-card">
                        <div className="card-icon">🏢</div>
                        <h3 className="card-title">Dispensadores</h3>
                        <p className="card-text">Venta y alquiler de dispensadores eléctricos y básicos.</p>
                        <span className="card-price">Consultar</span>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
