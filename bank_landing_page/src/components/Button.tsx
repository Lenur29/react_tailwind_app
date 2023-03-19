import React from 'react';

type Props = {
  styles?: string,
};

export const Button: React.FC<Props> = ({ styles }) => {
  return (
    <button type='button' className={`px-8 py-4 bg-blue-gradient font-medium text-18 text-primary outline-none rounded-[10px] ${styles}`}>
      Get Started
    </button>
  );
};
