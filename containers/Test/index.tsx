import Router from 'next/router';
import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

const TestContainer = () => {
  return (
    <Container>
      sssss<button onClick={() => Router.push('/')}>click</button>
    </Container>
  );
};

export default TestContainer;

const Container = styled.div<any>`
  height: 100vh;
  overflow-y: scroll;
`;
