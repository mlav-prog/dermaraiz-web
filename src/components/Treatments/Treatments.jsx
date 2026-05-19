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
            imageAlt: "Plasma rico en plaquetas para tratamiento capilar PRP en Dermaraiz",
            imageFocus: "prp",
        },
        {
            title: "Mesoterapia Capilar",
            description:
                "Aplicación de activos específicos sobre el cuero cabelludo para nutrir la raíz, mejorar la calidad capilar y complementar tratamientos de recuperación.",
            benefit: "Nutrición y revitalización capilar.",
            link: "/mesoterapia-capilar",
            image: mesoterapiaImage,
            imageAlt: "Mesoterapia capilar aplicada en consultorio Dermaraiz",
            imageFocus: "mesoterapia",
        },
        {
            title: "Diagnóstico Capilar",
            description:
                "Evaluación profesional orientada a identificar distintos tipos de alopecia y definir un tratamiento adecuado según cada paciente.",
            benefit: "Permite definir un tratamiento personalizado.",
            link: "/diagnostico-capilar",
            image: diagnosticoImage,
            imageAlt: "Diagnóstico capilar profesional con evaluación personalizada",
            imageFocus: "diagnostico",
        },
        {
            title: "Implante Capilar FUE",
            description:
                "Procedimiento que permite recuperar cabello en zonas despobladas mediante la extracción e implantación folicular pelo por pelo.",
            benefit: "Resultados naturales y permanentes.",
            link: "/implante-capilar",
            image: implanteImage,
            imageAlt: "Implante capilar FUE realizado por el equipo médico de Dermaraiz",
            imageFocus: "implante",
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
        </section>
    );
}

export default Treatments;
