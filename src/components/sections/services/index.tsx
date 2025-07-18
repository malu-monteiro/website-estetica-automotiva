"use client";

import Image from "next/image";

import { useRef } from "react";

import { motion, useInView, UseInViewOptions } from "framer-motion";

import {
  DEFAULT_CONTAINER_VARIANTS,
  DEFAULT_ITEM_VARIANTS,
} from "@/lib/animations";
import { SERVICES_CONTENT } from "@/lib/constants/services";

import { ServicesCarousel } from "./services-carousel";
import { RatingSection } from "../about/rating-section";

const VIEW_CONFIG: UseInViewOptions = {
  once: true,
  margin: "-100px",
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, VIEW_CONFIG);
  const animationState = isInView ? "show" : "hidden";

  return (
    <section id="servicos" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/services-background.png"
        alt="Services Background"
        fill
        className="object-contain object-center -z-10"
      />

      <motion.div
        ref={ref}
        className="container-layout relative z-10 flex flex-col items-center text-center pb-20"
        variants={DEFAULT_CONTAINER_VARIANTS}
        initial="hidden"
        animate={animationState}
      >
        <RatingSection />

        {/* Title, Subtitle and Content */}
        <motion.div variants={DEFAULT_ITEM_VARIANTS}>
          <h2 className="main-title mt-6 ">{SERVICES_CONTENT.title}</h2>

          <p className="main-subtitle mt-6">{SERVICES_CONTENT.subtitle}</p>
        </motion.div>

        <motion.div className="mt-8 w-full">
          <ServicesCarousel items={SERVICES_CONTENT.services} />
        </motion.div>
      </motion.div>

      {/* Separator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
