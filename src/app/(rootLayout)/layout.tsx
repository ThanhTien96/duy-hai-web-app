import '../../styles/globals.scss';
import type { Metadata } from 'next';
import clsx from 'clsx';
import { HeaderApp } from '@/components/global';
import { PageService } from '@/services';
import { IMainCategory, IMenu } from '@/@types/global';
import StoreProvider from '@/components/shared/StoreProvider';
import Footer from '@/components/global/Footer';
import { FONT_UBUNTU, FONT_NUNITO_SANS } from '@/font/font';
import Loading from './loading';
import { Suspense } from 'react';
import { FALLBACK_SEO } from '@/constants';
import { LoadingProvider, MessageProvider } from '@/components/shared';

export async function generateMetadata(): Promise<Metadata> {
  return FALLBACK_SEO;
}

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
        className={clsx(
          FONT_UBUNTU.className,
          FONT_NUNITO_SANS.className,
          'relative',
        )}
      >
        <StoreProvider>
          <HeaderApp
            categoriesData={categories}
            logo={menu.logo}
            menuData={menu}
          />

          <Suspense fallback={<Loading />}>
            <div className="mt-[95px] lg:mt-[87px]">{children}</div>
          </Suspense>

          <Footer categories={categories} />
          <LoadingProvider />
          <MessageProvider />
        </StoreProvider>
      </body>
    </html>
  );
}
