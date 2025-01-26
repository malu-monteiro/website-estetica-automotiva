import PropTypes from "prop-types";
import { services } from "@/constants";

export const ServiceSelect = ({ id, label, error, value, onChange }) => {
  const selectClass = `w-full p-2 text-slate-950 ${
    error ? "border-red-500" : "border-slate-300"
  } border rounded-md shadow-sm outline-none bg-slate-100 focus:border-indigo-600`;

  return (
    <div className="grid grid-cols-1 gap-2">
      <label htmlFor={id} className="text-sm text-slate-950 text-start">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={selectClass}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option value="" disabled hidden>
          Selecione um serviço
        </option>
        {services.map((service) => (
          <option key={service.id} value={service.title}>
            {service.title}
          </option>
        ))}
      </select>
      {error && (
        <span id={`${id}-error`} className="text-red-500 text-sm">
          {error}
        </span>
      )}
    </div>
  );
};

ServiceSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

ServiceSelect.defaultProps = {
  label: "Serviço",
  error: null,
};
