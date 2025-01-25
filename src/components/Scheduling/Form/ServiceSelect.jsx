import PropTypes from "prop-types";
import { services } from "../../../constants";

export const ServiceSelect = ({ value, onChange, label }) => (
  <div className="flex flex-col gap-2">
    {label && (
      <label htmlFor="service" className="text-sm text-gray-800">
        {label}
      </label>
    )}
    <select
      id="service"
      className="w-full p-2 text-gray-800 bg-slate-100 border border-slate-300 rounded-md shadow-sm outline-none appearance-none focus:border-slate-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
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
  </div>
);

ServiceSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

ServiceSelect.defaultProps = {
  label: "Serviço",
};
