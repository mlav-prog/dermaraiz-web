import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealSelectors = [
    ".section-header",
    ".hero-content > *",
    ".results-before-after",
    ".results-card",
    ".treatment-card",
    ".product-card",
    ".professional-card",
    ".testimonial-card",
    ".contact-form-card",
    ".contact-card",
    ".contact-info",
    ".treatment-page-hero",
    ".treatment-benefit-card",
    ".treatment-step-card",
    ".treatment-gallery-item",
    ".treatment-detail-section",
    ".treatment-faq-card",
    ".treatment-page-cta",
];

function ScrollReveal() {
    const location = useLocation();

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll(revealSelectors.join(",")));
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        elements.forEach((element, index) => {
            element.classList.add("reveal-item");
            element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
        });

        if (prefersReducedMotion) {
            elements.forEach((element) => element.classList.add("is-visible"));
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: "0px 0px -10% 0px",
                threshold: 0.12,
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [location.pathname]);

    return null;
}

export default ScrollReveal;
