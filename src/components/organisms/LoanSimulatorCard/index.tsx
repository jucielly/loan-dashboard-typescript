import React from 'react';
import LoanSimulatorForm from '../LoanSimulatorForm';
import { Card } from './style';

const LoanSimulatorCard = () => {
  return (
    <Card>
      <h1>Simular Novo Emprestimo</h1>
      <LoanSimulatorForm />
    </Card>
  );
};

export default LoanSimulatorCard;
