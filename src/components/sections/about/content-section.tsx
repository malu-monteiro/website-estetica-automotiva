import { motion } from "framer-motion";

import { ABOUT_CONTENT } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/animations";

import { StatsSection } from "./stats-section";
import { RatingSection } from "./rating-section";
import { TestimonialSection } from "./testimonial-section";

import { AnimatedButton } from "@/components/ui/animated-button";

interface ContentSectionProps {
  isInView: boolean;
}

export const ContentSection = ({ isInView }: ContentSectionProps) => (
  <div className="order-2 md:order-1 flex flex-col">
    {/* Badge */}
    <motion.div variants={ANIMATION_VARIANTS.item}>
      <div className="inline-flex items-center gap-2 py-2 mb-6">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span className="text-white text-sm font-medium uppercase">
          {ABOUT_CONTENT.badge}
        </span>
      </div>
    </motion.div>

    {/* Title */}
    <motion.h2
      className="uppercase font-syne text-3xl font-semibold text-white mb-4 md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
      variants={ANIMATION_VARIANTS.item}
    >
      {ABOUT_CONTENT.title}
      <span className="block bg-gradient-to-r from-red-800 via-red-400 to-orange-400 bg-clip-text text-transparent">
        {ABOUT_CONTENT.titleHighlight}
      </span>
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      className="text-lg font-light text-gray-300 mb-6 md:text-xl leading-relaxed max-w-lg"
      variants={ANIMATION_VARIANTS.item}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {ABOUT_CONTENT.subtitle}
    </motion.p>

    {/* Button */}
    <motion.div
      className="flex flex-col sm:flex-row gap-4 mb-6"
      variants={ANIMATION_VARIANTS.item}
    >
      <AnimatedButton>{ABOUT_CONTENT.buttonText}</AnimatedButton>
    </motion.div>

    {/* Sections */}
    <RatingSection />

    <StatsSection />

    <TestimonialSection />
  </div>
);
