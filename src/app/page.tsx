import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Course from "@/components/sections/course";
import Reviews from "@/components/sections/reviews";
import Contact from "../components/sections/contact";

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
