import { motion } from "framer-motion";

import ServiceCarousel from "../../components/ServiceDetails/ServiceCarousel";

import {
  containerVariants,
  itemVariants,
  listItemVariants,
} from "../../constants/animations";
import { polimentoData } from "../../constants";

export default function Polimento() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-12"
    >
      <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        <ServiceCarousel
          images={polimentoData.images}
          variants={itemVariants}
        />

        {/* Right Column - Content */}
        <div className="space-y-12">
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-5xl lg:text-6xl font-bold mb-12"
          >
            {polimentoData.title}
          </motion.h2>

          {/* ...content sections... */}
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="bg-neutral-900/50 p-6 rounded-lg"
            >
              <h3 className="text-lg sm:text-2xl font-semibold mb-4 flex items-center">
                Finalidade
              </h3>

              <motion.ul className="list-none space-y-3 text-base sm:text-lg">
                {polimentoData.finalidade.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listItemVariants}
                    className="flex items-start"
                  >
                    <span className="text-red-600 mr-2">→</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-neutral-900/50 p-6 rounded-lg"
            >
              <h3 className="text-lg sm:text-2xl font-semibold mb-4 flex items-center">
                Benefícios
              </h3>
              <motion.ul className="list-none space-y-3 text-base sm:text-lg">
                {polimentoData.beneficios.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listItemVariants}
                    className="flex items-start"
                  >
                    <span className="text-red-600 mr-2">→</span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
