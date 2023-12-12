import { Title } from '@/components/shared';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { FaMapLocationDot, FaPhone } from 'react-icons/fa6';
import { BsEnvelopeAt, BsGlobe2 } from 'react-icons/bs';
import { GOOGLE_MAP } from '@/constants';

export type TContactColumnType = Partial<{
  title: string;
  shopName: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  map: string;
}>


type TContactColumnProps = {
  className?: string;
  data?: TContactColumnType;
};

const ContactColumn = ({ className, data }: TContactColumnProps) => {
  return (
    <div className={clsx(className)}>
      {/* title */}
      <Title
        level={3}
        className="text-[18px] lg:text-[22px] font-bold mb-2 capitalize"
      >
        {data && data?.title}
      </Title>
      {/* shop name */}
      <Title
        level={1}
        className="tx-[24px] lg:text-[28px] font-bold uppercase mb-2"
      >
        {data && data?.shopName}
      </Title>
      <div className='flex flex-col gap-4 items-start'>
      {/* phone */}
        <Link className="flex items-center gap-2" href={`tel:${data?.phone}`}>
          <span className="w-8 h-8 rounded-md flex items-center justify-center border border-solid border-white">
            <FaPhone />
          </span>
          <p>{data && data?.phone}</p>
        </Link>
        {/* email */}
        <Link
          className="flex items-center gap-2"
          href={`mail:${data?.email}`}
        >
          <span className="w-8 h-8 rounded-md flex items-center justify-center border border-solid border-white">
            <BsEnvelopeAt />
          </span>
          <p>{data && data?.email}</p>
        </Link>
        {/* website */}
        <Link
          className="flex items-center gap-2"
          href={data?.website ?? ""}
          target="_blank"
        >
          <span className="w-8 h-8 rounded-md flex items-center justify-center border border-solid border-white">
            <BsGlobe2 />
          </span>
          <p>{data && data?.website}</p>
        </Link>
        {/* address */}
        <Link
          className="flex items-center gap-2"
          href={GOOGLE_MAP}
          target="_blank"
        >
          <span className="w-8 h-8 rounded-md flex items-center justify-center border border-solid border-white">
          <FaMapLocationDot />
          </span>
          <p>{data && data?.address}</p>
        </Link>
      </div>
    </div>
  );
};

export default ContactColumn;
