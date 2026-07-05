import { Blog } from '@/types/mock';
import Image from 'next/image';
import React from 'react';

export type BlogCardProp = Blog & {
  // onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const BlogCard = ({
  title,
  short_description,
  image,
  // onClick,
}: BlogCardProp): React.ReactElement => {
  return (
    <div
      className="group flex h-[125px] w-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
      // onClick={onClick}
    >
      <div className="relative h-full w-1/2 shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex w-1/2 flex-1 flex-col justify-center p-4">
        <div className="truncate-ellipsis mb-2 max-h-[2.4rem] overflow-hidden font-bold transition-colors group-hover:text-primary">
          {title}
        </div>
        <div className="truncate-ellipsis-2-line max-h-[3.6rem] overflow-hidden text-sm text-gray-500">
          {short_description}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
