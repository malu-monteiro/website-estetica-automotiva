"use client";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import { HoverEffect } from "@/components/ui/hover-effect";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: "Polimento",
    link: "/servicos/polimento",
    image: "/polimento.jpg",
  },
  {
    title: "Revitalização de Farol",
    link: "/servicos/revitalizacao-farol",
    image: "/farol.jpg",
    objectPosition: "50% 30%",
  },
  {
    title: "Vitrificação de Pintura",
    link: "/servicos/vitrificacao",
    image: "/vitrificacao.jpg",
  },
  {
    title: "Higienização Interna Premium",
    link: "/servicos/higienizacao",
    image: "/higienizacao.jpg",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="servicos"
      className="relative py-20 bg-cover bg-center bg-no-repeat bg-[url('/gradientbg4.png')] overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        ref={ref}
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-4 md:px-8 lg:px-16 xl:px-24 items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.h2
          className="text-3xl font-bold text-neutral-100 md:text-4xl lg:text-5xl"
          variants={itemVariants}
        >
          Nossos Serviços
        </motion.h2>

        <motion.div
          className="mt-3 h-1 w-24 rounded-full bg-red-500 mx-auto"
          variants={itemVariants}
        />

        <motion.p
          className="mt-6 text-2xl font-medium tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text md:text-3xl lg:text-4xl"
          variants={itemVariants}
        >
          Conheça nossos serviços e acesse para saber mais!
        </motion.p>

        <motion.div className="mt-8 w-full mx-auto">
          <HoverEffect items={projects} />
        </motion.div>
      </motion.div>
    </section>
  );
}
