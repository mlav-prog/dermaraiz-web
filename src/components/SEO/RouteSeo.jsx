import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { treatmentImages } from "../../assets/images";

const SITE_URL = "https://dermaraiz.com.ar";
const SITE_PREVIEW_IMAGE = "/preview-dermaraiz-isotipo-beige-brown-v6.png";

const pages = {
  "/": {
    title: "Dermaraíz | Clínica capilar en CABA y Buenos Aires",
    description:
      "Clínica capilar en CABA especializada en diagnóstico, PRP, mesoterapia e implante capilar FUE. Atención personalizada y resultados naturales.",
    keywords:
      "tratamiento capilar CABA, implante capilar Buenos Aires, caída del cabello, PRP capilar, mesoterapia capilar, clínica capilar Buenos Aires",
    image: SITE_PREVIEW_IMAGE,
    imageAlt: "Resultados de tratamientos capilares en Dermaraíz Buenos Aires",
    language: "es-AR",
    alternates: {
      "es-AR": "/",
      en: "/en/",
      pt: "/pt/",
      "x-default": "/",
    },
  },
  "/implante-capilar": {
    title: "Implante capilar FUE en CABA | Dermaraíz",
    description:
      "Implante capilar FUE en CABA con diagnóstico, planificación de línea capilar y técnica zafiro. Conocé el procedimiento y reservá tu consulta.",
    serviceName: "Implante capilar FUE",
    keywords:
      "implante capilar FUE, implante capilar Buenos Aires, transplante capilar, recuperar cabello",
    image: treatmentImages.implantProcedure,
    imageAlt: "Procedimiento de implante capilar FUE en Dermaraíz Buenos Aires",
    language: "es-AR",
    faqs: [
      {
        question: "¿Quién puede realizarse un implante capilar?",
        answer:
          "La indicación depende de la zona donante, el tipo de alopecia, la edad, los antecedentes y los objetivos del paciente.",
      },
      {
        question: "¿El resultado es permanente?",
        answer:
          "Los folículos trasplantados provienen de una zona más resistente, pero el resultado debe acompañarse con seguimiento profesional.",
      },
      {
        question: "¿Cuándo empieza a crecer el cabello?",
        answer:
          "El crecimiento visible suele comenzar a partir de los primeros meses y continúa mejorando de forma progresiva.",
      },
      {
        question: "¿Necesito estudios previos?",
        answer:
          "Sí. Antes del procedimiento se solicitan estudios y una valoración profesional para realizarlo con seguridad.",
      },
    ],
  },
  "/prp-capilar": {
    title: "PRP capilar en CABA | Plasma rico en plaquetas | Dermaraíz",
    description:
      "PRP capilar en CABA con plasma rico en plaquetas y evaluación profesional para fortalecer el cabello. Reservá tu consulta en Dermaraíz.",
    serviceName: "PRP capilar",
    keywords:
      "PRP capilar, plasma rico en plaquetas capilar, tratamiento caída cabello, fortalecimiento capilar",
    image: treatmentImages.prpPlasma,
    imageAlt: "Plasma rico en plaquetas para PRP capilar en Dermaraíz",
    language: "es-AR",
    faqs: [
      {
        question: "¿Para quién está indicado el PRP capilar?",
        answer:
          "Puede indicarse en pacientes con caída capilar, afinamiento o pérdida de calidad del cabello, siempre luego de una evaluación profesional.",
      },
      {
        question: "¿Cuántas sesiones se necesitan?",
        answer:
          "La cantidad de sesiones depende del diagnóstico, la evolución y si se combina con otros tratamientos capilares.",
      },
      {
        question: "¿Se puede combinar con mesoterapia?",
        answer:
          "Sí, en algunos casos puede complementarse con mesoterapia u otros tratamientos para potenciar el abordaje.",
      },
      {
        question: "¿Cuándo se ven cambios?",
        answer:
          "Los cambios suelen evaluarse de forma progresiva en los controles, observando caída, densidad y calidad capilar.",
      },
    ],
  },
  "/mesoterapia-capilar": {
    title: "Mesoterapia capilar en CABA y Buenos Aires | Dermaraíz",
    description:
      "Mesoterapia capilar en CABA para caída del cabello, nutrición folicular y mejora de densidad. Evaluación personalizada y turnos online.",
    serviceName: "Mesoterapia capilar",
    keywords:
      "mesoterapia capilar, mesoterapia para caída cabello, tratamiento capilar Buenos Aires",
    image: treatmentImages.mesotherapy,
    imageAlt: "Aplicación de mesoterapia capilar en Dermaraíz Buenos Aires",
    language: "es-AR",
    faqs: [
      {
        question: "¿Para qué sirve la mesoterapia capilar?",
        answer:
          "Se utiliza para aplicar activos de forma localizada y acompañar tratamientos orientados a mejorar la calidad del cabello.",
      },
      {
        question: "¿La mesoterapia reemplaza al diagnóstico?",
        answer:
          "No. Lo ideal es evaluar primero el cuero cabelludo para definir si es el tratamiento adecuado para cada caso.",
      },
      {
        question: "¿Se puede combinar con PRP?",
        answer:
          "Sí, puede combinarse con PRP u otros tratamientos cuando el profesional lo considera conveniente.",
      },
      {
        question: "¿Cuántas sesiones se recomiendan?",
        answer:
          "La frecuencia y cantidad de sesiones se define según la necesidad del paciente y la respuesta del tratamiento.",
      },
    ],
  },
  "/diagnostico-capilar": {
    title: "Diagnóstico capilar en CABA | Tricoscopia | Dermaraíz",
    description:
      "Diagnóstico capilar en CABA con evaluación del cuero cabelludo, tricoscopia y análisis de alopecia para definir un plan personalizado.",
    serviceName: "Diagnóstico capilar",
    keywords:
      "diagnóstico capilar, evaluación capilar, alopecia, caída del cabello, cuero cabelludo",
    image: treatmentImages.diagnosis,
    imageAlt: "Diagnóstico capilar profesional en Dermaraíz CABA",
    language: "es-AR",
    faqs: [
      {
        question: "¿Cuándo conviene hacer un diagnóstico capilar?",
        answer:
          "Cuando hay caída, afinamiento, cambios en la densidad o dudas sobre qué tratamiento capilar elegir.",
      },
      {
        question: "¿Sirve para detectar el tipo de alopecia?",
        answer:
          "Sí, la evaluación ayuda a orientar el diagnóstico y a definir un plan según cada paciente.",
      },
      {
        question: "¿Después del diagnóstico ya se indica tratamiento?",
        answer:
          "Según el caso, se puede definir una estrategia personalizada y los pasos a seguir.",
      },
      {
        question: "¿Necesito diagnóstico antes de PRP o mesoterapia?",
        answer:
          "Es recomendable para elegir el tratamiento más adecuado y evitar indicaciones genéricas.",
      },
    ],
  },
  "/en": {
    title: "Hair clinic in Buenos Aires | Dermaraiz",
    description:
      "Personalized hair diagnosis, PRP, mesotherapy and FUE hair transplant planning in Buenos Aires for international patients.",
    keywords:
      "hair clinic Buenos Aires, hair transplant Buenos Aires, PRP hair treatment Argentina, FUE hair transplant Argentina",
    image: SITE_PREVIEW_IMAGE,
    imageAlt: "Dermaraiz hair clinic in Buenos Aires",
    language: "en",
    alternates: {
      "es-AR": "/",
      en: "/en/",
      pt: "/pt/",
      "x-default": "/",
    },
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
        answer: "Dermaraiz is located in CABA, Buenos Aires, Argentina.",
      },
    ],
  },
  "/pt": {
    title: "Clinica capilar em Buenos Aires | Dermaraiz",
    description:
      "Diagnostico capilar, PRP, mesoterapia e planejamento de transplante capilar FUE em Buenos Aires para pacientes internacionais.",
    keywords:
      "clinica capilar Buenos Aires, transplante capilar Argentina, PRP capilar Buenos Aires, mesoterapia capilar Argentina",
    image: SITE_PREVIEW_IMAGE,
    imageAlt: "Clinica capilar Dermaraiz em Buenos Aires",
    language: "pt",
    alternates: {
      "es-AR": "/",
      en: "/en/",
      pt: "/pt/",
      "x-default": "/",
    },
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
        answer: "A Dermaraiz fica em CABA, Buenos Aires, Argentina.",
      },
    ],
  },
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

function upsertJsonLd(id, data) {
  let element = document.head.querySelector(`script[data-seo="${id}"]`);

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.setAttribute("data-seo", id);
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function upsertAlternateLinks(alternates = {}) {
  document.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((element) => element.remove());

  Object.entries(alternates).forEach(([language, path]) => {
    const element = document.createElement("link");
    element.setAttribute("rel", "alternate");
    element.setAttribute("hreflang", language);
    element.setAttribute("href", new URL(path, SITE_URL).href);
    document.head.appendChild(element);
  });
}

function removeJsonLd(id) {
  document.head.querySelector(`script[data-seo="${id}"]`)?.remove();
}

function RouteSeo() {
  const { pathname } = useLocation();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const page = pages[normalizedPath] || pages["/"];
  const canonical = `${SITE_URL}${normalizedPath === "/" ? "/" : `${normalizedPath}/`}`;
  const imageUrl = new URL(page.image, SITE_URL).href;

  useEffect(() => {
    document.title = page.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: page.description,
    });
    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: page.keywords,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: page.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: page.description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: page.language === "pt" ? "pt_BR" : page.language === "en" ? "en_US" : "es_AR",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    upsertMeta('meta[property="og:image:secure_url"]', {
      property: "og:image:secure_url",
      content: imageUrl,
    });
    upsertMeta('meta[property="og:image:width"]', {
      property: "og:image:width",
      content: "1200",
    });
    upsertMeta('meta[property="og:image:height"]', {
      property: "og:image:height",
      content: "1200",
    });
    upsertMeta('meta[property="og:image:type"]', {
      property: "og:image:type",
      content: "image/png",
    });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: page.imageAlt,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: page.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: page.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: "twitter:image:alt",
      content: page.imageAlt,
    });

    upsertCanonical(canonical);
    upsertAlternateLinks(page.alternates);

    upsertJsonLd("local-business", {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#medical-clinic`,
      name: "Dermaraíz Capilar & Estética",
      description:
        "Clínica capilar en CABA con diagnóstico, PRP, mesoterapia e implante capilar FUE.",
      url: SITE_URL,
      image: imageUrl,
      telephone: "+54 9 11 7356-5160",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ciudad de la Paz 2984 Depto 2",
        addressLocality: "Ciudad Autónoma de Buenos Aires",
        addressRegion: "CABA",
        postalCode: "1428",
        addressCountry: "AR",
      },
      priceRange: "$$",
      medicalSpecialty: [
        "HairTransplantation",
        "Dermatology",
      ],
      areaServed: [
        "Buenos Aires",
        "CABA",
      ],
      sameAs: [
        "https://www.instagram.com/derma_raiz/",
      ],
    });

    upsertJsonLd("web-page", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url: canonical,
      image: imageUrl,
      inLanguage: page.language || "es-AR",
      isPartOf: {
        "@type": "WebSite",
        name: "Dermaraíz",
        url: SITE_URL,
      },
    });

    if (page.serviceName) {
      upsertJsonLd("service", {
        "@context": "https://schema.org",
        "@type": "Service",
        name: page.serviceName,
        description: page.description,
        url: canonical,
        areaServed: ["CABA", "Buenos Aires"],
        provider: {
          "@id": `${SITE_URL}/#medical-clinic`,
        },
      });

      upsertJsonLd("breadcrumbs", {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.serviceName,
            item: canonical,
          },
        ],
      });
    } else {
      removeJsonLd("service");
      removeJsonLd("breadcrumbs");
    }

    if (page.faqs?.length) {
      upsertJsonLd("faq", {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      });
    } else {
      removeJsonLd("faq");
    }
  }, [canonical, imageUrl, page]);

  return null;
}

export default RouteSeo;
