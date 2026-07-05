import { Commit1, Commit2 } from '@/public/images';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const COMMITMENTS = [
  { icon: '🌿', text: 'Phật thủ sạch 100% tự nhiên' },
  { icon: '🤝', text: 'Giá cả công bằng cho nông dân' },
  { icon: '🚚', text: 'Giao hàng tận nơi toàn quốc' },
  { icon: '💚', text: 'Đồng hành cùng khách hàng lâu dài' },
];

const AboutCommitPage: NextPage = (): React.ReactElement => {
  return (
    <section className="rounded-lg bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <span className="mx-auto block w-fit rounded-full bg-primary_light px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
          Đáng tin cậy
        </span>
        <h2 className="mb-12 mt-3 text-center text-3xl font-extrabold text-black md:text-5xl">
          Cam kết của chúng tôi
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((commit) => (
            <div
              key={commit.text}
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary_light text-4xl transition-colors group-hover:bg-primary">
                {commit.icon}
              </div>
              <p className="text-lg font-semibold text-black">{commit.text}</p>
            </div>
          ))}
        </div>

        <div className="my-16 flex items-center justify-center gap-4">
          <div className="h-px w-full max-w-[120px] bg-border_soft" />
          <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
          <div className="h-px w-full max-w-[120px] bg-border_soft" />
        </div>

        <h2 className="mb-12 text-center text-3xl font-extrabold text-black md:text-5xl">
          Giấy chứng nhận
        </h2>
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-stretch">
          {[Commit1, Commit2].map((cert, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-white p-4 shadow-card"
            >
              <div className="relative h-full w-full">
                <Image
                  src={cert.src}
                  alt="Giấy chứng nhận"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-medium italic text-primary md:text-2xl">
            {`"Mang hương phật thủ Đắc Sở đến mọi gia đình Việt"`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCommitPage;
