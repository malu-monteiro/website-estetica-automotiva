import PropTypes from "prop-types";

export const AboutSection = ({ aboutUs }) => (
  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-md font-semibold mb-4">Sobre nós</h3>
    <ul className="space-y-2">
      {aboutUs.map((link) => (
        <li key={link.id}>
          <span className="text-base break-words whitespace-pre-line">
            {link.description}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

AboutSection.propTypes = {
  aboutUs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
