'use client'

import React from 'react';
import 'swiper/css';
import Image from 'next/image';
import sharedContent from '@/utils/shared';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { IBanner } from '@/@types/home';

type TBannerSlideProps = {
  banner?: IBanner[];
};

const BannerSlide = ({ banner }: TBannerSlideProps) => {
  const slideProps = {
    options: {
      type: 'loop',
      arrows: true,
      drag: true,
      perPage: 1,
      autoplay: true,
    },
  }


  return (
    <div>
      <Splide {...slideProps} aria-label="My Favorite Images">
        {banner &&
          Array.isArray(banner) &&
          banner.map((ele: IBanner) => (
            <SplideSlide key={ele.maBanner}>
              <div className="w-full h-[310px] overflow-hidden">
                <Image
                  width={0}
                  height={0}
                  className="w-full h-full object-cover"
                  src={ele.hinhAnh || sharedContent.emtyImage}
                  alt="banner"
                />
              </div>
            </SplideSlide>
          ))}
      </Splide>
      <div className="w-full h-[310px] overflow-hidden"></div>
    </div>
  );
};

export default BannerSlide;
