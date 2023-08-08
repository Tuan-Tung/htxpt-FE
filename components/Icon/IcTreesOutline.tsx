'use client';

import React from 'react';

import { TIcon } from '@/types';

const IcTreesOutline = ({ size, color }: TIcon): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4415 18.9664C10.5607 17.4344 10.5039 13.9668 9.32401 12.3519"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 18C10 18.6667 8.6 20 7 20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 18C11 18.6667 12.4 20 14 20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.94252 14.4712C8.6381 13.6591 6.59911 12.4535 4.62209 12.7558"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0824 9.88612C13.7825 10.7054 11.0348 12.8215 10.444 14.7323"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6674 11.7995L17.6414 11.8152C16.9223 12.2466 16.0428 12.3171 15.2642 12.0057C14.4696 11.6878 13.5711 11.7681 12.8454 12.2216L11.5085 13.0572C10.5482 13.6574 9.37847 13.8224 8.2896 13.5113L7.72968 13.3513C6.94959 13.1284 6.11098 13.2594 5.43594 13.7094C3.79811 14.8013 1.57352 13.8675 1.18748 11.9373C1.06638 11.3318 1.14994 10.7002 1.42609 10.1479L1.90697 9.18609C2.2803 8.43943 2.2803 7.56057 1.90697 6.81391C1.64322 6.2864 1.56281 5.68602 1.67848 5.10769L1.70616 4.96926C1.89157 4.04222 2.4946 3.25271 3.34019 2.82991L3.53982 2.7301C4.46591 2.26706 5.55197 2.23655 6.50365 2.64441C7.72617 3.16835 9.14337 2.96387 10.1652 2.11239L10.3875 1.92711C11.1063 1.32806 12.0125 1 12.9482 1H14.0775C15.2927 1 16.4419 1.55236 17.201 2.50122L18.9796 4.72452C19.6017 5.50207 19.7148 6.57034 19.2695 7.46097C19.0923 7.81545 19 8.20633 19 8.60265V9.44597C19 10.4101 18.4942 11.3035 17.6674 11.7995Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcTreesOutline;
