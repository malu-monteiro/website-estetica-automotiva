import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import SchedulingButton from "./components/SchedulingButton";
import Input from "./components/Input";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <SchedulingButton />
      <Input />
      <Footer />
    </>
  );
}
