import React from 'react';

import { WithColorProps } from './types';

const PhoneIcon: React.FC<WithColorProps> = ({ color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="phone_icon"
      width="58"
      height="58"
      viewBox="0 0 58 58"
    >
      <defs>
        <clipPath id="clip-path">
          <path id="사각형_28931" d="M0 0H21.59V41.803H0z" fill="none" />
        </clipPath>
      </defs>
      <g id="그룹_37293" transform="translate(18.408 7.357)">
        <g id="그룹_37292" clipPath="url(#clip-path)">
          <path
            id="패스_264654"
            d="M19.493 0H2.1A2.1 2.1 0 0 0 0 2.1v37.606a2.1 2.1 0 0 0 2.1 2.1h17.4a2.1 2.1 0 0 0 2.1-2.1V2.1A2.1 2.1 0 0 0 19.5 0M1.653 32.972h18.285v6.734a.445.445 0 0 1-.445.445H2.1a.444.444 0 0 1-.444-.445zM19.938 5.223H1.653V2.1a.444.444 0 0 1 .447-.448h17.4a.445.445 0 0 1 .445.445zM1.653 6.875h18.285v24.444H1.653z"
            fill={color}
          />
          <path
            id="패스_264655"
            d="M13.316 49.76a2.642 2.642 0 1 0-2.642-2.642 2.645 2.645 0 0 0 2.642 2.642m-.99-2.642a.99.99 0 1 1 .99.99.991.991 0 0 1-.99-.99"
            fill={color}
            transform="translate(-2.521 -10.505)"
          />
          <path
            id="패스_264656"
            d="M14.534 3.42h-1.9a.826.826 0 0 0 0 1.652h1.9a.826.826 0 1 0 0-1.652"
            fill={color}
            transform="translate(-2.788 -.808)"
          />
        </g>
      </g>
      <path id="사각형_28932" d="M0 0H58V58H0z" fill="none" />
    </svg>
  );
};

export default PhoneIcon;
