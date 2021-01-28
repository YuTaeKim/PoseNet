import React, { useEffect, useContext, useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  handleRef?: any;
}

const MobxRender = ({ handleRef }: Props) => {
  return (
    <Container ref={handleRef}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: '25px',
        }}
      >
        <Title>Mobx Render</Title>
      </div>
      <ContentBox>
        <Text> &#123;children&#125;을 쓰면 re-render X</Text>
        <Text>부모 컴퍼넌트가 re-render되면 자식 컴퍼넌트도 re-render</Text>
        <Text>모든 effect 받아서 바뀐 부분부터 re-render</Text>
        <Text>observer가 없으면 바뀐 값을 인지하지 못한다</Text>
        <Text>
          mobx도 observer가 있는 부분에서 바뀐 부분부터 re-render하지만 자식
          컴퍼넌트에서 observer가 있으면 변화를 감지해서 render 여부를 판단하고
          없으면 re-render 된다. 단, 자식 컴퍼넌트에 observer가 있을 때 mobx를
          통해서가 아닌 부모에서 전달받는 변수가 변하면 re-render 되고 변하지
          않으면 re-render X
        </Text>
        <Text>useEffect에 dependency를 적정하게 정해야 함</Text>
      </ContentBox>
    </Container>
  );
};

export default MobxRender;

const Container = styled.div``;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 50%;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #557174;
`;

const Text = styled.li`
  color: #9dad7f;
  word-break: keep-all;
  text-indent: -1.5rem;
  line-height: 1.5rem;
`;
