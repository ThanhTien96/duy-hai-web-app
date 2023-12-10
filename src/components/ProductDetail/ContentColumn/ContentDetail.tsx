"use client"

import { IProduct } from '@/@types/product';
import { Title } from '@/components/shared';
import clsx from 'clsx';
import React, { useState } from 'react';
import { QuantityItem } from './partials';
import { ButtonShared } from '@/components/global';
import { FaHouse, FaPhone } from 'react-icons/fa6';
import Link from 'next/link';
import { CONTACT } from '@/constants/profileConst';
import { IPageProductContent } from '@/app/(rootLayout)/san-pham/[id]/page';
import { useAppDispatch } from '@/store';
import { useRouter } from 'next/navigation';
import { setAlert } from '@/store/app/appSlice';
import { addToCart, resetCart } from '@/store/cart/cartSlice';

type TContentDetailProps = {
  className?: string;
  data?: IProduct;
  staticContent?: IPageProductContent;
};

const ContentDetail = ({
  data,
  className,
  staticContent,
}: TContentDetailProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);

  // handle add to Cart
  const handleAddTocar = (quantity: number) => {
    dispatch(
      setAlert({ message: 'Thêm Giỏ Hàng Thành Công', status: 'success' }),
    );
    dispatch(addToCart({ product: data, quantity: quantity }));
  };
  return (
    <div className={clsx(className)}>
      <div className="flex items-start justify-between flex-col h-full">
        <Title className="heading6 w-full capitalize" level={1}>
          {data?.tenSanPham}
        </Title>
        <div className="w-full flex items-center gap-4 border-b border-solid border-gray-border py-2">
          <p>
            {staticContent?.contentDetail?.thuonHieu}:{' '}
            <span className="text-app-600 uppercase">
              {data?.danhMucNho?.tenDanhMucNho}
            </span>
          </p>
          <div className="w-[1px] h-[20px] bg-gray-border"></div>
          <p>
            {staticContent?.contentDetail?.tinhTrang}:{' '}
            <span className="text-app-600 capitalize">
              {data && data?.tongSoLuong > 0 ? 'Còn Hàng' : 'Hết Hàng'}
            </span>
          </p>
        </div>
        {/* detail */}
        <div className="w-full">
          <p className="text-medium py-4">{data?.moTaNgan}</p>
        </div>
        {/* price */}
        <div className="bg-gray-border/60 py-1 px-4 my-4 w-full">
          <p className="heading6 text-app-600">
            {data?.giaGiam.toLocaleString()}{' '}
            {staticContent?.contentDetail?.currency}
          </p>
        </div>
        {/* quantity */}
        <div className="flex items-center gap-4 my-6 w-full">
          <p className="text-large">{staticContent?.contentDetail?.soLuong}: </p>
          <QuantityItem defaultValue={1} onIncrease={() => setQuantity(quantity + 1)} onDecrease={() => setQuantity(quantity - 1)} className="w-[35%]" />
        </div>
        {/* action */}
        <div className="flex items-center gap-6 w-full">
          <ButtonShared onClick={() => handleAddTocar(quantity)} className="w-1/2" content="Thêm Giỏ Hàng" />
          <ButtonShared onClick={() => {
            handleAddTocar(quantity)
            router.push("/thanh-toan")
          }} className="w-1/2" content="Mua Hàng" />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Link href={'tel:0788246979'} className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-md flex items-center justify-center border border-solid border-app-500">
              <FaPhone className="text-app-500" />
            </span>
            <p className="text-large !font-semibold text-app-500">
              {CONTACT.phone}
            </p>
          </Link>
          <Link
            href={CONTACT.googleMap}
            target="_blank"
            className="flex items-center gap-4"
          >
            <span className="w-8 h-8 rounded-md flex items-center justify-center border border-solid border-app-500">
              <FaHouse className="text-app-500" />
            </span>
            <p className="text-large !font-semibold text-app-500">
              {CONTACT.address}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
