import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode,
};

export const MaxWidthContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-full xl:max-w-[1170px]'>
      {children}
    </div>
  );
};
