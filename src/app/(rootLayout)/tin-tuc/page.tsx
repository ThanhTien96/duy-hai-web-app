import { IPagination } from '@/@types/global';
import { NewsProvider } from '@/components/NewsPage';
import { Wrapper } from '@/components/shared';
import { PAGE_SIZE } from '@/constants';
import { PageService } from '@/services';
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

async function getData(pagination: { page: number; perPage?: number }) {
  const res = await PageService.fetchAllNews(pagination);
  return { data: res.data };
}

export async function generateMetadata() {
    return {
        title: 'Nông Cơ Hải Trà Tân - Tin Tức',
        description:
          'Cửa Hàng HẢI TRÀ TÂN - HẢI MÁY BÃI - 0932871994. Địa chỉ : Thôn 1 - Xã Trà Tân - Huyện Đức Linh - Tỉnh Bình Thuận',
        openGraph: {
          title: 'Nông Cơ Hải Trà Tân - Tin Tức',
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
        keywords: 'nông cơ duy hải, nông cơ, nông cơ hải trà tân, tin tức thị trường',
      }
}

export default async function Page() {
  const { data } = await getData({ page: 1, perPage: 8 });
  return (
    <Wrapper>
      <Breadcrumb
        className="pb-2 border-b border-dashed border-gray-border mb-4 mt-4"
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
            title: (
              <div className="flex items-center gap-2">
                <AppstoreOutlined /> Tin Tức
              </div>
            ),
          },
        ]}
      />
      <NewsProvider data={data?.data} pagination={{currentPage: data?.currentPage, total: data?.total, totalPage: data?.totalPage}} />
    </Wrapper>
  );
}
