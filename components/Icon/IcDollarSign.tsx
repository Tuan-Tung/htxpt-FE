'use client';

import React from 'react';

import { TIcon } from '@/types';

const IcDollarSign = ({ size, color }: TIcon): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11.0714C1 12.965 2.53502 14.5 4.42857 14.5H6C7.65685 14.5 9 13.1569 9 11.5C9 9.84315 7.65685 8.5 6 8.5H4C2.34315 8.5 1 7.15685 1 5.5C1 3.84315 2.34315 2.5 4 2.5H5.57143C7.46498 2.5 9 4.03502 9 5.92857"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 0.5V16.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default IcDollarSign;
