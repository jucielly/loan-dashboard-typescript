import React, { createContext, useContext, useState, useEffect } from 'react';
import { LoanService } from '../../services/loanService';
import { Installment } from '../../types/installment';

interface LoanProviderTypes {
  overview: {
    installments: Installment[];
    amountTaken: number;
    amountPaid: number;
    monthlyInterest: number;
    totalAmountInTaxes: number;
    toBePaid: number;
  };
  loading: boolean;
  payInstallment: (installment: Installment) => void;
}

const loanContext = createContext<LoanProviderTypes>({
  overview: {
    installments: [],
    amountTaken: 0,
    amountPaid: 0,
    monthlyInterest: 0,
    totalAmountInTaxes: 0,
    toBePaid: 0,
  },
  payInstallment: () => {
    throw new Error('Wrap this with loanContext provider');
  },
  loading: false,
});
export const useLoan = () => useContext(loanContext);

const LoanProvider: React.FC<LoanProviderTypes> = ({ children }) => {
  const [overview, setOverview] = useState<LoanProviderTypes['overview']>({
    installments: [],
    amountTaken: 0,
    amountPaid: 0,
    monthlyInterest: 0,
    totalAmountInTaxes: 0,
    toBePaid: 0,
  });
  const [loading, setLoading] = useState(false);

  const updateOverview = (overview: LoanProviderTypes['overview']) => {
    const amountPaid = overview.installments.reduce((previous, installment) => {
      if (installment.paid) {
        return previous + installment.value;
      }
      return previous;
    }, 0);

    const toBePaid =
      overview.amountTaken + overview.totalAmountInTaxes - amountPaid;
    setOverview({
      ...overview,
      amountPaid,
      toBePaid,
    });
  };

  const payInstallment = (installment: Installment) => {
    const { dueDate } = installment;
    const updatedInstallments = overview.installments.map((installment) => ({
      ...installment,
      paid: installment.dueDate === dueDate ? true : installment.paid,
    }));
    updateOverview({ ...overview, installments: updatedInstallments });
  };

  useEffect(() => {
    setLoading(true);
    LoanService.getOverview()
      .then((data) => {
        updateOverview(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <loanContext.Provider value={{ overview, loading, payInstallment }}>
      {children}
    </loanContext.Provider>
  );
};

export default LoanProvider;
