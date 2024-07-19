'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import Icon from '@/components/Icon';
import ScrollSnapBase from '@/components/ScrollSnapBase';
import Slide from '@/components/Slide';
import { FruitAbout } from '@/public/images';

const contentSlide = [
  {
    id: 1,
    content: <Slide />,
  },
  {
    id: 2,
    content: <Slide />,
  },
  {
    id: 3,
    content: <Slide />,
  },
];

const FruitInformationPage: NextPage = (): React.ReactElement => {
  return (
    <div className="bg-white p-11">
      <div className="mb-[30px] text-2xl font-semibold leading-9 text-lime-600">PHẬT THỦ</div>
      <div className="flex w-full flex-col ">
        <div className="flex flex-col gap-[20px] md:flex-1 md:flex-row md:justify-between">
          <div className="mr-3 rounded-full border-4 border-lime-600 shadow md:h-[200px] md:w-[200px]">
            <Image
              src={FruitAbout}
              layout="fill"
              objectFit="contain"
              alt="Core Value"
              className="!static h-full w-full rounded-full"
            />
          </div>
          <div className="mr-3  rounded-full border-4  border-lime-600 shadow md:h-[200px] md:w-[200px]">
            <Image
              src={FruitAbout}
              layout="fill"
              objectFit="contain"
              alt="Core Value"
              className="!static h-full w-full rounded-full"
            />
          </div>
          <div className="mr-3  rounded-full border-4  border-lime-600 shadow md:h-[200px] md:w-[200px]">
            <Image
              src={FruitAbout}
              layout="fill"
              objectFit="contain"
              alt="Core Value"
              className="!static h-full w-full rounded-full"
            />
          </div>
          <div className="mr-3  rounded-full border-4  border-lime-600 shadow md:h-[200px] md:w-[200px]">
            <Image
              src={FruitAbout}
              layout="fill"
              objectFit="contain"
              alt="Core Value"
              className="!static h-full w-full rounded-full"
            />
          </div>
        </div>
        <div className="mt-[30px] h-[19px] text-center text-sm font-normal leading-tight text-stone-500">
          Hình ảnh quả Phật Thủ
        </div>
      </div>
      <div className="pt-7 text-2xl font-semibold leading-9 text-lime-600">
        Quả phật thủ là quả gì?
      </div>
      <div className="flex flex-col justify-between sm:flex-row">
        <div className="w-full sm:w-3/5">
          <div className="flex-col items-center md:flex">
            <Icon name="ic_question" size={20} />
            <p className="pt-5">
              Phật thủ là quả ăn trái, có hình dạng như bàn tay Phật, tên khoa học là Citrus medica
              var. sarcodactylis và thuộc chi Cam Canh. Phật thủ có nguồn gốc từ Trung Quốc và Nhật
              bản, nó cũng được trồng phổ biến ở Việt Nam.
            </p>
          </div>
          <p className="pt-5">
            Phật thủ thuộc cây thân gỗ nhỏ, có thể phát triển đến 2 - 2.5m và cành có gai cứng, nhọn
            và ngắn. Lá có kích thước lớn, thuôn dài và màu xanh nhạt. Hoa nở 2 - 3 lần mỗi năm, màu
            trắng nhưng có màu hơi đỏ tía bên ngoài rìa cánh hoa, thường mọc thành chùm và tỏa hương
            thơm. Quả chín có màu vàng óng, các ngón tay của quả phật thủ đôi khi chứa một ít thịt
            quả có tính axit, thậm chí quả phật thủ có thể sẽ không có nước và hạt.
          </p>
          <p className="pt-5">
            Cây phật thủ phát triển tốt nhất ở những vùng có khí hậu ôn hòa, nhưng nhạy cảm với
            sương và nắng gắt cũng như thời tiết khô hạn.
          </p>
        </div>
        <div className="mt-10 h-64 w-full shrink-0 sm:mt-0 sm:w-2/5">
          <ScrollSnapBase
            contentSlide={contentSlide}
            isShowButtonHeader={true}
            initialSlice={0}
            hasIndicator
          />
        </div>
      </div>
      <div className="pt-7 text-2xl font-semibold leading-9 text-lime-600">
        Quả phật thủ có ăn được không?
      </div>
    </div>
  );
};

export default FruitInformationPage;
