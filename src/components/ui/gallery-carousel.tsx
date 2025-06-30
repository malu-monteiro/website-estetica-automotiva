"use client";

import Image from "next/image";

import { useRef, useState } from "react";

import { motion, Variants } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryCarouselProps {
  images: string[];
  variants?: Variants;
}

export default function GalleryCarousel({
  images,
  variants,
}: GalleryCarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <motion.div
      variants={variants}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative w-11/12 mx-auto rounded-xl overflow-hidden h-[500px] md:h-[600px] lg:h-[700px]"
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        style={
          {
            "--swiper-navigation-color": "#ef4444",
            "--swiper-pagination-color": "#ef4444",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image: string, index: number) => (
          <SwiperSlide key={`main-${index}`}>
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`Imagem do serviço ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                layout="fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {images.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-red-800/80 rounded-full text-white hover:bg-red-700 transition-colors backdrop-blur-sm z-10"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-red-800/80 rounded-full text-white hover:bg-red-700 transition-colors backdrop-blur-sm z-10"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-2"
      >
        {images.map((image: string, index: number) => (
          <SwiperSlide key={`thumb-${index}`}>
            <Image
              src={image}
              alt={`Miniatura ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              layout="fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
