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
  <div className="mb-1.5 box-border flex w-full flex-1 items-center justify-start px-6 text-[14px] text-dark_grey sm:text-sm md:px-4 md:text-lg lg:px-2 lg:text-lg">
    <Icon color="#699C3A" name={icon} size={20} aria-label={label} />
    <span className="truncate-ellipsis max-w-full pl-2">
      <span className="font-semibold text-black">{label}:</span> {value || 0} {unit}
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
      <div className="flex flex-col items-center py-6">
        <div className="mb-3 text-lg font-bold truncate-ellipsis max-w-full pl-2">{name}</div>
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