'use client';

import { EMPTY_IMAGE } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  IProductCart,
  decreaseProduct,
  deleteProductFormCart,
  inscreaseProduct,
} from '@/store/cart/cartSlice';
import Image from 'next/image';
import React from 'react';
import { ButtonShared } from '../..';
import { ButtonType } from '../../ButtonShared/Index';
import { Title } from '@/components/shared';
import { QuantityItem } from '@/components/ProductDetail/ContentColumn/partials';
import { Empty } from 'antd';

type Props = {};

const Cart = (props: Props) => {
  const dispath = useAppDispatch();
  const { cartList } = useAppSelector((state) => state.cart);

  return cartList && cartList.length > 0 ? (
    <div className="w-full text-left gap gap-cols-12">
      {cartList &&
        Array.isArray(cartList) &&
        cartList.map((ele: IProductCart) => (
          <div key={ele.product.maSanPham}>
            <div className="gap-4 lg:gap-8 pb-4 border-b border-gray-border pt-4 flex items-center justify-between">
              <Image
                className="object-cover w-1/3"
                src={
                  ele?.product?.hinhAnh?.find((ele) => ele.hinhChinh)
                    ?.hinhAnh ?? EMPTY_IMAGE
                }
                width={100}
                height={100}
                alt="..."
              />
              <div className="flex flex-col items-start justify-between h-[100px] w-2/3">
                <p className="text-md !font-semibold capitalize">
                  {ele?.product?.tenSanPham}
                </p>
                <p>
                  Giá:{' '}
                  <b className="text-app-600">
                    {ele?.product?.giaGiam?.toLocaleString()}
                  </b>{' '}
                  VNĐ
                </p>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                  <QuantityItem
                    size="small"
                    onIncrease={() =>
                      dispath(inscreaseProduct({ id: ele.product.maSanPham }))
                    }
                    onDecrease={() =>
                      dispath(decreaseProduct({ id: ele.product.maSanPham }))
                    }
                    className="lg:!w-[50%]"
                    defaultValue={ele?.quantity}
                  />
                  <ButtonShared
                    onClick={() =>
                      dispath(
                        deleteProductFormCart({ id: ele.product.maSanPham }),
                      )
                    }
                    htmlType="button"
                    content="Xoá"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      <div className="flex items-center justify-between mt-4">
        <p className="text-large !font-bold">Tổng: </p>
        <p className="text-large !font-bold text-app-600">
          {cartList &&
            cartList
              .reduce(
                (prev: number, crr: IProductCart) =>
                  (prev = crr.product.giaGiam * crr.quantity),
                0,
              )
              .toLocaleString()}{' '}
          VNĐ
        </p>
      </div>
    </div>
  ) : (
    <Empty description="0 Sản Phẩm Trong Giỏ Hàng..." />
  );
};

export default Cart;
