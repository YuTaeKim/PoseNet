import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import theme from 'layout/theme';
import Icon from 'components/Icon';

import {
  NavWrap,
  CustomContainer,
  PageName,
  Logo,
  MobileLeftBox,
  MobileRightBox,
  EmptyBox,
} from './nav.styled';

interface Props {
  pageName?: string;
  fixed?: boolean;
  transparent?: boolean;
  noBorder?: boolean;
  style?: any;
}

const NO_BACK_PATH = ['/', '/chat', '/cart', '/mypage'];
const SEARCH_PATH = ['/', '/indoor', '/outdoor'];

const Nav: React.FC<Props> = ({ pageName, transparent, noBorder }) => {
  const router = useRouter();
  const [path, setPath] = useState<string>('/');
  const [fixed, setFixed] = useState<boolean>(false);
  useEffect(() => {
    setPath(router.pathname);
    console.log('router.pathname : ', router.pathname);
    console.log(NO_BACK_PATH.indexOf(path));
    console.log(SEARCH_PATH.indexOf(path));
  }, [router]);
  const listener = () => {
    if (document.body.getBoundingClientRect().top === 0) {
      setFixed(false);
    } else {
      setFixed(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);
  return (
    <>
      <NavWrap noBorder={noBorder} transparent={transparent} fixed={fixed}>
        <CustomContainer>
          {NO_BACK_PATH.indexOf(path) < 0 && (
            <MobileRightBox onClick={router.back}>
              <Icon
                name="arrow-left"
                color={
                  transparent && !fixed ? theme.color.WHITE : theme.color.GRAY5
                }
              />
            </MobileRightBox>
          )}
          {pageName ? (
            <PageName lg>{pageName}</PageName>
          ) : (
            <Logo
              onClick={() => router.push('/')}
              src="/icons/logo_black.png"
            />
          )}
          <MobileLeftBox>
            {SEARCH_PATH.indexOf(path) > -1 && (
              <Icon
                onClick={() => router.push('/search')}
                style={{ margin: 0 }}
                name="search"
                color={
                  transparent && !fixed ? theme.color.WHITE : theme.color.GRAY5
                }
              />
            )}
            {path === '/' && <Icon name="qr" color={theme.color.GRAY5} />}
          </MobileLeftBox>
        </CustomContainer>
      </NavWrap>
      <EmptyBox />
    </>
  );
};

export default Nav;
