import { Wrapper } from '@/components/shared';
import React from 'react';
import './Footer.styles.scss';
import { CategoryColumn, ContactColumn, GoogleMap, SupportPolicy } from './partials';
import { IMainCategory } from '@/@types/global';
import clsx from 'clsx';
type TFooterProps = {
  categories?: IMainCategory[];
  className?: string;
};

const Footer = ({ categories, className }: TFooterProps) => {
  return (
    <div>
      <div className={clsx("footer", className)}>
        <Wrapper>
          <div className="grid grid-cols-12 gap-8">
            <ContactColumn className="col-span-12 md:col-span-6 lg:col-span-4" />
            <CategoryColumn className="col-span-12 md:col-span-6 lg:col-span-2" categories={categories} />
            <SupportPolicy className="col-span-12 md:col-span-6 lg:col-span-3"/>
            <GoogleMap className="col-span-12 md:col-span-6 lg:col-span-3" />
          </div>
        </Wrapper>
      </div>
      <div className=" bg-app-500">
        <Wrapper className='flex items-center justify-between !py-1 text-white'>
          {' '}
          <p>copy right @</p>
          <p>alright revert</p>
        </Wrapper>
      </div>
    </div>
  );
};

export default Footer;
