"use client"

import { IMainCategory, ISubCategory } from '@/@types/global';
import { PAGE_SIZE } from '@/constants';
import { PageService } from '@/services';
import { stringToSlug } from '@/utils/common';
import React from 'react'

type Props = {
    data: any;
}

const DrashLog = (props: Props) => {
  console.log("☣️ >>> DrashLog >>> props: ", props.data)
  return (
    <div></div>
  )
}

export default DrashLog