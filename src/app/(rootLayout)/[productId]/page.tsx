import { IProduct } from '@/@types/product';
import { ContentDetail, MediaList } from '@/components/ProductDetail';
import { Wrapper } from '@/components/shared';
import DrashLog from '@/components/shared/DrashLog';
import { PageService } from '@/services';

type Params = {
  productId: string;
};

export async function generateStaticParams():Promise<Params[]> {
  const product = await PageService.fetchAllProduct();

  return product?.data?.data?.map((ele: IProduct) => ({
    productId: ele.maSanPham,
  }));
}

async function getData(id: string) {
  const productDetail = await PageService.fetchProductDetail(id);

  return productDetail.data.data as IProduct;
}

export default async function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const productDetail = await getData(params.productId);

  return <Wrapper>
    <DrashLog data={productDetail} />
    <div className='grid grid-cols-12 gap-0 lg:gap-8'>
        <MediaList className='col-span-12 lg:col-span-5 w-full' mediaList={productDetail?.hinhAnh} />
        <ContentDetail className="col-span-12 lg:col-span-5 w-full" data={productDetail} />
    </div>
  </Wrapper>;
}
