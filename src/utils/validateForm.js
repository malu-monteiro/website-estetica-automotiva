export default function validateForm(data) {
  const errors = {};

  if (!data.name || data.name.trim() === "") {
    errors.name = "Por favor, insira seu nome.";
  }

  if (!data.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
    errors.email = "E-mail inválido.";
  }

  if (!data.phone || !/^\d{10,15}$/.test(data.phone)) {
    errors.phone = "Informe um número válido.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "A mensagem deve ter pelo menos 10 caracteres.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}
