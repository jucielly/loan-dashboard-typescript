import React, { useState } from 'react';
import InstallmentListItem from '../../molecules/InstallmentLIstItem';
import AntecipateModal from '../AntecipateModal';
import { useLoan } from '../../../providers/LoanProvider';
import LoadingSpinner from '../../atoms/LoadingSpinner';
import { Installment } from '../../../types/installment';

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
    payInstallment(paidInstallment);
    handleCloseModal();
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
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
    </>
  );
};

export default InstallmentList;