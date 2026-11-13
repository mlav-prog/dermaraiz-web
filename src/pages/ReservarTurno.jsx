import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./ReservarTurno.css";

function ReservarTurno() {
  return (
    <>
      <Navbar />
      <main className="booking-page">
        <h1>Reservar turno</h1>
        <iframe
          className="booking-page-agenda"
          src="https://agendapro.com/iframe/overview/277d5e62-979f-432d-ac36-b355259b74a6"
          title="Reservas de Dermaraíz en AgendaPro"
        />
      </main>
      <Footer />
    </>
  );
}

export default ReservarTurno;
