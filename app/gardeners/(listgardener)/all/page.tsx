'use client'

import { NextPage } from 'next';
import React from 'react';

import GardenerItemsGrid from '@/components/GardenerItemsGrid';
import { DATA_GARDENERS } from '@/mock_data/data_gardeners';

const AllGardenerPage: NextPage = (): React.ReactElement => {

  return (
    <div>
      <GardenerItemsGrid items={DATA_GARDENERS} />
    </div>
  );
};

export default AllGardenerPage;
