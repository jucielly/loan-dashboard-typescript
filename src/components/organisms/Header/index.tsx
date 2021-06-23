import React from 'react';
import { GiReceiveMoney, GiPayMoney, GiMoneyStack } from 'react-icons/gi';
import ValueCard from '../../molecules/ValueCard';
import Avatar from '../../atoms/Avatar';
import formatBRLMoney from '../../../utils/formatMoney';
import { useLoan } from '../../../providers/LoanProvider';
import { Container, CardContainer } from './style';

const Header = () => {
  const { overview, loading } = useLoan();

  const { amountTaken, amountPayd, toBePayd } = overview;

  return (
    <Container>
      <h1>Meus Empréstimos</h1>
      <Avatar />
      <CardContainer>
        <ValueCard
          title="Recebido"
          value={formatBRLMoney(amountTaken)}
          icon={<GiReceiveMoney />}
          loading={loading}
        />
        <ValueCard
          title="Pago"
          value={formatBRLMoney(amountPayd)}
          icon={<GiPayMoney />}
          loading={loading}
        />
        <ValueCard
          title="A Pagar"
          value={formatBRLMoney(toBePayd)}
          icon={<GiMoneyStack />}
          loading={loading}
        />
      </CardContainer>
    </Container>
  );
};

export default Header;
