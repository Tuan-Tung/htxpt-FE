import { NextPage } from 'next';
import React from 'react';


const AboutCommitPage: NextPage = (): React.ReactElement => {
  return (
    <section className="py-16 bg-white rounded-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-amber-900 text-center mb-12">
          Cam kết của chúng tôi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            'Phật thủ sạch 100% tự nhiên',
            'Giá cả công bằng cho nông dân',
            'Giao hàng tận nơi toàn quốc',
            'Đồng hành cùng khách hàng lâu dài',
          ].map((commit, i) => (
            <div key={i} className="text-center group">
              <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-amber-500 transition">
                <span className="text-5xl">✓</span>
              </div>
              <p className="text-lg font-medium text-gray-800">{commit}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-2xl italic text-amber-700 font-medium">
            {`"Mang hương phật thủ Đắc Sở đến mọi gia đình Việt"`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCommitPage;
