'use client'
import { useAppSelector } from '@/store'
import { App } from 'antd'
import React, { useEffect } from 'react'
import { message as _message } from 'antd'

type TMessagesProviderProps = {

}

function MessagesProvider(props: TMessagesProviderProps) {

    const {message, status, logs} = useAppSelector(state => state.app)

    const messageOptions = {
        error: _message.error,
        warning: _message.warning,
        info: _message.info,
        success: _message.success,
    }

    useEffect(() => {
        if(message !== "N/A") {
            messageOptions[status](message, 0.9)
        }
    },[logs])

  return <>
  </>
}

export default MessagesProvider