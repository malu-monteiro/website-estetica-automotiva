import { useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "./index.jsx";
import { ContactForm } from "../Form/ContactForm.jsx";
import { useContactForm } from "../hooks/useContactForm.js";
import validateForm from "@/utils/validateForm";

export default function ContactModal({
  open,
  onClose,
  handleSubmit,
  contactInfo,
  setContactInfo,
}) {
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

  useEffect(() => {
    if (!open) resetForm();
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
  return (
    <Modal open={open} onClose={onClose}>
      <ContactForm
        values={values}
        errors={errors}
        isSubmitting={isSubmitting}
        successMessage={successMessage}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
    </Modal>
  );
}

ContactModal.propTypes = {
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
