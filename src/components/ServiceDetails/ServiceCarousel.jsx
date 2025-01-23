import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ServiceCarousel({ images, variants }) {
  return (
    <motion.div
      variants={variants}
      className="h-[400px] lg:h-[600px] bg-neutral-900/50 rounded-lg overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt="Polimento Automotivo"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
