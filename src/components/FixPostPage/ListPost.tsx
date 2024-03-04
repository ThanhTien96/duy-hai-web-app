import { IFixPost } from '@/@types/fixpost';
import { EMPTY_IMAGE } from '@/constants';
import Image from 'next/image';
import React from 'react';
import Markdown from '../global/Markdown';

type IListPostProps = {
  data: IFixPost;
  changePost: (id: string) => void;
};

const ListPost = ({ data, changePost }: IListPostProps) => {
  return (
    <div 
    onClick={() => changePost(data.maBaiViet)}
    className="h-[120px] flex items-center gap-3">
      <div className="w-[30%] h-inherit overflow-hidden">
        <Image
          className="w-full h-full"
          src={data.hinhAnh[0].hinhAnh ?? EMPTY_IMAGE}
          alt={data.tieuDe}
          width={0}
          height={0}
        />
      </div>
      <div className="w-[70%]">
        <h1 className="line-clamp-2 hover:text-app-600 transition-all duration-200 cursor-pointer">{data.tieuDe}</h1>
        <Markdown className='fixpostItem line-clamp-3 mt-2' content={data.noiDung} />
      </div>
    </div>
  );
};

export default ListPost;
