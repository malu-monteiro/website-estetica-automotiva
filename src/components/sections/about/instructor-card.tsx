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
      {/* Background blur effect */}
      <div
        className="absolute -bottom-12 left-1/2 z-0 h-48 w-96 -translate-x-1/2 rounded-full blur-3xl bg-radial-gradient-wine-light"
        aria-hidden="true"
      />
      {/* Main card with dark border */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative p-1 rounded-2xl bg-zinc-800"
      >
        {/* Inner card container */}
        <div className="relative overflow-hidden rounded-xl bg-black">
          {/* Image container */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={HOME_ABOUT_CONTENT.instructor.image}
              alt={`${HOME_ABOUT_CONTENT.instructor.name}, ${HOME_ABOUT_CONTENT.instructor.role}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
          </div>

          {/* Card content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 pt-8">
            <h3 className="mb-2 text-xl font-bold text-white">
              {HOME_ABOUT_CONTENT.instructor.name}
            </h3>

            <p className="text-sm leading-relaxed text-gray-300">
              {HOME_ABOUT_CONTENT.instructor.role}
            </p>
          </div>
        </div>

        {/* Red line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[31%] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_20px_rgb(110, 2, 2)]" />
      </motion.div>
    </div>
  </motion.div>
);
