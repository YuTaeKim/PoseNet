import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import Navigator from 'components/Navigator';

const HomeContainer = () => {
  return (
    <Wrapper>
      <Background src="/images/background/HomeBackground.jpg" />
      <Header>
        <Container>
          <Navigator />
        </Container>
      </Header>
      <Banner>
        <Container />
      </Banner>
      <Contents>
        <Container />
      </Contents>
      <Footer>
        <Container />
      </Footer>
    </Wrapper>
  );
};

export default HomeContainer;

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const Background = styled.img`
  position: absolute;
  width: 100vw;
  height: 150vh;
  object-fit: cover;
`;
const Header = styled.div`
  position: relative;
  width: 100%;
  height: 15vh;
  background: #111;
  background: rgba(0, 0, 0, 0.5);
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  background: #222;
  background: rgba(051, 051, 051, 0.5);
`;

const Contents = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  background: #333;
  background: rgba(102, 102, 102, 0.5);
`;

const Footer = styled.div`
  position: relative;
  width: 100%;
  height: 20vh;
  background: #444;
  background: rgba(153, 153, 153, 0.5);
`;
const Container = styled.div`
  width: 70%;
  height: inherit;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
`;
