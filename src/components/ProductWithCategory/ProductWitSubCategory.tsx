'use client';

import { IPagination, ISubCategory } from '@/@types/global';
import { IProduct } from '@/@types/product';
import React, { useState } from 'react';
import {
  ProductCard,
  ProductListPagination,
  SectionLoading,
  TitleSection,
} from '../global';
import { PageService } from '@/services';
import { EMPTY_IMAGE, PAGE_SIZE } from '@/constants';
import clsx from 'clsx';
import { Empty, Pagination } from 'antd';
import { useRouter } from 'next/navigation';

type TProductWitSubCategoryProps = {
  data?: { data: ISubCategory } & IPagination;
  subCategoryId: string;
  title?: string;
};

const ProductWitSubCategory = ({
  data,
  subCategoryId,
  title,
}: TProductWitSubCategoryProps) => {
  const [products, setProducts] = useState<
    ({ data: ISubCategory } & IPagination) | undefined
  >(data);
  const [sectionLoading, setSectionLoading] = useState(false);
  const router = useRouter();

  // handle update product
  const handleFetchProduct = async (page: number) => {
    setSectionLoading(true);
    try {
      const res = await PageService.fetchSubCategoryDetail(subCategoryId, {
        page,
        perPage: PAGE_SIZE.product,
      });
      if (res.status === 200) {
        setProducts(res.data);
      }
    } catch (err) {
      // emty block
    } finally {
      setSectionLoading(false);
    }
  };

  return (
    <div>
      <div className={clsx('relative')}>
        {/* Title section */}
        <TitleSection title={title} />
        {/* product */}
        {!sectionLoading && (
          <div className="grid grid-cols-12 gap-4 lg:gap-8">
            {products &&
            products.data?.danhSachSanPham &&
            Array.isArray(products.data.danhSachSanPham) &&
            products.data.danhSachSanPham.length > 0 ? (
              products.data?.danhSachSanPham?.map((ele: IProduct) => (
                <ProductCard
                  product={ele}
                  className="col-span-6 lg:col-span-3"
                  key={ele.maSanPham}
                  onClick={() => router.push(`/san-pham/${ele.maSanPham}`)}
                />
              ))
            ) : (
              <div className="col-span-12 text-center">
                <Empty description="0 Sản Phẩm" />
              </div>
            )}
          </div>
        )}
        {!sectionLoading &&
          products &&
          products?.data?.danhSachSanPham &&
          Array.isArray(products.data.danhSachSanPham) &&
          products.data.danhSachSanPham.length > 0 && (
            <div className="col-span-12 text-center mt-4 lg:mt-8">
              <Pagination
                onChange={(e) => handleFetchProduct(e)}
                total={products && products.total}
                defaultCurrent={products && products.currentPage}
                pageSize={PAGE_SIZE.product}
              />
            </div>
          )}
        {sectionLoading && <SectionLoading />}
      </div>
    </div>
  );
};

export default ProductWitSubCategory;
