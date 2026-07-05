'use client';

import Image from 'next/image';
// import { QRCodeSVG } from 'qrcode.react';

export default function StoryLayout() {
  return (
    <div className="rounded-lg bg-gradient-to-br from-primary_light to-white p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left Column */}
          <div className="rounded-3xl bg-white p-6 shadow-card md:p-8">
            <h1 className="mb-4 text-center text-2xl font-extrabold text-black md:text-4xl">
              CÂU CHUYỆN SẢN PHẨM
              <br />
              CÂY PHÁT THỦ CẢNH
            </h1>
            <div className="space-y-3 text-justify text-base leading-relaxed text-dark_grey md:text-lg">
              <p>
                Quả Phật Thủ nổi tiếng bởi trồng giống như bàn tay của Đức Phật đang khum lại che
                chở cho chúng sinh, việc trưng bày quả và cây Phật Thủ đã trở thành một nét đẹp
                trong văn hóa thờ cúng nhất là trong các dịp tuần, rằm và tết nguyên đán với ý
                nghĩa mang lại sự bình an, may mắn, thuận lợi, phồn thịnh về tài lộc, sức khỏe và
                thành được mọi điều bất lợi, do đó quả và cây Phật Thủ mang giá trị rất lớn về tâm
                linh.
              </p>
              <p>
                Một cây Phật Thủ đẹp thường hội tụ đủ 3 yếu tố <strong className="text-black">Thọ – Kỳ – Mỹ</strong> tức
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
            <h2 className="text-center text-2xl font-extrabold text-black md:text-4xl">
              HTX PHÁT THỦ ĐẶC SỞ
            </h2>

            {/* Product Image */}
            <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-card">
              <Image
                src="https://res.cloudinary.com/dknfeccra/image/upload/v1761660878/sam/z7154138147362_209a65838d821c2c87f74d7106ac0c9e_xoi0wk.jpg"
                alt="Cây Phật Thủ"
                fill
                className="object-cover"
              />
            </div>

            {/* QR Code */}
            {/* <div className="bg-white p-4 rounded-xl shadow-md">
             <QRCodeSVG value="https://phatthu.com" size={120} />
            </div> */}

            {/* Contact */}
            <div className="w-full space-y-2 rounded-2xl bg-primary_light p-6 text-center shadow-soft">
              <h3 className="text-lg font-bold text-primary md:text-xl">
                LIÊN HỆ ĐẶT HÀNG VÀ HỢP TÁC
              </h3>
              <p className="text-sm font-semibold text-black md:text-base">
                HỢP TÁC XÃ PHÁT THỦ ĐẶC SỞ
              </p>
              <p className="text-sm text-dark_grey md:text-lg">
                Địa chỉ: Số 21, đường Đặc Sở 1, thôn Chùa Ngụ, xã Dương Hòa, thành phố Hà Nội.
              </p>
              <p className="text-sm text-dark_grey md:text-lg">
                Điện thoại: 0986.696.119 – 0788.838.888
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
