'use client';
import React from 'react';
import IconGroup from './Partials/IconGroup';
import clsx from 'clsx';
import styles from './TitleSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

type TitleSectionProps = {
  title?: string;
  childTitle?: any[];
  activeTitle?: string;
};

const TitleSection = ({ title, childTitle, activeTitle }: TitleSectionProps) => {
  
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
        <h1 className="text-[18px] font-semibold text-white">{title}</h1>
      </div>

      {/* bottom content */}
      <div
        className={clsx(
          styles.sectionBottom,
          'w-full lg:w-9/12 h-[45px] flex items-center',
        )}
      >
        {/* map sub title */}
        {
          <Swiper
          spaceBetween={10}
            onSlideChange={() => console.log('slide change')}
            autoplay={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              325: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView:
                  childTitle && childTitle.length + 1 >= 8 ? 8 : childTitle?.length,
              },
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
                  <span className={clsx("hover:text-app-500 hover:font-semibold cursor-pointer transition-all duration-200", {
                    'text-app-500 font-semibold': !activeTitle || activeTitle.length <= 0 
                  })}>
                    Tất cả
                  </span>
                </SwiperSlide>
            {childTitle?.map((ele: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <span className={clsx("hover:text-app-500 hover:font-semibold cursor-pointer transition-all duration-200", {
                    'text-app-500 font-semibold': activeTitle && activeTitle.includes(ele.maDanhMucNho)
                  })}>
                    {ele.tenDanhMucNho}
                  </span>
                </SwiperSlide>
              );
            })}
          </Swiper>
        }
      </div>
    </div>
  );
};

export default TitleSection;
