import "./Testimonials.css";

function Testimonials() {

    const testimonials = [
        {
            name: "Amalita",
            source: "Paciente",
            text: "Excelente atención y tratamiento. Muy recomendable."
        },
        {
            name: "Liliana",
            source: "Primera consulta",
            text: "Fui a mi primera consulta y la atención fue muy clara y profesional. Me brindaron mucha confianza para comenzar mi tratamiento."
        },
        {
            name: "Paola",
            source: "Paciente",
            text: "Muy buena experiencia. Respondieron rápido y la atención fue impecable. El doctor se tomó el tiempo para explicar todo"
        }
    ]
    return (
        <section className="testimonials" id="testimonios">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    
                    <p className="section-tag">Opiniones</p>

                    <h2>
                        La experiencia de nuestros pacientes habla por nosotros
                    </h2>

                    <p className="section-description">
                        Compartimos algunas reseñas reales de pacientes que confiaron en
                        Dermaraíz para iniciaro acompañar su tratamiento capilar.
                    </p>
                </div>


                <div className="testimonials-grid">

                    {testimonials.map((testimonial, index) => (
                        <article className="testimonial-card" key={index}>
                            <div className="testimonial-top">
                                <div className="testimonial-avatar">
                                    {testimonial.name.charAt(0)}
                                </div>

                                <div className="testimonial-meta">
                                    <span className="testimonial-name">{testimonial.name}</span>
                                    <span className="testimonial-source">
                                        Reseña en {testimonial.source}
                                    </span>
                                </div>
                            </div>

                            <div className="testimonial-rating-row">
                                <span className="stars">★★★★★</span>
                                <span className="testimonial-time">Reseña verificada</span>
                            </div>

                            <p className="testimonial-text">
                                {testimonial.text}
                            </p>    
                        </article>
                    ))}
                </div>
            </div>
        </section> 
    )
}

export default Testimonials