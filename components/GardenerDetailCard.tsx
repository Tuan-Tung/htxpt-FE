import Image from 'next/image';
import React, { memo } from 'react';

import Icon from '@/components/Icon';

type GardenerDetailInformationProps = {
  gardenerId?: string;
  avatarImage: string;
  backgroundImage: string;
  gardenerName: string;
  products: string[];
  fruitsQuantity: number;
  ratingAverage: number;
  treesQuantity: number;
  responseRate: number;
  ratingQuantity: number;
  joinedAt: Date;
};

const GardenerDetailCard: React.FC<GardenerDetailInformationProps> = memo(
  ({
    avatarImage,
    backgroundImage,
    gardenerName,
    fruitsQuantity,
    products,
    ratingQuantity,
    ratingAverage,
    responseRate,
    treesQuantity,
    joinedAt,
  }) => {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    }).format(joinedAt);

    return (
      <div className="flex gap-24 rounded-xl bg-white p-6 shadow-md">
        <div
          className="flex flex-col gap-4 rounded-md bg-cover bg-center p-4"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex items-end gap-2.5">
            <div className="relative h-[74px] w-[74px] overflow-hidden rounded-full">
              <Image src={avatarImage} alt="Gardener Avatar" layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white">Gardener</span>
              <span className="font-bold text-white">{gardenerName}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="hover:bg-opacity/10 border border-white bg-transparent px-12 py-1 text-white">
              Favorite
            </button>
            <button className="hover:bg-opacity/10 border border-white bg-transparent px-12 py-1 text-white">
              Message
            </button>
          </div>
        </div>

        <div className="flex gap-24">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1.5">
              <Icon name="ic_card_category_outline" color="#699C3A" size={24} />
              <span>Sản phẩm: {products.join(', ')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="ic_fruit_outline" color="#699C3A" size={24} />
              <span>Quả: {fruitsQuantity}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="ic_fruit_outline" color="#699C3A" size={24} />
              <span>Bonsai: {treesQuantity}</span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1.5">
              <Icon name="ic_fruit_outline" color="#699C3A" size={24} />
              <span>Tỉ lệ phản hồi chat: {responseRate}%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="ic_fruit_outline" color="#699C3A" size={24} />
              <span>
                Đánh giá: {ratingAverage} ({ratingQuantity} đánh giá)
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="ic_fruit_outline" color="#699C3A" size={24} />
              <span>Tham gia: {formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

GardenerDetailCard.displayName = 'GardenerDetailInformation';
export default GardenerDetailCard;
