import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resultImages, treatmentImages } from "../../assets/images";

const SITE_URL = "https://dermaraiz.com.ar";
const SITE_PREVIEW_IMAGE = "/preview-dermaraiz-isotipo-v4.png";

const pages = {
  "/": {
    title: "Dermaraíz | Tratamientos capilares en Buenos Aires",
    description:
      "Clínica capilar en CABA especializada en diagnóstico, PRP, mesoterapia e implante capilar FUE con atención personalizada.",
    keywords:
      "tratamiento capilar, implante capilar, caída del cabello, PRP capilar, mesoterapia capilar, clínica capilar Buenos Aires",
    image: SITE_PREVIEW_IMAGE,
    imageAlt: "Resultados de tratamientos capilares en Dermaraíz Buenos Aires",
  },
  "/implante-capilar": {
    title: "Implante capilar FUE en CABA | Dermaraíz",
    description:
      "Implante capilar FUE en CABA con evaluación y planificación personalizada. Conocé el procedimiento y reservá una consulta en Buenos Aires.",
    serviceName: "Implante capilar FUE",
    keywords:
      "implante capilar FUE, implante capilar Buenos Aires, transplante capilar, recuperar cabello",
    image: treatmentImages.implantFueProcedure,
    imageAlt: "Procedimiento de implante capilar FUE en Dermaraíz Buenos Aires",
  },
  "/prp-capilar": {
    title: "PRP capilar en CABA y Buenos Aires | Dermaraíz",
    description:
      "PRP capilar en CABA con evaluación profesional y plasma rico en plaquetas. Conocé el tratamiento y reservá una consulta en Dermaraíz.",
    serviceName: "PRP capilar",
    keywords:
      "PRP capilar, plasma rico en plaquetas capilar, tratamiento caída cabello, fortalecimiento capilar",
    image: treatmentImages.prpPlasma,
    imageAlt: "Plasma rico en plaquetas para PRP capilar en Dermaraíz",
  },
  "/mesoterapia-capilar": {
    title: "Mesoterapia capilar en CABA | Dermaraíz",
    description:
      "Mesoterapia capilar en CABA con activos seleccionados según cada caso. Conocé el tratamiento y reservá una consulta en Buenos Aires.",
    serviceName: "Mesoterapia capilar",
    keywords:
      "mesoterapia capilar, mesoterapia para caída cabello, tratamiento capilar Buenos Aires",
    image: treatmentImages.mesotherapy,
    imageAlt: "Aplicación de mesoterapia capilar en Dermaraíz Buenos Aires",
  },
  "/diagnostico-capilar": {
    title: "Diagnóstico capilar en CABA | Dermaraíz",
    description:
      "Diagnóstico capilar en CABA con evaluación del cuero cabelludo y tricoscopia para orientar un plan personalizado según cada caso.",
    serviceName: "Diagnóstico capilar",
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

function removeJsonLd(id) {
  document.head.querySelector(`script[data-seo="${id}"]`)?.remove();
}

function RouteSeo() {
  const { pathname } = useLocation();
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const page = pages[normalizedPath] || pages["/"];
  const canonical = `${SITE_URL}${normalizedPath === "/" ? "/" : `${normalizedPath}/`}`;
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
      inLanguage: "es-AR",
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
  }, [canonical, imageUrl, page]);

  return null;
}

export default RouteSeo;
