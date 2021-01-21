import React from 'react';
import theme from 'layout/theme';

import { WithColorProps } from './types';

const InteriorIcon: React.FC<WithColorProps> = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="interior_icon"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <defs>
        <clipPath id="clip-path">
          <path id="사각형_28760" d="M0 0H36.58V34.722H0z" fill="#1a1a1a" />
        </clipPath>
      </defs>
      <path
        id="패스_264604"
        fill={theme.color.PRIMARY}
        d="M946.67-6920.648v8.093l1.194 2.465 1.87 1.236h2.244l1.463-1.236 1.388-.8v2.8l1.8 1.268 2.513.894 2.152-.894 1.033-2.035v-11.794z"
        transform="translate(-927 6929)"
      />
      <rect
        id="사각형_28855"
        width="20"
        height="6"
        fill={theme.color.PRIMARYSUB}
        rx="3"
        transform="translate(10 36)"
      />
      <g id="그룹_36713" transform="translate(7 7.432)">
        <g id="그룹_36712" clipPath="url(#clip-path)">
          <path
            id="패스_264354"
            d="M31.586 34.722H2.348a.653.653 0 0 1-.654-.654V.654A.653.653 0 0 1 2.348 0h29.238a.654.654 0 0 1 .654.654v33.415a.654.654 0 0 1-.654.654M3 33.417h27.934V1.307H3z"
            fill="#1a1a1a"
            transform="translate(1.323)"
          />
          <path
            id="패스_264355"
            d="M21.307 23.493h-6.034A15.291 15.291 0 0 1 0 8.22V1.2A.653.653 0 0 1 .654.547h3.019a.653.653 0 0 1 0 1.306H1.307V8.22a13.982 13.982 0 0 0 13.966 13.967h6.034A13.983 13.983 0 0 0 35.274 8.22V1.853h-2.363a.653.653 0 1 1 0-1.306h3.015a.653.653 0 0 1 .654.652V8.22a15.29 15.29 0 0 1-15.273 15.273"
            fill="#1a1a1a"
            transform="translate(0 .427)"
          />
          <path
            id="패스_264356"
            d="M19.363 16.133a4.591 4.591 0 0 1-4.552-4.045 4.582 4.582 0 0 1-7.894-3.167V.654a.653.653 0 1 1 1.306 0v8.267a3.278 3.278 0 0 0 6.556 0 .653.653 0 1 1 1.306 0v2.627a3.279 3.279 0 0 0 6.558 0V.654a.653.653 0 1 1 1.306 0v10.895a4.59 4.59 0 0 1-4.585 4.585"
            fill="#1a1a1a"
            transform="translate(5.403)"
          />
        </g>
      </g>
      <path id="사각형_28856" fill="none" d="M0 0H50V50H0z" />
    </svg>
  );
};

export default InteriorIcon;
