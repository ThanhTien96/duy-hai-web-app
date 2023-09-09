import React from 'react';
import clsx from 'clsx';
type HeaderTopItemProps = {
  icon?: React.ReactNode;
  title?: string;
  subTitle?: string;
  cart?: boolean;
  cartContent?: number;
  className?: string;
  onClick?: () => void;
};

const HeaderTopItem = ({
  icon,
  title,
  subTitle,
  cartContent,
  cart,
  className,
  onClick,
}: HeaderTopItemProps) => {
  return (
    <div 
    onClick={onClick}
    className={clsx("flex gap-2 items-center", className)}>
      <div>{icon}</div>
      <div>
        <p>{title}</p>
        {cart ? (
          <h6 className="font-semibold">
            {cart && (
              <span className="w-5 h-5 bg-app-500 inline-flex items-center justify-center text-white font-medium rounded-full mr-2">
                {cartContent}
              </span>
            )}
            {subTitle}
          </h6>
        ) : (
          <h6 className="font-semibold">
            <a href="tel:+840788246979">{subTitle}</a>
          </h6>
        )}
      </div>
    </div>
  );
};

export default HeaderTopItem;
