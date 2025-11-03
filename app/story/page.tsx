'use client';

import Image from 'next/image';
// import { QRCodeSVG } from 'qrcode.react';

export default function StoryLayout() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column */}
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 border-4 border-orange-200">
              <h1 className="text-2xl md:text-4xl font-bold text-red-600 text-center mb-4">
                CÂU CHUYỆN SẢN PHẨM
                <br />
                CÂY PHÁT THỦ CẢNH
              </h1>
              <div className="prose prose-sm md:prose-base text-gray-700 space-y-3 text-justify text-lg">
                <p>
                  Quả Phật Thủ nổi tiếng bởi trồng giống như bàn tay của Đức Phật đang khum lại che
                  chở cho chúng sinh, việc trưng bày quả và cây Phật Thủ đã trở thành một nét đẹp
                  trong văn hóa thờ cúng nhất là trong các dịp tuần, rằm và tết nguyên đán với ý
                  nghĩa mang lại sự bình an, may mắn, thuận lợi, phồn thịnh về tài lộc, sức khỏe và
                  thành được mọi điều bất lợi, do đó quả và cây Phật Thủ mang giá trị rất lớn về tâm
                  linh.
                </p>
                <p>
                  Một cây Phật Thủ đẹp thường hội tụ đủ 3 yếu tố <strong>Thọ – Kỳ – Mỹ</strong> tức
                  là bền, đẹp, lạ mắt, lá xanh, dày chắc, có lộc, cây khỏe, thường mỗi cây có từ 3-5
                  quả hoặc nhiều hơn nhưng đều là số quả lẻ, mỗi quả đều được lựa chọn rất công phu
                  tỉ mỉ đảm bảo đầy đủ các nét đẹp về ngũ hành như “<em>Thịnh – Suy – Vi – Thái</em>
                  ” bên cạnh đó vanh phải cân, nhiều tầng lớp, ngón tay dài. Dưới bàn tay của các
                  nghệ nhân tạo hình mỗi quả phát thủ được ghép lên trên cây rất hài hòa, cân đối,
                  đẹp mắt với những dáng thế truyền thống như: dáng ngang, dáng mâm xôi, dáng siêu
                  hay dáng lăng các quả được xếp xếp hiện lên như những bông hoa cúc đại đóa trồng
                  vô cùng ấn tượng, thích thú, có thể thu hút mọi ánh nhìn.
                </p>
                <p>
                  Đặc Sở là địa phương được biết đến như thủ phủ của cây Phật Thủ, nơi đây có những
                  người đã gắn bó hàng chục năm với nghề trồng cây Phật Thủ, và những cây Phật Thủ
                  đẹp nhất Hà Nội cũng được làm ra từ chính nơi này. Với định hướng bảo tồn, duy
                  trì, phát triển nghề trồng cây Phật Thủ lấy quả và làm cảnh Hợp tác Xã Phát Thủ
                  Đặc Sở đã được thành lập để kết nối những người yêu nghề, gìn giữ, lan tỏa một
                  nghề trồng cây rất độc đáo. Mỗi năm chúng tôi có thể cung cấp hàng nghìn cây Phật
                  Thủ cảnh có giá trị kỹ thuật, mỹ thuật cao cho thị trường khắp cả nước.
                </p>
                <p>
                  Mời các bạn đến với HTX Phát Thủ Đặc Sở để được chiêm ngưỡng và biết đến những cây
                  Phật Thủ xanh tươi được tạo hình đẹp như những tác phẩm nghệ thuật sống.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-center space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                {/* <div className="w-16 h-16 md:w-20 md:h-20 relative">
                  <Image
                    src={LOGO.src}
                    alt="HTX Phát Thủ Đặc Sở"
                    fill
                    className="object-contain"
                  />
                </div> */}
                <h2 className="text-2xl md:text-4xl font-bold text-red-600">HTX PHÁT THỦ ĐẶC SỞ</h2>
              </div>

              {/* Product Image */}
              <div className="justify-center w-full max-w-sm md:max-w-md aspect-video flex">
                <Image
                  src="https://res.cloudinary.com/dknfeccra/image/upload/v1761660878/sam/z7154138147362_209a65838d821c2c87f74d7106ac0c9e_xoi0wk.jpg"
                  alt="Cây Phật Thủ"
                  width={350}
                  height={525}
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>

              {/* QR Code */}
              {/* <div className="bg-white p-4 rounded-xl shadow-md">
               <QRCodeSVG value="https://phatthu.com" size={120} /> 
              </div> */}

              {/* Contact */}
              <div className="text-center space-y-2 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl w-full">
                <h3 className="text-lg md:text-xl font-bold text-blue-900">
                  LIÊN HỆ ĐẶT HÀNG VÀ HỢP TÁC
                </h3>
                <p className="text-sm md:text-base font-semibold text-blue-800">
                  HỢP TÁC XÃ PHÁT THỦ ĐẶC SỞ
                </p>
                <p className="text-sm text-gray-700 md:text-lg">
                  Địa chỉ: Số 21, đường Đặc Sở 1, thôn Chùa Ngu, xã Dương Hòa, thành phố Hà Nội.
                </p>
                <p className="text-sm text-gray-700 md:text-lg">
                  Điện thoại: 0986.696.119 – 0788.838.888
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
