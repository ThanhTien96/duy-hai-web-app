import { QuantityItem } from '@/components/ProductDetail/ContentColumn/partials';
import { Title } from '@/components/shared';
import { Image } from 'antd';
import React from 'react';

type TOrderItemProps = {
  image?: string;
  productName?: string;
  originalPrice?: number;
  price?: number;
};

const OrderItem = ({
  image,
  productName,
  originalPrice,
  price,
}: TOrderItemProps) => {
  return (
    <div className='flex items-start gap-8'>
      <Image
        className="object-cover"
        src={image}
        width={100}
        height={100}
        alt="..."
      />
      <div>
        <p className='text-large !font-semibold capitalize'>{productName}</p>
        <p>Giá: <b className='text-app-600'>{price?.toLocaleString()}</b> VNĐ</p>
        <div>
            <QuantityItem className='!w-[50%]' defaultValue={1} />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
