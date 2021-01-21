import React from 'react';
import { useRouter } from 'next/router';

import theme from 'layout/theme';
import Icon from 'components/Icon';

import { NavWrap, Logo } from './nav.styled';

const Nav = () => {
  const router = useRouter();
  return (
    <NavWrap isQR>
      <Logo onClick={() => router.push('/')} src="/icons/logo_white.png" isQR />
      <Icon
        name="close"
        color={theme.color.WHITE}
        onClick={() => router.back()}
      />
    </NavWrap>
  );
};

export default Nav;
