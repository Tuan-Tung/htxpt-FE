'use client';

import React from 'react';

import { TIcon } from '@/types';

const IcUnCheckedBox = ({ size }: TIcon): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="14" height="14" rx="1.5" fill="white" stroke="#699C3A" />
    </svg>
  );
};

export default IcUnCheckedBox;
