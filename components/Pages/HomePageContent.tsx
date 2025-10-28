import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

import BlogCard, { BlogCardProp } from '@/components/BlogCard';
import GardenerCard from '@/components/GardenerCard';
import ProductCard from '@/components/ProductCard';
import ScrollSnapBase from '@/components/ScrollSnapBase';
import Slide from '@/components/Slide';
import { BLOG_TITLE, FRUIT_TITLE, GARDENER_TITLE, TREE_TITLE } from '@/constants/common';
import { Banner1, Banner2, Banner3, Banner4, FruitAbout, FruitDryingAbout } from '@/public/images';

import { Blog, Bonsai, Fruit, Gardener } from '@/types/mock';

type HomeContentProps = {
  gardenersList: Gardener[];
  fruitList: Fruit[];
  blogPosts: BlogCardProp[];
  treeList: Bonsai[];
};

const contentSlide = [
  {
    id: 1,
    content: <Slide img={Banner1} />,
  },
  {
    id: 2,
    content: <Slide img={Banner2} />,
  },
  {
    id: 3,
    content: <Slide img={Banner4} />,
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
  const handelFruitDryingClick = useCallback(() => {
    route.push(`/products/fruit-drying`);
  }, [route]);
  const handelTreeCardClick = useCallback(
    (id: string | undefined) => {
      route.push(`/products/trees/${id}`);
    },
    [route]
  );
  // const handelBlogCardClick = useCallback(
  //   (id: string | undefined) => {
  //     route.push(`/blog/${id}`);
  //   },
  //   [route]
  // );

  return (
    <div className="space-y-8">
      <div className="flex lg:space-x-6">
        <div className="hidden w-3/5  shrink-0 lg:block">
          <div className="w-full">
            <div className="relative h-[256px] w-full overflow-hidden rounded-lg">
              <Image
                width={1000}
                height={1000}
                src={Banner3.src}
                alt="Home About"
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="h-64 w-full shrink lg:w-2/5 !m-0 md:pl-[2rem]">
          <ScrollSnapBase
            contentSlide={contentSlide}
            isShowButtonHeader={true}
            initialSlice={0}
            hasIndicator
          />
        </div>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="w-full md:w-1/2 flex items-center">
          <div>
            <h3 className="truncate-ellipsis text-primary text-[24px] font-bold md:text-[36px]">
              Sản Phẩm Tiêu Biểu
            </h3>
            <p className="font-semibold lg:text-xl">Phật thủ sấy khô</p>
            <p className="py-4 pr-12 lg:text-lg">
              Quả phật thủ sấy, hay còn gọi là Phật thủ khô, là một sản phẩm chế biến từ quả phật
              thủ tươi. Phật thủ, một loại trái cây thuộc họ cam quýt, có hình dáng độc đáo giống
              như những ngón tay Phật, được sử dụng phổ biến trong ẩm thực và y học cổ truyền. Phật
              thủ tươi chứa nhiều tinh dầu và có hương thơm đặc trưng, thường được sử dụng để làm
              gia vị, trang trí hoặc trong các món tráng miệng.
            </p>
            <button
              className="bg-[#699C3A] text-white hover:bg-white hover:text-[#699C3A] border border-[#699C3A] px-4 py-2 mb-4"
              onClick={handelFruitDryingClick}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            width={500}
            height={500}
            src={FruitDryingAbout.src}
            alt="Home About"
            className="h-full object-cover drop-shadow-2xl"
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
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {gardenersList.slice(0, 5).map((gardener: Gardener, index: number) => (
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
            <div className="grid gap-3 grid-cols-2 lg:grid-cols-3">
              {fruitList.slice(0, 3).map((fruit: Fruit, index: number) => (
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
            <div className="truncate-ellipsis text-primary text-[24px] font-bold md:text-[36px]">
              {TREE_TITLE}
            </div>
            <div className="grid grid-cols-2 gap-4 2xl:grid-cols-3">
              {treeList.slice(0, 3).map((tree: Bonsai, index: number) => (
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
            <div className="truncate-ellipsis text-primary text-[24px] font-bold md:text-[36px]">
              {BLOG_TITLE}
            </div>
            <div className="flex flex-col space-y-3 max-h-[calc(4*theme('spacing.64')+3*theme('spacing.3'))] overflow-y-auto pr-2">
              {blogPosts.map((blog: Blog, index: number) => (
                <Link href={blog?.link || "#"} target="_blank" rel="noopener noreferrer">
                <BlogCard
                  key={blog.title + index}
                  image={FruitAbout.src}
                  short_description={blog.short_description}
                  title={blog.title}
                  // onClick={() => handelBlogCardClick(blog?._id)}
                />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
