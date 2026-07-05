import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { lazy, Suspense, useCallback } from 'react';

import { BLOG_TITLE, FRUIT_TITLE, GARDENER_TITLE, TREE_TITLE } from '@/constants/common';
import Slide from '@/components/Slide';
import { BlogCardProp } from '@/components/BlogCard';
import { Blog, Bonsai, Fruit, Gardener } from '@/types/mock';
import Image from 'next/image';
import ScrollSnapBase from '@/components/ScrollSnapBase';
import { Banner1, Banner2, Banner3, Banner4, FruitAbout, FruitDryingAbout } from '@/public/images';
import { BlogCardSkeleton, GardenerCardSkeleton, ProductCardSkeleton } from '@/components/CardSkeletons';

const BlogCard = lazy(() => import('@/components/BlogCard'));
const GardenerCard = lazy(() => import('@/components/GardenerCard'));
const ProductCard = lazy(() => import('@/components/ProductCard'));

const skeletonList = (count: number, Skeleton: () => React.ReactElement) =>
  Array.from({ length: count }).map((_, index) => <Skeleton key={index} />);

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

type HomeContentProps = {
  gardenersList: Gardener[];
  fruitList: Fruit[];
  blogPosts: BlogCardProp[];
  treeList: Bonsai[];
};


const HomePageContent = ({
  gardenersList,
  fruitList,
  blogPosts,
  treeList,
}: HomeContentProps): React.ReactElement => {
  const route = useRouter();
  const handelGardenerCardClick = useCallback(
    (id: string) => route.push(`/gardeners/${id}/fruits`),
    [route]
  );
  const handelFruitCardClick = useCallback(
    (id: string | undefined) => route.push(`/products/fruits-category/${id}`),
    [route]
  );
  const handelFruitDryingClick = useCallback(() => route.push(`/products/fruit-drying`), [route]);
  const handelTreeCardClick = useCallback(
    (id: string | undefined) => route.push(`/products/trees/${id}`),
    [route]
  );

  return (
    <div className="space-y-14">
      <div className="flex lg:space-x-6">
        <div className="hidden w-3/5  shrink-0 lg:block">
          <div className="w-full">
            <div className="relative h-[256px] w-full overflow-hidden rounded-2xl shadow-card">
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
        <div className="h-64 w-full shrink overflow-hidden rounded-2xl shadow-card lg:w-2/5 !m-0 md:pl-[2rem]">
          <ScrollSnapBase
            contentSlide={contentSlide}
            isShowButtonHeader={true}
            initialSlice={0}
            hasIndicator
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-card md:p-10">
        <div className="w-full md:w-1/2 flex items-center">
          <div>
            <span className="inline-block rounded-full bg-primary_light px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
              Sản phẩm tiêu biểu
            </span>
            <h3 className="truncate-ellipsis mt-3 text-[24px] font-extrabold text-black md:text-[36px]">
              Phật thủ sấy khô
            </h3>
            <p className="py-4 pr-12 leading-relaxed text-dark_grey lg:text-lg">
              Quả phật thủ sấy, hay còn gọi là Phật thủ khô, là một sản phẩm chế biến từ quả phật
              thủ tươi. Phật thủ, một loại trái cây thuộc họ cam quýt, có hình dáng độc đáo giống
              như những ngón tay Phật, được sử dụng phổ biến trong ẩm thực và y học cổ truyền. Phật
              thủ tươi chứa nhiều tinh dầu và có hương thơm đặc trưng, thường được sử dụng để làm
              gia vị, trang trí hoặc trong các món tráng miệng.
            </p>
            <button
              className="rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary_dark hover:shadow-card-hover"
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

      <div className="flex flex-col space-y-5">
        <div className="flex items-center justify-between">
          <div className="relative pl-4 text-[24px] font-extrabold text-black md:text-[32px] before:absolute before:left-0 before:top-[6px] before:h-[70%] before:w-1.5 before:rounded-full before:bg-primary">
            {GARDENER_TITLE}
          </div>
          <Link
            href="/gardeners/all"
            className="flex items-center gap-1 rounded-full border border-primary px-4 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Xem thêm <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Suspense fallback={<>{skeletonList(5, GardenerCardSkeleton)}</>}>
            {gardenersList.slice(0, 5).map((gardener: Gardener, index: number) => (
              <GardenerCard
                key={gardener.first_name + index}
                _id={gardener._id}
                first_name={gardener.first_name}
                last_name={gardener.last_name}
                rating_avg={gardener.rating_avg}
                image={gardener.image}
                location={gardener.location}
                phone={gardener.phone}
                product_category={gardener.product_category}
                onClick={() => handelGardenerCardClick(gardener._id)}
              />
            ))}
          </Suspense>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap xl:space-x-8">
        <div className="flex w-full flex-col space-y-8 lg:w-3/5">
          <div className="flex flex-col space-y-4">
            <div className="relative pl-4 text-[24px] font-extrabold text-black md:text-[32px] before:absolute before:left-0 before:top-[6px] before:h-[70%] before:w-1.5 before:rounded-full before:bg-primary">
              {FRUIT_TITLE}
            </div>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
              <Suspense fallback={<>{skeletonList(3, ProductCardSkeleton)}</>}>
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
              </Suspense>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="relative pl-4 text-[24px] font-extrabold text-black md:text-[32px] before:absolute before:left-0 before:top-[6px] before:h-[70%] before:w-1.5 before:rounded-full before:bg-primary">
              {TREE_TITLE}
            </div>
            <div className="grid grid-cols-2 gap-4 2xl:grid-cols-3">
              <Suspense fallback={<>{skeletonList(3, ProductCardSkeleton)}</>}>
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
              </Suspense>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <div className="sticky top-20 flex flex-col space-y-4">
            <div className="relative pl-4 text-[24px] font-extrabold text-black md:text-[32px] before:absolute before:left-0 before:top-[6px] before:h-[70%] before:w-1.5 before:rounded-full before:bg-primary">
              {BLOG_TITLE}
            </div>
            <div className="flex flex-col space-y-3 max-h-[calc(4*theme('spacing.64')+3*theme('spacing.3'))] overflow-y-auto pr-2">
              <Suspense fallback={<>{skeletonList(3, BlogCardSkeleton)}</>}>
                {blogPosts.map((blog: Blog, index: number) => (
                  <Link
                    key={blog.key + index}
                    href={blog?.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BlogCard
                      image={blog.image || FruitAbout.src}
                      short_description={blog.short_description}
                      title={blog.title}
                      key={''}
                    />
                  </Link>
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
