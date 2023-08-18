import React from 'react';
import './Modal.css'; // Import your CSS file for modal styles
import Cross from "../../assets/Closeline.svg";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    <img src={Cross} alt="cross" />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
