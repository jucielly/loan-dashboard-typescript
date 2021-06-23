import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
