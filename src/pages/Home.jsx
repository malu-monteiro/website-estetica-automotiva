import { motion } from "framer-motion";
import { homeData, whatsappBase } from "../constants/index.jsx";
import { features } from "../constants";
import { FeatureList } from "../components/FeatureList";
import { Button } from "../components/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const { title, subtitle, description, backgroundImage, button } = homeData;

  return (
    <section
      id="home"
      className="scroll-mt-24 w-full h-screen flex flex-col items-start bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.header
        className="ml-6 mt-8 md:ml-[200px] md:mt-[130px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-xl md:text-xl text-white font-bold"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className="bg-gradient-to-r from-white to-gray-450 text-transparent bg-clip-text text-3xl md:text-5xl font-bold"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>

        <motion.p
          className="mt-4 text-white text-base sm:text-lg max-w-[280px] md:max-w-lg leading-normal md:leading-relaxed"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex justify-start my-6 md:my-10 gap-4"
          variants={itemVariants}
        >
          <Button
            href={whatsappBase.href}
            icon={whatsappBase.icon}
            aria-label={whatsappBase.ariaLabel}
            className={`${whatsappBase.className} hover:scale-105 transition-transform`}
            iconPosition="left"
          >
            WhatsApp
          </Button>

          <Button
            href={button.href}
            className="ml-3 hover:scale-105 transition-transform"
            icon={button.icon}
            aria-label={button.ariaLabel}
          >
            {button.text}
          </Button>
        </motion.div>

        <motion.div variants={itemVariants}>
          <FeatureList features={features} />
        </motion.div>
      </motion.header>
    </section>
  );
}
