'use client';
import _ from 'lodash';
import { NextPage } from 'next'
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';

import ProductCard, { Product } from '@/components/ProductCard'
import { NO_PRODUCT_TEXT } from '@/constants/footer';
import { RootState } from '@/stores/store';

const GardenerListTrees:NextPage = ():React.ReactElement => {
  const route = useRouter();

  const { gardeners } = useSelector((state: RootState) => state.gardener)
  const handelTreeCardClick = useCallback(
    (id: string | undefined) => {
      route.push(`/products/trees/${id}`);
    },
    [route]
  );
  return (
    <div>
      {!_.isEmpty(gardeners?.bonsai) ? gardeners?.bonsai?.map((tree: Product, index: number) => (
        <ProductCard
        key={tree.tree_name || 0 + index}
        name={tree.tree_name}
        image={tree.image}
        quantity={tree.quantity}
        description={tree.description}
        onClick={() => handelTreeCardClick(tree?._id)}
      />
      )): NO_PRODUCT_TEXT}
    </div>
  )
}

export default GardenerListTrees