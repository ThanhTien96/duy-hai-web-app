'use client';

import React, { useEffect, useState } from 'react';
import { ProductCard } from '@/components/global';
import TitleSection from '@/components/global/TitleSection';
import { IProduct } from '@/@types/product';
import { ISubCategory } from '@/@types/global';
import { Empty } from 'antd';
import { EMPTY_IMAGE } from '@/constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useRouter } from 'next/navigation';

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

  return (
    <div>
      {/* Z */}
      <TitleSection
        childTitle={subCategories}
        title={title}
      />
      <div>
        {/* map products */}
        {productList && Array.isArray(productList) && productList.length > 0 ? (
          <Splide {...slideProps}>
            {productList.map((ele: IProduct, idx: number) => {
              return (
                <SplideSlide key={ele.maSanPham + idx}>
                  <ProductCard
                    onClick={() => router.push(ele.maSanPham)}
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
                </SplideSlide>
              );
            })}
          </Splide>
        ) : (
          <div className="col-span-12">
            <Empty description="Không Có Sản Phẩm" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
