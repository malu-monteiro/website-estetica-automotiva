"use client";

import { useRef } from "react";

import { motion, useInView, UseInViewOptions } from "framer-motion";

import { RatingSection } from "./about/rating-section";

import { ServiceCarousel } from "../ui/service-carousel";

import { SERVICES_CONTENT } from "../../lib/constants";
import { SERVICES_VARIANTS } from "../../lib/animations";

const VIEW_CONFIG: UseInViewOptions = {
  once: true,
  margin: "-100px",
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, VIEW_CONFIG);
  const animationState = isInView ? "show" : "hidden";

  return (
    <section
      id="servicos"
      className="relative py-20 bg-cover bg-center bg-no-repeat bg-[url('/gradientbg4.png')] overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        ref={ref}
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-4 md:px-8 lg:px-16 xl:px-24 items-center text-center"
        variants={SERVICES_VARIANTS.container}
        initial="hidden"
        animate={animationState}
      >
        <RatingSection />

        <motion.h2
          className="font-syne mt-6 uppercase text-3xl font-semibold text-white mb-4 md:text-4xl lg:text-5xl leading-tight"
          variants={SERVICES_VARIANTS.item}
        >
          {SERVICES_CONTENT.title}
        </motion.h2>

        <motion.p
          className="mt-6 text-lg font-light text-gray-300 mb-6 md:text-xl leading-relaxed max-w-lg"
          variants={SERVICES_VARIANTS.item}
        >
          {SERVICES_CONTENT.subtitle}
        </motion.p>

        <motion.div className="mt-8 w-full">
          <ServiceCarousel items={SERVICES_CONTENT.services} />
        </motion.div>
      </motion.div>
    </section>
  );
}
