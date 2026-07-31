import "./Team.css";
import { brandImages } from "../../assets/images";
import { team } from "../../data/team";

function Team() {
    return (
        <section className="professionals" id="profesionales">
            <div className="section-header">
                <p className="section-tag">Profesionales</p>
                <h2>Equipo médico especializado</h2>

                <p className="section-description">
                    Un equipo profesional con experiencia en tratamientos capilares,
                    enfocado en brindar soluciones personalizadas y resultados naturales.
                </p>
            </div>

            <div className="professionals-layout">
                <div className="professionals-image">
                    <img
                        src={brandImages.teamMain}
                        alt="Equipo médico de Dermaraíz especializado en implante capilar y estética"
                    />
                </div>

                <div className="professionals-grid">
                    {team.map((person) => (
                        <article className="professional-card" key={person.name}>
                            <span className="professional-role">{person.role}</span>

                            <h3>{person.name}</h3>

                            <span className="professional-license">
                                Matrícula: {person.license}
                            </span>

                            <p>{person.description}</p>

                            <a href="#contacto" className="professional-link">
                                Consultar con este especialista
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
