'use client'

import { ReactNode } from 'react'
import { Global } from '../styles/globalStyles'

type Props = {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  return (
    <>
      <Global />
      {children}
    </>
  )
}
