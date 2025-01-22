import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Location from "./pages/Location";

import Polimento from "./pages/ServiceDetails/Polimento";
import PolimentoFarol from "./pages/ServiceDetails/PolimentoFarol";
import Vitrificacao from "./pages/ServiceDetails/Vitrificacao";
import HigienizacaoInterna from "./pages/ServiceDetails/HigienizacaoInterna";

const MainPage = () => (
  <>
    <Home />
    <Services />
    <About />
    <Reviews />
    <Location />
  </>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/polimento" element={<Polimento />} />
        <Route path="/polimento-farol" element={<PolimentoFarol />} />
        <Route path="/vitrificacao" element={<Vitrificacao />} />
        <Route path="/higienizacao-interna" element={<HigienizacaoInterna />} />
      </Routes>
      <Footer />
    </Router>
  );
}
