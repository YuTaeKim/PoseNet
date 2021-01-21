import React from 'react';

import { WithFillProps } from './types';

const HomeIcon: React.FC<WithFillProps> = ({
  color,
  fill,
  width = 24,
  height = 24.146,
  ...props
}) => {
  if (fill) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        id="home_select"
        width={width}
        height={height}
        viewBox="0 0 24 24.146"
      >
        <g id="home-24px" transform="translate(0 1)">
          <path id="패스_1031" d="M0 0h23.146v23.146H0z" fill="none" />
          <path
            id="패스_1032"
            fill={color}
            d="M9.715 19.395v-5.787h3.858v5.786h4.822V11.68h2.893L11.644 3 2 11.68h2.893v7.715z"
            transform="translate(-.071 -.107)"
          />
        </g>
        <path id="사각형_1962" d="M0 0H24V24H0z" fill="none" />
      </svg>
    );
  }
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="home_default"
      width={width}
      height={height}
      viewBox="0 0 24 24.146"
    >
      <g id="home-24px" transform="translate(0 1)">
        <path id="패스_1031" d="M0 0h23.146v23.146H0z" fill="none" />
        <g
          id="패스_1032"
          fill="none"
          stroke="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M9.715 19.395v-5.787h3.858v5.786h4.822V11.68h2.893L11.644 3 2 11.68h2.893v7.715z"
            transform="translate(-.071 -.107)"
          />
          <path
            fill={color}
            d="M18.395 19.395V11.68h2.893L11.644 3 2 11.68h2.893v7.715h4.822v-5.787h3.858v5.787h4.822m0 1h-4.822c-.553 0-1-.448-1-1v-4.787h-1.858v4.787c0 .552-.448 1-1 1H4.893c-.552 0-1-.448-1-1V12.68H2c-.414 0-.785-.256-.934-.642-.148-.387-.043-.825.265-1.102l9.644-8.68c.19-.17.43-.256.669-.256.24 0 .479.086.669.257l9.644 8.68c.308.276.413.714.265 1.1-.149.387-.52.643-.934.643h-1.893v6.715c0 .552-.448 1-1 1z"
            transform="translate(-.071 -.107)"
          />
        </g>
      </g>
      <path id="사각형_1962" d="M0 0H24V24H0z" fill="none" />
    </svg>
  );
};

export default HomeIcon;
