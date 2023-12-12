'use client';

import React, { useEffect, useState } from 'react';
import { ProductCard } from '@/components/global';
import TitleSection from '@/components/global/TitleSection';
import { IProduct } from '@/@types/product';
import { ISubCategory } from '@/@types/global';
import { Empty, Spin } from 'antd';
import { EMPTY_IMAGE } from '@/constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useRouter } from 'next/navigation';
import { PageService } from '@/services';
import Loading from '@/app/(rootLayout)/loading';

export type ProductSectionProps = {
  data?: IProduct[];
  title?: React.ReactNode;
  subCategories?: ISubCategory[];
};

const ProductSection = ({
  data,
  title,
  subCategories,
}: ProductSectionProps) => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    subCategories?.forEach((ele: ISubCategory) =>
      ele.danhSachSanPham?.map((prod: IProduct) =>
        setProductList((current) => [...current, prod]),
      ),
    ) ?? [];
  }, []);
  const slideProps = {
    options: {
      type: 'loop',
      arrows: true,
      drag: true,
      pagination: false,
      perPage: 4,
      width: '100%',
      gap: '1rem',
      breakpoints: {
        640: {
          perPage: 2,
          gap: '1rem',
        },
      },
    },
  };

  // handle filter product with sub category
  const handleFilterProductWithType = async (subCategory: string) => {
    if (!subCategory) {
      subCategories?.forEach((ele: ISubCategory) =>
        ele.danhSachSanPham?.map((prod: IProduct) =>
          setProductList((current) => [...current, prod]),
        ),
      ) ?? [];
      return;
    }
    setLoading(true);
    try {
      const response = await PageService.fetchProductWithCategory(subCategory);

      if (response) {
        setProductList(response.data.data.danhSachSanPham);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Z */}
      <TitleSection
        handleChooseType={handleFilterProductWithType}
        childTitle={subCategories}
        title={title}
      />
      <Spin spinning={loading}>
        {/* map products */}
        {productList && Array.isArray(productList) && productList.length > 0 ? (
          <Splide {...slideProps}>
            {productList.map((ele: IProduct, idx: number) => {
              return (
                <SplideSlide key={ele.maSanPham + idx}>
                  <ProductCard
                    onClick={() => router.push(`san-pham/${ele.maSanPham}`)}
                    product={ele}
                  />
                </SplideSlide>
              );
            })}
          </Splide>
        ) : (
          <div className="col-span-12 text-center">
            <Empty description="0 Sản Phẩm" />
          </div>
        )}
      </Spin>
    </div>
  );
};

export default ProductSection;
