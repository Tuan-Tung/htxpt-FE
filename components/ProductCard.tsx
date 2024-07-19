
import _ from 'lodash';
import Image from 'next/image';
import React from 'react';

import Icon, { ICONS } from '@/components/Icon';
import { DESCRIPTION, DIMETER, QUANTITY, RANG_PRICE, SHAPE, WEIGHT } from '@/constants/about';
import { DemoFruit, DemoTree } from '@/public/images';

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

const ProductDetail: React.FC<{ icon: keyof typeof ICONS; label: string; value: any; unit?: string }> = ({ icon, label, value, unit }) => (
  <div className="mb-1.5 box-border flex w-full flex-1 items-center justify-start px-6 text-[14px] sm:text-sm md:px-4 md:text-base lg:px-2 lg:text-lg">
    <Icon color="#699C3A" name={icon} size={20} aria-label={label} />
    <span className="truncate-ellipsis max-w-full pl-2">
      {label}: {value || 0} {unit}
    </span>
  </div>
);

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
    <div onClick={onClick} className="flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="aspect-w-1 aspect-h-1 relative w-full">
        <Image
          src={isFruit ? DemoFruit.src : DemoTree.src}
          alt={isFruit ? 'Fruit Image' : 'Tree Image'}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center py-6">
        <div className="mb-3 text-lg font-bold">{name}</div>
        {isFruit ? (
          <>
            <ProductDetail icon="ic_fruit_outline" label={SHAPE} value={shape?.join(', ')} />
            <ProductDetail icon="ic_fruit_outline" label={WEIGHT} value={!_.isEmpty(weight) ? `${weight[0]} - ${weight[1]}` : 0} unit="g" />
            <ProductDetail icon="ic_fruit_outline" label={RANG_PRICE} value={range_price?.join(' - ')} unit="VNĐ" />
            <ProductDetail icon="ic_fruit_outline" label={DIMETER} value={!_.isEmpty(dimeter) ? `${dimeter[0]} - ${dimeter[1]}` : 0} unit="cm" />
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
// import _ from 'lodash';
// import Image from 'next/image';
// import React from 'react';

// import Icon from '@/components/Icon';
// import { DESCRIPTION, DIMETER, QUANTITY, RANG_PRICE, SHAPE, WEIGHT } from '@/constants/about';
// import { DemoFruit,DemoTree } from '@/public/images';

// export type Product = {
//   _id?: string;
//   image: string;
//   isFruit?: boolean;
//   category_name?: string;
//   range_price?: number[];
//   shape?: string[];
//   dimeter?: any;
//   weight?: any;
//   name?: string;
//   tree_name?: string;
//   quantity?: number;
//   description?: string;
// };

// type ProductCardProps = Product & {
//   onClick?: React.MouseEventHandler<HTMLDivElement>;
// };

// const ProductCard = ({
//   range_price,
//   isFruit,
//   shape,
//   dimeter,
//   weight,
//   name,
//   quantity,
//   description,
//   onClick,
// }: ProductCardProps): React.ReactElement => {

//   return (
//     <div
//       onClick={onClick}
//       className="flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-lg"
//     >
//       <div className="relative h-[45vw] w-full md:h-[30vw] lg:h-[21vw] xl:h-[18vw] 2xl:h-[15vw]">
//         {isFruit ? <Image src={DemoFruit.src} alt="Gardener Image" layout="fill" objectFit="cover" /> :
//           <Image src={DemoTree.src} alt="Gardener Image" layout="fill" objectFit="cover" />}
//       </div>
//       <div className="flex flex-col items-center py-[24px]">
//         <div className="mb-[11px] text-[18px] font-bold leading-[28px]">{name}</div>
//         {isFruit ?
//           <div>
//             <div className="mb-1.5 box-border flex items-center px-2 text-[12px]">
//               <Icon color="#699C3A" name="ic_fruit_outline" size={20} aria-label="Location Icon" />
//               <span className="truncate-ellipsis max-w-[140px] pl-2 sm:max-w-[175px]">{SHAPE} : {shape || 0}</span>
//             </div>
//             <div className="mb-1.5 box-border flex items-center px-2 text-[12px]">
//               <Icon color="#699C3A" name="ic_fruit_outline" size={20} aria-label="Location Icon" />
//               <span className="truncate-ellipsis max-w-[140px] pl-2 sm:max-w-[175px]">{WEIGHT} : {!_.isEmpty(weight) ? `${weight[0]} - ${weight[1]}` : 0} {`(g)`}</span>
//             </div>
//             <div className="mb-1.5 box-border flex items-center px-2 text-[12px]">
//               <Icon color="#699C3A" name="ic_fruit_outline" size={20} aria-label="Location Icon" />
//               <span className="truncate-ellipsis max-w-[140px] pl-2 sm:max-w-[175px]">{RANG_PRICE} : {range_price} VNĐ</span>
//             </div>
//             <div className="mb-1.5 box-border flex items-center px-2 text-[12px]">
//               <Icon color="#699C3A" name="ic_fruit_outline" size={20} aria-label="Location Icon" />
//               <span className="truncate-ellipsis max-w-[140px] pl-2 sm:max-w-[175px]">{DIMETER} : {!_.isEmpty(dimeter) ? `${dimeter[0]} - ${dimeter[1]}` : 0} {`(cm)`}</span>
//             </div>
//           </div> :
//           <div>
//             <div className="mb-1.5 box-border flex items-center px-2 text-[12px]">
//               <Icon color="#699C3A" name="ic_trees_outline" size={20} aria-label="Location Icon" />
//               <span className="truncate-ellipsis max-w-[140px] pl-2 sm:max-w-[175px]">{QUANTITY} : {quantity}</span>
//             </div>
//             <div className="mb-1.5 box-border flex items-center px-2 text-[12px]">
//               <Icon color="#699C3A" name="ic_trees_outline" size={20} aria-label="Location Icon" />
//               <span className="truncate-ellipsis max-w-[140px] pl-2 sm:max-w-[175px]">{DESCRIPTION} : {description}</span>
//             </div>
//           </div>
//         }
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
