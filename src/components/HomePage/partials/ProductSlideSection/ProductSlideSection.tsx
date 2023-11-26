'use client';

import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ProductCard, TitleSection } from '@/components/global';
import { IProduct } from '@/@types/product';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { PRODUCT_ID } from '@/constants';

type TProductSlideSectionProps = {
  data?: IProduct[];
  title?: React.ReactNode;
};

const ProductSlideSection = ({ title, data }: TProductSlideSectionProps) => {
  const [productList, setProductList] = useState<IProduct[]>();
  useEffect(() => {
    data && setProductList(data);
  }, [data]);

  const slidePropsTop = {
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
        speed: 1,
    },
    lazyLoad: true,
    reducedMotion: {
        speed: 1,
        rewindSpeed: 0,
        autoplay: true,
      },

    },
    extensions:{ AutoScroll }
  };

  // const slidePropsBottom = {
  //   options: {
  //       type: 'loop',
  //       arrows: false,
  //       drag: true,
  //       pagination: false,
  //       direction: 'rtl',
  //       perPage: 4,
  //       gap: '1rem',
  //       focus: 0.5,
  //       breakpoints: {
  //         640: {
  //           perPage: 2,
  //         },
  //       },
  //       autoScroll: {
  //         pauseOnFocus: true,
  //         pauseOnHover: true,
  //         rewind: true,
  //         speed: 1,
  //     },
  //     lazyLoad: true,
  //     reducedMotion: {
  //         speed: 1,
  //         rewindSpeed: 0,
  //         autoplay: true,
  //       },
  
  //     },
  //     extensions:{ AutoScroll }
  // }

  return (
    <div>
      {/* Title */}
      <TitleSection title={title} />

      <Splide 
      {...slidePropsTop} aria-label="My Favorite Images">
        {productList &&
          Array.isArray(productList) &&
          productList
            .map((ele: IProduct) => {
              return (
                <SplideSlide key={ele.maSanPham}>
                  <ProductCard
                    title={ele.tenSanPham}
                    discountPrice={ele.giaGiam}
                    price={ele.giaGoc}
                    image={ele?.hinhAnh[0]?.hinhAnh}
                  />
                </SplideSlide>
              );
            })}
      </Splide>

      {/* <div className="mt-8">
        <Splide 
        {...slidePropsBottom} aria-label="My Favorite Images">
          {productList &&
            Array.isArray(productList) &&
            productList
              .filter(
                (item: IProduct) =>
                  item.danhMucNho.maDanhMucChinh === PRODUCT_ID.lawnMower,
              )
              .map((ele: IProduct) => (
                <SplideSlide key={ele.maSanPham}>
                  <ProductCard
                    title={ele.tenSanPham}
                    discountPrice={ele.giaGiam}
                    price={ele.giaGoc}
                    image={ele?.hinhAnh[0]?.hinhAnh}
                  />
                </SplideSlide>
              ))}
        </Splide>
      </div> */}
    </div>
  );
};

export default ProductSlideSection;
