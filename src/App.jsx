import { Navigate } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Polimento from "./pages/ServiceDetails/Polimento";
import Revitalizacao from "./pages/ServiceDetails/Revitalizacao";
import Vitrificacao from "./pages/ServiceDetails/Vitrificacao";
import Higienizacao from "./pages/ServiceDetails/Higienizacao";

import { Home } from "./pages";

export default function App() {
  return (
    <Router basename="/website-estetica-automotiva">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polimento" element={<Polimento />} />
        <Route path="/revitalizacao-de-farol" element={<Revitalizacao />} />
        <Route path="/vitrificacao-de-pintura" element={<Vitrificacao />} />
        <Route
          path="/higienizacao-interna-premium"
          element={<Higienizacao />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}
