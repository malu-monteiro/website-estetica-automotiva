import { useEffect } from "react";

import Hero from "./Home/Hero";
import About from "./Home/About";
import OurServices from "./Home/OurServices";
import Course from "./Home/Course";
import Reviews from "./Home/Reviews";
import Location from "./Home/Location";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <OurServices />
      <Course />
      <Reviews />
      <Location />
    </main>
  );
}
