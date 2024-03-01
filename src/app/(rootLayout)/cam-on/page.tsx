'use client';

import { ButtonShared } from '@/components/global';
import { Title, Wrapper } from '@/components/shared';
import { useAppSelector } from '@/store';
import { CreditCardOutlined, HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const { paid } = useAppSelector((state) => state.payment);
  const router = useRouter();

  useEffect(() => {
    if(!paid) router.push("/")
  },[])

  return (
    <Wrapper>
      <Breadcrumb
        className="pb-2 border-b border-dashed border-gray-border mb-4 mt-4"
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
                <CreditCardOutlined /> Cám Ơn
              </div>
            ),
          },
        ]}
      />
      <div className="mt-8">
        <div className="flex items-center justify-center">
          <Image
            src={'/thankyou.png'}
            width={200}
            height={200}
            alt="thank-you"
          />
        </div>
        <div>
          <Title
            level={6}
            className="heading6 pb-2 border-b border-solid border-gray-200"
          >
            Thông Tin Đặt Hàng:
          </Title>
          <div className='mt-4'>
            <p>{paid && paid.tenKhachHang}</p>
            <p>{paid && paid.soDT}</p>
            <p>{paid && paid.diaChi}</p>
            
          </div>
          <div className='text-center '>
          <ButtonShared
            className='mt-4'
              content="Về Trang Chủ"
              onClick={() => router.push('/')}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
