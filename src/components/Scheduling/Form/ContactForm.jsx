import PropTypes from "prop-types";
import { FormInput } from "./Input";
import { FormTextarea } from "./Textarea";
import { FormError } from "./Error";
import { LoadingSpinner } from "../LoadingSpinner";

export const ContactForm = ({
  values,
  errors,
  isSubmitting,
  successMessage,
  handleChange,
  onSubmit,
}) => (
  <form
    id="contact-info"
    className="text-center h-96 mt-6 flex w-full flex-col gap-5"
    aria-labelledby="contact-info-title"
    onSubmit={onSubmit}
  >
    <h2 id="contact-info-title" className="text-lg font-normal text-gray-800">
      Informações de Contato
    </h2>

    <div className="grid grid-cols-1 gap-3">
      <FormInput
        id="name"
        name="name"
        type="text"
        label="Nome"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
      />

      <FormInput
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
        placeholder="Escreva uma mensagem"
        value={values.message || ""}
        onChange={handleChange}
        error={errors.message}
      />
    </div>

    <FormError error={errors.submit} />
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
);

ContactForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
  }).isRequired,
  errors: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  successMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
