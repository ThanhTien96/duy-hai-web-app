'use client'
import Link from 'next/link'
import React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import clsx from 'clsx'

type MenuLinkProps = {
  link?: string;
  content?: string;
  className?: string;
  onClick?: () => void;
}

const MenuLink = ({link, content, onClick}: MenuLinkProps) => {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Link 
    onClick={onClick}
    className={clsx('text-white capitalize xl:text-[14px] lg:text-[14px]', {
      '!text-menu-active': link === activeSegment || (link === '/' && !activeSegment)
    })}
    href={link || ''}>{content}</Link>
  )
}

export default MenuLink