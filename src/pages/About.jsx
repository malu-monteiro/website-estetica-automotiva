import { about, socialMedia } from "../constants/index";
import { Button } from "../components/Button";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function AboutImage({ image }) {
  return (
    <motion.div
      className="w-full px-4 sm:px-0 lg:w-2/5 flex justify-center"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative group w-full max-w-md">
        <div className="relative overflow-hidden rounded-xl shadow-2xl border border-neutral-800 transform group-hover:-translate-y-2 transition-transform duration-300">
          <img
            src={image}
            alt="Sobre nós"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-red-500/30 transition-all duration-500"></div>
        </div>
      </div>
    </motion.div>
  );
}

function AboutText({
  title,
  subtitle,
  highlight,
  description,
  href,
  icon,
  text,
}) {
  return (
    <div className="w-full lg:w-1/2 space-y-8 px-4 sm:px-0 text-center lg:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="inline-block relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-300">
            {title}
          </h2>
        </div>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-4 text-neutral-300">
          {subtitle} <span className="text-red-500">{highlight}</span>
        </p>
      </motion.div>

      <motion.div
        className="bg-neutral-900/70 backdrop-blur-sm p-6 rounded-xl border border-neutral-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
          {description}
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center lg:justify-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Button
          href={href}
          icon={icon}
          aria-label={`Connect on ${text}`}
          className="px-8 py-3 text-lg bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 relative z-20"
        >
          {text}
        </Button>
      </motion.div>
    </div>
  );
}

export default function About() {
  const aboutData = about[0] || {};
  const { title, subtitle, highlight, description, image } = aboutData;
  const { href, icon, text } = socialMedia[0] || {};

  return (
    <section id="about" className="scroll-mt-36 relative bg-[#121212]">
      <div className="border-b border-neutral-800 min-h-[800px] flex items-center">
        <div className="container mx-auto px-6 py-12 md:px-8 md:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12">
            <AboutImage image={image} />
            <AboutText
              title={title}
              subtitle={subtitle}
              highlight={highlight}
              description={description}
              href={href}
              icon={icon}
              text={text}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

AboutText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  highlight: PropTypes.string,
  description: PropTypes.string.isRequired,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  text: PropTypes.string,
};

AboutImage.propTypes = {
  image: PropTypes.string.isRequired,
};
