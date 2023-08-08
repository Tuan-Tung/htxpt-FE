'use client';

import * as React from 'react';

import Icon from '@/components/Icon';
import { cn } from '@/lib/utils';

interface DocsSearchProps extends React.HTMLAttributes<HTMLFormElement> {}

export function DocsSearch({ className }: DocsSearchProps) {
  return (
    <div
      className={cn(
        'flex h-[40px] w-full cursor-pointer flex-row space-x-[24px] rounded-[8px] bg-white px-[24px] py-[8px] md:w-auto',
        className
      )}
    >
      <Icon name="ic_search_outline" color="#656366" size={24} />
      <input placeholder="Tìm kiếm" className="flex-1 text-clip outline-none" />
      <Icon name="ic_search_filter" color="#656366" size={24} />
    </div>
  );
}
