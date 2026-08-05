import React, { PropsWithChildren } from 'react';

const ProductLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  return <div className="min-w-full pb-8">{children}</div>;
};

export default ProductLayout;
