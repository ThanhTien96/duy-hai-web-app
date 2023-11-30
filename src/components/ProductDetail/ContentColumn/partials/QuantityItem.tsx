"use client"

import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
import clsx from 'clsx';
import React, { useState } from 'react';

type TQuantityItemProps = {
  className?: string;
  defaultValue?: string;
  onIncrease?: (value: number) => void;
};

const QuantityItem = ({ className }: TQuantityItemProps) => {
    const [quantity, setQuantity] = useState<number>(1)

  return (
    <div className={clsx(className)}>
      <InputNumber
      className='text-large'
        addonBefore={<PlusOutlined className='flex items-center justify-center' onClick={() => {
            setQuantity(current => current + 1)
        }} />}
        addonAfter={<MinusOutlined className={clsx('flex items-center justify-center') }onClick={() => {
            if(quantity > 1) {
                setQuantity(current => current - 1)
            }
        }} />}
        value={quantity}
        controls
      />
    </div>
  );
};

export default QuantityItem;
