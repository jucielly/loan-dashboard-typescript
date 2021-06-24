import styled from 'styled-components';
import BaseCard from '../../atoms/BaseCard';

interface ModalProps {
  titleSize?: string;
  open: boolean;
}

const animateModal =
  (opacity = 1) =>
  ({ open }: ModalProps) => {
    const duration = '0.2s';
    return open
      ? ` 
    visibility: visible;
    opacity: ${opacity};
    transition: visibility 0s, opacity ${duration} ease-in-out;
    `
      : ` 
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity ${duration} ease-in-out;`;
  };

export const Modal = styled(BaseCard)<ModalProps>`
  color: ${(props) => props.theme.colors.fontColor};
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 600px;
  z-index: 900;
  height: 200px;
  ${animateModal(1)}
  .container {
    margin: 10px 0px 10px 0px;
    display: flex;
    h1 {
      font-size: ${(props) =>
        props.theme.fonts.fontSizes[props.titleSize || 'mediumSmall']};
    }
    .closeBtn {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: ${(props) => props.theme.fonts.fontSizes.medium};
      border: none;
      background-color: transparent;
      transition: 0.3s;
      &:hover,
      &:focus {
        outline: none;
        color: ${(props) => props.theme.colors.danger};
      }
    }
  }
  @media (max-width: 500px) {
    h1 {
      text-align: center;
    }
    justify-content: center;
    width: 350px;
    height: 290px;
  }
`;
Modal.defaultProps = {
  titleSize: 'mediumSmall',
};

interface OverlayProps {
  open: boolean;
  titleSize?: string;
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 800;
  background-color: #333;
  ${animateModal(0.7)}
`;
