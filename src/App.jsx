import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import ImplanteCapilar from "./pages/ImplanteCapilar/ImplanteCapilar";
import PrpCapilar from "./pages/PrpCapilar/PrpCapilar";
import MesoterapiaCapilar from "./pages/MesoterapiaCapilar/MesoterapiaCapilar";
import DiagnosticoCapilar from "./pages/DiagnosticoCapilar/DiagnosticoCapilar";

import ScrollToHash from "./components/ScrollToHash/ScrollToHash";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import GithubPagesRedirect from "./components/GithubPagesRedirect/GithubPagesRedirect";
import RouteSeo from "./components/SEO/RouteSeo";
import TreatmentAssistant from "./components/TreatmentAssistant/TreatmentAssistant";
import AnalyticsTracker from "./components/AnalyticsTracker/AnalyticsTracker";

function App() {
  return (
    <BrowserRouter>
      <GithubPagesRedirect />
      <AnalyticsTracker />
      <RouteSeo />
      <ScrollToHash />
      <ScrollReveal />

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
