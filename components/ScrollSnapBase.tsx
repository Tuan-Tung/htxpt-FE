import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { ReactNode, useCallback, useRef, useState } from 'react';
import Slider from 'react-slick';

import Indicator from '@/components/Indicator';

export type ScrollSnapBaseItem = {
  id?: string | number;
  titleHeader?: string | number;
  content?: ReactNode;
  images?: ImageItemProps;
};

type ScrollSnapBaseProps = {
  isShowButtonHeader: boolean;
  contentSlide: ScrollSnapBaseItem[];
  initialSlice?: number;
  hasIndicator?: boolean;
};

type ImageItemProps = {
  src: string;
  alt: string;
  loader: string;
  width?: number;
  height?: number;
};

const ScrollSnapBase = ({ contentSlide, initialSlice, hasIndicator }: ScrollSnapBaseProps) => {
  const customSlider = useRef<Slider>(null);
  const [index, setIndex] = useState<number>(initialSlice || 0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const handlerBeforeChange = useCallback((_oldIndex: number, newIndex: number) => {
    setIndex(newIndex);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      <Slider
        beforeChange={handlerBeforeChange}
        initialSlide={initialSlice}
        ref={customSlider}
        {...settings}
      >
        {contentSlide?.map((slide: ScrollSnapBaseItem) => {
          return (
            <div key={slide.id} className="box-border w-full rounded-md">
              {slide.content}
            </div>
          );
        })}
      </Slider>
      {hasIndicator && (
        <Indicator dataLength={contentSlide ?? []} index={index} sliderRef={customSlider} />
      )}
    </div>
  );
};

export default ScrollSnapBase;
