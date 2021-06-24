import React from 'react';
import { GiReceiveMoney, GiPayMoney, GiMoneyStack } from 'react-icons/gi';
import ValueCard from '../../molecules/ValueCard';
import Avatar from '../../atoms/Avatar';
import formatBRLMoney from '../../../utils/formatMoney';
import { useLoan } from '../../../providers/LoanProvider';
import { Container, CardContainer } from './style';

const Header = () => {
  const { overview, loading } = useLoan();

  const { amountTaken, amountPaid, toBePaid } = overview;

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
          value={formatBRLMoney(amountPaid)}
          icon={<GiPayMoney />}
          loading={loading}
        />
        <ValueCard
          title="A Pagar"
          value={formatBRLMoney(toBePaid)}
          icon={<GiMoneyStack />}
          loading={loading}
        />
      </CardContainer>
    </Container>
  );
};

export default Header;
