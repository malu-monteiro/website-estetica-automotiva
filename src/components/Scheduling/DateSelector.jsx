import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

export default function DateSelector({ label, onChange, value, className }) {
  const [selectedDate, setSelectedDate] = useState(value || null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date); // Passa a data selecionada para o componente pai
    }
  };

  // Bloqueia sábados e domingos
  const isWeekDay = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor="date" className="text-sm text-gray-800">
          {label}
        </label>
      )}
      <DatePicker
        id="date"
        selected={selectedDate}
        onChange={handleDateChange}
        className={`border border-slate-300 text-gray-800 rounded-md p-2 w-full bg-slate-100 shadow-sm outline-none focus:border-slate-500 ${className}`}
        placeholderText="Selecione uma data"
        dateFormat="dd/MM/yyyy"
        filterDate={isWeekDay}
        minDate={new Date()} // Bloqueia datas anteriores ao dia atual
      />
    </div>
  );
}

DateSelector.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
  className: PropTypes.string,
};
