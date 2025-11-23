import { NextPage } from 'next';
import React from 'react';

const AboutStrategy: NextPage = (): React.ReactElement => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#699C3A] via-[#7CB44A] to-[#A0D468] text-white rounded-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Chiến lược phát triển</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Bền vững',
              desc: 'Áp dụng nông nghiệp hữu cơ, bảo vệ môi trường đất và nước',
            },
            {
              title: 'Chất lượng',
              desc: '100% phật thủ đạt chuẩn bộ nông nghiệp, truy xuất nguồn gốc rõ ràng',
            },
            { title: 'Thị trường', desc: 'Xây dựng thương hiệu Phật thủ Đắc Sở vươn tầm quốc gia' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition"
            >
              <div className="w-20 h-20 bg-amber-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
                {i + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-amber-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStrategy;
