import "./Hero.css";

function Hero() {
    return (
        <section className="hero" id="inicio">

            <div className="hero-media">
                <div className="hero-overlay"></div>
                <div className="hero-fade"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">

                    <span className="hero-kicker">Capilar & Estética</span>

                    <div>
                        <span className="hero-trust-pill">Médico especialista</span>
                        <span className="hero-trust-pill">Resultados naturales</span>
                    </div>

                    <h1 className="hero-title">
                        Implante capilar con resultados naturales en manos profesionales.
                    </h1>

                    <p className="hero-text">
                        Tratamientos avanzados, diagnóstico personalizado y seguimiento médico en cada etapa.
                    </p>

                    <div className="hero-buttons">
                        <a href="#contacto" className="btn-primary">
                            Reservar Consulta
                        </a>
                        <a href="#resultados" className="btn-secondary">
                            Ver resultados reales
                        </a>
                    </div>

                    <div className="hero-highlights">
                        <div className="hero-highlight">
                            <strong>Enfoque integral</strong>
                            <span>Salud, estética y seguimiento profesional.</span>
                        </div>

                        <div className="hero-highlight">
                            <strong>Tratamientos adaptados</strong>
                            <span>Cada caso se evalúa de forma personalizada.</span>
                        </div>
                    </div>  
                </div>
            </div>
            
        </section>
    );
}

export default Hero;