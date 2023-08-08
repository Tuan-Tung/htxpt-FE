'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';

import GardenerCard, { Gardener } from '@/components/GardenerCard';

type GardenerGridProps = {
  items: Gardener[];
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
      {items.map((gardener: Gardener, index: number) => (
        <GardenerCard
          id={gardener.id}
          onHeartIconClick={() => handleHeartIconClicked(gardener.id)}
          key={gardener.gardenerName + index}
          gardenerName={gardener.gardenerName}
          ratingStart={gardener.ratingStart}
          image={gardener.image}
          location={gardener.location}
          phoneNumber={gardener.phoneNumber}
          products={gardener.products}
          isLiked={gardenerLikes.includes(gardener.id)}
          onClick={()=>handleOnItemClick(gardener.id)}
        />
      ))}
    </div>
  );
}
