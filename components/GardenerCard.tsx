import Image from 'next/image';
import React from 'react';

import Icon from '@/components/Icon';
import { Objects } from '@/public/images';
import { TGardener } from '@/types';

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
  first_name,
  last_name,
  image = '',
  location,
  phone,
  product_category,
  rating_avg,
  onClick,
}: GardenerProps): React.ReactElement => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-md"
    >
      <div className="aspect-w-1 aspect-h-1 relative w-full">
        {image ? (
          <Image src={image} alt="Gardener Image" layout="fill" objectFit="cover" />
        ) : (
          <Image src={Objects.src} alt="Gardener Image" layout="fill" objectFit="cover" className="m-auto !w-auto" />
        )}
      </div>
      <div className="truncate p-4 sm:p-6">
        <div className="flex items-center justify-between gap-1">
          <div className="truncate text-lg font-bold sm:text-xl">{last_name}</div>
          <div className="text-primary flex items-center gap-[2px] text-sm sm:text-base">
            {rating_avg ? (
              <>
                <Icon name="ic_star" color="#699C3A" size={13} aria-label="Rating Star" />
                {rating_avg}
              </>
            ) : (
              <div className="text-sm sm:text-base">New</div>
            )}
          </div>
        </div>
        <div className="mt-3 sm:mt-4">
          <div className="mb-2 flex items-center gap-2 text-xs sm:text-sm">
            <Icon color="#699C3A" name="ic_location_outline" size={20} aria-label="Location Icon" />
            <span className="truncate-ellipsis">{location ? location : 'Liên hệ'}</span>
          </div>
          <div className="mb-2 flex items-center gap-2 text-xs sm:text-sm">
            <Icon color="#699C3A" name="ic_phone_outline" size={20} aria-label="Phone Icon" />
            <span className="truncate-ellipsis">{phone}</span>
          </div>
          <div className="flex items-center gap-2 truncate text-xs sm:text-sm">
            <Icon color="#699C3A" name="ic_card_category_outline" size={20} aria-label="Product Icon" />
            <span className="truncate-ellipsis text-primary">
              {product_category?.length === 0 ? 'Chưa có sản phẩm' : product_category?.join(', ')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenerCard;