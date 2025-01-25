import { motion } from "framer-motion";

// import ServiceCarousel from "../../components/ServiceDetails/ServiceCarousel";
import ServiceList from "../../components/ServiceDetails/ServiceList";

import { containerVariants, itemVariants } from "../../constants/animations";
import { higienizacaoData } from "../../constants";

// adicionar imagens no carrossel

export default function HigienizacaoInterna() {
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
        {/* <ServiceCarousel
          // images={higienizacaoData.images}
          variants={itemVariants}
        /> */}

        {/* Content section with animation on scroll */}
        <div className="space-y-8">
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8"
          >
            {higienizacaoData.title}
          </motion.h2>

          <div className="space-y-8">
            <ServiceList
              title="Finalidade"
              items={higienizacaoData.finalidade}
            />
            <ServiceList
              title="Benefícios"
              items={higienizacaoData.beneficios}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
