"use client";

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
    <>
      {/* Header Section */}
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] flex items-center justify-center">
        <Image
          src={ABOUT_CONTENT.headerImage}
          alt={`Banner da página ${ABOUT_CONTENT.headerPageTitle}`}
          fill
          className="object-cover object-center brightness-50"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black" />

        <div className="relative z-10 container-layout text-center">
          <motion.h1
            className="header-title"
            variants={ANIMATION_MAIN_VARIANTS.item}
            initial="hidden"
            animate="show"
          >
            {ABOUT_CONTENT.headerPageTitle}
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-layout">
        {/* Our History Section Title, subtitle, description and CTA Button */}
        <section className="py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left z-10"
              variants={ANIMATION_MAIN_VARIANTS.item}
              initial="hidden"
              animate="show"
            >
              <h2 className="section-title">
                {ABOUT_CONTENT.ourHistory.title}
              </h2>

              <p className="section-subtitle">
                {ABOUT_CONTENT.ourHistory.subtitle}
              </p>

              <p className="content-description">
                {ABOUT_CONTENT.ourHistory.description}
              </p>

              <div className="flex justify-center md:justify-start">
                <a
                  href={ABOUT_CONTENT.ourHistory.cta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AnimatedButton>
                    {ABOUT_CONTENT.ourHistory.cta.text}
                  </AnimatedButton>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 relative"
              variants={ANIMATION_MAIN_VARIANTS.item}
              initial="hidden"
              animate="show"
            >
              <div className="group relative w-full">
                {/* Background blur effect */}
                <div
                  className="absolute -bottom-12 left-1/2 z-0 h-48 w-96 -translate-x-1/2 rounded-full blur-3xl bg-radial-gradient-wine-light"
                  aria-hidden="true"
                />
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative p-1 rounded-2xl bg-zinc-800"
                >
                  <div className="relative overflow-hidden rounded-xl bg-black">
                    <div className="rounded-lg overflow-hidden shadow-lg relative">
                      <Image
                        src={ABOUT_CONTENT.ourHistory.image}
                        alt={ABOUT_CONTENT.ourHistory.imageAlt}
                        width={400}
                        height={400}
                        className="object-cover object-center w-full h-64 sm:h-72 md:h-80 lg:h-96"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 mt-20 bg-gradient-to-br from-neutral-900 via-black to-neutral-900">
        <div className="container-layout">
          <div className="flex justify-center mb-12 md:mb-16">
            <RatingSection />
          </div>
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              variants={ANIMATION_MAIN_VARIANTS.item}
              initial="hidden"
              animate="show"
              className="section-title"
            >
              {ABOUT_CONTENT.whyChooseUs.title}
            </motion.h2>
            <motion.p
              variants={ANIMATION_MAIN_VARIANTS.item}
              initial="hidden"
              animate="show"
              className="section-subtitle max-w-xl mx-auto "
            >
              {ABOUT_CONTENT.whyChooseUs.description}
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
            {ABOUT_CONTENT.whyChooseUs.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <motion.div
                  key={`feature-${feature.icon}-${index}`}
                  variants={ANIMATION_MAIN_VARIANTS.item}
                  initial="hidden"
                  animate="show"
                  custom={index}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    {IconComponent && (
                      <IconComponent className="size-5 md:size-6" />
                    )}
                    <h3 className="text-base md:text-lg font-medium">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
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
        </div>
      </section>

      {/* Photo Gallery Section and Whatsapp Button */}
      <section className="py-12 md:py-16 mt-20">
        <div className="container-layout">
          <PhotoGallery />
        </div>
      </section>

      {/* Separator */}
      <div className="h-[1px] w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 md:mb-16" />
    </>
  );
}
