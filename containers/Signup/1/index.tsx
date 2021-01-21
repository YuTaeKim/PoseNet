import React, { useContext, useEffect, useState } from 'react';
import Router from 'next/router';

// components
import * as T from 'components/Text';
import ButtonBaseComponent from 'components/ButtonBase';
import IconComponent from 'components/Icon';

import { Container, Nav, TextBox, Input, Button } from '../index.styled';

import { observer } from 'mobx-react-lite';
import SignupStore from 'stores/Signup';

type Props = {
  fixed?: boolean;
  style?: any;
};

const Signup1Container: React.FC<Props> = observer(() => {
  const [active, setActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const signupStore = useContext(SignupStore);
  useEffect(() => {
    console.log('token : ', signupStore.access);
    if (signupStore.phone.length > 10) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [signupStore.phone]);

  const next = () => {
    // TO DO
    // API 연동
    console.log(setLoading);
    // if (!loading) {
    //   setLoading(true);
    //   setTimeout(() => {
    //     signupStore
    //       .sendSMS()
    //       .then((res: any) => {
    //         if (res.status < 300) {
    //           signupStore.count = 180;
    //           Router.push('/signup/2');
    //         }
    //       })
    //       .catch((e: any) => {
    //         const error = e.response.data;
    //         signupStore.phoneError = error?.non_field_errors || error?.phone;
    //       })
    //       .finally(() => () => setLoading(false));
    //   }, 800);
    // }
  };
  return (
    <Container>
      <Nav>
        <ButtonBaseComponent onClick={() => Router.push('/login')}>
          <IconComponent name="arrow-left" color="#585858" />
        </ButtonBaseComponent>
      </Nav>
      <TextBox>
        <T.Text lg>
          본인인증을 위한
          <br />
          핸드폰 번호를 입력하세요
        </T.Text>
      </TextBox>
      <Input
        name="phone"
        label="핸드폰번호"
        placeholder="핸드폰 번호 입력('-'제외)"
        value={signupStore.phone}
        onChange={signupStore.setPhone}
        errorText={signupStore.phoneError}
      />
      <Button
        label="다음"
        round
        loading={loading}
        disabled={!active || signupStore.phoneError != ''}
        onClick={next}
      />
    </Container>
  );
});

export default Signup1Container;
