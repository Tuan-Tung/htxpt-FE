'use client';

import React from 'react';

import Icon from '@/components/Icon';
import { DocsSearch } from '@/components/Search';
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
    <div className="fixed inset-x-0 top-0 z-50 flex h-[72px] w-auto flex-row items-center justify-between bg-gradient-to-r from-primary to-primary_dark px-4 shadow-[0_2px_16px_rgba(31,41,20,0.15)] xl:left-[260px] xl:px-[56px]">
      <div className="hidden flex-1 flex-col items-start justify-start text-white lg:flex">
        <h2 className="text-2xl font-bold tracking-tight">{WELCOME_TEXT}</h2>
        <p className="text-sm text-white/80">{SLOGAN_TEXT}</p>
      </div>
      <div className="hidden cursor-pointer md:flex-1 md:max-w-[420px]">
        <DocsSearch />
      </div>
      <div className="flex flex-1 justify-between xl:justify-end">
        <div onClick={handleOnMenuClick} className="flex cursor-pointer items-center xl:hidden">
          <Icon name="ic_menu_outline" color="#fff" size={14} />
          <h2 className="ml-2 text-lg font-bold text-white lg:hidden">{WELCOME_TEXT}</h2>
        </div>
        {/* <UserAccountNav name="khanh" /> */}
      </div>
    </div>
  );
};

export default Header;
