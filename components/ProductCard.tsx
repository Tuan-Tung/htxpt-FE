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

const ProductDetail: React.FC<{ icon: keyof typeof ICONS; label: string; value: any; unit?: string }> = ({ icon, label, value, unit }) => (
  <div className="mb-1.5 box-border flex w-full flex-1 items-center justify-start px-6 text-[14px] sm:text-sm md:px-4 md:text-base lg:px-2 lg:text-lg">
    <Icon color="#699C3A" name={icon} size={20} aria-label={label} />
    <span className="truncate-ellipsis max-w-full pl-2">
      {label}: {value || 0} {unit}
    </span>
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
    <div onClick={onClick} className="flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="aspect-w-1 aspect-h-1 relative w-full">
        {!loaded && <Skeleton className="absolute inset-0 h-full w-full rounded-t-lg bg-gray-200" />}
        <Image
          src={src}
          alt={isFruit ? 'Fruit Image' : 'Tree Image'}
          fill
          objectFit="cover"
          loading="lazy"
          className={`transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="flex flex-col items-center py-6">
        <div className="mb-3 text-lg font-bold">{name}</div>
        {isFruit ? (
          <>
            <ProductDetail icon="ic_fruit_outline" label={SHAPE} value={shape} />
            <ProductDetail icon="ic_fruit_outline" label={WEIGHT} value={weight} unit="g" />
            <ProductDetail icon="ic_fruit_outline" label={RANG_PRICE} value={range_price} unit="VNĐ" />
            <ProductDetail icon="ic_fruit_outline" label={DIMETER} value={dimeter} unit="cm" />
          </>
        ) : (
          <>
            <ProductDetail icon="ic_trees_outline" label={QUANTITY} value={quantity} />
            <ProductDetail icon="ic_trees_outline" label={DESCRIPTION} value={description} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;