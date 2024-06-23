"use client"
import Image from 'next/image';
import React, { useState } from 'react'

import DetailInfoGarden from '@/components/DetailProduct/DetailInfoGarden';
import Icon from '@/components/Icon'
import { PRODUCT_STATUS } from '@/constants/common';
import { PropsDetailProduct } from '@/utils/type'

const DetailProductCard = (props: PropsDetailProduct) => {
  const [imgIndex, setImgIndex] = useState<any>(0);
  const { title, CommonProduct, bonsaiQuantity, fruitQuantity, joinedAt, name, quantity, productImg, phone } = props;

  const handleChangeImg = (index: number) => setImgIndex(index);
  return (
    <div>
      <div className=' bg-white p-3 sm:p-8'>
        <div className="inline-flex flex-wrap w-full items-start justify-start">
          <div className="max-h-[374px] w-full md:w-1/3">
            {productImg ? <Image src={productImg[imgIndex]?.url} alt="logo" width={356} height={294} className='mr-3 h-[374px] w-full object-cover'/> : null}

          </div>
          <div className="inline-flex w-full md:w-2/3 flex-col items-start justify-center gap-5 md:pl-8">
            <div className="h-[41px] w-[657px]  text-2xl font-semibold leading-9 text-black">{title}</div>
            <div className="">

              <div className="left-0 top-0 inline-flex h-[111px] w-[301px] items-start justify-start gap-5">
                <div className="inline-flex flex-col items-start justify-start gap-[5px]">
                  <div className="inline-flex items-center justify-start gap-[5px]">
                    <Icon color="#699C3A" name="ic_dollar_sign" size={20} aria-label="Location Icon" />
                    <div className="Gi  text-base font-normal leading-normal text-black">Giá:</div>
                  </div>
                  <div className="inline-flex items-center justify-start gap-[5px]">
                    <Icon color="#699C3A" name="ic_status_outline" size={20} aria-label="Location Icon" />
                    <div className=" text-base font-normal leading-normal text-black">Tình trạng:</div>
                  </div>
                  <div className="inline-flex items-center justify-start gap-[5px]">
                    <Icon color="#699C3A" name="ic_cube_outline" size={20} aria-label="Location Icon" />
                    <div className=" text-base font-normal leading-normal text-black">Mã:</div>
                  </div>
                  <div className="inline-flex items-center justify-start gap-[5px]">
                    <Icon color="#699C3A" name="ic_menu_outline" size={20} aria-label="Location Icon" />
                    <div className=" text-base font-normal leading-normal text-black">Danh mục:</div>
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-[5px]">
                  <div className=" text-base font-normal leading-normal text-black">Liên hệ nhà vườn</div>
                  <div className=" text-base font-normal leading-normal text-lime-600">{quantity > 0 ? `${PRODUCT_STATUS.AVAILABLE} ( ${quantity} quả)` : PRODUCT_STATUS.OUT_OF_STOCK}</div>
                  <div className=" text-base font-normal leading-normal text-black">N/A</div>
                  <div className=" text-base font-normal leading-normal text-lime-600">{name}</div>
                </div>
              </div>
              {CommonProduct}
            </div>
            <div className="inline-flex flex-wrap items-center justify-start gap-4">
              <div className="flex items-center w-full md:w-fit justify-center gap-2.5 rounded-lg border-2 border-lime-600 px-6 py-3">
                <div className=" text-lg font-bold leading-7 text-lime-600">LIÊN HỆ NGAY</div>
              </div>
              <div className="flex items-center w-full md:w-fit justify-center gap-2.5 rounded-lg border-2 border-lime-600 px-6 py-3">
                <div className=" text-lg font-bold leading-7 text-lime-600">ĐI ĐẾN NHÀ  VƯỜN </div>
              </div>
            </div>
          </div>

        </div>
        <div className='mt-4 flex flex-wrap'>
          {productImg?.map((value: any, index: number) => (
            <div className='pr-3'>
              <div className={`${index === imgIndex ? 'border-2 border-rose-600': 'border-2'} mb-4 h-[80px]`}>
                <Image src={value.url} alt="logo" width={80} height={80} className='h-[80px]' onClick={() => handleChangeImg(index)} />
              </div>
            </div>
          ))
          }
        </div>
      </div>
      <DetailInfoGarden
        name={name}
        bonsaiQuantity={bonsaiQuantity}
        fruitQuantity={fruitQuantity}
        joinedAt={joinedAt}
        phone={phone}
      />
    </div>
  )
}

export default DetailProductCard