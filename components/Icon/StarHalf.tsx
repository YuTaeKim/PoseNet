import React from 'react';

import { Props } from './types';

const RateHalfIcon: React.FC<Props> = ({
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
        fill="#bebebe"
        d="M52.918 165.361l4.545 2.39a.587.587 0 0 0 .852-.619l-.868-5.061a.587.587 0 0 1 .169-.519l3.677-3.584a.587.587 0 0 0-.325-1l-5.082-.738a.587.587 0 0 1-.442-.321l-2.272-4.6a.587.587 0 0 0-1.052 0l-2.272 4.6a.587.587 0 0 1-.442.321l-5.082.738a.587.587 0 0 0-.325 1l3.677 3.584a.587.587 0 0 1 .169.519l-.868 5.061a.587.587 0 0 0 .852.619l4.545-2.39a.587.587 0 0 1 .544 0z"
        opacity="0.58"
        transform="translate(-43.819 -150.975)"
      />
      <path
        fill={color}
        d="M3.734 16.813a.589.589 0 0 1-.451-.212.573.573 0 0 1-.127-.475l.868-5.062a.582.582 0 0 0-.167-.519L.178 6.96a.586.586 0 0 1 .325-1l5.082-.738a.587.587 0 0 0 .441-.322L8.3.3a.58.58 0 0 1 .334-.3v14.319a.642.642 0 0 0-.081.035l-4.546 2.39a.584.584 0 0 1-.273.069z"
        transform="translate(0 .032)"
      />
    </svg>
  );
};

export default RateHalfIcon;
