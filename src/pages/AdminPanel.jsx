import { useEffect, useState } from "react";

import axios from "axios";

import { format } from "date-fns";

const AdminPanel = () => {
  const [disponibilidades, setDisponibilidades] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [view, setView] = useState("data");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/disponibilidade")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setDisponibilidades(response.data);
        } else {
          setDisponibilidades([]);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar datas:", error);
        setDisponibilidades([]);
      });

    axios
      .get("http://localhost:5000/api/horarios")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setHorarios(response.data);
        } else {
          setHorarios([]);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar horários:", error);
        setHorarios([]);
      });
  }, []);

  const toggleDisponibilidade = async (id, disponivel) => {
    try {
      await axios.put(`http://localhost:5000/api/disponibilidade/${id}`, {
        disponivel: !disponivel,
      });
      const updatedResponse = await axios.get(
        "http://localhost:5000/api/disponibilidade"
      );
      if (Array.isArray(updatedResponse.data)) {
        setDisponibilidades(updatedResponse.data);
      }
    } catch (error) {
      console.log("Erro ao atualizar disponibilidade:", error);
    }
  };

  const toggleHorario = async (id, disponivel) => {
    try {
      await axios.put(`http://localhost:5000/api/horarios/${id}`, {
        disponivel: !disponivel,
      });
      const updatedResponse = await axios.get(
        "http://localhost:5000/api/horarios"
      );
      if (Array.isArray(updatedResponse.date)) {
        setHorarios(updatedResponse.data);
      }
    } catch (error) {
      console.log("Erro ao atualizar horário:", error);
    }
  };

  return (
    <div className="p-4 mt-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Painel Administrativo
      </h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setView("data")}
          className={`px-4 py-2 mx-2 ${
            view === "data" ? "bg-blue-500" : "bg-gray-500"
          } text-white rounded`}
        >
          Data
        </button>
        <button
          onClick={() => setView("horario")}
          className={`px-4 py-2 mx-2 ${
            view === "horario" ? "bg-blue-500" : "bg-gray-500"
          } text-white rounded`}
        >
          Horário
        </button>
      </div>
      {view === "data" ? (
        <table className="w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Data</th>
              <th className="border px-4 py-2">Disponibilidade</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {disponibilidades.map((disponibilidade) => (
              <tr key={disponibilidade.id}>
                <td className="border px-4 py-2">
                  {format(new Date(disponibilidade.data), "dd/MM/yyyy")}
                </td>
                <td className="border px-4 py-2">
                  {disponibilidade.disponivel ? "Sim" : "Não"}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() =>
                      toggleDisponibilidade(
                        disponibilidade.id,
                        disponibilidade.disponivel
                      )
                    }
                    className={`px-4 py-2 ${
                      disponibilidade.disponivel ? "bg-red-500" : "bg-green-500"
                    } text-white rounded`}
                  >
                    {disponibilidade.disponivel ? "Bloquear" : "Liberar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Horário</th>
              <th className="border px-4 py-2">Disponibilidade</th>
              <th className="border px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {horarios.map((horario) => (
              <tr key={horario.id}>
                <td className="border px-4 py-2">
                  {format(new Date(horario.horario), "HH:mm")}
                </td>
                <td className="border px-4 py-2">
                  {horario.disponivel ? "Sim" : "Não"}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() =>
                      toggleHorario(horario.id, horario.disponivel)
                    }
                    className={`px-4 py-2 ${
                      horario.disponivel ? "bg-red-500" : "bg-green-500"
                    } text-white rounded`}
                  >
                    {horario.disponivel ? "Bloquear" : "Liberar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanel;
