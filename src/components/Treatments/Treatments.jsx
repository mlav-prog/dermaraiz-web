import "./Treatments.css";
import { aestheticTreatments, treatments } from "../../data/treatments";

function Treatments() {
    return (
        <section className="treatments" id="tratamientos">
            <div className="treatments-header">
                <p className="section-tag">Tratamientos</p>

                <h2>Soluciones capilares adaptadas a cada paciente</h2>

                <p className="section-description">
                    Cada tratamiento se adapta a las necesidades específicas del paciente,
                    buscando resultados naturales y un abordaje profesional en cada etapa.
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
                            <img src={treatment.image} alt={treatment.imageAlt} loading="lazy" />
                        </a>

                        <div className="treatment-content">
                            <h3>{treatment.title}</h3>
                            <p>{treatment.description}</p>
                            <span className="treatment-benefit">{treatment.benefit}</span>
                        </div>

                        <a href={treatment.link} className="card-link">
                            Conocer más
                        </a>
                    </article>
                ))}
            </div>

            <div className="aesthetic-treatment-block" id="estetica">
                <div className="aesthetic-treatment-content">
                    <p className="section-tag">Estética</p>
                    <h3>Tratamientos estéticos con evaluación médica</h3>
                    <p>
                        Sumamos una línea de medicina estética para acompañar el cuidado
                        facial y corporal con tratamientos personalizados por la Dra.
                        Larisa Espíndola.
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
                        Solicitar evaluación
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Treatments;
