import Image from 'next/image';
import React, { useState } from 'react';

import Icon, { ICONS } from '@/components/Icon';
import { DESCRIPTION, DIMETER, QUANTITY, RANG_PRICE, SHAPE, WEIGHT } from '@/constants/about';
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

const ProductDetail: React.FC<{ icon: keyof typeof ICONS; label: string; value: any; unit?: string; clamp?: boolean }> = ({
  icon,
  label,
  value,
  unit,
  clamp,
}) => (
  <div className="flex w-full items-start gap-2">
    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary_light">
      <Icon color="#699C3A" name={icon} size={13} aria-label={label} />
    </div>
    <div className="min-w-0 flex-1">
      <div className="text-[11px] uppercase tracking-wide text-dark_grey/60">{label}</div>
      <div className={`text-sm font-semibold text-black ${clamp ? 'line-clamp-2' : 'truncate'}`}>
        {value || 0}
        {unit ? ` ${unit}` : ''}
      </div>
    </div>
  </div>
);

type ProductCardProps = Product & {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};
const ProductCard = ({
  range_price,
  isFruit,
  shape,
  dimeter,
  weight,
  name,
  quantity,
  description,
  image,
  onClick,
}: ProductCardProps): React.ReactElement => {
  const [loaded, setLoaded] = useState(false);
  const src = image || (isFruit ? DemoFruit.src : DemoTree.src);

  return (
    <div onClick={onClick} className="group flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
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
      </div>
      <div className="flex flex-col items-start gap-3 px-5 py-5">
        <div className="w-full truncate text-lg font-bold text-black">{name}</div>
        {isFruit ? (
          <div className="flex w-full flex-col gap-3">
            <ProductDetail icon="ic_fruit_outline" label={SHAPE} value={shape} clamp />
            <ProductDetail icon="ic_fruit_outline" label={WEIGHT} value={weight} />
            <ProductDetail icon="ic_fruit_outline" label={DIMETER} value={dimeter} />
            <ProductDetail icon="ic_fruit_outline" label={RANG_PRICE} value={range_price} unit="VNĐ" />
          </div>
        ) : (
          <div className="flex w-full flex-col gap-3">
            <ProductDetail icon="ic_trees_outline" label={QUANTITY} value={quantity} unit="cây" />
            <ProductDetail icon="ic_trees_outline" label={DESCRIPTION} value={description} clamp />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;