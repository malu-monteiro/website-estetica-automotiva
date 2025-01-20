import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Map from "./components/Map";

import About from "./pages/About";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Map />
      <Footer />
    </>
  );
}
