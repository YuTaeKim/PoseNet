import styled, { css } from 'styled-components';

import theme from 'layout/theme';

import Container from 'components/Container';
import * as T from 'components/Text';

interface styleProps {
  transparent?: boolean;
  noBorder?: boolean;
  fixed?: boolean;
  isQR?: boolean;
}

export const PageName = styled(T.Text)`
  position: absolute;
  color: ${theme.color.BLACK};
  font-weight: bold;
`;
export const EmptyBox = styled.div`
  height: 80px;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    height: 50px;
  }
`;

export const NavWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #fff;
  z-index: 9999;
  border-bottom: 1px solid #eee;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    height: 50px;
    border-bottom: ${(props: styleProps) =>
      props.noBorder ? '0px' : '1px solid #eee'};
  }
  ${(props: styleProps) =>
    props.transparent &&
    css`
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(249, 249, 249, 0) 100%
      );

      transition: 0.4s;
      ${(props: styleProps) =>
        props.fixed &&
        css`
          background: none;
          background-color: #fff;
        `}
    `}

  /*QR Nav*/
  ${(props: styleProps) =>
    props.isQR &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: calc(100% - 150px);
      height: 100px;
      padding: 0 75px;
      background: transparent;
      border: 0;

      @media screen and (max-width: 767.98px) {
        width: calc(100% - 32px);
        height: 130px;
        padding: 0 16px;
      }
    `}
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 120px;
  height: 25px;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    position: absolute;
    width: 100px;
    height: 20px;
  }

  ${(props: styleProps) =>
    props.isQR &&
    css`
      @media screen and (max-width: 767.98px) {
        position: unset;
      }
    `}
`;

export const CustomContainer = styled(Container)`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    justify-content: center;
    height: 50px;
  }
`;

export const MobileLeftBox = styled.div`
  margin-left: auto;
  > svg {
    cursor: pointer;
    margin-left: 20px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    > svg {
      margin-left: 15px;
    }
  }
`;
export const MobileRightBox = styled.div`
  display: none;
  margin-right: auto;
  > svg {
    cursor: pointer;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    display: block;
  }
`;

export const LeftBox = styled.div`
  border-left: 1px solid ${theme.color.GRAY5};
  margin-left: 20px;
  display: flex;
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    display: none;
  }
  > a {
    font-size: 15px;
    margin-left: 20px;
    text-decoration: none;
    color: ${theme.color.GRAY5};
    font-weight: bold;
  }
`;

export const PCView = styled.div`
  display: block;
  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;
export const MobileView = styled.div`
  display: none;
  @media screen and (max-width: 767.98px) {
    display: block;
  }
`;
