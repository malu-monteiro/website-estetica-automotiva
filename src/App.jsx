import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Localization from "./pages/Localization";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Localization />
      <Footer />
    </>
  );
}
