import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';
import { IconName } from 'components/Icon';

interface Props {
  style?: any;
  children?: any;
  active?: number;
  setActive?: any;
  icon?: IconName;
}

const BottomNavigation: React.FC<Props> = ({
  active,
  setActive,
  children,
  ...props
}) => {
  const childrenWithProps = React.Children.map(children, (child, idx) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    const props = {
      ...child.props,
      id: idx,
      active: idx === active,
      setActive,
    };
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });
  return <Container {...props}>{childrenWithProps}</Container>;
};

export default BottomNavigation;

const Container = styled.div`
  background-color: #fff;
  height: 57px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  border-top: 1px solid ${theme.color.GRAY1};

  display: none;
  /* Mobile */
  ${(props) => props.theme.window.mobile} {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;
