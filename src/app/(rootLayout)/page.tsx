import {
  BannerSection,
  ProcductsSection,
  ProductSlideSection,
} from '@/components/HomePage';
import clsx from 'clsx';
import { Wrapper } from '@/components/shared';
import '../../styles/homePage.scss';
import NewsSection from '@/components/HomePage/partials/NewsSection';
import ContactSection from '@/components/HomePage/partials/ContactSection';
import { PageService } from '@/services';
import { IMainCategory, IPagination } from '@/@types/global';
import { FALLBACK_SEO, PRODUCT_ID } from '@/constants';
import { IBanner, IYoutubePost } from '@/@types/home';
import { IProduct } from '@/@types/product';
import { INews } from '@/@types/news';

async function getData(): Promise<{
  banner: IBanner[];
  youtube: IYoutubePost[];
  hotProduct: IProduct[];
  mainCategories: IMainCategory[];
  newsList: { data: INews[] } & IPagination;
}> {
  const banner = await PageService.fetchBanner();
  const youtube = await PageService.fetchYoutubePost();
  const hotProduct = await PageService.fetchAllProduct({ hot: true });
  const mainCategories = await PageService.fetchMainCategory({
    withProduct: true,
  });
  const newsList = await PageService.fetchAllNews({ page: 1, perPage: 7 });

  return {
    banner: banner?.data?.data,
    youtube: youtube?.data?.data,
    hotProduct: hotProduct?.data?.data,
    mainCategories: mainCategories?.data?.data,
    newsList: newsList?.data,
  } as any;
}

export async function generateMetadata() {
  return {
    keyWords: "máy cưa, nông cơ hải trà tân",
    ...FALLBACK_SEO
  };
}

export default async function Home(props: any) {
  const data = await getData();

  return (
    <div>
      {/* hero section */}
      <Wrapper>
        <BannerSection youtubePost={data?.youtube} banner={data?.banner} />
      </Wrapper>
      {/* special section */}
      <div className={clsx('specialSection')}>
        <Wrapper>
          <ProductSlideSection
            title={'Sản phẩm bán chạy'}
            data={data?.hotProduct}
          />
        </Wrapper>
      </div>

      {/* map product section */}
      {/* lawn mawer section */}
      {data &&
        data.mainCategories &&
        Array.isArray(data.mainCategories) &&
        data?.mainCategories?.map((ele: IMainCategory) => {
          if (
            ele.maDanhMucChinh === PRODUCT_ID.saw ||
            ele.maDanhMucChinh === PRODUCT_ID.lawnMower
          ) {
            return (
              <Wrapper key={ele?.maDanhMucChinh}>
                <ProcductsSection
                  subCategories={ele?.subcategories}
                  title={ele?.tenDanhMuc}
                />
              </Wrapper>
            );
          }
        })}
      {/* news section */}
      <Wrapper>
        <NewsSection newsList={data?.newsList} />
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
