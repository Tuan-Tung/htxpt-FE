'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import ProductCard, { Product } from '@/components/ProductCard';

type ProductItemsGridProps = {
  items: Product[];
};

export default function ProductItemsGrid({ items }: ProductItemsGridProps) {
  const router = useRouter();

  const handleOnItemClick = useCallback((gardenerId: string) => {
    router.push(`/gardeners/${gardenerId}/fruits`);
  }, [router]);

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {items.map((tree: Product, index: number) => (
        <ProductCard
          key={tree.gardener + index}
          gardener={tree.gardener}
          image={tree.image}
          status={tree.status}
          title={tree.title}
          onClick={() => handleOnItemClick}
        />
      ))}
    </div>
  );
}
