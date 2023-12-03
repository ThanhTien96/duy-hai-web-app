"use client"

import { IProduct } from '@/@types/product';
import clsx from 'clsx';
import React from 'react';
import { ProductCard, SectionLoading, TitleSection } from '..';
import { IPagination, ISubCategory } from '@/@types/global';
import { EMPTY_IMAGE, PAGE_SIZE } from '@/constants';
import { Empty, Pagination } from 'antd';
import { useRouter } from 'next/navigation';

type TProductListPaginationProps = {
  className?: string;
  data?: { data: IProduct[] } & IPagination;
  subCategories?: ISubCategory[];
  title?: string;
  onChangePage?: (page: number) => void;
  loading?: boolean;
};

const ProductListPagination = ({
  className,
  data,
  title,
  subCategories,
  onChangePage,
  loading,
}: TProductListPaginationProps) => {
  const router = useRouter();
  return (
    <div className={clsx(className, 'relative')}>
      {/* Title section */}
      <TitleSection childTitle={subCategories} title={title} />
      {/* product */}
      {!loading && (
        <div className="grid grid-cols-12 gap-4 lg:gap-8">
          {data && Array.isArray(data.data) && data.data.length > 0 ? (
            data.data.map((ele: IProduct) => (
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
      )
      
      }
      {!loading &&data && Array.isArray(data.data) &&  data.data.length > 0 && <div className="col-span-12 text-center mt-4 lg:mt-8">
        <Pagination
          onChange={(e) => onChangePage && onChangePage(e)}
          total={data && data.total}
          defaultCurrent={data && data.currentPage}
          pageSize={PAGE_SIZE.product}
        />
      </div>}
      {loading && <SectionLoading />}
    </div>
  );
};

export default ProductListPagination;
