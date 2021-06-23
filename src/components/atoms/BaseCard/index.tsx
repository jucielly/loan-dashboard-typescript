import styled from 'styled-components';

const BaseCard = styled.div`
  display: flex;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.defaultWhite};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
`;

export default BaseCard;
