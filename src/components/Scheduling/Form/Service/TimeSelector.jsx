import { useState, useEffect } from "react";

import PropTypes from "prop-types";

import { filterAvailableHours } from "@/constants/hours";

export const TimeSelector = ({
  id,
  label,
  error,
  value,
  onChange,
  selectedDate,
}) => {
  const [filteredHours, setFilteredHours] = useState([]);

  useEffect(() => {
    const hours = filterAvailableHours(selectedDate);
    setFilteredHours(hours);

    if (hours.length > 0 && !value) {
      onChange?.(hours[0]);
    }
  }, [selectedDate, onChange, value]);

  const selectClass = `w-full p-2 text-slate-950 ${
    error ? "border-red-500" : "border-slate-300"
  } border rounded-md shadow-sm outline-none bg-slate-100 focus:border-indigo-600 ${
    !selectedDate ? "cursor-not-allowed opacity-50" : "cursor-pointer"
  }`;

  return (
    <div className="grid grid-cols-1 gap-2">
      <label htmlFor={id} className="text-sm text-slate-950 text-start">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={selectClass}
        disabled={!selectedDate}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <option value="" disabled hidden>
          Selecione um horário
        </option>
        {filteredHours.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
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

TimeSelector.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  selectedDate: PropTypes.instanceOf(Date),
};

TimeSelector.defaultProps = {
  label: "Horário",
  value: "",
  selectedDate: null,
  error: null,
  onChange: () => {},
};
