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
                `fixed inset-y-0 left-0 z-50 h-screen w-full flex-col space-y-[54px] bg-white md:w-[260px]`
              )}
            >
              <div className="flex items-center justify-center py-2">
                <Image
                  src={Logo.src}
                  alt="logo"
                  width={129}
                  height={49}
                  onClick={handleLogoClicked}
                />
              </div>
              <div className="relative flex flex-col text-[14px] font-bold text-dark_grey">
                <div
                  className="absolute left-0 h-[40px] w-[5px] bg-primary transition-all duration-500 ease-in-out"
                  style={{ top: `${indicatorOffset}px` }}
                />
                {items.map((item: SideBarItems, index: number) => (
                  <div
                    key={item.code}
                    onClick={() => handleClick(item.code, getHref(item.code))}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className={`flex cursor-pointer items-center gap-[24px] px-[24px] py-[8px] hover:text-primary ${
                      activeItem === item.code.toLowerCase() ? 'text-primary' : ''
                    }`}
                  >
                    <div className="w-[24px]">
                      <Icon name={item.icon} size={24} />
                    </div>
                    <div className="leading-[20px]">{item.name}</div>
                  </div>
                ))}
              </div>
              <div className="p-9">
                <div
                  className="relative h-72 w-full bg-contain bg-center bg-no-repeat text-center text-[14px]"
                  style={{ backgroundImage: `url(${HelpCenter.src})` }}
                >
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/3 flex-col gap-[18px] text-[14px]">
                    <div className="font-bold text-black">{HELP_CENTER_TITLE_TEXT}</div>
                    <div className="text-dark-grey font-normal">{HELP_CENTER_CONTENT_TEXT}</div>
                    <div className="m-auto cursor-pointer overflow-ellipsis whitespace-nowrap rounded-lg bg-white p-3 font-semibold text-black">
                      {HELP_CENTER_BUTTON_CONTENT}
                    </div>
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