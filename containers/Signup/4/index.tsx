import React, { useContext, useRef } from 'react';
import Router from 'next/router';
import { observer } from 'mobx-react-lite';

import SignupStore from 'stores/Signup';

import * as T from 'components/Text';
import ButtonBaseComponent from 'components/ButtonBase';
import Icon from 'components/Icon';

import { Container, Nav, TextBox, Button, AvatarBox } from '../index.styled';

const DEFAULT_IMAGE = '/images/profile_default.png';

interface Props {
  fixed?: boolean;
  style?: any;
}

const Signup4Container: React.FC<Props> = observer(() => {
  const signupStore = useContext(SignupStore);
  const inputRef = useRef<any>(null);
  const handleImageChange = (e: any) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      signupStore.image = { file: file, preview: reader.result };
    };
    reader.readAsDataURL(file);
  };
  return (
    <Container style={{ display: 'flex' }}>
      <Nav>
        <ButtonBaseComponent onClick={() => Router.push('/signup/2')}>
          <Icon name="arrow-left" color="#585858" />
        </ButtonBaseComponent>
      </Nav>
      <TextBox>
        <T.Text lg>프로필 사진을 등록해 주세요.(선택)</T.Text>
      </TextBox>
      <input
        ref={inputRef}
        name="avatar"
        type="file"
        hidden
        onChange={handleImageChange}
      />
      <AvatarBox
        onClick={() => inputRef.current.click()}
        src={
          signupStore.image.preview ? signupStore.image.preview : DEFAULT_IMAGE
        }
      >
        <div />
        <span>
          <Icon name="plus" color="#fff" />
        </span>
      </AvatarBox>
      <T.Text>{signupStore.nickname}</T.Text>
      <Button label="완료" round onClick={signupStore.register} />
    </Container>
  );
});

export default Signup4Container;
