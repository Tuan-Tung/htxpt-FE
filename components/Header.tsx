'use client';

import React, { useEffect } from 'react';

import { DocsSearch } from '@/components/Search';
import { UserAccountNav } from '@/components/UserAccountNav';
import { SLOGAN_TEXT, WELCOME_TEXT } from '@/constants/header';
import { gardenerActions } from '@/features/gardener/gardenerSlice';
import { productsActions } from '@/features/products/productsSlice';
import { useLazyGetFruitsQuery } from '@/services/services/query/endpoints/fruits';
import { useLazyGetGardensQuery } from '@/services/services/query/endpoints/gardeners';
import { useDispatch } from '@/stores/store';

const Header: React.FC = (): React.ReactElement => {
  const [triggerGardens, { data: gardensData, isLoading: gardensLoading }] =
    useLazyGetGardensQuery(undefined);
  const [triggerFruits, { data: fruitsData, isLoading: fruitsLoading }] =
    useLazyGetFruitsQuery(undefined);

  const dispatch = useDispatch();

  useEffect(() => {
    triggerGardens(undefined);
    triggerFruits(undefined);
  }, [triggerGardens, triggerFruits]);

  useEffect(() => {
    if (gardensData && !gardensLoading) {
      dispatch(gardenerActions.setGardeners(gardensData.data.items));
    }
  }, [gardensData, gardensLoading, dispatch]);

  useEffect(() => {
    if (fruitsData && !fruitsLoading) {
      dispatch(productsActions.setFruits(fruitsData.data.items));
    }
  }, [fruitsData, fruitsLoading, dispatch]);

  return (
    <div className="align-center fixed left-[260px] right-0 top-0 z-50 flex h-[72px] w-auto flex-row items-center justify-between bg-primary px-[56px]">
      <div className="flex flex-1 flex-col items-start justify-start text-white">
        <h2 className="text-2xl font-bold">{WELCOME_TEXT}</h2>
        <p className="text-sm">{SLOGAN_TEXT}</p>
      </div>
      <div className="flex-1">
        <DocsSearch />
      </div>
      <div className="flex flex-1 justify-end">
        <UserAccountNav name="khanh" />
      </div>
    </div>
  );
};

export default Header;
