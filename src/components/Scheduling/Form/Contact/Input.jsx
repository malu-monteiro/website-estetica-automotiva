import PropTypes from "prop-types";
import InputMask from "react-input-mask";

export const Input = ({ id, label, error, mask, ...props }) => {
  const inputClass = `w-full p-2 text-slate-950 ${
    error ? "border-red-500" : "border-slate-300"
  } border rounded-md shadow-sm outline-none bg-slate-100 focus:border-indigo-600`;

  const Input = mask ? InputMask : "input";

  return (
    <div className="grid grid-cols-1 gap-2">
      <label htmlFor={id} className="text-sm text-slate-950 text-start">
        {label}
      </label>
      <Input
        id={id}
        mask={mask}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="text-red-500 text-sm">
          {error}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  mask: PropTypes.string,
};
