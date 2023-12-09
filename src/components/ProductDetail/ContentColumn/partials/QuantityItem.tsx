"use client"

import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

type TQuantityItemProps = {
  className?: string;
  defaultValue: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  size?: SizeType
};

const QuantityItem = ({ className, onDecrease, onIncrease, defaultValue,size="middle" }: TQuantityItemProps) => {
    const [quantity, setQuantity] = useState<number>(defaultValue);

    useEffect(() => {
      setQuantity(defaultValue)
    },[defaultValue])

  return (
    <div className={clsx(className, "product-quantity" )}>
      <InputNumber 
      size={size}
        addonBefore={<MinusOutlined className={clsx('flex items-center justify-center w-full h-full') } onClick={onDecrease} />}
        addonAfter={
          <PlusOutlined className='flex items-center justify-center' onClick={onIncrease} />}
        value={quantity}
        controls
      />
    </div>
  );
};

export default QuantityItem;
