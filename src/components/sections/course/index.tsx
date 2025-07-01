"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { DEFAULT_CONTAINER_VARIANTS } from "@/lib/animations";

import { CourseContent } from "./course-content";
import { CourseComparison } from "./course-comparison";

export default function Course() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      id="curso"
      className="relative py-20 md:py-28 lg:py-36 bg-black text-neutral-100 overflow-hidden"
    >
      <motion.div
        ref={ref}
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-4 md:px-8 lg:px-16 xl:px-24"
        variants={DEFAULT_CONTAINER_VARIANTS}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Badge, titles, subtitles, content and button */}
          <CourseContent />

          {/* Image before and after */}
          <CourseComparison />
        </div>
      </motion.div>

      {/* Separator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
