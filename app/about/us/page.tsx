import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import {
  CEO_NAME,
  CORE_VALUE_CONTENT_TEXT,
  CORE_VALUE_TITLE_TEXT,
  CoreValueItem,
  GENDER,
  MISSION_CONTENT_TEXT,
  MISSION_TITLE_TEXT,
  ROLE_NAME,
  VISION_CONTENT_TEXT,
  VISION_TITLE_TEXT,
} from '@/constants/about';
import { CEOAvatar } from '@/public/images';
import { CoreValueContentItem } from '@/types';

const AboutUsPageContent:NextPage = (): React.ReactElement => {
  return (
    <div className="flex flex-col space-y-7 rounded-lg bg-white p-12">
      <div className="flex space-x-16">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col items-start space-y-7">
            <div className="border-b-[3px] border-gray-300 text-[36px]  font-bold text-primary decoration-light_grey">
              {VISION_TITLE_TEXT}
            </div>
            <div className="font-body">{VISION_CONTENT_TEXT}</div>
          </div>
          <div className="flex flex-col items-end space-y-7 text-right">
            <div className="border-b-[3px] border-gray-300 text-[36px] font-bold text-primary decoration-light_grey">
              {MISSION_TITLE_TEXT}
            </div>
            <div className="font-body">{MISSION_CONTENT_TEXT}</div>
          </div>
        </div>
        <div className="max-w-[281px]">
          <div className="flex flex-col space-y-2">
            <div className="flex items-end justify-center">
              <div className="w-30 h-42 relative z-10 rounded-lg">
                <Image width={122} height={169} src={CEOAvatar.src} alt="avatar" />
              </div>
              <div className="ml-[-120px] flex h-[132px] w-full flex-col items-end rounded-lg bg-primary p-3 text-white shadow-md">
                <div className="font-bold">
                  {GENDER} {CEO_NAME}
                </div>
                <div className="font-body">{ROLE_NAME}</div>
              </div>
            </div>
            <div className="text-[18px] font-light">
              <span className="font-semibold text-primary">“ Đoàn kết</span> là sức mạnh… khi có sự
              <span className="font-semibold text-primary"> chung sức</span> và{' '}
              <span className="font-semibold text-primary">hợp tác</span>, ta có thể đạt được những
              điều <span className="font-semibold text-primary">tuyệt vời. ”</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-7 pb-5">
        <div className="w-fit border-b-[3px] border-gray-300 text-[36px] font-bold text-primary decoration-light_grey">
          {CORE_VALUE_TITLE_TEXT}
        </div>
        <div>
          <div>{CORE_VALUE_CONTENT_TEXT}</div>
          <div className="mt-3 flex flex-wrap justify-between">
            {CoreValueItem.map((item: CoreValueContentItem) => (
              <div
                key={item.content}
                className="relative mx-2 my-2.5 flex max-w-[237px] grow flex-col items-center space-y-1"
              >
                <div className="relative h-[100px] w-full">
                  <Image src={item.image} layout="fill" objectFit="contain" alt="Core Value" />
                </div>
                <div className="font-semibold text-primary">{item.title}</div>
                <div className="font-body text-center">{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageContent;
