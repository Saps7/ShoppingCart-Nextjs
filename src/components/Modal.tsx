// Modal.js

import React, { ReactNode } from "react";


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center"
        >
            <div className="rounded-lg bg-gray-50 px-16 py-14">
                {children}
            </div>
        </div>
    );
};

export default Modal;
