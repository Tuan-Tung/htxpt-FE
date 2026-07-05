import React from 'react';

import { Skeleton } from '@/components/ui/Skeleton';

export const GardenerCardSkeleton = (): React.ReactElement => (
  <div className="flex flex-col items-center rounded-2xl bg-white p-4 text-center shadow-card sm:p-5">
    <Skeleton className="h-20 w-20 rounded-full bg-gray-200 sm:h-24 sm:w-24" />
    <Skeleton className="mt-3 h-5 w-2/3 bg-gray-200" />
    <div className="mt-3 flex w-full flex-col items-center gap-2">
      <Skeleton className="h-3 w-4/5 bg-gray-200" />
      <Skeleton className="h-3 w-3/5 bg-gray-200" />
      <Skeleton className="h-3 w-2/3 bg-gray-200" />
    </div>
  </div>
);

export const ProductCardSkeleton = (): React.ReactElement => (
  <div className="flex max-w-sm flex-col overflow-hidden rounded-2xl bg-white shadow-card">
    <div className="aspect-w-1 aspect-h-1 relative w-full">
      <Skeleton className="absolute inset-0 h-full w-full rounded-none bg-gray-200" />
    </div>
    <div className="flex flex-col items-start gap-2 px-5 py-4">
      <Skeleton className="h-5 w-2/3 bg-gray-200" />
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-3 w-4/5 bg-gray-200" />
        <Skeleton className="h-3 w-3/5 bg-gray-200" />
        <Skeleton className="h-3 w-2/3 bg-gray-200" />
        <Skeleton className="h-3 w-3/4 bg-gray-200" />
      </div>
    </div>
  </div>
);

export const BlogCardSkeleton = (): React.ReactElement => (
  <div className="flex h-44 w-full overflow-hidden rounded-2xl bg-white shadow-card">
    <Skeleton className="h-full w-1/2 shrink-0 rounded-none bg-gray-200" />
    <div className="flex w-1/2 flex-1 flex-col justify-center gap-2 p-4">
      <Skeleton className="h-4 w-4/5 bg-gray-200" />
      <Skeleton className="h-3 w-full bg-gray-200" />
      <Skeleton className="h-3 w-2/3 bg-gray-200" />
    </div>
  </div>
);
