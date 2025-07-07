"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { HeaderSection } from "./header-section";

import { ReviewMarqueeRows } from "./review-marquee-rows";

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="avaliacoes" className="py-20 relative">
      <div ref={ref} className="container-layout">
        {/* Titles and button */}
        <HeaderSection isInView={isInView} />
      </div>

      {/* Marquee Reviews */}
      <ReviewMarqueeRows />
    </section>
  );
}
