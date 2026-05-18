import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import ImplanteCapilar from "./pages/ImplanteCapilar/ImplanteCapilar";
import PrpCapilar from "./pages/PrpCapilar/PrpCapilar";
import MesoterapiaCapilar from "./pages/MesoterapiaCapilar/MesoterapiaCapilar";
import DiagnosticoCapilar from "./pages/DiagnosticoCapilar/DiagnosticoCapilar";

import ScrollToHash from "./components/ScrollToHash/ScrollToHash";
import GithubPagesRedirect from "./components/GithubPagesRedirect/GithubPagesRedirect";
import RouteSeo from "./components/SEO/RouteSeo";
import TreatmentAssistant from "./components/TreatmentAssistant/TreatmentAssistant";

function App() {
  return (
    <BrowserRouter>
      <GithubPagesRedirect />
      <RouteSeo />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/implante-capilar" element={<ImplanteCapilar />} />
        <Route path="/prp-capilar" element={<PrpCapilar />} />
        <Route path="/mesoterapia-capilar" element={<MesoterapiaCapilar />} />
        <Route path="/diagnostico-capilar" element={<DiagnosticoCapilar />} />
        
      </Routes>

      <TreatmentAssistant />
    </BrowserRouter>
  );
}

export default App;
