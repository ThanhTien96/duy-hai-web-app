'use client';
import React, { useState } from 'react';
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
  handleChooseType?: (value: string) => void;
};

const TitleSection = ({
  title,
  childTitle,
  handleChooseType,
}: TitleSectionProps) => {
  const [type, setType] = useState<string>();

  const slidePropsTop = {
    options: {
      type: 'loop',
      rewind: false,
      arrows: false,
      drag: true,
      pagination: false,
      perPage: childTitle && childTitle.length <= 8 ? childTitle.length : 8,
      width: '100%',
      gap: '1rem',
      autoplay: true,
      breakpoints: {
        640: {
          perPage: childTitle && childTitle.length <= 4 ? childTitle.length : 4,
          gap: '1rem',
        },
        320: {
          perPage: childTitle && childTitle.length <= 3 ? childTitle.length : 3,
          gap: '1rem',
        },
      },
    },
  };
  return (
    <div
      className={clsx(
        styles.titleSection,
        'block lg:flex pb-8 product-section-title',
      )}
    >
      {/* top content */}
      <div
        className={clsx(
          styles.sectionTop,
          'w-full lg:w-3/12 h-[45px] bg-app-500 flex items-center gap-4 rounded-tl-[20px] lg:rounded-tl-full lg:rounded-bl-full p-1',
        )}
      >
        <IconGroup />
        <h1 className="text-[18px] font-semibold text-white capitalize">
          {title}
        </h1>
      </div>

      {/* bottom content */}
      <div
        className={clsx(
          styles.sectionBottom,
          'w-full lg:w-9/12 h-[45px] flex items-center',
        )}
      >
        {childTitle && childTitle.length > 0 && (
          <Splide {...slidePropsTop} aria-label="My Favorite Images">
            <SplideSlide>
              <span
                onClick={() => {
                  handleChooseType && handleChooseType('');
                  setType(undefined);
                }}
                className={clsx(
                  'hover:text-app-500 hover:font-semibold cursor-pointer transition-all duration-200 text-black font-normal',
                  {
                    '!text-app-500 !font-semibold': type === undefined,
                    '!text-black !font-normal': type !== undefined,
                  },
                )}
              >
                Tất cả
              </span>
            </SplideSlide>

            {Array.isArray(childTitle) &&
              childTitle.map((ele: ISubCategory, idx: number) => {
                return (
                  <SplideSlide key={`${ele.maDanhMucNho}-${idx}`}>
                    <span
                      onClick={() => {
                        handleChooseType && handleChooseType(ele.maDanhMucNho);
                        setType(ele.maDanhMucNho);
                      }}
                      className={clsx(
                        'hover:text-app-500 hover:font-semibold cursor-pointer transition-all duration-200 text-black font-normal',
                        {
                          '!text-app-500 !font-semibold':
                            type && type == ele.maDanhMucNho,
                        },
                      )}
                    >
                      {ele.tenDanhMucNho}
                    </span>
                  </SplideSlide>
                );
              })}
          </Splide>
        )}
      </div>
    </div>
  );
};

export default TitleSection;
