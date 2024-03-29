import React, { useState } from 'react';
import InstallmentListItem from '../../molecules/InstallmentListItem';
import AntecipateModal from '../AntecipateModal';
import { useLoan } from '../../../providers/LoanProvider';
import { Installment } from '../../../types/installment';
import Loader from '../../atoms/Loader';
import { Container } from './style';

const InstallmentList: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [installment, setInstalment] = useState<Installment>();
  const { overview, loading, payInstallment } = useLoan();
  const installments = overview.installments || [];

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleAntecipate = (antecipatedInstallment?: Installment) => () => {
    setInstalment(antecipatedInstallment);
    setOpen(true);
  };

  const handlePayInstallment = (paidInstallment?: Installment) => () => {
    if (paidInstallment) payInstallment(paidInstallment);
    handleCloseModal();
  };

  if (loading) {
    return (
      <Container>
        <Loader className="loader" />
      </Container>
    );
  }
  return (
    <Container>
      <AntecipateModal
        open={open}
        onClose={handleCloseModal}
        installment={installment}
        payInstallment={handlePayInstallment(installment)}
      />
      <ul>
        {installments.map((installment) => {
          return (
            <InstallmentListItem
              key={installment.dueDate}
              installment={installment}
              onAntecipate={handleAntecipate(installment)}
            />
          );
        })}
      </ul>
    </Container>
  );
};

export default InstallmentList;
