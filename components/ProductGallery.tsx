'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

const ProductGallery = ({ images, alt }: ProductGalleryProps): React.ReactElement => {
  const sliderRef = useRef<Slider>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: images.length > 1,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: images.length > 1,
    beforeChange: (_current: number, next: number) => setActiveIndex(next),
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card">
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, i) => (
          <div key={i} className="relative h-72 sm:h-96 lg:h-[520px]">
            <Image src={src} alt={`${alt} - ảnh ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </Slider>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto p-3">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => sliderRef.current?.slickGoTo(i)}
              className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg ring-2 transition-all sm:h-16 sm:w-16 ${
                activeIndex === i
                  ? 'ring-primary_blue'
                  : 'opacity-70 ring-transparent hover:opacity-100'
              }`}
            >
              <Image src={src} alt={`${alt} thumbnail ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
