import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';

import SocialBoxContainer from './SocialBox';

interface Props {
  fixed?: boolean;
  style?: any;
}

const MainContainer: React.FC<Props> = () => {
  return (
    <Container>
      <TextBox>
        <p>
          스타트업 전문 개발사
          <br />
          엑셀러레이터
        </p>
        <Logo src="/icons/logo_black.png" />
      </TextBox>
      <SocialBoxContainer />
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Large PC */
  width: 535px;

  /* Small PC */
  ${(props) => props.theme.window.pc} {
    width: 535px;
  }
  /* Tab */
  ${(props) => props.theme.window.tab} {
    width: 345px;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    width: calc(100% - 40px);
    padding: 0 20px;
  }
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  > p {
    color: ${theme.color.GRAY5};
    line-height: 1.8;
  }
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    margin-top: auto;
  }
`;

const Logo = styled.img`
  width: 250px;
  margin-top: 22px;
`;
