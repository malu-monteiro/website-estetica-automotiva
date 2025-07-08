import Image from "next/image";

import { Star } from "lucide-react";

import { COURSE_CONTENT } from "@/lib/constants/course";

import { WhatsappButton } from "./whatsapp-button";

export default function Banner() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      <Image
        src="/banner.webp"
        alt="Banner de Oferta de Curso de Polimento"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="brightness-50"
        priority
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container-layout text-center">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-12">
          <div className="flex flex-col items-center md:items-start text-white max-w-2xl md:text-left">
            <div className="inline-flex items-center gap-2 bg-automotive-yellow text-automotive-gray-dark px-4 py-2 rounded-full font-poppins font-semibold text-sm animate-pulse-soft mb-4">
              <Star className="w-4 h-4 fill-current" />
              OFERTA ESPECIAL!
            </div>

            <h2 className="font-poppins font-bold text-3xl md:text-4xl leading-tight mb-2">
              Curso de Restauração e Revitalização de Faróis
              <span className="text-automotive-yellow">
                {" "}
                de <span className="strike-x">R$797</span> por apenas{" "}
                <span className="text-green-500">R$597</span>
              </span>
            </h2>
            <p className="font-inter text-lg text-gray-200 leading-relaxed max-w-xl mx-auto md:mx-0">
              Aprenda técnicas profissionais de polimento de faróis e transforme
              seu tempo livre em uma nova fonte de renda!
            </p>
          </div>

          {/* WhatsApp Button */}
          {COURSE_CONTENT.intro.cta && (
            <WhatsappButton
              text="Inscreva-se agora!"
              whatsappMessage={COURSE_CONTENT.intro.cta.whatsappMessage}
              className="mt-6 md:mt-0 md:ml-auto"
            />
          )}
        </div>
      </div>
    </section>
  );
}
