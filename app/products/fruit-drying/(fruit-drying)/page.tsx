'use client';

import {
  BadgeCheck,
  Gem,
  HandCoins,
  Headphones,
  Leaf,
  ShieldCheck,
  Sprout,
  Truck,
} from 'lucide-react';
import Image from 'next/image';

import GalleryLightbox from './GalleryLightbox';

const highlights = [
  { icon: Sprout, label: 'Nghệ thuật bonsai truyền thống' },
  { icon: Leaf, label: 'Kỹ thuật chăm sóc hiện đại' },
  { icon: Gem, label: 'Giá trị thẩm mỹ cao' },
  { icon: HandCoins, label: 'Ý nghĩa phong thủy tốt lành' },
];

const introduction = [
  'Năm 2025, sản phẩm Cây Phật thủ bonsai của Hợp tác xã đã được UBND Thành phố Hà Nội công nhận đạt chuẩn OCOP 3 sao.',
  'Mang ý nghĩa phong thủy tượng trưng cho phúc lành, tài lộc, bình an và thịnh vượng, được ưa chuộng trưng bày và làm quà tặng dịp lễ, Tết.',
  'Sản phẩm đã tham gia nhiều hội chợ, triển lãm và chương trình xúc tiến thương mại trong và ngoài Hà Nội; trưng bày tại Hoàng thành Thăng Long, giới thiệu trên VTV và nhiều sự kiện quảng bá sản phẩm OCOP.',
  'Với phương châm “Chất lượng tạo niềm tin – Giá trị tạo thương hiệu”, Hợp tác xã không ngừng đổi mới kỹ thuật, nâng cao chất lượng sản phẩm, xây dựng thương hiệu làng nghề và hướng tới phát triển bền vững.',
];

const commitments = [
  {
    icon: ShieldCheck,
    title: 'Chất lượng đảm bảo',
    text: 'Quy trình chăm sóc kỹ lưỡng, nghiêm ngặt',
  },
  { icon: Sprout, title: 'Nguồn gốc rõ ràng', text: '100% từ vùng trồng Phật thủ Đắc Sở' },
  { icon: Truck, title: 'Giao hàng toàn quốc', text: 'Đóng gói cẩn thận, vận chuyển an toàn' },
  { icon: Headphones, title: 'Hỗ trợ tận tâm', text: 'Tư vấn kỹ thuật và chăm sóc sau bán hàng' },
];

const FruitsDryingPage = (): React.ReactElement => (
  <main className="mx-auto w-full max-w-[1600px] text-[#26351d]">
    <section className="relative min-h-[430px] overflow-hidden rounded-2xl bg-[#f5f3d7] shadow-soft lg:min-h-[520px]">
      <Image
        src="/images/background_detail_desktop.webp"
        alt="Khu vườn Phật thủ Đắc Sở"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fffce8]/95 via-[#fffce8]/70 to-transparent" />
      <div className="relative z-10 flex min-h-[430px] flex-col px-6 py-7 sm:px-10 lg:min-h-[520px] lg:w-[58%] lg:px-16 lg:py-10">
        <div className="mb-3 flex w-fit items-center gap-2 rounded-full border border-[#d9e4be] bg-[#edf4d9]/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#42651f]">
          <Leaf size={15} /> Sản phẩm tiêu biểu
        </div>
        <h1 className="font-serif text-4xl font-bold uppercase leading-none text-[#345c22] sm:text-5xl lg:text-[58px]">
          Cây Phật thủ
        </h1>
        <p className="-mt-1 ml-2 font-serif text-5xl italic leading-none text-[#d3a413] sm:text-6xl lg:text-7xl">
          Bonsai
        </p>
        <div className="mt-4 flex min-h-[44px] w-fit items-center justify-center rounded-sm border-x-4 border-[#d4ab27] bg-[#315c20] px-6 pb-2 pt-3 font-serif text-base font-bold uppercase leading-none text-white shadow-md sm:px-8 sm:text-xl">
          Đạt chuẩn OCOP
        </div>
        <p className="mt-4 max-w-[520px] text-sm leading-6 sm:text-base">
          Tinh hoa làng nghề Đắc Sở – kết hợp nghệ thuật bonsai truyền thống và kỹ thuật chăm sóc
          hiện đại, mang giá trị thẩm mỹ, phong thủy và kinh tế cao.
        </p>
        <div className="mt-auto grid max-w-[600px] grid-cols-2 gap-3 pt-5 sm:grid-cols-4">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center text-[14px] font-medium leading-4"
            >
              <span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#749c4c] bg-[#f5f7dd]/80 text-[#426b27]">
                <Icon size={24} strokeWidth={1.7} />
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-4 right-[1%] hidden h-[94%] w-[55%] lg:block">
        <Image
          src="/images/img_bonsai_desktop.webp"
          alt="Cây Phật thủ bonsai"
          fill
          priority
          className="object-contain object-bottom"
        />
      </div>
      <div className="absolute bottom-7 right-7 hidden h-32 w-32 rotate-[-6deg] items-center justify-center rounded-full border-[7px] border-[#d8a943] bg-[#fffdf0] text-center shadow-xl xl:flex">
        <div className="text-[#315521]">
          <strong className="block text-2xl tracking-wider">
            <span className="text-[#9d442f]">O</span>
            <span className="text-[#2873a4]">C</span>
            <span className="text-[#337349]">O</span>
            <span className="text-[#dca52e]">P</span>
          </strong>
          <span className="block text-xl text-[#edae17]">★★★</span>
          <strong className="font-serif text-xl">3 SAO</strong>
          <small className="block font-bold">2025</small>
        </div>
      </div>
    </section>

    <section className="grid gap-8 py-8 lg:grid-cols-[1.2fr_1.3fr] lg:gap-10 xl:gap-12">
      <div>
        <h2 className="font-serif text-[28px] font-bold leading-[1.18] text-[#345c22] sm:text-[32px] lg:whitespace-nowrap lg:text-[29px] xl:text-[34px]">
          Giới thiệu cây Phật Thủ bonsai
        </h2>
        <p className="mt-4 text-sm font-semibold leading-6 sm:text-base">
          Cây Phật Thủ bonsai là sản phẩm tiêu biểu của Hợp tác xã Phật thủ Đắc Sở, được chăm sóc và
          tạo tác công phu từ những cây Phật thủ chất lượng cao.
        </p>
        <ul className="mt-3 space-y-3">
          {introduction.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 sm:text-base">
              <BadgeCheck className="mt-1 shrink-0 text-[#568b31]" size={21} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <GalleryLightbox />
    </section>

    <section className="grid overflow-hidden rounded-2xl border border-[#e2e6cf] bg-[#fbfaef] sm:grid-cols-2 xl:grid-cols-4">
      {commitments.map(({ icon: Icon, title, text }) => (
        <div
          key={title}
          className="flex items-center gap-4 border-b border-[#e2e6cf] px-6 py-5 last:border-b-0 sm:border-r xl:border-b-0 xl:last:border-r-0"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eaf3c9] text-[#4d7c29]">
            <Icon size={31} strokeWidth={1.7} />
          </span>
          <div>
            <h3 className="font-bold text-[#365d23]">{title}</h3>
            <p className="mt-1 text-sm leading-5 text-[#4f5549]">{text}</p>
          </div>
        </div>
      ))}
    </section>
  </main>
);

export default FruitsDryingPage;
