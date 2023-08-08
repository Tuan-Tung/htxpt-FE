import React from 'react';

import { TIcon } from '@/types';

const IcStatusOutline = ({ size, color }: TIcon): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 4.5C7 6.15685 8.34315 7.5 10 7.5C11.6569 7.5 13 6.15685 13 4.5M1 13.3002V3.7002C1 2.58009 1 2.01962 1.21799 1.5918C1.40973 1.21547 1.71547 0.909734 2.0918 0.717987C2.51962 0.5 3.08009 0.5 4.2002 0.5H15.8002C16.9203 0.5 17.4796 0.5 17.9074 0.717987C18.2837 0.909734 18.5905 1.21547 18.7822 1.5918C19 2.0192 19 2.57899 19 3.69691V13.3036C19 14.4215 19 14.9805 18.7822 15.4079C18.5905 15.7842 18.2837 16.0905 17.9074 16.2822C17.48 16.5 16.921 16.5 15.8031 16.5H4.19691C3.07899 16.5 2.5192 16.5 2.0918 16.2822C1.71547 16.0905 1.40973 15.7842 1.21799 15.4079C1 14.9801 1 14.4203 1 13.3002Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcStatusOutline;
