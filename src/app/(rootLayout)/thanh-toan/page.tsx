'use client';

import { PaymentForm, PaymentItemInfo } from '@/components/PaymentPage';
import { Wrapper } from '@/components/shared';
import { useAppDispatch } from '@/store';
import { fetchProvincesThunk } from '@/store/location/locationThunk';
import { fetchPaymentInfoThunk } from '@/store/payment/paymentSlice';
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProvincesThunk());
    dispatch(fetchPaymentInfoThunk());
  }, []);
  return (
    <Wrapper>
      <Breadcrumb
        className="border-b border-dashed border-gray-border"
        items={[
          {
            href: '/',
            title: (
              <div className="flex items-center gap-2">
                <HomeOutlined /> Trang Chủ
              </div>
            ),
          },
          {
            title: (
              <div className="flex items-center gap-2">
                <AppstoreOutlined /> Thanh Toán
              </div>
            ),
          },
        ]}
      />
      <div className="grid grid-cols-12 gap-space-3 mt-8">
        <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
          <PaymentForm onSubmit={(value) => console.log(value)} />
        </div>

        {/* payment item info */}
        <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
          <PaymentItemInfo />
        </div>
      </div>
    </Wrapper>
  );
}
