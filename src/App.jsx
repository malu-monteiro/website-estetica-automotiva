import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import Reviews from "./pages/Reviews";
import Location from "./pages/Location";

import Polimento from "./pages/ServiceDetails/Polimento";
import Revitalizacao from "./pages/ServiceDetails/Revitalizacao";
import Vitrificacao from "./pages/ServiceDetails/Vitrificacao";
import Higienizacao from "./pages/ServiceDetails/Higienizacao";
import Course from "./pages/Course";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Home />
      <About />
      <OurServices />
      <Course />
      <Reviews />
      <Location />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/polimento" element={<Polimento />} />
        <Route path="/revitalizacao-de-farol" element={<Revitalizacao />} />
        <Route path="/vitrificacao-de-pintura" element={<Vitrificacao />} />
        <Route
          path="/higienizacao-interna-premium"
          element={<Higienizacao />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
