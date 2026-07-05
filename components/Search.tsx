'use client';

import * as React from 'react';

import Icon from '@/components/Icon';
import { cn } from '@/lib/utils';

interface DocsSearchProps extends React.HTMLAttributes<HTMLFormElement> {}

export function DocsSearch({ className }: DocsSearchProps) {
  return (
    <div
      className={cn(
        'flex h-[42px] w-full cursor-pointer flex-row items-center space-x-[16px] rounded-full bg-white/95 px-[20px] py-[8px] shadow-soft transition-shadow focus-within:shadow-card-hover md:w-auto',
        className
      )}
    >
      <Icon name="ic_search_outline" color="#656366" size={20} />
      <input placeholder="Tìm kiếm" className="flex-1 text-clip text-sm outline-none" />
      <Icon name="ic_search_filter" color="#656366" size={20} />
    </div>
  );
}
