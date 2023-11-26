'use client';
import React from 'react';
import IconGroup from './Partials/IconGroup';
import clsx from 'clsx';
import styles from './TitleSection.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { ISubCategory } from '@/@types/global';

type TitleSectionProps = {
  title?: React.ReactNode;
  childTitle?: ISubCategory[];
  activeTitle?: string;
};

const TitleSection = ({
  title,
  childTitle,
  activeTitle,
}: TitleSectionProps) => {
  const slidePropsTop = {
    options: {
      type: 'loop',
      arrows: false,
      drag: true,
      pagination: false,
      direction: 'ltr',
      perPage: 8,
      width: "100%",
      gap: '1rem',
      breakpoints: {
        640: {
          perPage: 3,
          gap: "1rem",
        },
      },
      autoScroll: {
        pauseOnFocus: true,
        pauseOnHover: true,
        rewind: true,
        speed: 0.8,
      },
      lazyLoad: true,
      reducedMotion: {
        speed: 1,
        rewindSpeed: 0,
        autoplay: true,
      },
    },
    extensions: { AutoScroll },
  };
  return (
    <div className={clsx(styles.titleSection, 'block lg:flex pb-8')}>
      {/* top content */}
      <div
        className={clsx(
          styles.sectionTop,
          'w-full lg:w-3/12 h-[45px] bg-app-500 flex items-center gap-4 rounded-tl-[20px] lg:rounded-tl-full lg:rounded-bl-full p-1',
        )}
      >
        <IconGroup />
        <h1 className="text-[18px] font-semibold text-white capitalize">{title}</h1>
      </div>

      {/* bottom content */}
      <div
        className={clsx(
          styles.sectionBottom,
          'w-full lg:w-9/12 h-[45px] flex items-center',
        )}
      >
        {childTitle && childTitle.length > 0 && <Splide {...slidePropsTop} aria-label="My Favorite Images">
          <SplideSlide>
            <span
              className={clsx(
                'hover:text-app-500 hover:font-semibold cursor-pointer transition-all duration-200',
                {
                  'text-app-500 font-semibold':
                    !activeTitle || activeTitle.length <= 0,
                },
              )}
            >
              Tất cả
            </span>
          </SplideSlide>

          {childTitle &&
            Array.isArray(childTitle) &&
            childTitle.length > 0 &&
            childTitle.map((ele: ISubCategory) => {
              return (
                <SplideSlide key={ele.maDanhMucNho}>
                  <span
                    className={clsx(
                      'hover:text-app-500 hover:font-semibold cursor-pointer transition-all duration-200',
                      {
                        'text-app-500 font-semibold':
                          activeTitle && activeTitle.includes(ele.maDanhMucNho),
                      },
                    )}
                  >
                    {ele.tenDanhMucNho}
                  </span>
                </SplideSlide>
              );
            })}
        </Splide>}
      </div>
    </div>
  );
};

export default TitleSection;
