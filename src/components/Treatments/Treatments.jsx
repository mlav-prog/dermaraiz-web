import "./Treatments.css";

function Treatments() {

    const treatments = [
        {
            icon: "💉",
            title: "PRP Capilar",
            description:
                "Tratamiento con plasma rico en plaquetas orientado a estimular el crecimiento capilar, fortalecer el folículo y acompañar procesos de recuperación del cabello.",
            benefit: "Ideal para fortalecer y estimular el crecimiento."
        },
        {
            icon: "🌿",
            title: "Mesoterapia Capilar",
            description:
                "Aplicación de activos específicos sobre el cuero cabelludo para mejorar la calidad del cabello, nutrir la raíz y complementar tratamientos de recuperación capilar.",
            benefit: "Acompaña la nutrición y revitalización capilar."
        },
        {
            icon: "🩺",
            title: "Diagnóstico Personalizado",
            description:
                "Evaluación profesional para identificar el tipo de alopecia, analizar el estado del cuero cabelludo y definir un plan de tratamiento adecuado para cada caso.",
            benefit: "Permite definir el tratamiento más adecuado."
        }
    ];

    return (
        <section className="treatments" id="tratamientos">
            <div className="treatments-header">
                <p className="section-tag">Tratamientos</p>
                
                <h2>Soluciones capilares adaptadas a cada paciente</h2>
                
                <p className="section-description">
                    Cada caso se evalúa de forma personalizada para ofrecer un abordaje
                    profesional, claro y alineado a las necesidades reales de cada paciente.
                </p>
            </div>

            <div className="treatments-grid">
                {treatments.map((treatment, index) => (
                    <article className="treatment-card" key={index}>
                        <div className="treatment-icon">{treatment.icon}</div>

                        <div className="treatment-content">
                            <h3>{treatment.title}</h3>

                            <p>{treatment.description}</p>

                            <span className="treatment-benefit">
                                {treatment.benefit}
                            </span>
                        </div>

                        <a href="#contacto" className="card-link">Consultar tratamiento</a>
                    </article>
                ))}
            </div>
        </section>
    )
}
export default Treatments;