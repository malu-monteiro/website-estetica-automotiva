import PropTypes from "prop-types";
import { CalendarCheck2 } from "lucide-react";
import Modal from "./Modal";
import ContactModal from "./Modal/ContactModal";
import { SchedulingForm } from "./Form/SchedulingForm";
import { useScheduling } from "./hooks/useScheduling";

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

      <ContactModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        handleSubmit={handleFormSubmit}
        contactInfo={contactInfo}
        setContactInfo={setContactInfo}
      />
    </div>
  );
}

Scheduling.propTypes = {
  initialService: PropTypes.string,
};

Scheduling.defaultProps = { initialService: "" };
