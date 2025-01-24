import PropTypes from "prop-types";

export const FormError = ({ error, className }) => {
  if (!error) return null;

  return (
    <div className={`text-red-500 text-sm mt-2 ${className}`}>{error}</div>
  );
};

FormError.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
};

FormError.defaultProps = {
  className: "",
};
