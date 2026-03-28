import "./Results.css";
import beforeImage from "../../assets/results/hair-transplant-before-01.jpeg";
import afterImage from "../../assets/results/hair-transplant-after-01.jpeg";

function Results () {
    return (
        <section className="results" id="resultados">
            <div className="results-header">
                <h2>Resultados Reales</h2>

                <p>
                    Conocé algunos casos reales de pacientes que realizaron tratamientos capilares en nuestra clínica.
                </p>
            </div>

            <div className="results-showcase">
                <div className="result-item">
                    <div className="result-image-wrapper">
                        <img 
                            src={beforeImage}
                            alt="Antes del tratamiento capilar"
                            className="result-image"
                        />
                    </div>
                    <span className="result-label">Antes</span>
                </div>
                <div className="result-item">
                    <div className="result-image-wrapper">
                        <img
                            src={afterImage}
                            alt="Después del tratamiento capilar"
                            className="result-image"
                        />
                    </div>
                    <span className="result-label">Después</span>
                </div>
            </div>
        </section>
    )
}    

export default Results;