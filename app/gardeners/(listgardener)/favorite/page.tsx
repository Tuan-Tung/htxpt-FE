import { NextPage } from 'next';
import React from 'react';

import GardenerItemsGrid from '@/components/GardenerItemsGrid';
// import { useSelector } from '@/stores/store';

const FavoriteGardenerPage: NextPage = (): React.ReactElement => {
  // const { gardeners } = useSelector((state) => state.gardener);

  return (
    <div>
      <GardenerItemsGrid items={[]} />
    </div>
  );
};

export default FavoriteGardenerPage;
