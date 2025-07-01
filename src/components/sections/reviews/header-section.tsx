import { motion } from "framer-motion";

import { FaGoogle } from "react-icons/fa";

import { RatingSection } from "../about/rating-section";

import { ShinyButton } from "@/components/ui/shiny-button";

import { ANIMATION_MAIN_VARIANTS } from "@/lib/animations";
import { SECTION_TEXTS } from "@/lib/constants/reviews";

export const HeaderSection = ({ isInView }: { isInView: boolean }) => (
  <motion.div
    className="text-center mb-16"
    variants={ANIMATION_MAIN_VARIANTS.container}
    initial="hidden"
    animate={isInView ? "show" : "hidden"}
  >
    <motion.div variants={ANIMATION_MAIN_VARIANTS.item}>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 py-2 mb-6">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span className="font-syne text-white text-sm font-medium uppercase">
          {SECTION_TEXTS.badge}
        </span>
      </div>
    </motion.div>

    {/* Title and rating */}
    <motion.h2
      className="uppercase font-syne text-3xl font-semibold text-white mb-4 md:text-4xl lg:text-5xl leading-tight"
      variants={ANIMATION_MAIN_VARIANTS.item}
    >
      {SECTION_TEXTS.title}
      <span className="block text-white">{SECTION_TEXTS.titleHighlight}</span>
    </motion.h2>

    <motion.div
      variants={ANIMATION_MAIN_VARIANTS.item}
      className="flex flex-col items-center"
    >
      <RatingSection />

      {/* CTA Button */}
      <div className="text-center mt-8 mb-24">
        <a
          href={SECTION_TEXTS.cta.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Avaliar no Google"
        >
          <ShinyButton className="border-transparent bg-red-800 hover:shadow-red-800 focus:ring-red-500">
            <div className="flex items-center justify-center gap-2 text-white">
              <FaGoogle className="size-4 sm:size-5" />
              <span className="uppercase tracking-wide">
                {SECTION_TEXTS.cta.text}
              </span>
            </div>
          </ShinyButton>
        </a>
      </div>
    </motion.div>
  </motion.div>
);
