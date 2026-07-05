import Image from 'next/image';
import React from 'react';

import Icon, { ICONS } from '@/components/Icon';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'contained' | 'outlined' | 'text' | 'icon' | 'image';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonRadius = 'none' | 'normal' | 'full';
export type InputType = 'text' | 'password' | 'number' | 'email' | 'tel';
export type LabelSide = 'left' | 'right';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: keyof typeof ICONS;
  image?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  fullWidth?: boolean;
  borderRadius?: ButtonRadius;
  shadow?: boolean;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: ButtonProps): React.ReactElement => {
  const {
    icon,
    image,
    children,
    size,
    variant,
    fullWidth,
    shadow,
    isActive,
    borderRadius,
    onClick,
    className,
    ...otherProps
  } = props;

  const sizeClasses =
    size === 'sm'
      ? 'px-1 py-0.5 text-sm font-light'
      : size === 'md'
      ? 'px-2 py-1 text-lg font-medium'
      : size === 'lg'
      ? 'px-3 py-2 text-lg font-semibold'
      : size === 'xl'
      ? 'px-4 py-3 text-xl font-bold'
      : '';

  const variantClasses =
    variant === 'contained'
      ? 'bg-primary text-white'
      : variant === 'outlined'
      ? 'bg-white border border-primary text-primary hover:bg-gray-100'
      : variant === 'text'
      ? isActive
        ? 'bg-transparent text-primary'
        : 'bg-transparent text-dark-grey'
      : variant === 'icon'
      ? isActive
        ? 'bg-white text-primary'
        : 'bg-white text-dark-grey px-3'
      : variant === 'image'
      ? isActive
        ? 'flex-col gap-1 bg-primary_light py-2 px-[10px] text-primary'
        : 'flex-col gap-1 py-2 px-[10px] bg-white text-dark-grey'
      : '';

  const borderRadiusClasses =
    borderRadius === 'full'
      ? 'rounded-full'
      : borderRadius === 'normal'
      ? 'rounded-lg'
      : 'rounded-none';

  const shadowClasses = shadow ? 'shadow-lg' : '';
  const fullWidthClasses = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button
      className={cn(
        `flex items-center justify-center transition-opacity duration-200 ${sizeClasses} ${variantClasses} ${borderRadiusClasses} ${shadowClasses} ${fullWidthClasses}`,
        className
      )}
      onClick={onClick}
      {...otherProps}
    >
      {image && (
        <Image
          src={image}
          alt={image}
          width={variant === 'image' ? 32 : 43}
          height={variant === 'image' ? 32 : 43}
          className={isActive ? '' : 'opacity-50'}
        />
      )}
      {icon && (
        <div className={`h-6 ${sizeClasses}`}>
          <Icon size={Number(size)} name={icon} color="black" />
        </div>
      )}
      <div
        className={`flex flex-1 items-center ${
          isActive ? 'font-bold' : 'font-normal'
        } justify-center text-center ${variant === 'image' ? 'text-[11px] leading-tight sm:text-[16px]' : 'text-[16px]'}`}
      >
        {children}
      </div>
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
