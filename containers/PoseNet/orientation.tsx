import Router from 'next/router';
import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

const OrientaionContainer = () => {
  return (
    <Container>
      <Title onClick={() => Router.push('/taste')}>PoseNet 맛보기</Title>
      <Title onClick={() => Router.push('/reference')}>
        Pro Pose Reference
      </Title>
      <Title onClick={() => Router.push('/')}>Pro Pose 맛보기</Title>
    </Container>
  );
};

export default OrientaionContainer;

const Container = styled.div<any>`
  height: 100vh;
  max-width: 985px;
  background-color: #faf3f3;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.button`
  background-color: #e1e5ea;
  padding: 15px;
  border: 0;
  border-radius: 10px;
  :hover {
    background-color: #a7bbc7;
  }
  font-size: 2rem;
`;
