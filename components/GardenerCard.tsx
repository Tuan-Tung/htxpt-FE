import Image from 'next/image';
import React from 'react';

import Icon from '@/components/Icon';

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

type GardenerProps = Gardener & {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onHeartIconClick?: React.MouseEventHandler<HTMLDivElement>;
};

const GardenerCard = ({
  gardenerName,
  image,
  isLiked,
  onHeartIconClick,
  location,
  phoneNumber,
  products,
  ratingStart,
  onClick,
}: GardenerProps): React.ReactElement => {
  const handleHeartClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onHeartIconClick?.(e);
  };

  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col overflow-hidden rounded-lg shadow-md"
    >
      <div className="relative h-[45vw] w-full md:h-[30vw] lg:h-[21vw] xl:h-[18vw] 2xl:h-[15vw]">
        <Image src={image} alt="Gardener Image" layout="fill" objectFit="cover" />
        <div
          onClick={handleHeartClick}
          className="absolute right-2.5 top-2.5 cursor-pointer transition-transform hover:scale-110"
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >
          <Icon name={isLiked ? 'ic_heart_fill' : 'ic_heart_outline'} />
        </div>
      </div>
      <div className="truncate p-3">
        <div className="flex items-center justify-between gap-1">
          <div className="truncate text-[18px] font-bold">{gardenerName}</div>
          <div className="flex items-center gap-[2px] font-[14px] text-primary">
            <Icon name="ic_star" color="#699C3A" size={13} aria-label="Rating Star" />
            {ratingStart}
          </div>
        </div>
        <div className="mt-2.5">
          <div className="mb-1.5 flex items-center gap-2 text-[12px]">
            <Icon color="#699C3A" name="ic_location_outline" size={20} aria-label="Location Icon" />
            <span className="truncate-ellipsis">{location}</span>
          </div>
          <div className="mb-1.5 flex items-center gap-2 text-[12px] ">
            <Icon color="#699C3A" name="ic_phone_outline" size={20} aria-label="Phone Icon" />
            <span className="truncate-ellipsis">{phoneNumber}</span>
          </div>
          <div className="flex items-center gap-2 truncate text-[12px]">
            <Icon
              color="#699C3A"
              name="ic_card_category_outline"
              size={20}
              aria-label="Product Icon"
            />
            <span className="truncate-ellipsis text-primary">{products.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenerCard;
