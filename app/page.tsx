'use client';

import { NextPage } from 'next';

import { BlogCardProp } from '@/components/BlogCard';
import { Gardener } from '@/components/GardenerCard';
import HomePageContent from '@/components/Pages/HomePageContent';
import { Product } from '@/components/ProductCard';
import { Nature } from '@/public/images';
import { useSelector } from '@/stores/store';

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

const blogPosts: BlogCardProp[] = [
  {
    image: Nature.src,
    title: 'The Art of Gardening: A Comprehensive Guide',
    shortDescription:
      'Discover the art of gardening with this comprehensive guide, where we discuss various gardening techniques and tips for beginners and professionals alike.',
  },
  {
    image: Nature.src,
    title: 'Understanding Soil Health: A Key Factor in Gardening',
    shortDescription:
      'Soil health plays a crucial role in the success of your garden. Learn how to assess and improve the health of your soil in this informative post.',
  },
  {
    image: Nature.src,
    title: 'Indoor Gardening: Top Plants to Grow at Home',
    shortDescription:
      "Indoor gardening can be a rewarding hobby. Explore our list of top plants you can easily grow at home, even if you're a beginner!",
  },
  {
    image: Nature.src,
    title: 'Watering Guide: When and How to Water Your Plants',
    shortDescription:
      'Correct watering is essential for plant health. This guide explores when and how to water your plants for optimal growth.',
  },
  {
    image: Nature.src,
    title: 'Pruning 101: Keeping Your Plants in Shape',
    shortDescription:
      'Pruning your plants can encourage better growth and flowering. Learn the basics of pruning in this helpful blog post.',
  },
];

const Home: NextPage = () => {
  const { gardeners } = useSelector((state) => state.gardener);
  const { fruits } = useSelector((state) => state.product);

  console.log('fruits', fruits);

  return (
    <HomePageContent
      gardenersList={gardeners}
      fruitList={productsList}
      blogPosts={blogPosts}
      treeList={productsList}
    />
  );
};

export default Home;
