'use client'
import { PlayIcon } from '@/libIcon';
import sharedContent from '@/utils/shared';
import { Modal } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';

type YoutubeTopProps = {
  src?: string;
  link?: string;
  embed?: string;
  title?: string;
};

const YoutubeTop = ({ src, link, embed, title }: YoutubeTopProps) => {
  /** control modal */
  const [openVideo, setOpenVideo] = useState(false) 
  return (
    <div className="h-[146px] w-full col-span-3 overflow-hidden relative">
      <Link target='_blank' href={link ? link : ''}>
        <Image
          className="w-full h-full object-cover"
          width={0}
          height={0}
          src={src ? src : sharedContent.emtyImage}
          alt="..."
        />
      </Link>
      <div onClick={() => setOpenVideo(true)} className='z-10 absolute top-1/2 left-1/2 w-10 h-10 rounded-full cursor-pointer -translate-y-1/2 -translate-x-1/2 bg-white/40 p-2'>
        <PlayIcon className='text-white transition-all duration-200 hover:text-error'/>
      </div>

      {/* modal video embed */}
      <Modal
        title={title}
        className='w-1/2'
        open={openVideo}
        onCancel={() => setOpenVideo(current => !current) }
        okButtonProps={{ hidden: true }}
      >
        <iframe src={embed} className='w-full' height={320}></iframe>
      </Modal>
    </div>
  );
};

export default YoutubeTop;
