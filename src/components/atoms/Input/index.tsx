import styled from 'styled-components';

const Input = styled.input`
  color: ${(props) => props.theme.colors.fontColor};
  text-align: center;
  width: 300px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  transition: 0.3s;
  margin-bottom: 10px;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.helper};
  }
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.helper};
    cursor: pointer;
  }
`;

export default Input;
