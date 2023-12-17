'use client'

import sharedContent from '@/utils/shared';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

type NewsSubItemProps = {
    src?: string;
    title?: string;
    content?: string;
    createAt?: string;
    id?: string;
}

const NewsSubItem = ({
    src,
    title,
    content,
    createAt,
    id,
}: NewsSubItemProps) => {
    const router = useRouter();
  return (
    <div onClick={() => {
        router.push(`/tin-tuc/${id}`)
    }} className='h-[120px] w-full flex gap-2 border border-solid border-gray-border rounded-sm p-2'>
        <div className='h-full w-4/12 overflow-hidden'>
            <Image className='w-full h-full cursor-pointer hover:scale-105 transition-all duration-200' src={src ?? sharedContent.emtyImage} width={0} height={0} alt={title ?? 'hải trà tân'}/>
        </div>
        <div className='w-8/12'>
            <h1 className='text-[14px] font-semibold capitalize cursor-pointer hover:text-app-500 transition-all duration-200 line-clamp-2'>{title}</h1>
            <p className='text-[12px] line-clamp-3 mt-2'>{content}</p>
        </div>
    </div>
  )
}

export default NewsSubItem