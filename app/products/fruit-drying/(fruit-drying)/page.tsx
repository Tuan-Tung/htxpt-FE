'use client';

import { DryingBanner1, DryingBanner2 } from '@/public/images';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const mock_data = [
  {
    title: 'Chọn lựa và làm sạch',
    desc: 'Chọn những quả phật thủ tươi, không bị hư hỏng. Rửa sạch quả phật thủ bằng nước sạch để loại bỏ bụi bẩn và vi khuẩn.',
  },
  {
    title: 'Sơ chế',
    desc: 'Cắt quả phật thủ thành các lát mỏng hoặc giữ nguyên tùy theo mục đích sử dụng.',
  },
  {
    title: 'Sấy khô',
    desc: 'Sấy phật thủ bằng phương pháp truyền thống (phơi nắng) hoặc hiện đại (sử dụng máy sấy). Quá trình sấy giúp loại bỏ nước trong quả, giữ lại hương thơm và các thành phần dinh dưỡng. Nhiệt độ sấy lý tưởng thường dao động từ 50-60 độ C',
  },
  {
    title: 'Bảo quản',
    desc: 'Sau khi sấy khô, phật thủ được bảo quản trong các túi hút chân không hoặc hộp kín để tránh ẩm mốc và duy trì hương vị.',
  },
];
interface IProps {
  title: string;
  desc: string;
}
const CommonElement = ({ data, index }: { data: IProps; index: number }) => {
  return (
    <div className="w-full lg:w-1/2 flex justify-between py-6 px-2" key={data?.title}>
      <div className="w-[6rem] h-[6rem] border-dashed bg-[#699C3A] rounded-full relative">
        <div className="absolute top-1/2 left-1/2 text-[2.5rem] text-white -translate-y-1/2 -translate-x-1/2 font-semibold">
          0{index + 1}
        </div>
      </div>
      <div className="w-3/4 h-3/4 px-2">
        <p>{data?.title}</p>
        <p>{data?.desc}</p>
      </div>
    </div>
  );
};
const FruitsDryingPage: NextPage = (): React.ReactElement => {

  return (
    <div>
      <div className="h-[350px] lg:h-[500px] bg-FruitDrying bg-cover rounded-lg px-4 lg:px-32 flex items-center">
        <div className="max-w-[500px] p-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <h3 className="text-[24px] font-bold md:text-[40px] text-white">Phật thủ sấy khô</h3>
          <p className=" text-white text-xl">
            Sản phẩm quả phật thủ sấy không chỉ mang lại giá trị dinh dưỡng cao mà còn là một phần
            không thể thiếu trong văn hóa ẩm thực và y học truyền thống của người Việt.
          </p>
        </div>
      </div>
      <div className="pt-8  px-4 lg:px-32">
        <h3 className="text-[24px] font-bold md:text-[40px] text-primary">
          Giới thiệu về mặt hàng phật thủ sấy
        </h3>
        <div className="max-w-[1200px] m-auto flex justify-between pt-4 flex-wrap">
          <div className="w-full lg:w-1/2 lg:pr-4">
            <p className="text-[20px] lg:text-[30px] font-semibold">Nguồn gốc</p>
            <p className="text-lg">
              {`Quả phật thủ có nguồn gốc từ vùng Đông Á, đặc biệt
              là Trung Quốc và Việt Nam. Đây là loại trái cây có hình dáng độc đáo, giống như những
              ngón tay Phật, nên được gọi là "phật thủ". Phật thủ thường được trồng ở những vùng có
              khí hậu ôn đới và cận nhiệt đới. Tại Việt Nam, phật thủ được trồng phổ biến ở các tỉnh
              phía Bắc như Hưng Yên, Hà Nội và Bắc Giang.`}
              <Link href="https://maps.app.goo.gl/mJCoXqKo4Bvxd1aB6" target="_blank">
                <strong className="text-[#0079FC]">Đặc biệt là ở Đắc Sở</strong>
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <Image
              width={500}
              height={300}
              src={DryingBanner1.src}
              alt="Home About"
              className="max-h-[300px] object-cover drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="max-w-[1200px] m-auto flex justify-between mt-20 flex-wrap">
          <div className="w-full lg:w-1/2 lg:pr-4">
            <p className="text-[20px] lg:text-[30px] font-semibold">Công dụng và chức năng</p>
            <p className="text-lg">
              Quả phật thủ sấy giữ nguyên các thành phần dinh dưỡng và hương thơm đặc trưng của phật
              thủ tươi. Các công dụng chính của phật thủ sấy bao gồm:
            </p>
            <ul className="list-disc m-4 text-lg">
              <li>
                <strong>Gia vị và chế biến món ăn:</strong> Phật thủ sấy có thể được dùng để làm gia
                vị trong các món ăn, chè, mứt, hay làm nguyên liệu cho các món tráng miệng.
              </li>
              <li>
                <strong>Dược liệu:</strong> Trong y học cổ truyền, phật thủ sấy được sử dụng để làm
                thuốc. Nó có tác dụng hỗ trợ tiêu hóa, giảm đau dạ dày, làm dịu căng thẳng, và tăng
                cường sức đề kháng.
              </li>
              <li>
                <strong>Trang trí:</strong> Với hình dáng đẹp mắt, phật thủ sấy còn được dùng để
                trang trí các món ăn, bàn thờ trong các dịp lễ tết, mang lại vẻ đẹp tinh tế và hương
                thơm dễ chịu.
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <Image
              width={500}
              height={300}
              src={DryingBanner2.src}
              alt="Home About"
              className="max-h-[300px] object-cover drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="pt-8  px-4 lg:px-32">
        <h3 className="text-[24px] font-bold md:text-[40px] text-primary">Cách làm phật thủ sấy</h3>
        <div className="flex flex-wrap justify-between">
          {mock_data.map((item: IProps, index: number) => (
            <CommonElement data={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FruitsDryingPage;
