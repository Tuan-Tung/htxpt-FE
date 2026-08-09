'use client';

import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const images = [
  { src: '/images/img_tree_bonsai.jpg', alt: 'Toàn cảnh cây Phật thủ bonsai', className: 'bg-[#dce9b5] object-cover' },
  { src: '/images/background_detail_desktop.jpg', alt: 'Quả Phật thủ trên cây', className: 'object-cover object-right' },
  { src: '/images/img_tree1.jpg', alt: 'Cây Phật thủ trưng bày', className: 'object-cover' },
  { src: '/images/img_tree_desktop.jpg', alt: 'Gốc cây Phật thủ bonsai', className: 'object-cover' },
  { src: '/images/camket1.jpg', alt: 'Chứng nhận sản phẩm Phật thủ', className: 'object-cover' },
];

const GalleryLightbox = (): React.ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    setActiveIndex((index) => (index === null ? null : (index - 1 + images.length) % images.length));
  }, []);
  const showNext = useCallback(() => {
    setActiveIndex((index) => (index === null ? null : (index + 1) % images.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, close, showNext, showPrevious]);

  return (
    <>
      <div className="grid min-h-[430px] grid-cols-2 gap-3 sm:grid-cols-[1.65fr_1fr_1fr] sm:grid-rows-2">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Phóng lớn ảnh: ${image.alt}`}
            className={`group relative min-h-[180px] cursor-zoom-in overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#699c3a]/50 ${index === 0 ? 'col-span-2 min-h-[280px] sm:col-span-1 sm:row-span-2' : ''}`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 25vw, 50vw" className={`${image.className} transition-transform duration-300 group-hover:scale-105`} />
            <span className="bg-black/55 absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-white opacity-0 shadow-md backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <Expand size={18} />
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh phóng lớn"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-10"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) close();
          }}
        >
          <button type="button" onClick={close} aria-label="Đóng ảnh" className="bg-white/15 absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/25 sm:right-7 sm:top-7">
            <X size={28} />
          </button>
          <button type="button" onClick={showPrevious} aria-label="Ảnh trước" className="bg-white/15 absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/25 sm:left-7">
            <ChevronLeft size={30} />
          </button>
          <div className="relative h-[80vh] w-[85vw] max-w-6xl">
            <Image src={images[activeIndex].src} alt={images[activeIndex].alt} fill priority sizes="85vw" className="object-contain" />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white sm:bottom-6">
            {activeIndex + 1} / {images.length}
          </div>
          <button type="button" onClick={showNext} aria-label="Ảnh tiếp theo" className="bg-white/15 absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/25 sm:right-7">
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryLightbox;
