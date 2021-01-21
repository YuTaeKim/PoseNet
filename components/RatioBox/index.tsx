import React from 'react';
import styled from 'styled-components';

interface Props {
  src?: string;
  ratio?: string;
  className?: string;
  onClick?: any;
  children?: any;
  style?: any;
}

const Ratio: React.FC<Props> = ({ children, ...props }) => {
  return (
    <RatioBox {...props}>
      <div>{children}</div>
    </RatioBox>
  );
};

export default Ratio;

const RatioBox = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: fit-content;
  ::before {
    margin-top: ${(props: Props) => (props.ratio ? props.ratio : '100%')};
    content: '';
    display: block;
  }
  > div {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(${(props: Props) => props.src});
    background-position: center;
    background-size: cover;
  }
  &:focus {
    outline: none;
  }
`;
