"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import { ShinyButton } from "@/components/ui/shiny-button";

import { ANIMATION_MAIN_VARIANTS } from "@/lib/animations";
import { CONTACT_INFO } from "@/lib/constants/contact";

export const ContactHeader = () => {
  const contactWhatsappLink = `https://wa.me/${
    CONTACT_INFO.whatsappNumber
  }?text=${encodeURIComponent(CONTACT_INFO.cta.whatsappMessage)}`;

  return (
    <motion.div
      variants={ANIMATION_MAIN_VARIANTS.item}
      className="mb-24 text-center flex flex-col items-center"
    >
      <div className="inline-flex items-center gap-2 py-2 mb-6">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span className="text-white text-sm font-medium uppercase">
          {CONTACT_INFO.headerSubtitle}
        </span>
      </div>

      <h3 className="uppercase font-syne text-3xl font-semibold text-white md:text-4xl lg:text-5xl leading-tight mb-8">
        {CONTACT_INFO.headerTitlePart1}
        <span className="block text-white">
          {CONTACT_INFO.headerTitlePart2}
        </span>
      </h3>

      <motion.div variants={ANIMATION_MAIN_VARIANTS.item}>
        <a href={contactWhatsappLink} target="_blank" rel="noopener noreferrer">
          <ShinyButton className="border-transparent bg-green-600 text-white hover:shadow-green-800">
            <div className="flex items-center justify-center gap-2">
              <FaWhatsapp className="size-4 sm:size-5 text-white" />
              <span className="text-white">{CONTACT_INFO.cta.text}</span>
            </div>
          </ShinyButton>
        </a>
      </motion.div>
    </motion.div>
  );
};
