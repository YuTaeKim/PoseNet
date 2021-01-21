import React from 'react';

import { WithFillProps } from './types';

const ShoppingIcon: React.FC<WithFillProps> = ({
  color,
  fill,
  width = 24,
  height = 24,
  ...props
}) => {
  if (fill) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        id="shopping_list_select"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <defs>
          <clipPath id="clipPath">
            <path
              id="사각형_28751"
              d="M0 0H23.92V17.744H0z"
              fill={color}
              stroke={color}
              strokeWidth=".25px"
              transform="translate(-1 -1)"
            />
          </clipPath>
        </defs>
        <path id="사각형_1959" fill="none" d="M0 0H24V24H0z" />
        <g id="그룹_36736" transform="translate(1 4.745)">
          <g id="그룹_36694" clipPath="url(#clipPath)">
            <path
              id="패스_264294"
              d="M15.343 10.6L18.723.3a.428.428 0 0 1 .409-.3h2.362c.236 0 .461.343.461.578s-.226.579-.461.579h-1.716L17 10.212c-.053.181-.211.392-.4.392"
              fill={color}
            />
            <path
              id="패스_264295"
              d="M5.916 11.292a1.36 1.36 0 1 0 1.361 1.361 1.362 1.362 0 0 0-1.361-1.361"
              fill={color}
              stroke={color}
              strokeWidth=".25px"
              transform="translate(.237 1.138)"
            />
            <path
              id="패스_264296"
              d="M12.654 11.292a1.36 1.36 0 1 0 1.36 1.361 1.364 1.364 0 0 0-1.36-1.361"
              fill={color}
              stroke={color}
              strokeWidth=".25px"
              transform="translate(1.138 1.138)"
            />
            <g id="패스_264430" fill="#fff" stroke="none">
              <path
                fill="#707070"
                d="M0 .84v.32-.32z"
                transform="translate(5 12.256)"
              />
            </g>
          </g>
        </g>
        <path
          id="패스_264431"
          d="M5312.2 673.01l2.683 7.335h12.168l2.116-7.335z"
          fill={color}
          transform="translate(-5310 -665)"
        />
      </svg>
    );
  }
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="shopping_list_default"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <defs>
        <clipPath id="clipPath">
          <path
            id="사각형_28751"
            d="M0 0H23.92V17.744H0z"
            fill={color}
            stroke={color}
            strokeWidth=".25px"
            transform="translate(-1 -1)"
          />
        </clipPath>
      </defs>
      <path id="사각형_1959" fill="none" d="M0 0H24V24H0z" />
      <g id="그룹_36736" transform="translate(1 4.745)">
        <g id="그룹_36694" clipPath="url(#clipPath)">
          <path
            id="패스_264294"
            d="M16.465 11.543H3.481a.427.427 0 0 1-.4-.28L.026 2.861a.428.428 0 0 1 .051-.389.423.423 0 0 1 .349-.181h16.055a.425.425 0 1 1 0 .85H1.033l2.747 7.552h12.364L19.111.308A.428.428 0 0 1 19.52 0h1.974a.425.425 0 0 1 0 .85h-1.652l-2.969 10.386a.426.426 0 0 1-.408.307"
            fill={color}
            stroke={color}
            strokeWidth=".25px"
          />
          <path
            id="패스_264295"
            d="M5.658 14.347A1.953 1.953 0 1 1 7.611 12.4a1.954 1.954 0 0 1-1.953 1.952m0-3.055a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1"
            fill={color}
            stroke={color}
            strokeWidth=".25px"
            transform="translate(.495 1.396)"
          />
          <path
            id="패스_264296"
            d="M12.4 14.347a1.953 1.953 0 1 1 1.948-1.947 1.955 1.955 0 0 1-1.948 1.947m0-3.055a1.1 1.1 0 1 0 1.1 1.1 1.105 1.105 0 0 0-1.1-1.1"
            fill={color}
            stroke={color}
            strokeWidth=".25px"
            transform="translate(1.396 1.396)"
          />
        </g>
      </g>
    </svg>
  );
};

export default ShoppingIcon;
