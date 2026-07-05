'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fruit } from '@/types/mock';
import { DATA_FRUIT } from '@/mock_data/data_gardeners';
import { useParams } from 'next/navigation';

export default function FruitCategoryDetail() {
  const params = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const dataDetail: Fruit | undefined = DATA_FRUIT.find((item) => item._id === params.fruits_category);

  if (!dataDetail) {
    return <div className="p-8 text-center text-lg text-dark_grey">Không tìm thấy sản phẩm</div>;
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
                <Image
                  src={src}
                  alt={`${dataDetail.category_name} - ảnh ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right: content */}
        <div className="flex flex-col gap-5">
          <span className="w-fit rounded-full bg-primary_light px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            Phật thủ
          </span>
          <h1 className="text-2xl font-extrabold text-black md:text-4xl">{dataDetail.category_name}</h1>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-4 text-center shadow-card">
              <div className="text-xs uppercase tracking-wide text-dark_grey/60">Cân nặng</div>
              <div className="mt-1 font-bold text-black">{dataDetail.weight}</div>
            </div>
            <div className="rounded-xl bg-white p-4 text-center shadow-card">
              <div className="text-xs uppercase tracking-wide text-dark_grey/60">Đường kính</div>
              <div className="mt-1 font-bold text-black">{dataDetail.dimeter}</div>
            </div>
            <div className="rounded-xl bg-white p-4 text-center shadow-card">
              <div className="text-xs uppercase tracking-wide text-dark_grey/60">Khoảng giá</div>
              <div className="mt-1 font-bold text-accent_terra">{dataDetail.range_price} VNĐ</div>
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-black">Kiểu dáng</h2>
            <p className="leading-relaxed text-dark_grey">{dataDetail.shape}</p>
          </div>

          {dataDetail.description && (
            <div>
              <h2 className="mb-2 text-lg font-bold text-black">Mô tả</h2>
              <p className="leading-relaxed text-dark_grey">{dataDetail.description}</p>
            </div>
          )}

          {dataDetail.usage && (
            <div>
              <h2 className="mb-2 text-lg font-bold text-black">Công dụng</h2>
              <p className="leading-relaxed text-dark_grey">{dataDetail.usage}</p>
            </div>
          )}

          {dataDetail.shelf_life && (
            <div>
              <h2 className="mb-2 text-lg font-bold text-black">Thời gian sử dụng</h2>
              <p className="leading-relaxed text-dark_grey">{dataDetail.shelf_life}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
