import { IProduct } from '@/@types/product';
import {
  ContentColmn,
  MediaList,
  ProductList,
} from '@/components/ProductDetail';
import { MarkdownX } from '@/components/global';
import { Title, Wrapper } from '@/components/shared';
import DrashLog from '@/components/shared/DrashLog';
import { PageService } from '@/services';
import proctDetaiContent from '@/json/product-detail.json';
import { IPagination } from '@/@types/global';
import { FALLBACK_SEO, PAGE_SIZE } from '@/constants';
import { Breadcrumb } from 'antd';
import { AppstoreOutlined, HomeOutlined, SketchOutlined } from '@ant-design/icons';

export interface IPageProductContent {
  productList: {
    title: string;
  };
  detailMarkdown: string;
  contentDetail: {
    thuonHieu: string;
    tinhTrang: string;
    soLuong: string;
    currency: string;
  };
}

type TParams = {
  id: string;
};

export async function generateStaticParams(): Promise<TParams[]> {
  const product = await PageService.fetchAllProduct();

  return product?.data?.data?.map((ele: IProduct) => ({
    id: ele.maSanPham,
  }));
}

async function getData(id: string) {
  const productDetail = await PageService.fetchProductDetail(id);

  const productList = await PageService.fetchProductPagination(
    { page: 1, perPage: PAGE_SIZE.product },
    { mainCategoryId: productDetail.data.data.danhMucNho.maDanhMucChinh },
  );

  return {
    productDetail: productDetail.data.data as IProduct,
    productList: productList.data as { data: IProduct[] } & IPagination,
  };
}

export async function generateMetadata({ params }: { params: TParams }) {
  const productDetail = await PageService.fetchProductDetail(params.id);
  const { hinhAnh, danhMucNho, tenSanPham, moTaNgan } = productDetail?.data
    ?.data as IProduct;
  if (productDetail.status !== 200) return FALLBACK_SEO;
  return {
    title: tenSanPham,
    description: moTaNgan,
    charset: 'utf-8',
    openGraph: {
      title: tenSanPham,
      description: moTaNgan,
      images: [
        {
          url: hinhAnh[0].hinhAnh,
          width: 32,
          height: 32,
        },
      ],
    },
    facebook: {
      title: tenSanPham,
      description: moTaNgan,
    },
    keywords: [tenSanPham, danhMucNho.tenDanhMucNho],
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: TParams;
}) {
  const { productDetail, productList } = await getData(params.id);
  // static content
  const staticContent: IPageProductContent = proctDetaiContent;

  return (
    <Wrapper>
      <Breadcrumb
        className="pb-2 border-b border-dashed border-gray-border mb-8 mt-4"
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
                <AppstoreOutlined /> Sản phẩm
              </div>
            ),
          },
          {
            title: (
              <div className="flex items-center gap-2">
                <SketchOutlined /> {productDetail.tenSanPham}
              </div>
            ),
          },
        ]}
      />

      <div className="grid grid-cols-12 gap-0 lg:gap-8">
        <MediaList
          className="col-span-12 lg:col-span-5 w-full"
          mediaList={productDetail?.hinhAnh}
        />
        <ContentColmn
          staticContent={staticContent}
          className="col-span-12 lg:col-span-5 w-full mt-8 lg:mt-0"
          data={productDetail}
        />
        <div className="col-span-12 mt-8">
          <Title
            className="heading6 pb-2 border-b border-solid border-gray-border mb-4"
            level={6}
          >
            {staticContent?.detailMarkdown}
          </Title>
          {/* bottom */}
          <MarkdownX className="product-detail" content={productDetail?.moTa} />
        </div>

        {/* product list */}
        <div className="col-span-12 mt-12">
          <ProductList
            mainCategoryId={productDetail.danhMucNho.maDanhMucChinh}
            data={productList}
            staticContent={staticContent}
          />
        </div>
      </div>
    </Wrapper>
  );
}
