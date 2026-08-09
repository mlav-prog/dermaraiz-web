import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function sendEvent(eventName, parameters = {}) {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, parameters);
}

function getPageData() {
  return {
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}`,
    page_title: document.title,
  };
}

/**
 * Registra páginas vistas y acciones relevantes sin enviar datos personales,
 * datos médicos ni el contenido ingresado en el formulario.
 */
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    sendEvent("page_view", getPageData());
  }, [location.pathname, location.search]);

  useEffect(() => {
    function handleClick(event) {
      const link = event.target.closest("a[href]");

      if (link) {
        const href = link.href;
        const commonParameters = {
          link_url: href,
          page_path: window.location.pathname,
        };

        if (href.includes("wa.me/")) {
          sendEvent("click_whatsapp", commonParameters);
        } else if (href.includes("agendapro.com/")) {
          sendEvent("click_book_appointment", commonParameters);
        } else if (href.includes("instagram.com/")) {
          sendEvent("click_instagram", commonParameters);
        } else if (href.startsWith("tel:")) {
          sendEvent("click_phone", commonParameters);
        }
      }

      const mapButton = event.target.closest(".map-toggle");
      if (mapButton) {
        sendEvent("view_location", {
          page_path: window.location.pathname,
        });
      }
    }

    function handleSubmit(event) {
      if (!event.target.matches("form.contact-form")) return;

      sendEvent("generate_lead", {
        method: "whatsapp",
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}

export default AnalyticsTracker;
