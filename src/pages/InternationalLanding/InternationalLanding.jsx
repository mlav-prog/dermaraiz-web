import { useEffect, useState } from "react";
import "./InternationalLanding.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { treatmentImages } from "../../assets/images";
import { AGENDA_PRO_URL, getWhatsappUrl } from "../../utils/contactLinks";

const content = {
  en: {
    eyebrow: "Hair clinic in Buenos Aires",
    title: "Personalized hair treatments for international patients",
    text: "Dermaraiz welcomes patients who travel to Buenos Aires for medical hair diagnosis, PRP, mesotherapy and FUE hair transplant planning.",
    primary: "Book an online consultation",
    whatsapp: "Ask by WhatsApp",
    whatsappMessage:
      "Hello, I would like to ask about hair treatments in Buenos Aires. I am contacting you from outside Argentina.",
    trust: ["CABA, Buenos Aires", "Spanish and guided consultation", "Personalized medical approach"],
    heroStat: "CABA",
    heroStatText: "Buenos Aires, Argentina",
    servicesTitle: "Treatments",
    servicesText:
      "A first evaluation helps define whether the best path is diagnosis, regenerative treatment or a hair transplant plan.",
    locationTitle: "Located in CABA",
    locationText:
      "The clinic is in Ciudad Autonoma de Buenos Aires, with online booking and WhatsApp support before visiting.",
    noteTitle: "Planning from abroad",
    noteText:
      "Share your case, photos and goals so the team can guide the first steps before scheduling your appointment.",
    faqTitle: "Common questions",
    faqs: [
      {
        question: "Can I contact Dermaraiz from another country?",
        answer:
          "Yes. You can send your consultation by WhatsApp or book online to start with a first orientation.",
      },
      {
        question: "Do I need a diagnosis before treatment?",
        answer:
          "Yes. A professional diagnosis helps define the most suitable plan for each patient.",
      },
      {
        question: "Where is the clinic located?",
        answer:
          "Dermaraiz is located in CABA, Buenos Aires, Argentina.",
      },
    ],
    services: [
      {
        title: "Hair diagnosis",
        text: "Clinical evaluation and trichoscopy to understand the cause of hair loss.",
        detail:
          "The first step is understanding what is happening with the scalp and hair fiber. The consultation combines medical history, visual examination and trichoscopy when needed, so the plan is based on evidence instead of a generic indication.",
        ideal: "Hair loss, thinning hair or uncertainty about which treatment to choose.",
        goal: "Define a clear treatment strategy before investing time in sessions or surgery.",
        steps: [
          "Review of symptoms, timing, family history and previous treatments.",
          "Scalp and hair shaft evaluation to identify visible signs of thinning or inflammation.",
          "Personalized recommendation with follow-up criteria.",
        ],
        photos: [
          {
            src: treatmentImages.diagnosisLarisaConsultation,
            alt: "Personalized hair diagnosis consultation with the Dermaraiz team",
            label: "Consultation",
            focus: "diagnosis",
          },
        ],
        link: "/diagnostico-capilar/",
      },
      {
        title: "PRP hair treatment",
        text: "Regenerative support with platelet-rich plasma and professional follow-up.",
        detail:
          "PRP is a regenerative procedure that uses platelet-rich plasma obtained from the patient. It is applied locally to support follicle activity, improve hair quality and complement a broader medical plan when indicated.",
        ideal: "Hair shedding, loss of density or maintenance plans after diagnosis.",
        goal: "Support stronger hair quality and progressive follicle stimulation.",
        steps: [
          "Blood sample and plasma preparation.",
          "Localized application in the areas indicated by the diagnosis.",
          "Progressive monitoring of shedding, density and hair quality.",
        ],
        photos: [
          {
            src: treatmentImages.prpApplication,
            alt: "Localized PRP hair treatment application at Dermaraiz",
            label: "PRP application",
            focus: "prp",
          },
        ],
        link: "/prp-capilar/",
      },
      {
        title: "Hair mesotherapy",
        text: "Localized active ingredients to support hair quality and density plans.",
        detail:
          "Hair mesotherapy applies selected active ingredients directly to the scalp. It can be used to support quality, density and recovery plans, especially when it is integrated into a diagnosis-led protocol.",
        ideal: "Hair quality, density support and combined treatment plans.",
        goal: "Nourish and support the scalp with a targeted, personalized protocol.",
        steps: [
          "Selection of active ingredients according to the clinical indication.",
          "Localized application with professional technique.",
          "Monthly or scheduled follow-up depending on response.",
        ],
        photos: [
          {
            src: treatmentImages.mesotherapy,
            alt: "Hair mesotherapy application at Dermaraiz",
            label: "Application",
            focus: "mesotherapy",
          },
        ],
        link: "/mesoterapia-capilar/",
      },
      {
        title: "FUE hair transplant",
        text: "Personalized planning for natural-looking hair restoration in Buenos Aires.",
        detail:
          "FUE hair transplant moves individual follicular units from the donor area to areas that need coverage. The design considers hairline, density, direction and facial harmony to pursue a natural-looking result.",
        ideal: "Receding hairline, crown thinning or areas with visible loss after medical evaluation.",
        goal: "Restore coverage with careful design, donor-area planning and medical follow-up.",
        steps: [
          "Evaluation of donor area, recipient area and realistic coverage goals.",
          "Hairline or crown planning before the procedure.",
          "Follicular unit extraction, implantation and post-procedure care.",
        ],
        photos: [
          {
            src: treatmentImages.implantProcedure,
            alt: "Clean FUE hair transplant procedure performed by Hernan at Dermaraiz",
            label: "FUE procedure",
            focus: "implant",
          },
        ],
        link: "/implante-capilar/",
      },
    ],
    processTitle: "How to start",
    process: [
      "Send your consultation and photos by WhatsApp.",
      "Receive first guidance and recommended next steps.",
      "Book your in-person evaluation in Buenos Aires.",
    ],
  },
  pt: {
    eyebrow: "Clinica capilar em Buenos Aires",
    title: "Tratamentos capilares personalizados para pacientes internacionais",
    text: "A Dermaraiz recebe pacientes que viajam a Buenos Aires para diagnostico capilar, PRP, mesoterapia e planejamento de transplante capilar FUE.",
    primary: "Agendar consulta online",
    whatsapp: "Consultar pelo WhatsApp",
    whatsappMessage:
      "Ola, gostaria de consultar sobre tratamentos capilares em Buenos Aires. Estou entrando em contato de fora da Argentina.",
    trust: ["CABA, Buenos Aires", "Orientacao antes da visita", "Abordagem medica personalizada"],
    heroStat: "CABA",
    heroStatText: "Buenos Aires, Argentina",
    servicesTitle: "Tratamentos",
    servicesText:
      "A primeira avaliacao ajuda a definir se o melhor caminho e diagnostico, tratamento regenerativo ou planejamento de transplante capilar.",
    locationTitle: "Localizacao em CABA",
    locationText:
      "A clinica fica na Cidade Autonoma de Buenos Aires, com agenda online e suporte por WhatsApp antes da visita.",
    noteTitle: "Planejamento desde o exterior",
    noteText:
      "Envie seu caso, fotos e objetivos para que a equipe possa orientar os primeiros passos antes de marcar sua consulta.",
    faqTitle: "Perguntas frequentes",
    faqs: [
      {
        question: "Posso entrar em contato de outro pais?",
        answer:
          "Sim. Voce pode enviar sua consulta por WhatsApp ou agendar online para iniciar uma primeira orientacao.",
      },
      {
        question: "Preciso de diagnostico antes do tratamento?",
        answer:
          "Sim. O diagnostico profissional ajuda a definir o plano mais adequado para cada paciente.",
      },
      {
        question: "Onde fica a clinica?",
        answer:
          "A Dermaraiz fica em CABA, Buenos Aires, Argentina.",
      },
    ],
    services: [
      {
        title: "Diagnostico capilar",
        text: "Avaliacao clinica e tricoscopia para entender a causa da queda capilar.",
        detail:
          "O primeiro passo e entender o que acontece com o couro cabeludo e a fibra capilar. A consulta combina historico medico, avaliacao visual e tricoscopia quando necessario, para que o plano seja baseado em criterios profissionais.",
        ideal: "Queda capilar, afinamento ou duvidas sobre qual tratamento escolher.",
        goal: "Definir uma estrategia clara antes de investir tempo em sessoes ou cirurgia.",
        steps: [
          "Revisao dos sintomas, tempo de evolucao, antecedentes e tratamentos previos.",
          "Avaliacao do couro cabeludo e da fibra capilar.",
          "Recomendacao personalizada com criterios de acompanhamento.",
        ],
        photos: [
          {
            src: treatmentImages.diagnosisLarisaConsultation,
            alt: "Consulta personalizada de diagnostico capilar com a equipe Dermaraiz",
            label: "Consulta",
            focus: "diagnosis",
          },
        ],
        link: "/diagnostico-capilar/",
      },
      {
        title: "PRP capilar",
        text: "Suporte regenerativo com plasma rico em plaquetas e acompanhamento profissional.",
        detail:
          "O PRP e um procedimento regenerativo que utiliza plasma rico em plaquetas obtido do proprio paciente. A aplicacao local busca apoiar a atividade folicular, melhorar a qualidade capilar e complementar um plano medico quando indicado.",
        ideal: "Queda de cabelo, perda de densidade ou planos de manutencao apos diagnostico.",
        goal: "Apoiar a qualidade capilar e a estimulacao progressiva dos foliculos.",
        steps: [
          "Coleta de sangue e preparacao do plasma.",
          "Aplicacao localizada nas areas indicadas pelo diagnostico.",
          "Acompanhamento progressivo da queda, densidade e qualidade capilar.",
        ],
        photos: [
          {
            src: treatmentImages.prpApplication,
            alt: "Aplicacao localizada de PRP capilar na Dermaraiz",
            label: "Aplicacao PRP",
            focus: "prp",
          },
        ],
        link: "/prp-capilar/",
      },
      {
        title: "Mesoterapia capilar",
        text: "Ativos localizados para apoiar planos de qualidade e densidade capilar.",
        detail:
          "A mesoterapia capilar aplica ativos selecionados diretamente no couro cabeludo. Pode apoiar qualidade, densidade e planos de recuperacao, principalmente quando faz parte de um protocolo definido por diagnostico.",
        ideal: "Qualidade capilar, suporte de densidade e tratamentos combinados.",
        goal: "Nutrir e apoiar o couro cabeludo com um protocolo direcionado e personalizado.",
        steps: [
          "Escolha dos ativos segundo a indicacao clinica.",
          "Aplicacao localizada com tecnica profissional.",
          "Seguimento mensal ou programado conforme a resposta.",
        ],
        photos: [
          {
            src: treatmentImages.mesotherapy,
            alt: "Aplicacao de mesoterapia capilar na Dermaraiz",
            label: "Aplicacao",
            focus: "mesotherapy",
          },
        ],
        link: "/mesoterapia-capilar/",
      },
      {
        title: "Transplante capilar FUE",
        text: "Planejamento personalizado para restauracao capilar natural em Buenos Aires.",
        detail:
          "O transplante FUE move unidades foliculares individuais da area doadora para as regioes que precisam de cobertura. O desenho considera linha frontal, densidade, direcao do fio e harmonia facial para buscar um resultado natural.",
        ideal: "Linha frontal, entradas, coroa ou areas com perda visivel apos avaliacao medica.",
        goal: "Restaurar cobertura com planejamento da area doadora, desenho cuidadoso e acompanhamento medico.",
        steps: [
          "Avaliacao da area doadora, area receptora e objetivos realistas.",
          "Planejamento da linha frontal ou coroa antes do procedimento.",
          "Extracao folicular, implantacao e cuidados posteriores.",
        ],
        photos: [
          {
            src: treatmentImages.implantProcedure,
            alt: "Procedimento limpo de transplante capilar FUE realizado por Hernan na Dermaraiz",
            label: "Procedimento FUE",
            focus: "implant",
          },
        ],
        link: "/implante-capilar/",
      },
    ],
    processTitle: "Como comecar",
    process: [
      "Envie sua consulta e fotos pelo WhatsApp.",
      "Receba uma primeira orientacao e proximos passos.",
      "Agende sua avaliacao presencial em Buenos Aires.",
    ],
  },
};

function InternationalLanding({ locale }) {
  const page = content[locale] || content.en;
  const [activeService, setActiveService] = useState(null);
  const visibleService = page.services.some(
    (service) => service.title === activeService?.title,
  )
    ? activeService
    : null;
  const whatsappUrl = getWhatsappUrl(page.whatsappMessage);
  const detailLabel = locale === "pt" ? "Ideal para" : "Best for";
  const goalLabel = locale === "pt" ? "Objetivo" : "Goal";
  const stepsLabel = locale === "pt" ? "Como trabalhamos" : "How we work";
  const openLabel = locale === "pt" ? "Ver detalhes" : "View details";
  const treatmentLabel = locale === "pt" ? "Abrir pagina completa" : "Open full page";
  const closeLabel = locale === "pt" ? "Fechar" : "Close";

  useEffect(() => {
    if (!visibleService) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    }

    document.body.classList.add("modal-open");
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [visibleService]);

  return (
    <>
      <Navbar />

      <main className="international-page">
        <section className="international-hero">
          <div className="international-hero-content">
            <span className="section-tag">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.text}</p>

            <div className="international-actions">
              <a
                href={AGENDA_PRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {page.primary}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {page.whatsapp}
              </a>
            </div>

            <div className="international-trust">
              {page.trust.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <figure className="international-hero-media">
            <img
              src={treatmentImages.consultation}
              alt={
                locale === "pt"
                  ? "Equipe Dermaraiz em consulta capilar em Buenos Aires"
                  : "Dermaraiz team during a hair consultation in Buenos Aires"
              }
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <figcaption>
              <strong>{page.heroStat}</strong>
              <span>{page.heroStatText}</span>
            </figcaption>
          </figure>
        </section>

        <section className="international-section international-services-section">
          <div>
            <span className="section-tag">{page.servicesTitle}</span>
            <h2>{page.servicesTitle}</h2>
            <p>{page.servicesText}</p>
          </div>

          <div className="international-services">
            {page.services.map((service, index) => (
              <button
                type="button"
                className="international-service-card"
                key={service.title}
                onClick={() => setActiveService(service)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <small>{openLabel}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="international-process">
          <div className="international-process-media">
            <img
              src={treatmentImages.consultation}
              alt={
                locale === "pt"
                  ? "Consulta capilar personalizada na Dermaraiz"
                  : "Personalized hair consultation at Dermaraiz"
              }
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="international-process-content">
            <span className="section-tag">{page.processTitle}</span>
            <h2>{page.processTitle}</h2>
            <ol>
              {page.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="international-strip">
          <article>
            <h2>{page.locationTitle}</h2>
            <p>{page.locationText}</p>
          </article>
          <article>
            <h2>{page.noteTitle}</h2>
            <p>{page.noteText}</p>
          </article>
        </section>

        <section className="international-faq">
          <div className="section-header">
            <span className="section-tag">{page.faqTitle}</span>
            <h2>{page.faqTitle}</h2>
          </div>

          <div className="international-faq-grid">
            {page.faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      {visibleService && (
        <div
          className="international-modal-backdrop"
          role="presentation"
          onClick={() => setActiveService(null)}
        >
          <section
            className="international-treatment-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="international-treatment-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="international-modal-close"
              onClick={() => setActiveService(null)}
              aria-label={closeLabel}
            >
              ×
            </button>

            <div className="international-treatment-copy">
              <span className="section-tag">{visibleService.title}</span>
              <h2 id="international-treatment-title">{visibleService.title}</h2>
              <p>{visibleService.detail}</p>
              <div className="international-treatment-note">
                <span>{detailLabel}</span>
                <p>{visibleService.ideal}</p>
              </div>
              <div className="international-treatment-goal">
                <span>{goalLabel}</span>
                <p>{visibleService.goal}</p>
              </div>
              <div className="international-treatment-steps">
                <span>{stepsLabel}</span>
                <ul>
                  {visibleService.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>
              <div className="international-treatment-actions">
                <a
                  href={getWhatsappUrl(`${page.whatsappMessage}\n\nTreatment: ${visibleService.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {page.whatsapp}
                </a>
                <a href={visibleService.link} className="btn-secondary">
                  {treatmentLabel}
                </a>
              </div>
            </div>

            <div className="international-treatment-photos">
              {visibleService.photos.map((photo) => (
                <figure key={photo.src}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className={`international-treatment-photo international-treatment-photo--${photo.focus || "center"}`}
                  />
                  <figcaption>{photo.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      )}

      <Footer />
    </>
  );
}

export default InternationalLanding;
