import { CogToothIcon } from '@/libIcon';
import React from 'react';

type Props = {};

const IconGroup = (props: Props) => {
  return (
    <div className="relative flex justify-between items-center border border-dashed border-white rounded-full">
      <CogToothIcon width="34px" height="34px" className="text-transparent" />
      <div className="absolute top-[4px] left-[4px]">
        <CogToothIcon width="18px" height="18px" className="text-white" />
      </div>
      <div className='absolute bottom-[4px] right-[4px]'>
        <CogToothIcon width="16px" height="16px" className="text-white" />
      </div>
    </div>
  );
};

export default IconGroup;
