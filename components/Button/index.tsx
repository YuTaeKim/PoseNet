import React from 'react';
import styled, { css } from 'styled-components';

import theme from 'layout/theme';
import ButtonBase from 'components/ButtonBase';
import CircularProgress from '@material-ui/core/CircularProgress';

export interface ButtonProps {
  label: string | React.ReactNode | JSX.Element;
  width?: string;
  outline?: boolean;
  disabled?: boolean;
  round?: boolean;
  color?: string;
  icon?: React.ReactNode | JSX.Element;
  position?: 'left' | 'right' | 'top' | 'bottom';
  loading?: boolean;
  children?: any;
  onClick?: any;
  style?: any;
}

/**
 * 버튼 컴포넌트
 */
const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  onClick,
  icon,
  position = 'left',
  children,
  loading,
  ...props
}) => {
  return (
    <Button onClick={onClick} position={position} {...props}>
      {loading ? (
        <CircularProgress size={20} color="inherit" />
      ) : (
        <>
          {icon && <div>{icon}</div>}
          <div>{label}</div>
        </>
      )}
    </Button>
  );
};

export default ButtonComponent;

interface ButtonStyleProps {
  outline?: boolean;
  round?: boolean;
  color?: string;
  disabled?: boolean;
  width?: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
}

const changePosition = (position: string | undefined) => {
  switch (position) {
    case 'left':
      return 'row';
    case 'right':
      return 'row-reverse';
    case 'top':
      return 'column';
    case 'bottom':
      return 'column-reverse';
    default:
      return 'row';
  }
};

const Button = styled(ButtonBase)<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: ${(props) => props.width && props.width};
  border: 0px;
  background-color: ${(props) =>
    props.color ? props.color : theme.color.PRIMARY};
  border-radius: ${theme.radius}px;
  color: ${theme.color.WHITE};
  border-radius: ${(props) => props.round && '50px'};
  flex-direction: ${({ position }) => changePosition(position)};
  :focus {
    outline: none;
  }
  ${(props) =>
    props.outline &&
    css`
      background-color: ${theme.color.WHITE};
      border: 1px solid
        ${(props: ButtonStyleProps) =>
          props.color ? props.color : theme.color.PRIMARY};
      color: ${(props: ButtonStyleProps) =>
        props.color ? props.color : theme.color.PRIMARY};
      span {
        background-color: ${(props: ButtonStyleProps) =>
          props.color ? `${props.color}77` : `${theme.color.PRIMARY}77`};
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${theme.color.GRAY3};
      border: 0px;
      color: ${theme.color.WHITE};
    `};
`;
