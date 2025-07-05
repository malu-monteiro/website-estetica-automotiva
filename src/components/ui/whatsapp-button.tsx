import React from "react";
import { FaWhatsapp } from "react-icons/fa";

import { ShinyButton } from "./shiny-button";

import { CONTACT_INFO } from "@/lib/constants/contact";

interface WhatsappButtonProps {
  text: string;
  whatsappMessage: string;
  className?: string;
}

export const WhatsappButton = ({
  text,
  whatsappMessage,
  className,
}: WhatsappButtonProps) => {
  const whatsappLink = `https://wa.me/${
    CONTACT_INFO.whatsappNumber
  }?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <ShinyButton
        className={`border-transparent bg-green-600 hover:shadow-green-800 focus:ring-green-500 ${
          className || ""
        }`}
      >
        <div className="flex items-center justify-center gap-2">
          <FaWhatsapp className="size-4 sm:size-5" />
          <span className="uppercase tracking-wide">{text}</span>
        </div>
      </ShinyButton>
    </a>
  );
};
