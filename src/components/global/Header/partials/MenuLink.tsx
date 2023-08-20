'use client'
import Link from 'next/link'
import React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import clsx from 'clsx'

type MenuLinkProps = {
  link?: string;
  content?: string;
  className?: string;
}

const MenuLink = ({link, content}: MenuLinkProps) => {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <Link 
    className={clsx('text-white capitalize text-[18px]', {
      '!text-yellow-200': link === activeSegment
    })}
    href={link || ''}>{content}</Link>
  )
}

export default MenuLink