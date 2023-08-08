'use client';

import React from 'react';

import { TIcon } from '@/types';

const IcLocationOutline = ({ size, color }: TIcon): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 3.96143C0.5 6.38734 2.62224 8.39346 3.56159 9.16261C3.69603 9.27268 3.76406 9.32838 3.86435 9.35662C3.94245 9.37861 4.0574 9.37861 4.1355 9.35662C4.23598 9.32833 4.30353 9.27317 4.43848 9.16268C5.37783 8.39354 7.49996 6.38756 7.49996 3.96165C7.49996 3.04359 7.13123 2.16303 6.47485 1.51386C5.81848 0.864697 4.9283 0.5 4.00004 0.5C3.07178 0.5 2.1815 0.864752 1.52513 1.51392C0.868749 2.16308 0.5 3.04337 0.5 3.96143Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3.5C3 4.05228 3.44772 4.5 4 4.5C4.55228 4.5 5 4.05228 5 3.5C5 2.94772 4.55228 2.5 4 2.5C3.44772 2.5 3 2.94772 3 3.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcLocationOutline;
