'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import sharedContent from '@/utils/shared';


const BannerSlide = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        spaceBetween={30}
        autoplay={true}
        loop={true}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[310px] overflow-hidden">
            <Image
              width={0}
              height={0}
              className="w-full h-full"
              src={require('@/assets/banner/anh-chup-man-hinh-2021-12-18-luc-45236-ch-6035.png')|| sharedContent.emtyImage}
              alt="banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[310px] overflow-hidden">
            <Image
              width={0}
              height={0}
              className="w-full h-full"
              src={require('@/assets/banner/anh-chup-man-hinh-2021-12-18-luc-50430-ch-50440 (1).png') || sharedContent.emtyImage}
              alt="banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[310px] overflow-hidden">
            <Image
              width={0}
              height={0}
              className="w-full h-full"
              src={require('@/assets/banner/anh-chup-man-hinh-2021-12-18-luc-50430-ch-50440.png')|| sharedContent.emtyImage}
              alt="banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[310px] overflow-hidden">
            <Image
              width={0}
              height={0}
              className="w-full h-full"
              src={require('@/assets/banner/anh-chup-man-hinh-2021-12-18-luc-50557-ch-84610.png')|| sharedContent.emtyImage}
              alt="banner"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlide;
