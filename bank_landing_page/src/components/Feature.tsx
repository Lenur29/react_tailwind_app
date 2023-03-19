import React from 'react';

type Props = {
  title: string,
  icon: string,
  description: string,
};

export const Feature: React.FC<Props> = ({ title, icon, description }) => {
  return (
    <div className='flex justify-center items-center p-6 rounded-[20px] mb-6 flex-1 last:mb-0 feature'>
      <div className='flex justify-center items-center w-16 h-16 mr-5 rounded-full bg-dimBlue'>
        <img src={icon} alt='icon' className='w-1/2 h-1/2' />
      </div>
      <div className='flex-1 flex flex-col justify-center items-start text-white'>
        <h4 className='font-semibold text-18 leading-13 mb-2'>{title}</h4>
        <p className='text-16 leading-15 text-dimWhite'>{description}</p>
      </div>
    </div>
  );
};
