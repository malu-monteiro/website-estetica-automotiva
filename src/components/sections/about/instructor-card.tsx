import Image from "next/image";

import { motion } from "framer-motion";

import { HOME_ABOUT_CONTENT } from "@/lib/constants/about";
import { ANIMATION_MAIN_VARIANTS } from "@/lib/animations";

export const InstructorCard = () => (
  <motion.div
    className="order-1 md:order-2 flex items-center justify-center md:justify-end"
    variants={ANIMATION_MAIN_VARIANTS.card}
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
            src={HOME_ABOUT_CONTENT.instructor.image}
            alt={`${HOME_ABOUT_CONTENT.instructor.name}, ${HOME_ABOUT_CONTENT.instructor.role}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        </div>

        {/* Card content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-bold text-xl mb-2">
            {HOME_ABOUT_CONTENT.instructor.name}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed">
            {HOME_ABOUT_CONTENT.instructor.role}
          </p>
        </div>
      </motion.div>
    </div>
  </motion.div>
);
