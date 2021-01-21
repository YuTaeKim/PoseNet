import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import { Props } from './types';
import { red } from '@material-ui/core/colors';

import First from './First';
import Second from './Second';

import Message from 'components/Icon/Message';

console.log('Start Main');

const MainContainer: React.FC<Props> = () => {
  const router = useRouter();
  useEffect(() => {
    console.log('Main effect');
  });

  return (
    <Container>
      <First>
        <p>i am children</p>
        <p>i am children2</p>
      </First>
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  position: absolute;
  background-color: blue;
  opacity: 0.5;
  width: 100%;
  height: 50px;
`;

const Box1 = styled.div`
  height: 100vh;
  background-color: pink;
  overflow-y: scroll;
`;

const Text = styled.h1`
  font-size: 10rem;
`;
