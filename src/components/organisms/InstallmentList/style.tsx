import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  .loader {
    margin-top: 30px;
    margin-bottom: 30px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
