import '../../styles/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import { MainHeader, TopHeader } from '@/components/global';
import { PageService } from '@/services';
import { IMainCategory, IMenu } from '@/@types/global';
import StoreProvider from '@/components/shared/StoreProvider';
import Footer from '@/components/global/Footer';
import { FONT_UBUNTU, FONT_NUNITO_SANS } from '@/font/font';
import Loading from './loading';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nong Co Hai Tra Tan',
  description: 'Generated by create next app',
};

async function getData() {
  const categories = await PageService.fetchMainCategory();
  const menu = await PageService.fetchMenu();
  return { categories: categories.data.data, menu: menu.data.data };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    menu,
    categories,
  }: {
    menu: IMenu;
    categories: IMainCategory[];
  } = await getData();

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo/hai-tra-tan-logo.png?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={clsx(FONT_UBUNTU.className, 'relative')}
      >
        <StoreProvider>
          <header className="fixed top-0 left-0 right-0 z-50 bg-white">
            <TopHeader logo={menu.logo} />
            <MainHeader menuData={menu} categoriesData={categories} />
          </header>
          <Suspense fallback={<Loading />}>
            <div className="mt-[135px]">{children}</div>
          </Suspense>
          <Footer categories={categories} />
        </StoreProvider>
      </body>
    </html>
  );
}
