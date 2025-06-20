"use client";

import React from "react";

import { motion, useInView } from "framer-motion";

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

export default function Contact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="contato" className="relative py-20 bg-cover overflow-hidden">
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
          Entre em contato
        </motion.h2>

        <motion.div
          className="mt-3 h-1 w-24 rounded-full bg-red-500 mx-auto"
          variants={itemVariants}
        />

        <motion.p
          className="mt-6 text-2xl font-medium tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text md:text-3xl lg:text-4xl"
          variants={itemVariants}
        >
          Formulário de contato, WhatsApp, etc.
        </motion.p>

        <motion.div className="mt-8 w-full mx-auto" variants={itemVariants}>
          <p className="text-gray-300 text-lg text-center">
            Este é o espaço para o seu formulário de contato ou informações
            relevantes.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
