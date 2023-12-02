'use client';

import { IPagination } from '@/@types/global';
import { IProduct } from '@/@types/product';
import { IPageProductContent } from '@/app/(rootLayout)/san-pham/[id]/page';
import { ProductListPagination } from '@/components/global';
import { PageService } from '@/services';
import { Pagination } from 'antd';
import React, { useState } from 'react';

type TProductListProps = {
  staticContent?: IPageProductContent;
  data?: { data: IProduct[] } & IPagination;
  mainCategoryId: string;
};

const ProductList = ({
  staticContent,
  data,
  mainCategoryId,
}: TProductListProps) => {
  const [products, setProducts] = useState<
    ({ data: IProduct[] } & IPagination) | undefined
  >(data);
  const [sectionLoading, setSectionLoading] = useState(false);

  // handle update product
  const handleFetchProduct = async (page: number) => {
    setSectionLoading(true);
    try {
      const res = await PageService.fetchProductPagination(
        { page },
        {mainCategoryId},
      );
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
      <ProductListPagination
        loading={sectionLoading}
        onChangePage={(page) => handleFetchProduct(page)}
        data={products}
        title={staticContent?.productList.title}
      />
    </div>
  );
};

export default ProductList;
