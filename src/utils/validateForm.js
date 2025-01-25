export default function validateForm(data) {
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

  if (!data.name || data.name.trim() === "") {
    errors.name = "Por favor, insira seu nome.";
  }

  if (!data.phone || data.phone.replace(/\D/g, "").length < 11) {
    errors.phone = "Informe um número válido.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "A mensagem deve ter pelo menos 10 caracteres.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}
