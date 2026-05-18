import "./Treatments.css";

function Treatments() {

    const treatments = [
        {
            icon: "💉",
            title: "PRP Capilar",
            description:
                "Tratamiento regenerativo que utiliza factores de crecimiento obtenidos de la sangre del paciente para estimular el folículo piloso y fortalecer el cabello.",
            benefit: "Ideal para fortalecer y estimular el crecimiento.",
            link: "/prp-capilar"
        },

        {
            icon: "🌿",
            title: "Mesoterapia Capilar",
            description:
                "Aplicación de activos específicos sobre el cuero cabelludo para nutrir la raíz, mejorar la calidad capilar y complementar tratamientos de recuperación.",
            benefit: "Nutrición y revitalización capilar.",
            link: "/mesoterapia-capilar"
        },

        {
            icon: "🩺",
            title: "Diagnóstico Capilar",
            description:
                "Evaluación profesional orientada a identificar distintos tipos de alopecia y definir un tratamiento adecuado según cada paciente.",
            benefit: "Permite definir un tratamiento personalizado.",
            link: "/diagnostico-capilar"
        },

        {
            icon: "🧬",
            title: "Implante Capilar FUE",
            description:
                "Procedimiento que permite recuperar cabello en zonas despobladas mediante la extracción e implantación folicular pelo por pelo.",
            benefit: "Resultados naturales y permanentes.",
            link: "/implante-capilar"
        }
    ];

    return (
        <section className="treatments" id="tratamientos">

            <div className="treatments-header">
                <p className="section-tag">
                    Tratamientos
                </p>

                <h2>
                    Soluciones capilares adaptadas a cada paciente
                </h2>

                <p className="section-description">
                    Cada tratamiento se adapta a las necesidades específicas
                    del paciente, buscando resultados naturales y un abordaje
                    profesional en cada etapa.
                </p>
            </div>

            <div className="treatments-grid">
                {treatments.map((treatment, index) => (
                    <article
                        className={`treatment-card ${treatment.link === "/implante-capilar" ? "featured" : ""}`}
                        key={index}
                    >

                        <div className="treatment-icon">
                            {treatment.icon}
                        </div>

                        <div className="treatment-content">

                            <h3>
                                {treatment.title}
                            </h3>

                            <p>
                                {treatment.description}
                            </p>

                            <span className="treatment-benefit">
                                {treatment.benefit}
                            </span>

                        </div>

                        <a
                            href={treatment.link}
                            className="card-link"
                        >
                            Conocer más
                        </a>

                    </article>
                ))}
            </div>
        </section>
    );
}

export default Treatments;