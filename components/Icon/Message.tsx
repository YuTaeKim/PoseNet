import React from 'react';

import { Props } from './types';

const MessageIcon: React.FC<Props> = ({
  color,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      id="estimate_icon"
      width={width}
      height={height}
      viewBox="0 0 50 50"
    >
      <path id="사각형_28859" fill="none" d="M0 0H50V50H0z" />
      <g id="그룹_37241" transform="translate(5.984 -3.518)">
        <g id="그룹_37246" transform="translate(0 17.855)">
          <path
            id="패스_264606"
            d="M35.787 16.133v-2.962a.942.942 0 0 0-.942-.942H.942a.942.942 0 0 0-.942.942v19.338a.942.942 0 0 0 .942.942h33.9a.942.942 0 0 0 .942-.942v-4.121l5.462-5.462a.943.943 0 0 0 0-1.333zM33.9 28v3.568H1.886V14.115H33.9v2.41a.949.949 0 0 0 .276.666l5.071 5.071-5.071 5.071A.935.935 0 0 0 33.9 28"
            fill={color}
            transform="translate(0 -12.229)"
          />
          <path
            id="패스_264607"
            d="M6.533 16.1a3.184 3.184 0 1 0 3.183 3.185A3.187 3.187 0 0 0 6.533 16.1m1.3 3.185a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3"
            fill="black"
            transform="translate(3.077 -8.674)"
          />
          <path
            id="패스_264608"
            d="M10.425 16.1a3.184 3.184 0 1 0 3.185 3.185 3.187 3.187 0 0 0-3.185-3.185m1.3 3.185a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3"
            fill={color}
            transform="translate(6.652 -8.674)"
          />
          <path
            id="패스_264609"
            d="M14.318 16.1a3.184 3.184 0 1 0 3.182 3.185 3.187 3.187 0 0 0-3.182-3.185m1.3 3.185a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3"
            fill={color}
            transform="translate(10.227 -8.674)"
          />
        </g>
      </g>
    </svg>
  );
};

export default MessageIcon;
