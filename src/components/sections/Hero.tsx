"use client";

import Link from "next/link";

import { useRef } from "react";

import { FaAngleDoubleDown, FaWhatsapp } from "react-icons/fa";
import { TrendingUp, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { ShinyButton } from "../ui/shiny-button";
import { AnimatedCounter } from "../ui/animated-counter";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const countersRef = useRef(null);
  const countersInView = useInView(countersRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Video Background Otimizado */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videobg-poster.webp"
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videobg.webm" type="video/webm" />
        <source src="/videobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Darkening Layer & BLUR: Applies a subtle, uniform black filter and a blur effect over the video (or poster image). */}
      <div
        className="absolute inset-0 bg-black backdrop-blur-sm"
        style={{ opacity: 0.3 }}
      />

      {/* Gradient Overlay: Adds a gradient fading from transparent at the top to dark at the bottom, enhancing foreground content contrast. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000000 100%)",
          opacity: 1,
        }}
      />

      {/* Main Content Area: Holds all foreground content (text, stars, title, buttons, counters). */}
      <motion.div
        className="relative z-10 mx-auto flex h-full min-h-screen max-w-[1440px] flex-col justify-center px-4 md:px-8 lg:px-16 xl:px-24"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className=" font-semibold uppercase text-sm bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Top Rated
          </span>

          <div className="flex items-center gap-1 text-yellow-400">
            {/* Stars */}
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-1 rounded-full bg-red-800" />
          <motion.h1
            className="font-syne text-xl font-medium text-gray-200 md:text-3xl lg:text-4xl"
            variants={itemVariants}
          >
            MSS_STUDIO CAR
          </motion.h1>
        </div>

        <motion.h2
          className="font-syne mt-2 text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          ESTÉTICA AUTOMOTIVA
        </motion.h2>

        <motion.p
          className="mt-4 max-w-xl lg:max-w-2xl xl:max-w-3xl text-base leading-relaxed text-white md:text-lg lg:text-xl"
          variants={itemVariants}
        >
          Garantimos qualidade transformando a aparência do seu veículo,
          <br className="hidden sm:block" />
          destacando os detalhes e trazendo brilho e proteção que fazem a
          <br className="hidden sm:block" />
          diferença
        </motion.p>

        <motion.div className="mt-8" variants={itemVariants}>
          <div className="flex flex-wrap items-center justify-start gap-4">
            <a
              href="https://wa.me/5541999346385?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShinyButton className="border-transparent bg-green-600 text-white hover:shadow-green-800">
                <div className="flex items-center justify-center gap-2">
                  <FaWhatsapp className="size-4 sm:size-5 text-white" />
                  <span className="text-white">Solicitar um orçamento</span>
                </div>
              </ShinyButton>
            </a>

            <Link
              href="#sobre"
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 text-white hover:shadow-gray-700 shadow-md px-6 py-2 font-medium text-sm uppercase tracking-wide transition-all duration-300 sm:px-8 sm:py-3
              bg-gradient-to-r from-gray-600 to-gray-800"
            >
              <span>Saiba Mais</span>
              <FaAngleDoubleDown className="size-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          ref={countersRef}
          className="mt-24 flex flex-col items-start gap-8 sm:flex-row sm:gap-12 lg:mt-32"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <TrendingUp className="size-12 text-white md:size-16" />
            <div>
              <div className="flex items-baseline">
                <AnimatedCounter
                  from={0}
                  to={5}
                  className="text-3xl font-bold text-white md:text-4xl"
                  startAnimation={countersInView}
                />
                <span className="text-3xl font-bold text-white md:text-4xl">
                  +
                </span>
              </div>
              <p className="uppercase max-w-xl lg:max-w-2xl xl:max-w-3xl text-base leading-relaxed md:text-lg lg:text-xl tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                Anos de experiência
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Users className="size-12 text-white md:size-16" />
            <div>
              <div className="flex items-baseline">
                <AnimatedCounter
                  from={0}
                  to={1000}
                  className="text-3xl font-bold text-white md:text-4xl"
                  startAnimation={countersInView}
                />
                <span className="text-3xl font-bold text-white md:text-4xl">
                  +
                </span>
              </div>
              <p className="uppercase max-w-xl lg:max-w-2xl xl:max-w-3xl text-base leading-relaxed md:text-lg lg:text-xl tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                Clientes atendidos
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Separator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
