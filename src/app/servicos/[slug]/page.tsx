import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GalleryCarousel from "@/components/ui/gallery-carousel";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

import { CONTACT_INFO } from "@/lib/constants/contact";
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
    <>
      {/* Header Section */}
      <section className="header-banner">
        <Image
          src={service.headerImage}
          alt={`Banner do serviço ${service.title}`}
          fill
          className="object-cover object-center brightness-50"
          priority
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-black"
          aria-hidden="true"
        />

        <div className="relative z-10 container-layout">
          <h1 className="header-title">{service.title}</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-layout py-8 md:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="xl:col-span-1 order-2 xl:order-1">
            <div className="xl:sticky xl:top-24">
              {/* Navigation */}
              <div className="mb-8">
                <h2 className="font-semibold uppercase mb-4 text-gray-400 text-lg">
                  Nossos Serviços
                </h2>

                <nav className="flex flex-col space-y-2 border-l border-gray-700">
                  {allServices.map((navService) => (
                    <Link
                      key={navService.slug}
                      href={`/servicos/${navService.slug}`}
                      className={`pl-4 py-2 border-l-2 text-sm md:text-base transition-colors ${
                        slug === navService.slug
                          ? "border-red-500 font-semibold"
                          : "border-transparent text-gray-400 hover:text-white"
                      }`}
                    >
                      {navService.title}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* WhatsApp Contact Card */}
              <div className="p-4 md:p-6 border border-gray-700 rounded-lg bg-gray-900/50">
                <h4 className="text-lg md:text-xl font-bold mb-2">
                  Precisa de Ajuda?
                </h4>
                <p className="text-sm text-gray-400 mb-6">
                  Fale com um de nossos especialistas e tire suas dúvidas.
                </p>

                {CONTACT_INFO.cta && (
                  <WhatsappButton
                    text={CONTACT_INFO.cta.text}
                    whatsappMessage={CONTACT_INFO.cta.whatsappMessage}
                    className="w-full border-transparent bg-green-600 hover:shadow-green-800 py-3 px-4 xl:py-2 xl:px-3"
                  />
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="xl:col-span-3 order-1 xl:order-2">
            <article>
              {/* Service Description */}
              <header className="mb-8 md:mb-12">
                <h2 className="section-title mb-4 md:mb-6">
                  {service.mainTitle}
                </h2>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {service.longDescription}
                </p>
              </header>

              {/* Process Steps */}
              <section className="mb-12 md:mb-16">
                <h3 className="section-title mb-6 md:mb-8">Nosso Processo</h3>
                <Accordion type="single" collapsible className="w-full">
                  {service.processSteps.map((step, index) => (
                    <AccordionItem
                      key={`process-${index}`}
                      value={`item-${index}`}
                    >
                      <AccordionTrigger className="text-left text-base md:text-lg hover:no-underline">
                        {step.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm md:text-base text-gray-400">
                        {step.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Separator */}
              <div className="h-[1px] w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 md:mb-16" />

              {/* Gallery Section */}
              <section>
                <h2 className="section-title mb-6 md:mb-8 text-center">
                  Galeria de Resultados
                </h2>
                {service.galleryImages && service.galleryImages.length > 0 && (
                  <div className="max-w-4xl mx-auto">
                    <GalleryCarousel
                      images={service.galleryImages}
                      variants={carouselVariants}
                    />
                  </div>
                )}
              </section>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
