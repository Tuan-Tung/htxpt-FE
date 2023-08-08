'use client';

import React from 'react';

import { TIcon } from '@/types';

const IcStarOutline = ({size, color }: TIcon): React.ReactElement => {
  return (
    <svg width={size}
    height={size} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.6101 2.11804L13.8287 8.9463L13.941 9.2918H14.3043H21.4839L15.6755 13.5119L15.3816 13.7254L15.4938 14.0709L17.7125 20.8992L11.904 16.6791L11.6101 16.4656L11.3162 16.6791L5.50774 20.8992L7.72638 14.0709L7.83864 13.7254L7.54474 13.5119L1.73627 9.2918H8.91594H9.27921L9.39147 8.9463L11.6101 2.11804Z"
        stroke={color}
      />
    </svg>
  );
};

export default IcStarOutline;
