import React from 'react';

import { Nature } from '@/public/images';

const Slide = (): React.ReactElement => {
  return (
    <div className="w-full">
      <div
        className="h-64 w-full overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Nature.src})` }}
      />
    </div>
  );
};

export default Slide;
