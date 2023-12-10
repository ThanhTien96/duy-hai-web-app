'use client';

import { IOrderPayload } from '@/@types/order';
import { PaymentForm, PaymentItemInfo } from '@/components/PaymentPage';
import { IPaymentFormValue } from '@/components/PaymentPage/PaymentForm';
import { LoadingClient } from '@/components/global';
import { Wrapper } from '@/components/shared';
import { PageService } from '@/services';
import { useAppDispatch, useAppSelector } from '@/store';
import { setAlert, setAppLoading } from '@/store/app/appSlice';
import { IProductCart, resetCart } from '@/store/cart/cartSlice';
import { fetchProvincesThunk } from '@/store/location/locationThunk';
import {
  EPaymentMethod,
  fetchPaymentInfoThunk,
  setPaid,
} from '@/store/payment/paymentSlice';
import { CreditCardOutlined, HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Spin } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Home() {
  const dispatch = useAppDispatch();
  const { paymentMethod } = useAppSelector((state) => state.payment);
  const { cartList } = useAppSelector((state) => state.cart);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const controller = new AbortController();

  useEffect(() => {
    if (cartList && Array.isArray(cartList) && cartList?.length <= 0) {
      Swal.fire({
        icon: 'warning',
        text: 'Vui lòng chọn sản phẩm',
        confirmButtonText: 'Chọn Sản Phẩm',
        confirmButtonColor: '#ff8027',
        preConfirm: () => {
          router.push('/');
        },
      });
    }
    dispatch(fetchProvincesThunk());
    dispatch(fetchPaymentInfoThunk());
    return () => {
      controller.abort();
    };
  }, []);

  // handle comfirm
  const handleComfirm = (value: IPaymentFormValue) => {
    Swal.fire({
      title: 'Xác Nhận Đặt Hàng ?',
      text: `Đặt hàng với sản phẩm: ${cartList[0].product.tenSanPham}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ff8027',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xác Nhận',
      cancelButtonText: "Nhập Lại Thông Tin",
    }).then((result) => {
      if (result.isConfirmed) {
        handleOrderProduct(value)
      }
    });
  };

  // handle order product
  const handleOrderProduct = async (value: IPaymentFormValue) => {
    if (!paymentMethod)
      dispatch(
        setAlert({
          message: 'vui lòng chọn phương thức thanh toán!',
          status: 'warning',
        }),
      );
    setLoading(true);
    const payloadData: IOrderPayload = {
      tenKhachHang: value.tenKhachHang,
      diaChi: `${value.diaChi} ${value.xa} ${value.huyen} ${value.tinh}`,
      soDT: value.soDT,
      loiNhan: value.loiNhan,
      phuongThucThanhToan: paymentMethod ? paymentMethod : EPaymentMethod.CASH,
      sanPham: cartList.map((ele: IProductCart) => ({
        maSanPham: ele.product.maSanPham,
        soLuong: ele.quantity,
      })),
    };
    try {
      const res = await PageService.orderProduct(
        payloadData,
        controller.signal,
      );

      if (res.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Đặt Hàng Thành Công',
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(setPaid(res.data.data));
        dispatch(resetCart());
        router.push("/cam-on")
      }
    } catch (err: Error | any) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Đặt Hàng Thất Bại',
        confirmButtonText: 'Đặt Lại',
        confirmButtonColor: '#ff8027',
        preConfirm: () => {
          Swal.close();
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Breadcrumb
        className="border-b border-dashed border-gray-border pb-2"
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
                <CreditCardOutlined /> Thanh Toán
              </div>
            ),
          },
        ]}
      />
      <Spin
        spinning={loading}
        size="large"
        indicator={
          <Image
            className="w-full h-full"
            src={'/loading/loading.gif'}
            width={550}
            height={550}
            alt="..."
          />
        }
      >
        <div className="grid grid-cols-12 gap-space-3 mt-8">
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <PaymentForm onSubmit={(value) => handleComfirm(value)} />
          </div>

          {/* payment item info */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <PaymentItemInfo />
          </div>
        </div>
      </Spin>
    </Wrapper>
  );
}
