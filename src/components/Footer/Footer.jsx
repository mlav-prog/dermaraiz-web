import "./Footer.css";

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h2>Dermaraíz</h2>
                    <p>
                        Capilar & Estética. Tratamientos personalizados enfocados en la
                        salud del cuero cabelludo y resultados naturales.
                    </p>  
                </div>

                <div className="footer-links">
                    <h3>Navegación</h3>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#resultados">Resultados</a></li>
                        <li><a href="#tratamientos">Tratamientos</a></li>
                        <li><a href="#professionales">Profesionales</a></li>
                        <li><a href="#productos">Productos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <p>
                        <a 
                            href="https://wa.me/5491173565160?text=Hola,%20quiero%20consultar%20por%20un%20tratamiento%20capilar."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>
                    </p>

                    <p>
                        <a
                            href="https://www.instagram.com/derma_raiz/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                    </p>

                    <p>
                        <a
                            href="https://share.google/rISe30XnZe3u7ZIem"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cdad. de la Paz 2984 Depto 2, C1429 Cdad. Autónoma de Buenos Aires
                        </a>
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Dermaraíz. Todos los derechos reservados.</p>
            </div>
            
        </footer>
    )
}

export default Footer;