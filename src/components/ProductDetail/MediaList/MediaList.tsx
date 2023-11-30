'use client';

import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { IMediaBase } from '@/@types/global';
import { EMPTY_IMAGE } from '@/constants';
import '../ProductDetail.style.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

type TMediaListProps = {
  className?: string;
  mediaList?: IMediaBase[];
};

const MediaList = ({ className, mediaList }: TMediaListProps) => {
  const [baseSrc, setBaseSrc] = useState<IMediaBase | undefined>(
    mediaList && mediaList[0],
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const slideProps = {
    options: {
      type: 'slide',
      arrows: true,
      drag: true,
      pagination: false,
      direction: 'ltr',
      perPage: 5,
      gap: '0.2rem',
      breakpoints: {
        640: {
          perPage: 3,
        },
        320: {
          perPage: 3,
        },
      },
      
    },
  };

  return (
    <div className={clsx(className, 'relative media-list')}>
      <div className="parent-div ">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          className="overflow-hidden border border-solid border-gray-border image-container relative"
        >
          <Image
            className="w-full h-full object-contain base-image max-h-[400px]"
            src={baseSrc?.hinhAnh ?? EMPTY_IMAGE}
            alt="hai tra tan"
            width={0}
            height={0}
          />
          <div
            className="tooltip"
            style={{
              transform: `translate(-50%, -50%)`,
              left: mousePosition.x,
              top: mousePosition.y,
            }}
          ></div>
        </div>
        <div className="absolute top-0 left-[105%] z-20 bg-white w-full h-full overflow-hidden border border-solid border-gray-border zoom-in-container hidden">
          <Image
            style={{
              right: mousePosition.x - 200,
              bottom: mousePosition.y - 250,
            }}
            className="w-full h-full object-contain absolute scale-[1.6]"
            src={baseSrc?.hinhAnh ?? EMPTY_IMAGE}
            alt="hai tra tan"
            width={0}
            height={0}
          />
        </div>
      </div>

      <div className="mt-2">
        <Splide {...slideProps}>
          {mediaList &&
            Array.isArray(mediaList) &&
            mediaList?.map((ele: IMediaBase) => (
              <SplideSlide key={ele.id}>
                <div
                  onClick={() => setBaseSrc(ele)}
                  className={clsx(
                    'border border-solid h-[100px] border-gray-border cursor-pointer transition-all duration-200',
                    {
                      '!border-app-600': ele.id === baseSrc?.id,
                    },
                  )}
                >
                  <Image
                    className="w-full h-full object-contain"
                    src={ele.hinhAnh ?? EMPTY_IMAGE}
                    alt="hai tra tan"
                    width={0}
                    height={0}
                  />
                </div>
              </SplideSlide>
            ))}
        </Splide>
      </div>
    </div>
  );
};

export default MediaList;
