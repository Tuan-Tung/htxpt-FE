
'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';

import { useBonsai } from '@/components/hooks/bonsai';
import ProductCard, { Product } from '@/components/ProductCard';
import ProductInformation from '@/components/PrroductInformation';
import { DemoFruit, Nature } from '@/public/images';

const ListTreesPage: NextPage = (): React.ReactElement => {
  const route = useRouter();

  const { data: dataBonsai,onGetBonsai } = useBonsai({});

  useEffect(() => {
    onGetBonsai;
  }, [onGetBonsai])

  const handelTreeCardClick = useCallback(
    (id: string | undefined) => {
      route.push(`/products/trees/${id}`);
    },
    [route]
  );

  return (
    <div>
      <ProductInformation
       backgroundImage={Nature.src}
       demoImage={DemoFruit.src}
       products='trees'
       height={[2, 5]}
       fruitQuantity={[40, 75]}
      />
      <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {dataBonsai.map((tree: Product, index: number) => (
          <ProductCard
          key={tree.tree_name || 0 + index}
          name={tree.tree_name}
          image={tree.image}
          quantity={tree.quantity}
          description={tree.description}
          onClick={() => handelTreeCardClick(tree?._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListTreesPage;
