'use client';

import { NextPage } from 'next';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

import DetailProductCard from '@/components/DetailProduct/DetailProductCard';
import { useFruitDetail } from '@/components/hooks/fruit';
import _ from 'lodash';

const DetailFruitCategoriesPage: NextPage = (): React.ReactElement => {
  const params = useParams()

  const { data, onGetFruitById } = useFruitDetail(params['fruitsId'] as string)

  console.log(data);

  useEffect(() => {
    onGetFruitById;
  }, [onGetFruitById])
  const DetailProduct = () => {

    return (
      <div>
        <div className=" mt-5 text-base font-semibold leading-normal text-black">Chi tiết</div>
        <div className='flex w-full'>
          <div className="inline-flex flex-col items-start justify-start gap-[5px] pr-5">
            <div className=" text-base font-normal leading-normal text-black">Đường kính:</div>
            <div className=" text-base font-normal leading-normal text-black">Trọng lượng:</div>
            <div className=" text-base font-normal leading-normal text-black">Hình dáng:</div>
          </div>
          <div className="inline-flex flex-col items-start justify-center gap-[5px]">
            <div className=" text-base font-normal leading-normal text-black"> {!_.isEmpty(data?.dimeter) ? `${data?.dimeter[0]} - ${data?.dimeter[1]}` : 0} {`(cm)`}</div>
            <div className=" text-base font-normal leading-normal text-black">{!_.isEmpty(data?.weight) ? `${data?.weight[0]} - ${data?.weight[1]}` : 0} {`(g)`}</div>
            <div className=" text-base font-normal leading-normal text-black">{!_.isEmpty(data?.weight) ? data?.shape.toString(): 'không'}</div>
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
