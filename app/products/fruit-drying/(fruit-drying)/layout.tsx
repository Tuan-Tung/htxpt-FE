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
      {children}
    </div>
  );
};

export default ProductLayout;
