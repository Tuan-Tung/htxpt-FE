import Image from 'next/image';
import React from 'react';

import { GARDENER_TEXT, STATUS_TEXT } from '@/constants/about';
import { PRODUCT_STATUS, ProductStatusCode } from '@/constants/common';

export type Product = {
  image: string;
  title: string;
  gardener: string;
  status: ProductStatusCode;
};

type ProductCardProps = Product & {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const ProductCard = ({
  image,
  gardener,
  status,
  title,
  onClick,
}: ProductCardProps): React.ReactElement => {
  return (
    <div
      onClick={onClick}
      className="flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="relative h-[45vw] w-full md:h-[30vw] lg:h-[21vw] xl:h-[18vw] 2xl:h-[15vw]">
        <Image src={image} alt="Gardener Image" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col items-center px-[12px] py-[24px]">
        <div className="mb-[11px] text-[18px] font-bold leading-[28px]">{title}</div>
        <p className="text-[12px] leading-[20px] text-gray-700">
          {GARDENER_TEXT} : {gardener}
        </p>
        <p className="text-[12px] leading-[20px] text-gray-700">
          {STATUS_TEXT} : {PRODUCT_STATUS[status]}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
