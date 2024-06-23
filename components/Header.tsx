'use client';

import React from 'react';

import { DocsSearch } from '@/components/Search';
import { UserAccountNav } from '@/components/UserAccountNav';
import { SLOGAN_TEXT, WELCOME_TEXT } from '@/constants/header';
import Icon from '@/components/Icon';

const Header: React.FC = (): React.ReactElement => {
  return (
    <div className="align-center fixed left-0 md:left-[260px] right-0 top-0 z-50 flex h-[72px] w-auto flex-row items-center justify-between bg-primary px-4 md:px-[56px]">
      <div className="hidden lg:flex flex-1 flex-col items-start justify-start text-white">
        <h2 className="text-2xl font-bold">{WELCOME_TEXT}</h2>
        <p className="text-sm">{SLOGAN_TEXT}</p>
      </div>
      <div className="hidden md:flex-1">
        <DocsSearch />
      </div>
      <div className="flex flex-1 justify-between md:justify-end">
        <div className="flex md:hidden items-center">
          <Icon name="ic_menu_outline" color="#fff" size={14} />
        </div>
        <UserAccountNav name="khanh" />
      </div>
    </div>
  );
};

export default Header;
