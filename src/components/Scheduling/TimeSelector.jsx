import { useState, useEffect } from "react";
import PropTypes from "prop-types";

//refatorar

const availableHours = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

const filterAvailableHours = (selectedDate) => {
  if (!selectedDate) return [];

  const now = new Date();
  const today = now.toDateString();
  const selectedDay = new Date(selectedDate).toDateString();
  const currentHour = now.getHours();

  if (selectedDay === today && currentHour) {
    return [];
  }

  if (selectedDay === today) {
    const currentHour = now.getHours();
    return availableHours.filter((time) => {
      const hour = parseInt(time.split(":")[0]);
      return hour > currentHour;
    });
  }

  return availableHours;
};

export default function TimeSelector({ label, onChange, value, selectedDate }) {
  const [selectedTime, setSelectedTime] = useState(value || "");
  const [filteredHours, setFilteredHours] = useState([]);

  useEffect(() => {
    setFilteredHours(filterAvailableHours(selectedDate));
  }, [selectedDate]);

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setSelectedTime(time);
    onChange?.(time);
  };

  return (
    <div className="grid grid-cols-1 gap-2">
      {label && (
        <label htmlFor="time" className="text-sm text-gray-500 text-start">
          {label}
        </label>
      )}
      <select
        id="time"
        value={selectedTime}
        onChange={handleTimeChange}
        className={`w-full p-2 text-gray-800 bg-slate-100 border border-slate-300 rounded-md shadow-sm outline-none appearance-none focus:border-slate-500 ${
          !selectedDate ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
        disabled={!selectedDate}
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
    </div>
  );
}

TimeSelector.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  selectedDate: PropTypes.instanceOf(Date),
};

TimeSelector.defaultProps = {
  label: "Horário",
  onChange: () => {},
  value: "",
  selectedDate: null,
};
