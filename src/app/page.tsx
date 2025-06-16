import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Course from "@/components/sections/Course";
import Hero from "@/components/sections/Hero";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Course />
      <Reviews />
      <Contact />
    </>
  );
}
