import React from 'react';
import styled, { css } from 'styled-components';

export interface ModalProps {
  visible: boolean;
  closeModal: any;
  slide?: 'top' | 'bottom' | 'right' | 'left' | undefined;
  position?: 'top' | 'bottom' | 'right' | 'left' | undefined;
  children?: any;
}

const ModalComponent: React.FC<ModalProps> = ({
  visible,
  children,
  position,
  closeModal,
  slide,
  ...props
}) => {
  return (
    <Dim {...props} visible={visible} onClick={closeModal}>
      <Modal
        visible={visible}
        slide={slide}
        position={position}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Modal>
    </Dim>
  );
};

export default ModalComponent;

interface styleProps {
  visible?: boolean;
  slide?: 'top' | 'bottom' | 'right' | 'left' | undefined;
  position?: 'top' | 'bottom' | 'right' | 'left' | undefined;
}

const Dim = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.2s ease;
  ${(props: styleProps) =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`;

const Modal = styled.div<styleProps>`
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    transition: 0.2s ease;
  }

  ${(props) =>
    props.slide === 'top' &&
    css`
      > div {
        margin-bottom: 50px;
      }
    `}
  ${(props) =>
    props.slide === 'bottom' &&
    css`
      > div {
        margin-top: 50px;
      }
    `}
  ${(props) =>
    props.slide === 'right' &&
    css`
      > div {
        margin-left: 50px;
      }
    `}
  ${(props) =>
    props.slide === 'left' &&
    css`
      > div {
        margin-right: 50px;
      }
    `}

  ${(props) =>
    props.position === 'top' &&
    css`
      justify-content: flex-start;
    `}
  ${(props) =>
    props.position === 'bottom' &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.position === 'right' &&
    css`
      align-items: flex-end;
    `}
  ${(props) =>
    props.position === 'left' &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.visible &&
    css`
      > div {
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
        margin-right: 0px;
      }
    `}

    ${(props) =>
    props.position === 'top' &&
    props.slide === 'top' &&
    css`
      > div {
        position: absolute;
        top: -50px;
        ${(props: styleProps) =>
          props.visible &&
          css`
            top: 0px;
          `}
      }
    `}

    ${(props) =>
    props.position === 'bottom' &&
    props.slide === 'bottom' &&
    css`
      > div {
        position: absolute;
        bottom: -50px;
        ${(props: styleProps) =>
          props.visible &&
          css`
            bottom: 0px;
          `}
      }
    `}

    ${(props) =>
    props.position === 'right' &&
    props.slide === 'right' &&
    css`
      > div {
        position: absolute;
        right: -50px;
        ${(props: styleProps) =>
          props.visible &&
          css`
            right: 0px;
          `}
      }
    `}

    ${(props) =>
    props.position === 'left' &&
    props.slide === 'left' &&
    css`
      > div {
        position: absolute;
        left: -50px;
        ${(props: styleProps) =>
          props.visible &&
          css`
            left: 0px;
          `}
      }
    `}
`;
