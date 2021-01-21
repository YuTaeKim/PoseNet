import React from 'react';

import { Props } from './types';

const ArrowRightIcon: React.FC<Props> = ({ color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="24"
      viewBox="0 0 20 24"
    >
      <path fill="none" d="M0 0H20V24H0z" />
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2px"
        d="M-196.5-4416.5l5.9-6.948-5.9-6.43"
        transform="translate(203.645 4435.378)"
      />
    </svg>
  );
};

export default ArrowRightIcon;
