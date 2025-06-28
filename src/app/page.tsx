import Hero from "@/components/sections/Hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/Services";
import Course from "@/components/sections/Course";
import Reviews from "@/components/sections/reviews";
import Contact from "@/components/sections/Contact";

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
