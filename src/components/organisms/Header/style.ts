import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 200px;
  padding: 20px;
  color: ${(props) => props.theme.colors.defaultWhite};
  background-color: ${(props) => props.theme.colors.primary};
  margin-bottom: 60px;
  h1 {
    flex-grow: 1;
  }
`;
export const CardContainer = styled.div`
  position: absolute;
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: 500px) {
    width: 90%;
    flex-direction: column;
    margin: 140px 0 20px 0;
  }
`;
