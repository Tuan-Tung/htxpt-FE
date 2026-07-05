'use client';

import _ from 'lodash';
import { NextPage } from 'next';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

import { useFruitDetail } from '@/components/hooks/fruit';
import ProductGallery from '@/components/ProductGallery';
import { Skeleton } from '@/components/ui/Skeleton';
import { DemoFruit } from '@/public/images';

const DetailFruitSkeleton = () => (
  <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
    <Skeleton className="h-72 w-full rounded-2xl bg-gray-200 sm:h-96 lg:h-[520px]" />
    <div className="w-full space-y-3">
      <Skeleton className="h-6 w-24 rounded-full bg-gray-200" />
      <Skeleton className="h-8 w-2/3 bg-gray-200" />
      <Skeleton className="h-24 w-full bg-gray-200" />
      <Skeleton className="h-4 w-full bg-gray-200" />
      <Skeleton className="h-4 w-1/2 bg-gray-200" />
    </div>
  </div>
);

const rangeText = (value: any, unit: string) =>
  !_.isEmpty(value) ? `${value[0]} - ${value[1]} ${unit}` : `-- ${unit}`;

const DetailFruitCategoriesPage: NextPage = (): React.ReactElement => {
  const params = useParams();

  const { data, onGetFruitById } = useFruitDetail(params['fruitsId'] as string);

  useEffect(() => {
    onGetFruitById;
  }, [onGetFruitById]);

  if (onGetFruitById.isLoading) {
    return <DetailFruitSkeleton />;
  }

  if (!data || _.isEmpty(data)) {
    return <div className="p-8 text-center text-lg text-dark_grey">Không tìm thấy sản phẩm</div>;
  }

  const images: string[] = !_.isEmpty(data?.fruit_images)
    ? data.fruit_images.map((img: any) => (typeof img === 'string' ? img : img?.url)).filter(Boolean)
    : [DemoFruit.src];

  return (
    <div className="rounded-lg bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        {/* Left: image gallery */}
        <ProductGallery images={images} alt={data?.fruit_name || 'Phật thủ'} />

        {/* Right: content */}
        <div className="flex flex-col gap-5">
          <span className="w-fit rounded-full bg-primary_light px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            Phật thủ
          </span>
          <h1 className="text-2xl font-extrabold text-primary_green md:text-4xl">
            {data?.fruit_name || 'Phật thủ'}
          </h1>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-4 text-center shadow-card">
              <div className="text-xs uppercase tracking-wide text-dark_grey/60">Đường kính</div>
              <div className="mt-1 font-bold text-primary_green">{rangeText(data?.dimeter, 'cm')}</div>
            </div>
            <div className="rounded-xl bg-white p-4 text-center shadow-card">
              <div className="text-xs uppercase tracking-wide text-dark_grey/60">Trọng lượng</div>
              <div className="mt-1 font-bold text-primary_green">{rangeText(data?.weight, 'g')}</div>
            </div>
            <div className="rounded-xl bg-white p-4 text-center shadow-card">
              <div className="text-xs uppercase tracking-wide text-dark_grey/60">Còn lại</div>
              <div className="mt-1 font-bold text-primary_green">{data?.quantity ?? 0} quả</div>
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-primary_green">Hình dáng</h2>
            <p className="leading-relaxed text-dark_grey">
              {!_.isEmpty(data?.shape) ? data.shape.toString() : 'Chưa có mô tả'}
            </p>
          </div>

          {data?.description && (
            <div>
              <h2 className="mb-2 text-lg font-bold text-primary_green">Mô tả</h2>
              <p className="leading-relaxed text-dark_grey">{data.description}</p>
            </div>
          )}

          {data?.usage && (
            <div>
              <h2 className="mb-2 text-lg font-bold text-primary_green">Công dụng</h2>
              <p className="leading-relaxed text-dark_grey">{data.usage}</p>
            </div>
          )}

          {data?.shelf_life && (
            <div>
              <h2 className="mb-2 text-lg font-bold text-primary_green">Thời gian sử dụng</h2>
              <p className="leading-relaxed text-dark_grey">{data.shelf_life}</p>
            </div>
          )}

          {data?.phone && (
            <div className="rounded-2xl bg-primary_light/60 p-5">
              <h2 className="mb-1 text-base font-bold text-primary_green">Liên hệ nhà vườn</h2>
              <p className="text-dark_grey">{data.phone}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailFruitCategoriesPage;
