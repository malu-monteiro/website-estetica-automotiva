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
      className="container mx-auto px-4 py-8"
    >
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        <ServiceCarousel
          images={polimentoData.images}
          variants={itemVariants}
        />

        <div className="space-y-6">
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-bold mb-4"
          >
            {polimentoData.title}
          </motion.h2>

          <div className="space-y-4">
            <ServiceList title="Finalidade" items={polimentoData.finalidade} />
            <ServiceList title="Benefícios" items={polimentoData.beneficios} />
            <ServiceList title="Benefícios" items={polimentoData.beneficios} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
