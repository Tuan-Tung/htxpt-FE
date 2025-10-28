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
      className="flex max-h-[125px] w-full cursor-pointer overflow-hidden rounded-lg bg-white shadow-md"
      // onClick={onClick}
    >
      <div className="w-1/2 shrink-0">
        <Image src={image} alt={title} layout="responsive" width={1} height={1} objectFit="cover" />
      </div>
      <div className="flex w-1/2 flex-1 flex-col justify-center p-4">
        <div className="truncate-ellipsis mb-2 max-h-[2.4rem] overflow-hidden font-bold">{title}</div>
        <div className="truncate-ellipsis-2-line max-h-[3.6rem] overflow-hidden text-gray-500">
          {short_description}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
