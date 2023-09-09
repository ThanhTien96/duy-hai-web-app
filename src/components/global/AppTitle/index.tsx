import Image from 'next/image';
import React from 'react';
import lineImage from '@/assets/lineTitle/line_title.png';
import lineWhite from '@/assets/lineTitle/lineWihte.png';
import clsx from 'clsx';
type AppTitleProps = {
  title?: string;
  className?: string;
  isBlack?: boolean;
};

const AppTitle = ({ title, className, isBlack }: AppTitleProps) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center mb-8',
        className,
      )}
    >
      <h2 className={clsx("text-[24px] font-semibold text-app-500 capitalize", {
        'text-yellow-300': isBlack
      })}>
        {title ?? 'Title'}
      </h2>
      {isBlack ? (
        <Image className='w-auto h-auto' src={lineWhite} width={200} height={200} alt="line" />
      ) : (
        <Image className='w-auto h-auto' src={lineImage} width={200} height={200} alt="line" />
      )}
    </div>
  );
};

export default AppTitle;
