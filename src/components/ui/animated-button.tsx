import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface AnimatedButtonProps
  extends Omit<
    HTMLMotionProps<"button">,
    "onDrag" | "onDragStart" | "onDragEnd" | "onDragCancel"
  > {
  className?: string;
  children: React.ReactNode;
}

export const AnimatedButton = ({
  children,
  className,
  ...props
}: AnimatedButtonProps) => (
  <div className="group relative">
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative flex items-center justify-center gap-2
                 rounded-lg border bg-zinc-800 border-zinc-700 shadow-md
                 px-6 py-2 font-medium text-sm uppercase tracking-wide
                 transition-all duration-300 sm:px-8 sm:py-3 text-white
                 overflow-hidden transform origin-center ${className || ""}`}
      {...props}
    >
      {/* Shiny Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

      {/* Animated Icon */}
      <div className="relative w-4 h-4 mr-3 flex items-center justify-center">
        <span className="absolute w-full h-0.5 bg-red-800 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
        <span className="absolute w-full h-0.5 bg-red-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-150" />
      </div>

      <span className="relative z-10">{children}</span>
    </motion.button>

    {/* Button Shadow */}
    <div className="absolute inset-0 bg-gray-700/10 rounded-lg blur-xl opacity-0 transition-opacity duration-300 -z-10 transform scale-100 group-hover:scale-[1.10] group-hover:opacity-100" />
  </div>
);
