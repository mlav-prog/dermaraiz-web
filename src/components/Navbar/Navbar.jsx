import { useState } from "react";
import "./Navbar.css";
import { brandImages } from "../../assets/images";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/#inicio" className="navbar-brand">
            <img src={brandImages.logoIcon} alt="Logo DermaRaíz" className="navbar-logo" />
            <span className="brand-text">Dermaraíz</span>
          </a>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="/#inicio" onClick={closeMenu}>Inicio</a></li>
          <li><a href="/#resultados" onClick={closeMenu}>Resultados</a></li>

          <li className="dropdown">
            <a href="/#tratamientos" className="dropdown-toggle" onClick={closeMenu}>
              Tratamientos
            </a>

            <ul className="dropdown-menu">
              <li><a href="/prp-capilar" onClick={closeMenu}>PRP Capilar</a></li>
              <li><a href="/mesoterapia-capilar" onClick={closeMenu}>Mesoterapia</a></li>
              <li><a href="/diagnostico-capilar" onClick={closeMenu}>Diagnóstico</a></li>
              <li><a href="/implante-capilar" onClick={closeMenu}>Implante Capilar FUE</a></li>
              <li><a href="/#estetica" onClick={closeMenu}>Estética</a></li>
            </ul>
          </li>

          <li><a href="/#profesionales" onClick={closeMenu}>Profesionales</a></li>
          <li><a href="/#productos" onClick={closeMenu}>Productos</a></li>
          <li><a href="/#contacto" onClick={closeMenu}>Contacto</a></li>
        </ul>

        <a href="/#contacto" className="btn-primary nav-button">
          Solicitar consulta
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
