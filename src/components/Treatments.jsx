function Treatments() {
    return (
        <section className="treatments" id="tratamientos">
            <div className="treatments-header">
                <p className="section-tag">Tratamientos</p>
                
                <h2>Soluciones capilares adaptadas a cada paciente</h2>
                
                <p className="section-description">
                    Trabajamos con un enfoque personalizado para diagnosticar cada caso y
                    ofrecer el tratamiento más adecuado según el tipo de caída y las
                    necesidades de cada persona.
                </p>
            </div>

            <div className="treatments-grid">
                <article className="treatment-card">
                    <div className="treatment-icon">💉</div>
                    <h3>PRP Capilar</h3>
                    <p>Tratamiento con plasma rico en plaquetas. Tratamiento regenerativo que ayuda a estimular el crecimiento del
                        cabello y fortalecer el folículo capilar.
                    </p>
                    <a href="#contacto" className="card-link">Consultar tratamiento</a>
                </article>
        
                <article className="treatment-card">
                    <div className="treatment-icon">🌿</div>
                    <h3>Mesoterapia Capilar</h3>
                    <p>
                        Aplicación de activos específicos para mejorar la calidad del cabello
                        y acompañar procesos de recuperación capilar.
                    </p>
                    <a href="#contacto" className="card-link">Consultar tratamiento</a>
                </article>

                <article className="treatment-card">
                    <div className="treatment-icon">🩺</div>
                    <h3>Diagnóstico Personalizado</h3>
                    <p>
                        Evaluación profesional para identificar el tipo de alopecia y definir
                        una estrategia de tratamiento adecuada.
                    </p>
                    <a href="#contacto" className="card-link">Consultar tratamiento</a>
                </article>
            </div>

        </section>
    )
}
export default Treatments;