import { useState, useEffect } from "react";
import axios from "axios";

import PropTypes from "prop-types";

import DateSelector from "./DateSelector";
import { ServiceSelect } from "./ServiceSelect";
import { TimeSelector } from "./TimeSelector";

import { FormError } from "../FormError";

import { useServiceForm } from "../../hooks/useServiceForm";

import validateService from "@/utils/validateService";

export const ServiceForm = ({
  selectedService,
  setSelectedService,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  handleNextStep,
}) => {
  const { errors, setErrors, handleChange } = useServiceForm({
    service: selectedService,
    date: selectedDate,
    time: selectedTime,
  });

  const [blockedDates, setBlockedDates] = useState([]);

  useEffect(() => {
    const fetchBlockedDates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/disponibilidade"
        );
        if (Array.isArray(response.data)) {
          const blocked = response.data
            .filter((d) => !d.disponivel)
            .map((d) => new Date(d.data));
          setBlockedDates(blocked);
        } else {
          console.error("API did not return an array:", response.data);
          setBlockedDates([]);
        }
      } catch (error) {
        console.error("Error fetching available dates", error);
        setBlockedDates([]);
      }
    };
    fetchBlockedDates();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      service: selectedService || "",
      date: selectedDate,
      time: selectedTime || "",
    };

    const validationErrors = validateService(values);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    handleNextStep();
  };

  return (
    <form
      id="scheduling"
      className="text-center h-96 mt-6 flex w-full flex-col gap-5"
      aria-labelledby="schedule-title"
      onSubmit={handleSubmit}
    >
      <h2 id="schedule-title" className="text-lg font-normal text-gray-800">
        Solicite o agendamento de um serviço.
      </h2>

      <div className="grid grid-cols-1 gap-3">
        <ServiceSelect
          id="myService"
          value={selectedService}
          onChange={(value) => {
            setSelectedService(value);
            handleChange("service", value);
          }}
          error={errors.service}
        />

        <DateSelector
          value={selectedDate}
          onChange={(value) => {
            setSelectedDate(value);
            handleChange("date", value);
          }}
          error={errors.date}
          blockedDates={blockedDates}
        />

        <TimeSelector
          value={selectedTime}
          onChange={(value) => {
            setSelectedTime(value);
            handleChange("time", value);
          }}
          selectedDate={selectedDate}
          error={errors.time}
        />

        <FormError error={errors.scheduling} />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-5 w-1/2 mx-auto"
        >
          Continuar
        </button>
      </div>
    </form>
  );
};

ServiceForm.propTypes = {
  selectedService: PropTypes.string.isRequired,
  setSelectedService: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func.isRequired,
  selectedTime: PropTypes.string,
  setSelectedTime: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  errors: PropTypes.object,
  setErrors: PropTypes.func.isRequired,
};

ServiceForm.defaultProps = {
  errors: {},
};
