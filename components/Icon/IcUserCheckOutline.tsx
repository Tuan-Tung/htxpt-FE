'use client';

import React from 'react';

import { TIcon } from '@/types';

const IcUserCheckOutline = ({ size, color }: TIcon): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6101 19.5C15.6101 17.2909 12.9238 15.5 9.61011 15.5C6.2964 15.5 3.61011 17.2909 3.61011 19.5M21.6101 10.5L17.6101 14.5L15.6101 12.5M9.61011 12.5C7.40097 12.5 5.61011 10.7091 5.61011 8.5C5.61011 6.29086 7.40097 4.5 9.61011 4.5C11.8192 4.5 13.6101 6.29086 13.6101 8.5C13.6101 10.7091 11.8192 12.5 9.61011 12.5Z"
        stroke={color}
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IcUserCheckOutline;
