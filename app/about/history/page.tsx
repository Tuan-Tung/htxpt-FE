import { NextPage } from 'next';
import React from 'react';

import EmptyPage from '@/components/Pages/EmptyPage';
import Image from 'next/image';

const AboutHistoryPage: NextPage = (): React.ReactElement => {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white rounded-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-amber-900 text-center mb-12">
          Lịch sử hình thành
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="https://res.cloudinary.com/dknfeccra/image/upload/v1761660878/sam/z7154138147362_209a65838d821c2c87f74d7106ac0c9e_xoi0wk.jpg"
              alt="Cây Phật Thủ"
              width={450}
              height={325}
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed order-1 md:order-2">
            <p>
              Hợp tác xã Phật thủ được thành lập năm 2022 tại vùng đất Đắc Sở, Dương Hòa – nơi có
              khí hậu và thổ nhưỡng lý tưởng cho cây phật thủ phát triển.
            </p>
            <p>
              Từ 3 hộ dân ban đầu với vỏn vẹn 5ha, đến nay hợp tác xã đã quy tụ hơn
              <span className="font-bold text-amber-700"> 10 thành viên</span>, canh tác trên{' '}
              <span className="font-bold text-amber-700">20ha</span> đạt chuẩn giấy chứng nhận của
              bộ nông nghiệp và phát triển nông thôn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistoryPage;
