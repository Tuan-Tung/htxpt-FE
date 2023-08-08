import React from 'react';
import Slider from 'react-slick';

import { ScrollSnapBaseItem } from '@/components/ScrollSnapBase';

type IndicatorProps = {
  dataLength: ScrollSnapBaseItem[];
  index: number;
  sliderRef: React.RefObject<Slider>;
};

const Indicator = ({ dataLength, index, sliderRef }: IndicatorProps) => {
  return (
    <div className="absolute bottom-2.5 left-1/2 mt-2 flex -translate-x-1/2 items-center justify-center space-x-2">
      {dataLength?.map((_e, idx) => (
        <div
          key={idx}
          className={` cursor-pointer rounded-full ${
            idx === index
              ? 'transition-width h-[6px] w-[24px] rounded-md bg-white duration-300'
              : 'h-[6px] w-[6px] bg-white'
          }`}
          onClick={() => sliderRef.current?.slickGoTo(idx)}
        />
      ))}
    </div>
  );
};

export default Indicator;
