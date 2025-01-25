import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PropTypes from "prop-types";

const weekendDays = {
  sunday: 0,
  saturday: 6,
};

const lastSchedulingHour = 18;

export default function DateSelector({ onChange, value }) {
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
    return isWeekday && isValidToday;
  };

  return (
    <div className="flex flex-col gap-2">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className="border border-slate-300 text-gray-800 rounded-md p-2 w-full bg-slate-100 shadow-sm outline-none focus:border-slate-500"
        placeholderText="Selecione uma data"
        dateFormat="dd/MM/yyyy"
        filterDate={isValidDate}
        minDate={new Date()}
      />
    </div>
  );
}

DateSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date),
};

DateSelector.defaultProps = {
  value: null,
};
