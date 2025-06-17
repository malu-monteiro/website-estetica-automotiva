"use client";

import Link from "next/link";

import { useRef } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { ChevronsDown, TrendingUp, Users } from "lucide-react";

import { motion, useInView } from "framer-motion";

import { ShinyButton } from "../magicui/shiny-button";
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
    <section
      id="inicio"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/herobg.png')]"
    >
      <div className="absolute inset-0 bg-black/20" />

      <motion.div
        className="relative z-10 mx-auto flex h-full min-h-screen max-w-[1440px] flex-col justify-center px-4 md:px-8 lg:px-16 xl:px-24"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-xl font-medium text-gray-200 md:text-3xl lg:text-4xl"
          variants={itemVariants}
        >
          MSS_STUDIO CAR
        </motion.h1>

        <motion.h2
          className="mt-2 text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text md:text-6xl xl:text-7xl"
          variants={itemVariants}
        >
          Estética Automotiva
        </motion.h2>

        <motion.p
          className="mt-4 max-w-xl lg:max-w-2xl xl:max-w-3xl text-base leading-relaxed text-white md:text-lg lg:text-xl"
          variants={itemVariants}
        >
          Garantimos qualidade transformando a aparência do seu veículo,
          <br className="hidden sm:block" />
          destacando os detalhes e trazendo brilho e proteção que fazem a
          <br className="hidden sm:block" />
          diferença.
        </motion.p>

        <motion.div className="mt-8" variants={itemVariants}>
          <div className="flex flex-wrap items-center justify-start gap-4">
            <a
              href="https://wa.me/5541999346385?text=Olá!%20Gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShinyButton className="border-transparent bg-green-600 text-white hover:shadow-green-800">
                <div className="flex items-center justify-center gap-2">
                  <FaWhatsapp className="size-4 sm:size-5 text-white" />
                  <span className="text-white">WhatsApp</span>
                </div>
              </ShinyButton>
            </a>

            <Link
              href="#sobre-nos"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/90 px-6 py-2 font-medium text-sm uppercase tracking-wide text-white transition-all duration-300 hover:border-white/50 hover:bg-white/20 sm:px-8 sm:py-3"
            >
              <span>Saiba Mais</span>
              <ChevronsDown className="size-4" />
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
              <p className="text-base text-gray-300 md:text-lg">
                Anos de experiência.
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
              <p className="text-base text-gray-300 md:text-lg">
                Clientes atendidos.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
