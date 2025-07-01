import { ABOUT_CONTENT } from "@/lib/constants/about";

import { StarRating } from "@/components/ui/star-rating";

export const RatingSection = () => (
  <div className="flex items-center gap-2 mt-3">
    <StarRating rating={ABOUT_CONTENT.rating.stars} />

    <span className="text-white text-sm">{ABOUT_CONTENT.rating.score}</span>

    <div className="px-2 py-0.5 border border-gray-700 rounded-lg text-white text-xs font-medium whitespace-nowrap">
      {ABOUT_CONTENT.rating.reviews}
    </div>
  </div>
);
