"use client";

import React, { useRef } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { ChevronDown, TrendingUp, Users } from "lucide-react";

import { motion, useInView } from "framer-motion";

import { StarRating } from "@/components/ui/star-rating";
import { ShinyButton } from "@/components/ui/shiny-button";

import { ANIMATION_CONFIG } from "@/lib/animations";
import { COUNTER_DATA, HERO_CONTENT } from "@/lib/constants/hero";

import { CounterItem } from "./counter-item";

export function HeroContentAndCounters() {
  const countersRef = useRef(null);
  const countersInView = useInView(
    countersRef,
    ANIMATION_CONFIG.countersInViewConfig
  );

  const iconMap = { TrendingUp, Users };

  return (
    <>
      {/* Top Rated and Stars */}
      <div className="mb-4 flex items-center gap-4">
        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-sm font-semibold uppercase text-transparent">
          {HERO_CONTENT.topRated}
        </span>
        <StarRating rating={5} />
      </div>

      {/* Title */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-1 rounded-full bg-red-800" />
        <motion.h1
          className="font-syne text-xl font-medium text-gray-200 md:text-3xl lg:text-4xl"
          variants={ANIMATION_CONFIG.itemVariants}
        >
          {HERO_CONTENT.title}
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.h2
        className="font-syne mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent"
        variants={ANIMATION_CONFIG.itemVariants}
      >
        {HERO_CONTENT.subtitle}
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-4 max-w-xl text-base leading-relaxed text-white md:text-lg lg:max-w-2xl lg:text-xl xl:max-w-3xl whitespace-pre-wrap"
        variants={ANIMATION_CONFIG.itemVariants}
      >
        {HERO_CONTENT.description}
      </motion.p>

      {/* Button: WhatsApp */}
      <motion.div className="mt-8" variants={ANIMATION_CONFIG.itemVariants}>
        <a
          href={`https://wa.me/${
            HERO_CONTENT.whatsappNumber
          }?text=${encodeURIComponent(HERO_CONTENT.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShinyButton className="border-transparent bg-green-600 text-white hover:shadow-green-800">
            <div className="flex items-center justify-center gap-2">
              <FaWhatsapp className="size-4 text-white sm:size-5" />
              <span className="text-white">{HERO_CONTENT.ctaText}</span>
            </div>
          </ShinyButton>
        </a>
      </motion.div>

      {/* Counters */}
      <motion.div
        ref={countersRef}
        className="mt-24 flex flex-col items-start gap-8 sm:flex-row sm:gap-12 lg:mt-32"
        variants={ANIMATION_CONFIG.itemVariants}
      >
        {COUNTER_DATA.map((counter, index) => (
          <CounterItem
            key={index}
            icon={iconMap[counter.icon as keyof typeof iconMap]}
            value={counter.value}
            label={counter.label}
            countersInView={countersInView}
          />
        ))}
      </motion.div>

      {/* ChevronDown Animation */}
      <motion.div
        className="mt-12 flex w-full justify-center"
        variants={ANIMATION_CONFIG.itemVariants}
      >
        <ChevronDown className="size-8 animate-bounce text-white" />
      </motion.div>
    </>
  );
}
