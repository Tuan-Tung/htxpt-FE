'use client';

import { NextPage } from 'next';
import { useEffect } from 'react';

import { Gardener } from '@/components/GardenerCard';
import { useBlog } from '@/components/hooks/blog';
import { useBonsai } from '@/components/hooks/bonsai';
import { useFruitCategory } from '@/components/hooks/fruit';
import { useGardener } from '@/components/hooks/gardener';
import HomePageContent from '@/components/Pages/HomePageContent';
import { Nature } from '@/public/images';
// import { useSelector } from '@/stores/store';

export const gardenersList: Gardener[] = [
  {
    id: 'John Doe-(123) 456-7890',
    image: Nature.src,
    gardenerName: 'John Doe',
    ratingStart: 4,
    location: 'New York',
    phoneNumber: '(123) 456-7890',
    products: ['Roses', 'Tulips', 'Daisies'],
    isLiked: false,
  },
  {
    id: 'Jane Smith-(098) 765-4321',
    image: Nature.src,
    gardenerName: 'Jane Smith',
    ratingStart: 5,
    location: 'Los Angeles',
    phoneNumber: '(098) 765-4321',
    products: ['Orchids', 'Lilies', 'Sunflowers'],
    isLiked: true,
  },
  {
    id: 'Alice Johnson-(111) 222-333',
    image: Nature.src,
    gardenerName: 'Alice Johnson',
    ratingStart: 3,
    location: 'Chicago',
    phoneNumber: '(111) 222-3333',
    products: ['Cacti', 'Succulents', 'Bamboo'],
    isLiked: false,
  },
  {
    id: 'Jane Smith-(098) 765-432',
    image: Nature.src,
    gardenerName: 'Jane Smith',
    ratingStart: 5,
    location: 'Los Angeles',
    phoneNumber: '(098) 765-4321',
    products: ['Orchids', 'Lilies', 'Sunflowers'],
    isLiked: true,
  },
  {
    id: 'Jane Smith-(098) 765-432',
    image: Nature.src,
    gardenerName: 'Jane Smith',
    ratingStart: 5,
    location: 'Los Angeles',
    phoneNumber: '(098) 765-4321',
    products: ['Orchids', 'Lilies', 'Sunflowers'],
    isLiked: true,
  },
];

const Home: NextPage = () => {
  // const { gardeners } = useSelector((state) => state.gardener);
  // const { fruits } = useSelector((state) => state.product);
  // console.log('fruits', fruits);
  const { data, onGetGarden } = useGardener({limit: 5});
  const { data: dataFruitCategory, onGetFruitCategory } = useFruitCategory();
  const { data: dataBonsai,onGetBonsai } = useBonsai({});
  const { data: dataBlog, onGetBlog } = useBlog({});


  useEffect(() => {
    onGetGarden;
    onGetFruitCategory;
    onGetBonsai;
    onGetBlog;
  }, [onGetGarden, onGetFruitCategory,onGetBonsai,onGetBlog])

  return (
    <HomePageContent
      gardenersList={data}
      fruitList={dataFruitCategory}
      blogPosts={dataBlog}
      treeList={dataBonsai}
    />
  );
};

export default Home;
