"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

import { ANIMATION_VARIANTS, SERVICES_VARIANTS } from "@/lib/animations";
import React from "react";
import { AnimatedButton } from "../ui/animated-button";
import { Check } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Course() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        <motion.div
          variants={ANIMATION_VARIANTS.item}
          className="mb-6 mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 py-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-sm font-medium uppercase">
              Nosso Curso
            </span>
          </div>
        </motion.div>

        <motion.h3
          className="uppercase font-syne text-3xl font-semibold text-white mb-4 md:text-4xl lg:text-5xl leading-tight text-center"
          variants={ANIMATION_VARIANTS.item}
        >
          Polimento de
          <span className="block bg-gradient-to-r from-red-800 to-red-400 bg-clip-text text-transparent">
            Faróis Premium
          </span>
        </motion.h3>

        <motion.p
          className="text-lg font-light text-gray-300 mb-6 md:text-xl leading-relaxed max-w-lg mx-auto text-center"
          variants={ANIMATION_VARIANTS.item}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          Domine as técnicas profissionais de polimento, revitalização e
          restauração de faróis automotivos. <br></br>
          <span className="text-white">Aqui, você aprende com quem faz.</span>
        </motion.p>

        {/* Button */}
        <motion.div
          className="mt-6 mx-auto text-center"
          variants={itemVariants}
        >
          <AnimatedButton href="#" target="_blank" rel="noopener noreferrer">
            Clique para saber mais
          </AnimatedButton>
        </motion.div>

        <div className="relative mt-36 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4 text-left max-w-[1440px] w-full">
          <motion.div variants={SERVICES_VARIANTS.item} className="space-y-3">
            <div className="flex items-center gap-2">
              <Check className="size-4" />
              <h3 className="text-sm font-medium">
                Lixamento manual e com maquina
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Serviços com hora marcada e entrega no prazo, sem perder a
              qualidade no resultado
            </p>
          </motion.div>
          <motion.div variants={SERVICES_VARIANTS.item} className="space-y-2">
            <div className="flex items-center gap-2">
              <Check className="size-4" />
              <h3 className="text-sm font-medium">Controle de lixamento</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Utilizamos apenas materiais profissionais e testados para garantir
              durabilidade
            </p>
          </motion.div>
          <motion.div variants={SERVICES_VARIANTS.item} className="space-y-2">
            <div className="flex items-center gap-2">
              <Check className="size-4" />
              <h3 className="text-sm font-medium">Remoção de craquelados</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Anos de experiência em estética automotiva e centenas de clientes
              satisfeitos
            </p>
          </motion.div>
          <motion.div variants={SERVICES_VARIANTS.item} className="space-y-2">
            <div className="flex items-center gap-2">
              <Check className="size-4" />
              <h3 className="text-sm font-medium">
                Remoção de riscos e imperfeições
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Anos de experiência em estética automotiva e centenas de clientes
              satisfeitos
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Separator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
