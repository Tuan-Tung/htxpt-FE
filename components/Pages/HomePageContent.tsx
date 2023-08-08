import Image from 'next/image';
import React, { useCallback, useState } from 'react';

import BlogCard, { BlogCardProp } from '@/components/BlogCard';
import GardenerCard, { Gardener } from '@/components/GardenerCard';
import ProductCard, { Product } from '@/components/ProductCard';
import ScrollSnapBase from '@/components/ScrollSnapBase';
import Slide from '@/components/Slide';
import { BLOG_TITLE, FRUIT_TITLE, GARDENER_TITLE, TREE_TITLE } from '@/constants/common';
import { Nature } from '@/public/images';

type HomeContentProps = {
  gardenersList: Gardener[];
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
  const [gardenerLikes, setGardenerLikes] = useState<string[]>([]);

  const handleHeartIconClicked = useCallback(
    (id: string) => {
      const isAlreadyLiked = gardenerLikes.includes(id);

      if (isAlreadyLiked) {
        setGardenerLikes(gardenerLikes.filter((gardenerId: string) => gardenerId !== id));
      } else {
        setGardenerLikes([...gardenerLikes, id]);
      }
    },
    [gardenerLikes]
  );

  return (
    <div className="space-y-8">
      <div className="flex space-x-6">
        <div className="w-3/5 shrink-0">
          <div className="w-full">
            <div className="relative h-[256px] w-full overflow-hidden rounded-lg">
              <Image width={1000} height={1000} src={Nature.src} alt="Home About"/>
            </div>
          </div>
        </div>
        <div className="h-64 w-2/5 shrink">
          <ScrollSnapBase contentSlide={contentSlide} isShowButtonHeader={true} initialSlice={0} hasIndicator/>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="truncate-ellipsis text-[36px] font-bold text-primary">{GARDENER_TITLE}</div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {gardenersList.map((gardener: Gardener, index: number) => (
            <GardenerCard
              id={gardener.id}
              onHeartIconClick={() => handleHeartIconClicked(gardener.id)}
              key={gardener.gardenerName + index}
              gardenerName={gardener.gardenerName}
              ratingStart={gardener.ratingStart}
              image={gardener.image}
              location={gardener.location}
              phoneNumber={gardener.phoneNumber}
              products={gardener.products}
              isLiked={gardenerLikes.includes(gardener.id)}
            />
          ))}
        </div>
      </div>
      <div className="flex space-x-8">
        <div className="flex w-3/5 flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <div className="truncate-ellipsis text-[36px] font-bold text-primary">{FRUIT_TITLE}</div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
              {fruitList.map((fruit: Product, index: number) => (
                <ProductCard
                  key={fruit.gardener + index}
                  gardener={fruit.gardener}
                  image={fruit.image}
                  status={fruit.status}
                  title={fruit.title}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="truncate-ellipsis text-[36px] font-bold text-primary">{TREE_TITLE}</div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
              {treeList.map((tree: Product, index: number) => (
                <ProductCard
                  key={tree.gardener + index}
                  gardener={tree.gardener}
                  image={tree.image}
                  status={tree.status}
                  title={tree.title}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <div className="sticky top-20 flex flex-col space-y-4">
            <div className="truncate-ellipsis text-[36px] font-bold text-primary">{BLOG_TITLE}</div>
            <div className="flex flex-col space-y-3">
              {blogPosts.map((blog: BlogCardProp, index: number) => (
                <BlogCard
                  key={blog.title + index}
                  image={blog.image}
                  shortDescription={blog.shortDescription}
                  title={blog.title}
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
