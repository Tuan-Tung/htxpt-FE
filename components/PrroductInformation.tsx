import Image from 'next/image';
import React from 'react';

type ProductInformationProps = {
  backgroundImage: string;
  demoImage: string;
} & (
  | {
      products: 'fruits';
      diameter: number[];
      weight: number[];
    }
  | {
      products: 'trees';
      height: number[];
      fruitQuantity: number[];
    }
);

const ProductInformation = ({
  backgroundImage,
  demoImage,
  products,
  ...props
}: ProductInformationProps): React.ReactElement => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="flex flex-wrap w-full items-center justify-between rounded-md bg-cover bg-center bg-no-repeat p-8"
    >
      {products === 'fruits' && 'diameter' in props ? (
        <div className=" lg:px-8 lg:py-6 text-white">
          <div className="">Mô tả:</div>
          <ul className="ml-4">
            <li>
              Đường kính: Từ {props.diameter[0]}cm đến {props.diameter[1]}cm
            </li>
            <li>
              Trọng lượng: Từ {props.weight[0]}kg đến {props.weight[1]}kg
            </li>
            <li>Màu sắc: xanh, vàng chanh bóng</li>
            <li>Tay ngón: Có tay ngón, hình dáng đẹp</li>
            <li>Thời gian trưng : 1-5 tháng</li>
            <li>Sử dụng: Thăm biếu bạn bè, trưng tết, để thờ,...</li>
          </ul>
        </div>
      ) : products === 'trees' && 'height' in props ? (
        <div className="relative z-10 px-8 py-6 text-white">
          <div className="">Mô tả:</div>
          <ul className="ml-4">
            <li>
              Chiều cao: Từ {props.height[0]}m đến {props.height[1]}m
            </li>
            <li>
              Số lượng quả: {props.fruitQuantity[0]} đến {props.fruitQuantity[1]} quả
            </li>
            <li>Quả tự nhiên vàng sang trọng, lá xanh thậm </li>
            <li>Sử dụng: Quà biếu, phong thủy, trưng bày thanh lịch sang trọng</li>
          </ul>
        </div>
      ) : (
        ''
      )}
      <div className="lg:h-[229px] w-full md:w-1/2 lg:w-1/4">
        <Image src={demoImage} layout="fill" objectFit="cover" alt="demo" className="!static" />
      </div>
    </div>
  );
};

export default ProductInformation;
