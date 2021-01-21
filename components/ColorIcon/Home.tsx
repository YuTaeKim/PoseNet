import React from 'react';

import theme from 'layout/theme';

import { Props } from './types';

const HomeIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="icon2_50"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <rect
        id="사각형_28770"
        width="25"
        height="6"
        fill="#bebebe"
        rx="2"
        transform="translate(14 38)"
      />
      <rect
        id="사각형_28772"
        width="27.13"
        height="4.284"
        fill={theme.color.PRIMARYSUB}
        rx="2"
        transform="rotate(-44.03 35.228 6.845)"
      />
      <rect
        id="사각형_28774"
        width="27.13"
        height="4.284"
        fill={theme.color.PRIMARYSUB}
        rx="2"
        transform="rotate(-135.97 26.143 6.584)"
      />
      <g
        id="사각형_28768"
        fill={theme.color.PRIMARY}
        stroke="#1a1a1a"
        strokeWidth="1.5px"
      >
        <path stroke="none" d="M0 0H13V17H0z" transform="translate(18 27)" />
        <path
          d="M0.75 0.75H12.25V16.25H0.75z"
          fill="none"
          transform="translate(18 27)"
        />
      </g>
      <path id="사각형_2047" d="M0 0H50V50H0z" fill="none" />
      <g id="그룹_36729" transform="translate(5.481 7.215)">
        <path
          id="패스_264395"
          d="M109.56 22.568a.6.6 0 0 1-.421-.175L93.931 7.187 78.725 22.393a.592.592 0 0 1-.842 0l-2.873-2.87a.6.6 0 0 1 0-.843L90.568 3.124a.487.487 0 0 1 .065-.078L93.5.174a.591.591 0 0 1 .539-.161.577.577 0 0 1 .317.161l2.87 2.873a.453.453 0 0 1 .068.08l15.56 15.553a.6.6 0 0 1 0 .843l-2.873 2.87a.6.6 0 0 1-.421.175M93.931 5.75a.6.6 0 0 1 .422.174l15.207 15.208 2.03-2.031L96.383 3.893a.521.521 0 0 1-.068-.08L93.931 1.43l-2.385 2.387a.476.476 0 0 1-.065.076L76.273 19.1l2.027 2.032L93.51 5.924a.59.59 0 0 1 .421-.174"
          fill="#1a1a1a"
          stroke="#1a1a1a"
          strokeWidth=".5px"
          transform="translate(-74.837)"
        />
        <path
          id="패스_264396"
          d="M78.041 28.662a.594.594 0 0 1-.595-.595V12.911a.595.595 0 1 1 1.189 0v15.156a.594.594 0 0 1-.595.595"
          fill="#1a1a1a"
          stroke="#1a1a1a"
          strokeWidth=".5px"
          transform="translate(-73.207 7.695)"
        />
        <path
          id="패스_264397"
          d="M95.594 28.662a.594.594 0 0 1-.594-.595V12.911a.595.595 0 1 1 1.189 0v15.156a.594.594 0 0 1-.595.595"
          fill="#1a1a1a"
          stroke="#1a1a1a"
          strokeWidth=".5px"
          transform="translate(-62.238 7.695)"
        />
        <path
          id="패스_264398"
          d="M97.544 14.157a.594.594 0 0 1-.595-.593V2.179h-4.974V7.4a.595.595 0 0 1-1.189 0V1.583a.594.594 0 0 1 .595-.593h6.163a.594.594 0 0 1 .595.593v11.981a.594.594 0 0 1-.595.593"
          fill="#1a1a1a"
          stroke="#1a1a1a"
          strokeWidth=".5px"
          transform="translate(-64.871 .618)"
        />
        <path
          id="패스_264399"
          d="M110.19 22.832H76.43a.595.595 0 1 1 0-1.189h33.76a.595.595 0 0 1 0 1.189"
          fill="#1a1a1a"
          stroke="#1a1a1a"
          strokeWidth=".5px"
          transform="translate(-74.215 13.525)"
        />
      </g>
    </svg>
  );
};

export default HomeIcon;
