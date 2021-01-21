import React from 'react';

import { Props } from './types';

const QRIcon: React.FC<Props> = ({
  color,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="QRcode_icon"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path id="사각형_1956" fill="none" d="M0 0H24V24H0z" />
      <g id="그룹_37318" transform="translate(3.415 3.415)">
        <path
          id="사각형_28956"
          d="M0 0H17.548V1.46H0z"
          fill={color}
          transform="translate(0 8.029)"
        />
        <path
          id="패스_264694"
          d="M18.529 0v1.46h4.014v4.013H24V0z"
          fill={color}
          transform="translate(-6.487)"
        />
        <path
          id="패스_264695"
          d="M0 0v5.473h1.46V1.459h4.014V0z"
          fill={color}
        />
        <path
          id="패스_264696"
          d="M0 18.529V24h5.474v-1.46H1.46v-4.011z"
          fill={color}
          transform="translate(0 -6.486)"
        />
        <path
          id="패스_264697"
          d="M22.543 18.529v4.014h-4.014V24H24v-5.471z"
          fill={color}
          transform="translate(-6.486 -6.486)"
        />
      </g>
    </svg>
  );
};

export default QRIcon;
