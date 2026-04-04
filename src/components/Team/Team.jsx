import "./Team.css";

import teamMain from "../../assets/team/team-dermaraiz-2.jpg";

function Team() {
    const team = [
        {
            name: "Dr. Hernán López",
            license: "MN 199837",
            role: "Implante capilar (FUE)",
            description: "Especialista en implante capilar con enfoque en resultados naturales y personalizados."
        },
        {
            name: "Dra. Larisa Espíndola",
            license: "MN 194054",
            role: "Medicina estética y capilar",
            description: "Enfoque integral en tratamientos capilares y estética, priorizando la salud del paciente."
        }
    ];

    return (
        <section className="professionals" id="professionales">
            <div className="professionals-header">
                <p className="section-tag">Profesionales</p>
                <h2>Equipo médico especializado</h2>

                <p className="section-description">
                    Un equipo profesional con experiencia en tratamientos capilares,
                    enfocado en brindar soluciones personalizadas y resultados naturales.
                </p>
            </div>

            <div className="professionals-layout">

                <div className="professionals-image">
                    <img src={teamMain} alt="Equipo Dermaraíz" />
                </div>

                <div className="professionals-grid">
                    {team.map((person, index) => (
                        <article className="professional-card" key={index}>

                            <span className="professional-role">
                                {person.role}
                            </span>
                            
                            <h3>{person.name}</h3>

                            <span className="professional-license">
                                Matrícula:{person.license}
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