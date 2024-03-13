import { NextPage } from 'next';
import React from 'react';

import DetailProductCard from '@/components/DetailProduct/DetailProductCard';

const DetailFruitCategoriesPage: NextPage = (): React.ReactElement => {
  const DetailProduct = () => {
    return (
      <div>
        <div className=" mt-5 text-base font-semibold leading-normal text-black">Chi tiết</div>
        <div className='flex w-full'>
          <div className="inline-flex flex-col items-start justify-start gap-[5px] pr-5">
            <div className=" text-base font-normal leading-normal text-black">Chiều cao::</div>
            <div className=" text-base font-normal leading-normal text-black">Số lượng quả::</div>
          </div>
          <div className="inline-flex flex-col items-start justify-center gap-[5px]">
            <div className=" text-base font-normal leading-normal text-black">1m2</div>
            <div className=" text-base font-normal leading-normal text-black">50</div>
          </div>
        </div>
      </div>
    )
  }
  return <div>
    <DetailProductCard title={'Cây Bonsai'} CommonProduct={<DetailProduct />} />
  </div>;
};

export default DetailFruitCategoriesPage;
