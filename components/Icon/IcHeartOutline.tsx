'use client';

import React from 'react';

import { TIcon } from '@/types';

const IcHeartOutline = ({ size }: TIcon): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4.69431C8 -0.000122309 1 0.499878 1 6.49991C1 12.4999 10 17.5001 10 17.5001C10 17.5001 19 12.4999 19 6.49991C19 0.499878 12 -0.000122309 10 4.69431Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcHeartOutline;
