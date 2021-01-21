import React from 'react';
import styled from 'styled-components';

import theme from 'layout/theme';
import * as T from 'components/Text';
import Icon, { IconName } from 'components/Icon';
import ButtonBase from 'components/ButtonBase';

interface Props {
  id?: number;
  value?: string;
  label?: string;
  icon?: IconName;
  active?: boolean;
  setActive?: any;
  onClick?: any;
}

const BottomNavigationAction: React.FC<Props> = ({
  value,
  label,
  icon,
  id,
  active,
  setActive,
  onClick,
  ...props
}) => {
  const clickHandler = (e: any) => {
    setActive(id);
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <Item {...props} onClick={clickHandler}>
      {icon && <Icon color={theme.color.PRIMARY} fill={active} name={icon} />}
      <T.Text sm>{label}</T.Text>
    </Item>
  );
};

export default BottomNavigationAction;

const Item = styled(ButtonBase)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    margin-top: 2px;
    color: ${theme.color.PRIMARY};
  }
`;
