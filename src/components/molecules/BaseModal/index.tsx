import React, { ReactNode } from 'react';
import { Modal, Overlay } from './style';

interface BaseModalProps {
  children: ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
  titleSize: string;
}

const BaseModal: React.FC<BaseModalProps> = ({
  children,
  title,
  open,
  onClose,
  titleSize,
}) => {
  return (
    <>
      <Overlay open={open} onClick={onClose} />
      <Modal open={open} titleSize={titleSize}>
        <div className="container">
          <h1>{title}</h1>
          <button type="button" className="closeBtn" onClick={onClose}>
            &times;
          </button>
        </div>
        {children}
      </Modal>
    </>
  );
};

export default BaseModal;
