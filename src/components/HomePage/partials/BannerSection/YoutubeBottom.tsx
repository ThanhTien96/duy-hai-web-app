'use client';
import { Title } from '@/components/shared';
import { PlayIcon } from '@/libIcon';
import sharedContent from '@/utils/shared';
import { Modal } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type YoutubeBottomProps = {
  src?: string;
  link?: string;
  embed?: string;
  title?: string;
  className?: string;
};

const YoutubeBottom = ({
  src,
  link,
  title,
  embed,
  className,
}: YoutubeBottomProps) => {
  /** control modal */
  const [openVideo, setOpenVideo] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('');
  return (
    <div className={clsx(className, 'md:h-automax-xs:h-auto')}>
      <div 
      onClick={() => {
        setIframeSrc(embed ?? '')
        setOpenVideo(true)}}
      className="w-full h-[180px] overflow-hidden relative cursor-pointer">
        <Image
          className="w-full h-full object-cover transition-all duration-200 hover:scale-110"
          src={src ?? sharedContent.emtyImage}
          alt={title ?? 'duy hai'}
          width={0}
          height={0}
        />
        <div
          className="z-10 absolute top-1/2 left-1/2 w-10 h-10 rounded-full cursor-pointer -translate-y-1/2 -translate-x-1/2 bg-white/40 p-2"
        >
          <PlayIcon className="text-white transition-all duration-200 hover:text-error" />
        </div>
      </div>
      <Link href={link ?? ''} target='_blank'>
        <div className="mt-2 px-2 text-center">
          <Title level={1} className="line-clamp-2 lg:text-[14px] text-[12px] font-semibold transition-all duration-300 hover:text-app-500 cursor-pointer">
            {title}
          </Title>
        </div>
      </Link>

      {/* modal video embed */}
      {openVideo && <Modal
        title={title}
        className="w-1/2"
        open={openVideo}
        onCancel={() => {
          setIframeSrc('')
          setOpenVideo(false)
        }}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{hidden: true}}
      >
        <iframe src={iframeSrc} className="w-full" height={320}></iframe>
      </Modal>}
    </div>
  );
};

export default YoutubeBottom;
