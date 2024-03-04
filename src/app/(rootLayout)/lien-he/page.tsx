import ContactSection from '@/components/HomePage/partials/ContactSection';
import { AppTitle, ContactForm } from '@/components/global';
import { Wrapper } from '@/components/shared';
import { EMPTY_IMAGE } from '@/constants';
import { PageService } from '@/services';
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import clsx from 'clsx';
import Markdown from '../../../components/global/Markdown';

async function getData() {
  const res = await PageService.fetchContactPage();

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
    keywords:
      'nông cơ duy hải, nông cơ, nông cơ hải trà tân, hải trà tân, máy cưa',
  };
}

export default async function About() {
  const content = await getData();

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
                <AppstoreOutlined /> Liên Hệ
              </div>
            ),
          },
        ]}
      />
      <div className={clsx('grid grid-cols-12 gap-4 p-2 lg:p-8 w-full')}>
        <div className="col-span-12 overflow-hidden lg:col-span-7 order-2 lg:order-1 mt-6 lg:mt-0">
          <AppTitle title="Liên Hệ Chúng Tôi" />
          <ContactForm theme="light" />
        </div>
        <div className="col-span-12 lg:col-span-5 self-center order-1 lg:order-2">
          <h3 className="text-[18px] font-bold mb-4">
            {content?.data?.title}
          </h3>
          <Markdown
            className="flex flex-col gap-2"
            content={content?.data?.content}
          />
        </div>
      </div>
    </Wrapper>
  );
}
