

import clsx from 'clsx';
import React from 'react'

type WrapperProps = {
    children: React.ReactNode,
    className?: string;
}

const Wrapper = ({children, className}: WrapperProps) => {
  return (
    <section className={clsx('container mx-auto py-8', className)}>
        {children}
    </section>
  )
}

export default Wrapper