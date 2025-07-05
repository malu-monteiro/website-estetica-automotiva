import { motion } from "framer-motion";

import { HOME_ABOUT_CONTENT } from "@/lib/constants/about";
import { ANIMATION_MAIN_VARIANTS } from "@/lib/animations";

import { StatsSection } from "./stats-section";
import { TestimonialSection } from "./testimonial-section";

import { AnimatedButton } from "@/components/ui/animated-button";

interface ContentSectionProps {
  isInView: boolean;
}

export const ContentSection = ({ isInView }: ContentSectionProps) => (
  <div className="order-2 md:order-1 flex flex-col">
    {/* Badge */}
    <motion.div variants={ANIMATION_MAIN_VARIANTS.item}>
      <div className="inline-flex items-center gap-2 py-2 mb-6">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span className="text-sm font-medium uppercase">
          {HOME_ABOUT_CONTENT.badge}
        </span>
      </div>
    </motion.div>

    {/* Title */}
    <motion.h2 className="main-title" variants={ANIMATION_MAIN_VARIANTS.item}>
      {HOME_ABOUT_CONTENT.title}
      <span className="block bg-gradient-to-r from-red-400 to-red-800 bg-clip-text text-transparent">
        {HOME_ABOUT_CONTENT.titleHighlight}
      </span>
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      className="main-subtitle"
      variants={ANIMATION_MAIN_VARIANTS.item}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {HOME_ABOUT_CONTENT.subtitle}
    </motion.p>

    {/* Button */}
    <motion.div
      variants={ANIMATION_MAIN_VARIANTS.item}
      className="flex flex-col sm:flex-row gap-4 mb-6"
    >
      <a
        href={HOME_ABOUT_CONTENT.ctas.readMore.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AnimatedButton>{HOME_ABOUT_CONTENT.ctas.readMore.text}</AnimatedButton>
      </a>
    </motion.div>

    {/* Sections */}
    <StatsSection />

    <TestimonialSection />
  </div>
);
