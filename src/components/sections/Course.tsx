"use client";

import React, { useRef } from "react";

import { motion, useInView, Variants } from "framer-motion";

import { ANIMATION_VARIANTS } from "@/lib/animations";

import { Compare } from "../ui/compare";
import { AnimatedButton } from "../ui/animated-button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Course() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const courseFeatures = [
    "Transforme faróis opacos em verdadeiras obras de arte.",
    "Conquiste a confiança para oferecer um serviço de alto padrão.",
  ];

  return (
    <section
      id="curso"
      className="relative py-20 md:py-28 lg:py-36 bg-black text-neutral-100 overflow-hidden"
    >
      <motion.div
        ref={ref}
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-4 md:px-8 lg:px-16 xl:px-24"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {/* Title, Subtitle and Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          <motion.div
            variants={ANIMATION_VARIANTS.item}
            className="mb-6 md:mb-0 md:w-1/2 lg:w-2/5"
          >
            <div className="inline-flex items-center gap-2 py-2 mb-6">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-white text-sm font-medium uppercase">
                Nosso Curso
              </span>
            </div>

            <h3 className="uppercase font-syne text-3xl font-semibold text-white mb-4 md:text-4xl lg:text-5xl leading-tight">
              Polimento de
              <span className="block bg-gradient-to-r from-red-800 to-red-400 bg-clip-text text-transparent">
                Faróis Premium
              </span>
            </h3>

            <p className="text-lg font-light text-gray-300 mb-2 md:text-xl leading-relaxed max-w-lg text-left">
              Domine as técnicas profissionais de polimento, revitalização e
              restauração de faróis automotivos.
            </p>
            <p className="text-lg font-light text-gray-300 mb-6 md:text-xl leading-relaxed max-w-lg text-left">
              <span className="text-white">
                Aqui, você aprende com quem faz.
              </span>
            </p>

            {/* Button */}
            <div className="mt-6 w-fit">
              <AnimatedButton
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clique para saber mais
              </AnimatedButton>
            </div>

            {/* List separator */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12 mb-8 max-w-lg" />

            <div className="space-y-5 max-w-lg">
              {courseFeatures.map((feature, index) => (
                <div key={index} className="group flex items-start gap-4">
                  <div className="mt-2 w-8 h-[1px] bg-gradient-to-r from-red-800 to-red-400 group-hover:w-12 transition-all duration-300" />
                  <span className="text-sm font-medium text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <div className="w-full md:w-1/2 lg:w-3/5 flex justify-end">
            <Compare
              firstImage="/compareimg1.jpg"
              secondImage="/compareimg2.jpg"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[400px] w-full md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
              slideMode="hover"
            />
          </div>
        </div>
      </motion.div>

      {/* Separator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
