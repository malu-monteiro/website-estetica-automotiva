import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Hero from "./pages/Hero";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </>
  );
};

export default App;
