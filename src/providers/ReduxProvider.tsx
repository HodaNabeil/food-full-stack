






'use client';
import { Provider  } from 'react-redux'
import React from 'react'
import { store } from '@/Redux/store'

export default function ReduxProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
{children}
    </Provider>
  )
}
