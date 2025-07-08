"use client";

import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { DEFAULT_ITEM_VARIANTS } from "@/lib/animations";

import { MapSection } from "./map-section";
import { ContactInfo } from "./contact-info";
import { ContactHeader } from "./contact-header";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <>
      <section
        id="contato"
        className="relative py-20 overflow-hidden bg-gradient-to-r from-red-900/[0.10] to-zinc-900/[0.05] backdrop-blur-md"
      >
        <motion.div
          ref={ref}
          className="container-layout"
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
      </section>

      <Separator />
    </>
  );
}
