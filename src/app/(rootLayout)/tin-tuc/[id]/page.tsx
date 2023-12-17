import { INews } from '@/@types/news';
import { NewsDetailProvider } from '@/components/NewsDetailPage';
import { Wrapper } from '@/components/shared';
import { FALLBACK_SEO, apiPaths } from '@/constants';
import { http } from '@/http';
import { PageService } from '@/services';
import { stringToSlug } from '@/utils/common';
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

async function getData(id: string) {
  const res = await PageService.fetchNewsDetail(id);

  return { data: res.data.data } as { data: INews };
}

export async function generateStaticParams() {
  const res = await http({
    url: apiPaths.news,
    method: 'GET',
  });

  return res.data.data.map((ele: INews) => ({ id: ele.maTinTuc }));
}

export async function generateMetadata({params} : {params: {id: string}}) {
    const res = await PageService.fetchNewsDetail(params.id);
    const metaData: INews = res?.data?.data;
    if(!metaData) return FALLBACK_SEO;

    return {
        title: metaData.tieuDe,
        description: metaData.noiDungNgan,
        openGraph: {
          title: metaData.tieuDe,
          description: metaData.noiDungNgan,
          images: [
            {
              url: metaData.hinhAnh && Array.isArray(metaData.hinhAnh) ? metaData.hinhAnh[0]?.hinhAnh : '/logo/hai-tra-tan-logo.png',
              width: 32,
              height: 32,
            },
          ],
        },
        keywords: metaData.tieuDe + ' , tin tức mới nhất',
      }
}

export default async function NewsDetail({
  params,
}: {
  params: { id: string };
}) {

  const { data } = await getData(params.id);
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
            href: "/tin-tuc",
            title: (
              <div className="flex items-center gap-2">
                <AppstoreOutlined /> Tin Tức
              </div>
            ),
          },
          {
            title: (
              <span className="flex items-center gap-2">
                {stringToSlug(data?.tieuDe)}
              </span>
            ),
          },
        ]}
      />

      <NewsDetailProvider
        media={data?.hinhAnh}
        createAt={data?.createAt}
        title={data?.tieuDe}
        className="lg:mt-8"
        content={data?.noiDung}
      />
    </Wrapper>
  );
}
