'use client';

import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { Bonsai } from '@/types/mock';
import { DATA_BONSAI } from '@/mock_data/data_gardeners';
import { useParams } from 'next/navigation';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function BonsaiDetail() {
  const [preview, setPreview] = useState<string | null>(null);
  const params = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dataDetail: Bonsai | undefined = DATA_BONSAI.find((item) => item._id === params.treesId);

  if (!dataDetail) {
    return <div>Không tìm cây</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-lime-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-amber-800 text-center mb-6">
          {dataDetail.tree_name}
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8 bg-white p-6">
          <div className="">
            <h2 className="text-xl font-semibold text-amber-700">Thông tin</h2>
            <div className="space-y-2 text-gray-700 text-sm md:text-lg">
              <p>
                <strong>Số lượng: </strong>
                {dataDetail.quantity} ( cây bonsai )
              </p>
            </div>
            <h2 className="text-xl font-semibold text-amber-700 mt-4">Mô tả</h2>
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
              {dataDetail.description}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-amber-700 mb-4">Câu chuyện - Bài thơ</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: dataDetail.story as any,
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 overflow-hidden">
          <h2 className="text-xl font-semibold text-amber-700 mb-4 text-center">
            Hình ảnh tham khảo
          </h2>
          <div className="rounded-xl overflow-hidden">
            <Slider {...settings} autoplay dots>
              {dataDetail?.imgList?.map((src, i) => (
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
              {preview && <Image src={preview} alt="Preview" fill className="object-contain" />}
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
