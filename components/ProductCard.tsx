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

const ProductDetail: React.FC<{ icon: keyof typeof ICONS; label: string; value: any; unit?: string }> = ({
  icon,
  label,
  value,
  unit,
}) => (
  <div className="flex w-full items-start gap-1.5 text-[13px] leading-snug text-dark_grey sm:text-sm">
    <Icon color="#699C3A" name={icon} size={15} aria-label={label} />
    <span className="line-clamp-2 min-w-0">
      <span className="font-semibold text-black">{label}:</span> {value || 0}
      {unit ? ` ${unit}` : ''}
    </span>
  </div>
);

const SpecChip: React.FC<{ icon: keyof typeof ICONS; label: string; value: any; unit?: string }> = ({
  icon,
  label,
  value,
  unit,
}) => (
  <span
    className="inline-flex items-center gap-1 rounded-full bg-primary_light px-2.5 py-1 text-[11px] font-semibold text-primary sm:text-xs"
    aria-label={label}
  >
    <Icon color="#699C3A" name={icon} size={12} />
    {value || 0}
    {unit ? ` ${unit}` : ''}
  </span>
);

export { ProductCardSkeleton } from '@/components/CardSkeletons';

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
        </div>
        <div className="flex flex-col items-start gap-2 px-5 py-4">
          <div className="w-full truncate text-base font-bold text-black">{name}</div>
          {isFruit ? (
            <div className="flex w-full flex-col gap-2">
              <div className="flex w-full flex-wrap gap-1.5">
                <SpecChip icon="ic_fruit_outline" label={WEIGHT} value={weight} />
                <SpecChip icon="ic_fruit_outline" label={DIMETER} value={dimeter} />
                <SpecChip icon="ic_fruit_outline" label={RANG_PRICE} value={range_price} unit="VNĐ" />
              </div>
              <ProductDetail icon="ic_fruit_outline" label={SHAPE} value={shape} />
            </div>
          ) : (
            <div className="flex w-full flex-col gap-2">
              <div className="flex w-full flex-wrap gap-1.5">
                <SpecChip icon="ic_trees_outline" label={QUANTITY} value={quantity} unit="cây" />
              </div>
              <ProductDetail icon="ic_trees_outline" label={DESCRIPTION} value={description} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;