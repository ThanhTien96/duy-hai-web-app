'use client';

import { IPagination } from '@/@types/global';
import { IProduct } from '@/@types/product';
import React, { useEffect, useReducer } from 'react';
import { setLoading, setPagination, setProduct } from './productAction';
import { PageService } from '@/services';
import { Empty, Pagination } from 'antd';
import { EMPTY_IMAGE, PAGE_SIZE } from '@/constants';
import { ProductCard, SectionLoading } from '../global';
import { notFound, useRouter } from 'next/navigation';

type TProductSectionProps = {
  mainCategoryId: string;
};

export enum EProdReducerType {
  SET_LOADING = 'productLoading',
  SET_PRODUCT = 'setProduct',
  SET_PAGINATION = 'setPagination',
}

export type TProductSlice = {
  loading: boolean;
  products: IProduct[];
  pagination?: IPagination;
};

export type TProdSliceAction = {
  type: EProdReducerType;
  payload: any;
};

export const initialState: TProductSlice = {
  loading: false,
  pagination: undefined,
  products: [],
};

const ProductReducer = (state: TProductSlice, action: TProdSliceAction) => {
  const { type, payload } = action;
  switch (type) {
    case EProdReducerType.SET_LOADING:
      return { ...state, loading: payload };
    case EProdReducerType.SET_PAGINATION:
      return { ...state, pagination: payload };
    case EProdReducerType.SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return { ...state };
  }
};

const ProductSection = ({ mainCategoryId }: TProductSectionProps) => {
  const [{ loading, products, pagination }, dispatch] = useReducer(
    ProductReducer,
    initialState,
  );
  const router = useRouter();

  // handle fetch data
  const handleFetchProduct = async (page = 1,mainCategoryId: string) => {
    dispatch(setLoading(true));
    try {
      const res = await PageService.fetchProductPagination(
        { page: page, perPage: PAGE_SIZE.product },
        {mainCategoryId: mainCategoryId}
      );
      if (res.status === 200) {
        dispatch(setProduct(res.data.data));
        dispatch(
          setPagination({
            currentPage: res?.data?.currentPage,
            total: res?.data?.total,
            totalPage: res?.data?.totalPage,
          }),
        );
        dispatch(setLoading(false));
      }
    } catch (err) {
      // emty block
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    handleFetchProduct(1, mainCategoryId);
  }, []);

  return (
    <div>
      {!loading && (
        <div className="grid grid-cols-12 gap-4 lg:gap-8">
          {products && Array.isArray(products) && products.length > 0  ? (
            products.map((ele: IProduct) => (
              <ProductCard
                className="col-span-6 lg:col-span-3"
                key={ele.maSanPham}
                onClick={() => router.push(`/san-pham/${ele.maSanPham}`)}
                id={ele.maSanPham}
                title={ele?.tenSanPham}
                discountPrice={ele?.giaGiam}
                price={ele?.giaGoc}
                image={
                  ele.hinhAnh && Array.isArray(ele.hinhAnh)
                    ? ele?.hinhAnh[0]?.hinhAnh
                    : EMPTY_IMAGE
                }
              />
            ))
          ) : (
            <div className="col-span-12 text-center">
              <Empty description="0 Sản Phẩm" />
            </div>
          )}
        </div>
      )}
      {!loading && products.length > 0 && (
        <div className="col-span-12 text-center mt-4 lg:mt-8">
          <Pagination
            size='small'
            onChange={(e) => handleFetchProduct(e, mainCategoryId)}
            total={pagination && pagination.total}
            defaultCurrent={pagination && pagination.currentPage}
            pageSize={PAGE_SIZE.product}
          />
        </div>
      )}
      {loading &&  <SectionLoading />}
    </div>
  );
};

export default ProductSection;
