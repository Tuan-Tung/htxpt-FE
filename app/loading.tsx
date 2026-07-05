import React from 'react';

import { Skeleton } from '@/components/ui/Skeleton';

const Loading = () => {
  return (
    <div className="space-y-8">
      <Skeleton className="h-40 w-full rounded-2xl bg-gray-200 sm:h-56" />
      <div className="space-y-4">
        <Skeleton className="h-8 w-48 bg-gray-200" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card">
              <Skeleton className="aspect-square w-full rounded-none bg-gray-200" />
              <div className="space-y-2 p-4">
                <Skeleton className="h-4 w-2/3 bg-gray-200" />
                <Skeleton className="h-3 w-full bg-gray-200" />
                <Skeleton className="h-3 w-1/2 bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
