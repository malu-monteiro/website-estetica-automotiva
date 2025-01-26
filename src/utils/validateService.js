export default function validateService(data) {
  const errors = {};

  if (!data.service || data.service.trim() === "") {
    errors.service = "Por favor, selecione um serviço.";
  }

  if (!data.date) {
    errors.date = "Por favor, selecione uma data.";
  }

  if (!data.time || data.time.trim() === "") {
    errors.time = "Por favor, selecione um horário.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}
