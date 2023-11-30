import { IProduct } from '@/@types/product';
import { Title } from '@/components/shared';
import clsx from 'clsx';
import React from 'react';
import { QuantityItem } from './partials';
import { ButtonShared } from '@/components/global';

type TContentDetailProps = {
  className?: string;
  data?: IProduct;
};

const ContentDetail = ({ data, className }: TContentDetailProps) => {
  return (
    <div className={clsx(className)}>
      <Title className="heading5" level={3}>
        {data?.tenSanPham}
      </Title>
      <div className='flex items-center gap-4 border-b border-solid border-gray-border py-2'>
        <p>
          Thương Hiệu:{' '}
          <span className="text-app-600 uppercase">
            {data?.danhMucNho?.tenDanhMucNho}
          </span>
        </p>
        <div className='w-[1px] h-[20px] bg-gray-border'></div>
        <p>
          Tình Trạng:{' '}
          <span className="text-app-600 capitalize">
            {data && data?.tongSoLuong > 0 ? "Còn Hàng" : "Hết Hàng"}
          </span>
        </p>
      </div>
      {/* detail */}
      <div>
        <p className='text-medium py-4'>{data?.moTaNgan}</p>
      </div>
      {/* price */}
      <div className='bg-gray-border/60 py-1 px-4 my-4'>
        <p className='heading6 text-app-600'>{data?.giaGiam.toLocaleString()} VNĐ</p>
      </div>
      {/* quantity */}
      <div className='flex items-center gap-4 my-6'>
        <p className='text-large'>Số Lượng: </p>
        <QuantityItem className='w-[40%]' />
      </div>
      {/* action */}
      <div className='flex items-center gap-6'>
        <ButtonShared className='w-1/2' content="Thêm Giỏ Hàng" />
        <ButtonShared className='w-1/2' content="Mua Hàng" />
      </div>
    </div>
  );
};

export default ContentDetail;
