import styled from 'styled-components';
import BaseCard from '../../atoms/BaseCard';

export const Card = styled(BaseCard)`
  color: ${(props) => props.theme.colors.fontColor};
  margin: 40px;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 20px 20px 20px 20px;
  h1 {
    margin-top: 20px;
  }
  @media (max-width: 500px) {
    width: 350px;

    h1 {
      text-align: center;
    }
  }
`;
