import "./Testimonials.css";

function Testimonials() {

    const testimonials = [
        {
            name: "Amalita",
            text: "Excelente atención y tratamiento. Muy recomendable."
        },
        {
            name: "Liliana",
            text: "Fui a mi primera consulta y la atención fue muy clara y profesional. Me brindaron mucha confianza para comenzar mi tratamiento."
        },
        {
            name: "Paola",
            text: "Muy buena experiencia. Respondieron rápido y la atención fue impecable. El doctor se tomó el tiempo para explicar todo"
        }
    ]
    return (
        <section className="testimonials" id="testimonios">

            <div className="testimonials-header">
                <h2>Opiniones de nuestros pacientes</h2>

                <p>
                    La confianza de nuestros pacientes es lo más importante para nosotros.
                </p>
            </div>

            <div className="testimonials-grid">

                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <div className="stars">
                            ⭐⭐⭐⭐⭐
                        </div>

                        <p className="testimonial-text">
                            {testimonial.text}
                        </p>
                        
                        <span className="testimonial-name">
                            {testimonial.name}
                        </span>
                    </div>
                ))}
            </div>
        </section> 
    )
}

export default Testimonials