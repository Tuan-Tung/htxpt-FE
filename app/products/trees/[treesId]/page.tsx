'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import { Bonsai } from '@/types/mock';
import { DATA_BONSAI } from '@/mock_data/data_gardeners';
import { useParams } from 'next/navigation';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function BonsaiDetail() {
  const params = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const dataDetail: Bonsai | undefined = DATA_BONSAI.find((item) => item._id === params.treesId);

  if (!dataDetail) {
    return <div className="p-8 text-center text-lg text-dark_grey">Không tìm thấy cây</div>;
  }

  const images = dataDetail.imgList?.length ? dataDetail.imgList : [dataDetail.image];

  return (
    <div className="rounded-lg bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        {/* Left: image gallery */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-card">
          <Slider {...settings}>
            {images.map((src, i) => (
              <div key={i} className="relative h-72 sm:h-96 lg:h-[520px]">
                <Image src={src} alt={`${dataDetail.tree_name} - ảnh ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right: content */}
        <div className="flex flex-col gap-5">
          <span className="w-fit rounded-full bg-primary_light px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            Bonsai
          </span>
          <h1 className="text-2xl font-extrabold text-primary_green md:text-4xl">{dataDetail.tree_name}</h1>

          <div className="flex items-center gap-2 rounded-xl bg-white p-4 shadow-card">
            <span className="text-2xl">🌿</span>
            <span className="text-dark_grey">
              <span className="font-semibold text-primary_green">Số lượng còn:</span> {dataDetail.quantity} cây
            </span>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-primary_green">Mô tả</h2>
            <p className="leading-relaxed text-dark_grey">{dataDetail.description}</p>
          </div>

          {dataDetail.story && (
            <div className="rounded-2xl bg-primary_light/60 p-6">
              <h2 className="mb-3 text-lg font-bold text-primary_green">Câu chuyện - Bài thơ</h2>
              <div
                className="text-dark_grey [&_p]:mb-3 [&_p]:last:mb-0"
                dangerouslySetInnerHTML={{
                  __html: dataDetail.story,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
