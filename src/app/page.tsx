import About from "@/components/sections/about";
import Contact from "@/components/sections/Contact";
import Course from "@/components/sections/Course";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Reviews from "@/components/sections/reviews";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Course />
      <Reviews />
      {/* <WhyUs /> */}
      <Contact />
    </>
  );
}
