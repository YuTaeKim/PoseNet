import React from 'react';

import { Props } from './types';

const SmallXIcon: React.FC<Props> = ({
  color,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="small_X_icon"
      width={width}
      height={height}
      viewBox="0 0 20 20"
    >
      <g id="icon-arrow" transform="translate(5 5)">
        <path
          id="line"
          d="M0 0L13.338 0"
          fill="none"
          stroke="#6f6f71"
          strokeLinecap="round"
          strokeWidth="2px"
          transform="rotate(45)"
        />
        <path
          id="line-2"
          d="M0 0L13.338 0"
          fill="none"
          stroke="#6f6f71"
          strokeLinecap="round"
          strokeWidth="2px"
          transform="rotate(135 4.715 1.953)"
        />
      </g>
      <g id="검색">
        <path id="사각형_1956" fill="none" d="M0 0H20V20H0z" />
      </g>
    </svg>
  );
};

export default SmallXIcon;
