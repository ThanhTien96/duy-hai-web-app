import { IFixPost } from '@/@types/fixpost'
import React from 'react'
import Markdown from '../global/Markdown';
import moment from 'moment';

type IMainPostProps = {
    data: IFixPost;
}

const MainPost = ({data}: IMainPostProps) => {
  return (
    <div>
        <h1 className='text-[24px] font-semibold'>{data.tieuDe}</h1>
        <span className='text-gray-400'>Ngày Đăng: {moment(data.createAt).format("DD-MM-YYYY")}</span>
        <Markdown className='fixpost' content={data.noiDung} />
    </div>
  )
}

export default MainPost