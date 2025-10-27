'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import ProductCard from '@/components/ProductCard';
import ProductInformation from '@/components/PrroductInformation';
import { DATA_FRUIT } from '@/mock_data/data_gardeners';
import { DemoFruit, FruitInfoBg } from '@/public/images';
import { Fruit } from '@/types/mock';

const ListFruitsPage: NextPage = (): React.ReactElement => {
  const route = useRouter();

  const handelFruitCardClick = useCallback(
    (id: string | undefined) => {
      route.push(`/products/fruits/${id}`);
    },
    [route]
  );

  return (
  <div>
      <ProductInformation
        products="fruits"
        backgroundImage={FruitInfoBg.src}
        demoImage={DemoFruit.src}
        diameter={[15, 20]}
        weight={[1.5, 3]}
      />
      <div className="mt-8 grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {DATA_FRUIT.map((fruit: Fruit, index: number) => (
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
        ))}
      </div>
    </div>
  );
};

export default ListFruitsPage;
