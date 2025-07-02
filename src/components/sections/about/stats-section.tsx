import { motion } from "framer-motion";

import { HOME_ABOUT_CONTENT } from "@/lib/constants/about";
import { ANIMATION_MAIN_VARIANTS } from "@/lib/animations";

export const StatsSection = () => (
  <motion.div
    className="flex flex-wrap gap-6 mt-6"
    variants={ANIMATION_MAIN_VARIANTS.item}
  >
    {HOME_ABOUT_CONTENT.stats.map((stat, index) => (
      <div key={index} className="flex items-center gap-6">
        <div className="text-center">
          <div className="text-sm text-gray-400 whitespace-nowrap">{stat}</div>
        </div>
        {index < HOME_ABOUT_CONTENT.stats.length - 1 && (
          <div className="w-px bg-gray-700 h-4" />
        )}
      </div>
    ))}
  </motion.div>
);
