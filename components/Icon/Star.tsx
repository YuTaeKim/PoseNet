import React from 'react';

import { Props } from './types';

const RateIcon: React.FC<Props> = ({
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
      viewBox="0 0 17.651 16.845"
    >
      <path
        fill={color}
        d="M52.918 165.361l4.545 2.39a.587.587 0 0 0 .852-.619l-.868-5.061a.587.587 0 0 1 .169-.519l3.677-3.584a.587.587 0 0 0-.325-1l-5.082-.738a.587.587 0 0 1-.442-.321l-2.272-4.6a.587.587 0 0 0-1.052 0l-2.272 4.6a.587.587 0 0 1-.442.321l-5.082.738a.587.587 0 0 0-.325 1l3.677 3.584a.587.587 0 0 1 .169.519l-.868 5.061a.587.587 0 0 0 .852.619l4.545-2.39a.587.587 0 0 1 .544 0z"
        transform="translate(-43.819 -150.975)"
      />
    </svg>
  );
};

export default RateIcon;
