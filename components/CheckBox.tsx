'use client'

import { InputHTMLAttributes } from 'react';

import { LabelSide } from '@/components/Button';
import Icon from '@/components/Icon';

export type TCheckbox = InputHTMLAttributes<HTMLInputElement> & {
  size?: number;
  label?: string;
  labelAlignment?: LabelSide;
  checked?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
};


const Checkbox = ({
  size = 15,
  label,
  labelAlignment: labelSide = 'left',
  checked,
  onClick,
}: TCheckbox): React.ReactElement => {
  const containerClasses = `
    flex
    items-center
    cursor-pointer
    ${labelSide === 'left' ? 'flex-row-reverse' : 'flex-row'}
    space-x-1.5
  `;

  const labelClasses = 'cursor-pointer';

  return (
    <div className={containerClasses} onClick={onClick}>
      {checked ? (
        <Icon name="ic_checked_box" size={size} />
      ) : (
        <Icon name="ic_unchecked_box" size={size} />
      )}
      {label && <span className={labelClasses}>{label}</span>}
    </div>
  );
};

export default Checkbox;
