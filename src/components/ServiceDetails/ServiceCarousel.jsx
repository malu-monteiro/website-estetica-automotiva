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

  return (
    <motion.div
      variants={variants}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full rounded-xl overflow-hidden"
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#ef4444",
          "--swiper-pagination-color": "#ef4444",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="service-swiper-main"
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
        className="service-swiper-thumbs mt-2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`thumb-${index}`}>
            <img
              src={image}
              alt={`Miniatura ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
            />
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
