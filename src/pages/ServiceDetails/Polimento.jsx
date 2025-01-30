import { motion } from "framer-motion";

import ServiceList from "../../components/ServiceDetails/ServiceList";
import ServiceCarousel from "../../components/ServiceDetails/ServiceCarousel";

import { polimentoData } from "../../constants";
import { containerVariants, itemVariants } from "../../constants/animations";

import Scheduling from "../../components/Scheduling";

export default function Polimento() {
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
          <div className="flex items-center justify-between ">
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold mb-4"
            >
              {polimentoData.title}
            </motion.h2>
            <Scheduling initialService={polimentoData.title} />
          </div>

          <div className="space-y-4">
            <ServiceList title="Finalidade" items={polimentoData.finalidade} />
            <ServiceList title="Benefícios" items={polimentoData.beneficios} />
            <ServiceList title="Processo" items={polimentoData.processo} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
