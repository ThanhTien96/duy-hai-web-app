import sharedContent from '@/utils/shared';
import Image from 'next/image';
import React from 'react'

type NewsMainItemProps = {
    src?: string;
    title?: string;
    content?: string;
    createAt?: string;
    onClick?: () => void;
}

const NewsMainItem = ({
    src,
    title,
    content,
    createAt,
    onClick,
}: NewsMainItemProps) => {
  return (
    <div 
    onClick={onClick}
    className='w-full h-[400px] flex flex-col border border-gray-border rounded-sm p-2 cursor-pointer'>
        <div className='h-8/12 relative'>
            <Image className='w-full h-full' src={src ?? sharedContent.emtyImage} width={0} height={0} alt={title ?? 'hải trà tân'} />
        </div>
        <div className='mt-2'>
            <span className='text-sm text-black/50 text-[12px]'>{createAt}</span>
            <h1 className='capitalize font-semibold line-clamp-2 cursor-pointer hover:text-app-500 transition-all duration-200'>{title}</h1>
            <p className='line-clamp-3 mt-4'>{content}</p>
        </div>
    </div>
  )
}

export default NewsMainItem