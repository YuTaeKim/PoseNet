import React from 'react';

import theme from 'layout/theme';

import { Props } from './types';

const SearchIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="icon3_50"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <rect
        id="사각형_28785"
        width="3.988"
        height="13.292"
        fill="#bebebe"
        rx="1.994"
        transform="rotate(90 -2.867 29.143)"
      />
      <rect
        id="사각형_28784"
        width="4"
        height="14"
        fill="#bebebe"
        rx="2"
        transform="translate(13 22)"
      />
      <circle
        id="타원_3081"
        cx="3"
        cy="3"
        r="3"
        fill={theme.color.PRIMARYSUB}
        transform="translate(10 33)"
      />
      <ellipse
        id="타원_3080"
        cx="2.5"
        cy="3"
        fill={theme.color.PRIMARYSUB}
        rx="2.5"
        ry="3"
        transform="translate(34 9)"
      />
      <ellipse
        id="타원_3079"
        cx="3.5"
        cy="3"
        fill={theme.color.PRIMARYSUB}
        rx="3.5"
        ry="3"
        transform="translate(9 9)"
      />
      <path
        id="패스_264422"
        fill={theme.color.PRIMARY}
        d="M22.9 15.9v18.972l4.634-4.045L31.128 38l2.189-.913-3.13-7.287H36.1z"
        transform="translate(8.897 6.822)"
      />
      <g id="그룹_872" transform="translate(8.746 8.04)">
        <path
          id="패스_1163"
          d="M2327.664 563.091v-17.165a3.708 3.708 0 0 0 2.513-2.046h17.664a3.708 3.708 0 0 0 2.513 2.046v6.712h1.672v-6.712a3.7 3.7 0 1 0-4.526-3.718h-16.982a3.7 3.7 0 1 0-4.525 3.718v17.165a3.7 3.7 0 1 0 4.434 4.434h13.66v-1.672h-13.66a3.7 3.7 0 0 0-2.763-2.762zm23.526-22.794a2.03 2.03 0 1 1-2.029 2.031 2.033 2.033 0 0 1 2.028-2.028zm-26.393 2.031a2.03 2.03 0 1 1 2.031 2.029 2.034 2.034 0 0 1-2.028-2.029zm2.031 26.392a2.03 2.03 0 1 1 2.029-2.031 2.033 2.033 0 0 1-2.029 2.031z"
          fill="#1a1a1a"
          stroke="#191919"
          strokeWidth=".5px"
          transform="translate(-2323.125 -538.625)"
        />
        <path
          id="패스_1164"
          d="M2348.483 560.181l-14.083-15.528a.706.706 0 0 0-.772-.181.7.7 0 0 0-.447.656v20.81a.7.7 0 0 0 .418.642.692.692 0 0 0 .759-.129l4.028-3.754 3.028 6.266a.7.7 0 0 0 .631.4.686.686 0 0 0 .289-.062l2.482-1.119a.72.72 0 0 0 .37-.4.691.691 0 0 0-.022-.537l-2.738-5.954 5.541.067a.712.712 0 0 0 .643-.415.7.7 0 0 0-.127-.762zm-7.8.685l2.9 6.322-1.212.548-3.146-6.51a.708.708 0 0 0-.5-.381.655.655 0 0 0-.136-.014.685.685 0 0 0-.474.19l-3.545 3.3v-17.377l11.784 12.988-5.016-.06a.679.679 0 0 0-.617.321.7.7 0 0 0-.036.673z"
          fill="#1a1a1a"
          stroke="#191919"
          strokeWidth=".5px"
          transform="translate(-2310.769 -531.496)"
        />
      </g>
      <path id="사각형_2047" fill="none" d="M0 0H50V50H0z" />
    </svg>
  );
};

export default SearchIcon;
