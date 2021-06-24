import styled from 'styled-components';

interface LabelProps {
  color: string;
}

const Label = styled.span<LabelProps>`
  color: ${(props) => props.theme.colors.defaultWhite};
  font-size: ${(props) => props.theme.fonts.fontSizes.small};
  font-family: ${(props) => props.theme.fonts.default};
  background-color: ${(props) => props.theme.colors[props.color]};
  font-weight: 500;
  border: none;
  padding: 1px 6px;
  border-radius: 20px;
  margin-bottom: 5px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: 0.3s;
  cursor: default;
`;

export default Label;
