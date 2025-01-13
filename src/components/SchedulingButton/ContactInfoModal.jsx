import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import Modal from "./Modal";
import validateForm from "../../utils/validateForm";

// Custom hook para gerenciar o formulário
const useContactForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Remove o erro do campo se ele for corrigido
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Função para resetar o formulário
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setSuccessMessage("");
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    isSubmitting,
    successMessage,
    setErrors,
    setIsSubmitting,
    setSuccessMessage,
    handleChange,
    resetForm,
  };
};

// Componente de Loading
const LoadingSpinner = () => (
  <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
);

export default function ContactInfoModal({
  open,
  onClose,
  handleSubmit,
  contactInfo,
  setContactInfo,
}) {
  // Utiliza o custom hook para gerenciar o estado do formulário
  const {
    values,
    errors,
    isSubmitting,
    successMessage,
    setErrors,
    setIsSubmitting,
    setSuccessMessage,
    handleChange,
    resetForm,
  } = useContactForm(contactInfo);

  // Reseta o formulário quando o modal é fechado
  useEffect(() => {
    if (!open) {
      resetForm();
    }
  }, [open, resetForm]);

  // Atualiza o estado do formulário no componente pai
  useEffect(() => {
    setContactInfo(values);
  }, [values, setContactInfo]);

  // Função para lidar com o envio do formulário
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);
      setSuccessMessage("");

      // Valida os valores do formulário
      const validationErrors = validateForm(values);
      if (validationErrors) {
        setErrors(validationErrors);
        return;
      }

      // Envia os valores do formulário
      await handleSubmit(values);
      setSuccessMessage("Informações enviadas com sucesso!");
      onClose();
    } catch {
      setErrors({ submit: "Erro ao enviar formulário. Tente novamente." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função para obter a classe CSS dos campos de entrada
  const getInputClass = (hasError) =>
    `w-full p-2 ${
      hasError ? "border-red-500" : "bg-gray-100 border-gray-300"
    } border rounded-md shadow-sm outline-none focus:border-indigo-600`;

  return (
    <Modal open={open} onClose={onClose}>
      <form
        id="contact-info"
        className="text-center h-96 mt-6 flex w-full flex-col gap-5"
        aria-labelledby="contact-info-title"
        onSubmit={onSubmit}
      >
        <h2
          id="contact-info-title"
          className="text-lg font-normal text-gray-800"
        >
          Informações de Contato
        </h2>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="name" className="text-sm text-gray-500 text-start">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={getInputClass(errors.name)}
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span id="name-error" className="text-red-500 text-sm">
              {errors.name}
            </span>
          )}

          <label htmlFor="phone" className="text-sm text-gray-500 text-start">
            Número de Celular
          </label>
          <InputMask
            mask="(99) 99999-9999"
            id="phone"
            name="phone"
            type="tel"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={getInputClass(errors.phone)}
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <span id="phone-error" className="text-red-500 text-sm">
              {errors.phone}
            </span>
          )}

          <label htmlFor="message" className="text-sm text-gray-500 text-start">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Escreva uma mensagem"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={getInputClass(errors.message)}
            value={values.message || ""}
            onChange={handleChange}
          />
          {errors.message && (
            <span id="message-error" className="text-red-500 text-sm">
              {errors.message}
            </span>
          )}
        </div>

        {errors.submit && (
          <div className="text-red-500 text-sm mt-2">{errors.submit}</div>
        )}

        {successMessage && (
          <div className="text-green-500 text-sm mt-2">{successMessage}</div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-5 w-1/2 mx-auto flex items-center justify-center ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? <LoadingSpinner /> : "Enviar"}
        </button>
      </form>
    </Modal>
  );
}

ContactInfoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  setContactInfo: PropTypes.func.isRequired,
};
