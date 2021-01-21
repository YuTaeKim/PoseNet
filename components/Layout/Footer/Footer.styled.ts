import styled from 'styled-components';
import theme from 'layout/theme';

export const FooterWrap = styled.div`
  padding: 20px 0px;
  background-color: ${theme.color.PRIMARY};
  min-height: 40px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  @media (min-width: 0) and (max-width: 991.98px) {
    flex-direction: column;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
  display: flex;
  margin: auto 0;
  @media (min-width: 0) and (max-width: 991.98px) {
    justify-content: center;
    img {
      margin-bottom: 20px;
    }
  }
`;

export const Info = styled.div`
  p,
  li {
    color: #eaeaea;
  }
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  li {
    &:after {
      content: '';
      display: inline-block;
      width: 1px;
      height: 8px;
      background: ${theme.color.WHITE};
      margin: 0 5px;
    }
  }
  li:last-child {
    &:after {
      display: none;
    }
  }
  @media (min-width: 0) and (max-width: 767.98px) {
    p,
    li {
      font-size: 10px;
      color: ${theme.color.GRAY1};
      text-align: center;
    }
    li {
      &:after {
        display: none;
      }
    }
    margin-bottom: 20px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 991.98px) {
    margin: auto;
    margin-bottom: 20px;
    p,
    li {
      font-size: 10px;
      text-align: center;
    }
    ul {
      display: flex;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1299.98px) {
    margin: auto;
    p,
    li {
      font-size: 12px;
    }
    ul {
      display: flex;
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1300px) {
    margin: auto;
    p,
    li {
      font-size: 14px;
    }
    ul {
      display: flex;
    }
  }
`;
export const Social = styled.div`
  display: flex;
  align-items: center;
  .blog {
    cursor: pointer;
    font-size: 10px;
    font-weight: bold;
    color: ${theme.color.PRIMARY};
    opacity: 0.8;
    border-radius: 60px;
    background-color: ${theme.color.WHITE};
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  .social_btn {
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .insta {
    background-image: url('/images/logo.png');
    margin: 0 10px;
  }
  @media (min-width: 0) and (max-width: 767.98px) {
    justify-content: center;
    .blog {
      width: 90px;
      height: 16px;
    }
    .social_btn {
      width: 14px;
      height: 14px;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 991.98px) {
    justify-content: center;
    .blog {
      width: 90px;
      height: 16px;
    }
    .social_btn {
      width: 14px;
      height: 14px;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1299.98px) {
    .blog {
      width: 100px;
      height: 18px;
    }
    .social_btn {
      width: 16px;
      height: 16px;
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1300px) {
    .blog {
      width: 100px;
      height: 24px;
    }
    .social_btn {
      width: 20px;
      height: 20px;
    }
  }
`;
