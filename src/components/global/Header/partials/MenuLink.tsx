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
    className={clsx('text-white capitalize xl:text-[18px] lg:text-[14px]', {
      '!text-menu-active': link === activeSegment || (link === '/' && !activeSegment)
    })}
    href={link || ''}>{content}</Link>
  )
}

export default MenuLink