"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, Variants } from "framer-motion";

import { FaWhatsapp } from "react-icons/fa";
import { Clock, Users, Award, Target, Shield, CheckCircle } from "lucide-react";

import { ShinyButton } from "../ui/shiny-button";

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

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  } as const,
};

export default function Course() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isVideoInView = useInView(videoRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (videoRef.current && isVideoInView) {
      videoRef.current.play();
    }
  }, [isVideoInView]);

  const courseInfo = [
    {
      icon: Clock,
      title: "9 Horas",
      subtitle: "Intensivo e Dinâmico",
      color: "text-red-500",
    },
    {
      icon: Users,
      title: "Presencial",
      subtitle: "Hands-on",
      color: "text-red-500",
    },
    {
      icon: Award,
      title: "Certificado",
      subtitle: "Conclusão",
      color: "text-red-500",
    },
  ];

  const courseSkills = [
    "Lixamento manual",
    "Lixamento com máquina",
    "Controle de lixamento",
    "Remoção de craquelados",
    "Remoção de riscos e imperfeições",
  ];

  const whyChooseUs = [
    {
      title: "Metodologia 100% Prática",
      description:
        "Aprenda fazendo! Nosso foco é a prática intensiva em faróis reais, garantindo que você saia com total confiança.",
      icon: Target,
      gradient: "from-red-600 to-red-500",
    },
    {
      title: "Instrutor Especializado",
      description:
        "Conte com a experiência de um profissional atuante no mercado, pronto para compartilhar todos os seus conhecimentos técnicos.",
      icon: Users,
      gradient: "from-red-600 to-red-500",
    },
    {
      title: "Certificado de Conclusão",
      description:
        "Garanta seu certificado de conclusão e abra portas para novas oportunidades no setor de estética automotiva.",
      icon: Award,
      gradient: "from-red-600 to-red-500",
    },
    {
      title: "Suporte Pós-Curso",
      description:
        "Não te deixamos na mão! Tenha acesso a um canal exclusivo para dúvidas e suporte após o término do curso.",
      icon: Shield,
      gradient: "from-red-600 to-red-500",
    },
  ];

  return (
    <section
      id="curso"
      className="relative py-20 md:py-28 lg:py-36 bg-gray-950 text-neutral-100 overflow-hidden"
    >
      {/* Dynamic background with gradient and a subtle pattern */}
      <div className="absolute inset-0 bg-black" />

      <motion.div
        ref={ref}
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-4 md:px-8 lg:px-16 xl:px-24 items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {/* Main Title */}
        <motion.h2
          className="text-3xl font-bold text-neutral-100 md:text-4xl lg:text-5xl"
          variants={itemVariants}
        >
          Nosso Curso
        </motion.h2>

        {/* Highlight line */}
        <motion.div
          className="mt-3 h-1 w-24 rounded-full bg-red-600 mx-auto"
          variants={itemVariants}
        />

        {/* Subtitle */}
        <motion.h3
          className="mt-6 text-2xl font-medium tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text md:text-3xl lg:text-4xl max-w-3xl"
          variants={itemVariants}
        >
          Polimento de Faróis Premium
        </motion.h3>

        <motion.p
          className="mt-4 text-xl text-neutral-200 font-normal  mx-auto"
          variants={itemVariants}
        >
          Domine as técnicas profissionais de polimento, revitalização e
          restauração de faróis automotivos
        </motion.p>

        {/* Duration and Mode Information - Cards */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
          variants={itemVariants}
        >
          {courseInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div
                key={index}
                className="relative group text-center"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                custom={index}
              >
                {/* This div creates the “light”/gradient effect on the hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Internal card div. It receives the effects of ELEVATION and SHADOW on hover */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-600 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-red-900/40 h-full flex flex-col justify-center items-center">
                  <IconComponent
                    className={`w-10 h-10 ${info.color} mb-3 mx-auto`}
                  />
                  <h4 className="text-2xl font-bold text-white mb-1">
                    {info.title}
                  </h4>
                  <p className="text-md text-neutral-400">{info.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mastered Techniques" section - List with VIDEO */}
        <motion.div
          className="mt-32 flex flex-col lg:flex-row lg:items-start gap-12 w-full max-w-5xl"
          variants={itemVariants}
        >
          <div className="text-left w-full lg:w-1/2">
            <h3 className="text-3xl font-semibold text-neutral-100 pb-4 inline-block relative group">
              Técnicas Dominadas
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </h3>
            <ul className="mt-6 space-y-8 text-xl text-neutral-200 list-none pl-0">
              {courseSkills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center group transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <CheckCircle className="w-7 h-7 text-red-500 mr-3 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* VIDEO next to the list */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <video
              ref={videoRef}
              src={isVideoInView ? "/video.mp4" : undefined}
              aria-label="Demonstração do Polimento de Farol"
              className="rounded-lg shadow-2xl w-full h-[410px] object-cover filter brightness-[0.7] contrast-125"
              loop={true}
              muted={true}
              playsInline={true}
            />
          </div>
        </motion.div>

        {/* "Por Que Somos a Melhor Escolha?" section - CardsVIDEO next to the list */}
        <motion.div className="mt-32 w-full" variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center text-neutral-100 pb-4 mb-12 relative group inline-block">
            Por Que Somos a Melhor Escolha?
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group text-center"
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  custom={index}
                >
                  {/* Light/glow overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-600 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-red-900/40 h-full flex flex-col justify-center items-center">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${reason.gradient} rounded-lg mb-4`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {reason.title}
                    </h4>
                    <p className="text-neutral-300 leading-relaxed text-base">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call for Final Action */}
        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <a
            href="https://wa.me/5541999346385?text=Olá!%20Gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyButton className="border-transparent bg-green-600 text-white hover:shadow-green-800">
              <div className="flex items-center justify-center gap-2">
                <FaWhatsapp className="size-4 sm:size-5 text-white" />
                <span className="text-white">Garanta sua vaga agora</span>
              </div>
            </ShinyButton>
          </a>
          <p className="mt-4 text-neutral-400 text-base">frase!</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
