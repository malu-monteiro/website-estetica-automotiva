import Image from "next/image";

import { motion } from "framer-motion";

import { ABOUT_CONTENT } from "@/lib/constants";
import { ANIMATION_VARIANTS } from "@/lib/animations";

export const InstructorCard = () => (
  <motion.div
    className="order-1 md:order-2 flex items-center justify-center md:justify-end"
    variants={ANIMATION_VARIANTS.card}
  >
    <div className="group relative w-full max-w-md">
      {/* Main card */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative overflow-hidden rounded-md"
      >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={ABOUT_CONTENT.instructor.image}
            alt={`${ABOUT_CONTENT.instructor.name}, ${ABOUT_CONTENT.instructor.role}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(33, 33, 33) 100%)",
            }}
          />
        </div>

        {/* Card content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-bold text-xl text-white mb-2">
            {ABOUT_CONTENT.instructor.name}
          </h3>

          <p className="text-gray-200 text-sm leading-relaxed">
            {ABOUT_CONTENT.instructor.role}
          </p>
        </div>
      </motion.div>
    </div>
  </motion.div>
);
