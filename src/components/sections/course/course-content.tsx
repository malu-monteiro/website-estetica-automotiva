"use client";

import React from "react";
import { motion } from "framer-motion";

import { COURSE_DATA } from "@/lib/constants/course";
import { ANIMATION_MAIN_VARIANTS } from "@/lib/animations";

import { AnimatedButton } from "@/components/ui/animated-button";

export const CourseContent = () => {
  return (
    <motion.div
      variants={ANIMATION_MAIN_VARIANTS.item}
      className="mb-6 md:mb-0 md:w-1/2 lg:w-2/5"
    >
      <div className="inline-flex items-center gap-2 py-2 mb-6">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span className="text-white text-sm font-medium uppercase">
          {COURSE_DATA.badge}
        </span>
      </div>

      <h3 className="uppercase font-syne text-3xl font-semibold text-white mb-4 md:text-4xl lg:text-5xl leading-tight">
        {COURSE_DATA.title}
        <span className="block bg-gradient-to-r from-red-400 to-red-800 bg-clip-text text-transparent">
          {COURSE_DATA.titleHighlight}
        </span>
      </h3>

      <p className="text-lg font-light text-gray-300 mb-2 md:text-xl leading-relaxed max-w-lg text-left">
        {COURSE_DATA.description[0]}
      </p>

      <p className="text-lg font-light text-gray-300 mb-6 md:text-xl leading-relaxed max-w-lg text-left">
        <span className="text-white">{COURSE_DATA.description[1]}</span>
      </p>

      {/* CTA Button */}
      <div className="mt-6 w-fit">
        <a
          href={COURSE_DATA.cta.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimatedButton>{COURSE_DATA.cta.text}</AnimatedButton>
        </a>
      </div>

      {/* Image gradient */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12 mb-8 max-w-lg" />

      <div className="space-y-5 max-w-lg">
        {COURSE_DATA.features.map((feature, index) => (
          <div key={index} className="group flex items-start gap-4">
            <div className="mt-2 w-8 h-[1px] bg-gradient-to-r from-red-800 to-red-400 group-hover:w-12 transition-all duration-300" />
            <span className="text-sm font-medium text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
