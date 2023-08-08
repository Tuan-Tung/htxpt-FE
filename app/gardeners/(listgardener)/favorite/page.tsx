import { NextPage } from 'next';
import React from 'react';

import { gardenersList } from '@/app/page';
import GardenerItemsGrid from '@/components/GardenerItemsGrid';

const FavoriteGardenerPage: NextPage = (): React.ReactElement => {
  return (
    <div>
      <GardenerItemsGrid items={gardenersList} />
    </div>
  );
};

export default FavoriteGardenerPage;
