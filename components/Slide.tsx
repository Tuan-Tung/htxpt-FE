import React from 'react';


const Slide = ({img}: any): React.ReactElement => {
  return (
    <div className="w-full">
      <div
        className="h-64 w-full overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img?.src})` }}
      />
    </div>
  );
};

export default Slide;
