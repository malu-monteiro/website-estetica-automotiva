import { useEffect } from "react";

import PropTypes from "prop-types";

import { Input } from "./Input";
import { FormTextarea } from "./TextArea";
import { FormError } from "../FormError";

import { useContactForm } from "../../hooks/useContactForm";

import validateContact from "@/utils/validateContact";

export function ContactForm({
  contactInfo,
  setContactInfo,
  onSubmit: handleSubmit,
  onClose,
}) {
  const {
    values,
    errors,
    isSubmitting,
    successMessage,
    setErrors,
    setIsSubmitting,
    handleChange,
    resetForm,
  } = useContactForm(contactInfo);

  useEffect(() => {
    return () => resetForm();
  }, [resetForm]);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);

      const validationErrors = validateContact(values);
      if (validationErrors) {
        setErrors(validationErrors);
        return;
      }

      setContactInfo(values);
      await handleSubmit(values);
      onClose();
    } catch {
      setErrors({ submit: "Erro ao enviar formulário. Tente novamente." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="contact-info"
      className="text-center h-96 mt-6 flex w-full flex-col gap-5"
      onSubmit={onSubmit}
    >
      <h2 className="text-lg font-normal text-gray-800">
        Informações de Contato
      </h2>

      <div className="grid grid-cols-1 gap-3">
        <Input
          id="name"
          name="name"
          type="text"
          label="Nome"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />

        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Número de Celular"
          mask="(99) 99999-9999"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <FormTextarea
          id="message"
          name="message"
          label="Mensagem"
          value={values.message || ""}
          onChange={handleChange}
          error={errors.message}
        />

        <FormError error={errors.submit} />
        {successMessage && (
          <div className="text-green-500 text-sm mt-2">{successMessage}</div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-5 w-1/2 mx-auto"
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  setContactInfo: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
