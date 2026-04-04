import "./Hero.css";
import heroImg from "../../assets/hero/hero-clinic.webp";

function Hero() {
    return (
        <section className="hero" id="inicio">

            <div className="hero-media">
                <img 
                    src={heroImg} 
                    alt="Clínica Dermaraíz"
                    className="hero-image"
                    fetchpriority="high"
                />
                <div className="hero-overlay"></div>
                <div className="hero-fade"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">

                    <span className="hero-kicker">Capilar & Estética</span>

                    <div>
                        <span className="hero-trust-pill">Atención personalizada</span>
                        <span className="hero-trust-pill">Diagnóstico profesional</span>
                    </div>

                    <h1 className="hero-title">
                        Recuperá tu cabello con resultados naturales y un tratamiento pensado para vos.
                    </h1>

                    <p className="hero-text">
                        Evaluación médica personalizada y tratamientos capilares avanzados
                        para frenar la caída, fortalecer el cabello y acompañarte en cada
                        etapa del proceso.
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