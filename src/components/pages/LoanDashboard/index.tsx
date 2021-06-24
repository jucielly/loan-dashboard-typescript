import React from 'react';
import Header from '../../organisms/Header';
import InstallmentCard from '../../organisms/InstallmentsCard';
import LoansimulatorCard from '../../organisms/LoanSimulatorCard';
import { Container } from './style';

const LoanDashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <InstallmentCard />
        <LoansimulatorCard />
      </Container>
    </>
  );
};

export default LoanDashboard;
