import { ICONS } from '@/components/Icon';

type AuthenMethod = 'local' | 'google';

export type USER_ROLES = {
  SUPER_ADMIN: 'super_admin';
  CUSTOMER: 'customer';
  GARDENER: 'gardener';
  ADMIN: 'admin';
};

export type GENDER = {
  Male: 'Male';
  Female: 'Female';
  Other: 'Other';
};

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

export type TGardener = {
  _id: string;
  email?: string;
  first_name: string;
  user_name?: string;
  middle_name?: string;
  last_name: string;
  date_of_birth?: Date;
  phone?: string;
  avatar?: string;
  image?: string;
  address?: string;
  age?: number;
  gender?: GENDER;
  password?: string;
  reset_token?: string;
  rating_avg?: number;
  rating_quantity?: number;
  product_category?: string[];
  response_rate?: number;
  role?: USER_ROLES;
  fruits?: Fruit[];
  bonsai?: Bonsai[];
  location?: string;
  email_verified?: boolean;
  phone_verified?: boolean;
  authen_method?: string;
  device_sessions?: TDeviceSession[];
};

type TFruitCategory = {
  category_name: string;
  range_price: number[];
  shape: string[];
  diameter: number[];
  weight: number[];
  quantity?: number;
  fruits?: TFruit[];
  _id?: string;
};

export type TFruit = {
  fruit_name: string;
  quantity: number;
  range_price: number[];
  shape: string[];
  diameter: number[];
  weight: number[];
  gardens?: TGardener;
  fruit_categories?: TFruitCategory;
  fruit_images?: TFruitImage[];
  _id?: string;
};

export type TBonsai = {
  tree_name: string;
  description: string;
  quantity: number;
  gardens: TGardener;
  bonsaiImageIds: string[];
};

export type TDeviceSession = {
  device_id: string;
  name: string;
  ua: string;
  refresh_token: string;
  expired_at: Date;
  ip_address: string;
  customer?: TCustomer;
  gardener?: TGardener;
  admin?: TAdmin;
  super_admin?: TAdmin;
  _id?: string;
};

export type TFruitImage = {
  url: string;
  public_id: string;
  _id?: string;
};

type TAdmin = {
  email: string;
  user_name: string;
  password: string;
  role: USER_ROLES;
  email_verified?: boolean;
  phone_verified?: boolean;
  device_sessions?: string[];
  _id?: string;
};

type TCustomer = {
  email?: string;
  first_name?: string;
  user_name?: string;
  middle_name?: string;
  last_name: string;
  date_of_birth?: Date;
  phone?: string;
  avatar?: string;
  address?: string;
  age?: number;
  gender?: GENDER;
  role: USER_ROLES;
  email_verified?: boolean;
  phone_verified?: boolean;
  authen_method?: AuthenMethod;
  device_sessions?: string[];
  _id?: string;
};
