"use client";

import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { DEFAULT_ITEM_VARIANTS } from "@/lib/animations";

import { MapSection } from "./map-section";
import { ContactInfo } from "./contact-info";
import { ContactHeader } from "./contact-header";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="contato" className="relative py-20 bg-black overflow-hidden">
      <motion.div
        ref={ref}
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-4 md:px-8 lg:px-16 xl:px-24 pb-20"
        variants={DEFAULT_ITEM_VARIANTS}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {/* Badge, Title and CTA Button */}
        <ContactHeader />

        {/* Contact cards and Map */}
        <div className="flex flex-col lg:flex-row gap-12 w-full">
          <ContactInfo />
          <MapSection />
        </div>
      </motion.div>

      {/* Separator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
