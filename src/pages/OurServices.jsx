import { useNavigate } from "react-router-dom";
import { services, servicesHeader } from "../constants";
import ServicesCard from "../components/ServicesCard";
import PropTypes from "prop-types";

export default function OurServices() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    if (service) {
      navigate(service.path);
    }
  };

  const { title, highlight, subtitle } = servicesHeader;

  return (
    <section id="services" className="relative scroll-mt-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/realistic-shiny-focus-light-effect-dark-background_1017-55407.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 min-h-[800px] w-full border-b border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-20">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-300">
                {title} <span className="text-red-500">{highlight}</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-2xl mx-auto mt-2 sm:mt-3">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className="group transition-all duration-300 hover:scale-105 transform"
              >
                <ServicesCard
                  service={service}
                  onClick={handleServiceClick}
                  className="group-hover:border-red-500 group-hover:shadow-xl group-hover:shadow-red-900/20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

OurServices.propTypes = {
  servicesHeader: PropTypes.shape({
    title: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
