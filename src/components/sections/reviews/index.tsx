"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { HeaderSection } from "./header-section";

import { ReviewMarqueeRows } from "./review-marquee-rows";

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="avaliacoes" className="py-20 bg-black relative">
      <div
        ref={ref}
        className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 max-w-[1440px]"
      >
        {/* Titles and button */}
        <HeaderSection isInView={isInView} />
      </div>

      {/* Marquee Reviews */}
      <ReviewMarqueeRows />

      {/* Separator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
