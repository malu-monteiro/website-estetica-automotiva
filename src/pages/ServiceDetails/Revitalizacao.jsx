import { useEffect } from "react";

import { motion } from "framer-motion";
import { Button } from "../../components/Button";
import ServiceList from "../../components/ServiceDetails/ServiceList";
import ServiceCarousel from "../../components/ServiceDetails/ServiceCarousel";
import { revitalizacaoData, whatsappBase } from "../../constants";
import { containerVariants, itemVariants } from "../../constants/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faStar, faTools } from "@fortawesome/free-solid-svg-icons";

export default function Revitalizacao() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-[#121212] py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-300 mb-4">
            {revitalizacaoData.title}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-neutral-300 max-w-2xl mx-auto">
            {revitalizacaoData.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <ServiceCarousel
              images={revitalizacaoData.images}
              variants={itemVariants}
            />
          </div>

          <motion.div
            variants={itemVariants}
            className="space-y-4 w-full max-w-md mx-auto lg:max-w-none"
          >
            <ServiceList
              title="Finalidade"
              items={revitalizacaoData.finalidade}
              icon={<FontAwesomeIcon icon={faCog} className="text-red-500" />}
            />
            <ServiceList
              title="Benefícios"
              items={revitalizacaoData.beneficios}
              icon={<FontAwesomeIcon icon={faStar} className="text-red-500" />}
            />
            <ServiceList
              title="Processo"
              items={revitalizacaoData.processo}
              icon={<FontAwesomeIcon icon={faTools} className="text-red-500" />}
            />

            <div className="pt-4">
              <Button
                href={whatsappBase.href}
                icon={whatsappBase.icon}
                aria-label={whatsappBase.ariaLabel}
                className={`${whatsappBase.className} w-fit hover:scale-105 transition-transform`}
                iconPosition="left"
              >
                Agendar via WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
