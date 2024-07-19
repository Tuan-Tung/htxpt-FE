'use client';
import { useBlogDetail } from '@/components/hooks/blog';
import { useParams } from 'next/navigation';
// import Image from 'next/image'
import { useEffect } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import { CEOAvatar, Fruit2, FruitAbout } from '@/public/images';

const BlogDetailPage = () => {
  const params = useParams();
  console.log(params);

  const { data, onGetBlogById, refetchBlogById } = useBlogDetail(params['blogId'] as string);

  useEffect(() => {
    onGetBlogById;
  }, [onGetBlogById]);
  console.log(data);

  return (
    <div>
      <div className="lg:w-[1144px] bg-white">
        <div className="lg:w-[1144px] rounded-t-[10px] flex justify-between">
          {/* <Image src={CEOAvatar.src} alt="Gardener Avatar" layout="fill" objectFit="cover" className='w-[452px] rounded-tr-[10px]'/> */}
          <div className=" sm:p-6 xl:p-11">
            <div className="lg:h-[657px] lg:w-[601px] lg:border-2 lg:border-lime-600 p-4 lg:p-14">
              <div className="text-[24px] md:text-[50px] lg:text-[70px] font-semibold text-black">
                {data?.title}
              </div>
              <div className="text-[16px] sm:text-lg font-bold leading-7 text-black pt-4 sm:pt-0">
                Ngày: {dayjs(data?.updated_at).format('DD/MM/YYYY')}
              </div>
              <div className="sm:p-8">
                <div className="text-center text-xs font-bold leading-tight text-black">
                  Được viết bởi Quản trị viên HTX
                </div>
              </div>
            </div>
          </div>
          <Image
            src={Fruit2.src}
            alt="Gardener Avatar"
            layout="fill"
            objectFit="cover"
            className="!static w-full md:!w-1/3"
          />
        </div>
        <div className="p-4 sm:p-6 xl:p-11 text-xl">{data?.content}</div>
        <div className="flex sm:p-6 xl:p-11 p-4 text-xl flex-wrap">
          <p className="md:w-2/3">{data?.short_description}</p>
          <Image
            src={FruitAbout.src}
            alt="Gardener Avatar"
            layout="fill"
            objectFit="cover"
            className="!static w-full md:!w-1/3 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
