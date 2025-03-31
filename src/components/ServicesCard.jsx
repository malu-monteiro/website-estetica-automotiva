import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

export default function ServicesCard({ service, className = "", onClick }) {
  return (
    <div
      className={`bg-neutral-900/80 border border-gray-800 rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 cursor-pointer group ${className}`}
      onClick={() => onClick(service.id)}
    >
      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
          <span className="text-white font-medium flex items-center gap-1 text-sm sm:text-base">
            Saiba mais <FaChevronRight className="text-xs sm:text-sm" />
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl md:text-xl text-white mb-1 sm:mb-2">
          {service.title}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 flex-1">
          {service.description}
        </p>
        <div className="flex justify-between items-center">
          {service.price && (
            <span className="text-red-500 font-medium text-sm sm:text-base">
              {service.price}
            </span>
          )}
          <button
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={`Ver detalhes do ${service.title}`}
          ></button>
        </div>
      </div>
    </div>
  );
}

ServicesCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string,
    path: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ServicesCard.defaultProps = {
  className: "",
};
