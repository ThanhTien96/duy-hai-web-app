import { Title } from '@/components/shared';
import sharedContent from '@/utils/shared';
import clsx from 'clsx';
import moment from 'moment';
import Image from 'next/image';
import React from 'react'

type TNewsCardProps = {
    src?: string;
    title?: string;
    content?: string;
    createAt?: string;
    id?: string;
    onClick?: () => void;
    className?: string;
}

const NewsCard = ({src, title, content, createAt, id, onClick, className}: TNewsCardProps) => {
  return (
    <div onClick={onClick} className={clsx(className, "h-[300px] overflow-hidden flex flex-col items-start gap-2 border border-solid border-gray-200")}>
        <div className='h-2/4 w-full overflow-hidden'>
            <Image className='w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-200' src={src ?? sharedContent.emtyImage} width={0} height={0} alt={title ?? 'hải trà tân'}/>
        </div>
        <div className='w-full h-2/4 flex flex-col items-start gap-2 px-4'>
            <Title level={6} className='text-medium !font-semibold line-clamp-2 capitalize cursor-pointer hover:text-app-500 transition-all duration-200'>{title}</Title>
            <p className='text-small line-clamp-3'>{content}</p>
            <p className='text-sm text-black/50 text-[12px]'>{moment(createAt).format("DD/MM/YYYY")}</p>
        </div>
    </div>
  )
}

export default NewsCard