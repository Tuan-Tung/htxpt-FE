/* eslint-disable tailwindcss/migration-from-tailwind-2 */
'use client';

import { animated, config, useTransition } from '@react-spring/web';
import { X } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import Icon from '@/components/Icon';
import { NAVBAR_ITEMS } from '@/constants/common';
import {
  HELP_CENTER_BUTTON_CONTENT,
  HELP_CENTER_CONTENT_TEXT,
  HELP_CENTER_TITLE_TEXT,
} from '@/constants/sideBar';
import { commonActions } from '@/features/common/commonSlice';
import { cn } from '@/lib/utils';
import { HelpCenter, Logo } from '@/public/images';
import { RootState, useDispatch, useSelector } from '@/stores/store';
import { SideBarItems } from '@/types';

type DashboardNavProps = {
  items: SideBarItems[];
};

// Matches Tailwind's `xl` breakpoint — the sidebar only docks permanently at
// this width and up; below it (including tablets in portrait) it's an
// overlay toggled via the header's menu button.
const DESKTOP_BREAKPOINT = 1280;

const SideBar = ({ items }: DashboardNavProps): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState('');
  const dispatch = useDispatch();

  const { isSideBarDisplay } = useSelector((state: RootState) => state.common);

  const handleLogoClicked = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleClick = (itemCode: string, href: string) => {
    setActiveItem(itemCode.toLowerCase());
    if (window.innerWidth < DESKTOP_BREAKPOINT) {
      dispatch(commonActions.setIsSideBarDisplay(false));
    }
    router.push(href);
  };

  const getHref = (code: string): string => {
    switch (code) {
      case 'ABOUT':
        return '/about/us';
      case 'HOME':
        return '/';
      case 'PRODUCTS':
        return '/products/fruits';
      case 'GARDENERS':
        return '/gardeners/all';
      default:
        return `/${code.toLowerCase()}`;
    }
  };

  const isActive = (itemCode: string, href: string) => {
    if (itemCode === 'HOME') {
      return pathname === '/';
    } else if (itemCode === 'ABOUT') {
      return pathname.includes('/about');
    } else {
      return pathname.includes(href);
    }
  };

  const activeIndex = NAVBAR_ITEMS.findIndex((item) => isActive(item.code, getHref(item.code)));

  useLayoutEffect(() => {
    if (activeIndex !== -1) {
      setActiveItem(NAVBAR_ITEMS[activeIndex].code.toLowerCase());
      return;
    }
    const currentPath = pathname.split('/')[1];
    const matchedItem = NAVBAR_ITEMS.find((item) =>
      currentPath === '' ? item.code === 'HOME' : currentPath.includes(item.code.toLowerCase())
    );
    if (matchedItem) {
      setActiveItem(matchedItem.code.toLowerCase());
    }
  }, [activeIndex, pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        dispatch(commonActions.setIsSideBarDisplay(true));
      } else {
        dispatch(commonActions.setIsSideBarDisplay(false));
      }
    };

    window.addEventListener('resize', handleResize);
    requestAnimationFrame(handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const transitions = useTransition(isSideBarDisplay, {
    from: { transform: 'translateX(-100%)', opacity: 0 },
    enter: { transform: 'translateX(0%)', opacity: 1 },
    leave: { transform: 'translateX(-100%)', opacity: 0 },
    config: config.stiff,
    immediate: window.innerWidth >= DESKTOP_BREAKPOINT
  });

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className={cn(
                `fixed inset-y-0 left-0 z-[60] flex h-screen w-full flex-col border-r border-border_soft bg-white xl:w-[260px]`
              )}
            >
              <div className="relative flex items-center justify-center border-b border-border_soft py-6">
                <Image
                  src={Logo.src}
                  alt="logo"
                  width={120}
                  height={46}
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={handleLogoClicked}
                />
                <button
                  type="button"
                  aria-label="Đóng menu"
                  onClick={() => dispatch(commonActions.setIsSideBarDisplay(false))}
                  className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-dark_grey transition-colors hover:bg-primary_light hover:text-primary xl:hidden"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="relative flex flex-1 flex-col justify-start overflow-y-auto px-4 py-6 text-[14px] font-semibold text-dark_grey">
                {items.map((item: SideBarItems) => {
                  const active = activeItem === item.code.toLowerCase();
                  return (
                    <div
                      key={item.code}
                      onClick={() => handleClick(item.code, getHref(item.code))}
                      className={cn(
                        'group mb-1 flex shrink-0 cursor-pointer items-center gap-3 rounded-xl px-4 py-[10px] transition-colors duration-200 hover:text-primary',
                        active ? 'bg-primary_light text-primary' : ''
                      )}
                    >
                      <div
                        className={cn(
                          'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors',
                          active ? 'bg-white shadow-soft' : 'group-hover:bg-white'
                        )}
                      >
                        <Icon name={item.icon} size={20} />
                      </div>
                      <div className="leading-[20px]">{item.name}</div>
                    </div>
                  );
                })}
              </div>
              <div className="p-5">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-primary_light to-white p-5 text-center shadow-soft">
                  <div
                    className="mx-auto mb-4 h-24 w-24 bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${HelpCenter.src})` }}
                  />
                  <div className="mb-1 text-[14px] font-bold text-dark_grey">
                    {HELP_CENTER_TITLE_TEXT}
                  </div>
                  <div className="mb-4 text-[13px] font-normal leading-relaxed text-dark_grey/70">
                    {HELP_CENTER_CONTENT_TEXT}
                  </div>
                  <div className="mx-auto w-fit cursor-pointer rounded-full bg-primary px-5 py-2 text-[13px] font-semibold text-white shadow-soft transition-colors hover:bg-primary_dark">
                    {HELP_CENTER_BUTTON_CONTENT}
                  </div>
                </div>
              </div>
            </animated.div>
          )
      )}
      {isSideBarDisplay && window.innerWidth < DESKTOP_BREAKPOINT && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => dispatch(commonActions.setIsSideBarDisplay(false))}
        />
      )}
    </>
  );
};

export default SideBar;