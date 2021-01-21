import React, { useState } from 'react';

import BottomNavigation from 'components/BottomNavigation';
import BottomNavigationAction from 'components/BottomNavigationAction';

export default { title: 'Example/components/BottomNavigation' };

export const BottomNavigation1 = () => {
  const [active, setActive] = useState(0);
  return (
    <BottomNavigation setActive={setActive} active={active}>
      <BottomNavigationAction label="home" icon="home" />
      <BottomNavigationAction label="chat" icon="chat" />
      <BottomNavigationAction label="mypage" icon="mypage" />
      <BottomNavigationAction label="shopping" icon="shopping" />
    </BottomNavigation>
  );
};

export const BottomNavigation2 = () => {
  const [active, setActive] = useState(0);
  return (
    <BottomNavigation setActive={setActive} active={active}>
      <BottomNavigationAction icon="home" />
      <BottomNavigationAction icon="chat" />
      <BottomNavigationAction icon="mypage" />
      <BottomNavigationAction icon="shopping" />
    </BottomNavigation>
  );
};
