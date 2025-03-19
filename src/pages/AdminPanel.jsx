import { useState, useEffect } from "react";

import axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs-plugin-utc";

import { DateSelector } from "../components/Scheduling/Form/Service/DateSelector";
import { TimeSelector } from "../components/Scheduling/Form/Service/TimeSelector";

dayjs.extend(utc);

const AdminPanel = () => {
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [blockedDates, setBlockedDates] = useState([]);
  const [blockedSlots, setBlockedSlots] = useState([]);

  const API_URL = "http://localhost:3000";

  useEffect(() => {
    const fetchBlockedDates = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/availabilities`, {
          params: {
            date: dayjs().utc().format("YYYY-MM-DD"),
          },
        });

        if (Array.isArray(response.data)) {
          const blocked = response.data
            .filter((availability) => availability.isBlocked)
            .map((availability) => dayjs.utc(availability.date).toDate());

          setBlockedDates(blocked);
        } else {
          console.error("API did not return an array:", response.data);
          setBlockedDates([]);
        }
      } catch (error) {
        console.error("Erro fetching available dates", error);
        setBlockedDates([]);
      }
    };

    fetchBlockedDates();
  }, []);

  useEffect(() => {
    const fetchBlockedSlots = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blocked-slots`);
        if (Array.isArray(response.data)) {
          setBlockedSlots(response.data);
        } else {
          console.error("API did not return an array:", response.data);
          setBlockedSlots([]);
        }
      } catch (error) {
        console.error("Erro ao buscar bloqueios", error);
        setBlockedSlots([]);
      }
    };
    fetchBlockedSlots();
  }, []);

  const handleBlockSlot = async () => {
    if (!date || !startTime || !endTime) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/availabilities`, {
        date: dayjs(date).format("YYYY-MM-DD"),
        startTime,
        endTime,
      });
      alert("Horário bloqueado com sucesso!");
      const blockedResponse = await axios.get(`${API_URL}/api/blocked-slots`);
      setBlockedSlots(blockedResponse.data);
    } catch (error) {
      console.error("Erro ao bloquear horário", error);
      alert(
        "Erro ao bloquear horário. Verifique o console para mais detalhes."
      );
    }
  };

  const handleBlockDay = async () => {
    if (!date) {
      alert("Selecione uma data.");
      return;
    }

    try {
      const formattedDate = dayjs(date).format("YYYY-MM-DD");

      const response = await axios.post(
        `${API_URL}/api/availabilities/block-day`,
        {
          date: formattedDate,
        }
      );

      if (response.data.message === "Esta data já está bloqueada.") {
        alert(response.data.message);
      } else {
        alert("Dia bloqueado com sucesso!");
      }

      const blockedResponse = await axios.get(`${API_URL}/api/blocked-slots`);
      setBlockedSlots(blockedResponse.data);

      const blockedDatesResponse = await axios.get(
        `${API_URL}/api/availabilities`,
        {
          params: {
            date: formattedDate,
          },
        }
      );

      if (Array.isArray(blockedDatesResponse.data)) {
        const blocked = blockedDatesResponse.data
          .filter((availability) => availability.isBlocked)
          .map((availability) => new Date(availability.date));

        setBlockedDates(blocked);
      } else {
        console.error(
          "API did not return an array:",
          blockedDatesResponse.data
        );
        setBlockedDates([]);
      }
    } catch (error) {
      console.error("Erro ao bloquear dia:", error);
      alert("Erro ao bloquear dia. Verifique o console para mais detalhes.");
    }
  };

  const handleUnblock = async (id, isBlocked) => {
    try {
      await axios.delete(`${API_URL}/api/blocked-slots/${id}`);
      alert(isBlocked ? "Dia desbloqueado!" : "Horário desbloqueado!");
      const response = await axios.get(`${API_URL}/api/blocked-slots`);
      setBlockedSlots(response.data);
    } catch (error) {
      console.error("Erro ao desbloquear", error);
      alert("Erro ao desbloquear. Verifique o console para mais detalhes.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Painel Administrativo</h1>
      <div className="space-y-4">
        <DateSelector
          id="date"
          label="Data"
          value={date}
          onChange={setDate}
          blockedDates={blockedDates}
        />
        <TimeSelector
          id="startTime"
          label="Horário Inicial"
          value={startTime}
          onChange={setStartTime}
          selectedDate={date}
        />
        <TimeSelector
          id="endTime"
          label="Horário Final"
          value={endTime}
          onChange={setEndTime}
          selectedDate={date}
        />
        <button
          onClick={handleBlockSlot}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Bloquear Horário
        </button>
        <button
          onClick={handleBlockDay}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Bloquear Dia
        </button>

        <h2 className="text-xl font-bold mt-8">Horário e Dias Bloqueados</h2>
        <table className="min-w-full bg-black">
          <thead>
            <tr>
              <th className="py-2">Data</th>
              <th className="py-2">Tipo</th>
              <th className="py-2">Ações</th>
            </tr>
          </thead>

          <tbody>
            {blockedSlots.map((blocked) => (
              <tr key={blocked.id}>
                <td className="border px-4 py-2">
                  {dayjs.utc(blocked.date).format("DD/MM/YYYY")}
                </td>
                <td className="border px-4 py-2">
                  {blocked.isBlocked ? "Dia Inteiro" : "Horário"}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleUnblock(blocked.id, blocked.isBlocked)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Desbloquear
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
