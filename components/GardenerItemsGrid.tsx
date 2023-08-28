'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import GardenerCard from '@/components/GardenerCard';
import { TGardener } from '@/types';

type GardenerGridProps = {
  items: TGardener[];
};

export default function GardenerItemsGrid({ items }: GardenerGridProps) {
  const router = useRouter();
  const [gardenerLikes, setGardenerLikes] = useState<string[]>([]);

  const handleHeartIconClicked = useCallback(
    (id: string) => {
      const isAlreadyLiked = gardenerLikes.includes(id);

      if (isAlreadyLiked) {
        setGardenerLikes(gardenerLikes.filter((gardenerId: string) => gardenerId !== id));
      } else {
        setGardenerLikes([...gardenerLikes, id]);
      }
    },
    [gardenerLikes]
  );

  const handleOnItemClick = useCallback(
    (gardenerId: string) => {
      router.push(`/gardeners/${gardenerId}/fruits`);
    },
    [router]
  );
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {items.map((gardener: TGardener, index: number) => (
        <GardenerCard
          _id={gardener._id}
          onHeartIconClick={() => handleHeartIconClicked(gardener._id)}
          key={gardener.first_name + index}
          first_name={gardener.first_name}
          last_name={gardener.last_name}
          rating_avg={gardener.rating_avg}
          image={gardener.image}
          location={gardener.location}
          phone={gardener.phone}
          product_category={gardener.product_category}
          // isLiked={gardenerLikes.includes(gardener.id)}
          onClick={() => handleOnItemClick(gardener._id)}
        />
      ))}
    </div>
  );
}
