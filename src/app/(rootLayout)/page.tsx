import {
  BannerSection,
  ProcductsSection,
  ProductSlideSection,
} from '@/components/HomePage';
import { Wrapper } from '@/components/shared';
import '../../styles/homePage.scss';
import clsx from 'clsx';
import NewsSection from '@/components/HomePage/partials/NewsSection';
import ContactSection from '@/components/HomePage/partials/ContactSection';
import { PageService } from '@/services';
import { IBanner, IYoutubePost } from '@/@types/home';
import { IMainCategory } from '@/@types/global';
import { PRODUCT_ID } from '@/constants';

export async function getData() {
  const banner = await PageService.fetchBanner();
  const youtube = await PageService.fetchYoutubePost();
  const hotProduct = await PageService.fetchAllProduct({ hot: true });
  const mainCategories = await PageService.fetchMainCategory();
  // const specialProduct = await
  return {
    banner: banner.data.data,
    youtube: youtube.data.data,
    hotProduct: hotProduct.data.data,
    mainCategories: mainCategories.data.data,
  };
}

export const revalidate = 60;

export default async function Home(props: any) {
  const data = await getData();

  return (
    <div>
      {/* hero section */}
      <Wrapper className="!pt-2">
        <BannerSection youtubePost={data.youtube} banner={data?.banner} />
      </Wrapper>
      {/* special section */}
      <div className={clsx('specialSection')}>
        <Wrapper>
          <ProductSlideSection
            title={'Sản phẩm bán chạy'}
            data={data.hotProduct}
          />
        </Wrapper>
      </div>

      {/* map product section */}
      {/* lawn mawer section */}
      {data.mainCategories &&
        Array.isArray(data.mainCategories) &&
        data.mainCategories.map((ele: IMainCategory) => {
          if (ele.maDanhMucChinh === PRODUCT_ID.saw || ele.maDanhMucChinh === PRODUCT_ID.lawnMower) {
            return (
              <Wrapper key={ele.maDanhMucChinh}>
                <ProcductsSection subCategories={ele.subcategories} title={ele.tenDanhMuc} />
              </Wrapper>
            );
          }
        })}
      {/* news section */}
      <Wrapper>
        <NewsSection />
      </Wrapper>
      {/* contact section */}
      <div className="contact_section">
        <Wrapper>
          <ContactSection />
        </Wrapper>
      </div>
    </div>
  );
}
