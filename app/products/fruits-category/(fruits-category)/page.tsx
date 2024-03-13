'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';

import { useFruitCategory } from '@/components/hooks/fruit';
import ProductCard, { Product } from '@/components/ProductCard';
import ProductInformation from '@/components/PrroductInformation';
import { DemoFruit, FruitInfoBg } from '@/public/images';

const ListFruitsPage: NextPage = (): React.ReactElement => {
  const route = useRouter();

  const { data: dataFruitCategory, onGetFruitCategory } = useFruitCategory();

  useEffect(() => {
    onGetFruitCategory;
  }, [onGetFruitCategory])

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
      <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {dataFruitCategory.map((fruit: Product, index: number) => (
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
