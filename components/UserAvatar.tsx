import React from 'react';

import Icon from '@/components/Icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

type UserAvatarProps = {
  image?: string;
  name: string;
};

const UserAvatar = ({ image, name, ...props }: UserAvatarProps): React.ReactElement => {
  return (
    <Avatar {...props}>
      {image ? (
        <AvatarImage alt="Picture" src={image} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{name}</span>
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary">
            <Icon name="ic_avatar_icon" size={20}/>
          </div>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
