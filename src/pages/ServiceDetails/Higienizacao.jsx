import { motion } from "framer-motion";

import ServiceList from "../../components/ServiceDetails/ServiceList";
import ServiceCarousel from "../../components/ServiceDetails/ServiceCarousel";

import { higienizacaoData } from "../../constants";
import { containerVariants, itemVariants } from "../../constants/animations";

export default function Higienizacao() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-8"
    >
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        <ServiceCarousel
          images={higienizacaoData.images}
          variants={itemVariants}
        />

        <div className="space-y-6">
          <div className="flex items-center justify-between ">
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold mb-4"
            >
              {higienizacaoData.title}
            </motion.h2>
          </div>

          <div className="space-y-4">
            <ServiceList
              title="Finalidade"
              items={higienizacaoData.finalidade}
            />
            <ServiceList
              title="Benefícios"
              items={higienizacaoData.beneficios}
            />
            <ServiceList title="Processo" items={higienizacaoData.processo} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
