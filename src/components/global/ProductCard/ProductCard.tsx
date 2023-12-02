import sharedContent from '@/utils/shared';
import Image from 'next/image';
import React from 'react';
import { ButtonShared } from '..';
import { ButtonType } from '../ButtonShared/Index';
import styles from './ProductCard.module.scss';
import clsx from 'clsx';
import CartIcon from '@/libIcon/CartIcon';
import calculator from '@/utils/calculator';
import { useRouter } from 'next/navigation';

type ProductCardProps = {
  id?: string;
  image?: string;
  title?: string;
  discountPrice?: number;
  price?: number;
  onClick?: () => void;
  className?: string;
};

const ProductCard = ({
  id,
  image,
  title,
  discountPrice,
  price,
  onClick,
  className
}: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(className,
        'border border-solid border-gray-border bg-white rounded-md',
        styles.cardItem,
      )}
    >
      {calculator.calcPercent(price ?? 0, discountPrice ?? 0) > 0 && (
        <div className={styles.cardDiscount}>
          <div className={styles.cardDiscountStick}></div>
          <span>-{calculator.calcPercent(price ?? 0, discountPrice ?? 0)}%</span>
        </div>
      )}
      <div className="h-[100px] md:h-[130px] lg:h-[160px] w-full overflow-hidden rounded-t-md">
        <Image
          className="w-full h-full object-cover hover:scale-110 transition-all duration-300 cursor-pointer"
          src={image ?? sharedContent.emtyImage}
          alt="..."
          width={0}
          height={0}
        />
      </div>
      {/* bottom card */}
      <div className="p-2 pb-4 flex flex-col h-[190px] lg:h-[160px] justify-between">
        {/* card content */}
        <div className="text-center">
          <h1 className="text-[12px] lg:text-[14px] font-semibold capitalize line-clamp-2 overflow-hidden transition-all duration-300 hover:text-app-500 cursor-pointer">
            {title}
          </h1>
        </div>
        {/* Price */}
        <div className="max-xs:block lg:flex items-center justify-center gap-1 pb-4 lg:mt-4">
          <span className="text-[10px] lg:text-[12px] font-semibold text-sub-text line-through">
            {price?.toLocaleString()} VNĐ
          </span>
          <p className="font-semibold text-[12px] lg:text-[14px]">
            Giá:{' '}
            <span className="text-error">
              {discountPrice?.toLocaleString()} VNĐ
            </span>
          </p>
        </div>
        {/* button action */}
        <div className="xs:block lg:flex justify-between items-center">
          <ButtonShared
            className={'block lg:inline-block w-full lg:w-auto'}
            size={ButtonType.MEDIUM}
            content={
              <span className="flex items-center justify-center gap-2">
                <CartIcon width="15px" height="15px" />
                <span>Mua Hàng</span>
              </span>
            }
          />
          <ButtonShared
            className={clsx(
              'mt-2 lg:mt-0 block lg:inline-block w-full lg:w-auto',
            )}
            size={ButtonType.MEDIUM}
            content="Xem Chi Tiết"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
