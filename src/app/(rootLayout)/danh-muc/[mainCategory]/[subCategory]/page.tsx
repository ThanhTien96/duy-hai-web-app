import { IMainCategory, ISubCategory } from '@/@types/global';
import ProductWitSubCategory from '@/components/ProductWithCategory/ProductWitSubCategory';
import { Wrapper } from '@/components/shared';
import DrashLog from '@/components/shared/DrashLog';
import { PAGE_SIZE } from '@/constants';
import { PageService } from '@/services';
import { stringToSlug } from '@/utils/common';
import { ClusterOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

export async function generateStaticParams({
  params,
}: {
  params: { mainCategory: string; subCategory: string };
}) {
 

  const subCate = await PageService.fetchSubCategories({
    mainCategoryId: params.mainCategory,
  });
  return subCate?.data?.data?.map((ele: ISubCategory) => ({
    subCategory: ele.maDanhMucNho,
  }));
}

async function getData(subCategories: string) {
  const res = await PageService.fetchSubCategoryDetail(subCategories, {
    page: 1,
    perPage: PAGE_SIZE.product,
  });
  return { data: res.data };
}

export default async function Page({
  params,
}: {
  params: { mainCategory: string; subCategory: string };
}) {
  const { data } = await getData(params.subCategory);

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
                <SettingOutlined /> {data.data.tenDanhMucNho}
              </div>
            ),
          },
        ]}
      />
      <ProductWitSubCategory
        subCategoryId={params.subCategory}
        data={data}
        title={data.data.tenDanhMucNho}
      />
    </Wrapper>
  );
}
