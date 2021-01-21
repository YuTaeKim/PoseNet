import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import { Props } from './types';
import { red } from '@material-ui/core/colors';

import Main from './index';
import First from './First';

console.log('Start Second');

const SecondContainer: React.FC<Props> = () => {
  const router = useRouter();
  useEffect(() => {
    console.log('Second effect');
  });

  return <Container>{console.log('Second render')}Second</Container>;
};

export default SecondContainer;

const Container = styled.div`
  /* width: 100vw; */
  height: 100vh;
  display: flex;
  justify-content: flex-end;
`;
