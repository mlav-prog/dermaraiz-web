import "./Team.css";

import teamMain from "../../assets/team/team-dermaraiz-2.jpg";

function Team() {
    const team = [
        {
            name: "Dr. Hernán López",
            license: "MN 199837",
            role: "Especialista en implante capilar (FUE)",
            description: "Médico formado en Fundación Barceló y especializado en implante capilar técnica FUE. Su recorrido en medicina general le permitió desarrollar un enfoque humano, cercano y personalizado en cada tratamiento."
        },
        {
            name: "Dra. Larisa Espíndola",
            license: "MN 194054",
            role: "Especialista en medicina estética y capilar",
            description: "Médico formado en Fundación Barceló y especializado en implante capilar técnica FUE. Su recorrido en medicina general le permitió desarrollar un enfoque humano, cercano y personalizado en cada tratamiento."
        }
    ];

    return (
        <section className="professionals" id="professionales">
            <div className="professionals-header">
                <p className="section-tag">Profesionales</p>
                <h2>Conocé al equipo de Dermaraíz</h2>
                <p className="section-description">
                    Un enfoque humano y profesional para acompañarte en cada etapa de tu tratamiento capilar.
                </p>
            </div>

            <div className="professionals-layout">

                <div className="professionals-image">
                    <img src={teamMain} alt="Equipo profesional de Dermaraíz" />
                </div>

                <div className="professionals-grid">
                    {team.map((person, index) => (
                        <article className="professional-card" key={index}>
                            
                            <div className="professional-content">
                                <h3>{person.name}</h3>
                                <span className="professional-license">{person.license}</span>
                                <span className="professional-role">{person.role}</span>
                                <p>{person.description}</p>
                            </div>

                    </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;