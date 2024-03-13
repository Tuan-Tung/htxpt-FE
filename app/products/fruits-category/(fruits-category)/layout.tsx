'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { PropsWithChildren, useState } from 'react';

import Button from '@/components/Button';

const ProductLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const [, setActiveTab] = useState('fruits'); 

  const handleButtonClick = (code: string) => {
    setActiveTab(code);
    router.push(`/products/${code}`);
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
            isActive={pathname.includes('fruits')}
            onClick={() => handleButtonClick('fruits')}
          >
            Quả
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
            isActive={pathname.includes('trees')}
            onClick={() => handleButtonClick('trees')}
          >
            Cây
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProductLayout;
