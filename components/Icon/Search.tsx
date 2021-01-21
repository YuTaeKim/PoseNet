import React from 'react';

import { Props } from './types';

const SearchIcon: React.FC<Props> = ({
  color,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="search"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path id="사각형_1956" d="M0 0H24V24H0z" fill="none" />
      <g
        id="타원_455"
        fill="none"
        stroke={color}
        strokeWidth="1.5px"
        transform="translate(2 2)"
      >
        <circle cx="8" cy="8" r="8" stroke="none" />
        <circle cx="8" cy="8" r="7.25" fill="none" />
      </g>
      <path
        id="선_228"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2px"
        d="M0 0L6 6"
        transform="translate(15.5 15.5)"
      />
    </svg>
  );
};

export default SearchIcon;
