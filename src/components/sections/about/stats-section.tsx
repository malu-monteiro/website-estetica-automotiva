import { motion } from "framer-motion";

import { ABOUT_CONTENT } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/animations";

export const StatsSection = () => (
  <motion.div
    className="flex flex-wrap gap-6 mt-6"
    variants={ANIMATION_VARIANTS.item}
  >
    {ABOUT_CONTENT.stats.map((stat, index) => (
      <div key={index} className="flex items-center gap-6">
        <div className="text-center">
          <div className="text-sm text-gray-400 whitespace-nowrap">{stat}</div>
        </div>
        {index < ABOUT_CONTENT.stats.length - 1 && (
          <div className="w-px bg-gray-700 h-4" />
        )}
      </div>
    ))}
  </motion.div>
);
