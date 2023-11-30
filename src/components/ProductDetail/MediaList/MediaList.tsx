'use client';

import { IMediaBase } from '@/@types/global';
import { EMPTY_IMAGE } from '@/constants';
import clsx from 'clsx';
import Image from 'next/image';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import '../ProductDetail.style.scss';
type TMediaListProps = {
  className?: string;
  mediaList?: IMediaBase[];
};

const MediaList = ({ className, mediaList }: TMediaListProps) => {
  const [baseSrc, setBaseSrc] = useState<IMediaBase | undefined>(
    mediaList && mediaList[0],
  );
  //   zoom out state
  const imgRef = useRef<HTMLImageElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    console.log('☣️ >>> handleMouseMove >>> { x, y }: ', { x, y });
  };

  console.log('☣️ >>> MediaList >>> mediaList: ', mediaList);
  return (
    <div className={clsx(className)}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        className="relative w-full max-h-[400px] overflow-hidden border border-solid border-gray-border image-container"
      >
        <Image
          className="w-full h-full object-cover base-image"
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
        <div className="zoom-in-image"></div>
        <div className="absolute top-0 left-[100%] w-[200px] h-[200px]">
          <Image
            className="w-full h-full object-cover"
            src={baseSrc?.hinhAnh ?? EMPTY_IMAGE}
            alt="hai tra tan"
            width={0}
            height={0}
          />
        </div>
      </div>

      <div className="flex gap-2 mt-2 overflow-auto">
        {mediaList &&
          Array.isArray(mediaList) &&
          mediaList?.map((ele: IMediaBase) => (
            <div
              onClick={() => setBaseSrc(ele)}
              className={clsx(
                'w-[200px] h-[100px] border border-solid border-gray-border cursor-pointer transition-all duration-200',
                {
                  '!border-app-600': ele.id === baseSrc?.id,
                },
              )}
              key={ele.id}
            >
              <Image
                className="w-full h-full object-contain"
                src={ele.hinhAnh ?? EMPTY_IMAGE}
                alt="hai tra tan"
                width={0}
                height={0}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MediaList;
