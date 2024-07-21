'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';

import { useFruitByCategory } from '@/components/hooks/fruit';
import Icon from '@/components/Icon';
import { GARDENER_TEXT } from '@/constants/about';
import { CALL_TEXT } from '@/constants/footer';
import { DemoFruit } from '@/public/images';
import { isEmpty } from 'lodash';

interface IPropPdOfGarden {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  name: string;
  garden: string;
  key: string;
  phone: string;
}
const DetailFruitCategoriesPage: NextPage = (): React.ReactElement => {
  const params = useParams();
  const route = useRouter();

  const { data, onGetFruitByCategory }: any = useFruitByCategory(
    params['fruits-category'] as string
  );

  console.log(data);

  useEffect(() => {
    onGetFruitByCategory;
  }, [onGetFruitByCategory]);

  const handelFruitCardClick = useCallback(
    (id: string | undefined) => {
      route.push(`/products/fruits/${id}`);
    },
    [route]
  );

  const ProductOfGarden = ({ onClick, name, garden, key, phone }: IPropPdOfGarden) => {
    return (
      <div
        key={key}
        onClick={onClick}
        className="mt-8 flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-lg"
      >
        <div className="relative h-[45vw] w-full md:h-[30vw] lg:h-[21vw] xl:h-[18vw] 2xl:h-[15vw]">
          <Image src={DemoFruit.src} alt="Gardener Image" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col items-center py-[24px]">
          <div className="mb-[11px] text-[18px] font-bold leading-[28px]">{name}</div>
          <div>
            <div className="mb-1.5 box-border flex items-center gap-2 px-1 text-[12px]">
              <Icon color="#699C3A" name="ic_trees_outline" size={20} aria-label="Location Icon" />
              <span className="truncate-ellipsis">
                {GARDENER_TEXT} : {garden}
              </span>
            </div>
            <div className="mb-1.5 box-border flex items-center gap-2 px-1 text-[12px]">
              <Icon color="#699C3A" name="ic_phone_outline" size={20} aria-label="Location Icon" />
              <span className="truncate-ellipsis">
                {CALL_TEXT} : {phone}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="">
      <div className="flex h-[229px] items-start justify-between bg-garden pl-[33px] lg:pr-[100px]">
        <div className="inline-flex flex-col items-start justify-start gap-[5px] py-[30px]">
          <div className="text-base font-normal leading-normal text-white">Mô tả:</div>
          <div className="text-base font-normal leading-normal text-white">
            Đường kính: Từ {!isEmpty(data) && data?.dimeter[0]} cm đến {!isEmpty(data)  && data?.dimeter[1]} cm
            <br />
            Trọng lượng: Từ {!isEmpty(data) && data?.weight[0]} kg đến {!isEmpty(data)  && data?.weight[1]} kg
            <br />
            Màu sắc: xanh, vàng chanh bóng
            <br />
            Tay ngón: Có tay ngón, hình dáng đẹp
            <br />
            Thời gian trưng : 1-5 tháng
            <br />
            Sử dụng: Thăm biếu bạn bè, trưng tết, để thờ,…
          </div>
        </div>
        <div className="h-[229px] w-[236px] hidden md:block">
          <Image
            className="!static"
            src={DemoFruit.src}
            alt="Gardener Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="ml-[19px] grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3  2xl:grid-cols-5">
        {data?.fruits?.map((fruitCate: any, index: number) => (
          <ProductOfGarden
            key={fruitCate.fruit_name || 0 + index}
            garden={`${fruitCate?.gardens?.first_name} ${fruitCate?.gardens?.last_name}`}
            name={fruitCate?.fruit_name}
            phone={fruitCate?.gardens?.phone}
            onClick={() => handelFruitCardClick(fruitCate?._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailFruitCategoriesPage;
