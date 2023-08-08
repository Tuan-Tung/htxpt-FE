import { ICONS } from '@/components/Icon';

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type SideBarItemCode = keyof typeof SIDEBAR_ITEM;

export type SideBarItems = {
  code: string;
  icon: keyof typeof ICONS;
  name: string;
};

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type TIcon = {
  name: keyof typeof ICONS;
  size?: number;
  color?: string;
};

export type AboutCategoriesCode = keyof typeof ABOUT_CATEGORIES_CODE;

export type AboutCategories = {
  code: AboutCategoriesCode;
  image: string;
  label: string;
};

export type CoreValueContentItem = {
  image: string;
  title: string;
  content: string;
};

export type TestReturn = {
  data: {
    message: string;
    success: boolean;
  };
};