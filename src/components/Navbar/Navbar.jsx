import "./Navbar.css";
import logo from "../../assets/logo/dermaraiz-icon.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#inicio" className="navbar-brand">
            <img src={logo} alt="Logo DermaRaíz" className="navbar-logo" />
            <span className="brand-text">Dermaraíz</span>
        </a>

        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#resultados">Resultados</a></li>
          <li><a href="#tratamientos">Tratamientos</a></li>
          <li><a href="#professionales"></a>Profesionales</li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <a href="#contacto" className="btn-primary nav-button">
          Solicitar consulta
        </a>
      </div>
    </nav>
  )
}

export default Navbar