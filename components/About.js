import FadeIn from './FadeIn';

export default function About() {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <div className="about-content">
                    <FadeIn>
                        <h2 className="section-title">Por qué elegirnos?</h2>
                    </FadeIn>
                    <div className="about-list">
                        <FadeIn delay={100} className="about-item">
                            <span className="about-icon">🚀</span>
                            <div>
                                <h3>Entrega Veloz</h3>
                                <p>Llegamos en menos de 60 minutos a tu ubicación.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={200} className="about-item">
                            <span className="about-icon">💎</span>
                            <div>
                                <h3>Pureza Garantizada</h3>
                                <p>Procesos de filtrado de última generación.</p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={300} className="about-item">
                            <span className="about-icon">🌱</span>
                            <div>
                                <h3>Eco-Friendly</h3>
                                <p>Envases retornables y procesos sostenibles.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
