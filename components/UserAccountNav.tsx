'use client';

import Link from 'next/link';

import Icon from '@/components/Icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import UserAvatar from '@/components/UserAvatar';

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  name: string;
}

export function UserAccountNav({ image, name }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger style={{ outline: 'none' }}>
        <div className="flex justify-center space-x-[11px] rounded-[20px] bg-white p-[5px] align-middle outline-none">
          <div className="flex items-center justify-center pl-[5px]">
            <Icon name="ic_menu_outline" color="#656366" size={14} />
          </div>
          {image ? <UserAvatar image={image} name={name} /> : <UserAvatar name={name} />}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <div>Login</div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <div>Sign up</div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/billing">Billing</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
