import Image from 'next/image';
import React, { useState } from 'react';

import { DemoFruit, DemoTree } from '@/public/images';
import { Skeleton } from '@/components/ui/Skeleton';

export type Product = {
  _id?: string;
  image: string;
  isFruit?: boolean;
  category_name?: string;
  range_price?: string;
  shape?: string;
  dimeter?: any;
  weight?: any;
  name?: string;
  tree_name?: string;
  quantity?: number;
  description?: string;
};

export { ProductCardSkeleton } from '@/components/CardSkeletons';

type ProductCardProps = Product & {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
const ProductCard = ({
  _id,
  isFruit,
  shape,
  name,
  description,
  image,
  onClick,
}: ProductCardProps): React.ReactElement => {
  const [loaded, setLoaded] = useState(false);
  const src = image || (isFruit ? DemoFruit.src : DemoTree.src);
  const tagline = isFruit ? shape : description;

  return (
    <div
      onClick={onClick}
      className="group max-w-sm cursor-pointer transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 group-hover:shadow-card-hover">
        <div className="relative w-full overflow-hidden">
          <div className="aspect-w-1 aspect-h-1 relative w-full bg-gradient-to-br from-primary_light to-white">
            {!loaded && <Skeleton className="absolute inset-0 h-full w-full bg-gray-200" />}
            <Image
              src={src}
              alt={isFruit ? 'Fruit Image' : 'Tree Image'}
              fill
              className={`object-cover transition-all duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
            />
          </div>
          <span className="absolute left-2 top-2 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white shadow-soft backdrop-blur-sm">
            {isFruit ? 'Phật thủ' : 'Bonsai'}
          </span>
          <div className="absolute inset-x-0 bottom-0 bg-primary_dark/80 py-2 text-center text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-colors group-hover:bg-primary_dark">
            Xem chi tiết
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 px-5 py-4">
          <div className="w-full truncate text-base font-bold text-black">{name}</div>
          {tagline && (
            <p className="line-clamp-2 w-full text-sm italic text-dark_grey">{tagline}</p>
          )}
          {_id && <p className="w-full text-xs text-dark_grey/60">Mã SP: #{_id}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;