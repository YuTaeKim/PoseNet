import React from 'react';

import { WithFillProps } from './types';

const AlertIcon: React.FC<WithFillProps> = ({
  color,
  fill,
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
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        stroke="rgba(0,0,0,0)"
        d="M73.981 168.752c-1.115-3.348-3.393-5.284-6.441-5.566v-1.595a.766.766 0 0 0-1.532 0v1.595c-3.05.282-5.326 2.218-6.441 5.566-.279.833-1.593 8.138-1.742 8.968a.764.764 0 0 0 .754.9h5.015a3.21 3.21 0 0 0-.06.45 3.237 3.237 0 1 0 6.474 0 3 3 0 0 0-.06-.45h5.019a.766.766 0 0 0 .754-.9c-.147-.831-1.463-8.135-1.74-8.968zm-5.5 10.319a1.706 1.706 0 1 1-3.411 0 1.622 1.622 0 0 1 .069-.45h3.273a1.568 1.568 0 0 1 .066.45zm-8.981-1.982c.561-3.1 1.359-7.354 1.526-7.853.694-2.088 2.256-4.575 5.753-4.575s5.058 2.487 5.753 4.575c.165.5.963 4.759 1.526 7.853z"
        transform="translate(-54.814 -159.825)"
      />
      <path fill="none" d="M0 0H24V24H0z" />
    </svg>
  );
};

export default AlertIcon;
