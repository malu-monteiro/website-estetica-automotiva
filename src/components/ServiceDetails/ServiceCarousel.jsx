import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropTypes from "prop-types";

export default function ServiceCarousel({ images, variants }) {
  return (
    <motion.div
      variants={variants}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full rounded-xl overflow-hidden"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        className="swiper-container w-full rounded-xl"
        resistanceRatio={0.85}
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
