'use client';

import sharedContent from '@/utils/shared';
import Image from 'next/image';
import React, { useState } from 'react';
import { ButtonShared } from '..';
import { ButtonType } from '../ButtonShared/Index';
import styles from './ProductCard.module.scss';
import clsx from 'clsx';
import CartIcon from '@/libIcon/CartIcon';
import calculator from '@/utils/calculator';
import { useRouter } from 'next/navigation';
import { Modal } from 'antd';
import { OrderItem } from './partials';
import { IProduct, IProductMedia } from '@/@types/product';
import { IMediaBase } from '@/@types/global';
import { useAppDispatch } from '@/store';
import { setAlert } from '@/store/app/appSlice';
import { addToCart } from '@/store/cart/cartSlice';

type ProductCardProps = {
  product: IProduct;
  onClick?: () => void;
  className?: string;
};

const ProductCard = ({ product, onClick, className }: ProductCardProps) => {
  const [openOrder, setOpenOrder] = useState<boolean>(false);
  const baseImage =
    product &&
    product.hinhAnh &&
    Array.isArray(product.hinhAnh) &&
    product.hinhAnh.length > 0 &&
    product?.hinhAnh.find((img: IProductMedia) => img.hinhChinh);
  const dispatch = useAppDispatch();

  // handle add to Cart
  const handleAddTocar = (quantity: number) => {
    dispatch(
      setAlert({ message: 'Thêm Giỏ Hàng Thành Công', status: 'success' }),
    );
    dispatch(addToCart({ product, quantity }));
    setOpenOrder(false);
  };

  return (
    <div
      className={clsx(
        className,
        'border border-solid border-gray-border bg-white rounded-md',
        styles.cardItem,
      )}
    >
      {calculator.calcPercent(product?.giaGoc ?? 0, product?.giaGiam ?? 0) >
        0 && (
        <div className={styles.cardDiscount}>
          <div className={styles.cardDiscountStick}></div>
          <span>
            -
            {calculator.calcPercent(
              product?.giaGoc ?? 0,
              product?.giaGiam ?? 0,
            )}
            %
          </span>
        </div>
      )}
      <div
        onClick={onClick}
        className="h-[100px] md:h-[130px] lg:h-[160px] w-full overflow-hidden rounded-t-md"
      >
        <Image
          className="w-full h-full object-cover hover:scale-110 transition-all duration-300 cursor-pointer"
          src={baseImage ? baseImage?.hinhAnh : sharedContent.emtyImage}
          alt="..."
          width={0}
          height={0}
        />
      </div>
      {/* bottom card */}
      <div className="p-2 pb-4 flex flex-col h-[190px] lg:h-[160px] justify-between">
        {/* card content */}
        <div className="text-center">
          <h1
            onClick={onClick}
            className="text-[12px] lg:text-[14px] font-semibold capitalize line-clamp-2 overflow-hidden transition-all duration-300 hover:text-app-500 cursor-pointer"
          >
            {product?.tenSanPham}
          </h1>
        </div>
        {/* Price */}
        <div className="max-xs:block lg:flex items-center justify-center gap-1 pb-4 lg:mt-4">
          <span className="text-[10px] lg:text-[12px] font-semibold text-sub-text line-through">
            {product?.giaGoc?.toLocaleString()} VNĐ
          </span>
          <p className="font-semibold text-[12px] lg:text-[14px]">
            Giá:{' '}
            <span className="text-error">
              {product?.giaGiam?.toLocaleString()} VNĐ
            </span>
          </p>
        </div>
        {/* button action */}
        <div className="xs:block lg:flex justify-between items-center">
          <ButtonShared
            onClick={() => setOpenOrder(true)}
            className={'block lg:inline-block w-full lg:w-auto'}
            size={ButtonType.MEDIUM}
            content={
              <span className="flex items-center justify-center gap-2">
                <CartIcon width="15px" height="15px" />
                <span>Mua Hàng</span>
              </span>
            }
          />
          <ButtonShared
            onClick={onClick}
            className={clsx(
              'mt-2 lg:mt-0 block lg:inline-block w-full lg:w-auto',
            )}
            size={ButtonType.MEDIUM}
            content="Xem Chi Tiết"
          />
        </div>
      </div>

      <Modal
        open={openOrder}
        onCancel={() => setOpenOrder(false)}
        footer={null}
      >
        <OrderItem
          onAddToCart={(quantity) => handleAddTocar(quantity)}
          product={product}
        />
      </Modal>
    </div>
  );
};

export default ProductCard;
