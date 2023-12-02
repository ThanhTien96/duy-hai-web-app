import Image from 'next/image'
import React from 'react'


const SectionLoading = () => {
  return (
    <div className='absolut top-0 left-0 w-full h-full flex items-center justify-center bg-white'>
        <Image src={'/loading/loading.gif'} alt='loading' width={80} height={80}/>
    </div>
  )
}

export default SectionLoading