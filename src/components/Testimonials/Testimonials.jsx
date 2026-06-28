import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import "./Testimonials.css";

const testimonials = [
    {
        name: "Judith de Vito",
        source: "Google",
        time: "Hace 5 meses",
        text: "Una excelente experiencia en este consultorio medico con el Dr. Hernan. El espacio es comodo, limpio y bien organizado. La atencion fue profesional, clara y humana. Totalmente recomendable."
    },
    {
        name: "Luz Micaela Princich",
        source: "Google",
        time: "Hace 4 meses",
        text: "Excelente atencion de los profesionales de Dermaraiz, muy conforme y agradecida sobre todo de la Dra. Larisa. El lugar es hermoso y el clima muy calido."
    },
    {
        name: "Lisandro Medina",
        source: "Google",
        time: "Hace un mes",
        text: "Me devolvieron la esperanza. Excelente la atencion de todos y el consultorio un lujo, dan ganas de volver."
    },
    {
        name: "Noelia Rosales",
        source: "Google",
        time: "Hace 6 meses",
        text: "Hermoso lugar y excelente atencion. La verdad que super recomendable, muy profesionales y detallistas."
    },
    {
        name: "Maria Teresa Pacheco",
        source: "Google",
        time: "Hace un mes",
        text: "Increible atencion de parte del Dr. Lopez. Comienzo el tratamiento en cualquier momento. Estoy encantada."
    },
    {
        name: "Anahi",
        source: "Mesoterapia",
        time: "Hace 3 meses",
        text: "Me senti muy reconfortada de ser atendida en un dia feriado. Larisa y Hernan son dos profesionales dedicados, atentos y de una preciosa calidez."
    },
    {
        name: "Amalita",
        source: "Plasma rico en plaquetas capilar",
        time: "Hace 3 meses",
        text: "Totalmente satisfecha, excelente atencion. Gracias Dermaraiz, los recomiendo de 10."
    },
    {
        name: "Liliana",
        source: "Mesoterapia",
        time: "Hace 3 meses",
        text: "Excelente atencion profesional."
    }
];

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideIndex, setSlideIndex] = useState(testimonials.length);
    const [slideStep, setSlideStep] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const trackRef = useRef(null);
    const loopedTestimonials = useMemo(() => (
        [...testimonials, ...testimonials, ...testimonials]
    ), []);

    const normalizeIndex = (index) => (
        ((index % testimonials.length) + testimonials.length) % testimonials.length
    );

    const moveCarousel = (direction) => {
        setIsTransitioning(true);
        setSlideIndex((currentIndex) => currentIndex + direction);
    };

    const goToTestimonial = (index) => {
        const nextIndex = normalizeIndex(index);
        setActiveIndex(nextIndex);
        setIsTransitioning(true);
        setSlideIndex(testimonials.length + nextIndex);
    };

    useLayoutEffect(() => {
        const track = trackRef.current;
        const firstCard = track?.children[0];
        const secondCard = track?.children[1];

        if (!track || !firstCard || !secondCard) {
            return undefined;
        }

        const updateSlideStep = () => {
            setSlideStep(secondCard.offsetLeft - firstCard.offsetLeft);
        };

        updateSlideStep();
        window.addEventListener("resize", updateSlideStep);

        return () => window.removeEventListener("resize", updateSlideStep);
    }, []);

    useEffect(() => {
        setActiveIndex(normalizeIndex(slideIndex));
    }, [slideIndex]);

    useEffect(() => {
        if (isPaused) {
            return undefined;
        }

        const autoplay = window.setInterval(() => {
            moveCarousel(1);
        }, 2600);

        return () => window.clearInterval(autoplay);
    }, [isPaused]);

    useEffect(() => {
        if (isTransitioning) {
            return undefined;
        }

        const frame = window.requestAnimationFrame(() => {
            setIsTransitioning(true);
        });

        return () => window.cancelAnimationFrame(frame);
    }, [isTransitioning]);

    const handleTransitionEnd = () => {
        if (slideIndex >= testimonials.length * 2) {
            setIsTransitioning(false);
            setSlideIndex(testimonials.length);
            return;
        }

        if (slideIndex < testimonials.length) {
            setIsTransitioning(false);
            setSlideIndex((testimonials.length * 2) - 1);
        }
    };

    return (
        <section className="testimonials" id="testimonios">
            <div className="testimonials-container">
                <div className="testimonials-layout">
                    <div className="section-header testimonials-copy">
                        <p className="section-tag">Opiniones</p>

                        <h2>
                            Pacientes que ya confiaron en Dermaraiz
                        </h2>

                        <p className="section-description">
                            Reunimos opiniones reales de pacientes que destacaron la
                            atencion, la claridad profesional y el acompanamiento durante
                            sus tratamientos capilares.
                        </p>
                    </div>

                    <aside className="testimonials-score" aria-label="Valoracion de pacientes">
                        <span className="testimonials-score-label">Resenas de Google</span>
                        <div className="testimonials-score-row">
                            <strong>5.0</strong>
                            <span className="stars" aria-label="5 estrellas">★★★★★</span>
                        </div>
                        <p>53 opiniones verificadas</p>
                    </aside>
                </div>

                <div
                    className="testimonials-carousel"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                >
                    <div className="testimonials-viewport">
                        <div
                            className="testimonials-track"
                            ref={trackRef}
                            style={{
                                transform: `translateX(-${slideIndex * slideStep}px)`,
                                transition: isTransitioning ? undefined : "none"
                            }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {loopedTestimonials.map((testimonial, index) => (
                                <article className="testimonial-card" key={`${testimonial.name}-${index}`}>
                                    <div className="testimonial-top">
                                        <div className="testimonial-avatar" aria-hidden="true">
                                            {testimonial.name.charAt(0).toUpperCase()}
                                        </div>

                                        <div className="testimonial-meta">
                                            <span className="testimonial-name">{testimonial.name}</span>
                                            <span className="testimonial-source">
                                                Resena en {testimonial.source}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="testimonial-rating-row">
                                        <span className="stars" aria-label="5 estrellas">★★★★★</span>
                                        <span className="testimonial-time">{testimonial.time}</span>
                                    </div>

                                    <p className="testimonial-text">
                                        {testimonial.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="testimonials-controls" aria-label="Controles de opiniones">
                        <button
                            className="testimonial-arrow"
                            type="button"
                            aria-label="Opinion anterior"
                            onClick={() => moveCarousel(-1)}
                        >
                            ‹
                        </button>

                        <div className="testimonial-dots" aria-label="Opiniones disponibles">
                            {testimonials.map((testimonial, index) => (
                                <button
                                    className={`testimonial-dot${activeIndex === index ? " is-active" : ""}`}
                                    type="button"
                                    key={`dot-${testimonial.name}`}
                                    aria-label={`Ver opinion de ${testimonial.name}`}
                                    aria-current={activeIndex === index ? "true" : undefined}
                                    onClick={() => goToTestimonial(index)}
                                />
                            ))}
                        </div>

                        <button
                            className="testimonial-arrow"
                            type="button"
                            aria-label="Opinion siguiente"
                            onClick={() => moveCarousel(1)}
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
