import React, { useEffect, useContext, useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  handleRef?: any;
}

const Push = ({ handleRef }: Props) => {
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
        <Title>Push</Title>
      </div>
      <ContentBox>
        <Button>Push Button</Button>
      </ContentBox>
    </Container>
  );
};

export default Push;

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

const Button = styled.button`
  font-size: 1.2rem;
  width: max-content;
  border-radius: 50%;
`;
