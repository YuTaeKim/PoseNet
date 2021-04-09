import React from 'react';
import styled from 'styled-components';

const NavigatorButton = () => {
  const clickHandler = (e) => {
    setActive(id);
    if (onClick) {
      onClick(e);
    }
  };
  return <Item {...props} onClick={clickHandler}></Item>;
};

export default NavigatorButton;

const Item = styled()`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    margin-top: 2px;
  }
`;
