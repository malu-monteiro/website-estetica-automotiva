import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { FaWhatsapp } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShinyButton } from "@/components/ui/shiny-button";
import GalleryCarousel from "@/components/ui/gallery-carousel";

import { SERVICES_CONTENT } from "@/lib/constants/services";

export async function generateStaticParams() {
  return SERVICES_CONTENT.services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = SERVICES_CONTENT.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const allServices = SERVICES_CONTENT.services;

  const carouselVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <main className="bg-black text-white">
      {/* Image Header and Title */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        <Image
          src={service.headerImage}
          alt={`Banner do serviço ${service.title}`}
          fill
          className="object-cover brightness-50"
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-24">
          <h1 className="font-syne relative z-10 text-5xl md:text-7xl font-bold uppercase tracking-wider">
            {service.title}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 xl:px-24 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Left column: Navigation and contact */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <h3 className="font-semibold mb-4 text-gray-400">
              Nossos Serviços
            </h3>

            <nav className="flex flex-col space-y-2 border-l border-gray-700">
              {allServices.map((navService) => (
                <Link
                  key={navService.slug}
                  href={`/servicos/${navService.slug}`}
                  className={`pl-4 py-2 border-l-2 text-md transition-colors ${
                    slug === navService.slug
                      ? "border-red-500 text-white font-semibold" // Active item style
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  {navService.title}
                </Link>
              ))}
            </nav>

            {/* WhatsApp Button */}
            <div className="mt-8 p-4 border border-gray-700 rounded-md bg-gray-900/50">
              <h4 className="text-xl font-bold">Precisa de Ajuda?</h4>
              <p className="text-sm text-gray-400 mt-2 mb-4">
                Fale com um de nossos especialistas e tire suas dúvidas.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
                <a
                  href="https://wa.me/5541999346385?text=Olá!%20Gostaria%20de%20mais%20informações."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShinyButton className="border-transparent bg-green-600 text-white hover:shadow-green-800 py-2 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <FaWhatsapp className="size-4 sm:size-5 text-white" />
                      <span className="text-white text-sm">
                        Entre em contato
                      </span>
                    </div>
                  </ShinyButton>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Right column: Content */}
        <div className="lg:col-span-3">
          <article>
            <h2 className="font-syne text-4xl font-bold mb-4">
              {service.mainTitle}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {service.longDescription}
            </p>

            <h3 className="font-syne text-3xl font-bold mt-12 mb-6">
              Nosso Processo
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {service.processSteps.map((step, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg hover:no-underline">
                    {step.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-400">
                    {step.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </article>

          {/* Separator */}
          <div className="h-[1px] w-3/4 mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />

          {/* Gallery */}
          <section>
            <h2 className="font-syne text-4xl font-bold mb-8 text-center">
              Galeria de Resultados
            </h2>
            {service.galleryImages && service.galleryImages.length > 0 && (
              <GalleryCarousel
                images={service.galleryImages}
                variants={carouselVariants}
              />
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
