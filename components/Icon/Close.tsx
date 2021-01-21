import React from 'react';

import { Props } from './types';

const CloseIcon: React.FC<Props> = ({
  color,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="X_white_icon"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g id="icon-arrow" transform="translate(2.496 4.178)">
        <path
          id="line"
          d="M0 0L19.799 0"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="2px"
          transform="rotate(45 .63 2.54)"
        />
        <path
          id="line-2"
          d="M0 0L19.799 0"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="2px"
          transform="rotate(135 7.928 3.459)"
        />
      </g>
      <g id="검색">
        <path id="사각형_1956" fill="none" d="M0 0H24V24H0z" />
      </g>
    </svg>
  );
};

export default CloseIcon;
