import PropTypes from "prop-types";

export function Button({ href, onClick, children, className, icon: Icon }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`bg-gray-450 hover:bg-opacity-60 py-2 md:py-3 px-4 md:px-6 rounded-full flex items-center text-sm md:text-base transition-all duration-300 ${className}`}
    >
      {children}
      {Icon && <Icon className="ml-2" />}
    </a>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.elementType,
};

Button.defaultProps = {
  href: "#",
  onClick: () => {},
  className: "",
  icon: undefined,
};
