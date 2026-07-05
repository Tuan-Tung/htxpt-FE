/* eslint-disable tailwindcss/migration-from-tailwind-2 */
'use client';

import { animated, config, useTransition } from '@react-spring/web';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useLayoutEffect,useRef, useState } from 'react';

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

const SideBar = ({ items }: DashboardNavProps): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState('');
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const dispatch = useDispatch();

  const { isSideBarDisplay } = useSelector((state: RootState) => state.common);

  const handleLogoClicked = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleClick = (itemCode: string, href: string) => {
    setActiveItem(itemCode.toLowerCase());
    if (window.innerWidth < 768) {
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
    const getActiveItemFromPath = () => {
      const currentPath = pathname.split('/')[1];
      const activeItem = NAVBAR_ITEMS.find((item) =>
        currentPath === '' ? item.code === 'HOME' : currentPath.includes(item.code.toLowerCase())
      );
      if (activeItem) {
        setActiveItem(activeItem.code.toLowerCase());
      }
    };
    const getActiveOffset = () => {
      if (activeIndex !== -1) {
        const activeNavbarItem = NAVBAR_ITEMS[activeIndex];
        setActiveItem(activeNavbarItem.code.toLowerCase());
        const activeItemRef = itemRefs.current[activeIndex];

        if (activeItemRef) {
          setIndicatorOffset(activeItemRef.offsetTop);
        }
      }
    };

    getActiveOffset();
    getActiveItemFromPath();
  }, [activeIndex, pathname]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        dispatch(commonActions.setIsSideBarDisplay(true));
      } else {
        dispatch(commonActions.setIsSideBarDisplay(false));
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  useLayoutEffect(() => {
    if (activeIndex !== -1) {
      const activeItemRef = itemRefs.current[activeIndex];
      if (activeItemRef) {
        setIndicatorOffset(activeItemRef.offsetTop);
      }
    }
  }, [activeIndex]);
  useEffect(() => {
    const updateIndicatorOffset = () => {
      if (activeIndex !== -1) {
        const activeItemRef = itemRefs.current[activeIndex];
        if (activeItemRef) {
          setIndicatorOffset(activeItemRef.offsetTop);
        }
      }
    };
  
    requestAnimationFrame(updateIndicatorOffset);
  }, [activeIndex, itemRefs]);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
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
    immediate: window.innerWidth >= 768 
  });

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className={cn(
                `fixed inset-y-0 left-0 z-50 flex h-screen w-full flex-col border-r border-border_soft bg-white md:w-[260px]`
              )}
            >
              <div className="flex items-center justify-center border-b border-border_soft py-6">
                <Image
                  src={Logo.src}
                  alt="logo"
                  width={120}
                  height={46}
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={handleLogoClicked}
                />
              </div>
              <div className="relative flex flex-1 flex-col justify-start overflow-y-auto px-4 py-6 text-[14px] font-semibold text-dark_grey">
                <div
                  className="absolute left-4 right-4 h-10 rounded-xl bg-primary_light transition-all duration-300 ease-out"
                  style={{ top: `${indicatorOffset}px` }}
                />
                {items.map((item: SideBarItems, index: number) => {
                  const active = activeItem === item.code.toLowerCase();
                  return (
                    <div
                      key={item.code}
                      onClick={() => handleClick(item.code, getHref(item.code))}
                      ref={(el) => (itemRefs.current[index] = el)}
                      className={cn(
                        'group relative z-10 mb-1 flex shrink-0 cursor-pointer items-center gap-3 rounded-xl px-4 py-[10px] transition-colors duration-200 hover:text-primary',
                        active ? 'text-primary' : ''
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
      {isSideBarDisplay && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => dispatch(commonActions.setIsSideBarDisplay(false))}
        />
      )}
    </>
  );
};

export default SideBar;