import { useState } from "react";

import PropTypes from "prop-types";
import { CalendarCheck2 } from "lucide-react";
import Modal from "./Modal";
import { ServiceForm } from "./Form/Service";
import { ContactForm } from "./Form/Contact";
import { useScheduling } from "./hooks/useScheduling";

export default function Scheduling({ initialService = "" }) {
  const [errors, setErrors] = useState({});
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

    const { name, phone, message } = contactInfo;
    const formattedDate = new Date(selectedDate).toLocaleDateString("pt-BR");

    const wppMessage = `
    Serviço: ${selectedService}
    Data: ${formattedDate}
    Horário: ${selectedTime}
    
    Nome: ${name}
    Telefone: ${phone}
    Mensagem: ${message}
      `.trim();

    window.open(
      `https://wa.me/5541997202961?text=${encodeURIComponent(wppMessage)}`,
      "_blank"
    );

    setContactModalOpen(false);
  };

  const handleBack = () => {
    setContactModalOpen(false);
    setOpen(true);
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
        <ServiceForm
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          handleNextStep={handleNextStep}
          errors={errors}
          setErrors={setErrors}
        />
      </Modal>

      <Modal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onBack={handleBack}
        showBackButton={true}
      >
        <ContactForm
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          onSubmit={handleFormSubmit}
          onClose={() => setContactModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

Scheduling.propTypes = {
  initialService: PropTypes.string,
};

Scheduling.defaultProps = { initialService: "" };
