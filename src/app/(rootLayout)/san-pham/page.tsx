import { IMainCategory } from '@/@types/global';
import { ProductList } from '@/components/Product';
import { TitleSection } from '@/components/global';
import { Wrapper } from '@/components/shared';
import DrashLog from '@/components/shared/DrashLog';
import { PageService } from '@/services';
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { notFound } from 'next/navigation';

async function getPageData() {
  const mainCategories = await PageService.fetchMainCategory({
    withProduct: false,
  });

  return { data: mainCategories.data.data };
}

export async function generateMetadata() {
  return {
      title: 'Nông Cơ Hải Trà Tân - Sản Phẩm',
      description:
        'Cửa Hàng HẢI TRÀ TÂN - HẢI MÁY BÃI - 0932871994. Địa chỉ : Thôn 1 - Xã Trà Tân - Huyện Đức Linh - Tỉnh Bình Thuận',
      openGraph: {
        title: 'Nông Cơ Hải Trà Tân - Sản Phẩm',
        description:
          'Cửa Hàng HẢI TRÀ TÂN - HẢI MÁY BÃI - 0932871994. Địa chỉ : Thôn 1 - Xã Trà Tân - Huyện Đức Linh - Tỉnh Bình Thuận',
        images: [
          {
            url: '/logo/hai-tra-tan-logo.png',
            width: 32,
            height: 32,
          },
        ],
      },
      keywords: 'hải trà tân, máy cưa, nông cơ, máy cưa giá rẻ, máy cưa stihl, máy cưa chính hãng',
    }
}

export default async function Page() {
  const { data } = await getPageData();

  return (
    <section>
      <Wrapper className='!pb-0 !pt-8'>
        <Breadcrumb
        className='pb-2 border-b border-dashed border-gray-border'
          items={[
            {
              href: '/',
              title: <div className='flex items-center gap-2'><HomeOutlined /> Trang Chủ</div>,
            },
            {
                title: <div className='flex items-center gap-2'><AppstoreOutlined /> Sản phẩm</div>,
              },
          ]}
        />
      </Wrapper>
      {/* map content */}
      {data &&
        Array.isArray(data) &&
        data.length > 0 &&
        data.map((ele: IMainCategory) => (
          <Wrapper key={ele.maDanhMucChinh}>
            <TitleSection
              title={ele.tenDanhMuc}
              childTitle={ele.subcategories}
            />
            <ProductList mainCategoryId={ele.maDanhMucChinh} />
          </Wrapper>
        ))}
    </section>
  );
}
