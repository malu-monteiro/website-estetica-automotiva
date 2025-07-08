"use client";

import { useRef } from "react";

import Image from "next/image";

import { motion, useInView } from "framer-motion";

import {
  Users,
  Award,
  Target,
  Shield,
  Clock,
  LucideIcon,
  UserCheck,
} from "lucide-react";

import { COURSE_CONTENT } from "@/lib/constants/course";
import { ANIMATION_MAIN_VARIANTS } from "@/lib/animations";

import Banner from "@/components/ui/banner";
import { ShinyButton } from "@/components/ui/shiny-button";
import { CourseContent } from "@/components/ui/course-content";
import { WhatsappButton } from "@/components/ui/whatsapp-button";
import { RatingSection } from "@/components/sections/about/rating-section";

const iconMap: { [key: string]: LucideIcon } = {
  Clock,
  Users,
  Award,
  Target,
  Shield,
  UserCheck,
};

export default function CoursePage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const motionProps = {
    variants: ANIMATION_MAIN_VARIANTS.item,
    initial: "hidden" as const,
    animate: isInView ? ("show" as const) : ("hidden" as const),
  };

  return (
    <>
      {/* Header Section */}
      <section className="header-banner">
        <Image
          src={COURSE_CONTENT.headerImage}
          alt={`Banner da página ${COURSE_CONTENT.headerPageTitle}`}
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
            {COURSE_CONTENT.headerPageTitle}
          </motion.h1>
        </div>
      </section>

      {/* Intro Section */}
      <div className="container-layout" ref={ref}>
        <section className="py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:gap-12">
            <motion.div
              className="w-full md:w-1/2 mb-8 md:mb-0 text-left"
              {...motionProps}
            >
              <h2 className="section-title">{COURSE_CONTENT.intro.title}</h2>
              <p className="section-subtitle mb-6 md:mb-8">
                {COURSE_CONTENT.intro.subtitle}
              </p>
              <p className="content-description">
                {COURSE_CONTENT.intro.description}
              </p>
              {COURSE_CONTENT.intro.cta && (
                <WhatsappButton
                  text={COURSE_CONTENT.intro.cta.text}
                  whatsappMessage={COURSE_CONTENT.intro.cta.whatsappMessage}
                  className="mt-6"
                />
              )}
            </motion.div>

            {/* Video */}
            <motion.div
              className="w-full md:w-1/2 flex justify-center items-center rounded-lg overflow-hidden shadow-xl"
              {...motionProps}
            >
              <div className="relative w-full" style={{ paddingBottom: "70%" }}>
                <video
                  controls
                  preload="metadata"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  aria-label="Vídeo do curso"
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* What You Will Learn Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-black to-neutral-900 min-h-screen">
        <div className="container-layout py-12 md:py-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">
              {COURSE_CONTENT.whatYouWillLearn.title}
            </h2>
            <p className="max-w-xl mx-auto section-subtitle">
              {COURSE_CONTENT.whatYouWillLearn.description}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <CourseContent />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-800/50 uppercase">
            {COURSE_CONTENT.stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-extralight mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-light tracking-wide text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="container-layout">
        <section className="py-16 md:py-24">
          <div className="flex justify-center mb-12 md:mb-16">
            <RatingSection />
          </div>

          <div className="text-center mb-16 md:mb-20">
            <motion.h2
              {...motionProps}
              className="font-syne uppercase text-3xl md:text-4xl font-bold mb-6 md:mb-8"
            >
              {COURSE_CONTENT.whyChooseUs.title}
            </motion.h2>

            <motion.p
              {...motionProps}
              className="max-w-xl mx-auto section-subtitle"
            >
              {COURSE_CONTENT.whyChooseUs.description}
            </motion.p>

            {COURSE_CONTENT.whyChooseUs.cta && (
              <div className="flex justify-center">
                <a
                  href={COURSE_CONTENT.whyChooseUs.cta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Avaliar no Google"
                >
                  <ShinyButton className="border-transparent bg-red-800 hover:shadow-red-800 focus:ring-red-500">
                    <span className="uppercase tracking-wide text-sm md:text-base">
                      {COURSE_CONTENT.whyChooseUs.cta.text}
                    </span>
                  </ShinyButton>
                </a>
              </div>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-20">
            {COURSE_CONTENT.whyChooseUs.features.map((reason, index) => {
              const IconComponent = iconMap[reason.icon];

              return (
                <motion.div
                  key={index}
                  {...motionProps}
                  custom={index}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <IconComponent className="size-5 md:size-6" />
                    <h3 className="text-base md:text-lg font-medium">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Gallery Section */}
      {COURSE_CONTENT.galleryImages?.length && (
        <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-900 via-black to-neutral-900">
          <div className="container-layout">
            <h3 className="font-syne uppercase text-3xl md:text-4xl font-bold mb-16 md:mb-20 text-center text-neutral-100">
              Nossos Alunos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {COURSE_CONTENT.galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  {...motionProps}
                  custom={index}
                  className="relative rounded-lg overflow-hidden shadow-md w-full pb-[100%] sm:pb-0 sm:h-56 md:h-64 lg:h-72"
                >
                  <Image
                    src={src}
                    alt={`Galeria com imagem de alunos ${index + 1}`}
                    width={400}
                    height={300}
                    className="absolute inset-0 object-cover object-center w-full h-full"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Banner Section */}
      <Banner />
    </>
  );
}
