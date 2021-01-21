import styled from "styled-components";
import theme from "layout/theme";

// components
import ButtonComponent from "components/Button";
import InputComponent from "components/Input";

export const Nav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;
export const Container = styled.div`
  + div {
    display: flex;
  }
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
  @media screen and (max-width: 1299.98px) {
    width: 535px;
  }
  /* Tab */
  @media screen and (max-width: 991.98px) {
    width: 345px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    width: calc(100% - 40px);
    padding: 0 20px;
  }
`;

export const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  > p {
    color: ${theme.color.GRAY5};
    line-height: 1.8;
  }
  height: 92px;
  /* Tab */
  @media screen and (max-width: 991.98px) {
    height: 72px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    height: 72px;
  }
`;

export const Input = styled(InputComponent)`
  width: 100%;
  /* Large PC */
  margin-top: 70px;

  /* Small PC */
  @media screen and (max-width: 1299.98px) {
    margin-top: 70px;
  }
  /* Tab */
  @media screen and (max-width: 991.98px) {
    margin-top: 50px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    margin-top: 20px;
    margin-bottom: auto;
  }
`;

export const Button = styled(ButtonComponent)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 25px;

  /* Large PC */
  margin-top: 100px;

  /* Small PC */
  @media screen and (max-width: 1299.98px) {
    margin-top: 100px;
  }
  /* Tab */
  @media screen and (max-width: 991.98px) {
    margin-top: 80px;
  }
  /* Mobile */
  @media screen and (max-width: 767.98px) {
    margin-top: auto;
  }
`;

export const ActionButton = styled(ButtonComponent)`
  width: 72px;
  height: 34px;
  font-size: 12px;
`;

interface AvatarProps {
  src?: string;
}

export const AvatarBox = styled.div<AvatarProps>`
  cursor: pointer;
  width: 70px;
  height: 70px;
  position: relative;
  margin-bottom: 25px;
  > div {
    width: 70px;
    height: 70px;
    border-radius: 40px;
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
  }
  > span {
    width: 20px;
    height: 20px;
    background-color: ${theme.color.PRIMARY};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    right: 0;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
