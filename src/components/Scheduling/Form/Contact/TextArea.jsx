import PropTypes from "prop-types";

export const FormTextarea = ({ id, label, error, ...props }) => {
  const textareaClass = `w-full p-2 text-slate-950 ${
    error ? "border-red-500" : "bg-slate-100 border-slate-300"
  } border rounded-md shadow-sm outline-none bg-slate-100 focus:border-indigo-600`;

  return (
    <div className="grid grid-cols-1 gap-2">
      <label htmlFor={id} className="text-sm text-slate-950 text-start">
        {label}
      </label>
      <textarea
        id={id}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className={textareaClass}
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

FormTextarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};
