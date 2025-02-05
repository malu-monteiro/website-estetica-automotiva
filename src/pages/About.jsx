import { about, socialMedia } from "../constants/index";
import { Button } from "../components/Button";
import PropTypes from "prop-types";

export default function About() {
  const aboutData = about[0] || {};
  const { title, subtitle, highlight, description, image } = aboutData;
  const { href, icon, text } = socialMedia[0] || {};

  return (
    <section
      id="about"
      className="scroll-mt-36 mt-12 md:mt-24 mb-12 md:mb-24 relative border-b border-neutral-800 min-h-[800px] md:min-h-[600px] lg:min-h-[700px] flex items-center pb-16"
    >
      <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto px-4 sm:px-8 mt-6 md:mt-0 gap-8 md:gap-12">
        {/* Imagem */}
        <div className="w-full lg:w-2/5 flex flex-col items-start justify-start">
          <img
            src={image}
            alt="Sobre nós"
            className="w-full h-48 sm:h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Texto e botão */}
        <div className="w-full lg:w-3/5 mt-8 lg:mt-0">
          <h3 className="text-center sm:text-left text-xl sm:text-4xl lg:text-5xl font-bold">
            {title}
          </h3>
          <p className="text-center sm:text-left text-lg sm:text-2xl lg:text-4xl font-bold mt-4">
            {subtitle} <span className="text-red-600">{highlight}</span>
          </p>

          <div className="bg-neutral-900/50 p-4 rounded-lg mt-6">
            <p className="text-base sm:text-base md:text-lg text-justify leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex justify-center sm:justify-start mt-8 md:mt-8">
            <Button
              href={href}
              icon={icon}
              aria-label={`Connect on ${text}`}
              className="w-58 sm:w-auto"
            >
              {text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  about: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      highlight: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
