import React, { useState } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import ModalComponent from 'components/Modal';
import ReadyModal from 'components/Modal/_fragments/ReadyModal';
import AddImageModal from 'components/Modal/_fragments/AddImageModal';
import Container from 'components/Container';
import Button from 'components/Button';

export default {
  title: 'Example/components/Modal',
  component: ModalComponent,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story = (args) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <ModalComponent
        visible={open}
        closeModal={() => setOpen(false)}
        {...args}
      />
      <Button
        onClick={() => setOpen(true)}
        label="Testing Modal"
        width="150px"
      />
    </>
  );
};

const RelativeDiv = styled.div`
  width: 300px;
  height: 100vh;
  background-color: white;
  padding: 30px;
`;

export const testModal = Template.bind({});
testModal.args = {
  position: 'right',
  slide: 'right',
  children: (
    <RelativeDiv>
      <h1>Testing</h1>
    </RelativeDiv>
  ),
};

export const positionModal = () => {
  const [center, setCenter] = useState<boolean>(false);
  const [top, setTop] = useState<boolean>(false);
  const [bottom, setBottom] = useState<boolean>(false);
  const [left, setLeft] = useState<boolean>(false);
  const [right, setRight] = useState<boolean>(false);
  return (
    <>
      <ModalComponent visible={center} closeModal={() => setCenter(false)}>
        <ModalBody>
          <h1>Center</h1>
        </ModalBody>
      </ModalComponent>
      <ModalComponent
        visible={top}
        closeModal={() => setTop(false)}
        position="top"
        slide="top"
      >
        <ModalBody>
          <h1>Top</h1>
        </ModalBody>
      </ModalComponent>
      <ModalComponent
        visible={bottom}
        closeModal={() => setBottom(false)}
        position="bottom"
        slide="bottom"
      >
        <ModalBody>
          <h1>Bottom</h1>
        </ModalBody>
      </ModalComponent>
      <ModalComponent
        visible={left}
        closeModal={() => setLeft(false)}
        position="left"
        slide="left"
      >
        <ModalBodyFull>
          <h1>Left</h1>
        </ModalBodyFull>
      </ModalComponent>
      <ModalComponent
        visible={right}
        closeModal={() => setRight(false)}
        position="right"
        slide="right"
      >
        <ModalBodyFull>
          <h1>Right</h1>
        </ModalBodyFull>
      </ModalComponent>
      <ButtonBox>
        <CustomButton
          onClick={() => setCenter(true)}
          label="Center ReadyModal"
        />
        <CustomButton onClick={() => setTop(true)} label="Top ReadyModal" />
        <CustomButton
          onClick={() => setBottom(true)}
          label="Bottom ReadyModal"
        />
        <CustomButton onClick={() => setLeft(true)} label="Left ReadyModal" />
        <CustomButton onClick={() => setRight(true)} label="Right ReadyModal" />
      </ButtonBox>
    </>
  );
};

const ButtonBox = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  > div {
    margin-bottom: 10px;
    margin-right: 10px;
  }
`;
const CustomButton = styled(Button)`
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 0px 15px;
`;

const ModalBody = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const ModalBodyFull = styled(ModalBody)`
  height: 100vh;
`;

export const readyModal = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <ReadyModal
        visible={visible}
        closeModal={() => setVisible(false)}
        slide="bottom"
      />
      <Button
        width="150px"
        onClick={() => setVisible(true)}
        label="Ready Modal"
      />
    </>
  );
};

export const addImageModal = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <AddImageModal
        visible={visible}
        closeModal={() => setVisible(false)}
        slide="bottom"
      />
      <Button
        width="150px"
        onClick={() => setVisible(true)}
        label="Add Image Modal"
      />
    </>
  );
};
