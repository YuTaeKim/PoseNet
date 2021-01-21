import React, { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
// components
import * as T from 'components/Text';
import ButtonBaseComponent from 'components/ButtonBase';
import IconComponent from 'components/Icon';

import { formatTimer } from 'utils/format';

import {
  Container,
  Nav,
  TextBox,
  Input,
  Button,
  ActionButton,
} from '../index.styled';

import { observer } from 'mobx-react-lite';
import SignupStore from 'stores/Signup';

type Props = {
  fixed?: boolean;
  style?: any;
};

const Signup2Container: React.FC<Props> = observer(() => {
  const signupStore = useContext(SignupStore);
  const [sendLoading, setSendLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (signupStore.count > 0) {
        signupStore.count -= 1;
      }
    }, 1000);
  }, [signupStore.count]);

  useEffect(() => {
    if (signupStore.code.length > 5) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [signupStore.code]);

  const resend = () => {
    // TO DO
    // API 연동
    console.log(setSendLoading);
    // if (!sendLoading) {
    //   setSendLoading(true);
    //   setTimeout(() => {
    //     signupStore
    //       .sendSMS()
    //       .then(() => {
    //         signupStore.count = 180;
    //       })
    //       .catch((e: any) => {
    //         const error = e.response.data;
    //         if (error.phone) {
    //           signupStore.phoneError = error.phone;
    //           Router.push('/signup/1');
    //         }
    //       })
    //       .finally(() => setSendLoading(false));
    //   }, 800);
    // }
  };

  const next = () => {
    if (!loading) {
      // TO DO
      // API 연동
      setLoading(true);
      // setTimeout(() => {
      //   signupStore
      //     .confirmSMS()
      //     .then((res: any) => {
      //       signupStore.phoneToken = res.data.phone_token;
      //       Router.push('/signup/3');
      //     })
      //     .catch((e: any) => {
      //       const error = e.response.data;
      //       signupStore.code = '';
      //       if (error.phone) {
      //         signupStore.phoneError = error.phone;
      //         Router.push('/signup/1');
      //       }
      //       signupStore.codeError = error?.non_field_errors || error?.code;
      //     })
      //     .finally(() => setSendLoading(false));
      // }, 800);
    }
  };

  return (
    <Container style={{ display: 'flex' }}>
      <Nav>
        <ButtonBaseComponent onClick={() => Router.push('/signup/1')}>
          <IconComponent name="arrow-left" color="#585858" />
        </ButtonBaseComponent>
      </Nav>
      <TextBox>
        <T.Text lg>전송된 인증번호를 입력하세요</T.Text>
      </TextBox>
      <Input
        name="code"
        label="인증번호"
        placeholder="인증번호 입력"
        value={signupStore.code}
        onChange={signupStore.setCode}
        errorText={signupStore.codeError}
        action={
          signupStore.count > 0 ? (
            <ActionButton label={formatTimer(signupStore.count)} disabled />
          ) : (
            <ActionButton
              label="재전송"
              onClick={resend}
              loading={sendLoading}
            />
          )
        }
      />
      <Button
        label="다음"
        round
        disabled={!active}
        loading={loading}
        onClick={next}
      />
    </Container>
  );
});

export default Signup2Container;
