import React from 'react';
import BaseModal from '../../molecules/BaseModal';
import formatBRLMoney from '../../../utils/formatMoney';
import { Container } from './style';
import { Simulation } from '../../../types/simulation';

interface SimulationModalProps {
  open: boolean;
  onClose: () => void;
  simulation?: Simulation;
}

const SimulationModal: React.FC<SimulationModalProps> = ({
  open,
  onClose,
  simulation = {},
}) => {
  const { loanValue, numberOfInstallments, installmentValue, monthlyInterest } =
    simulation;
  return (
    <BaseModal
      title="Novo Empréstimo"
      titleSize="medium"
      open={open}
      onClose={onClose}
    >
      <Container>
        <p>O valor do seu empréstimo é de {formatBRLMoney(loanValue)}</p>
        <p>
          Em {numberOfInstallments} parcelas de{' '}
          {formatBRLMoney(installmentValue)}
        </p>
        <p>juros fixos de {monthlyInterest}% aos mês</p>
      </Container>
    </BaseModal>
  );
};

export default SimulationModal;
