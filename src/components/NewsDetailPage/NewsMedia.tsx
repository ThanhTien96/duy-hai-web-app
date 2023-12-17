import { IMediaBase } from '@/@types/global';
import { Image } from 'antd';
import clsx from 'clsx';
import React from 'react'

type TNewsMediaProps = {
    media?: IMediaBase[];
    className?: string;
}

const NewsMedia = ({media, className}: TNewsMediaProps) => {
  return (
    <div className={clsx(className, "grid  grid-cols-12 gap-2")}>
        {
            media && Array.isArray(media) && media.map((img: IMediaBase, idx: number) => (
                <div className={clsx({
                    "col-span-12": idx === 0,
                    "col-span-4": idx !== 0
                })} key={img.id}>
                    <Image className='w-full h-full object-cover' width={"100%"}  src={img.hinhAnh} alt='nông cơ hải trà tân - tin tức' />
                </div>
            ))
        }
    </div>
  )
}

export default NewsMedia