import clsx from 'clsx';
import React from 'react';

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <section className={clsx('container mx-auto py-8 lg:py-14', className)}>
      <div>{children}</div>
    </section>
  );
};

export default Wrapper;
