import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  color: ${(props) => darken(0.4, props.theme.colors.helper)};
  p {
    color: ${(props) => props.theme.colors.danger};
    margin: 0;
    padding: 0;
  }
`;
