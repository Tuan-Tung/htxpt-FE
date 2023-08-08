'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { PropsWithChildren, useState } from 'react';

import Button from '@/components/Button';

const GardenerLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const [, setActiveTab] = useState('all');

  const handleButtonClick = (code: string) => {
    setActiveTab(code);
    router.push(`/gardeners/${code}`);
  };
  
  return (
    <div className="min-h-screen min-w-full">
      <div className="mb-[30px] inline-flex space-x-[5px]">
        <div className="min-w-[120px] flex-1">
          <Button
            size="lg"
            fullWidth
            variant="text"
            className="overflow-hidden bg-white"
            shadow
            borderRadius="normal"
            isActive={pathname.includes('all')}
            onClick={() => handleButtonClick('all')}
          >
            Nhà vườn
          </Button>
        </div>
        <div className="min-w-[120px] flex-1">
          <Button
            size="lg"
            fullWidth
            variant="text"
            shadow
            className="bg-white"
            borderRadius="normal"
            isActive={pathname.includes('favorite')}
            onClick={() => handleButtonClick('favorite')}
          >
            Yêu thích
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default GardenerLayout;
