"use client";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { ANIMATION_MAIN_VARIANTS } from "@/lib/animations";

import { InstructorCard } from "./instructor-card";
import { ContentSection } from "./content-section";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="sobre" className="py-48 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-800 rounded-full blur-3xl" />
      </div>

      {/* Main container */}
      <div ref={ref} className="container-layout">
        <motion.div
          className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16"
          variants={ANIMATION_MAIN_VARIANTS.container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Title, subtitle, content, sections, testimonial and button */}
          <ContentSection isInView={isInView} />

          {/* Instrutor image and info */}
          <InstructorCard />
        </motion.div>
      </div>

      {/* Separator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
