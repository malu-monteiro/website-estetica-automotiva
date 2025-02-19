import PropTypes from "prop-types";

export const ContactSection = ({ contact }) => (
  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-md font-semibold mb-4">Contato</h3>
    <ul className="space-y-2">
      {contact.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 text-2xl hover:text-white flex items-center space-x-2"
          >
            {link.icon}
            <span className="text-base">{link.content}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

ContactSection.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
