"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Sparkles, Star, UserCheck, Zap } from "lucide-react";
import Image from "next/image";
import { SERVICES_VARIANTS } from "@/lib/animations";
export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animationState = isInView ? "show" : "hidden";

  return (
    <section
      id="whyUs"
      className="relative py-20 bg-black text-neutral-100 overflow-hidden"
    >
      <motion.div
        ref={ref}
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-4 md:px-8 lg:px-16 xl:px-24"
        variants={SERVICES_VARIANTS.container}
        initial="hidden"
        animate={animationState}
      >
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
            <motion.h2
              variants={SERVICES_VARIANTS.item}
              className="font-syne uppercase text-3xl md:text-4xl font-semibold"
            >
              Por que escolher a MSS_STUDIO CAR?
            </motion.h2>
            <motion.p
              variants={SERVICES_VARIANTS.item}
              className="max-w-sm text-gray-300 sm:ml-auto text-lg font-light leading-relaxed"
            >
              Conheça os diferenciais que fazem nossos clientes voltarem sempre
            </motion.p>
          </div>
          <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
            <div className="relative h-96">
              <div className="bg-gradient-to-t z-1 from-black absolute inset-0 to-transparent" />

              <Image
                src="/herobg.png"
                alt="payments illustration"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            <motion.div variants={SERVICES_VARIANTS.item} className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="size-4" />
                <h3 className="text-sm font-medium">Atendimento Rápido</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Serviços com hora marcada e entrega no prazo, sem perder a
                qualidade no resultado
              </p>
            </motion.div>
            <motion.div variants={SERVICES_VARIANTS.item} className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4" />
                <h3 className="text-sm font-medium">Acabamento Impecável</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Cuidamos de cada detalhe para deixar seu carro com aparência de
                novo
              </p>
            </motion.div>
            <motion.div variants={SERVICES_VARIANTS.item} className="space-y-2">
              <div className="flex items-center gap-2">
                <Star className="size-4" />
                <h3 className="text-sm font-medium">
                  Produtos de Alta Qualidade
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Utilizamos apenas materiais profissionais e testados para
                garantir durabilidade
              </p>
            </motion.div>
            <motion.div variants={SERVICES_VARIANTS.item} className="space-y-2">
              <div className="flex items-center gap-2">
                <UserCheck className="size-4" />
                <h3 className="text-sm font-medium">Experiência e Confiança</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Anos de experiência em estética automotiva e centenas de
                clientes satisfeitos
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
