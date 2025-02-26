import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PropTypes from "prop-types";

import { weekendDays, lastSchedulingHour } from "@/constants/dates";

export const DateSelector = ({
  id,
  label,
  error,
  value,
  onChange,
  blockedDates,
}) => {
  const [selectedDate, setSelectedDate] = useState(value || null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange?.(date);
  };

  const isValidDate = (date) => {
    const now = new Date();
    const dayOfWeek = date.getDay();
    const isWeekday =
      dayOfWeek !== weekendDays.sunday && dayOfWeek !== weekendDays.saturday;
    const isValidToday = !(
      date.toDateString() === now.toDateString() &&
      now.getHours() >= lastSchedulingHour
    );

    const isDateBlocked = blockedDates.some(
      (d) => d.toDateString() === date.toDateString()
    );

    return isWeekday && isValidToday && !isDateBlocked;
  };

  const datePickerClass = `w-full p-2 text-slate-950 ${
    error ? "border-red-500" : "border-slate-300"
  } border rounded-md shadow-sm outline-none bg-slate-100 focus:border-indigo-600 placeholder:text-slate-950`;

  return (
    <div className="grid grid-cols-1 gap-2">
      <label htmlFor={id} className="text-sm text-slate-950 text-start">
        {label}
      </label>
      <DatePicker
        id={id}
        selected={selectedDate}
        onChange={handleDateChange}
        className={datePickerClass}
        placeholderText="Selecione uma data"
        dateFormat="dd/MM/yyyy"
        filterDate={isValidDate}
        minDate={new Date()}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span id={`${id}-error`} className="text-red-500 text-sm">
          {error}
        </span>
      )}
    </div>
  );
};

DateSelector.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  blockedDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
};

DateSelector.defaultProps = {
  label: "Data",
  value: null,
  error: null,
};

export default DateSelector;
