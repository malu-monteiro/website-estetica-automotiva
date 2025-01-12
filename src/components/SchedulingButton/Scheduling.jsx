import { useState } from "react";
import Modal from "./Modal";
import { CalendarCheck2 } from "lucide-react";
import DateSelector from "./DateSelector";
import TimeSelector from "./TimeSelector";
import ContactInfoModal from "./ContactInfoModal";

// 8-18h de segunda a sexta

export default function Scheduling() {
  const [open, setOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleNextStep = () => {
    if (selectedService && selectedDate && selectedTime) {
      setOpen(false);
      setContactModalOpen(true);
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Adicionar uma lógica para enviar os dados do formulário
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
        <form
          id="scheduling"
          className="text-center h-96 mt-6 flex w-full flex-col gap-5"
          aria-labelledby="schedule-title"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 id="schedule-title" className="text-lg font-normal text-gray-800">
            Agende um horário
          </h2>

          <div className="grid grid-cols-1 gap-3">
            <label
              htmlFor="service"
              className="text-sm text-gray-500 text-start"
            >
              Serviço
            </label>

            <select
              id="service"
              className="w-full p-2 text-gray-500 bg-slate-100 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 custom-select-arrow"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="" disabled hidden>
                Selecione um serviço
              </option>
              <option value="Polimento">Polimento</option>
              <option value="Polimento de Farol">Polimento de Farol</option>
              <option value="Vitrificação">Vitrificação</option>
              <option value="Higienização Interna">Higienização Interna</option>
            </select>

            <div className="grid grid-cols-1 gap-3">
              <label
                htmlFor="date"
                className="text-sm text-gray-500 text-start"
              >
                Data
              </label>
              <DateSelector
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </div>

            <div className="grid grid-cols-1 gap-3">
              <label
                htmlFor="time"
                className="text-sm text-gray-500 text-start"
              >
                Horário
              </label>

              <TimeSelector
                value={selectedTime}
                onChange={(time) => setSelectedTime(time)}
                selectedDate={selectedDate}
              />
            </div>

            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-5 w-1/2 mx-auto"
              onClick={handleNextStep}
            >
              Continuar
            </button>
          </div>
        </form>
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
