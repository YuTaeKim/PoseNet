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
      <Grid>aaa</Grid>
      <Grid>bbb</Grid>
      <Grid>ccc</Grid>
      <Grid>ddd</Grid>
      <Grid>eee</Grid>
      <Grid>aaa</Grid>
      <Grid>bbb</Grid>
      <Grid>ccc</Grid>
      <Grid>ddd</Grid>
      <Grid>eee</Grid> <Grid>aaa</Grid>
      <Grid>bbb</Grid>
      <Grid>ccc</Grid>
      <Grid>ddd</Grid>
      <Grid>eee</Grid> <Grid>aaa</Grid>
      <Grid>bbb</Grid>
      <Grid>ccc</Grid>
      <Grid>ddd</Grid>
      <Grid>eee</Grid>
    </Container>
  );
};

export default TestContainer;

const Container = styled.div<any>`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(4, 200px);
  justify-content: space-around;
  align-content: space-around;
`;

const Grid = styled.div`
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//dddd
