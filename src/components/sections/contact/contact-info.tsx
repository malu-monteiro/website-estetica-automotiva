"use client";

import React from "react";

import { motion } from "framer-motion";

import { Clock, Mail, MapPin, MessagesSquare } from "lucide-react";

import { generateWhatsAppLink } from "@/lib/utils";
import { DEFAULT_ITEM_VARIANTS } from "@/lib/animations";
import { CONTACT_INFO } from "@/lib/constants/contact";

export const ContactInfo = () => {
  return (
    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* CARD 1: Atendimento */}
      <motion.div className="flex flex-col" variants={DEFAULT_ITEM_VARIANTS}>
        <Clock className="size-6 text-neutral-300 mb-3" />
        <h4 className="text-xl font-medium text-neutral-100 mb-2">
          {CONTACT_INFO.cards.schedule.title}
        </h4>
        <p className="text-neutral-400 mb-3">
          {CONTACT_INFO.cards.schedule.description}
        </p>
        <p className="text-neutral-100 font-medium">
          {CONTACT_INFO.cards.schedule.content}
        </p>
      </motion.div>

      {/* CARD 2: Endereço */}
      <motion.div className="flex flex-col" variants={DEFAULT_ITEM_VARIANTS}>
        <MapPin className="size-6 text-neutral-300 mb-3" />
        <h4 className="text-xl font-medium text-neutral-100 mb-2">
          {CONTACT_INFO.cards.addressInfo.title}
        </h4>
        <p className="text-neutral-400 mb-3">
          {CONTACT_INFO.cards.addressInfo.description}
        </p>
        <p className="text-neutral-100 font-medium">
          {CONTACT_INFO.address}, {CONTACT_INFO.cityState}, {CONTACT_INFO.cep}
        </p>
      </motion.div>

      {/* CARD 3: WhatsApp */}
      <motion.div className="flex flex-col" variants={DEFAULT_ITEM_VARIANTS}>
        <MessagesSquare className="size-6 text-neutral-300 mb-3" />
        <h4 className="text-xl font-medium text-neutral-100 mb-2">
          {CONTACT_INFO.cards.whatsapp.title}
        </h4>
        <p className="text-neutral-400 mb-3">
          {CONTACT_INFO.cards.whatsapp.description}
        </p>
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 hover:underline font-medium transition-colors"
        >
          {CONTACT_INFO.cards.whatsapp.displayNumber}
        </a>
      </motion.div>

      {/* CARD 4: E-mail */}
      <motion.div className="flex flex-col" variants={DEFAULT_ITEM_VARIANTS}>
        <Mail className="size-6 text-neutral-300 mb-3" />
        <h4 className="text-xl font-medium text-neutral-100 mb-2">
          {CONTACT_INFO.cards.emailInfo.title}
        </h4>
        <p className="text-neutral-400 mb-3">
          {CONTACT_INFO.cards.emailInfo.description}
        </p>
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="text-blue-400 hover:text-blue-300 hover:underline font-medium transition-colors"
        >
          {CONTACT_INFO.email}
        </a>
      </motion.div>
    </div>
  );
};
