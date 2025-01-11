import { useState } from "react";
import Modal from "./Modal";
import { CalendarCheck2 } from "lucide-react";
import DateSelector from "./DateSelector";

// 8-18h de segunda a sexta

export default function Scheduling() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
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
          onSubmit={handleFormSubmit}
        >
          <h2 id="schedule-title" className="text-lg font-normal text-gray-800">
            Agende seu horário!
          </h2>

          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="service" className="text-sm text-gray-500">
              Escolha um serviço
            </label>

            <select
              id="service"
              className="w-full p-2 text-gray-500 bg-slate-100 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 custom-select-arrow"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="Polimento">Polimento</option>
              <option value="Polimento de Farol">Polimento de Farol</option>
              <option value="Vitrificação">Vitrificação</option>
              <option value="Higienização Interna">Higienização Interna</option>
            </select>

            <DateSelector
              label="Data"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="w-full p-2 text-gray-500"
            />

            <DateSelector
              label="Horário"
              value={selectedTime}
              onChange={(time) => setSelectedTime(time)}
              className="w-full p-2 text-gray-500"
              showTimeSelect
            />

            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-5"
            >
              Continuar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
