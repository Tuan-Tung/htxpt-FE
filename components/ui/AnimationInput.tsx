'use client';

import React, { InputHTMLAttributes, useState } from 'react';

import Icon, { ICONS } from '@/components/Icon';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  errors?: boolean;
  errorMessage?: string;
  icon?: keyof typeof ICONS;
  showIcon?: keyof typeof ICONS;
  value?: string;
  isShowPassword?: boolean;
  onIconClick?: React.MouseEventHandler<HTMLElement>;
};

const AnimationInput = ({
  id,
  label,
  type = 'text',
  errors,
  icon,
  showIcon,
  onChange,
  isShowPassword,
  value,
  onIconClick,
  errorMessage,
}: InputProps): React.ReactElement => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const errorColor = 'red-600';
  const darkGrey = 'gray-800';

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    setHasValue(e.target.value !== '');
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex items-center justify-center">
        <input
          type={showIcon ? (isShowPassword ? type : 'password') : type}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          className={`h-[60px] w-full rounded-lg border p-4 text-[16px] ${
            errors ? `bg-opacity/25 border-error bg-error_toast_bg` : 'border-gray-300 bg-white'
          } ${isFocused || hasValue ? 'pb-[12px] pt-[24px]' : ''} focus:outline-none`}
          id={id}
        />
        <div
          className={`absolute right-4 top-1/2 flex h-6 -translate-y-3 cursor-pointer ${
            errors ? `text-${errorColor}` : `text-${darkGrey}`
          }`}
          onClick={onIconClick}
        >
          {showIcon && !isShowPassword ? (
            <Icon name={showIcon} color={errors ? '#FF0422' : '#656366'} size={24} />
          ) : (
            icon && <Icon name={icon} color={errors ? '#FF0422' : '#656366'} size={24} />
          )}
        </div>
        <label
          htmlFor={id}
          // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
          className={`absolute left-4 top-1/2 origin-[0] -translate-y-1/2 cursor-text duration-150  ${
            errors ? `text-${errorColor}` : `text-${darkGrey}`
          } ${
            isFocused || hasValue
              ? '-translate-y-[20px] translate-x-[1px] text-[10px]'
              : '-translate-y-1/2 text-[18px]'
          }`}
        >
          {label}
        </label>
      </div>
      {errors && (
        <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
          <Icon name="ic_field_error" />
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default AnimationInput;
