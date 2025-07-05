"use client";

import { motion } from "framer-motion";

import { DEFAULT_CONTAINER_VARIANTS } from "@/lib/animations";

import { HeroContent } from "./content-section";
import { BackgroundVideo } from "./background-video";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Background video and overlay */}
      <BackgroundVideo />

      <motion.div
        className="container-layout relative z-10 flex h-full min-h-screen flex-col justify-center"
        variants={DEFAULT_CONTAINER_VARIANTS}
        initial="hidden"
        animate="show"
      >
        {/* All the content (text, button, counters, arrow) */}
        <HeroContent />
      </motion.div>

      {/* Separator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
