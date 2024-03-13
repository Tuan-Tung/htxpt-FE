'use client';

import _ from 'lodash';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import ProductCard, { Product } from '@/components/ProductCard';
import { NO_PRODUCT_TEXT } from '@/constants/footer';
import { RootState } from '@/stores/store';

const GardenerListFruits: NextPage = (): React.ReactElement => {
  const route = useRouter();

  const { gardeners } = useSelector((state: RootState) => state.gardener)
  const handelFruitCardClick = useCallback(
    (id: string | undefined) => {
      route.push(`/products/fruits/${id}`);
    },
    [route]
  );
  return (
    <div>
      {!_.isEmpty(gardeners?.fruits) ? gardeners?.fruits?.map((fruit: Product, index: number) => (
        <ProductCard
          key={fruit.category_name || 0 + index}
          isFruit
          name={fruit?.category_name}
          image={fruit.image}
          range_price={fruit.range_price}
          shape={fruit.shape}
          dimeter={fruit.dimeter}
          weight={fruit.weight}
          onClick={() => handelFruitCardClick(fruit?._id)}
        />
      )): NO_PRODUCT_TEXT}
    </div>
  );
};

export default GardenerListFruits;
