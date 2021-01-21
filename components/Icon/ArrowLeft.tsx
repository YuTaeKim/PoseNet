import React from 'react';

import { Props } from './types';

const ArrowLeftIcon: React.FC<Props> = ({
  color,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="back_icon"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g id="Arrow" transform="translate(3 3)">
        <path id="사각형_1950" d="M0 0H18V18H0z" fill="none" />
        <g
          id="icon-arrow"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="2px"
          transform="translate(1 2)"
        >
          <path
            id="path"
            strokeLinejoin="round"
            d="M1288.262 1163.709l-6.775 6.775 6.775 6.775"
            transform="translate(-1281.487 -1163.709)"
          />
          <path id="line" d="M0 0L15.198 0" transform="translate(.855 6.772)" />
        </g>
      </g>
      <g id="검색">
        <path id="사각형_1956" d="M0 0H24V24H0z" fill="none" />
      </g>
    </svg>
  );
};

export default ArrowLeftIcon;
