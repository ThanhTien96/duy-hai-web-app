'use client';
import { SearchInput, Wrapper } from '@/components/shared';
import { PhoneFilled, ShoppingCartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Input, Modal } from 'antd';
import HeaderTopItem from './partials/HeaderTopItem';
import { EMPTY_IMAGE, pagePath } from '@/constants';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store';
import { IProductCart } from '@/store/cart/cartSlice';
import Cart from './partials/Cart';
import { ButtonShared } from '..';
import { useRouter } from 'next/navigation';
import { setAlert } from '@/store/app/appSlice';

const { Search } = Input;

type TTopHeaderProps = {
  logo?: string;
};

const TopHeader = ({ logo }: TTopHeaderProps) => {
  const dispatch = useAppDispatch();
  /** handle search function */
  const onSearch = (value: string) => console.log(value);
  const { cartList } = useAppSelector((state) => state.cart);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [openCart, setOpenCart] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (cartList) {
      const value = cartList.length > 0 ? cartList?.reduce((prev: number, crr: IProductCart) => {
        return prev + crr.quantity;
      }, 0) : 0;
      setCartQuantity(value);
    }
  }, [cartList]);

  return (
    <div>
      <Wrapper className="!py-4">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full overflow-hidden !cursor-pointer">
            <Link className="" href="/">
              <Image
                className="w-full h-full object-contain"
                src={logo ?? EMPTY_IMAGE}
                alt="hai tra tan logo"
                width={0}
                height={0}
              />
            </Link>
          </div>
          {/* search engine */}
          <div className="max-xs:hidden sm:hidden max-sm:hidden md:hidden lg:block">
            <SearchInput
              width={400}
              placeholder="Nhập Từ Khoá"
              onSearch={onSearch}
            />
          </div>
          {/* shopping cart and hotline */}

          <div className="flex items-center justify-between gap-16">
            <HeaderTopItem
              icon={<PhoneFilled className="text-[30px] text-app-500" />}
              title="Hotline"
              subTitle="0974 644 973"
              className="max-xs:hidden sm:hidden max-sm:hidden md:hidden lg:flex"
              cart={false}
            />
            <HeaderTopItem
              onClick={() => setOpenCart((current) => !current)}
              className="cursor-pointer"
              icon={
                <ShoppingCartOutlined className="text-[32px] lg:text-[42px] text-app-500" />
              }
              title="Giỏ Hàng"
              subTitle="Sản Phẩm"
              cartContent={cartQuantity}
              cart={true}
            />
          </div>
        </div>
      </Wrapper>
      {/* cart */}
      <Modal
        title="Giỏ Hàng"
        rootClassName="!p-0"
        open={openCart}
        onCancel={() => setOpenCart(false)}
        footer={[
          cartList && cartList.length > 0 && <ButtonShared
            onClick={() => {
              if(cartList.length > 0) {
                router.push(`/${pagePath.payment}`);
              } else {
                dispatch(setAlert({message:"Vui lòng chọn sản phẩm trước khi thanh toán!", status: "error"}))
              }
              setOpenCart(false);
            }}
            key={'Payment'}
            content="Thanh Toán"
          />,
        ]}
      >
        <Cart />
      </Modal>
    </div>
  );
};

export default TopHeader;
