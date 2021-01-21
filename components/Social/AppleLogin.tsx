import React from 'react';
import Router from 'next/router';
import * as T from 'components/Text';
import theme from 'layout/theme';
import { Button, Icon } from './Social.styled';

import { APPLE_LOGIN_URL } from './_settings';

const APPLE_LOGO = '/images/socialLogin/apple_logo.png';

interface Props {
  round?: boolean;
  style?: any;
  children?: any;
}

const AppleLoginComponent: React.FC<Props> = ({ round, ...props }) => {
  return (
    <Button
      {...props}
      label={
        <T.Text style={{ color: theme.color.WHITE }}>Apple로 로그인</T.Text>
      }
      backgroundColor={'#000'}
      borderColor={'#000'}
      round={round}
      onClick={() => Router.replace(APPLE_LOGIN_URL)}
      icon={<Icon round={round} src={APPLE_LOGO} start />}
    />
  );
};

export default AppleLoginComponent;
