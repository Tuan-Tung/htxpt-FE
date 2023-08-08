/* eslint-disable tailwindcss/migration-from-tailwind-2 */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import Icon from '@/components/Icon';
import { NAVBAR_ITEMS } from '@/constants/common';
import {
  HELP_CENTER_BUTTON_CONTENT,
  HELP_CENTER_CONTENT_TEXT,
  HELP_CENTER_TITLE_TEXT,
} from '@/constants/sideBar';
import { HelpCenter, Logo } from '@/public/images';
import { SideBarItems } from '@/types';

type DashboardNavProps = {
  items: SideBarItems[];
};

const SideBar = ({ items }: DashboardNavProps): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState('home');
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const handleLogoClicked = useCallback(() => {
    router.push('/');
  }, [router]);

  const getHref = (code: string): string => {
    if (code === 'ABOUT') return '/about/htx-phat-thu';
    if (code === 'HOME') return '/';
    return `/${code.toLowerCase()}`;
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

  useEffect(() => {
    if (activeIndex !== -1) {
      const activeNavbarItem = NAVBAR_ITEMS[activeIndex];
      setActiveItem(activeNavbarItem.code.toLowerCase());
      const activeItemRef = itemRefs.current[activeIndex];
      if (activeItemRef) {
        setIndicatorOffset(activeItemRef.offsetTop);
      }
    }
  }, [activeIndex]);

  return (
    <nav className="fixed inset-y-0 left-0 z-50 hidden h-screen w-[260px] flex-col space-y-[54px] bg-white md:flex">
      <div className="flex items-center justify-center py-2">
        <Image src={Logo.src} alt="logo" width={129} height={49} onClick={handleLogoClicked} />
      </div>
      <div className="relative flex flex-col text-[14px] font-bold text-dark_grey">
        <div
          className="absolute left-0 h-[40px] w-[5px] bg-primary transition-all duration-500 ease-in-out"
          style={{ top: `${indicatorOffset}px` }}
        />
        {items.map((item: SideBarItems, index: number) => (
          <Link
            href={
              item.code === 'ABOUT'
                ? '/about/us'
                : item.code === 'HOME'
                ? '/'
                : item.code === 'PRODUCTS'
                ? '/products/fruits'
                : item.code === 'GARDENERS'
                ? '/gardeners/all'
                : `/${item.code.toLowerCase()}`
            }
            key={item.code}
            legacyBehavior
          >
            <a>
              <div
                ref={(el) => (itemRefs.current[index] = el)}
                className={`flex cursor-pointer items-center gap-[24px] px-[24px] py-[8px] hover:text-primary ${
                  activeItem === item.code.toLocaleLowerCase() ? 'text-primary' : ''
                }`}
              >
                <div className="w-[24px]">
                  <Icon name={item.icon} size={24} />
                </div>
                <div className="leading-[20px]">{item.name}</div>
              </div>
            </a>
          </Link>
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
            <div className="m-auto w-10/12 cursor-pointer overflow-ellipsis whitespace-nowrap rounded-lg bg-white p-3 font-semibold text-black">
              {HELP_CENTER_BUTTON_CONTENT}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
