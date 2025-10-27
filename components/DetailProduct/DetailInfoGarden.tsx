// app/gardener/[id]/page.tsx (Next.js App Router)
import { DATA_GARDENERS_DETAIL } from '@/mock_data/data_detail_byId';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface Garden {
  _id: string;
  first_name: string;
  last_name: string;
  rating_avg: number;
  image: string;
  location: string;
  phone: string;
  product_category: string[];
  garden_name: string;
  area: string;
  experience_years: string;
  specialties: string[];
  images: {
    fruits: string[];
    bonsai: string[];
  };
  process: string;
  prices: string;
  certifications: string;
  story: string;
  reviews: string;
  ordering: string;
}
const avatarBorder =
  'https://res.cloudinary.com/dknfeccra/image/upload/v1761489194/sam/Khung_avt-08_zq6q53.png';
export default function GardenerDetail({ id }: { id: string }) {
  const dataDetail: Garden | undefined = DATA_GARDENERS_DETAIL.find((item) => item._id === id);
  if (!dataDetail) {
    return <div>Không tìm thấy nhà vườn</div>;
  }
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center p-6 rounded-xl">
          <h1 className="text-2xl md:text-4xl font-bold text-[#65a30d]">
            {dataDetail.garden_name}
          </h1>
          <p className="text-lg text-gray-700 mt-1">
            {dataDetail.first_name} {dataDetail.last_name} •{' '}
            {dataDetail.product_category.join(', ')}
          </p>
        </div>

        {/* Main Info Card - Avatar full height */}
        <div className="min-h-0 md:min-h-[540px] p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left: Avatar full height */}
          <div className="relative h-full aspect-square">
            <Image
              src={dataDetail.image}
              alt="Chủ vườn"
              fill
              className="rounded-full object-cover"
            />
            <Image src={avatarBorder} alt="Viền" fill className="pointer-events-none" />
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <strong className="text-[#65a30d]">Vị trí:</strong> {dataDetail.location}
            </div>
            <div>
              <strong className="text-[#65a30d]">Liên hệ:</strong> {dataDetail.phone}
            </div>
            <div>
              <strong className="text-[#65a30d]">Diện tích:</strong> {dataDetail.area}
            </div>
            <div>
              <strong className="text-[#65a30d]">Kinh nghiệm:</strong> {dataDetail.experience_years}
            </div>
            <div>
              <strong className="text-[#65a30d]">Chuyên môn:</strong>
              <div className="flex flex-wrap gap-2 mt-1">
                {dataDetail.specialties.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-[#65a30d] text-white text-sm rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process, Price, Review - Bordered, no bg */}
        <div className="border-2 border-[#65a30d] rounded-xl p-6 space-y-6">
          <div>
            <h3 className="font-semibold text-[#65a30d] mb-1">Quy trình</h3>
            <p className="text-gray-700">{dataDetail.process}</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#65a30d] mb-1">Giá cả</h3>
            <p className="text-gray-700 whitespace-pre-line">{dataDetail.prices}</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#65a30d] mb-1">Đánh giá</h3>
            <p className="text-gray-700">{dataDetail.reviews}</p>
          </div>
        </div>

        {/* Carousel Gallery */}
        <div className="rounded-xl overflow-hidden">
          <Slider {...sliderSettings} autoplay dots>
            {dataDetail.images.fruits.map((src, i) => (
              <div key={i} className="relative h-64 md:h-[650px]">
                <Image src={src} alt={`Ảnh ${i + 1}`} fill className="object-cover rounded-xl" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Other Details */}
        <div className="space-y-6">
          <div className="p-6">
            <h3 className="font-semibold text-[#65a30d] mb-2">Câu chuyện</h3>
            <p>{dataDetail.story}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
