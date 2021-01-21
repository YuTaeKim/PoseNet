import React from 'react';

import { Props } from './types';

const StarOIcon: React.FC<Props> = ({
  color,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
    >
      <path
        fill="#cecece"
        d="M50.142 160.971l3.158 1.661a.408.408 0 0 0 .592-.43l-.6-3.517a.408.408 0 0 1 .117-.361l2.555-2.491a.408.408 0 0 0-.226-.7l-3.531-.513a.408.408 0 0 1-.307-.223l-1.579-3.2a.408.408 0 0 0-.731 0l-1.579 3.2a.408.408 0 0 1-.307.223l-3.531.513a.408.408 0 0 0-.226.7l2.555 2.491a.408.408 0 0 1 .117.361l-.6 3.517a.408.408 0 0 0 .592.43l3.158-1.661a.408.408 0 0 1 .373 0z"
        transform="translate(-42.819 -149.975)"
      />
      <path fill="none" d="M0 0H14V14H0z" />
    </svg>
  );
};

export default StarOIcon;
