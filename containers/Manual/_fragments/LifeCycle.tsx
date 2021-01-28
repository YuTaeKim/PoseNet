import React, { useEffect, useContext, useState } from 'react';
import styled, { css } from 'styled-components';

console.log('LifeCycle download');

interface Props {
  handleRef?: any;
}

const LifeCycle = ({ handleRef }: Props) => {
  return (
    <Container ref={handleRef}>
      {/* {console.log('LifeCycle render')} */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: '25px',
        }}
      >
        <Title>Life Cycle</Title>
        <Button
          onClick={() => {
            console.log('ehc');
            const elements = document.getElementsByClassName('animation');
            for (var i = 0; i < elements.length; i++) {
              elements[i].classList.remove('run_animation');
            }
            void elements[0].clientWidth;
            for (var i = 0; i < elements.length; i++) {
              elements[i].classList.add('run_animation');
            }
          }}
        >
          Try Rotation Animation
        </Button>
      </div>
      <ContentBox>
        <SubContentBox>
          <SubTitle>Server Side</SubTitle>
          <Content className="animation run_animation">
            <Text>_document download</Text>
            <Text>_app download</Text>
            <Text>Layout download</Text>
            <Text>LifeCycle download</Text>
            <Text>ManualContainer download</Text>
            <Text>page download</Text>
            <Text>_app render</Text>
            <Text>page render</Text>
            <Text>Layout render</Text>
            <Text>ManualContainer render</Text>
            <Text>LifeCycle render</Text>
            <Text>_document render</Text>
          </Content>
        </SubContentBox>
        <SubContentBox>
          <SubTitle>Client Side</SubTitle>
          <Content className="animation run_animation">
            <Text>_app download</Text>
            <Text>Layout download</Text>
            <Text>LifeCycle download</Text>
            <Text>ManualContainer download</Text>
            <Text>page download</Text>
            <Text>_app render</Text>
            <Text>page render</Text>
            <Text>Layout render</Text>
            <Text>ManualContainer render</Text>
            <Text>LifeCycle render</Text>
            <Text>LifeCycle effect</Text>
            <Text>LifeCycle effect2 (all dependency)</Text>
            <Text>ManualContainer effect</Text>
            <Text>Layout effect</Text>
            <Text>Layout render</Text>
            <Text>ManualContainer render</Text>
            <Text>LifeCycle render</Text>
            <Text>LifeCycle effect2</Text>
          </Content>
        </SubContentBox>
      </ContentBox>
    </Container>
  );
};

export default LifeCycle;

const Container = styled.div``;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #557174;
`;

const Button = styled.button`
  position: absolute;
  transform: translateX(+100%);
  border-radius: 20px;
  background-color: white;
  border: 2px solid #0a043c;
  z-index: 2;
  :hover {
    cursor: pointer;
  }
`;

const SubContentBox = styled.div``;

const SubTitle = styled.h2`
  color: #557174;
  margin-bottom: 10px;
`;

const Content = styled.div`
  &.run_animation {
    > p {
      animation-name: rotate;
      animation-duration: 1s;

      @keyframes rotate {
        100% {
          transform: rotate(720deg);
        }
      }
    }
  }
`;

const Text = styled.p`
  color: #9dad7f;
  line-height: 1.3rem;
`;
