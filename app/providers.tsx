'use client'

import { ThemeProvider as Theme } from 'styled-components'
import { ReactNode } from 'react'
import { theme } from '../components/Theme/theme'
import { Global } from '../styles/globalStyles'

type Props = {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  return (
    <Theme theme={theme}>
      <Global />
      {children}
    </Theme>
  )
}
