'use client'
import { AppTitle, ContactForm } from '@/components/global';
import React from 'react';
import Fanpage from './Fanpage';
import clsx from 'clsx';

const ContactSection = () => {
  return (
    <div className={clsx("grid grid-cols-12 gap-4 bg-black/60 p-2 lg:p-8 w-full")}>
      <div className="col-span-12 overflow-hidden lg:col-span-7">
        <AppTitle isBlack title="Liên Hệ Chúng Tôi" />
        <ContactForm />
      </div>
      <div className="col-span-12 lg:col-span-5 self-center">
        <AppTitle isBlack title="Fanpage FaceBook" />
        <Fanpage />
      </div>
    </div>
  );
};

export default ContactSection;
