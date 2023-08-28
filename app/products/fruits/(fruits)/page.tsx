'use client';

import { NextPage } from 'next';
import React from 'react';

import { productsList } from '@/app/page';
import ProductCard, { Product } from '@/components/ProductCard';
import ProductInformation from '@/components/PrroductInformation';
import { DemoFruit, FruitInfoBg } from '@/public/images';

const ListFruitsPage: NextPage = (): React.ReactElement => {
  return (
  <div>
      <ProductInformation
        products="fruits"
        backgroundImage={FruitInfoBg.src}
        demoImage={DemoFruit.src}
        diameter={[15, 20]}
        weight={[1.5, 3]}
      />
      <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {productsList.map((tree: Product, index: number) => (
          <ProductCard
            key={tree.gardener + index}
            gardener={tree.gardener}
            image={tree.image}
            status={tree.status}
            title={tree.title}
          />
        ))}
      </div>
    </div>
  );
};

export default ListFruitsPage;
