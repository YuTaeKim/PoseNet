import React, { useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';

export interface ButtonProps {
  outline?: boolean;
  disabled?: boolean;
  round?: boolean;
  color?: string;
  style?: any;
  onClick?: any;
  children?: any;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  onClick,
  ...props
}) => {
  const buttonRef = useRef<any>(null);
  const rippleRef = useRef<any>(null);

  const clickHandler = (e: any) => {
    const circle = rippleRef?.current;
    const button = e.currentTarget;
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add('ripple');

    if (circle) {
      circle.remove();
    }
    button.appendChild(circle);
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <Button ref={buttonRef} onClick={clickHandler} {...props}>
      {children}
      <span ref={rippleRef} />
    </Button>
  );
};

export default ButtonComponent;

interface styleProps {
  disabled?: boolean;
}

const ripple = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

const Button = styled.button`
  all: unset;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  span {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ${ripple} 600ms linear;
    background-color: rgba(255, 255, 255, 0.5);
  }
  ${(props: styleProps) =>
    props.disabled &&
    css`
      span {
        display: none;
      }
    `}
`;
