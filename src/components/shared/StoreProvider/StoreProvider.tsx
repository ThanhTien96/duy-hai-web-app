"use client"

import store from '@/store';
import React from 'react'
import { Provider } from 'react-redux';

type StoreProvider = {
    children: React.ReactNode;
}

const StoreProvider = ({children}: StoreProvider) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default StoreProvider