import React, { useContext } from 'react';
import Router from 'next/router';
import { observer } from 'mobx-react-lite';

import SignupStore from 'stores/Signup';

import * as T from 'components/Text';
import ButtonBaseComponent from 'components/ButtonBase';
import IconComponent from 'components/Icon';

import { Container, Nav, TextBox, Input, Button } from '../index.styled';

interface Props {
  fixed?: boolean;
  style?: any;
}

const Signup3Container: React.FC<Props> = observer(() => {
  const signupStore = useContext(SignupStore);
  const next = () => {
    if (!signupStore.nicknameLoading) {
      Router.push('/signup/4');
    }
  };
  return (
    <Container style={{ display: 'flex' }}>
      <Nav>
        <ButtonBaseComponent onClick={() => Router.push('/signup/2')}>
          <IconComponent name="arrow-left" color="#585858" />
        </ButtonBaseComponent>
      </Nav>
      <TextBox>
        <T.Text lg>사용할 닉네임을 입력해주세요</T.Text>
      </TextBox>
      <Input
        name="phone"
        label="닉네임"
        placeholder="영문, 국문, 숫자만 입력 가능"
        errorText={signupStore.nicknameError}
        value={signupStore.nickname}
        onChange={signupStore.setNickname}
      />
      <Button
        label="다음"
        round
        loading={signupStore.nicknameLoading}
        disabled={
          signupStore.nickname.length < 3 || signupStore.nicknameError != ''
        }
        onClick={next}
      />
    </Container>
  );
});

export default Signup3Container;
