import { Blog } from '@/types/mock';
import Image from 'next/image';
import React, { useState } from 'react';

import { Skeleton } from '@/components/ui/Skeleton';

export type BlogCardProp = Blog & {
  // onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export { BlogCardSkeleton } from '@/components/CardSkeletons';

const BlogCard = ({
  title,
  short_description,
  image,
  // onClick,
}: BlogCardProp): React.ReactElement => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="group w-full cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
      // onClick={onClick}
    >
      <div className="flex min-h-[7rem] overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 group-hover:shadow-card-hover">
        <div className="relative w-2/5 shrink-0 overflow-hidden bg-gray-100">
          {!loaded && <Skeleton className="absolute inset-0 h-full w-full rounded-none bg-gray-200" />}
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-all duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="flex w-3/5 flex-1 flex-col justify-center gap-1 p-4">
          <div className="font-bold text-primary_green transition-colors group-hover:text-primary">
            {title}
          </div>
          <div className="truncate-ellipsis-2-line text-sm text-gray-500">{short_description}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
