'use client';

import React from 'react';

import { TIcon } from '@/types';

const IcPhoneOutline = ({ size, color }: TIcon): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75123 1.12861C3.59937 0.748951 3.23166 0.5 2.82275 0.5H1.44737C0.924151 0.5 0.5 0.924048 0.5 1.44727C0.5 5.89461 4.10539 9.49999 8.55273 9.49999C9.07595 9.49999 9.5 9.07581 9.5 8.55259L9.50023 7.17698C9.50023 6.76807 9.25135 6.40043 8.87169 6.24856L7.55346 5.72147C7.21243 5.58506 6.82414 5.64645 6.54197 5.88159L6.20176 6.16534C5.80443 6.49644 5.21982 6.47011 4.8541 6.10439L3.89611 5.14553C3.53039 4.77981 3.50337 4.19567 3.83447 3.79834L4.11816 3.45815C4.35331 3.17598 4.41525 2.78758 4.27883 2.44655L3.75123 1.12861Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcPhoneOutline;
