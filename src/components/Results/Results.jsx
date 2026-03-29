import "./Results.css";

import treatmentResult from "../../assets/results/result-treatment-01.jpg";
import implantResult from "../../assets/results/result-implant-01.jpg";

function Results() {
    const cases = [
        {
            title: "Tratamiento Capilar",
            image: treatmentResult,
            alt: "Caso real de tratamiento capilar"
        },
        {
            title: "Implante Capilar",
            image: implantResult,
            alt: "Caso real de implante capilar"
        }
    ];

    return (
        <section className="results" id="resultados">
            <div className="results-header">
                <h2>Resultados reales</h2>
                <p>
                    Conocé algunos casos reales de pacientes que realizaron tratamientos
                    capilares en nuestra clínica.
                </p>
            </div>

            <div className="results-grid">
                {cases.map((item, index) => (
                    <div className="results-card" key={index}>
                        <div className="results-card-image">
                            <img 
                                src={item.image} 
                                alt={item.alt} 
                                className="results-image" 
                            />

                            <div className="results-card-content">
                                <span className="results-case-tag">
                                    {item.title}
                                </span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Results;