'use client'
import { SearchInput, Wrapper } from '@/components/shared';
import { PhoneFilled, ShoppingCartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
import { Input } from 'antd';
import HeaderTopItem from './partials/HeaderTopItem';
import { SearchIcon } from '@/icons';

const { Search } = Input;

const TopHeader = () => {

  /** handle search function */
  const onSearch = (value: string) => console.log(value);

  return (
    <div>
      <Wrapper className='!py-4'>
        <div className="flex justify-between items-center">
          {/* logo */}
          <div>
            <Image src={require('@/assets/hai-tra-tan-logo.png')} alt="hai tra tan logo" width={80} height={80} />
          </div>
          {/* search engine */}
          <div>
            <SearchInput width={400} placeholder='Nhập Từ Khoá' onSearch={onSearch}/>
          </div>
          {/* shopping cart and hotline */}

          <div className='flex items-center justify-between gap-16'>
            <HeaderTopItem
              icon={<PhoneFilled className='text-[30px] text-orange-500' />}
              title="Hotline"
              subTitle="0974 644 973"
              cart={false}
            />
            <HeaderTopItem
            className="cursor-pointer"
              icon={<ShoppingCartOutlined className='text-[42px] text-orange-500' />}
              title="Giỏ Hàng"
              subTitle="Sản Phẩm"
              cartContent={0}
              cart={true}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default TopHeader;
