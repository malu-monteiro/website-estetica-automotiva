import { X } from "lucide-react";

import PropTypes from "prop-types";

import { useModal } from "../hooks/useModal";

import "../styles/modal.css";

export default function Modal({ open, onClose, children }) {
  useModal(open);

  return (
    <div
      onClick={onClose}
      className={`modal-overlay ${
        open ? "modal-overlay--visible" : "modal-overlay--invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal-content ${
          open ? "modal-content--visible" : "modal-content--invisible"
        }`}
      >
        <button onClick={onClose} className="modal-close-button">
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
