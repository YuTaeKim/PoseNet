import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';

import Icon from 'components/Icon';
import * as T from 'components/Text';

export interface CheckboxProps {
  checked: boolean;
  ratio?: string;
  className?: string;
  onClick?: any;
  children?: any;
  style?: any;
}

const CheckBox: React.FC<CheckboxProps> = ({ checked, children, ...props }) => {
  return (
    <CheckWrap {...props}>
      <Icon name="check-box" fill={checked} color={theme.color.PRIMARY} />
      {typeof children === 'string' ? (
        <CheckLabel>{children}</CheckLabel>
      ) : (
        children
      )}
    </CheckWrap>
  );
};

export default CheckBox;

const CheckWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const CheckLabel = styled(T.Text)`
  margin-left: 5px;
  color: ${theme.color.GRAY4};
`;
