import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: ${(props) => props.theme.fonts.fontSizes.mediumSmall};
  }
  @media (max-width: 500px) {
    p {
      text-align: center;
    }
  }
`;
