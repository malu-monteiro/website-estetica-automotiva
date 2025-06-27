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
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl border border-gray-700/50 w-full"
      >
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={ABOUT_CONTENT.instructor.image}
            alt={`${ABOUT_CONTENT.instructor.name}, ${ABOUT_CONTENT.instructor.role}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
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

      {/* Shadow effect */}
      <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  </motion.div>
);
