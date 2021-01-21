import React from 'react';

import theme from 'layout/theme';

import { Props } from './types';

const BedIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <g id="icon1_50">
        <rect
          id="사각형_28770"
          width="30"
          height="4"
          fill="#bebebe"
          rx="2"
          transform="translate(3 28)"
        />
        <rect
          id="사각형_28772"
          width="34"
          height="6"
          fill={theme.color.PRIMARYSUB}
          rx="2"
          transform="translate(8 12)"
        />
        <path
          id="사각형_28769"
          d="M0 0H11V7H0z"
          fill={theme.color.PRIMARY}
          transform="translate(26 18)"
        />
        <path
          id="사각형_28768"
          d="M0 0H11V7H0z"
          fill={theme.color.PRIMARY}
          transform="translate(12 18)"
        />
        <path id="사각형_2047" fill="none" d="M0 0H50V50H0z" />
        <g id="그룹_36727" transform="translate(2.541 11.126)">
          <path
            id="패스_264381"
            d="M158.9 18.441h-42.7a.68.68 0 0 1-.68-.68v-4.508c0-1.672 2.056-2.98 4.681-2.98H154.9c2.627 0 4.683 1.308 4.683 2.98v4.509a.68.68 0 0 1-.68.68m-42.018-1.36h41.335v-3.829c0-.765-1.421-1.62-3.323-1.62H120.2c-1.9 0-3.322.855-3.322 1.62z"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth=".5px"
            transform="translate(-115.522 2.874)"
          />
          <path
            id="패스_264382"
            d="M158.9 17.993h-42.7a.679.679 0 0 1-.68-.68V14.62a.679.679 0 0 1 .68-.682h42.7a.679.679 0 0 1 .68.682v2.694a.679.679 0 0 1-.68.68m-42.018-1.36h41.338V15.3h-41.338z"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth=".5px"
            transform="translate(-115.522 6.017)"
          />
          <path
            id="패스_264383"
            d="M153.042 17.7a.679.679 0 0 1-.68-.68V6.592a2.038 2.038 0 0 0-2.036-2.034h-29.253a2.037 2.037 0 0 0-2.034 2.034v10.433a.68.68 0 1 1-1.36 0V6.592a3.4 3.4 0 0 1 3.394-3.4h29.253a3.4 3.4 0 0 1 3.4 3.4v10.433a.68.68 0 0 1-.68.68"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth=".5px"
            transform="translate(-113.672 -3.196)"
          />
          <path
            id="패스_264384"
            d="M132.028 14.939a.68.68 0 0 1-.68-.68v-5.8a.682.682 0 0 0-.68-.682h-8.915a.682.682 0 0 0-.68.682v5.8a.681.681 0 0 1-1.362 0v-5.8a2.043 2.043 0 0 1 2.042-2.042h8.915a2.042 2.042 0 0 1 2.04 2.042v5.8a.68.68 0 0 1-.68.68"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth=".5px"
            transform="translate(-111.929 -.431)"
          />
          <path
            id="패스_264385"
            d="M140.37 14.939a.68.68 0 0 1-.68-.68v-5.8a.682.682 0 0 0-.68-.682h-8.917a.683.683 0 0 0-.68.682v5.8a.681.681 0 0 1-1.362 0v-5.8a2.044 2.044 0 0 1 2.042-2.042h8.917a2.044 2.044 0 0 1 2.04 2.042v5.8a.68.68 0 0 1-.68.68"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth=".5px"
            transform="translate(-104.775 -.431)"
          />
          <path
            id="패스_264386"
            d="M118.745 22.43H116.2a.681.681 0 0 1-.68-.682v-5.679a.68.68 0 0 1 .68-.68h2.543a.68.68 0 0 1 .68.68v5.679a.681.681 0 0 1-.68.682m-1.863-1.362h1.183v-4.319h-1.183z"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth=".5px"
            transform="translate(-115.522 7.262)"
          />
          <path
            id="패스_264387"
            d="M140.361 22.43h-2.545a.681.681 0 0 1-.68-.682v-5.679a.68.68 0 0 1 .68-.68h2.545a.68.68 0 0 1 .68.68v5.679a.681.681 0 0 1-.68.682m-1.861-1.362h1.185v-4.319H138.5z"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth=".5px"
            transform="translate(-96.984 7.262)"
          />
        </g>
      </g>
    </svg>
  );
};

export default BedIcon;
