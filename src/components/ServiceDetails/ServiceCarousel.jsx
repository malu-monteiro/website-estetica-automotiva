import { useState } from "react";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import PropTypes from "prop-types";

export default function ServiceCarousel({ images, variants }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);

  return (
    <motion.div
      variants={variants}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full rounded-xl overflow-hidden"
    >
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
        onSlideChange={({ realIndex }) => setActiveThumbIndex(realIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`main-${index}`}>
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={`Imagem do serviço ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-[100px] mt-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`thumb-${index}`}>
            <div
              className={`relative w-full h-full cursor-pointer rounded-lg overflow-hidden border-2 border-transparent ${
                activeThumbIndex === index
                  ? "swiper-thumb-active"
                  : "swiper-thumb"
              }`}
            >
              <img
                src={image}
                alt={`Miniatura do serviço ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-all duration-300"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

ServiceCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  variants: PropTypes.object,
};

ServiceCarousel.defaultProps = {
  images: [],
  variants: {},
};
