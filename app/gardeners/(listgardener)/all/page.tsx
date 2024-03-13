'use client'
// import { useSelector } from '@/stores/store';

import { NextPage } from 'next';
import React, { useEffect } from 'react';

import GardenerItemsGrid from '@/components/GardenerItemsGrid';
import { useGardener } from '@/components/hooks/gardener';

const AllGardenerPage: NextPage = (): React.ReactElement => {

  // const { gardeners } = useSelector((state) => state.gardener);
  const {data, onGetGarden} = useGardener({});

  useEffect(() => {
    onGetGarden;
  },[onGetGarden])

  return (
    <div>
      <GardenerItemsGrid items={data} />
    </div>
  );
};

export default AllGardenerPage;
