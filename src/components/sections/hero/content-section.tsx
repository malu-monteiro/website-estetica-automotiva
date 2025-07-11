"use client";

import React, { useRef } from "react";

import { ChevronsDown, TrendingUp, Users } from "lucide-react";

import { motion, useInView } from "framer-motion";

import { StarRating } from "@/components/ui/star-rating";

import { DEFAULT_ITEM_VARIANTS } from "@/lib/animations";
import { COUNTER_DATA, HERO_CONTENT } from "@/lib/constants/hero";

import { CounterItem } from "./counter-item";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export function HeroContent() {
  const countersRef = useRef<HTMLDivElement>(null);
  const countersInView = useInView(countersRef, DEFAULT_ITEM_VARIANTS);

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
          className="font-syne text-xl font-medium tracking-tight text-zinc-100 md:text-3xl lg:text-4xl"
          variants={DEFAULT_ITEM_VARIANTS}
        >
          {HERO_CONTENT.title}
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.h2
        className="font-syne mt-2 bg-gradient-to-r from-neutral-100 to-neutral-800 bg-clip-text text-5xl font-bold tracking-tight text-transparent"
        variants={DEFAULT_ITEM_VARIANTS}
      >
        {HERO_CONTENT.subtitle}
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-4 max-w-xl text-base leading-relaxed md:text-lg lg:max-w-2xl lg:text-xl xl:max-w-3xl whitespace-pre-wrap"
        variants={DEFAULT_ITEM_VARIANTS}
      >
        {HERO_CONTENT.description}
      </motion.p>

      {/* Button: WhatsApp */}
      <motion.div className="mt-8" variants={DEFAULT_ITEM_VARIANTS}>
        <WhatsappButton
          text={HERO_CONTENT.cta.text}
          whatsappMessage={HERO_CONTENT.cta.whatsappMessage}
        />
      </motion.div>

      {/* Counters */}
      <motion.div
        ref={countersRef}
        className="mt-24 flex flex-col items-start gap-8 sm:flex-row sm:gap-12 lg:mt-32"
        variants={DEFAULT_ITEM_VARIANTS}
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
        className="mt-14 flex w-full justify-center"
        variants={DEFAULT_ITEM_VARIANTS}
      >
        <ChevronsDown className="size-8 animate-bounce" />
      </motion.div>
    </>
  );
}
