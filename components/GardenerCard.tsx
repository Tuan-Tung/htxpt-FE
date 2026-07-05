import Image from 'next/image';
import React, { useState } from 'react';
import Icon from '@/components/Icon';
import { Objects } from '@/public/images';
import { TGardener } from '@/types';
import { Skeleton } from '@/components/ui/Skeleton';

export type Gardener = {
  id: string;
  image: string;
  gardenerName: string;
  ratingStart: number;
  location: string;
  phoneNumber: string;
  products: string[];
  isLiked?: boolean;
};

type GardenerProps = TGardener & {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onHeartIconClick?: React.MouseEventHandler<HTMLDivElement>;
};

const GardenerCard = ({
  last_name,
  image = '',
  location,
  phone,
  product_category,
  rating_avg,
  onClick,
}: GardenerProps): React.ReactElement => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group flex cursor-pointer flex-col items-center rounded-2xl bg-white p-4 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-5"
    >
      <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-primary_light to-white ring-4 ring-primary_light">
          {!loaded && <Skeleton className="absolute inset-0 h-full w-full rounded-full bg-gray-200" />}
          <Image
            src={image || Objects.src}
            alt="Gardener"
            fill
            className={`object-cover transition-all duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 flex items-center gap-0.5 rounded-full bg-white px-1.5 py-0.5 text-[11px] font-bold text-primary shadow-soft">
          {rating_avg ? (
            <>
              <Icon name="ic_star" color="#699C3A" size={11} />
              {rating_avg}
            </>
          ) : (
            <span>Mới</span>
          )}
        </div>
      </div>

      <div className="mt-3 w-full truncate text-base font-bold sm:text-lg">{last_name}</div>
      <div className="mt-2 flex w-full flex-col items-center gap-1.5 text-dark_grey">
        <div className="flex w-full items-center justify-center gap-1.5 text-xs sm:text-sm">
          <Icon color="#699C3A" name="ic_location_outline" size={16} />
          <span className="truncate-ellipsis">{location || 'Liên hệ'}</span>
        </div>
        <div className="flex w-full items-center justify-center gap-1.5 text-xs sm:text-sm">
          <Icon color="#699C3A" name="ic_phone_outline" size={16} />
          <span className="truncate-ellipsis">{phone}</span>
        </div>
        <div className="flex w-full items-center justify-center gap-1.5 truncate text-xs sm:text-sm">
          <Icon color="#699C3A" name="ic_card_category_outline" size={16} />
          <span className="truncate-ellipsis text-primary">
            {product_category?.length ? product_category.join(', ') : 'Chưa có sản phẩm'}
          </span>
        </div>
      </div>
    </div>
  );
};
export default GardenerCard;