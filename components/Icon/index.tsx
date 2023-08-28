'use client';

import IcAvatarDefaultIcon from '@/components/Icon/IcAvatarDefaultIcon';
import IcBackwardArrow from '@/components/Icon/IcBackwardArrow';
import IcCardCategoryOutline from '@/components/Icon/IcCardCategoryOutline';
import IcCheckedBox from '@/components/Icon/IcCheckedBox';
import IcCubeOutline from '@/components/Icon/IcCubeOutline';
import IcDollarSign from '@/components/Icon/IcDollarSign';
import IcEyeOffOutline from '@/components/Icon/IcEyeOffOutline';
import IcEyeOutline from '@/components/Icon/IcEyeOutline';
import IcFieldError from '@/components/Icon/IcFieldError';
import IcForwardArrow from '@/components/Icon/IcForwardArrow';
import IcFruitOutline from '@/components/Icon/IcFruitOutline';
import IcGridOutline from '@/components/Icon/IcGridOutline';
import IcBrowserOutline from '@/components/Icon/IcGroupOutline';
import IcHeartFill from '@/components/Icon/IcHeartFill';
import IcHeartOutline from '@/components/Icon/IcHeartOutline';
import IcHomeOutline from '@/components/Icon/IcHomeOutline';
import IcLayerOutline from '@/components/Icon/IcLayerOutline';
import IcLayoutOutline from '@/components/Icon/IcLayoutOutline';
import IcLocationOutline from '@/components/Icon/IcLocationOutline';
import IcMenuOutline from '@/components/Icon/IcMenuOutline';
import IcMessageOutline from '@/components/Icon/IcMessageOutline';
import IcMessageSquareOutline from '@/components/Icon/IcMessageSquareOutline';
import IcMoreGridBig from '@/components/Icon/IcMoreGridBig';
import IcNotificationOutline from '@/components/Icon/IcNotificationOutline';
import IcPhoneOutline from '@/components/Icon/IcPhoneOutline';
import IcRadioFill from '@/components/Icon/IcRadioFill';
import IcSearchFilter from '@/components/Icon/IcSearchFilter';
import IcSearchOutline from '@/components/Icon/IcSearchOutline';
import IcSettingOutline from '@/components/Icon/IcSettingOutline';
import IcShareOutline from '@/components/Icon/IcShareOutline';
import IcStarOutline from '@/components/Icon/IcStarOutline';
import IcStar from '@/components/Icon/IcStart';
import IcStatusOutline from '@/components/Icon/IcStatusOutline';
import IcTreesOutline from '@/components/Icon/IcTreesOutline';
import IcUnCheckedBox from '@/components/Icon/IcUnCheckedBox';
import IcUserCheckOutline from '@/components/Icon/IcUserCheckOutline';
import IcUserOutline from '@/components/Icon/IcUserOutline';
import { TIcon } from '@/types';

export const ICONS = {
  ic_eye_outline: IcEyeOutline,
  ic_eye_off_outline: IcEyeOffOutline,
  ic_field_error: IcFieldError,
  ic_user_outline: IcUserOutline,
  ic_share_outline: IcShareOutline,
  ic_setting_outline: IcSettingOutline,
  ic_notification_outline: IcNotificationOutline,
  ic_message_outline: IcMessageOutline,
  ic_layout_outline: IcLayoutOutline,
  ic_layer_outline: IcLayerOutline,
  ic_heart_fill: IcHeartFill,
  ic_browser_outline: IcBrowserOutline,
  ic_grid_outline: IcGridOutline,
  ic_forward_arrow: IcForwardArrow,
  ic_backward_arrow: IcBackwardArrow,
  ic_cube_outline: IcCubeOutline,
  ic_home_outline: IcHomeOutline,
  ic_menu_outline: IcMenuOutline,
  ic_checked_box: IcCheckedBox,
  ic_unchecked_box: IcUnCheckedBox,
  ic_heart_outline: IcHeartOutline,
  ic_location_outline: IcLocationOutline,
  ic_phone_outline: IcPhoneOutline,
  ic_card_category_outline: IcCardCategoryOutline,
  ic_star: IcStar,
  ic_search_filter: IcSearchFilter,
  ic_search_outline: IcSearchOutline,
  ic_fruit_outline: IcFruitOutline,
  ic_trees_outline: IcTreesOutline,
  ic_user_check_outline: IcUserCheckOutline,
  ic_star_outline: IcStarOutline,
  ic_message_square_outline: IcMessageSquareOutline,
  ic_more_grid_big: IcMoreGridBig,
  ic_radio_fill: IcRadioFill,
  ic_status_outline: IcStatusOutline,
  ic_dollar_sign: IcDollarSign,
  ic_avatar_icon: IcAvatarDefaultIcon,
} as const;

const Icon = ({ name, size = 24, color = 'currentColor', ...props }: TIcon) => {
  const IconComponent = ICONS[name];
  return IconComponent ? (
    <div className={`w-[ flex${size}px] h-[${size}px] items-center justify-center`}>
      <IconComponent size={size} name={name} color={color} {...props} />
    </div>
  ) : null;
};

export default Icon;
