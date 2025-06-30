"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceCarouselItem {
  slug: string;
  title: string;
  description: string;
  link: string;
  image: string;
  objectPosition?: string;
}

interface ServiceCarouselProps {
  items: ServiceCarouselItem[];
}

export const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ items }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex-none w-80 md:w-96">
              <Link
                href={`/servicos/${item.slug}`}
                className="group block h-[450px] w-full overflow-hidden rounded-md shadow-xl transition-transform duration-300 "
              >
                <div className="relative h-full z-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-cover ${
                      item.objectPosition || "object-center"
                    } transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75`}
                  />

                  <div
                    className="absolute inset-0 p-6 flex flex-col justify-end"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(33, 33, 33) 100%)",
                      opacity: 1,
                      willChange: "auto",
                    }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-2 text-start">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-300 mb-4 line-clamp-2 text-start">
                      {item.description}
                    </p>

                    <div className="flex items-center text-white font-semibold uppercase text-sm group-hover:text-red-800 transition-colors">
                      <div className="relative w-4 h-4 mr-3 flex items-center justify-center">
                        <span className="absolute w-full h-0.5 bg-red-800 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                        <span className="absolute w-full h-0.5 bg-red-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-150" />
                      </div>
                      Saiba Mais
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-gray-800/80 rounded-full text-white hover:bg-gray-700 transition-colors backdrop-blur-sm"
        onClick={scrollPrev}
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-gray-800/80 rounded-full text-white hover:bg-gray-700 transition-colors backdrop-blur-sm"
        onClick={scrollNext}
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
