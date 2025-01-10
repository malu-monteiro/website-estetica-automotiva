import { useState } from "react";
import Modal from "./Modal";
import { CalendarCheck2 } from "lucide-react";
import DateSelector from "./DateSelector";

export default function Scheduling() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Data Selecionada:", selectedDate); //teste
    alert(`Serviço agendado para: ${selectedDate?.toLocaleDateString()}`);
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className="bg-gray-500 hover:bg-opacity-60 py-2 md:py-3 px-4 md:px-6 rounded-full flex items-center text-sm md:text-base"
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
          <h2
            id="schedule-title"
            className="text-base font-black text-gray-800"
          >
            Agende seu horário!
          </h2>

          <div className="grid grid-cols-1 gap-3">
            <label htmlFor="service" className="text-sm text-gray-500">
              Selecione um Serviço
            </label>
            <select id="service" className="border border-zinc-700 rounded p-2">
              <option value="polimento">Polimento</option>
              <option value="polimento">Polimento de Farol</option>
              <option value="polimento">Vitrificação</option>
              <option value="polimento">Higienização Interna</option>
            </select>

            <DateSelector
              label="Escolha uma data"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Confirmar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
