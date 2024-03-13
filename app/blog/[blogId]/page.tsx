// import Image from 'next/image'
import React from 'react'

// import { CEOAvatar } from '@/public/images'

const BlogDetailPage = () => {
  return (
    <div>
      <div className=" h-[754px] w-[1144px]">
        <div className="h-[754px] w-[1144px] rounded-t-[10px] bg-white sm:p-6 xl:p-11">
          {/* <Image src={CEOAvatar.src} alt="Gardener Avatar" layout="fill" objectFit="cover" className='w-[452px] rounded-tr-[10px]'/> */}
          <div className="h-[657px] w-[601px] border-2 border-lime-600 p-14">
            <div className="text-[70px] font-semibold text-black">Phật thủ và những tác dụng bạn không ngờ tới</div>
            <div className="text-lg font-bold leading-7 text-black">Ngày 23 tháng 6 năm 2023 <br/>9:36 AM</div>
            <div className="p-8">
                <div className="text-center text-xs font-bold leading-tight text-black">Được viết bởi Quản trị viên HTX</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailPage