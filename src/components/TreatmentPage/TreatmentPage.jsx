import "./TreatmentPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import RelatedTreatments from "../RelatedTreatments/RelatedTreatments";
import { AGENDA_PRO_URL, getWhatsappUrl } from "../../utils/contactLinks";

function TreatmentPage({
  tag,
  title,
  description,
  heroImage,
  heroImageAlt,
  benefits,
  steps,
  galleryTitle = "Imágenes del tratamiento",
  galleryText,
  galleryImages,
  facts,
  detailImage,
  detailImageAlt,
  whatsappMessage,
  primaryCtaText = "Reservar turno online",
  whatsappCtaText = "Consultar por WhatsApp",
  faqs,
  ctaTitle,
  ctaText,
  currentPath,
}) {
  function handleGoBack() {
    window.location.href = "/#tratamientos";
  }

  return (
    <>
      <Navbar />

      <main className="treatment-page">
        <button
          type="button"
          className="floating-back-button"
          onClick={handleGoBack}
          aria-label="Volver a tratamientos"
        >
          <span className="back-icon">‹</span>
        </button>

        <section className="treatment-page-hero">
          <div className="treatment-page-hero-content">
            <span className="section-tag">{tag}</span>

            <h1>{title}</h1>

            <p>{description}</p>

            <div className="treatment-page-buttons">
              <a
                href={AGENDA_PRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {primaryCtaText}
              </a>

              {whatsappMessage && (
                <a
                  href={getWhatsappUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  {whatsappCtaText}
                </a>
              )}
            </div>
          </div>

          {heroImage && (
            <figure className="treatment-page-hero-media">
              <img
                src={heroImage}
                alt={heroImageAlt || title}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          )}
        </section>

        <section className="treatment-page-section treatment-process-section">
          <div className="treatment-page-header">
            <span className="section-tag">Proceso</span>
            <h2>¿Cómo se realiza?</h2>
          </div>

          <div className="treatment-steps-grid">
            {steps.map((step, index) => (
              <article className="treatment-step-card" key={index}>
                {step.image && (
                  <figure className="treatment-step-media">
                    <img
                      src={step.image}
                      alt={step.imageAlt || step.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                )}

                <div className="treatment-step-content">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="treatment-page-section">
          <div className="treatment-page-header">
            <span className="section-tag">Beneficios</span>
            <h2>¿Para qué sirve?</h2>
          </div>

          <div className="treatment-benefits-grid">
            {benefits.map((benefit, index) => (
              <article className="treatment-benefit-card" key={index}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        {galleryImages && galleryImages.length > 0 && (
          <section className="treatment-gallery-section">
            <div className="treatment-gallery-header">
              <span className="section-tag">Galería</span>
              <h2>{galleryTitle}</h2>
              {galleryText && <p>{galleryText}</p>}
            </div>

            <div className="treatment-gallery-grid">
              {galleryImages.map((image, index) => (
                <figure className="treatment-gallery-item" key={image.src || index}>
                  <img
                    src={image.src}
                    alt={image.alt || title}
                    loading="lazy"
                    decoding="async"
                  />
                  {(image.label || image.caption) && (
                    <figcaption>
                      {image.label && <span>{image.label}</span>}
                      {image.caption && <p>{image.caption}</p>}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {facts && facts.length > 0 && (
          <section
            className={`treatment-detail-section${
              detailImage ? "" : " treatment-detail-section--text-only"
            }`}
          >
            <div className="treatment-detail-content">
              <span className="section-tag">Qué esperar</span>
              <h2>Información clave antes de comenzar</h2>

              <div className="treatment-facts-grid">
                {facts.map((fact, index) => (
                  <article className="treatment-fact-card" key={index}>
                    <span>{fact.label}</span>
                    <p>{fact.text}</p>
                  </article>
                ))}
              </div>
            </div>

            {detailImage && (
              <figure className="treatment-detail-media">
                <img
                  src={detailImage}
                  alt={detailImageAlt || title}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            )}
          </section>
        )}

        {faqs && faqs.length > 0 && (
          <section className="treatment-page-section">
            <div className="treatment-page-header">
              <span className="section-tag">Preguntas frecuentes</span>
              <h2>Dudas habituales sobre el tratamiento</h2>
            </div>

            <div className="treatment-faq-grid">
              {faqs.map((faq, index) => (
                <article className="treatment-faq-card" key={index}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <RelatedTreatments currentPath={currentPath} />

        <section className="treatment-page-cta">
          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>

          <div className="treatment-cta-actions">
            <a
              href={AGENDA_PRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {primaryCtaText}
            </a>

            {whatsappMessage && (
              <a
                href={getWhatsappUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {whatsappCtaText}
              </a>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default TreatmentPage;
