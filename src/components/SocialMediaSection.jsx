import PropTypes from "prop-types";

export const SocialMediaSection = ({ socialMedia }) => (
  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-md font-semibold mb-4">Redes Sociais</h3>
    <ul className="flex justify-center md:justify-start space-x-4">
      {socialMedia.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 text-2xl hover:text-white"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

SocialMediaSection.propTypes = {
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ).isRequired,
};
