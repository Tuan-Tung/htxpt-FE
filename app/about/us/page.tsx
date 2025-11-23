import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import {
  CEO_NAME,
  CORE_VALUE_CONTENT_TEXT,
  CORE_VALUE_TITLE_TEXT,
  CoreValueItem,
  MISSION_CONTENT_TEXT,
  MISSION_TITLE_TEXT,
  ROLE_NAME,
  VISION_CONTENT_TEXT,
  VISION_TITLE_TEXT
} from '@/constants/about';
import { CEOAvatar1 } from '@/public/images';
import { CoreValueContentItem } from '@/types';

const AboutUsPageContent: NextPage = (): React.ReactElement => {
  return (
    <div className="flex flex-col space-y-7 rounded-lg bg-white p-4 md:p-12">
      <div className="flex flex-col space-y-12 md:flex-row md:space-x-16 md:space-y-0">
        <div className="flex flex-col space-y-12 md:max-w-[70%]">
          <div className="flex flex-col items-start space-y-7">
            <div className="text-primary decoration-light_grey border-b-[3px] border-gray-300 text-[24px] font-bold md:text-[36px]">
              {VISION_TITLE_TEXT}
            </div>
            <div className="font-body text-lg">{VISION_CONTENT_TEXT}</div>
          </div>
          <div className="flex flex-col items-start space-y-7 text-left md:items-end md:text-right">
            <div className="text-primary decoration-light_grey border-b-[3px] border-gray-300 text-[24px] font-bold md:text-[36px]">
              {MISSION_TITLE_TEXT}
            </div>
            <div className="font-body text-lg">{MISSION_CONTENT_TEXT}</div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[350px] justify-center md:mx-0">
          <div className="flex flex-col space-y-2">
            <div className="flex items-end justify-center">
              <div className="w-30 h-42 relative z-10 mr-[20px] rounded-lg">
                <Image width={122} height={169} src={CEOAvatar1.src} alt="avatar" />
              </div>
              <div className="bg-primary ml-[-120px] flex h-[132px] w-full flex-col items-end rounded-lg p-3 text-white shadow-md">
                <div className="font-bold">
                   {CEO_NAME}
                </div>
                <div className="font-body text-lg">{ROLE_NAME}</div>
              </div>
            </div>
            <div className="text-center text-[14px] font-light md:text-left md:text-[18px]">
              <span className="text-primary font-semibold">“ Đoàn kết</span> là sức mạnh. Hướng tới xây dựng
              <span className="text-primary font-semibold"> sản phẩm làng nghề”</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-7 pb-5">
        <div className="text-primary decoration-light_grey w-fit border-b-[3px] border-gray-300 text-[24px] font-bold md:text-[36px]">
          {CORE_VALUE_TITLE_TEXT}
        </div>
        <div>
          <div className='md:max-w-[70%] text-lg'>{CORE_VALUE_CONTENT_TEXT}</div>
          <div className="mt-3 flex flex-wrap justify-center md:justify-between">
            {CoreValueItem.map((item: CoreValueContentItem) => (
              <div
                key={item.content}
                className="relative mx-2 my-2.5 flex grow flex-col items-center space-y-1 md:max-w-[237px]"
              >
                <div className="relative h-[50px] w-full md:h-[100px]">
                  <Image src={item.image} layout="fill" objectFit="contain" alt="Core Value" />
                </div>
                <div className="text-primary font-semibold">{item.title}</div>
                <div className="font-body text-center text-lg">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageContent;
