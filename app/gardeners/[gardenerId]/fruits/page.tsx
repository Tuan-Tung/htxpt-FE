'use client';

import { NextPage } from 'next';
import React from 'react';

import { Product } from '@/components/ProductCard';
import { Nature } from '@/public/images';

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

const GardenerListFruits: NextPage = (): React.ReactElement => {
  return (
    <div>

    </div>
  );
};

export default GardenerListFruits;
