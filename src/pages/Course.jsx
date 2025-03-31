import { FaWhatsapp } from "react-icons/fa6";
import {
  FaCheckCircle,
  FaMedal,
  FaCar,
  FaGraduationCap,
  FaTools,
} from "react-icons/fa";
import { Button } from "../components/Button";
import { courseData } from "../constants";
import PropTypes from "prop-types";

export default function Course() {
  const {
    title,
    subtitle,
    features,
    staticTexts,
    whatsappButton = {
      href: "https://wa.me/41999346385",
      text: "WhatsApp",
      icon: FaWhatsapp,
      ariaLabel: "Conversar no WhatsApp",
      className:
        "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105",
    },
  } = courseData;

  return (
    <section
      id="course"
      className="scroll-mt-36 relative bg-[#121212] overflow-hidden"
    >
      <div className="relative border-b border-neutral-800 min-h-screen flex items-center py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500">
              {title}
            </h2>
            <p className="text-xl sm:text-2xl mt-4 text-neutral-300">
              {subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-neutral-900/70 backdrop-blur-md rounded-xl border border-neutral-800 shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-white flex items-center">
                    <span className="w-8 h-8 flex items-center justify-center bg-red-600/20 rounded-full mr-3">
                      <FaTools className="text-red-400" />
                    </span>
                    {staticTexts.techniquesTitle}
                  </h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start group transition-all duration-300 transform hover:scale-105"
                      >
                        <span className="flex-shrink-0 mt-1 mr-3 text-red-500 opacity-90 group-hover:opacity-100 transition-opacity">
                          <FaCheckCircle className="w-5 h-5" />
                        </span>
                        <span className="text-neutral-300 group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}

                    <li className="flex items-start group transition-all duration-300 transform hover:scale-105">
                      <span className="flex-shrink-0 mt-1 mr-3 text-red-500 opacity-90 group-hover:opacity-100 transition-opacity">
                        <FaGraduationCap className="w-5 h-5" />
                      </span>
                      <span className="text-neutral-300 group-hover:text-white transition-colors">
                        {staticTexts.certificateText}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] border border-neutral-800 rounded-lg p-6 relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-28 h-28 bg-red-600/10 rounded-full filter blur-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-900/30 rounded-full border border-red-800/50">
                      <FaMedal className="text-red-400 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-white mb-2">
                      {staticTexts.premiumTitle}
                    </h3>
                    <p className="text-neutral-400 text-center text-sm mb-4">
                      {staticTexts.premiumDescription}
                    </p>
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center border border-neutral-700"
                        >
                          <FaCar className="text-red-400 w-5 h-5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 py-6 bg-gradient-to-r from-[#1a1a1a] to-[#121212] border-t border-neutral-800">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {staticTexts.ctaTitle}{" "}
                    <span className="text-red-400">
                      {staticTexts.ctaHighlight}
                    </span>
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    {staticTexts.ctaDescription}
                  </p>
                </div>
                <Button
                  href={whatsappButton.href}
                  icon={whatsappButton.icon}
                  aria-label={whatsappButton.ariaLabel}
                  className={`${whatsappButton.className} px-8 py-3 text-lg font-bold hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-900/30`}
                  iconPosition="left"
                >
                  {whatsappButton.text}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Course.propTypes = {
  whatsappButton: PropTypes.shape({
    href: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
};
