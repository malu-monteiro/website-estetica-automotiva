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
      className="relative py-20 md:py-28 lg:py-36 overflow-hidden"
    >
      <motion.div
        ref={ref}
        className="container-layout"
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
    </section>
  );
}
