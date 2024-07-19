'use client';

import React from 'react';

import Icon from '@/components/Icon';
import { DocsSearch } from '@/components/Search';
import { UserAccountNav } from '@/components/UserAccountNav';
import { SLOGAN_TEXT, WELCOME_TEXT } from '@/constants/header';
import { commonActions } from '@/features/common/commonSlice';
import { RootState, useDispatch, useSelector } from '@/stores/store';

const Header: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { isSideBarDisplay } = useSelector((state: RootState) => state.common);

  const handleOnMenuClick = (): void => {
    if (isSideBarDisplay === true) {
      dispatch(commonActions.setIsSideBarDisplay(false));
    } else {
      dispatch(commonActions.setIsSideBarDisplay(true));
    }
  };
  return (
    <div className="align-center fixed inset-x-0 top-0 z-50 flex h-[72px] w-auto flex-row items-center justify-between bg-primary px-4 md:left-[260px] md:px-[56px]">
      <div className="hidden flex-1 flex-col items-start justify-start text-white lg:flex">
        <h2 className="text-2xl font-bold">{WELCOME_TEXT}</h2>
        <p className="text-sm">{SLOGAN_TEXT}</p>
      </div>
      <div className="hidden cursor-pointer md:flex-1">
        <DocsSearch />
      </div>
      <div className="flex flex-1 justify-between md:justify-end">
        <div onClick={handleOnMenuClick} className="flex items-center md:hidden">
          <Icon name="ic_menu_outline" color="#fff" size={14} />
        </div>
        <UserAccountNav name="khanh" />
      </div>
    </div>
  );
};

export default Header;
