import { MarkdownX } from '@/components/global';
import { Wrapper } from '@/components/shared';
import { EMPTY_IMAGE } from '@/constants';
import { PageService } from '@/services';
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import Image from 'next/image';

type AboutPageProps = {};

async function getData() {
  const res = await PageService.fetchAboutPage();

  return { data: res.data.data[0] };
}

export async function generateMetadata() {
    return {
        title: 'Nông Cơ Hải Trà Tân - Giới Thiệu',
        description:
          'Cửa Hàng HẢI TRÀ TÂN - HẢI MÁY BÃI - 0932871994. Địa chỉ : Thôn 1 - Xã Trà Tân - Huyện Đức Linh - Tỉnh Bình Thuận',
        openGraph: {
          title: 'Nông Cơ Hải Trà Tân - Giới Thiệu',
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
        keywords: 'nông cơ duy hải, nông cơ, nông cơ hải trà tân, hải trà tân, máy cưa',
      }
}

export default async function About(props: AboutPageProps) {
  const { data } = await getData();
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
                <AppstoreOutlined /> Giới Thiệu
              </div>
            ),
          },
        ]}
      />
      <div className="flex flex-col items-start gap-8">
        <div className="w-full h-[200px] lg:h-[400px]">
          <Image
            className="w-full h-full object-cover"
            width={0}
            height={0}
            src={data?.hinhAnh[0].hinhAnh ?? EMPTY_IMAGE}
            alt="nông cơ hải trà tân"
          />
        </div>
        <MarkdownX content={data?.noiDung} />
      </div>
    </Wrapper>
  );
}
