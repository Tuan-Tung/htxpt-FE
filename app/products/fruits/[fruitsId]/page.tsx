'use client';

import { NextPage } from 'next';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

import DetailProductCard from '@/components/DetailProduct/DetailProductCard';
import { useFruitDetail } from '@/components/hooks/fruit';
import { Skeleton } from '@/components/ui/Skeleton';
import _ from 'lodash';

const DetailFruitSkeleton = () => (
  <div className="flex flex-col gap-6 md:flex-row">
    <Skeleton className="h-72 w-full rounded-lg bg-gray-200 md:w-1/2" />
    <div className="w-full space-y-3 md:w-1/2">
      <Skeleton className="h-8 w-2/3 bg-gray-200" />
      <Skeleton className="h-4 w-full bg-gray-200" />
      <Skeleton className="h-4 w-full bg-gray-200" />
      <Skeleton className="h-4 w-1/2 bg-gray-200" />
    </div>
  </div>
);

const DetailFruitCategoriesPage: NextPage = (): React.ReactElement => {
  const params = useParams()

  const { data, onGetFruitById } = useFruitDetail(params['fruitsId'] as string)

  useEffect(() => {
    onGetFruitById;
  }, [onGetFruitById])

  if (onGetFruitById.isLoading) {
    return <DetailFruitSkeleton />;
  }

  const DetailProduct = () => {

    return (
      <div>
        <div className=" mt-5 text-lg font-semibold leading-normal text-black">Chi tiết</div>
        <div className='flex w-full'>
          <div className="inline-flex flex-col items-start justify-start gap-[5px] pr-5">
            <div className=" text-lg font-normal leading-normal text-black">Đường kính:</div>
            <div className=" text-lg font-normal leading-normal text-black">Trọng lượng:</div>
            <div className=" text-lg font-normal leading-normal text-black">Hình dáng:</div>
          </div>
          <div className="inline-flex flex-col items-start justify-center gap-[5px]">
            <div className=" text-lg font-normal leading-normal text-black"> {!_.isEmpty(data?.dimeter) ? `${data?.dimeter[0]} - ${data?.dimeter[1]}` : 0} {`(cm)`}</div>
            <div className=" text-lg font-normal leading-normal text-black">{!_.isEmpty(data?.weight) ? `${data?.weight[0]} - ${data?.weight[1]}` : 0} {`(g)`}</div>
            <div className=" text-lg font-normal leading-normal text-black">{!_.isEmpty(data?.weight) ? data?.shape.toString(): 'không'}</div>
          </div>
        </div>
      </div>
    )
  }
  return <div>
    <DetailProductCard
      title={'Phật thủ đẹp'}
      CommonProduct={<DetailProduct />}
      productImg={data?.fruit_images}
      name={data?.fruit_name}
      quantity={data?.quantity}
      bonsaiQuantity={data?.gardens?.bonsai?.length}
      fruitQuantity={data?.gardens?.fruits?.length}
      joinedAt={data?.gardens?.created_at} phone={data?.phone} />
  </div>;
};

export default DetailFruitCategoriesPage;
