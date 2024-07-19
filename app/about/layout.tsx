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
      <div className="custom-scrollbar mb-[30px] flex w-full space-x-[5px] overflow-y-scroll">
        {ABOUT_BUTTON_CONTENT.map((item: AboutCategories) => (
          <div className="flex min-w-[50px] flex-1 gap-2 md:min-w-[186px]">
            <Button
              size="md"
              variant="image"
              image={item.image}
              borderRadius="normal"
              fullWidth
              isActive={pathname.includes(item.code.toString().toLocaleLowerCase())}
              onClick={() => handleButtonClick(item.code.toString())}
              className="flex items-center justify-center"
            >
              <span className="hidden md:inline">{item.label}</span> {/* Label chỉ hiển thị trên màn hình lớn */}
            </Button>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default AboutLayout;