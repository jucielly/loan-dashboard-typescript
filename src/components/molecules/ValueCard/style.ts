import styled from 'styled-components';
import BaseCard from '../../atoms/BaseCard';

export const StyledValueCard = styled(BaseCard)`
  padding: 30px;
  display: flex;
  color: ${(props) => props.theme.colors.fontColor};
  width: 300px;
  padding: 20px 20px 20px 20px;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .value {
      color: ${(props) => props.theme.colors.primary};
      font-size: ${(props) => props.theme.fonts.fontSizes.medium};
    }
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.helper};
    font-size: 80px;
  }
  @media (max-width: 1024px) {
    width: 250px;
    .icon {
      font-size: 50px;
    }
    .value {
      font-size: 1.5em !important;
    }
  }
  @media (max-width: 768px) {
    width: 200px;
    .icon {
      display: none;
    }
  }
  @media (max-width: 500px) {
    padding: 10px;
    justify-content: center;
    width: 100%;
    margin: 5px;
    .container {
      width: 90%;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
    .value,
    h1 {
      font-size: 1.2em !important;
    }
  }
`;
