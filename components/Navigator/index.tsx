import React from 'react';
import styled from 'styled-components';

const Navigator = () => {
  return (
    <Wrapper>
      <Logo>KICK IT</Logo>
      <Menus>
        <Menu>HOME</Menu>
        <Menu>MATCHING</Menu>
        <Menu>FORMATION</Menu>
        <Menu>TEAM</Menu>
        <Menu>ACCOUNT</Menu>
      </Menus>
      <Items>
        <Item>LOG IN</Item>
        <Item>SIGN UP</Item>
      </Items>
    </Wrapper>
  );
};

export default Navigator;

const Wrapper = styled.div`
  width: 100%;
  height: inherit;
  color: white;
  border-bottom: 1px solid white;
  display: grid;
  gid-template-columns: 1fr 4fr 1fr;
`;

const Logo = styled.div`
  grid-column: 1 / span 1;
  padding-top: 6vh;
  font-family: 'gothic';
  font-size: 3.5rem;
`;

const Menus = styled.div`
  grid-column: 2 / span 1;
`;

const Menu = styled.div`
  float: left;

  font-size: 1.2rem;
  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

const Items = styled.div`
  grid-column: 3 / span 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  alitn-items: center;
  justify-content: center;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  alitn-items: center;
  justify-content: center;
  &:hover {
    background: rosybrown;
  }
`;
