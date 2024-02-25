'use client';

import { IProductMedia } from '@/@types/product';
import { CREDIT_CARD, EMPTY_IMAGE } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  IProductCart,
  decreaseProduct,
  deleteProductFormCart,
  inscreaseProduct,
} from '@/store/cart/cartSlice';
import Image from 'next/image';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Title } from '../shared';
import { QuantityItem } from '../ProductDetail/ContentColumn/partials';
import { ButtonShared } from '../global';
import type { RadioChangeEvent } from 'antd';
import { ConfigProvider, Divider, Input, Radio, Space, Tooltip } from 'antd';
import { IPaymentCardInfo } from '@/@types/payment';
import clsx from 'clsx';
import { EPaymentMethod, setPaymentMethod } from '@/store/payment/paymentSlice';
import { CopyOutlined } from '@ant-design/icons';


const PaymentItemInfo = () => {
  const { cartList } = useAppSelector((state) => state.cart);
  const { paymentCardInfo } = useAppSelector((state) => state.payment);
  const dispatch = useAppDispatch();
  const [method, setMethod] = useState(1);
  const [isCopy, setIsCopy] = useState<string>('');

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setMethod(e.target.value);
  };

  useEffect(() => {
    const meth =
      method === 1 ? EPaymentMethod.CASH : EPaymentMethod.CREDIT_CARD;
    dispatch(setPaymentMethod(meth));
  }, [method]);

  const totalPrice = useMemo(() => {
    return cartList.reduce(
      (tt: number, item: IProductCart) =>
        (tt += item.quantity * item.product.giaGiam),
      0,
    );
  }, [cartList]);

  // handle copy
  const handleCopy = useCallback(async (data: string, id: string) => {
    await navigator.clipboard.writeText(data);
    setIsCopy(id);
    setTimeout(() => {
      setIsCopy('');
    }, 1000);
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff8027',
        },
      }}
    >
      <div>
        {cartList &&
          Array.isArray(cartList) &&
          cartList.length > 0 &&
          cartList.map((item: IProductCart) => (
            <div
              key={item.product?.maSanPham}
              className="flex items-start gap-3 border-b border-solid border-gray-200 h-[120px] py-2"
            >
              <Image
                width={120}
                height={120}
                className="object-cover"
                src={
                  item?.product?.hinhAnh?.find(
                    (img: IProductMedia) => img.hinhChinh,
                  )?.hinhAnh ?? EMPTY_IMAGE
                }
                alt={item?.product?.tenSanPham}
              />
              <div className="flex flex-col justify-around h-full w-full">
                <Title level={1} className="text-large !font-bold">
                  {' '}
                  {item?.product?.tenSanPham}
                </Title>
                <p className="text-medium !font-bold">
                  {item.product.giaGiam.toLocaleString()} VNĐ
                </p>
                <div className="block lg:flex items-center justify-between">
                  <QuantityItem
                    size="small"
                    className="lg:w-[30%] !text-center"
                    onIncrease={() =>
                      dispatch(inscreaseProduct({ id: item.product.maSanPham }))
                    }
                    onDecrease={() =>
                      dispatch(decreaseProduct({ id: item.product.maSanPham }))
                    }
                    defaultValue={item?.quantity}
                  />
                  <ButtonShared
                    onClick={() =>
                      dispatch(
                        deleteProductFormCart({ id: item.product.maSanPham }),
                      )
                    }
                    className="!w-full lg:!w-auto mt-2 lg:mt-0"
                    content="Xoá"
                  />
                </div>
              </div>
            </div>
          ))}
        {/* total */}
        <div className="flex items-center justify-between mt-4">
          <Title level={6} className="text-large !font-bold uppercase">
            TỔNG TIỀN:{' '}
          </Title>
          <Title level={6} className="text-large !font-bold text-app-600">
            {totalPrice?.toLocaleString()} VNĐ
          </Title>
        </div>
        {/* payment method */}
        <div className="mt-4 border-t border-solid border-gray-200 pt-4">
          <Radio.Group onChange={onChange} value={method}>
            <Space size="middle" direction="vertical">
              <Radio value={1}>
                <p className="text-large !font-bold">
                  Thanh Toán Khi Nhận Hàng
                </p>
              </Radio>
              <Divider className="my-2" />
              <Radio value={2}>
                <p className="text-large !font-bold">
                  Thanh Toán Chuyển Khoản Ngân Hàng
                </p>
              </Radio>
            </Space>
          </Radio.Group>
          <div
            className={clsx(
              'flex flex-col items-start gap-4 mt-4 overflow-hidden h-0 invisible transition-all duration-300',
              {
                'h-[200px] !visible': method === 2,
              },
            )}
          >
            {paymentCardInfo &&
              Array.isArray(paymentCardInfo) &&
              paymentCardInfo.map((method: IPaymentCardInfo) => (
                <div
                  key={method.id}
                  className="flex items-center gap-4 h-[100px] w-full relative"
                >
                  <Image
                    src={
                      method.nganHang === 'agribank'
                        ? CREDIT_CARD.agribank
                        : CREDIT_CARD.mbBank
                    }
                    alt={method.nganHang}
                    width={100}
                  />
                  <div>
                    <p className="text-medium">
                      TK: <b>{method.soTaiKhoan}</b>
                    </p>
                    <p className="text-medium capitalize">
                      CTK: <b>{method.chuTaiKhoan}</b>
                    </p>
                    <p className="text-medium capitalize">{method.chiNhanh}</p>
                  </div>
                  {/* copy */}
                  <Tooltip open={isCopy === method.id} title="copy thành công">
                    <CopyOutlined onClick={() => handleCopy(method.soTaiKhoan, method.id)} className="absolute top-2 right-2 p-1 bg-gray-200 rounded-md hover:text-white hover:bg-gray-500 cursor-pointer" />
                  </Tooltip>
                </div>
              ))}
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default PaymentItemInfo;
