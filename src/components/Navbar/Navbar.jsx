import "./Navbar.css";
import logo from "../../assets/logo/dermaraiz-icon.svg";
import { useState} from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#inicio" className="navbar-brand">
            <img src={logo} alt="Logo DermaRaíz" className="navbar-logo" />
            <span className="brand-text">Dermaraíz</span>
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#resultados" onClick={() => setMenuOpen(false)}>Resultados</a></li>
          <li><a href="#tratamientos" onClick={() => setMenuOpen(false)}>Tratamientos</a></li>
          <li><a href="#professionales" onClick={() => setMenuOpen(false)}>Profesionales</a></li>
          <li><a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a></li>
          <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>

        <a href="#contacto" className="btn-primary nav-button">
          Solicitar consulta
        </a>
      </div>
    </nav>
  )
}

export default Navbar