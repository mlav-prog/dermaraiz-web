
function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-subtitle">Capilar & Estética</p>

                    <h1 className="hero-title">
                        Recuperá tu cabello con un tratamiento personalizado
                    </h1>

                    <p className="hero-text">
                        Diagnóstico profesional y tratamientos capilares adaptados a cada 
                        paciente, con un enfoque integral en salud, estética y bienestar.
                    </p>

                    <div className="hero-buttons">
                        <a href="#contacto" className="btn-primary">
                            Solicitar Consulta
                        </a>
                        <a href="#tratamientos" className="btn-secondary">
                            Ver Tratamientos
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-image-placeholder">
                Imagen principal de la clínica
            </div>
        </section>
    )
}

export default Hero;