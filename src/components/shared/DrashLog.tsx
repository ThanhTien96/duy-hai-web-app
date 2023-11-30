"use client"

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