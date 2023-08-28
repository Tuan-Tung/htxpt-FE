'use client';

import React from 'react';

import { TIcon } from '@/types';

const IcAvatarDefaultIcon = ({ size }: TIcon): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="5" r="5" fill="white" />
      <ellipse cx="8" cy="15.5" rx="8" ry="4.5" fill="white" />
    </svg>
  );
};

export default IcAvatarDefaultIcon;
