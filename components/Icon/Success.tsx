import React from 'react';

import { Props } from './types';

const SuccessIcon: React.FC<Props> = ({
  color,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 50 50"
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3px"
        d="M-478.529 1325.481l9 11.357 13.307-18.69"
        transform="translate(491.664 -1301.813)"
      />
      <g fill="none" stroke={color} strokeWidth="3px">
        <circle cx="25" cy="25" r="25" stroke="none" />
        <circle cx="25" cy="25" r="23.5" />
      </g>
    </svg>
  );
};

export default SuccessIcon;
