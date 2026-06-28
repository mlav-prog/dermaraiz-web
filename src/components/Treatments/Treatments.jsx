import "./Treatments.css";
import implanteImage from "../../assets/treatments/implante-capilar-fue-procedimiento-dermaraiz.jpeg";
import prpImage from "../../assets/treatments/prp-capilar-plasma-rico-en-plaquetas-dermaraiz.jpg";
import mesoterapiaImage from "../../assets/treatments/mesoterapia-capilar-dermaraiz.jpeg";
import diagnosticoImage from "../../assets/treatments/diagnostico-capilar-dermaraiz.jpg";

function Treatments() {
    const treatments = [
        {
            title: "PRP Capilar",
            description:
                "Tratamiento regenerativo que utiliza factores de crecimiento obtenidos de la sangre del paciente para estimular el folículo piloso y fortalecer el cabello.",
            benefit: "Ideal para fortalecer y estimular el crecimiento.",
            link: "/prp-capilar",
            image: prpImage,
            imageAlt: "Plasma rico en plaquetas para tratamiento PRP capilar en Dermaraiz CABA",
            imageFocus: "prp",
        },
        {
            title: "Mesoterapia Capilar",
            description:
                "Aplicación de activos específicos sobre el cuero cabelludo para nutrir la raíz, mejorar la calidad capilar y complementar tratamientos de recuperación.",
            benefit: "Nutrición y revitalización capilar.",
            link: "/mesoterapia-capilar",
            image: mesoterapiaImage,
            imageAlt: "Mesoterapia capilar aplicada en consultorio Dermaraiz Buenos Aires",
            imageFocus: "mesoterapia",
        },
        {
            title: "Diagnóstico Capilar",
            description:
                "Evaluación profesional orientada a identificar distintos tipos de alopecia y definir un tratamiento adecuado según cada paciente.",
            benefit: "Permite definir un tratamiento personalizado.",
            link: "/diagnostico-capilar",
            image: diagnosticoImage,
            imageAlt: "Diagnostico capilar profesional con evaluacion personalizada en Dermaraiz",
            imageFocus: "diagnostico",
        },
        {
            title: "Implante Capilar FUE",
            description:
                "Procedimiento que permite recuperar cabello en zonas despobladas mediante la extracción e implantación folicular pelo por pelo.",
            benefit: "Resultados naturales y permanentes.",
            link: "/implante-capilar",
            image: implanteImage,
            imageAlt: "Implante capilar FUE realizado por el equipo medico de Dermaraiz",
            imageFocus: "implante",
        },
    ];
    const aestheticTreatments = [
        {
            title: "Plasma rico en plaquetas",
            description:
                "Tratamiento regenerativo que acompana la calidad de la piel y estimula procesos naturales de reparacion.",
        },
        {
            title: "Mesoterapia facial y corporal",
            description:
                "Aplicacion localizada de activos para mejorar hidratacion, firmeza y aspecto general de la piel.",
        },
        {
            title: "NCTF / PDRN",
            description:
                "Protocolos bioestimuladores orientados a revitalizar la piel y mejorar textura, luminosidad y elasticidad.",
        },
        {
            title: "Toxina botulinica",
            description:
                "Abordaje medico para suavizar arrugas dinamicas y tratar casos seleccionados de sudoracion o bruxismo.",
        },
        {
            title: "Peeling medico",
            description:
                "Renovacion controlada de la piel para mejorar manchas, textura, poros y signos superficiales de envejecimiento.",
        },
        {
            title: "Skinbooster",
            description:
                "Hidratacion profunda con acido hialuronico para aportar frescura, elasticidad y mejor calidad cutanea.",
        },
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
                {treatments.map((treatment) => (
                    <article
                        className={`treatment-card ${treatment.link === "/implante-capilar" ? "featured" : ""}`}
                        key={treatment.title}
                    >
                        <a
                            className={`treatment-image treatment-image-${treatment.imageFocus}`}
                            href={treatment.link}
                        >
                            <img
                                src={treatment.image}
                                alt={treatment.imageAlt}
                                loading="lazy"
                            />
                        </a>

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

            <div className="aesthetic-treatment-block" id="estetica">
                <div className="aesthetic-treatment-content">
                    <p className="section-tag">Estetica</p>
                    <h3>Tratamientos esteticos con evaluacion medica</h3>
                    <p>
                        Sumamos una linea de medicina estetica para acompanar
                        el cuidado facial y corporal con tratamientos
                        personalizados por la Dra. Larisa Espindola.
                    </p>

                    <div className="aesthetic-treatment-list">
                        {aestheticTreatments.map((treatment) => (
                            <article className="aesthetic-treatment-item" key={treatment.title}>
                                <h4>{treatment.title}</h4>
                                <p>{treatment.description}</p>
                            </article>
                        ))}
                    </div>

                    <a className="aesthetic-treatment-link" href="#contacto">
                        Solicitar evaluacion
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Treatments;
