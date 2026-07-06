'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ProductGallery from '@/components/ProductGallery';
import { Fruit1, Fruit2, Fruit3, Fruit4, FruitAbout, FruitDrying } from '@/public/images';

const USES = [
  { title: 'Trà phật thủ', text: 'Vỏ thái lát mỏng, phơi khô rồi hãm nước sôi, giúp giải cảm, giảm ho, dễ tiêu.' },
  { title: 'Mứt, kẹo', text: 'Vỏ dày, thơm được sên với đường làm mứt Tết hoặc kẹo the mát rất đặc trưng.' },
  { title: 'Thờ cúng, trưng bày', text: 'Đặt trên mâm ngũ quả, bàn thờ ngày Tết với ý nghĩa cầu phúc lộc, bình an.' },
  { title: 'Tinh dầu, gia vị', text: 'Vỏ chiết tinh dầu thơm, dùng tạo hương cho món tráng miệng, salad, cocktail.' },
];

const SELECT_TIPS = [
  'Chọn quả có các "ngón tay" đều, xòe cân đối và khép kín hướng vào giữa.',
  'Vỏ vàng tươi hoặc vàng nhạt, nhẵn bóng, không trầy xước hay thâm dập.',
  'Cầm chắc tay, không bị mềm nhũn hay có mùi lạ.',
  'Theo dân gian, nếu ngón cuối cùng rơi vào chữ "Thịnh" hoặc "Thái" khi đếm theo vòng "Thịnh - Suy - Bĩ - Thái" thì quả càng được xem là đẹp, hợp phong thủy.',
];

const STORAGE_TIPS = [
  'Dùng khăn sạch thấm chút rượu trắng lau nhẹ bề mặt để quả bền màu, tươi lâu hơn.',
  'Đặt nơi khô thoáng, tránh ánh nắng trực tiếp và nơi ẩm thấp.',
  'Không rửa nước trước khi bảo quản vì dễ làm quả nhanh thâm, úng cuống.',
  'Khi bày mâm ngũ quả, nên đặt phật thủ ở vị trí cao nhất, chính giữa, các ngón tay hướng lên trên.',
];

const FruitInformationPage: NextPage = (): React.ReactElement => {
  const images = [Fruit1.src, Fruit2.src, Fruit3.src, Fruit4.src, FruitAbout.src];

  return (
    <div className="rounded-lg bg-background">
      <div className="mx-auto max-w-6xl">
        <span className="w-fit rounded-full bg-primary_light px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
          Đặc sản Đắc Sở
        </span>
        <h1 className="mt-3 text-2xl font-extrabold text-primary_green md:text-4xl">
          Quả Phật Thủ
        </h1>
        <p className="mt-2 max-w-2xl leading-relaxed text-dark_grey">
          Loại trái cây mang hình dáng bàn tay Phật độc đáo, gắn liền với mâm ngũ quả ngày Tết và
          đời sống tâm linh của người Việt.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <ProductGallery images={images} alt="Quả Phật Thủ" />

          <div className="flex flex-col gap-5">
            <div className="rounded-2xl bg-white p-6 shadow-card">
              <h2 className="mb-2 text-lg font-bold text-primary_green">Quả Phật Thủ là gì?</h2>
              <p className="leading-relaxed text-dark_grey">
                Phật thủ (tên khoa học <em>Citrus medica var. sarcodactylis</em>) là một giống cam
                chanh đặc biệt, quả tách thành nhiều nhánh dài xòe ra như bàn tay hoặc các ngón tay
                chụm lại — cũng là nguồn gốc cái tên &ldquo;Phật thủ&rdquo;. Vỏ quả rất dày và thơm,
                trong khi phần ruột hầu như không có múi, không có nước.
              </p>
            </div>
            <div className="rounded-2xl bg-primary_light/60 p-6">
              <h2 className="mb-2 text-lg font-bold text-primary_green">Ý nghĩa ngày Tết</h2>
              <p className="leading-relaxed text-dark_grey">
                Với hình dáng như bàn tay Phật đang chở che, phật thủ được xem là biểu tượng cầu
                phúc lộc, bình an, là sợi dây kết nối con cháu với tổ tiên. Vì vậy quả thường được
                đặt ở vị trí cao nhất, trang trọng nhất trên mâm ngũ quả hoặc bàn thờ gia tiên.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="mb-6 text-2xl font-extrabold text-primary_green">Công dụng của quả phật thủ</h2>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative h-64 overflow-hidden rounded-2xl shadow-card sm:h-80 lg:h-96">
              <Image src={FruitDrying.src} alt="Công dụng của quả phật thủ" fill className="object-cover" />
            </div>
            <ul className="space-y-4">
              {USES.map((use) => (
                <li key={use.title} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="leading-relaxed text-dark_grey">
                    <span className="font-bold text-primary_green">{use.title}:</span> {use.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-white p-6 shadow-card md:p-8">
          <h2 className="mb-2 text-2xl font-extrabold text-primary_green">
            Quả phật thủ có ăn được không?
          </h2>
          <p className="leading-relaxed text-dark_grey">
            Phật thủ hầu như không có nước và không có vị ngọt như các loại quả có múi khác, nên
            không dùng để ăn trực tiếp như cam, bưởi. Thay vào đó, phần vỏ thơm được dùng làm
            nguyên liệu chế biến: thái lát nấu trà, sên mứt, làm kẹo, hoặc chiết lấy the làm gia vị
            cho món tráng miệng. Trong Đông y, phật thủ còn được dùng hỗ trợ các chứng đầy bụng, ăn
            không tiêu, ho, đau tức ngực.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="mb-4 text-lg font-bold text-primary_green">Cách chọn phật thủ đẹp</h2>
            <ul className="space-y-3">
              {SELECT_TIPS.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-dark_grey">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="mb-4 text-lg font-bold text-primary_green">Cách bảo quản &amp; bày trí</h2>
            <ul className="space-y-3">
              {STORAGE_TIPS.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-dark_grey">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-14 flex flex-col items-center gap-4 rounded-2xl bg-primary_light/60 p-8 text-center">
          <p className="text-lg font-semibold text-primary_green md:text-xl">
            Chọn cho gia đình một quả phật thủ tươi từ vườn Đắc Sở
          </p>
          <Link
            href="/products/fruits"
            className="rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary_dark hover:shadow-card-hover"
          >
            Xem sản phẩm phật thủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FruitInformationPage;
