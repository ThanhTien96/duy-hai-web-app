"use client"
import Image from 'next/image'
import React from 'react'

type Props = {}

const LoadingClient = (props: Props) => {
  return (
    <div className='absolute top-0 left-0 bg-white/70 overflow-hidden h-[100vh] w-full flex items-center justify-center'>
        <Image src={'/loading/loading.gif'} width={100} height={100} alt='...'/>
    </div>
  )
}

export default LoadingClient