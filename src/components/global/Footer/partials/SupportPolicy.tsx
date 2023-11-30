import { Title } from '@/components/shared';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type TSupportPolicyProps = {
  className?: string;
};

const SupportPolicy = ({ className }: TSupportPolicyProps) => {
  return (
    <div className={clsx(className)}>
      {/* title */}
      <Title
        level={3}
        className="text-[18px] lg:text-[22px] font-bold mb-2 capitalize border-b border-solid border-gray-border/40 pb-2"
      >
        Thông Tin Liên Hệ
      </Title>

      <ul className="flex flex-col gap-4 items-start list-disc">
        <li>Hướng dẫn mua hàng</li>
        <li>Thanh toán - vận chuyển</li>
        <li>Chính sách mua hàng</li>
        <li>Chính sách hoàn trả</li>
      </ul>
    </div>
  );
};

export default SupportPolicy;
