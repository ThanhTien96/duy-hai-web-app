'use client';

import { Title } from '@/components/shared';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { IMainCategory } from '@/@types/global';
import clsx from 'clsx';

type TCategoryColumnProps = {
  className?: string;
  categories?: IMainCategory[];
  title?: string;
};

const CategoryColumn = ({ className, categories, title }: TCategoryColumnProps) => {
  const slideProps = {
    options: {
      type: 'loop',
      arrows: false,
      drag: true,
      pagination: false,
      direction: 'ttb',
      gap: '1rem',
      height: '100%',
      width: "100%",
      autoScroll: {
        pauseOnFocus: true,
        pauseOnHover: true,
        rewind: true,
        speed: 0.3,
      },
      lazyLoad: true,
      reducedMotion: {
        speed: 0.3,
        rewindSpeed: 0,
        autoplay: true,
      },
    },
    extensions: { AutoScroll },
  };
  return (
    <div className={clsx(className)}>
      <Title className='text-[18px] lg:text-[22px] font-bold mb-2 capitalize border-b border-solid border-gray-border/40 pb-2' level={3}>{title}</Title>
      {categories && (
        <div className='h-[200px] overflow-hidden'>
          <Splide {...slideProps}>
            {categories &&
              Array.isArray(categories) &&
              categories.map((ele: IMainCategory) => (
                <SplideSlide key={ele.maDanhMucChinh}>
                  <p className='!hover:underline cursor-pointer hover:border-b hover:border-solid hover:border-white transition-all duration-200 w-max overflow-hidden'>{ele.tenDanhMuc}</p>
                </SplideSlide>
              ))}
          </Splide>
        </div>
      )}
    </div>
  );
};

export default CategoryColumn;
