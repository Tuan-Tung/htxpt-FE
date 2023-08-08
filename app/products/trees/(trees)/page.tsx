
'use client';

import { NextPage } from 'next';
import React from 'react';

import { productsList } from '@/app/page';
import ProductCard, { Product } from '@/components/ProductCard';
import ProductInformation from '@/components/PrroductInformation';
import { DemoFruit, Nature } from '@/public/images';

const ListTreesPage: NextPage = (): React.ReactElement => {
  return (
    <div>
      <ProductInformation
       backgroundImage={Nature.src}
       demoImage={DemoFruit.src}
       products='trees'
       height={[2, 5]}
       fruitQuantity={100}
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

export default ListTreesPage;
