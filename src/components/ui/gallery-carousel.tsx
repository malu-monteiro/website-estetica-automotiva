"use client";

import Image from "next/image";

import { useRef, useState } from "react";

import { motion, Variants } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface GalleryCarouselProps {
  images: string[];
  variants?: Variants;
}

export default function GalleryCarousel({
  images,
  variants,
}: GalleryCarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const mainSwiperRef = useRef<SwiperClass | null>(null);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <motion.div
      variants={variants}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative w-full max-w-2xl lg:max-w-3xl mx-auto rounded-xl overflow-hidden"
    >
      {/* Main Carousel */}
      <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[380px] xl:h-[400px] mb-4">
        <Swiper
          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;
          }}
          spaceBetween={10}
          navigation={false}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-full rounded-lg"
        >
          {images.map((image: string, index: number) => (
            <SwiperSlide key={`main-${index}`}>
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Imagem do serviço ${index + 1}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              className="absolute top-1/2 left-3 -translate-y-1/2 p-1.5 bg-red-800/80 rounded-full hover:bg-red-700 transition-colors backdrop-blur-sm z-10"
              onClick={() => mainSwiperRef.current?.slidePrev()}
              aria-label="Slide anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              className="absolute top-1/2 right-3 -translate-y-1/2 p-1.5 bg-red-800/80 rounded-full hover:bg-red-700 transition-colors backdrop-blur-sm z-10"
              onClick={() => mainSwiperRef.current?.slideNext()}
              aria-label="Próximo slide"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Miniatures */}
      {images.length > 1 && (
        <div className="h-[60px] sm:h-[70px] md:h-[75px] lg:h-[80px]">
          <Swiper
            onSwiper={(swiper) => {
              if (swiper && !swiper.destroyed) {
                setThumbsSwiper(swiper);
              }
            }}
            spaceBetween={8}
            slidesPerView={3}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-full"
          >
            {images.map((image: string, index: number) => (
              <SwiperSlide key={`thumb-${index}`}>
                <div className="relative w-full h-full rounded-md overflow-hidden">
                  <Image
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    className="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </motion.div>
  );
}
