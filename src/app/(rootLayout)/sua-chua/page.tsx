import { IFixPost } from '@/@types/fixpost';
import FixPostProvider from '@/components/FixPostPage/FixPostProvider';
import ListPost from '@/components/FixPostPage/ListPost';
import MainPost from '@/components/FixPostPage/MainPost';
import { Wrapper } from '@/components/shared';
import { PageService } from '@/services';
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

async function getData() {
  const res = await PageService.fetchFixPosts();

  return { data: res.data.data };
}


export default async function Page() {
  const content: { data: IFixPost[] } = await getData();
  const mainPost = content.data[0];

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
                <AppstoreOutlined /> sửa chữa
              </div>
            ),
          },
        ]}
      />
      <FixPostProvider postList={content.data} mainPost={mainPost}/>
      
    </Wrapper>
  );
}
