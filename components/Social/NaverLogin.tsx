import React from 'react';
import Router from 'next/router';

import * as T from 'components/Text';
import { Button, Icon } from './Social.styled';

import { NAVER_LOGIN_URL } from './_settings';

const NAVER_LOGO = '/images/socialLogin/naver_logo.png';

interface Props {
  round?: boolean;
  style?: any;
  children?: any;
}

const NaverLoginComponent: React.FC<Props> = ({ round, ...props }) => {
  return (
    <Button
      {...props}
      label={<T.Text style={{ color: '#fff' }}>네이버로 로그인</T.Text>}
      backgroundColor={'#20cf5d'}
      borderColor={'#20cf5d'}
      round={round}
      onClick={() => Router.replace(NAVER_LOGIN_URL)}
      icon={<Icon round={round} src={NAVER_LOGO} start />}
    ></Button>
  );
};

export default NaverLoginComponent;
