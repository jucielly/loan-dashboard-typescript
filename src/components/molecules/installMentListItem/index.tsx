import React from 'react';
import formatBRLMoney from '../../../utils/formatMoney';
import Label from '../../atoms/Label';
import { AnticipateButton, StyledValueCard } from './style';
import { Installment } from '../../../types/installment';

interface InstallmentListProps {
  installment: Installment;
  onAntecipate: () => void;
}

const InstallmentListItem: React.FC<InstallmentListProps> = ({
  installment,
  onAntecipate,
}) => {
  const { value, dueDate } = installment;
  const formatedValue = formatBRLMoney(value);
  return (
    <StyledValueCard>
      <span className="value">{formatedValue}</span>
      <span className="date">{dueDate}</span>
      {!installment.paid && (
        <AnticipateButton color="terciary" onClick={onAntecipate}>
          Antecipar
        </AnticipateButton>
      )}
      {installment.paid && <Label color="success">Parcela paga</Label>}
    </StyledValueCard>
  );
};

export default InstallmentListItem;
