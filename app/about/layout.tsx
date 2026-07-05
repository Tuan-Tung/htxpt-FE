'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tab';
import { ABOUT_BUTTON_CONTENT } from '@/constants/common';
import { AboutCategories } from '@/types';

const AboutLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();

  const activeItem = ABOUT_BUTTON_CONTENT.find((item) =>
    pathname.includes(item.code.toString().toLowerCase())
  );

  return (
    <div className="min-w-full">
      <Tabs
        value={activeItem?.code.toString() ?? ABOUT_BUTTON_CONTENT[0].code.toString()}
        onValueChange={(code) => router.push(`/about/${code.toLowerCase()}`)}
      >
        <TabsList className="custom-scrollbar mb-[30px] h-auto w-full justify-start gap-1 overflow-x-auto rounded-full bg-primary_light/60 p-1.5">
          {ABOUT_BUTTON_CONTENT.map((item: AboutCategories) => (
            <TabsTrigger
              key={item.code.toString()}
              value={item.code.toString()}
              className="group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-dark_grey data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-soft"
            >
              <Image
                src={item.image}
                alt=""
                width={22}
                height={22}
                className="opacity-60 group-data-[state=active]:opacity-100"
              />
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      {children}
    </div>
  );
};

export default AboutLayout;
