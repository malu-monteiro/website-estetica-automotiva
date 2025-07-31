"use client";

import { motion } from "framer-motion";

import { CONTACT_INFO } from "@/lib/constants/contact";
import { ANIMATION_MAIN_VARIANTS } from "@/lib/animations";

import { WhatsappButton } from "@/components/ui/whatsapp-button";

export const ContactHeader = () => {
  return (
    <motion.div
      variants={ANIMATION_MAIN_VARIANTS.item}
      className="mb-24 text-center flex flex-col items-center"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 py-2 mb-6">
        <div className="w-2 h-2 bg-white rounded-full" />
        <span className="text-sm font-medium uppercase">
          {CONTACT_INFO.badge}
        </span>
      </div>

      {/* Title */}
      <h2 className="main-title mb-8">
        {CONTACT_INFO.headerTitlePart1}
        <span className="block">{CONTACT_INFO.headerTitlePart2}</span>
      </h2>

      {/* CTA Button */}
      <motion.div variants={ANIMATION_MAIN_VARIANTS.item}>
        {CONTACT_INFO.cta && (
          <WhatsappButton
            text={CONTACT_INFO.cta.text}
            whatsappMessage={CONTACT_INFO.cta.whatsappMessage}
          />
        )}
      </motion.div>
    </motion.div>
  );
};
