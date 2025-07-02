"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { Sparkles, Star, UserCheck, Zap, LucideIcon } from "lucide-react";

import { ABOUT_CONTENT } from "@/lib/constants/about";
import { ANIMATION_MAIN_VARIANTS } from "@/lib/animations";

import { PhotoGallery } from "@/components/ui/gallery-services";
import { AnimatedButton } from "@/components/ui/animated-button";
import { RatingSection } from "@/components/sections/about/rating-section";

const iconMap: { [key: string]: LucideIcon } = {
  Sparkles,
  Star,
  UserCheck,
  Zap,
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* Header with Image and Title */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <Image
          src={ABOUT_CONTENT.headerImage}
          alt={`Banner da página ${ABOUT_CONTENT.headerPageTitle}`}
          fill
          className="object-cover brightness-50"
          priority
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-24 text-center">
          <motion.h1
            className="font-syne text-5xl md:text-7xl font-bold uppercase tracking-wider"
            variants={ANIMATION_MAIN_VARIANTS.item}
            initial="hidden"
            animate="show"
          >
            {ABOUT_CONTENT.headerPageTitle}
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Our History */}
        <div className="relative py-16">
          <div className="flex flex-col md:flex-row items-center gap-20 mb-20">
            <motion.div
              className="md:w-1/2 text-left"
              variants={ANIMATION_MAIN_VARIANTS.item}
              initial="hidden"
              animate="show"
            >
              <h2 className="font-syne text-4xl font-bold mb-6">
                {ABOUT_CONTENT.ourHistory.title}
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-300 mb-8 leading-relaxed">
                {ABOUT_CONTENT.ourHistory.subtitle}
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                {ABOUT_CONTENT.ourHistory.description}
              </p>

              <a
                href={ABOUT_CONTENT.ourHistory.cta.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedButton>
                  {ABOUT_CONTENT.ourHistory.cta.text}
                </AnimatedButton>
              </a>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              variants={ANIMATION_MAIN_VARIANTS.item}
              initial="hidden"
              animate="show"
            >
              <div className="rounded-md overflow-hidden shadow-lg">
                <Image
                  src={ABOUT_CONTENT.ourHistory.image}
                  alt={ABOUT_CONTENT.ourHistory.imageAlt}
                  width={400}
                  height={400}
                  className="object-cover w-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Separator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
            <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        {/* Why Choose Us MSS_STUDIO CAR */}
        <div className="relative py-24">
          <div className="flex justify-center mb-16">
            <RatingSection />
          </div>

          <div className="text-center mb-20">
            <motion.h2
              variants={ANIMATION_MAIN_VARIANTS.item}
              initial="hidden"
              animate="show"
              className="font-syne uppercase text-4xl font-bold mb-8"
            >
              {ABOUT_CONTENT.whyChooseUs.title}
            </motion.h2>
            <motion.p
              variants={ANIMATION_MAIN_VARIANTS.item}
              initial="hidden"
              animate="show"
              className="max-w-xl mx-auto text-xl md:text-2xl font-light text-gray-300 leading-relaxed"
            >
              {ABOUT_CONTENT.whyChooseUs.description}
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
            {ABOUT_CONTENT.whyChooseUs.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <motion.div
                  key={index}
                  variants={ANIMATION_MAIN_VARIANTS.item}
                  initial="hidden"
                  animate="show"
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    {IconComponent && <IconComponent className="size-6" />}
                    <h3 className="text-lg font-medium">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <a
              href={ABOUT_CONTENT.whyChooseUs.cta.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedButton>
                {ABOUT_CONTENT.whyChooseUs.cta.text}
              </AnimatedButton>
            </a>
          </div>

          {/* Separator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
            <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="relative py-24">
          <PhotoGallery />

          {/* Separator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
            <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}
