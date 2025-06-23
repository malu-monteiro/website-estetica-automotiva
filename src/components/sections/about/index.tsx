"use client";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { ANIMATION_VARIANTS } from "@/lib/animations";

import { InstructorCard } from "./instructor-card";
import { ContentSection } from "./content-section";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="sobre" className="py-48 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-800 rounded-full blur-3xl" />
      </div>

      {/* Main container */}
      <div
        ref={ref}
        className="mx-auto flex max-w-[1440px] flex-col gap-20 px-6 md:gap-24 md:px-8 lg:px-16 xl:px-24 relative z-10"
      >
        <motion.div
          className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16"
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <ContentSection isInView={isInView} />

          <InstructorCard />
        </motion.div>
      </div>
    </section>
  );
}
