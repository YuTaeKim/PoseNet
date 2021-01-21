import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';
import Modal, { ModalProps } from 'components/Modal';

const AddImageModal: React.FC<ModalProps> = ({ ...props }) => {
  return (
    <Modal {...props} slide="bottom" position="bottom">
      <div>
        <ModalBody>
          <div>앨범에서 선택</div>
          <div>카메라 촬영</div>
        </ModalBody>
        <CloseButton onClick={props.closeModal}>
          <p>닫기</p>
        </CloseButton>
      </div>
    </Modal>
  );
};

export default AddImageModal;

const ModalBody = styled.div`
  background-color: ${theme.color.WHITE};
  width: 345px;
  height: 111px;
  border-radius: 10px;
  > div {
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${theme.color.PRIMARY};
    :nth-of-type(1) {
      border-bottom: 1px solid ${theme.color.GRAY4};
    }
  }
`;

const CloseButton = styled.div`
  background-color: ${theme.color.WHITE};
  width: 345px;
  height: 55px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > p {
    color: ${theme.color.PRIMARY};
    font-weight: bold;
  }
`;
