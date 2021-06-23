import styled from 'styled-components';
import { darken } from 'polished';

interface ButtonProps {
  color: string;
}

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.theme.colors.defaultWhite};
  font-size: ${(props) => props.theme.fonts.fontSizes.small};
  font-family: ${(props) => props.theme.fonts.default};
  background-color: ${(props) => props.theme.colors[props.color]};
  font-weight: 500;
  border: none;
  padding: 5px 90px;
  margin: 10px 0 10px 0;
  border-radius: 20px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: 0.3s;
  &:hover {
    background: ${(props) => darken(0.2, props.theme.colors[props.color])};
  }
  &:active,
  &:focus {
    outline: none;
  }
`;
Button.defaultProps = {
  color: 'primary',
};
export default Button;
