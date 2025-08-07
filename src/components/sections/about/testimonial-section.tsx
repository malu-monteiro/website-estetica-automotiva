import { motion } from "framer-motion";

import { HOME_ABOUT_CONTENT } from "@/lib/constants/about";
import { ANIMATION_MAIN_VARIANTS } from "@/lib/animations";

export const TestimonialSection = () => (
  <motion.div
    className="mt-10 flex items-start gap-4"
    variants={ANIMATION_MAIN_VARIANTS.item}
  >
    {/* Avatar with badge */}
    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
      <div className="w-full h-full bg-gray-400 rounded-full flex items-center justify-center">
        <span className="text-white font-semibold text-lg">G</span>
      </div>
    </div>

    {/* Content of testimonial */}
    <div className="flex flex-col flex-grow">
      <p className="text-base font-medium mb-1 italic leading-relaxed whitespace-pre-wrap">
        &quot;{HOME_ABOUT_CONTENT.testimonial.text}&quot;
      </p>

      <span className="text-gray-200 font-semibold text-sm">
        {HOME_ABOUT_CONTENT.testimonial.author}
      </span>

      <span className="text-gray-500 text-xs mt-1">
        {HOME_ABOUT_CONTENT.testimonial.source}
      </span>
    </div>
  </motion.div>
);
