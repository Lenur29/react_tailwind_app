import React from 'react';
import { quotes } from '../assets';

type Props = {
  content: string,
  name: string,
  title: string,
  img: string,
};

export const Feedback: React.FC<Props> = ({ content, name, title, img }) => {
  return (
    <div className='flex flex-col justify-between items-start px-10 py-[60px] rounded-[20px] feedback-card max-w-[370px]'>
      <img src={quotes} alt='quotes' className='w-[42px] h-7 object-contain mb-10' />
      <p className='text-18 leading-18 text-white mb-[30px]'>
        {content}
      </p>

      <div className='flex'>
        <img src={img} alt={name} className='w-12 h-12 rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='font-semibold text-20 leading-16 text-white'>{name}</h4>
          <p className='text-16 leading-15 text-dimWhite'>{title}</p>
        </div>
      </div>

    </div>
  );
};
