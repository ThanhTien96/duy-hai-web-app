'use client';
import { QuantityItem } from '@/components/ProductDetail/ContentColumn/partials';
import { Title } from '@/components/shared';
import { Image } from 'antd';
import React, { useState } from 'react';
import { ButtonShared } from '../..';
import { useAppDispatch } from '@/store';
import { IProduct, IProductMedia } from '@/@types/product';
import { EMPTY_IMAGE } from '@/constants';
import { useRouter } from 'next/navigation';

type TOrderItemProps = {
  product?: IProduct;
  onAddToCart?: (quantity: number) => void;
};

const OrderItem = ({ product, onAddToCart }: TOrderItemProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const router = useRouter();

  const baseImage =
    product &&
    product.hinhAnh &&
    Array.isArray(product.hinhAnh) &&
    product.hinhAnh.length > 0
      ? product?.hinhAnh.find((img: IProductMedia) => img.hinhChinh)?.hinhAnh
      : EMPTY_IMAGE;

  return (
    <div>
      <div className="flex items-start gap-8 ">
        <Image
          className="object-cover"
          src={product ? baseImage : EMPTY_IMAGE}
          width={100}
          height={100}
          alt="..."
        />
        <div className="flex flex-col items-start justify-between h-[100px]">
          <p className="text-large !font-semibold capitalize">
            {product && product.tenSanPham}
          </p>
          <p>
            Giá:{' '}
            <b className="text-app-600">
              {product && product.giaGiam && product?.giaGiam?.toLocaleString()}
            </b>{' '}
            VNĐ
          </p>
          <div>
            <QuantityItem
              onIncrease={() => setQuantity((current) => ++current)}
              onDecrease={() =>
                quantity > 1 && setQuantity((current) => --current)
              }
              className="lg:!w-[50%]"
              defaultValue={quantity}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="mt-4 border-t border-gray-border pt-4 flex items-center justify-between">
          <p className="text-large !font-bold">Tổng: </p>
          <p className="text-large !font-bold text-app-600">
            {product && (product?.giaGiam * quantity).toLocaleString()} VNĐ
          </p>
        </div>
        <div className="flex items-center justify-end mt-8 gap-2">
          <ButtonShared
            onClick={() => {
              onAddToCart && onAddToCart(quantity);
              setQuantity(1);
            }}
            htmlType="button"
            content="Thêm Giỏ Hàng"
          />
          <ButtonShared
            onClick={() => {
              onAddToCart && onAddToCart(quantity);
              setQuantity(1);
              router.push('/thanh-toan')
            }}
            htmlType="button"
            content="Thanh Toán"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
