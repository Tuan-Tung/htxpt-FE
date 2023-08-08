import React from 'react';

import Icon from '@/components/Icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';

type UserAvatarProps = {
  image: string;
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
          <Icon name='ic_user_outline'/>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
