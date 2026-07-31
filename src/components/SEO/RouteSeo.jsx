import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resultImages, treatmentImages } from "../../assets/images";

const SITE_URL = "https://dermaraiz.com.ar";

const pages = {
  "/": {
    title: "Dermaraíz | Tratamientos capilares en Buenos Aires",
    description:
      "Clínica capilar en CABA especializada en diagnóstico, PRP, mesoterapia e implante capilar FUE con atención personalizada.",
    keywords:
      "tratamiento capilar, implante capilar, caída del cabello, PRP capilar, mesoterapia capilar, clínica capilar Buenos Aires",
    image: resultImages.coffeeFollowUp,
    imageAlt: "Resultados de tratamientos capilares en Dermaraíz Buenos Aires",
  },
  "/implante-capilar": {
    title: "Implante capilar FUE en Buenos Aires | Dermaraíz",
    description:
      "Implante capilar FUE con planificación personalizada, extracción folicular e implantación orientada a resultados naturales.",
    keywords:
      "implante capilar FUE, implante capilar Buenos Aires, transplante capilar, recuperar cabello",
    image: treatmentImages.implantFueProcedure,
    imageAlt: "Procedimiento de implante capilar FUE en Dermaraíz Buenos Aires",
  },
  "/prp-capilar": {
    title: "PRP capilar en Buenos Aires | Dermaraíz",
    description:
      "Tratamiento de PRP capilar con plasma rico en plaquetas para estimular el folículo y acompañar la recuperación capilar.",
    keywords:
      "PRP capilar, plasma rico en plaquetas capilar, tratamiento caída cabello, fortalecimiento capilar",
    image: treatmentImages.prpPlasma,
    imageAlt: "Plasma rico en plaquetas para PRP capilar en Dermaraíz",
  },
  "/mesoterapia-capilar": {
    title: "Mesoterapia capilar en Buenos Aires | Dermaraíz",
    description:
      "Mesoterapia capilar con aplicación localizada de activos para nutrir la raíz, mejorar la calidad del cabello y acompañar tratamientos capilares.",
    keywords:
      "mesoterapia capilar, mesoterapia para caída cabello, tratamiento capilar Buenos Aires",
    image: treatmentImages.mesotherapy,
    imageAlt: "Aplicación de mesoterapia capilar en Dermaraíz Buenos Aires",
  },
  "/diagnostico-capilar": {
    title: "Diagnóstico capilar en Buenos Aires | Dermaraíz",
    description:
      "Evaluación profesional del cuero cabelludo para identificar tipos de alopecia y definir un plan capilar personalizado.",
    keywords:
      "diagnóstico capilar, evaluación capilar, alopecia, caída del cabello, cuero cabelludo",
    image: treatmentImages.diagnosis,
    imageAlt: "Diagnóstico capilar profesional en Dermaraíz CABA",
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

function RouteSeo() {
  const { pathname } = useLocation();
  const page = pages[pathname] || pages["/"];
  const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
  const imageUrl = new URL(page.image, window.location.origin).href;

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
      content: "es_AR",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
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

    upsertJsonLd("local-business", {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      name: "Dermaraíz Capilar & Estética",
      url: SITE_URL,
      image: imageUrl,
      telephone: "+54 9 11 7356-5160",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ciudad de la Paz 2984 Depto 2",
        addressLocality: "Ciudad Autónoma de Buenos Aires",
        addressRegion: "CABA",
        addressCountry: "AR",
      },
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
      inLanguage: "es-AR",
      isPartOf: {
        "@type": "WebSite",
        name: "Dermaraíz",
        url: SITE_URL,
      },
    });
  }, [canonical, imageUrl, page]);

  return null;
}

export default RouteSeo;
