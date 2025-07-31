"use client";

import { Marquee } from "@/components/ui/marquee";

import { REVIEWS_CONTENT } from "@/lib/constants/reviews";

import { ReviewCard } from "./review-card";

export const ReviewMarqueeRows = () => {
  const midpoint = Math.ceil(REVIEWS_CONTENT.length / 2);
  const firstRow = REVIEWS_CONTENT.slice(0, midpoint);
  const secondRow = REVIEWS_CONTENT.slice(midpoint);

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden mt-8 mb-20">
      <Marquee pauseOnHover className="[--duration:60s]">
        {/* Name and content of Marquee Cards */}

        {firstRow.map((review, idx) => (
          <ReviewCard key={`first-${idx}`} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:60s]">
        {secondRow.map((review, idx) => (
          <ReviewCard key={`second-${idx}`} {...review} />
        ))}
      </Marquee>

      {/* Marquee Gradient Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/80 to-transparent" />
    </div>
  );
};
