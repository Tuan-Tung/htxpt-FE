import { About, Commit, History, Human_Resources, Strategy, System } from '@/public/images';
import { AboutCategories, SideBarItems } from '@/types';

export const GARDENER_TITLE = 'Nhà vườn';
export const FRUIT_TITLE = 'Phân Loại Quả';
export const BLOG_TITLE = 'Bài viết mới nhất';
export const TREE_TITLE = 'Phân Loại Quả';
export const EMPTY_PAGE_TEXT = 'Chưa có thông tin';

export const SIDEBAR_ITEM = {
  HOME: 'Trang chủ',
  ABOUT: 'Giới thiệu',
  'FRUIT-INFORMATION': 'Quả phật thủ',
  GARDENERS: 'Nhà vườn',
  PRODUCTS: 'Danh mục sản phẩm',
  BLOG: 'Tin tức & Sự kiện',
} as const;

export const ABOUT_CATEGORIES_CODE = {
  US: 'Về Hợp Tác Xã',
  HISTORY: 'Lịch sử',
  STRATEGY: 'Chiến lược',
  SYSTEM: 'Hệ thống',
  'HUMAN-RESOURCES': 'Nhân sự',
  COMMIT: 'Cam kết',
} as const;

export const PRODUCT_STATUS = {
  AVAILABLE: 'Còn hàng',
  OUT_OF_STOCK: 'Hết hàng',
  NEW: 'Mới',
  ON_SALE: 'Giảm giá',
  COMING_SOON: 'Sắp có hàng',
  BESTSELLER: 'Bán chạy',
  SPECIAL: 'Đặc biệt',
  DAMAGED: 'Hỏng',
  USED: 'Đã qua sử dụng',
  ORDERED: 'Đã đặt hàng',
} as const;

export type ProductStatusCode = keyof typeof PRODUCT_STATUS;

export const NAVBAR_ITEMS: SideBarItems[] = [
  {
    code: 'HOME',
    icon: 'ic_home_outline',
    name: SIDEBAR_ITEM['HOME'],
  },
  {
    code: 'ABOUT',
    icon: 'ic_browser_outline',
    name: SIDEBAR_ITEM['ABOUT'],
  },
  {
    code: 'FRUIT-INFORMATION',
    icon: 'ic_cube_outline',
    name: SIDEBAR_ITEM['FRUIT-INFORMATION'],
  },
  {
    code: 'GARDENERS',
    icon: 'ic_grid_outline',
    name: SIDEBAR_ITEM['GARDENERS'],
  },
  {
    code: 'PRODUCTS',
    icon: 'ic_layer_outline',
    name: SIDEBAR_ITEM['PRODUCTS'],
  },
  {
    code: 'BLOG',
    icon: 'ic_layout_outline',
    name: SIDEBAR_ITEM['BLOG'],
  },
];

export const ABOUT_BUTTON_CONTENT: AboutCategories[] = [
  {
    code: 'US',
    image: About.src,
    label: ABOUT_CATEGORIES_CODE['US'],
  },
  {
    code: 'HISTORY',
    image: History.src,
    label: ABOUT_CATEGORIES_CODE['HISTORY'],
  },
  {
    code: 'STRATEGY',
    image: Strategy.src,
    label: ABOUT_CATEGORIES_CODE['STRATEGY'],
  },
  {
    code: 'SYSTEM',
    image: System.src,
    label: ABOUT_CATEGORIES_CODE['SYSTEM'],
  },
  {
    code: 'HUMAN-RESOURCES',
    image: Human_Resources.src,
    label: ABOUT_CATEGORIES_CODE['HUMAN-RESOURCES'],
  },
  {
    code: 'COMMIT',
    image: Commit.src,
    label: ABOUT_CATEGORIES_CODE['COMMIT'],
  },
];
