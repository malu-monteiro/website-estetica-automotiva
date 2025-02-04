import { X, ArrowLeft } from "lucide-react";

import PropTypes from "prop-types";

import { useModal } from "../hooks/useModal";

import "../styles/modal.css";

export default function Modal({
  open,
  onClose,
  onBack,
  showBackButton,
  children,
}) {
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
        {showBackButton && (
          <button onClick={onBack} className="modal-back-button">
            <ArrowLeft />
          </button>
        )}

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
  onBack: PropTypes.func,
  showBackButton: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  onBack: () => {},
  showBackButton: false,
};
