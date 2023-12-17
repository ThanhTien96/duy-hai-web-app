"use client"

import sharedContent from '@/utils/shared';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

type NewsMainItemProps = {
    src?: string;
    title?: string;
    content?: string;
    createAt?: string;
    id?: string;
}

const NewsMainItem = ({
    src,
    title,
    content,
    createAt,
    id,
}: NewsMainItemProps) => {
    const router = useRouter();
  return (
    <div 
    onClick={() => {
        router.push(`/tin-tuc/${id}`)
    }}
    className='w-full h-[400px] flex flex-col border border-gray-border rounded-sm p-2 cursor-pointer'>
        <div className='h-8/12 relative overflow-hidden'>
            <Image className='w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-200' src={src ?? sharedContent.emtyImage} width={0} height={0} alt={title ?? 'hải trà tân'} />
        </div>
        <div className='mt-2'>
            <span className='text-sm text-black/50 text-[12px]'>{ moment(createAt).format('DD/MM/YYYY')}</span>
            <h1 className='capitalize text-medium !font-semibold line-clamp-2 cursor-pointer hover:text-app-500 transition-all duration-200'>{title}</h1>
            <p className='line-clamp-3 mt-4'>{content}</p>
        </div>
    </div>
  )
}

export default NewsMainItem