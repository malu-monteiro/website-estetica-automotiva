import { about, socialMedia } from "../constants/index";
import { Button } from "../components/Button";

import PropTypes from "prop-types";

export default function About() {
  const { title, subtitle, highlight, description, image } = about;
  const { href, icon, text } = socialMedia;

  return (
    <section
      id="about"
      className="scroll-mt-36 relative border-b border-neutral-800 min-h-[600px]"
    >
      <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto px-8 mt-20 gap-12">
        <div className="lg:w-2/5 flex flex-col items-start justify-start">
          <img
            src={image}
            alt="Sobre nós"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="lg:w-3/5 mt-10 lg:mt-0">
          <h3 className="text-xl sm:text-5xl lg:text-6xl font-bold">{title}</h3>
          <p className="text-xl md:text-2xl lg:text-6xl font-bold">
            {subtitle} <span className="text-red-600">{highlight}</span>
          </p>

          <div className="bg-neutral-900/50 p-4 rounded-lg mt-6">
            <p className="text-base md:text-lg text-justify leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex justify-start mt-8 md:mt-10">
            <Button href={href} icon={icon} aria-label={`Connect on ${text}`}>
              {text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  about: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  socialMedia: PropTypes.shape({
    href: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
