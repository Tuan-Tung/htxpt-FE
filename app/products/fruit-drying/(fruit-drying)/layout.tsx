'use client';

import React, { PropsWithChildren } from 'react';

const ProductLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  // const router = useRouter();
  // const [, setActiveTab] = useState('fruits'); 

  // const handleButtonClick = (code: string) => {
  //   setActiveTab(code);
  //   router.push(`/products/${code}`);
  // };
  return (
    <div className="min-h-screen min-w-full">
      {children}
    </div>
  );
};

export default ProductLayout;
