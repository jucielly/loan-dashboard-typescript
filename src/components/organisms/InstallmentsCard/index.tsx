import React from 'react';
import InstallmentList from '../InstallmentList';
import { Card } from './style';

const InstallmentsCard = () => {
  return (
    <Card>
      <h1>Parcelas Restantes</h1>
      <InstallmentList />
    </Card>
  );
};
export default InstallmentsCard;
