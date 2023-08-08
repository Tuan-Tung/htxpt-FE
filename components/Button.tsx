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
      ? 'px-2 py-1 text-base font-medium'
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
        ? 'bg-white py-0 px-[10px] text-primary justify-start'
        : 'py-0 px-[10px] bg-white text-dark-grey justify-start'
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
          width={43}
          height={43}
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
          isActive ? 'text-primary-button font-bold' : 'text-dark-grey font-normal'
        } justify-center text-[16px]`}
      >
        {children}
      </div>
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
