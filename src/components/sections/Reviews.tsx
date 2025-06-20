"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { FaGoogle } from "react-icons/fa";

import { ShinyButton } from "../ui/shiny-button";
import { Marquee } from "@/components/ui/marquee";

import { motion, useInView } from "framer-motion";

import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const getInitials = (name: string) => {
  if (!name) return "";
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const reviews = [
  {
    name: "EMERSON",
    body: "Excelente serviço. Indico!!!!!",
  },
  {
    name: "Jocimar C. Santos",
    body: "Excelente profissional!",
  },

  {
    name: "Rafael Navarro",
    body: "Excelente profissional, resultado excelente! Meu carro ficou sensacional, super recomendo à todos",
  },
  {
    name: "André Ricardo Scremin",
    body: "Muito bom! Preço ótimo e serviço ótimo!",
  },
  {
    name: "Jeyson Fernando",
    body: "Recomendo o trabalho do Marcio. Levei um bravo com farol fosco e amarelado. Saiu como novo.",
  },
  {
    name: "Gilson Gouveia da Silva Jr",
    body: "Ótimo atendimento e trabalho, o cara é top 😉",
  },
  {
    name: "Tadashi Maeoka",
    body: "Ótimo atendimento e qualidade no serviço! Indico a todos",
  },
  {
    name: "Rafael Ruan",
    body: "Serviço de qualidade, recomendo",
  },
  {
    name: "MrJonasg1",
    body: "Ótimo atendimento, trabalho excelente , realizei revitalização dos faróis do meu carro ,o resultado me surpreendeu!",
  },
  {
    name: "maycon douglas",
    body: "Excelente trabalho, já faz 6 meses e meu farol ainda continua novo!!",
  },
  {
    name: "Alexandra Reis",
    body: "Serviço impecável! Preço justo.. recomendo muito !",
  },
  {
    name: "Gilsseli Rosana",
    body: "Profissional maravilhoso e um trabalho de excelência , super indico",
  },
  {
    name: "Sandra Guimarães",
    body: "Excelente trabalho..",
  },
  {
    name: "Rodrigo Queirolo",
    body: "Excelente profissional! Indico a todos!",
  },
  {
    name: "Mario Gillieron Gavinho",
    body: "Excelente trabalho. Serviço profissional muito bem executado. Recomendo com certeza.",
  },
  {
    name: "paulo veiga",
    body: "Otimo profissional fiz o serviço de revitalizaçao dos farois e ficou 100%",
  },
  {
    name: "Marcos Lima",
    body: "Melhor estética de carro da Região, vale a pena trazer o seu carro, lugar seguro e com serviço de qualidade.",
  },
  {
    name: "Katia Cruz",
    body: "Super recomendo, trabalho impecável muito caprichoso.",
  },
  {
    name: "Agenor Fogaça",
    body: "Trabalho excelente! Meus faróis ficaram novos novamente.",
  },
  {
    name: "Seven Campervan",
    body: "Excelente trabalho! Os Faróis do carro aqui da empresa, estavam muito opaco e envelhecidos. O Trabalho realizado de restauração ficou Top demais! Recomendamos.",
  },
  {
    name: "Waldemar Moreira",
    body: "Muito satisfeito.",
  },
  {
    name: "Fabio Santos",
    body: "Ótimo profissional super cuidadoso usa produtos de ótima qualidade…parabéns pelo atendimento podem levar que não vão se arrepender.",
  },
  {
    name: "Cris Souza",
    body: "Ótimo profissional, detalhista , atencioso e serviço de qualidade",
  },
  {
    name: "Daniel Amorim",
    body: "Excelente profissional. Indico!",
  },
  {
    name: "pedro quintino",
    body: "Cliente assíduo a 4 anos já.. empresa com muita responsabilidade e ótimo trabalho no cuidado com seu carro.. recomendo muito",
  },
  {
    name: "Wesler Godoy",
    body: "Excelente serviço, carro fica incrível!!!! Recomendo muito!!",
  },
  {
    name: "Lincoln Kotovicz",
    body: "Serviço de primeira qualidade, recomendo... Carro ficou como novo!",
  },
  {
    name: "LIDIANE FARIAS",
    body: "Serviços impecável, caprichado, com carinho e dedicação que meu carro recebeu! Gratidão",
  },
  {
    name: "GP Car Centro de Treinamento Automotivo",
    body: "Muito boa didática, conhecimento e domínio do assunto. Eu comprovo e indico.",
  },
  {
    name: "L R",
    body: "Excelente serviço.",
  },

  {
    name: "clóvis Schneider",
    body: "Recomendo o trabalho da MSS Studio Car, profissional habilitado e trabalho TOP!!!",
  },
  {
    name: "Thiago Albuquerque",
    body: "Extremamente satisfeito,levei em alguns lugares que me condenaram o farol,o Márcio é um profissional muito qualificado e atencioso,estou muito satisfeito com o resultado do serviço e recomendo levar nele pra avaliar antes de qlqer substituição.",
  },
];

const testimonials = [
  {
    name: "Jadson Soares",
    role: "Aluno",
    content:
      "Queria deixar aqui meus agradecimentos pelo MSS_Studio Car fiz um curso de Polimento de Farol e Revitalização. Lugar agradável professor com muito conhecimento na área equipamentos de qualidade.. Recomendo para fazer o curso e para fazer um reparo no seu carro ou uma Revitalização de Farol no seu carro",
    studentImage: "/jadson-soares.jpg",
  },
  {
    name: "Gustavo",
    role: "GP Car Centro de Treinamento Automotivo",
    content:
      "Muito boa didática, conhecimento e domínio do assunto. Eu comprovo e indico.",
    studentImage: "/gustavo.jpg",
  },
];

const ReviewCard = ({ name, body }: { name: string; body: string }) => {
  const initials = getInitials(name);

  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-800/[.30] hover:bg-gray-950/[.05]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-black text-sm font-semibold">
          {initials}
        </div>

        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/80">{body}</blockquote>
    </figure>
  );
};

export default function Reviews() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <section id="avaliacoes" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 max-w-[1440px]">
        {/* Section Title and Subtitle */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.h2
            className="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-4"
            variants={itemVariants}
          >
            Avaliações de Clientes
          </motion.h2>

          <motion.div
            className="h-1 w-24 rounded-full bg-red-600 mx-auto mb-6"
            variants={itemVariants}
          />

          <motion.h3
            className="text-2xl font-medium tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text md:text-3xl lg:text-4xl max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Depoimentos de Sucesso
          </motion.h3>
        </motion.div>
      </div>

      {/* Carousel Comments */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-20 mb-20">
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/80 to-transparent" />
      </div>

      {/* Google Reviews button */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 max-w-[1440px]">
        <div className="text-center mb-24">
          <a
            href="https://g.page/r/CahbS7buR34pEAI/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShinyButton
              className="
                border-transparent
                bg-red-800 text-white
                hover:shadow-red-800
                focus:ring-red-500
              "
            >
              <div className="flex items-center justify-center gap-2">
                <FaGoogle className="size-4 sm:size-5 text-white" />
                <span className="text-white uppercase tracking-wide">
                  Nos avalie no Google!
                </span>
              </div>
            </ShinyButton>
          </a>
        </div>

        {/* Title of the Second Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl mb-4">
            Depoimentos do Curso
          </h2>

          <div className="h-1 w-24 rounded-full bg-red-600 mx-auto" />
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {testimonials.map((testimonial, idx) => {
            return (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden shadow-md bg-gray-800 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
              >
                {testimonial.studentImage && (
                  <div className="relative aspect-[4/3] w-full vignette">
                    <Image
                      src={testimonial.studentImage}
                      alt={`Foto do aluno ${testimonial.name}`}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent opacity-90">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="font-semibold text-xl">
                          {testimonial.name}
                        </h4>
                        <p className="text-base text-gray-300">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 text-white">
                  <q className="leading-relaxed text-lg">
                    {testimonial.content}
                  </q>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
