import React from 'react';
import Button from '../../atoms/Button';
import BaseModal from '../../molecules/BaseModal';
import { Container } from './style';
import { Installment } from '../../../types/installment';
import formatBrlMoney from '../../../utils/formatMoney';

interface AntecipateModalProps {
  open: boolean;
  onClose: () => void;
  installment?: Installment;
  payInstallment: () => void;
}

const AntecipateModal: React.FC<AntecipateModalProps> = ({
  open,
  onClose,
  installment,
  payInstallment,
}) => {
  return (
    <BaseModal
      title={`Gostaria de antecipar a parcela de ${
        installment?.dueDate
      } no valor de ${formatBrlMoney(installment?.value)}?`}
      open={open}
      onClose={onClose}
      titleSize="mediumSmall"
    >
      <Container>
        <Button color="success" onClick={payInstallment} className="btn">
          Sim
        </Button>
        <Button color="danger" onClick={onClose} className="btn">
          Não
        </Button>
      </Container>
    </BaseModal>
  );
};

export default AntecipateModal;
