import { motion } from "framer-motion";

import ServiceCarousel from "../../components/ServiceDetails/ServiceCarousel";
import ServiceList from "../../components/ServiceDetails/ServiceList";

import { containerVariants, itemVariants } from "../../constants/animations";
import { polimentoData } from "../../constants";

export default function Polimento() {
  // Initialize animation container for children animations
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-12"
    >
      {/* Two-column layout: Carousel (left) and Content (right) */}
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Auto-playing carousel with navigation controls */}
        <ServiceCarousel
          images={polimentoData.images}
          variants={itemVariants}
        />

        {/* Content section with animation on scroll */}
        <div className="space-y-8">
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-5xl lg:text-6xl font-bold mb-12"
          >
            {polimentoData.title}
          </motion.h2>

          <div className="space-y-8">
            <ServiceList title="Finalidade" items={polimentoData.finalidade} />
            <ServiceList title="Benefícios" items={polimentoData.beneficios} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
