'use client'
import { useAppSelector } from '@/store'
import Image from 'next/image'
import React from 'react'

type Props = {}

const LoadingProvider = (props: Props) => {
    const {loading} = useAppSelector(state => state.app);

  return (
    loading && <div
      className="fixed top-0 !m-0 left-0 w-full h-[100vh] bg-white flex items-center justify-center overflow-hidden"
      style={{ zIndex: 100000 }}
    >
      <div>
        <Image
          src={'/loading/loading.gif'}
          alt="loading icon"
          width={100}
          height={100}
        />
        <p>Loading ...</p>
      </div>
    </div>
  )
}

export default LoadingProvider