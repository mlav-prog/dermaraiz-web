import "./Results.css";

import treatmentResult from "../../assets/results/result-treatment-01.jpg";
import implantResult from "../../assets/results/result-implant-01.jpg";

function Results() {
    const cases = [
        {
            image: treatmentResult,
            alt: "Resultado real de tratamiento capilar",
            category: "Tratamiento capilar",
            title: "Recuperación y fortalecimiento capilar",
            description: "Caso real con mejora visible en densidad, aspecto y salud del cabello luego del tratamiento indicado."
        },
        {
            image: implantResult,
            alt: "Resultado real de implante capilar",
            category: "Implante capilar",
            title: "Resultado natural y armónico",
            description: "Caso real de implante capilar con evolución favorable y un enfoque orientado a lograr un resultado natural."
        }
    ];

    return (
        <section className="results" id="resultados">
            <div className="results-header">
                <p className="section-tag">Resultados</p>
                <h2>Casos reales que reflejan nuestro enfoque</h2>
                <p className="section-description">
                    Cada tratamiento se planifica de forma personalizada, buscando resultados
                    naturales y acordes a las necesidades de cada paciente.
                </p>
            </div>

            <div className="results-grid">
                {cases.map((item, index) => (
                    <article className="results-card" key={index}>
                        <div className="results-card-image">
                            <img 
                                src={item.image} 
                                alt={item.alt} 
                                className="results-image"
                                loading="lazy" 
                            />
                        </div>

                        <div className="results-card-content">
                            <span className="results-case-tag">{item.category}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href="#contacto" className="results-link">
                                Consultar mi caso
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Results;