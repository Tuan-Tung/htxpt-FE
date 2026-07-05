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
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative w-full overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 relative w-full bg-gradient-to-br from-primary_light to-white">
          {!loaded && (
            <Skeleton className="absolute inset-0 h-full w-full bg-gray-200" />
          )}
          <Image
            src={image || Objects.src}
            alt="Gardener"
            fill
            className={`object-cover transition-all duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        </div>
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-primary shadow-soft backdrop-blur-sm sm:text-sm">
          {rating_avg ? (
            <>
              <Icon name="ic_star" color="#699C3A" size={13} />
              {rating_avg}
            </>
          ) : (
            <span>Mới</span>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="truncate text-lg font-bold sm:text-xl">{last_name}</div>
        <div className="mt-3 space-y-2 sm:mt-4">
          <div className="flex items-center gap-2 text-xs text-dark_grey sm:text-sm">
            <Icon color="#699C3A" name="ic_location_outline" size={20} />
            <span className="truncate-ellipsis">{location || 'Liên hệ'}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-dark_grey sm:text-sm">
            <Icon color="#699C3A" name="ic_phone_outline" size={20} />
            <span className="truncate-ellipsis">{phone}</span>
          </div>
          <div className="flex items-center gap-2 truncate text-xs sm:text-sm">
            <Icon color="#699C3A" name="ic_card_category_outline" size={20} />
            <span className="truncate-ellipsis text-primary">
              {product_category?.length ? product_category.join(', ') : 'Chưa có sản phẩm'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GardenerCard;