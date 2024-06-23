'use client';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Image from 'next/image';

import AlertDialogDemo from '@/components/DetailProduct/ModalContact';
import Icon from '@/components/Icon';
import { GARDENER_TITLE } from '@/constants/common';
import { CALL_TEXT, MESSAGE_TEXT } from '@/constants/footer';
import { CEOAvatar, Nature } from '@/public/images';
import { formatDateForm } from '@/utils';

export interface IPropInfoGarden {
  name: string;
  bonsaiQuantity: number;
  fruitQuantity: number;
  joinedAt: string;
  phone: string;
}
const DetailInfoGarden = ({ name, bonsaiQuantity, fruitQuantity, joinedAt,phone }: IPropInfoGarden) => {
  return (
    <div>
      <div className=" mt-5 flex flex-wrap min-h-[179px] w-full rounded-xl bg-white p-6 shadow">
        <div
          className="flex flex-col gap-4 rounded-md bg-cover bg-center p-4 w-full xl:w-1/3"
          style={{ backgroundImage: `url(${Nature.src})` }}
        >
          <div className="flex items-end gap-2.5">
            <div className="relative h-[74px] w-[74px] overflow-hidden rounded-full">
              <Image src={CEOAvatar.src} alt="Gardener Avatar" layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white">{GARDENER_TITLE}</span>
              <span className="font-bold text-white">{name}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <button className="w-1/2 border border-white bg-transparent px-8 py-1 text-white hover:bg-white hover:text-black">
                  <span>{CALL_TEXT}</span>
                </button>
              </AlertDialog.Trigger>
              <AlertDialog.Trigger asChild>
                <button className="w-1/2 border border-white bg-transparent px-8 py-1 text-white hover:bg-white hover:text-black">
                  <span>{MESSAGE_TEXT}</span>
                </button>
              </AlertDialog.Trigger>
              <AlertDialogDemo phone={phone} title={name}/>
            </AlertDialog.Root>
          </div>
        </div>
        <div className="w-full xl:w-2/3 flex flex-wrap lg:px-6 py-4">
          <div className="item-content flex flex-wrap w-full sm:w-1/2">
            <div className="flex pb-2 xl:pb-0">
              <div className="flex w-full justify-start gap-[5px]">
                <Icon
                  color="#699C3A"
                  name="ic_trees_outline"
                  size={20}
                  aria-label="Location Icon"
                />
                <div className="text-sm font-normal leading-tight text-black">Cây Bonsai:</div>
              </div>
              <div className="text-sm font-normal leading-tight text-lime-600">
                {bonsaiQuantity}
              </div>
            </div>
            <div className="inline-flex w-full justify-start gap-[5px] pb-2 xl:pb-0">
              <div className="flex justify-start gap-[5px]">
                <Icon color="#699C3A" name="ic_star" size={20} aria-label="Location Icon" />
                <div className="text-sm font-normal leading-tight text-black">Đánh Giá:</div>
              </div>
              <div className="text-sm font-normal leading-tight text-lime-600">
                4.5 (59.4k Đánh Giá)
              </div>
            </div>
            <div className="inline-flex w-full justify-start gap-[5px] pb-2 xl:pb-0">
              <div className="flex justify-start gap-[5px]">
                <Icon color="#699C3A" name="ic_user_outline" size={20} aria-label="Location Icon" />
                <div className="text-sm font-normal leading-tight text-black">Tham Gia:</div>
              </div>
              <div className="text-sm font-normal leading-tight text-lime-600">
                {formatDateForm(joinedAt)}
              </div>
            </div>
          </div>
          <div className="item-content flex flex-wrap w-full sm:w-1/2">
            <div className="inline-flex w-full justify-start gap-[5px] pb-2 xl:pb-0">
              <div className="flex justify-start gap-[5px]">
                <Icon
                  color="#699C3A"
                  name="ic_card_category_outline"
                  size={20}
                  aria-label="Location Icon"
                />
                <div className="text-sm font-normal leading-tight text-black">Sản Phẩm:</div>
              </div>
              <div className="text-sm font-normal leading-tight text-lime-600">Quả, Cây Bonsai</div>
            </div>
            <div className="inline-flex w-full justify-start gap-[5px] pb-2 xl:pb-0">
              <div className="flex justify-center gap-[5px]">
                <Icon
                  color="#699C3A"
                  name="ic_fruit_outline"
                  size={20}
                  aria-label="Location Icon"
                />
                <div className="text-sm font-normal leading-tight text-black">Quả:</div>
              </div>
              <div className="text-sm font-normal leading-tight text-lime-600">{fruitQuantity}</div>
            </div>
            <div className="inline-flex w-full justify-start gap-[5px] pb-2 xl:pb-0">
              <div className="flex justify-start gap-[5px]">
                <Icon
                  color="#699C3A"
                  name="ic_message_square_outline"
                  size={20}
                  aria-label="Location Icon"
                />
                <div className="text-sm font-normal leading-tight text-black">
                  Tỉ Lệ Phản Hồi Chat:
                </div>
              </div>
              <div className="text-sm font-normal leading-tight text-lime-600">100%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInfoGarden;
