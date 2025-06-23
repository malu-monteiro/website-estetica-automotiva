import { ABOUT_CONTENT } from "@/lib/constants";

import { StarRating } from "@/components/ui/star-rating";

export const RatingSection = () => (
  <div className="flex items-center gap-4 mt-6">
    <span className="font-semibold uppercase text-sm bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
      {ABOUT_CONTENT.rating.label}
    </span>

    <StarRating rating={ABOUT_CONTENT.rating.stars} />

    <span className="text-white text-base">{ABOUT_CONTENT.rating.score}</span>

    <div className="px-3 py-1 border border-gray-700 rounded-xl text-white text-sm font-medium whitespace-nowrap">
      {ABOUT_CONTENT.rating.reviews}
    </div>
  </div>
);
