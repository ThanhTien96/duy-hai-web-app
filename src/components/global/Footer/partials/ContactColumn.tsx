import { Title } from '@/components/shared';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { BsEnvelopeAt, BsGlobe2 } from 'react-icons/bs';

type TContactColumnProps = {
  className?: string;
};

const ContactColumn = ({ className }: TContactColumnProps) => {
  return (
    <div className={clsx(className)}>
      {/* title */}
      <Title
        level={3}
        className="text-[18px] lg:text-[22px] font-bold mb-2 capitalize"
      >
        Thông Tin Liên Hệ
      </Title>
      {/* shop name */}
      <Title
        level={1}
        className="tx-[24px] lg:text-[28px] font-bold uppercase mb-2"
      >
        Nông Cơ Hải Trà Tân
      </Title>
      <div className='flex flex-col gap-4 items-start'>
      {/* phone */}
        <Link className="flex items-center gap-2" href={'tel:0932871994'}>
          <span className="w-8 h-8 rounded-md flex items-center justify-center border border-solid border-white">
            <FaPhone />
          </span>
          <p>0932871994</p>
        </Link>
        {/* email */}
        <Link
          className="flex items-center gap-2"
          href={'mail:haitratan@gmail.com'}
        >
          <span className="w-8 h-8 rounded-md flex items-center justify-center border border-solid border-white">
            <BsEnvelopeAt />
          </span>
          <p>haitratan@gmail.com</p>
        </Link>
        {/* website */}
        <Link
          className="flex items-center gap-2"
          href={'nongcohaitratan.com'}
          target="_blank"
        >
          <span className="w-8 h-8 rounded-md flex items-center justify-center border border-solid border-white">
            <BsGlobe2 />
          </span>
          <p>nongcohaitratan.com</p>
        </Link>
      </div>
    </div>
  );
};

export default ContactColumn;
