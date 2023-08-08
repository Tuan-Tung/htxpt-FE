'use client'

import React from 'react';

import { TIcon } from '@/types';

const IcRadioFill = ({ size, color }: TIcon): React.ReactElement => {
  return (
    <svg width={size} height={size} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 0.5C4.58172 0.5 1 4.08172 1 8.5C1 12.9183 4.58172 16.5 9 16.5C13.4183 16.5 17 12.9183 17 8.5C17 4.08172 13.4183 0.5 9 0.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 5.5C7.34315 5.5 6 6.84315 6 8.5C6 10.1569 7.34315 11.5 9 11.5C10.6569 11.5 12 10.1569 12 8.5C12 6.84315 10.6569 5.5 9 5.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcRadioFill;
