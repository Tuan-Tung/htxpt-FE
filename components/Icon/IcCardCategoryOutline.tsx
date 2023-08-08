'use client';

import React from 'react';

import { TIcon } from '@/types';

const IcCardCategoryOutline = ({ size, color }: TIcon): React.ReactElement => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3H2.85547C2.37393 3 2.13327 3 1.93799 3.0876C1.76585 3.16482 1.6192 3.28919 1.51473 3.44629C1.39622 3.62451 1.35638 3.86193 1.27721 4.33691L0.810547 7.13691L0.810359 7.13795C0.703641 7.77826 0.650252 8.09859 0.742975 8.34823C0.824386 8.56742 0.980289 8.7511 1.18311 8.86743C1.41422 9 1.73888 9 2.38867 9H7.6112C8.26099 9 8.58618 9 8.81729 8.86743C9.02011 8.7511 9.17564 8.56742 9.25705 8.34824C9.34974 8.09869 9.29638 7.77851 9.18974 7.1387L9.18932 7.13691L8.72266 4.33691C8.64349 3.86193 8.60387 3.62451 8.48535 3.44629C8.38088 3.28919 8.23412 3.16482 8.06198 3.0876C7.86671 3 7.6262 3 7.14466 3H7M3 3H7M3 3C3 1.89543 3.89543 1 5 1C6.10457 1 7 1.89543 7 3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IcCardCategoryOutline;
