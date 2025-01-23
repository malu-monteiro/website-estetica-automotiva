import PropTypes from "prop-types";

import Modal from "./Modal";

import { CalendarCheck2 } from "lucide-react";

import DateSelector from "./DateSelector";
import TimeSelector from "./TimeSelector";
import ContactInfoModal from "./ContactInfoModal";

import { useScheduling } from "./hooks/useScheduling";
import { services } from "../../constants";

export default function Scheduling({ initialService = "" }) {
  const {
    open,
    setOpen,
    contactModalOpen,
    setContactModalOpen,
    selectedDate,
    setSelectedDate,
    selectedService,
    setSelectedService,
    selectedTime,
    setSelectedTime,
    contactInfo,
    setContactInfo,
    handleNextStep,
  } = useScheduling(initialService);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log({
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      contactInfo,
    });
    setContactModalOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className="bg-gray-450 hover:bg-opacity-60 py-2 md:py-3 px-4 md:px-6 rounded-full flex items-center text-sm md:text-base"
        onClick={() => setOpen(true)}
        aria-label="Abrir modal de agendamento"
      >
        Agendar <CalendarCheck2 className="ml-2" />
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <SchedulingForm
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          handleNextStep={handleNextStep}
        />
      </Modal>

      <ContactInfoModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        handleSubmit={handleFormSubmit}
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
      />
    </div>
  );
}

const SchedulingForm = ({
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
        className="w-full p-2 text-gray-500 bg-slate-100 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
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

Scheduling.propTypes = {
  initialService: PropTypes.string,
};

Scheduling.defaultProps = { initialService: "" };

SchedulingForm.propTypes = {
  selectedService: PropTypes.string.isRequired,
  setSelectedService: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  selectedTime: PropTypes.string,
  setSelectedTime: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
};
