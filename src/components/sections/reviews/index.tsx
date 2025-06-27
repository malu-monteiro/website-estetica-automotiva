"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

import { Marquee } from "@/components/ui/marquee";

import { REVIEWS_CONTENT } from "@/lib/constants";

import { ReviewCard } from "./review-card";
import { HeaderSection } from "./header-section";

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const midpoint = Math.ceil(REVIEWS_CONTENT.length / 2);
  const firstRow = REVIEWS_CONTENT.slice(0, midpoint);
  const secondRow = REVIEWS_CONTENT.slice(midpoint);

  return (
    <section id="avaliacoes" className="py-20 bg-black relative">
      {" "}
      {/* <--- Adicione 'relative' aqui! */}
      <div
        ref={ref}
        className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 max-w-[1440px]"
      >
        {/* Titles and button */}
        <HeaderSection isInView={isInView} />
      </div>
      {/* Reviews Carousel */}
      <div className="flex w-full flex-col items-center justify-center overflow-hidden mt-20 mb-20">
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((review, idx) => (
            <ReviewCard key={`first-${idx}`} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((review, idx) => (
            <ReviewCard key={`second-${idx}`} {...review} />
          ))}
        </Marquee>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/80 to-transparent" />
      </div>
      {/* Separator - Agora é um filho direto da section com 'relative' */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
