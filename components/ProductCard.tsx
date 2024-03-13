import _ from 'lodash';
import Image from 'next/image';
import React from 'react';

import Icon from '@/components/Icon';
import { DESCRIPTION, DIMETER, QUANTITY, RANG_PRICE, SHAPE, WEIGHT } from '@/constants/about';
import { DemoFruit,DemoTree } from '@/public/images';

export type Product = {
  _id?: string;
  image: string;
  isFruit?: boolean;
  category_name?: string;
  range_price?: number[];
  shape?: string[];
  dimeter?: any;
  weight?: any;
  name?: string;
  tree_name?: string;
  quantity?: number;
  description?: string;
};

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
  onClick,
}: ProductCardProps): React.ReactElement => {

  return (
    <div
      onClick={onClick}
      className="flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-lg"
    >
      <div className="relative h-[45vw] w-full md:h-[30vw] lg:h-[21vw] xl:h-[18vw] 2xl:h-[15vw]">
        {isFruit ? <Image src={DemoFruit.src} alt="Gardener Image" layout="fill" objectFit="cover" /> :
          <Image src={DemoTree.src} alt="Gardener Image" layout="fill" objectFit="cover" />}
      </div>
      <div className="flex flex-col items-center py-[24px]">
        <div className="mb-[11px] text-[18px] font-bold leading-[28px]">{name}</div>
        {isFruit ?
          <div>
            <div className="mb-1.5 box-border flex items-center gap-2 px-1 text-[12px]">
              <Icon color="#699C3A" name="ic_fruit_outline" size={20} aria-label="Location Icon" />
              <span className="truncate-ellipsis">{SHAPE} : {shape || 0}</span>
            </div>
            <div className="mb-1.5 box-border flex items-center gap-2 px-1 text-[12px]">
              <Icon color="#699C3A" name="ic_fruit_outline" size={20} aria-label="Location Icon" />
              <span className="truncate-ellipsis">{WEIGHT} : {!_.isEmpty(weight) ? `${weight[0]} - ${weight[1]}` : 0} {`(g)`}</span>
            </div>
            <div className="mb-1.5 box-border flex items-center gap-2 px-1 text-[12px]">
              <Icon color="#699C3A" name="ic_fruit_outline" size={20} aria-label="Location Icon" />
              <span className="truncate-ellipsis">{RANG_PRICE} : {range_price} VNĐ</span>
            </div>
            <div className="mb-1.5 box-border flex items-center gap-2 px-1 text-[12px]">
              <Icon color="#699C3A" name="ic_fruit_outline" size={20} aria-label="Location Icon" />
              <span className="truncate-ellipsis">{DIMETER} : {!_.isEmpty(dimeter) ? `${dimeter[0]} - ${dimeter[1]}` : 0} {`(cm)`}</span>
            </div>
          </div> :
          <div>
            <div className="mb-1.5 box-border flex items-center gap-2 px-1 text-[12px]">
              <Icon color="#699C3A" name="ic_trees_outline" size={20} aria-label="Location Icon" />
              <span className="truncate-ellipsis">{QUANTITY} : {quantity}</span>
            </div>
            <div className="mb-1.5 box-border flex items-center gap-2 px-1 text-[12px]">
              <Icon color="#699C3A" name="ic_trees_outline" size={20} aria-label="Location Icon" />
              <span className="truncate-ellipsis">{DESCRIPTION} : {description}</span>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default ProductCard;
