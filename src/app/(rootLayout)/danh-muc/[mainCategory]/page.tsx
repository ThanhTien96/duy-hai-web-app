import { IMainCategory } from '@/@types/global';
import { ProductList } from '@/components/ProductDetail';
import { Wrapper } from '@/components/shared';
import DrashLog from '@/components/shared/DrashLog';
import { FALLBACK_SEO, PAGE_SIZE } from '@/constants';
import { PageService } from '@/services';
import { stringToSlug } from '@/utils/common';
import { ClusterOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

export async function generateStaticParams({
  params,
}: {
  params: { mainCategory: string };
}) {
  const res = await PageService.fetchMainCategory({ withProduct: false });
  return res.data.data.map((ele: IMainCategory) => ({
    mainCategory: ele.maDanhMucChinh,
  }));
}

async function getData(mainCategory: string) {
  const res = await PageService.fetchMainCategory({ withProduct: false });

  const findId: IMainCategory = res.data.data.find(
    (ele: IMainCategory) => ele.maDanhMucChinh === mainCategory,
  );

  const productList = await PageService.fetchProductPagination(
    { page: 1, perPage: PAGE_SIZE.product },
    { mainCategoryId: mainCategory },
  );

  return {
    data: productList.data,
    mainCategory: findId,
  };
}

export async function generateMetadata() {
    return FALLBACK_SEO;
}

export default async function Page({
  params,
}: {
  params: { mainCategory: string };
}) {
  const { data, mainCategory } = await getData(params.mainCategory);
  return (
    <Wrapper>
      <Breadcrumb
        className="pb-2 border-b border-dashed border-gray-border mb-8"
        items={[
          {
            href: '/',
            title: (
              <div className="flex items-center gap-2">
                <HomeOutlined /> Trang Chủ
              </div>
            ),
          },
          {
            href: '/san-pham',
            title: (
              <div className="flex items-center gap-2">
                <ClusterOutlined /> Danh Mục
              </div>
            ),
          },
          {
            title: (
              <div className="flex items-center gap-2">
                <SettingOutlined /> {mainCategory.tenDanhMuc}
              </div>
            ),
          },
        ]}
      />
      <ProductList
        title={mainCategory.tenDanhMuc}
        mainCategoryId={mainCategory.maDanhMucChinh}
        data={data}
      />
    </Wrapper>
  );
}
