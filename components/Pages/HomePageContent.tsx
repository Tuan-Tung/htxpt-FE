import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import BlogCard, { BlogCardProp } from '@/components/BlogCard';
import GardenerCard from '@/components/GardenerCard';
import ProductCard, { Product } from '@/components/ProductCard';
import ScrollSnapBase from '@/components/ScrollSnapBase';
import Slide from '@/components/Slide';
import { BLOG_TITLE, FRUIT_TITLE, GARDENER_TITLE, TREE_TITLE } from '@/constants/common';
import { Nature } from '@/public/images';
import { TGardener } from '@/types';

type HomeContentProps = {
  gardenersList: TGardener[];
  fruitList: Product[];
  blogPosts: BlogCardProp[];
  treeList: Product[];
};

const contentSlide = [
  {
    id: 1,
    content: <Slide />,
  },
  {
    id: 2,
    content: <Slide />,
  },
  {
    id: 3,
    content: <Slide />,
  },
];

const HomePageContent = ({
  gardenersList,
  fruitList,
  blogPosts,
  treeList,
}: HomeContentProps): React.ReactElement => {
  const route = useRouter();
  const handelGardenerCardClick = useCallback(
    (id: string) => {
      route.push(`/gardeners/${id}/fruits`);
    },
    [route]
  );
  const handelFruitCardClick = useCallback(
    (id: string | undefined) => {
      route.push(`/products/fruits-category/${id}`);
    },
    [route]
  );
  const handelTreeCardClick = useCallback(
    (id: string | undefined) => {
      route.push(`/products/trees/${id}`);
    },
    [route]
  );
  const handelBlogCardClick = useCallback(
    (id: string | undefined) => {
      route.push(`/blog/${id}`);
    },
    [route]
  );

  return (
    <div className="space-y-8">
      <div className="flex lg:space-x-6">
        <div className="hidden w-3/5  shrink-0 lg:block">
          <div className="w-full">
            <div className="relative h-[256px] w-full overflow-hidden rounded-lg">
              <Image width={1000} height={1000} src={Nature.src} alt="Home About" />
            </div>
          </div>
        </div>
        <div className="h-64 w-full shrink lg:w-2/5">
          <ScrollSnapBase
            contentSlide={contentSlide}
            isShowButtonHeader={true}
            initialSlice={0}
            hasIndicator
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="truncate-ellipsis text-primary text-[24px] font-bold md:text-[36px]">
            {GARDENER_TITLE}
          </div>
          <div className="text-primary">
            <Link href={'/gardeners/all'}>xem thêm</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {gardenersList.map((gardener: TGardener, index: number) => (
            <GardenerCard
              _id={gardener._id}
              // onHeartIconClick={() => handleHeartIconClicked(gardener.id)}
              key={gardener.first_name + index}
              first_name={gardener.first_name}
              last_name={gardener.last_name}
              rating_avg={gardener.rating_avg}
              image={gardener.image}
              location={gardener.location}
              phone={gardener.phone}
              product_category={gardener.product_category}
              onClick={() => handelGardenerCardClick(gardener._id)}
              // isLiked={gardenerLikes.includes(gardener._id)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap xl:space-x-8">
        <div className="flex w-full flex-col space-y-8 lg:w-3/5">
          <div className="flex flex-col space-y-4">
            <div className="truncate-ellipsis text-primary text-[24px] font-bold md:text-[36px]">
              {FRUIT_TITLE}
            </div>
            <div className="flex flex-col gap-3 md:grid md:grid-cols-2 2xl:grid-cols-3">
              {fruitList.map((fruit: Product, index: number) => (
                <ProductCard
                  key={fruit.category_name || 0 + index}
                  isFruit
                  name={fruit?.category_name}
                  image={fruit.image}
                  range_price={fruit.range_price}
                  shape={fruit.shape}
                  dimeter={fruit.dimeter}
                  weight={fruit.weight}
                  onClick={() => handelFruitCardClick(fruit?._id)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="truncate-ellipsis text-primary text-[24px] font-bold md:text-[36px]">{TREE_TITLE}</div>
            <div className="grid grid-cols-2 gap-4 2xl:grid-cols-3">
              {treeList.map((tree: Product, index: number) => (
                <ProductCard
                  key={tree.tree_name || 0 + index}
                  name={tree.tree_name}
                  image={tree.image}
                  quantity={tree.quantity}
                  description={tree.description}
                  onClick={() => handelTreeCardClick(tree?._id)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <div className="sticky top-20 flex flex-col space-y-4">
            <div className="truncate-ellipsis text-primary text-[24px] font-bold md:text-[36px]">{BLOG_TITLE}</div>
            <div className="flex flex-col space-y-3">
              {blogPosts.map((blog: BlogCardProp, index: number) => (
                <BlogCard
                  key={blog.title + index}
                  image={Nature.src}
                  short_description={blog.short_description}
                  title={blog.title}
                  onClick={() => handelBlogCardClick(blog?._id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
