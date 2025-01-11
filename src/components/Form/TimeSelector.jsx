import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

export default function TimeSelector({ label, onChange, value, selectedDate }) {
  const [selectedTime, setSelectedTime] = useState(value || "");
  const [filteredHours, setFilteredHours] = useState([]);

  // Usar useMemo para garantir que availableHours seja constante
  const availableHours = useMemo(
    () => [
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
    ],
    []
  );

  useEffect(() => {
    if (!selectedDate) {
      setFilteredHours([]);
      return;
    }

    const now = new Date();
    const today = now.toDateString();
    const selectedDay = new Date(selectedDate).toDateString();

    if (selectedDay === today) {
      const currentHour = now.getHours();
      setFilteredHours(
        availableHours.filter((time) => {
          const hour = parseInt(time.split(":")[0]);
          return hour > currentHour;
        })
      );
    } else {
      setFilteredHours(availableHours);
    }
  }, [selectedDate, availableHours]);

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setSelectedTime(time);
    if (onChange) {
      onChange(time);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor="time" className="text-sm text-gray-500">
          {label}
        </label>
      )}
      <select
        id="time"
        value={selectedTime || ""}
        onChange={handleTimeChange}
        className="border border-zinc-700 text-black rounded-md p-2 w-full bg-white shadow-sm outline-none focus:border-indigo-600"
        disabled={!selectedDate}
      >
        <option value="">Selecione um horário</option>
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
