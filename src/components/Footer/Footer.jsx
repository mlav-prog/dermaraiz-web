import "./Footer.css";
import logo from "../../assets/logo/dermaraiz-icon.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top-line"></div>

            <div className="footer-container">
                <div className="footer-brand">
                    <a href="/#inicio" className="footer-brand-link">
                        <img
                            src={logo}
                            alt="Logo Dermaraíz"
                            className="footer-logo"
                        />
                        <span className="footer-brand-name">Dermaraíz</span>
                    </a>

                    <p className="footer-tagline">
                        Tratamientos capilares personalizados en Buenos Aires,
                        con un enfoque profesional, cercano y orientado a resultados naturales.
                    </p>

                </div>

                <div className="footer-links">
                    <h3>Navegación</h3>

                    <ul>
                        <li><a href="/#inicio">Inicio</a></li>
                        <li><a href="/#resultados">Resultados</a></li>
                        <li><a href="/#tratamientos">Tratamientos</a></li>
                        <li><a href="/#profesionales">Profesionales</a></li>
                        <li><a href="/#productos">Productos</a></li>
                        <li><a href="/#contacto">Contacto</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contacto</h3>

                    <p>
                        <a
                            href="https://wa.me/5491173565160?text=Hola,%20quiero%20consultar%20por%20un%20tratamiento%20capilar."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-item"
                        >
                            <span className="footer-icon" aria-hidden="true">
                                <svg viewBox="0 0 32 32" fill="none">
                                    <path
                                        d="M16 3.5C9.1 3.5 3.5 9.1 3.5 16c0 2.2.6 4.4 1.7 6.2L3.8 28.2l6.2-1.6c1.8 1 3.8 1.5 6 1.5 6.9 0 12.5-5.6 12.5-12.5S22.9 3.5 16 3.5Z"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.4 18.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.8.7.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2.1-1.5.2-.7.2-1.3.1-1.5-.1-.1-.3-.2-.6-.3Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            WhatsApp
                        </a>
                    </p>

                    <p>
                        <a
                            href="https://www.instagram.com/derma_raiz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-item"
                        >
                            <span className="footer-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <rect
                                        x="3.25"
                                        y="3.25"
                                        width="17.5"
                                        height="17.5"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="4.2"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />
                                    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
                                </svg>
                            </span>
                            Instagram
                        </a>
                    </p>

                    <p>
                        <a
                            href="https://share.google/rISe30XnZe3u7ZIem"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-item"
                        >
                            <span className="footer-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinejoin="round"
                                    />
                                    <circle
                                        cx="12"
                                        cy="10"
                                        r="2.5"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />
                                </svg>
                            </span>
                            Ubicación
                        </a>
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Dermaraíz. Todos los derechos reservados.</p>
                <span className="footer-bottom-separator">•</span>
                <p>Diseño y desarrollo web</p>
            </div>
        </footer>
    );
}

export default Footer;