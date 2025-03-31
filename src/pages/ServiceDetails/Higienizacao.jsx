import { motion } from "framer-motion";
import { Button } from "../../components/Button";
import ServiceList from "../../components/ServiceDetails/ServiceList";
import ServiceCarousel from "../../components/ServiceDetails/ServiceCarousel";
import { higienizacaoData } from "../../constants";
import { containerVariants, itemVariants } from "../../constants/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faStar, faTools } from "@fortawesome/free-solid-svg-icons";

export default function Higienizacao() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#121212] py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-300 mb-4">
            {higienizacaoData.title}
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-neutral-300 max-w-2xl mx-auto">
            Revitalização profissional para o interior do seu veículo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="lg:sticky lg:top-8">
            <ServiceCarousel
              images={higienizacaoData.images}
              variants={itemVariants}
            />
          </div>

          <motion.div variants={itemVariants} className="space-y-6 ">
            <ServiceList
              title="Finalidade"
              items={higienizacaoData.finalidade}
              icon={<FontAwesomeIcon icon={faCog} className="text-red-500" />}
            />
            <ServiceList
              title="Benefícios"
              items={higienizacaoData.beneficios}
              icon={<FontAwesomeIcon icon={faStar} className="text-red-500" />}
            />
            <ServiceList
              title="Processo"
              items={higienizacaoData.processo}
              icon={<FontAwesomeIcon icon={faTools} className="text-red-500" />}
            />

            <div className="pt-4">
              <Button
                href="https://wa.me/41999346385"
                className="bg-green-600 hover:bg-green-700 w-fit text-white font-medium py-1 px-3"
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
