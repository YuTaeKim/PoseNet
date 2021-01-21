import React, { useState } from 'react';
import Router from 'next/router';

import Container from 'components/Container';
import ContentContainer from './Content';
import Tabs from 'components/Tabs';
import BottomNavigation from 'components/BottomNavigation';
import BottomNavigationAction from 'components/BottomNavigationAction';

type Props = {
  fixed?: boolean;
  style?: any;
};

const CATEGORIES = [
  { id: 1, name: '벽지' },
  { id: 2, name: '장판' },
  { id: 3, name: '필름' },
  { id: 4, name: '데코타일' },
  { id: 5, name: '포트폴리오' },
  { id: 6, name: '마루' },
  { id: 7, name: '몰딩' },
  { id: 8, name: '문' },
  { id: 9, name: '욕실' },
];

const MobileBottomNav = () => {
  const [active, setActive] = useState(0);
  return (
    <BottomNavigation setActive={setActive} active={active}>
      <BottomNavigationAction
        label="홈"
        icon="home"
        onClick={() => Router.push('/')}
      />
      <BottomNavigationAction label="채팅" icon="chat" />
      <BottomNavigationAction label="장바구니" icon="shopping" />
      <BottomNavigationAction
        label="마이페이지"
        icon="mypage"
        onClick={() => Router.push('/login')}
      />
    </BottomNavigation>
  );
};

const MainContainer: React.FC<Props> = () => {
  return (
    <>
      <MobileBottomNav />
      <Tabs data={CATEGORIES} />
      <Container>
        <ContentContainer />
      </Container>
    </>
  );
};

export default MainContainer;
