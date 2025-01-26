import PropTypes from "prop-types";

import { ServiceSelect } from "./ServiceSelect";

import DateSelector from "./DateSelector";
import { TimeSelector } from "./TimeSelector";

import { FormError } from "../FormError";

import validateService from "@/utils/validateService";

// botão continuar não funcionar + erro de validação

export const ServiceForm = ({
  selectedService,
  setSelectedService,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  handleNextStep,
  errors,
  setErrors,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
    };

    const validationErrors = validateService(values);
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
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
          value={selectedService}
          onChange={setSelectedService}
          error={errors.service}
        />

        <DateSelector
          value={selectedDate}
          onChange={setSelectedDate}
          error={errors.date}
        />

        <TimeSelector
          value={selectedTime}
          onChange={setSelectedTime}
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
