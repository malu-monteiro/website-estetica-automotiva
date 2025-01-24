import PropTypes from "prop-types";
import DateSelector from "../DateSelector";
import TimeSelector from "../TimeSelector";
import { services } from "../../../constants";

export const SchedulingForm = ({
  selectedService,
  setSelectedService,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  handleNextStep,
}) => (
  <form
    id="scheduling"
    className="text-center h-96 mt-6 flex w-full flex-col gap-5"
    aria-labelledby="schedule-title"
    onSubmit={(e) => e.preventDefault()}
  >
    <h2 id="schedule-title" className="text-lg font-normal text-gray-800">
      Solicite o agendamento de um serviço.
    </h2>

    <div className="grid grid-cols-1 gap-3">
      <select
        id="service"
        className="w-full p-2 text-gray-800 bg-slate-100 border border-slate-300 rounded-md shadow-sm outline-none appearance-none focus:border-slate-500"
        value={selectedService}
        onChange={(e) => setSelectedService(e.target.value)}
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

      <DateSelector value={selectedDate} onChange={setSelectedDate} />
      <TimeSelector
        value={selectedTime}
        onChange={setSelectedTime}
        selectedDate={selectedDate}
      />

      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-5 w-1/2 mx-auto"
        onClick={handleNextStep}
      >
        Continuar
      </button>
    </div>
  </form>
);

SchedulingForm.propTypes = {
  selectedService: PropTypes.string.isRequired,
  setSelectedService: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  selectedTime: PropTypes.string,
  setSelectedTime: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};
