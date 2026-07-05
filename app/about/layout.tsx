'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

import Button from '@/components/Button';
import { ABOUT_BUTTON_CONTENT } from '@/constants/common';
import { AboutCategories } from '@/types';

const AboutLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = (code: string) => {
    router.push(`/about/${code.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen min-w-full">
      <div className="custom-scrollbar mb-[30px] flex w-full gap-2 overflow-x-auto pb-1">
        {ABOUT_BUTTON_CONTENT.map((item: AboutCategories) => (
          <div key={item.code.toString()} className="min-w-[72px] flex-1 md:min-w-[186px]">
            <Button
              size="md"
              variant="image"
              image={item.image}
              borderRadius="normal"
              fullWidth
              isActive={pathname.includes(item.code.toString().toLocaleLowerCase())}
              onClick={() => handleButtonClick(item.code.toString())}
              className="items-center justify-center"
            >
              <span>{item.label}</span>
            </Button>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default AboutLayout;