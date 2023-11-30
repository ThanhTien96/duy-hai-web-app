import { IProduct } from '@/@types/product';
import { MediaList } from '@/components/ProductDetail';
import { Wrapper } from '@/components/shared';
import { PageService } from '@/services';

export async function generateStaticParams() {
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
    <div className='grid grid-cols-12 gap-8'>
        <MediaList className='col-span-5' mediaList={productDetail?.hinhAnh} />

    </div>
  </Wrapper>;
}
