import { Wrapper } from '@/components/shared';
import React from 'react';
import './Footer.styles.scss';
import { CategoryColumn, ContactColumn, GoogleMap, SupportPolicy } from './partials';
import { IFooter, IMainCategory } from '@/@types/global';
import clsx from 'clsx';
import { TContactColumnType } from './partials/ContactColumn';
import { COPY_RIGHT } from '@/constants';
type TFooterProps = {
  categories?: IMainCategory[];
  className?: string;
  data?: IFooter;
};

const Footer = ({ categories, className, data }: TFooterProps) => {

  const contactColumnData: TContactColumnType = {
    title: data?.contactTitle,
    shopName: data?.contactText,
    phone: data?.phoneNumber,
    email: data?.email,
    address: data?.address,
    website: data?.website,
    map: data?.map
  }


  return (
    <div>
      <div className={clsx("footer", className)}>
        <Wrapper>
          <div className="grid grid-cols-12 gap-8">
            <ContactColumn data={contactColumnData} className="col-span-12 md:col-span-6 lg:col-span-4" />
            <CategoryColumn title={data?.categoryTitle} className="col-span-12 md:col-span-6 lg:col-span-2" categories={categories} />
            <SupportPolicy title={data?.supportTitle} linkList={data?.supportLink}  className="col-span-12 md:col-span-6 lg:col-span-3"/>
            <GoogleMap src={data?.map} className="col-span-12 md:col-span-6 lg:col-span-3" />
          </div>
        </Wrapper>
      </div>
      <div className=" bg-app-500">
        <Wrapper className='flex items-center justify-between !py-1 text-white'>
          {' '}
          <p>{COPY_RIGHT}</p>
        </Wrapper>
      </div>
    </div>
  );
};

export default Footer;
