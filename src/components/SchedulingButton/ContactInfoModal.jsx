import PropTypes from "prop-types";
import Modal from "./Modal";

export default function ContactInfoModal({
  open,
  onClose,
  handleSubmit,
  contactInfo,
  setContactInfo,
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <form
        id="contact-info"
        className="text-center h-96 mt-6 flex w-full flex-col gap-5"
        aria-labelledby="contact-info-title"
        onSubmit={handleSubmit}
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
            type="text"
            className="w-full p-2 text-gray-500 bg-slate-100 border rounded-md shadow-sm outline-none focus:border-indigo-600"
            value={contactInfo.name}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, name: e.target.value })
            }
          />

          <label htmlFor="email" className="text-sm text-gray-500 text-start">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 text-gray-500 bg-slate-100 border rounded-md shadow-sm outline-none focus:border-indigo-600"
            value={contactInfo.email}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, email: e.target.value })
            }
          />

          <label htmlFor="phone" className="text-sm text-gray-500 text-start">
            Telefone
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full p-2 text-gray-500 bg-slate-100 border rounded-md shadow-sm outline-none focus:border-indigo-600"
            value={contactInfo.phone}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, phone: e.target.value })
            }
          />

          <label htmlFor="message" className="text-sm text-gray-500 text-start">
            Mensagem
          </label>
          <textarea
            id="message"
            placeholder="Escreva uma mensagem"
            className="w-full p-2 text-gray-500 bg-slate-100 border rounded-md shadow-sm outline-none focus:border-indigo-600"
            value={contactInfo.message || ""}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, message: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-5 w-1/2 mx-auto"
        >
          Enviar
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
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  setContactInfo: PropTypes.func.isRequired,
};
