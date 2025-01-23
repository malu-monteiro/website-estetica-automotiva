import { useState } from "react";

import PropTypes from "prop-types";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ServiceCarousel({
  images,
  variants,
  altText = "Service Image",
}) {
  const [loading, setLoading] = useState(true);

  const swiperProps = {
    modules: [Autoplay, Navigation],
    navigation: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    className: "w-full h-full",
  };

  return (
    <motion.div
      variants={variants}
      className="h-[400px] lg:h-[600px] bg-neutral-900/50 rounded-lg overflow-hidden"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600" />
        </div>
      )}

      <Swiper {...swiperProps}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`${altText} ${index + 1}`}
              className="w-full h-full object-cover"
              onLoad={() => setLoading(false)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

ServiceCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  variants: PropTypes.object.isRequired,
  altText: PropTypes.string,
};
