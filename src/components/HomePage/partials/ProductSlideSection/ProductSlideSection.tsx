'use client';

import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { ProductCard, TitleSection } from '@/components/global';
import { IProduct } from '@/@types/product';
import { PRODUCT_ID } from '@/constants';
import { Empty } from 'antd';
import { useRouter } from 'next/navigation';

type TProductSlideSectionProps = {
  data?: IProduct[];
  title?: React.ReactNode;
};

const ProductSlideSection = ({ title, data }: TProductSlideSectionProps) => {
  const [productList, setProductList] = useState<IProduct[]>();
  const router = useRouter();
  useEffect(() => {
    data && setProductList(data);
  }, [data]);

  const slidePropsTop = {
    options: {
      type: 'loop',
      arrows: false,
      drag: true,
      pagination: false,
      direction: 'ltr',
      perPage: 4,
      gap: '1rem',
      focus: 0.5,
      breakpoints: {
        640: {
          perPage: 2,
        },
      },
      autoScroll: {
        pauseOnFocus: true,
        pauseOnHover: true,
        rewind: true,
        speed: 0.6,
      },
      lazyLoad: true,
      reducedMotion: {
        speed: 1,
        rewindSpeed: 0,
        autoplay: true,
      },
    },
    extensions: { AutoScroll },
  };

  const slidePropsBottom = {
    options: {
      type: 'loop',
      arrows: false,
      drag: true,
      pagination: false,
      direction: 'rtl',
      perPage: 4,
      gap: '1rem',
      focus: 0.5,
      breakpoints: {
        640: {
          perPage: 2,
        },
      },
      autoScroll: {
        pauseOnFocus: true,
        pauseOnHover: true,
        rewind: true,
        speed: 0.6,
      },
      lazyLoad: true,
      reducedMotion: {
        speed: 1,
        rewindSpeed: 0,
        autoplay: true,
      },
    },
    extensions: { AutoScroll },
  };

  return (
    <div>
      {/* Title */}
      <TitleSection title={title} />

      {/* saw  */}
      {productList && Array.isArray(productList) && productList.length > 0 ? (
        <Splide {...slidePropsTop} aria-label="My Favorite Images">
          {productList
            ?.filter(
              (prod: IProduct) =>
                prod?.danhMucNho?.maDanhMucChinh === PRODUCT_ID.saw,
            )
            ?.map((ele: IProduct) => {
              return (
                <SplideSlide key={ele?.maSanPham}>
                  <ProductCard
                    product={ele}
                    onClick={() => router.push(`san-pham/${ele.maSanPham}`)}
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

      {/* lawn mower */}
      {productList && Array.isArray(productList) && productList.length > 0 && (
        <div className="mt-8">
          <Splide {...slidePropsBottom} aria-label="My Favorite Images">
            {productList
              ?.filter(
                (item: IProduct) =>
                  item?.danhMucNho?.maDanhMucChinh === PRODUCT_ID.lawnMower,
              )
              ?.map((ele: IProduct) => (
                <SplideSlide key={ele.maSanPham}>
                  <ProductCard
                    product={ele}
                    onClick={() => router.push(`san-pham/${ele.maSanPham}`)}
                  />
                </SplideSlide>
              ))}
          </Splide>
        </div>
      )}
    </div>
  );
};

export default ProductSlideSection;
