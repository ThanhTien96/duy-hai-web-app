'use client'

import React from 'react';
import { IMainCategory, IMediaBase, IMenu } from '@/@types/global';
import TopHeader from './TopHeader';
import MainHeader from './MainHeader';

type Props = {
    logo?: string;
    menuData?: IMenu;
    categoriesData:IMainCategory[];
};

const HeaderApp = ({logo, menuData, categoriesData}: Props) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <TopHeader logo={logo} />
      <MainHeader menuData={menuData} categoriesData={categoriesData} />
    </header>
  );
};

export default HeaderApp;
