"use client";

import { useRef } from "react";

import Image from "next/image";

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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-nos" className="py-20">
      <div
        ref={ref}
        className="mx-auto flex max-w-[1440px] flex-col gap-24 px-4 md:gap-32 md:px-8 lg:px-16 xl:px-24"
      >
        <motion.div
          className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div className="order-1" variants={itemVariants}>
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px rgba(0,0,0,0.30)",
              }}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-gray-900/50 shadow-lg backdrop-blur-sm"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                <Image
                  src="/aboutimg.png"
                  alt="Serviço de estética automotiva da MSS_Studio Car em Pinhais"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-4 text-left">
                <h3 className="mb-1 font-bold text-xl text-white lg:text-2xl">
                  Márcio
                </h3>
                <p className="text-base text-gray-300 lg:text-lg">
                  Especialista em Estética Automotiva e Instrutor do curso de
                  Polimento de Faróis
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="order-2 flex flex-col">
            <motion.h2
              className="text-3xl font-bold text-neutral-100 md:text-4xl lg:text-5xl"
              variants={itemVariants}
            >
              Sobre Nós
            </motion.h2>

            <motion.div
              className="mt-3 h-1 w-24 rounded-full bg-red-500"
              variants={itemVariants}
            />

            <motion.p
              className="mt-6 text-2xl font-medium tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text md:text-3xl lg:text-4xl"
              variants={itemVariants}
            >
              Excelência em cada detalhe!
            </motion.p>

            <motion.p
              className="mt-8 max-w-xl text-base leading-relaxed text-neutral-200 md:text-lg lg:text-xl"
              variants={itemVariants}
            >
              Localizada em Pinhais, Paraná, a MSS_STUDIO CAR é especializada em
              estética automotiva. Nos dedicamos a oferecer serviços de
              polimento, revitalização de faróis, vitrificação e higienização
              interna premium. Nosso compromisso é com a qualidade e a atenção
              meticulosa aos detalhes. Também oferecemos curso de Polimento de
              Faróis, compartilhando nossa experiência com quem deseja ingressar
              na área.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <div className="order-2 flex flex-col md:order-1">
            <motion.h2
              className="text-3xl font-bold text-neutral-100 md:text-4xl lg:text-5xl"
              variants={itemVariants}
            >
              Nossa Filosofia
            </motion.h2>

            <motion.div
              className="mt-3 h-1 w-24 rounded-full bg-red-500"
              variants={itemVariants}
            />

            <motion.p
              className="mt-6 text-2xl font-medium tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text md:text-3xl lg:text-4xl"
              variants={itemVariants}
            >
              Paixão que se vê no resultado
            </motion.p>

            <motion.p
              className="mt-8 max-w-xl text-base leading-relaxed text-neutral-200 md:text-lg lg:text-xl"
              variants={itemVariants}
            >
              Acreditamos que cada carro tem uma história e merece ser tratado
              como uma obra de arte. Nossa filosofia combina tecnologia de ponta
              com a habilidade artesanal para não apenas restaurar, mas para
              elevar a condição do seu veículo.
            </motion.p>
          </div>

          <motion.div className="order-1 md:order-2" variants={itemVariants}>
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px rgba(0,0,0,0.30)",
              }}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-gray-900/50 shadow-lg backdrop-blur-sm"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                <Image
                  src="/courseimg.jpg"
                  alt="Processo de vitrificação de pintura"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-4 text-left">
                <h3 className="mb-1 font-bold text-xl text-white lg:text-2xl">
                  Nossos Cursos
                </h3>
                <p className="text-base text-gray-300 lg:text-lg">
                  Aprenda com quem tem experiência de verdade!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
