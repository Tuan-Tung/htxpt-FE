'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { PropsWithChildren, useState } from 'react';

import Button from '@/components/Button';
import GardenerDetailCard from '@/components/GardenerDetailCard';
import { Product } from '@/components/ProductCard';
import { CEOAvatar, Nature } from '@/public/images';


const mockGardenerData = {
  gardenerId: '12345',
  avatarImage: CEOAvatar.src,
  backgroundImage: Nature.src,
  gardenerName: 'John Doe',
  products: ['Oranges', 'Apples', 'Grapes'],
  fruitsQuantity: 120,
  ratingAverage: 4.5,
  treesQuantity: 5,
  responseRate: 98,
  ratingQuantity: 75,
  joinedAt: new Date('2020-01-15'),
};

export const productsList: Product[] = [
  {
    image: Nature.src,
    title: 'Beautiful Roses',
    gardener: 'John Doe',
    status: 'AVAILABLE',
  },
  {
    image: Nature.src,
    title: 'Tulips Bouquet',
    gardener: 'Jane Smith',
    status: 'OUT_OF_STOCK',
  },
  {
    image: Nature.src,
    title: 'Daisies Bundle',
    gardener: 'Alice Johnson',
    status: 'COMING_SOON',
  },
  {
    image: Nature.src,
    title: 'Orchids Collection',
    gardener: 'Robert Brown',
    status: 'AVAILABLE',
  },
];

const GardenerLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams()
  const [, setActiveTab] = useState('fruits');

  const handleButtonClick = (code: string) => {
    setActiveTab(code);
    router.push(`/gardeners/${params.gardenerId}/${code}`);
  };

  return (
    <div>
      <GardenerDetailCard {...mockGardenerData} />
      <div className="mt-[42px]">
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
                Cây bonsai
              </Button>
            </div>
          </div>
          {children}
        </div>
        {children}
      </div>
    </div>
  );
};

export default GardenerLayout;
