'use client';

import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fruit } from '@/types/mock';
import { DATA_FRUIT } from '@/mock_data/data_gardeners';
import { useParams } from 'next/navigation';

export default function PhatThuUI() {
  const [preview, setPreview] = useState<string | null>(null);
  const params = useParams();
console.log(params);

  const settings = {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
const dataDetail: Fruit | undefined = DATA_FRUIT.find((item) => item._id === params.fruits_category);

  if (!dataDetail) {
    return <div>Không tìm cây</div>;
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-lime-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-amber-800 text-center mb-6">
          Quả Phật Thủ
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-amber-700 mb-4">Thông tin</h2>
            <div className="space-y-2 text-gray-700 text-sm md:text-lg">
              <p><strong>Tên:</strong> Phật Thủ (Citrus medica var. sarcodactylis)</p>
              <p><strong>Đường kính:</strong> 15-25 cm</p>
              <p><strong>Trọng lượng:</strong> 500g - 1.5kg</p>
              <p><strong>Công dụng:</strong> Thờ cúng, trang trí, thuốc, trà, mứt</p>
              <p><strong>Thời gian sử dụng:</strong> 2-3 tháng (tươi), 1 năm (khô)</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-amber-700 mb-4">Mô tả</h2>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
              Quả Phật Thủ hình bàn tay Phật, vỏ vàng thơm, biểu tượng may mắn. Dùng thờ cúng, trà, mứt, tinh dầu.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 overflow-hidden">
          <h2 className="text-xl font-semibold text-amber-700 mb-4 text-center">Hình ảnh</h2>
          <div className="rounded-xl overflow-hidden">
          <Slider {...settings} autoplay dots>
            {dataDetail.imgList?.map((src, i) => (
              <div key={i} className="relative h-64 md:h-[650px]">
                <Image src={src} alt={`Ảnh ${i + 1}`} fill className="object-cover rounded-xl" />
              </div>
            ))}
          </Slider>
        </div>
        </div>
      </div>

      <Dialog.Root open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] max-w-4xl p-4">
            <div className="relative bg-white rounded-xl overflow-hidden aspect-video">
              {preview && (
                <Image src={preview} alt="Preview" fill className="object-contain" />
              )}
              <Dialog.Close className="absolute top-3 right-3 bg-white/90 rounded-full p-2 hover:bg-white">
                <X className="w-5 h-5" />
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}