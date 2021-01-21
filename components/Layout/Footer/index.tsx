import React from 'react';
import Router from 'next/router';

import Container from 'components/Container';

import { FooterWrap, Content, Logo, Info, Social } from './Footer.styled';

const FOOTER_LOGO = '/images/logo_white.png';

interface Props {
  style?: any;
}

const Footer: React.FC<Props> = () => {
  return (
    <FooterWrap>
      <Container>
        <Content>
          <Logo>
            <img src={FOOTER_LOGO} />
          </Logo>
          <Info>
            <ul>
              <li>사업자등록번호 806-86-01721</li>
              {/* <li>대표 서장원</li> */}
              <li>서울시 마포구 와우산로 177-3, 2층</li>
              <li>이메일 : contact@rocketmakers.io</li>
            </ul>
            <p>Copyright © RocketMakers 2020</p>
          </Info>
          <Social>
            <a
              onClick={() => Router.push('/')}
              className="blog"
              style={{ marginRight: 8 }}
            >
              로켓메이커스 소개
            </a>
            <a href="https://jangwon.io/" target="_blank" className="blog">
              기술 블로그
            </a>
            {/* <a href="https://www.instagram.com/rocketmakers/" target="_blank">
              <div className="social_btn insta"></div>
            </a> */}
          </Social>
        </Content>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
