import { ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";

export const ServicesCard = ({ service, onClick }) => {
  const { id, title, image } = service;

  return (
    <button
      key={id}
      className="relative flex flex-col items-center m-4 group"
      onClick={() => onClick(id)}
      aria-label={`Saiba mais sobre ${title}`}
    >
      <img
        src={image}
        alt={title}
        className="w-40 h-40 lg:w-96 lg:h-40 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-base md:text-lg font-bold flex items-center">
          Saiba mais <ArrowUpRight className="ml-2" />
        </span>
      </div>
      <a className="text-base md:text-lg lg:text-xl font-bold mt-4 transition-colors duration-300 group-hover:text-red-600">
        {title}
      </a>
    </button>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
