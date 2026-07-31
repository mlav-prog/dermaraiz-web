import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { testimonials, testimonialsSummary } from "../../data/testimonials";
import "./Testimonials.css";

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
                            Pacientes que ya confiaron en Dermaraíz
                        </h2>

                        <p className="section-description">
                            Reunimos opiniones reales de pacientes que destacaron la
                            atención, la claridad profesional y el acompañamiento durante
                            sus tratamientos capilares.
                        </p>
                    </div>

                    <aside className="testimonials-score" aria-label="Valoración de pacientes">
                        <span className="testimonials-score-label">{testimonialsSummary.source}</span>
                        <div className="testimonials-score-row">
                            <strong>{testimonialsSummary.rating}</strong>
                            <span className="stars" aria-label="5 estrellas">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                        </div>
                        <p>{testimonialsSummary.total}</p>
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
                                                Reseña en {testimonial.source}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="testimonial-rating-row">
                                        <span className="stars" aria-label="5 estrellas">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
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
                            aria-label="Opinión anterior"
                            onClick={() => moveCarousel(-1)}
                        >
                            &lsaquo;
                        </button>

                        <div className="testimonial-dots" aria-label="Opiniones disponibles">
                            {testimonials.map((testimonial, index) => (
                                <button
                                    className={`testimonial-dot${activeIndex === index ? " is-active" : ""}`}
                                    type="button"
                                    key={`dot-${testimonial.name}`}
                                    aria-label={`Ver opinión de ${testimonial.name}`}
                                    aria-current={activeIndex === index ? "true" : undefined}
                                    onClick={() => goToTestimonial(index)}
                                />
                            ))}
                        </div>

                        <button
                            className="testimonial-arrow"
                            type="button"
                            aria-label="Opinión siguiente"
                            onClick={() => moveCarousel(1)}
                        >
                            &rsaquo;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
