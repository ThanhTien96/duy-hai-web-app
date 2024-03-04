"use client"

import { IFixPost } from '@/@types/fixpost';
import React, { useEffect, useState } from 'react'
import MainPost from './MainPost';
import ListPost from './ListPost';

type IFixPostProviderProps = {
    mainPost: IFixPost;
    postList: IFixPost[];
}

const FixPostProvider = ({mainPost, postList}: IFixPostProviderProps) => {
    const [postBase, setPostBase] = useState<IFixPost>(mainPost)
    const [postLists, setPostLists] = useState<IFixPost[]>([]);

    useEffect(() => {
        const filterList = postList.filter(ele => ele.maBaiViet !== postBase.maBaiViet);
        setPostLists(filterList)
    },[postBase])

    // handle setPostBase 
    const handleSetPostBase = (id: string) => {
        const newBasePost = postLists.find((ele: IFixPost) => ele.maBaiViet === id);
        if(newBasePost) setPostBase(newBasePost)
     
    }

  return (
    <div className="grid grid-cols-12 gap-4">
        <div className='col-span-12 lg:col-span-7'>
          <MainPost data={postBase} />
        </div>
        <div className='col-span-12 lg:col-span-5 flex flex-col gap-5'>
            {
                postLists && Array.isArray(postLists) && postLists.map((ele: IFixPost) => <ListPost changePost={handleSetPostBase} key={ele.maBaiViet} data={ele} />)
            }
        </div>
      </div>
  )
}

export default FixPostProvider